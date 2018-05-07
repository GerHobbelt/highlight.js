/*
Language: T-SQL
Category: common
Description: Transact SQL language as used in Microsoft SQL Server product line.
*/

function language_T_SQL(hljs) {
  var COMMENT_MODE = hljs.COMMENT('--', '\n|$');
  return {
    case_insensitive: true,
    illegal: '[^\\s]',
    contains: [
      {
        className: 'operator',
        begin: '(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b', 
        end: ';|$',
        keywords: {
          'keyword': {
            'partial': 1, 'global': 1, 'month': 1,
            'current_timestamp': 1, 'using': 1, 'go': 1, 'revoke': 1,
            'smallint': 1, 'indicator': 1, 'end-exec': 1, 'disconnect': 1,
            'zone': 1, 'with': 1, 'character': 1, 'assertion': 1, 'to': 1,
            'add': 1, 'current_user': 1, 'usage': 1, 'input': 1, 'local': 1,
            'alter': 1, 'match': 1, 'collate': 1, 'real': 1, 'then': 1,
            'rollback': 1, 'get': 1, 'read': 1, 'timestamp': 1,
            'session_user': 1, 'integer': 1, 'bit': 1, 'unique': 1,
            'day': 1, 'minute': 1, 'desc': 1, 'insert': 1, 'execute': 1,
            'ilike': 2, 'level': 1, 'decimal': 1, 'drop': 1,
            'continue': 1, 'isolation': 1, 'found': 1, 'where': 1,
            'constraints': 1, 'domain': 1, 'right': 1, 'national': 1,
            'module': 1, 'transaction': 1, 'relative': 1, 'second': 1,
            'connect': 1, 'escape': 1, 'close': 1, 'system_user': 1, 'for': 1,
            'deferred': 1, 'section': 1, 'cast': 1, 'current': 1, 'sqlstate': 1,
            'allocate': 1, 'intersect': 1, 'deallocate': 1, 'numeric': 1,
            'public': 1, 'preserve': 1, 'full': 1, 'goto': 1, 'initially': 1,
            'asc': 1, 'no': 1, 'key': 1, 'output': 1, 'collation': 1, 'group': 1,
            'by': 1, 'union': 1, 'session': 1, 'both': 1, 'last': 1,
            'language': 1, 'constraint': 1, 'column': 1, 'of': 1, 'space': 1,
            'foreign': 1, 'deferrable': 1, 'prior': 1, 'connection': 1,
            'unknown': 1, 'action': 1, 'commit': 1, 'view': 1,
            'first': 1, 'into': 1, 'float': 1, 'year': 1, 'primary': 1,
            'cascaded': 1, 'except': 1, 'restrict': 1, 'set': 1, 'references': 1,
            'names': 1, 'table': 1, 'open': 1, 'select': 1,
            'size': 1, 'are': 1, 'rows': 1, 'from': 1, 'prepare': 1,
            'distinct': 1, 'leading': 1, 'create': 1, 'only': 1, 'next': 1,
            'inner': 1, 'authorization': 1, 'schema': 1, 'corresponding': 1,
            'option': 1, 'declare': 1, 'precision': 1, 'immediate': 1, 'else': 1,
            'timezone_minute': 1, 'external': 1, 'varying': 1, 'translation': 1,
            'true': 1, 'case': 1, 'exception': 1, 'hour': 1,
            'default': 1, 'double': 1, 'scroll': 1, 'value': 1, 'cursor': 1,
            'descriptor': 1, 'values': 1, 'dec': 1, 'fetch': 1, 'procedure': 1,
            'delete': 1, 'false': 1, 'int': 1, 'is': 1, 'describe': 1,
            'char': 1, 'as': 1, 'at': 1, 'varchar': 1,
            'trailing': 1, 'absolute': 1, 'current_time': 1, 'end': 1,
            'grant': 1, 'privileges': 1, 'when': 1, 'check': 1,
            'write': 1, 'current_date': 1, 'pad': 1, 'begin': 1, 'temporary': 1,
            'exec': 1, 'time': 1, 'update': 1, 'catalog': 1, 'user': 1, 'sql': 1,
            'date': 1, 'on': 1, 'identity': 1, 'timezone_hour': 1, 'natural': 1,
            'whenever': 1, 'interval': 1, 'work': 1, 'order': 1, 'cascade': 1,
            'diagnostics': 1, 'nchar': 1, 'having': 1, 'left': 1, 'call': 1,
            'do': 1, 'handler': 1, 'load': 1, 'replace': 1, 'truncate': 1,
            'start': 1, 'lock': 1, 'show': 1, 'pragma': 1,
            'bigint': 1, 'tinyint': 1, 'money': 1, 'smallmoney': 1, 'datetime': 1,
            'smalldatetime': 1, 'text': 1, 'nvarchar': 2, 'ntext': 2, 'binary': 1,
            'varbinary': 2, 'image': 1, 'sql_variant': 2, 'uniqueidentifier': 2,
            'admin': 1, 'after': 1, 'alias': 1, 'array': 1, 'backup': 1,
            'before': 1, 'blob': 1, 'boolean': 1, 'breadth': 1, 'break': 1,
            'browse': 1, 'bulk': 1, 'check': 1, 'checkpoint': 1, 'class': 1,
            'clob': 1, 'clustered': 1, 'coalesce': 1, 'completion': 1, 'compute': 1,
            'constructor': 1, 'contains': 1, 'containstable': 1, 'convert': 1,
            'cube': 1, 'current_path': 2, 'current_role': 2, 'cycle': 1, 'data': 1,
            'database': 1, 'dbcc': 1, 'deny': 1, 'depth': 1, 'deref': 1, 'destroy': 1,
            'destructor': 1, 'deterministic': 1, 'dictionary': 1, 'disk': 1,
            'distributed': 1, 'dummy': 1, 'dump': 1, 'dynamic': 1, 'each': 1,
            'equals': 1, 'errlvl': 1, 'every': 1, 'exit': 1, 'file': 1, 'fillfactor': 1,
            'free': 1, 'freetext': 1, 'freetexttable': 1, 'function': 1, 'general': 1,
            'grouping': 1, 'holdlock': 1, 'host': 1, 'identity_insert': 2,
            'identitycol': 2, 'if': 1, 'ignore': 1, 'index': 1, 'initialize': 1,
            'inout': 1, 'iterate': 1, 'kill': 1, 'large': 1, 'lateral': 1,
            'localtime': 1, 'localtimestamp': 1, 'locator': 1, 'map': 1, 'modifies': 1,
            'modify': 1, 'nclob': 1, 'new': 1, 'nocheck': 1, 'nonclustered': 1,
            'none': 1, 'nullif': 1, 'object': 1, 'off': 1, 'offsets': 1, 'old': 1,
            'opendatasource': 2, 'openquery': 2, 'openrowset': 2, 'openxml': 2,
            'operation': 1, 'ordinality': 1, 'out': 1, 'over': 1, 'parameter': 1,
            'parameters': 1, 'path': 1, 'percent': 1, 'plan': 1, 'postfix': 1,
            'precision': 1, 'prefix': 1, 'preorder': 1, 'prepare': 1, 'preserve': 1,
            'primary': 1, 'print': 1, 'prior': 1, 'proc': 1, 'raiserror': 1, 'reads': 1,
            'readtext': 1, 'reconfigure': 1, 'recursive': 1, 'ref': 1, 'referencing': 1,
            'replication': 1, 'restore': 1, 'result': 1, 'return': 1, 'returns': 1,
            'rollup': 1, 'routine': 1, 'row': 1, 'rowguidcol': 2, 'rule': 1, 'save': 1,
            'savepoint': 1, 'scope': 1, 'search': 1, 'sequence': 1, 'sets': 1,
            'setuser': 1, 'shutdown': 1, 'specific': 1, 'specifictype': 2,
            'sqlexception': 1, 'sqlwarning': 1, 'state': 1, 'statement': 1, 'static': 1,
            'statistics': 1, 'structure': 1, 'terminate': 1, 'textsize': 1, 'than': 1,
            'top': 1, 'tran': 1, 'treat': 1, 'trigger': 1, 'tsequal': 1, 'under': 1,
            'unnest': 1, 'updatetext': 1, 'use': 1, 'variable': 1, 'waitfor': 1,
            'while': 1, 'without': 1, 'writetext': 1, 'uncommitted': 1, 'nocount': 1
          },
          'aggregate': {
            'count': 1, 'sum': 1, 'min': 1, 'max': 1, 'avg': 1
          },
          'function': {
            '@@datefirst': 5, '@@options': 5, '@@dbts': 5,
            '@@remserver': 5, '@@langid': 5, '@@servername': 5, '@@language': 5,
            '@@servicename': 5, '@@lock_timeout': 5, '@@spid': 5,
            '@@max_connections': 5, '@@textsize': 5, '@@max_precision': 5,
            '@@version': 5, '@@nestlevel': 5, '@@cursor_rows': 5,
            '@@fetch_status': 5, 'dateadd': 2, 'datediff': 2, 'datename': 2,
            'datepart': 2, 'getdate': 2, 'getutcdate': 2, 'abs': 1, 'degrees': 1,
            'rand': 1, 'acos': 1, 'exp': 1, 'round': 1, 'asin': 1, 'floor': 1,
            'sign': 1, 'atan': 1, 'log': 1, 'sin': 1, 'atn2': 1, 'log10': 1,
            'square': 1, 'ceiling': 1, 'pi': 1, 'sqrt': 1, 'cos': 1, 'power': 1,
            'tan': 1, 'cot': 1, 'radians': 1, 'col_length': 2,
            'fn_listextendedproperty': 5, 'col_name': 2, 'fulltextcatalogproperty': 5,
            'columnproperty': 5, 'fulltextserviceproperty': 5, 'databaseproperty': 5,
            'index_col': 2, 'databasepropertyex': 5, 'indexkey_property': 5, 'db_id': 2,
            'indexproperty': 5, 'db_name': 2, 'object_id': 2, 'file_id': 2,
            'object_name': 2, 'file_name': 2, 'objectproperty': 2, 'filegroup_id': 2,
            '@@procid': 5, 'filegroup_name': 2, 'sql_variant_property': 5,
            'filegroupproperty': 5, 'typeproperty': 2, 'fileproperty': 2,
            'fn_trace_geteventinfo': 5, 'is_srvrolemember': 5, 'fn_trace_getfilterinfo': 5,
            'suser_sid': 2, 'fn_trace_getinfo': 5, 'suser_sname': 2, 'fn_trace_gettable': 5,
            'user_id': 2, 'has_dbaccess': 2, 'is_member': 2, 'ascii': 2, 'soundex': 2,
            'patindex': 2, 'charindex': 2, 'str': 1, 'difference': 1, 'quotename': 2,
            'stuff': 1, 'replicate': 2, 'substring': 1, 'len': 1, 'reverse': 1,
            'unicode': 1, 'lower': 1, 'upper': 1, 'ltrim': 1, 'rtrim': 1, 'app_name': 2,
            'collationproperty': 5, '@@error': 5, 'fn_helpcollations': 5,
            'fn_servershareddrives': 5, 'fn_virtualfilestats': 5, 'formatmessage': 5,
            'getansinull': 5, 'host_id': 2, 'host_name': 2, 'ident_current': 2,
            'ident_incr': 2, 'ident_seed': 2, '@@identity': 5, 'isdate': 1,
            'isnumeric': 1, 'parsename': 2, 'permissions': 1, '@@rowcount': 5,
            'rowcount_big': 2, 'scope_identity': 2, 'serverproperty': 5,
            'sessionproperty': 5, 'stats_date': 2, '@@trancount': 5, 'user_name': 1,
            '@@connections': 5, '@@pack_received': 5, '@@cpu_busy': 5, '@@pack_sent': 5,
            '@@timeticks': 5, '@@idle': 5, '@@total_errors': 5, '@@io_busy': 5,
            '@@total_read': 5, '@@packet_errors': 5, '@@total_write': 5, 'textptr': 2,
            'textvalid': 2, 'binary_checksum': 2, 'checksum': 2, 'checksum_agg': 2,
            'stdev': 1, 'stdevp': 1, 'count_big': 2, 'var': 1, 'grouping': 1, 'varp': 1
          },
          'procedure': {
            'fn_helpcollations': 5, 'fn_listextendedproperty': 5,
            'fn_servershareddrives': 5, 'fn_trace_geteventinfo': 5,
            'fn_trace_getfilterinfo': 5, 'fn_trace_getinfo': 5, 'fn_trace_gettable': 5,
            'fn_virtualfilestats': 5
          },
          'operator': {
            'all': 1, 'and': 1, 'any': 1, 'between': 1, 'cross': 1, 'exists': 1,
            'in': 1, 'join': 1, 'like': 1, 'not': 1, 'null': 1, 'or': 1, 'outer': 1, 'some': 1
          }
        },
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}],
            relevance: 0
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}],
            relevance: 0
          },
          {
            className: 'string',
            begin: '`', end: '`',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          hljs.C_NUMBER_MODE,
          {begin: '\\n'}
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      hljs.HASH_COMMENT_MODE
    ]
  };
}

