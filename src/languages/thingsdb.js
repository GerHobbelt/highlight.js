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
                className: 'build_in',
                beginKeywords: 'assert assert_err auth_err backup_info backups_info ' +
                'bad_data_err bool closure collection_info collections_info ' +
                'counters deep del_backup del_collection del_expired del_node ' +
                'del_procedure del_token del_type del_user err float ' +
                'forbidden_err grant int isarray isascii isbool isbytes iserr ' +
                'isfloat isinf isint islist isnan isnil israw isset isstr ' +
                'isthing istuple isutf8 list lookup_err max_quota_err mod_type new ' +
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
                    '\\.\\s*(len|call|doc|code|msg|extend|filter|find|' +
                    'findindex|indexof|map|pop|push|remove|sort|splice|' +
                    'add|has|contains|endswith|lower|startswith|test|upper|' +
                    'del|get|id|keys|set|values|wrap|unwrap)\\s*(?=\\()'),
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
