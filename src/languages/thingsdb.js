/*
Language: ThingsDB
Author: Jeroen van der Heijden <jeroen@transceptor.technology>
Category: common, scripting
Website: https://thingsdb.net
*/

function(hljs) {
    var STRINGS = {
        className: 'string',
        variants: [{
            begin: '"', end: '"',
            illegal: '\\n',
        }, {
            begin: '\'', end: '\'',
            illegal: '\\n',
        }]
    };

    var NUMBERS = {
      className: 'number',
      variants: [
        { begin: /[-+]?0b[01]+/ },
        { begin: /[-+]?0o[0-8]+/ },
        { begin: /([-+]?0x[0-9a-fA-F]+)/ },
        { begin: /[-+]?[0-9]+/ },
        { begin: /[-+]?((inf|nan)([^0-9A-Za-z_]|$)|[0-9]*\.[0-9]+(e[+-][0-9]+)?)/ },
      ],
      relevance: 0
    };

    var COMMENTS = {
        className: 'doc',
        variants: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
        ]
    };

    var REGEXP = {
        className: 'regexp',
        begin: /\//, end: /\/i?/,
        illegal: /\n/,
        contains: [
            hljs.BACKSLASH_ESCAPE,
            {
                begin: /\[/, end: /\]/,
                relevance: 0,
                contains: [hljs.BACKSLASH_ESCAPE]
            }
        ]
    }

    var PARAMS = {
        className: 'params',
        begin: /\(/, end: /\)/,
        contains: ['self']
    };

    return {
        aliases: ['ti'],
        contains: [
            COMMENTS,
            STRINGS,
            NUMBERS,
            REGEXP,
            {
                className: 'symbol',
                begin: /#[0-9]+/
            },
            {
                className: 'literal',
                beginKeywords: 'true false nil'
            },
            {
                className: 'build_in',
                beginKeywords: 'array assert assert_err auth_err backup_info backups_info ' +
                'bad_data_err bool closure collection_info collections_info ' +
                'counters deep del_backup del_collection del_expired del_node ' +
                'del_procedure del_token del_type del_user err float ' +
                'forbidden_err grant int isarray isascii isbool isbytes iserr ' +
                'isfloat isinf isint islist isnan isnil israw isset isstr ' +
                'isthing istuple isutf8 lookup_err max_quota_err mod_type new ' +
                'new_backup new_collection new_node new_procedure new_token ' +
                'new_type new_user node_err node_info nodes_info now ' +
                'num_arguments_err operation_err overflow_err procedure_doc ' +
                'procedure_info procedures_info raise refs rename_collection ' +
                'rename_user reset_counters return revoke run set_log_level set ' +
                'set_quota set_type shutdown str syntax_err thing try type ' +
                'type_err type_count type_info types_info user_info users_info ' +
                'value_err wse zero_div_err',
            },
            {
                className: 'function',
                begin: new RegExp(
                    '\\.(add|call|contains|del|endswith|extend|filter|find|' +
                    'findindex|get|has|id|indexof|keys|len|lower|map|pop|' +
                    'push|remove|set|sort|splice|startswith|test|unwrap|' +
                    'upper|values|wrap)'),
            },
            {
                className: 'attr',
                begin: /\.[A-Za-z_][0-9A-Za-z_]*/
            },
            {
                className: 'variable',
                begin: /[A-Za-z_][0-9A-Za-z_]*/
            },
            {
                begin: /\b(print|exec)\(/ // don’t highlight keywords-turned-functions in Python 3
            }
        ],

    };
  }
