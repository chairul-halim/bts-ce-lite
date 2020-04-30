exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.noTransaction();
	
	pgm.createTable({schema: "nokia_cm", name: "ACBPR"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "APUCCH_FDD"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "BBADM"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "CELLMAPPING"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "CERTHENT"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "CHANNELGROUP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "EQM"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "EQM_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "ETHSVC"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "FAN"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "FAN_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "FIREWALL"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "GNBCF_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "GNBTS"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "HWTOP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "HWTOP_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "IPIF_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "IPRTV6_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "LNADJG"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "LNCEL_FDD"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "LOGLINK"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "LOGLINK_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MGMNT"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MNL"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MNL_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MNLENT"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MPLANE"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MPLANENW"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MPLANENW_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MPUCCH_FDD"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "MRBTSDESC"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "NECERT"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "NECERT_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "NSVC"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "NTP_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "OMS"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PABTRS"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PASSDEV"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PASSDEV_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PCP2QMAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PDH"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PINGREQ"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PINGRES"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PKTFLTR"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PMCCP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PMMNL"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PMQAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "POWERGROUP_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PPTT_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "PSSUNT"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RET"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RETU"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RETU_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RFREQ"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RFRES"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RIM"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RMOD_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RSL"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RSL_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "RTPOL"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "SBTS"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "SDRX"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "SECADM_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "SFP_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "SIB"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "SMOD_CORE"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "SMOD_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TIME"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TNL"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TNL_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TNLSVC"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TOPF_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TRBLCADM_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TRM"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TRMOD"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TRMOD_R"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TRSNW"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "TWAMPREFLECT"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "VLANID2QMAP"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "VLANIF"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "WNBTS"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "WNCEL"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "WNCELG"}, {id: "id", load_datetime: "load_datetime", data: "data"});
	pgm.createTable({schema: "nokia_cm", name: "WNPMRNL"}, {id: "id", load_datetime: "load_datetime", data: "data"});
};

exports.down = (pgm) => {
	pgm.dropTable({schema: "nokia_cm", name: 'ACBPR'});
	pgm.dropTable({schema: "nokia_cm", name: 'APUCCH_FDD'});
	pgm.dropTable({schema: "nokia_cm", name: 'BBADM'});
	pgm.dropTable({schema: "nokia_cm", name: 'CELLMAPPING'});
	pgm.dropTable({schema: "nokia_cm", name: 'CERTHENT'});
	pgm.dropTable({schema: "nokia_cm", name: 'CHANNELGROUP'});
	pgm.dropTable({schema: "nokia_cm", name: 'EQM'});
	pgm.dropTable({schema: "nokia_cm", name: 'EQM_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'ETHSVC'});
	pgm.dropTable({schema: "nokia_cm", name: 'FAN'});
	pgm.dropTable({schema: "nokia_cm", name: 'FAN_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'FIREWALL'});
	pgm.dropTable({schema: "nokia_cm", name: 'GNBCF_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'GNBTS'});
	pgm.dropTable({schema: "nokia_cm", name: 'HWTOP'});
	pgm.dropTable({schema: "nokia_cm", name: 'HWTOP_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'IPIF_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'IPRTV6_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'LNADJG'});
	pgm.dropTable({schema: "nokia_cm", name: 'LNCEL_FDD'});
	pgm.dropTable({schema: "nokia_cm", name: 'LOGLINK'});
	pgm.dropTable({schema: "nokia_cm", name: 'LOGLINK_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'MGMNT'});
	pgm.dropTable({schema: "nokia_cm", name: 'MNL'});
	pgm.dropTable({schema: "nokia_cm", name: 'MNL_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'MNLENT'});
	pgm.dropTable({schema: "nokia_cm", name: 'MPLANE'});
	pgm.dropTable({schema: "nokia_cm", name: 'MPLANENW'});
	pgm.dropTable({schema: "nokia_cm", name: 'MPLANENW_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'MPUCCH_FDD'});
	pgm.dropTable({schema: "nokia_cm", name: 'MRBTSDESC'});
	pgm.dropTable({schema: "nokia_cm", name: 'NECERT'});
	pgm.dropTable({schema: "nokia_cm", name: 'NECERT_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'NSVC'});
	pgm.dropTable({schema: "nokia_cm", name: 'NTP_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'OMS'});
	pgm.dropTable({schema: "nokia_cm", name: 'PABTRS'});
	pgm.dropTable({schema: "nokia_cm", name: 'PASSDEV'});
	pgm.dropTable({schema: "nokia_cm", name: 'PASSDEV_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'PCP2QMAP'});
	pgm.dropTable({schema: "nokia_cm", name: 'PDH'});
	pgm.dropTable({schema: "nokia_cm", name: 'PINGREQ'});
	pgm.dropTable({schema: "nokia_cm", name: 'PINGRES'});
	pgm.dropTable({schema: "nokia_cm", name: 'PKTFLTR'});
	pgm.dropTable({schema: "nokia_cm", name: 'PMCCP'});
	pgm.dropTable({schema: "nokia_cm", name: 'PMMNL'});
	pgm.dropTable({schema: "nokia_cm", name: 'PMQAP'});
	pgm.dropTable({schema: "nokia_cm", name: 'POWERGROUP_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'PPTT_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'PSSUNT'});
	pgm.dropTable({schema: "nokia_cm", name: 'RET'});
	pgm.dropTable({schema: "nokia_cm", name: 'RETU'});
	pgm.dropTable({schema: "nokia_cm", name: 'RETU_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'RFREQ'});
	pgm.dropTable({schema: "nokia_cm", name: 'RFRES'});
	pgm.dropTable({schema: "nokia_cm", name: 'RIM'});
	pgm.dropTable({schema: "nokia_cm", name: 'RMOD_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'RSL'});
	pgm.dropTable({schema: "nokia_cm", name: 'RSL_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'RTPOL'});
	pgm.dropTable({schema: "nokia_cm", name: 'SBTS'});
	pgm.dropTable({schema: "nokia_cm", name: 'SDRX'});
	pgm.dropTable({schema: "nokia_cm", name: 'SECADM_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'SFP_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'SIB'});
	pgm.dropTable({schema: "nokia_cm", name: 'SMOD_CORE'});
	pgm.dropTable({schema: "nokia_cm", name: 'SMOD_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'TIME'});
	pgm.dropTable({schema: "nokia_cm", name: 'TNL'});
	pgm.dropTable({schema: "nokia_cm", name: 'TNL_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'TNLSVC'});
	pgm.dropTable({schema: "nokia_cm", name: 'TOPF_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'TRBLCADM_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'TRM'});
	pgm.dropTable({schema: "nokia_cm", name: 'TRMOD'});
	pgm.dropTable({schema: "nokia_cm", name: 'TRMOD_R'});
	pgm.dropTable({schema: "nokia_cm", name: 'TRSNW'});
	pgm.dropTable({schema: "nokia_cm", name: 'TWAMPREFLECT'});
	pgm.dropTable({schema: "nokia_cm", name: 'VLANID2QMAP'});
	pgm.dropTable({schema: "nokia_cm", name: 'VLANIF'});
	pgm.dropTable({schema: "nokia_cm", name: 'WNBTS'});
	pgm.dropTable({schema: "nokia_cm", name: 'WNCEL'});
	pgm.dropTable({schema: "nokia_cm", name: 'WNCELG'});
	pgm.dropTable({schema: "nokia_cm", name: 'WNPMRNL'});
};