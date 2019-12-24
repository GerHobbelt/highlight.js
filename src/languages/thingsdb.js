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
        begin: new RegExp('(/[^/\\\\\\n]*(?:\\\\.[^/\\\\]*)*/i?)'),
        relevance: 0,
    }

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
                className: 'function',
                begin: new RegExp(
                    '\\b(' +
                    /* collection functions */
                    'assert|base64_encode|base64_decode|bool|bytes|' +
                    'deep|del_type|err|float|has_type|if|int|isarray|' +
                    'isascii|isbool|isbytes|iserr|isfloat|isinf|isint|' +
                    'islist|isnan|isnil|israw|isset|isstr|isthing|istuple|' +
                    'isutf8|list|mod_type|new|new_type|now|raise|rand|' +
                    'randint|refs|return|set|set_type|str|thing|try|type|' +
                    'type_count|type_info|types_info|wse|' +
                    /* node functions */
                    'backup_info|backups_info|counters|del_backup|' +
                    'has_backup|new_backup|node_info|nodes_info|' +
                    'reset_counters|set_log_level|shutdown|' +
                    /* thingsdb functions */
                    'collection_info|collections_info|del_collection|' +
                    'del_expired|del_node|del_token|del_user|grant|' +
                    'has_collection|has_node|has_token|has_user|' +
                    'new_collection|new_node|new_token|new_user|' +
                    'rename_collection|rename_user|revoke|set_password|' +
                    'user_info|users_info|' +
                    /* procedure functions */
                    'del_procedure|has_procedure|new_procedure|' +
                    'procedure_doc|procedure_info|procedures_info|run|' +
                    /* error functions */
                    'assert_err|auth_err|bad_data_err|forbidden_err|' +
                    'lookup_err|max_quota_err|node_err|num_arguments_err|' +
                    'operation_err|overflow_err|syntax_err|type_err|' +
                    'value_err|zero_div_err' +
                    /* end */
                    ')\\s*(?=\\()'
                )
            },
            {
                className: 'function',
                begin: new RegExp(
                    '\\.\\s*(len|call|doc|code|msg|extend|filter|find|' +
                    'findindex|indexof|map|pop|push|remove|sort|splice|' +
                    'add|has|contains|endswith|lower|startswith|test|upper|' +
                    'del|get|id|keys|set|values|wrap|unwrap)\\s*(?=\\()'
                ),
            },
            {
                className: 'attr',
                begin: /\.[A-Za-z_][0-9A-Za-z_]*/
            },
            {
                className: 'variable',
                begin: /[A-Za-z_][0-9A-Za-z_]*/
            },
        ],
    };
  }
