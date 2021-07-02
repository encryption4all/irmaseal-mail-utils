"use strict";
exports.__esModule = true;
var index_1 = require("./../dist/index");
console.log("\n\n====== readExchangeMail.ts examples ======");
var MIMEMAIL = "\nReceived: from VI1EUR06HT117.eop-eur06.prod.protection.outlook.com\n (2603:10b6:408:e6::33) by BN6PR19MB1266.namprd19.prod.outlook.com with HTTPS\n via BN0PR03CA0028.NAMPRD03.PROD.OUTLOOK.COM; Wed, 30 Jun 2021 14:00:40 +0000\nReceived: from VI1EUR06FT010.eop-eur06.prod.protection.outlook.com\n (2a01:111:e400:fc37::51) by\n VI1EUR06HT117.eop-eur06.prod.protection.outlook.com (2a01:111:e400:fc37::415)\n with Microsoft SMTP Server (version=TLS1_2,\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.4264.18; Wed, 30 Jun\n 2021 14:00:39 +0000\nReceived: from NAM12-DM6-obe.outbound.protection.outlook.com (40.92.22.84) by\n VI1EUR06FT010.mail.protection.outlook.com (10.13.6.179) with Microsoft SMTP\n Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\n 15.20.4287.22 via Frontend Transport; Wed, 30 Jun 2021 14:00:39 +0000\nReceived: from MW2NAM12FT026.eop-nam12.prod.protection.outlook.com\n (2a01:111:e400:fc65::51) by\n MW2NAM12HT245.eop-nam12.prod.protection.outlook.com (2a01:111:e400:fc65::258)\n with Microsoft SMTP Server (version=TLS1_2,\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.4287.8; Wed, 30 Jun\n 2021 14:00:38 +0000\nReceived: from BN6PR19MB1266.namprd19.prod.outlook.com\n (2a01:111:e400:fc65::47) by MW2NAM12FT026.mail.protection.outlook.com\n (2a01:111:e400:fc65::93) with Microsoft SMTP Server (version=TLS1_2,\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.4287.8 via Frontend\n Transport; Wed, 30 Jun 2021 14:00:37 +0000\nReceived: from BN6PR19MB1266.namprd19.prod.outlook.com\n ([fe80::c4e5:16e9:43ae:57b7]) by BN6PR19MB1266.namprd19.prod.outlook.com\n ([fe80::c4e5:16e9:43ae:57b7%12]) with mapi id 15.20.4287.023; Wed, 30 Jun\n 2021 14:00:37 +0000\nFrom: Daniel Ostkamp <daniel.ostkamp@outlook.com>\nTo: Daniel Ostkamp <daniel.ostkamp@outlook.com>\nSubject: TEST3\nThread-Topic: TEST3\nThread-Index: AQHXbbhNt8he/Tecp06uKjKuvTBWAw==\nDate: Wed, 30 Jun 2021 14:00:37 +0000\nMessage-ID:\n\t<BN6PR19MB1266EA9519B7E8CB1A15F81D86019@BN6PR19MB1266.namprd19.prod.outlook.com>\nAccept-Language: en-US\nContent-Language: en-US\nX-MS-Exchange-Organization-AuthAs: Anonymous\nX-MS-Exchange-Organization-AuthSource:\n\tVI1EUR06FT010.eop-eur06.prod.protection.outlook.com\nX-MS-Has-Attach: yes\nX-MS-Exchange-Organization-Network-Message-Id:\n\t805de92b-1a82-424c-b210-08d93bcf715d\nX-MS-Exchange-Organization-SCL: -1\nX-MS-Exchange-Organization-PCL: 2\nX-MS-TNEF-Correlator:\nX-MS-Exchange-Organization-RecordReviewCfmType: 0\nreceived-spf: Pass (protection.outlook.com: domain of outlook.com designates\n 40.92.22.84 as permitted sender) receiver=protection.outlook.com;\n client-ip=40.92.22.84; helo=NAM12-DM6-obe.outbound.protection.outlook.com;\nx-ms-publictraffictype: Email\nX-Microsoft-Antispam-Mailbox-Delivery:\n\tdkl:0;rwl:0;ucf:0;jmr:0;ex:0;auth:1;dest:I;OFR:SpamFilterPass;ENG:(5062000282)(90000117)(90012020)(91020020)(91040095)(91045095)(9000001)(9050020)(9100313)(5061607266)(5061608174)(1004385)(4900115)(2008001114)(2008000189)(4920090)(6220004)(4950131)(4990090)(9110004);\nX-Message-Info:\n\t5vMbyqxGkdeSst+lRd1f/Tp7KDK8pmLmlKnhhZr5HT7KOgiK4HkVzfKtgjdv4azrkAZ56dUJysjaBHmdkHkFiLooTbgrmoJ5PKFgqaq+7bP3fIIkbscLJtxuD2xgslpfIk95XjjHSfvhqD6ttBtiORFWEQ6TQoroqaI5/xaO1osmOkpa4L6qpuDDT5Bc9HJaXrWBQb9rzPSaEcjFSWftZw==\nX-Message-Delivery: Vj0xLjE7dXM9MDtsPTA7YT0xO0Q9MTtHRD0xO1NDTD0tMQ==\nX-Microsoft-Antispam-Message-Info:\n\tNoRzeSr5MPoOQ11J2gPDnJn9Y7PY0IXUZ5sYOQhwtJINPSRO/tkXWtqsiwalUFTZ5wvALb9Hm/TYGwwLxk3bylAnxCtixJkXQv9lY3yvUkSnmtpRgeXXUVyswDq35UJR4Kgy5ZFXGTXE0eu0Fd+tdPoZQMhd+f+/KvR59S/1rSoIrOqaFyKrpvuMQLDWwcnfBAX83c+6boFNMy1e7iQBp54+CrByEY3CHwn4a5JquFQjHsUPTMEuREqhar5er8/p1TkpP6Fy4RnUOBHkIh0ri+a8MW31Zzr0BYPr9zC7bVytRO3P85if0edLWlgGK1Vn07oO+FwqCxbiylS04d1vQpD5YLEe0D2PjAnnyNcaPz4rfmKDzN0X6NNE1y46U/crF7OvNB21d18bLHurr/NtdMGfmGdCq27m8ypIWKNVyEufw1I+nRcujM/TLiqowwIc9W9HiGa5/HIGFOAa96St5GQgEb3AziHR7UZeEgBHZdTCGT2td/0DSgVTlAUTf427naMp+bKvV25DbIcw3EO8DsU/912fzrsuo780m/1GW9hSRtmgNjUg4mfJEGRxXJEMG0Kf2oBDofA/EC2W7X9P/n71PwIwK56sJ1NDZR2k1GPnPRBzsOmY8ApGjYctdH7P0NTMCvohmC+34cJnwhtHp/0NpsNWw4t2d2lnbu5ojj0VAnxMuycAISUFTvYv5aUl+8kv4UQlhWV0VhfzXCBMVy9z/9ki62n9ykMAL83Wv+kRxZQerUmtYCOESwc6n4CbzvZhlfkMAcWOJkAOaxapQdfWPiP8u4KCS0a5U4A9j+AeKFHNpxGzKiKT/2cP8Zf9UkwetP5nIy3z1OtQ3EIhUXGnQ9SQLDl7HN2TY07xtyvrmLqVz3740z0LyezA2HTtNStQ2UyQbd64w710lmhtmotvaHWdtW+YupLgLN+JKHc=\nContent-Type: multipart/mixed;\n\tboundary=\"_003_BN6PR19MB1266EA9519B7E8CB1A15F81D86019BN6PR19MB1266namp_\"\nMIME-Version: 1.0\n\n--_003_BN6PR19MB1266EA9519B7E8CB1A15F81D86019BN6PR19MB1266namp_\nContent-Type: text/plain; charset=\"us-ascii\"\nContent-ID: <3200D121BE95FC4A91A0DB641A174FC5@namprd19.prod.outlook.com>\n\n\n--_003_BN6PR19MB1266EA9519B7E8CB1A15F81D86019BN6PR19MB1266namp_\nContent-Type: application/irmaseal; name=\"ATT00001\"\nContent-Description: ATT00001\nContent-Disposition: attachment; filename=\"ATT00001\"; size=334;\n\tcreation-date=\"Wed, 30 Jun 2021 14:00:36 GMT\";\n\tmodification-date=\"Wed, 30 Jun 2021 14:00:36 GMT\"\nContent-ID: <329BCF1FCF74CC43B18B76408782163B@namprd19.prod.outlook.com>\nContent-Transfer-Encoding: base64\n\nVmVyc2lvbiAx\n\n--_003_BN6PR19MB1266EA9519B7E8CB1A15F81D86019BN6PR19MB1266namp_\nContent-Type: application/octet-stream; name=\"ATT00002.bin\"\nContent-Description: ATT00002.bin\nContent-Disposition: attachment; filename=\"ATT00002.bin\"; size=647;\n\tcreation-date=\"Wed, 30 Jun 2021 14:00:36 GMT\";\n\tmodification-date=\"Wed, 30 Jun 2021 14:00:36 GMT\"\nContent-ID: <213AF65EA2CF6A47BFDD7B5E28C90669@namprd19.prod.outlook.com>\nContent-Transfer-Encoding: base64\n\nFIqOpwAAAAAA4pABjBLboMr8YfBZJp148lJEHWbeIEAPbqNEcq14VePJJcWyloNlPa8w4sQIbq9D\nGExzE2c7rAWJDhgBhmBt5CcMVP5ZnbcAApyZfgTKX7BYq02LVYlEpDKxavLSmNDRS09eqd4bYVrR\nR9XuuAPv+8ECsskY3k4utcOn/HewVjag1q9Se0T30rVvjLd8iR5233nqEKmAr5K254cOkYWefJD1\noOYEedxgAAAAABpwYmRmLnNpZG4tcGJkZi5lbWFpbC5lbWFpbAEaZGFuaWVsLm9zdGthbXBAb3V0\nbG9vay5jb23JV9PmGZlSnh95iCnTnRKhItQl7A81O3gNkwSvnEwUTGq8MzPvazT5delF\n\n--_003_BN6PR19MB1266EA9519B7E8CB1A15F81D86019BN6PR19MB1266namp_--\n";
var readExchangeMail = new index_1.ReadMail();
readExchangeMail.parseMail(MIMEMAIL);
console.log("GetVersion: ", readExchangeMail.getVersion());
console.log("GetCiphertext: ", readExchangeMail.getCiphertext());
console.assert(readExchangeMail.getCiphertext().length > 0);
console.assert(readExchangeMail.getVersion().length > 0);
