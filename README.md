# TypeScript 封装了一些 Node 服务器中常用的方法，异步变同步，部分地方用到 async，await,让你的业务代码身轻如燕

## 首先你需要

`npm i -D server_fn`

| Func        | params                                                                                  | reture           | Remarks                      |
| ----------- | --------------------------------------------------------------------------------------- | ---------------- | ---------------------------- |
| readFile    | path: string                                                                            | Promise<any>     | 读取文件内容                 |
| writeFile   | path: string,data: string & NodeJS.ArrayBufferView                                      | Promise<any>     | 写文件                       |
| rename      | oldName: fs.PathLike,newName: fs.PathLike                                               | Promise<any>     | 用于命名                     |
| isFile      | path: string                                                                            | Promise<any>     | 判断是文件 or 文件夹         |
| readDir     | path: string                                                                            | Promise<any>     | 读取文件夹                   |
| Unlink      | path: string                                                                            | Promise<any>     | 删除文件                     |
| Cors        | App: Application                                                                        | void             | 跨域                         |
| CreateToken | data: string& object & Buffer,secret: Jwt.Secret, Options?: Jwt.SignOptions & undefined | string           | 生成 Token                   |
| Puzzle      | token: string,secretOrPublicKey: Jwt.Secret,options?: Jwt.VerifyOptions & undefined     | string & object  | 解谜 token                   |
| encryption  | data: any,saltOrRounds: string & number                                                 | Promise<string>  | bcrypt 散列加密数据          |
| Untie       | data: any, encrypted: string                                                            | Promise<Boolean> | 判断为加密和加密数据是否相等 |
