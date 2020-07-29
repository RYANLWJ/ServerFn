"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CreateToken } from "./index";
// import Jwt from "jsonwebtoken";
// let ps = CreateToken({ password: "12312" }, "alksj");
// console.log(Jwt.verify(ps, "alksj"));
var bcrypt_1 = require("bcrypt");
// hash 用散列方法把一个数据散列加密
// compareSync 比较两次的值是否相等
var s = "aklsjkl";
var ss = bcrypt_1.hashSync(s, 10);
var t = bcrypt_1.compareSync(s, ss);
console.log(ss);
console.log(t);
