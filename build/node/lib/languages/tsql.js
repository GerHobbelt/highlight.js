module.exports = function language_T_SQL(hljs) {
  var COMMENT_MODE = hljs.COMMENT('--', '\n|$');
  return {
    case_insensitive: true,
    illegal: /[<>{}*]/,
    contains: [
      {
        className: 'operator',
        begin: '(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b', 
        end: /;|$/, endsWithParent: true,
        lexemes: /[\w\.]+/,
        keywords: {
          'keyword': 
            'partial global month ' +
            'current_timestamp using go revoke ' +
            'smallint indicator end-exec disconnect ' +
            'zone with character assertion to ' +
            'add current_user usage input local ' +
            'alter match collate real then ' +
            'rollback get read timestamp ' +
            'session_user integer bit unique ' +
            'day minute desc insert execute ' +
            'ilike|2 level decimal drop ' +
            'continue isolation found where ' +
            'constraints domain right national ' +
            'module transaction relative second ' +
            'connect escape close system_user for ' +
            'deferred section cast current sqlstate ' +
            'allocate intersect deallocate numeric ' +
            'public preserve full goto initially ' +
            'asc no key output collation group ' +
            'by union session both last ' +
            'language constraint column of space ' +
            'foreign deferrable prior connection ' +
            'unknown action commit view ' +
            'first into float year primary ' +
            'cascaded except restrict set references ' +
            'names table open select ' +
            'size are rows from prepare ' +
            'distinct leading create only next ' +
            'inner authorization schema corresponding ' +
            'option declare precision immediate else ' +
            'timezone_minute external varying translation ' +
            'true case exception hour ' +
            'default double scroll value cursor ' +
            'descriptor values dec fetch procedure ' +
            'delete false int is describe ' +
            'char as at varchar ' +
            'trailing absolute current_time end ' +
            'grant privileges when check ' +
            'write current_date pad begin temporary ' +
            'exec time update catalog user sql ' +
            'date on identity timezone_hour natural ' +
            'whenever interval work order cascade ' +
            'diagnostics nchar having left call ' +
            'do handler load replace truncate ' +
            'start lock show pragma ' +
            'bigint tinyint money smallmoney datetime ' +
            'smalldatetime text nvarchar|2 ntext|2 binary ' +
            'varbinary|2 image sql_variant|2 uniqueidentifier|2 ' +
            'admin after alias array backup ' +
            'before blob boolean breadth break ' +
            'browse bulk check checkpoint class ' +
            'clob clustered coalesce completion compute ' +
            'constructor contains containstable convert ' +
            'cube current_path|2 current_role|2 cycle data ' +
            'database dbcc deny depth deref destroy ' +
            'destructor deterministic dictionary disk ' +
            'distributed dummy dump dynamic each ' +
            'equals errlvl every exit file fillfactor ' +
            'free freetext freetexttable function general ' +
            'grouping holdlock host identity_insert|2 ' +
            'identitycol|2 if ignore index initialize ' +
            'inout iterate kill large lateral ' +
            'localtime localtimestamp locator map modifies ' +
            'modify nclob new nocheck nonclustered ' +
            'none nullif object off offsets old ' +
            'opendatasource|2 openquery|2 openrowset|2 openxml|2 ' +
            'operation ordinality out over parameter ' +
            'parameters path percent plan postfix ' +
            'precision prefix preorder prepare preserve ' +
            'primary print prior proc raiserror reads ' +
            'readtext reconfigure recursive ref referencing ' +
            'replication restore result return returns ' +
            'rollup routine row rowguidcol|2 rule save ' +
            'savepoint scope search sequence sets ' +
            'setuser shutdown specific specifictype|2 ' +
            'sqlexception sqlwarning state statement static ' +
            'statistics structure terminate textsize than ' +
            'top tran treat trigger tsequal under ' +
            'unnest updatetext use variable waitfor ' +
            'while without writetext uncommitted nocount',
          'aggregate': 
            'count sum min max avg',
          'function': 
            '@@datefirst|5 @@options|5 @@dbts|5 ' +
            '@@remserver|5 @@langid|5 @@servername|5 @@language|5 ' +
            '@@servicename|5 @@lock_timeout|5 @@spid|5 ' +
            '@@max_connections|5 @@textsize|5 @@max_precision|5 ' +
            '@@version|5 @@nestlevel|5 @@cursor_rows|5 ' +
            '@@fetch_status|5 dateadd|2 datediff|2 datename|2 ' +
            'datepart|2 getdate|2 getutcdate|2 abs degrees ' +
            'rand acos exp round asin floor ' +
            'sign atan log sin atn2 log10 ' +
            'square ceiling pi sqrt cos power ' +
            'tan cot radians col_length|2 ' +
            'fn_listextendedproperty|5 col_name|2 fulltextcatalogproperty|5 ' +
            'columnproperty|5 fulltextserviceproperty|5 databaseproperty|5 ' +
            'index_col|2 databasepropertyex|5 indexkey_property|5 db_id|2 ' +
            'indexproperty|5 db_name|2 object_id|2 file_id|2 ' +
            'object_name|2 file_name|2 objectproperty|2 filegroup_id|2 ' +
            '@@procid|5 filegroup_name|2 sql_variant_property|5 ' +
            'filegroupproperty|5 typeproperty|2 fileproperty|2 ' +
            'fn_trace_geteventinfo|5 is_srvrolemember|5 fn_trace_getfilterinfo|5 ' +
            'suser_sid|2 fn_trace_getinfo|5 suser_sname|2 fn_trace_gettable|5 ' +
            'user_id|2 has_dbaccess|2 is_member|2 ascii|2 soundex|2 ' +
            'patindex|2 charindex|2 str difference quotename|2 ' +
            'stuff replicate|2 substring len reverse ' +
            'unicode lower upper ltrim rtrim app_name|2 ' +
            'collationproperty|5 @@error|5 fn_helpcollations|5 ' +
            'fn_servershareddrives|5 fn_virtualfilestats|5 formatmessage|5 ' +
            'getansinull|5 host_id|2 host_name|2 ident_current|2 ' +
            'ident_incr|2 ident_seed|2 @@identity|5 isdate ' +
            'isnumeric parsename|2 permissions @@rowcount|5 ' +
            'rowcount_big|2 scope_identity|2 serverproperty|5 ' +
            'sessionproperty|5 stats_date|2 @@trancount|5 user_name ' +
            '@@connections|5 @@pack_received|5 @@cpu_busy|5 @@pack_sent|5 ' +
            '@@timeticks|5 @@idle|5 @@total_errors|5 @@io_busy|5 ' +
            '@@total_read|5 @@packet_errors|5 @@total_write|5 textptr|2 ' +
            'textvalid|2 binary_checksum|2 checksum|2 checksum_agg|2 ' +
            'stdev stdevp count_big|2 var grouping varp',
          'procedure': 
            'fn_helpcollations|5 fn_listextendedproperty|5 ' +
            'fn_servershareddrives|5 fn_trace_geteventinfo|5 ' +
            'fn_trace_getfilterinfo|5 fn_trace_getinfo|5 fn_trace_gettable|5 ' +
            'fn_virtualfilestats|5',
          'operator': 
            'all and any between cross exists ' +
            'in join like not null or outer some',
        },
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}],
            relevance: 1,
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}],
            relevance: 1,
          },
          {
            className: 'string',
            begin: '`', end: '`',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          COMMENT_MODE,
          hljs.HASH_COMMENT_MODE
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      hljs.HASH_COMMENT_MODE
    ]
  };
};