"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Untie = exports.encryption = exports.Puzzle = exports.CreateToken = exports.Cors = exports.Unlink = exports.readDir = exports.isFile = exports.rename = exports.writeFile = exports.readFile = void 0;
var fs_1 = __importDefault(require("fs"));
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * 读取文件内容
 * @param path filePath
 * @param options options:object
 */
function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs_1.default.readFile(path, "utf8", function (err, data) {
            err && reject(err);
            resolve(data);
        });
    });
}
exports.readFile = readFile;
/**
 * 写文件
 * @param path filePath
 * @param data data
 * @param options Options
 */
function writeFile(path, data) {
    return new Promise(function (resolve, reject) {
        fs_1.default.writeFile(path, data, function (err) {
            err && reject(err);
            resolve(true);
        });
    });
}
exports.writeFile = writeFile;
/**
 * 用于命名
 * @param oldName  修改前的名字
 * @param newName  修改后的名字
 */
function rename(oldName, newName) {
    return new Promise(function (resolve, reject) {
        fs_1.default.rename(oldName, newName, function (err) {
            err && reject(err);
            resolve(true);
        });
    });
}
exports.rename = rename;
/**
 * 判断是文件or文件夹
 * @param path filePath
 * @param options options
 */
function isFile(path) {
    return new Promise(function (resolve, reject) {
        fs_1.default.stat(path, function (err, data) {
            err && reject(err);
            data.isFile() && resolve("File");
            data.isDirectory() && resolve("Dir");
        });
    });
}
exports.isFile = isFile;
/**
 * 读取文件夹
 * @param path filePath
 */
function readDir(path) {
    return new Promise(function (resolve, reject) {
        fs_1.default.readdir(path, "utf8", function (err, files) {
            err && reject(err);
            files && resolve(files);
        });
    });
}
exports.readDir = readDir;
/**
 * 删除文件
 * @param path filePath
 */
function Unlink(path) {
    return new Promise(function (resolve, reject) {
        fs_1.default.unlink(path, function (err) {
            err && reject(err);
            resolve(true);
        });
    });
}
exports.Unlink = Unlink;
/**
 * 跨域
 * @param App Application
 */
function Cors(App) {
    App.all("*", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "content-type");
        res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
        if (req.method.toLowerCase() == "options")
            res.sendStatus(200);
        else
            next();
    });
}
exports.Cors = Cors;
/**
 * 生成Token
 * @param data data
 * @param secret 签名
 * @param Options 其他选项
 */
function CreateToken(data, secret, Options) {
    return jsonwebtoken_1.default.sign(data, secret, Options);
}
exports.CreateToken = CreateToken;
/**
 * 解谜token
 * @param token Token
 * @param secretOrPublicKey 密钥
 * @param options 选项
 */
function Puzzle(token, secretOrPublicKey, options) {
    return jsonwebtoken_1.default.verify(token, secretOrPublicKey, options);
}
exports.Puzzle = Puzzle;
/**
 * bcrypt散列加密数据
 * @param data 被加密的数据
 * @param saltOrRounds 加密强度
 */
function encryption(data, saltOrRounds) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt_1.hash(data, saltOrRounds)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.encryption = encryption;
/**
 * 判断为加密和加密数据是否相等
 * @param data 为加密的数据
 * @param encrypted 加密的数据
 */
function Untie(data, encrypted) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt_1.compare(data, encrypted)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.Untie = Untie;
