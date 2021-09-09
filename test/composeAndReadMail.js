"use strict";
exports.__esModule = true;
var index_1 = require("./../dist/index");
console.log("\n\n====== composeMail.ts examples ======");
var CT = "ABCDEF";
var enc = new TextEncoder();
var VERSION = "Version 1";
var composeMail = new index_1.ComposeMail();
composeMail.setSender("daniel.ostkamp@ru.nl");
composeMail.addRecipient("irmasealtest@gmail.com");
composeMail.setCiphertext(enc.encode(CT));
composeMail.setSubject("Test");
composeMail.setVersion("1");
console.log("Composed mime mail: \n", composeMail.getMimeMail());
var readMail = new index_1.ReadMail();
readMail.parseMail(composeMail.getMimeMail());
console.log("Readmail version: ", readMail.getVersion());
var sealBytes = new TextDecoder().decode(readMail.getCiphertext());
console.log("Readmail ct: ", sealBytes);
console.assert(CT.localeCompare(sealBytes) === 0);
console.assert(VERSION.localeCompare(readMail.getVersion()) === 0);
