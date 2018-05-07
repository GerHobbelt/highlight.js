module.exports = function language_SNORT(hljs) {
  var KEYWORDS = 'alert log pass activate dynamic drop reject sdrop tcp ip udp icmp ' +
  'msg reference gid sid rev classtype priority metadeta content uricontent ' +
  'nocase threshold type limit track limit by_src by_dst count seconds distance ' +
  'within depth offset rawbytes http_client_body http_cookie http_raw_cookie ' +
  'http_header http_raw_header http_method http_uri http_raw_uri http_stat_code ' +
  'http_stat_msg http_encode fast_pattern urilen isdataat pcre pkt_data file_data ' +
  'base64_decode base64_data byte_test byte_jump byte_extract ftpbounce asn1 ' +
  'cvs dce_iface dce opnum dce_stub_data sip_method sip_stat_code sip_header ' +
  'sip_body gtp_type gtp_info gtp_version ssl_version ssl_state fragoffset ttl tos id ' +
  'ipopts fragbits dsize flags flow flowbits seq ack window itype icode icmp_id icmp_seq ' +
  'rpc ip_proto sameip stream_reassemble stream_size logto session resp react tag activates ' +
  'activated_by replace detection_filter metadata'

  var BUILTINS = '$AIM_SERVERS $DNS_SERVERS $DNS_SERVERS_AD $EXTERNAL_NET $FILE_DATA_PORTS ' +
  '$GTP_PORTS $HOME_NET $HTTP_PORTS $HTTP_SERVERS $ORACLE_PORTS $SHELLCODE_PORTS ' +
  '$SIP_PORTS $SIP_SERVERS $SMTP_SERVERS $SNMP_SERVERS $SNORT_BPF $SQL_SERVERS ' +
  '$SSH_PORTS $SSH_SERVERS $TELNET_SERVERS'

  var LITERALS = 'http any'

  return {
    case_insensitive: false,
    keywords: {
      keyword: KEYWORDS,
      built_in: BUILTINS,
      literal: LITERALS
    },
    contains: [
      {
        className: 'parens',
        begin: /\(/, end: /\)/,
        keywords: KEYWORDS
      }
    ]
  }
};