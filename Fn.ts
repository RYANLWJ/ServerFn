import fs from "fs";
import { Application } from "express";
import { join } from "path";
import { hash, compare } from "bcrypt";
import Jwt from "jsonwebtoken";
/**
 * 读取文件内容
 * @param path filePath
 * @param options options:object
 */
export async function readFile(path: string): Promise<any> {
  return await new Promise((resolve, reject) => {
    fs.readFile(join(__dirname, path), "utf8", (err, data) => {
      err && reject(err);
      resolve(data);
    });
  });
}
/**
 * 修改文件
 * @param path filePath
 * @param data data
 * @param options Options
 */
export async function writeFile(
  path: string,
  data: string | NodeJS.ArrayBufferView
): Promise<any> {
  return await new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      err && reject(err);
      resolve(true);
    });
  });
}
/**
 * 用于命名
 * @param oldName  修改前的名字
 * @param newName  修改后的名字
 */
export async function rename(
  oldName: fs.PathLike,
  newName: fs.PathLike
): Promise<any> {
  return await new Promise((resolve, reject) => {
    fs.rename(oldName, newName, (err) => {
      err && reject(err);
      resolve(true);
    });
  });
}
/**
 * 判断是文件or文件夹
 * @param path filePath
 * @param options options
 */
export async function isFile(path: string): Promise<any> {
  return await new Promise((resolve, reject) => {
    fs.stat(join(__dirname, path), (err, data) => {
      err && reject(err);
      data.isFile() && resolve("File");
      data.isDirectory() && resolve("Dir");
    });
  });
}
/**
 * 读取文件夹
 * @param path filePath
 */
export async function readDir(path: string): Promise<any> {
  return await new Promise((resolve, reject) => {
    fs.readdir(
      join(__dirname, path),
      "utf8",
      (err: NodeJS.ErrnoException | null, files: string[]) => {
        err && reject(err);
        files && resolve(files);
      }
    );
  });
}
/**
 * 删除文件
 * @param path filePath
 */
export async function Unlink(path: string): Promise<any> {
  return await new Promise((resolve, reject) => {
    fs.unlink(join(__dirname, path), (err) => {
      err && reject(err);
      resolve(true);
    });
  });
}
/**
 * 跨域
 * @param App Application
 */
export function Cors(App: Application): void {
  App.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == "options") res.sendStatus(200);
    else next();
  });
}
/**
 * 生成Token
 * @param data data
 * @param secret 签名
 * @param Options 其他选项
 */
export function CreateToken(
  data: string | object | Buffer,
  secret: Jwt.Secret,
  Options?: Jwt.SignOptions | undefined
): string {
  return Jwt.sign(data, secret, Options);
}
/**
 * 解谜token
 * @param token Token
 * @param secretOrPublicKey 密钥
 * @param options 选项
 */
export function Puzzle(
  token: string,
  secretOrPublicKey: Jwt.Secret,
  options?: Jwt.VerifyOptions | undefined
): string | object {
  return Jwt.verify(token, secretOrPublicKey, options);
}
/**
 * bcrypt散列加密数据
 * @param data 被加密的数据
 * @param saltOrRounds 加密强度
 */
export async function encryption(
  data: any,
  saltOrRounds: string | number
): Promise<string> {
  return await hash(data, saltOrRounds);
}
export async function Untie(data: any, encrypted: string): Promise<Boolean> {
  return await compare(data, encrypted);
}
