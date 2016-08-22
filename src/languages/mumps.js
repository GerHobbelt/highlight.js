/*
Language: MUMPS
Author: Greg Weisbrod <greg.weisbrod@gmail.com>
Category: system
Description: Non-relational database and programming language. See http://mumps.sourceforge.net/docs.html or https://www.fisglobal.com/Solutions/Services/Database-Engine for more information
*/

function(hljs) {
	
	var MUMPS_KEYWORDS = "b break c close d do e else f for g goto h halt hang i if " +
		"j job k kill l lock m merge n new o open q quit r read s set u use v view " +
		"w write x xecute";

	var MUMPS_BUILT_INS = "$a $ascii $c $char $d $data $device $ec $ecode $es $estack " +
		"$et $etrap $e $extract $f $find $fn $fnumber $g $get $h $horolog $i $io " +
		"$j $job $justify $k $key $l $length $n $name $o $order $p $piece $principal " +
		"$ql $qlength $qs $qsubscript $q $query $quit $r $random $reference $s $select " +
		"$storage $st $stack $sy $system $t $test $text $tr $translate $v $view $x $y";

	var MUMPS_STRING = {
		className: "string",
		begin: /"/,
		end: /"/,
		relevance: 0,
		contains: [
			{
				// Escape sequence for " is "" in MUMPS....
				begin: /""/
			}
		]
	};

	return {
		aliases: ["m", "cache", "caché", "gtm", "gt.m"],
		case_insensitive: true, // TODO this makes everything case insensitive, but it's only commands and built-ins that are
		lexemes: /\$?[a-zA-Z]+/, // TODO this does not account for keywords used as variables or $$order
		keywords: {
			// Because MUMPS keywords are actually not reserved, we need to special case them as modes
			built_in: MUMPS_BUILT_INS
		},
		illegal: /^\s*$/,
		contains: [
			hljs.COMMENT(/;/, /$/),
			{
				// These are actually NOT regular expressions but
				// rather MUMPS patterns. MUMPS has no support for regexps. 
				// However, MUMPS patterns are used for essentially the same
				// purposes as regexps so it's fairly close.
				className: "regexp",
				begin: /\?/,
				end: /[\s$]/,
				excludeEnd: true,
				contains: [MUMPS_STRING]
			},
			MUMPS_STRING,
			{
				// These are MUMPS globals - not actually
				// "global" variables but rather variables
				// written to disk as part of the database.
				className: "variable",
				begin: /\^[%a-zA-Z]/,
				end: /[\(\s$]/,
				relevance: 8,
				excludeEnd: true
			},
			{
				className: "number",
				relevance: 0,
				variants: [
					{
						begin: /\d+E-?\d+/,
						relevance: 5
					},
					{
						begin: hljs.NUMBER_RE
					}
				]
			},
			{
				begin: /(^\s|^|\s\s)/,
				end: /[\s$:]/,
				contains: [
					{
						className: "keyword",
						begin: new RegExp("(" + MUMPS_KEYWORDS.split(" ").join("|") + ")(?=\\s|$|:)"),
						end: /[\s$:]/,
						excludeEnd: true
					}
				]
			},
			/*
			{
				begin: /^/,
				end: /[\s$]/,
				contains: [
					/*
					{
						className: "keyword",
						begin: new RegExp("(" + MUMPS_KEYWORDS.split(" ").join("|") + ")(?=\\s|$|:)"),
						end: /[\s$:]/,
						excludeEnd: true
					},
					{
						begin: new RegExp("(?!" + MUMPS_KEYWORDS.split(" ").join("[\\s$:]|") + ")"),
						end: /[\s$]/,
						contains: [
							{
								className: "function",
								begin: /^[%a-zA-Z]/,
								end: /[\s$]/,
								excludeEnd: true,
								contains: [
									{
										className: "params",
										begin: /\(/,
										end: /\)/
									}
								]
							}
						]
					}
				]
			},
			*/
		]
	};
}

