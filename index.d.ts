export declare function readFile(path: string): Promise<any>;
export declare function writeFile(
  path: string,
  data: string | NodeJS.ArrayBufferView
): Promise<any>;
export declare function rename(
  oldName: fs.PathLike,
  newName: fs.PathLike
): Promise<any>;
export declare function isFile(path: string): Promise<any>;
export declare function readDir(path: string): Promise<any>;
export declare function Unlink(path: string): Promise<any>;
export declare function Cors(App: Application): void;
export declare function CreateToken(
  data: string | object | Buffer,
  secret: Jwt.Secret,
  Options?: Jwt.SignOptions | undefined
): string;
export declare function Puzzle(
  token: string,
  secretOrPublicKey: Jwt.Secret,
  options?: Jwt.VerifyOptions | undefined
): string | object;
export declare function encryption(
  data: any,
  saltOrRounds: string | number
): Promise<string>;
export declare function Untie(data: any, encrypted: string): Promise<Boolean>;
