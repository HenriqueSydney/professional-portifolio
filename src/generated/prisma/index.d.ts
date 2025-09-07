
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Authenticator
 * 
 */
export type Authenticator = $Result.DefaultSelection<Prisma.$AuthenticatorPayload>
/**
 * Model NewsLetterSubscriptions
 * 
 */
export type NewsLetterSubscriptions = $Result.DefaultSelection<Prisma.$NewsLetterSubscriptionsPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model PostMetrics
 * 
 */
export type PostMetrics = $Result.DefaultSelection<Prisma.$PostMetricsPayload>
/**
 * Model PostLikes
 * 
 */
export type PostLikes = $Result.DefaultSelection<Prisma.$PostLikesPayload>
/**
 * Model PostComments
 * 
 */
export type PostComments = $Result.DefaultSelection<Prisma.$PostCommentsPayload>
/**
 * Model PostCommentsLikes
 * 
 */
export type PostCommentsLikes = $Result.DefaultSelection<Prisma.$PostCommentsLikesPayload>
/**
 * Model ProfileInformation
 * 
 */
export type ProfileInformation = $Result.DefaultSelection<Prisma.$ProfileInformationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TranslatedModel: {
  MICROSOFT_TRANSLATOR: 'MICROSOFT_TRANSLATOR',
  GOOGLE_CLOUD_TRANSLATE: 'GOOGLE_CLOUD_TRANSLATE',
  DEEPL: 'DEEPL',
  AMAZON_TRANSLATE: 'AMAZON_TRANSLATE'
};

export type TranslatedModel = (typeof TranslatedModel)[keyof typeof TranslatedModel]


export const PostStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const ProfileInformationType: {
  STATS: 'STATS',
  SKILLS: 'SKILLS',
  EXPERIENCE: 'EXPERIENCE',
  CERTIFICATION: 'CERTIFICATION'
};

export type ProfileInformationType = (typeof ProfileInformationType)[keyof typeof ProfileInformationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TranslatedModel = $Enums.TranslatedModel

export const TranslatedModel: typeof $Enums.TranslatedModel

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type ProfileInformationType = $Enums.ProfileInformationType

export const ProfileInformationType: typeof $Enums.ProfileInformationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authenticator`: Exposes CRUD operations for the **Authenticator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authenticators
    * const authenticators = await prisma.authenticator.findMany()
    * ```
    */
  get authenticator(): Prisma.AuthenticatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsLetterSubscriptions`: Exposes CRUD operations for the **NewsLetterSubscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsLetterSubscriptions
    * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findMany()
    * ```
    */
  get newsLetterSubscriptions(): Prisma.NewsLetterSubscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postMetrics`: Exposes CRUD operations for the **PostMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostMetrics
    * const postMetrics = await prisma.postMetrics.findMany()
    * ```
    */
  get postMetrics(): Prisma.PostMetricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLikes`: Exposes CRUD operations for the **PostLikes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLikes
    * const postLikes = await prisma.postLikes.findMany()
    * ```
    */
  get postLikes(): Prisma.PostLikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postComments`: Exposes CRUD operations for the **PostComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostComments
    * const postComments = await prisma.postComments.findMany()
    * ```
    */
  get postComments(): Prisma.PostCommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postCommentsLikes`: Exposes CRUD operations for the **PostCommentsLikes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostCommentsLikes
    * const postCommentsLikes = await prisma.postCommentsLikes.findMany()
    * ```
    */
  get postCommentsLikes(): Prisma.PostCommentsLikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileInformation`: Exposes CRUD operations for the **ProfileInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileInformations
    * const profileInformations = await prisma.profileInformation.findMany()
    * ```
    */
  get profileInformation(): Prisma.ProfileInformationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Authenticator: 'Authenticator',
    NewsLetterSubscriptions: 'NewsLetterSubscriptions',
    Posts: 'Posts',
    PostMetrics: 'PostMetrics',
    PostLikes: 'PostLikes',
    PostComments: 'PostComments',
    PostCommentsLikes: 'PostCommentsLikes',
    ProfileInformation: 'ProfileInformation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "authenticator" | "newsLetterSubscriptions" | "posts" | "postMetrics" | "postLikes" | "postComments" | "postCommentsLikes" | "profileInformation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Authenticator: {
        payload: Prisma.$AuthenticatorPayload<ExtArgs>
        fields: Prisma.AuthenticatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findFirst: {
            args: Prisma.AuthenticatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          findMany: {
            args: Prisma.AuthenticatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          create: {
            args: Prisma.AuthenticatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          createMany: {
            args: Prisma.AuthenticatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthenticatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          delete: {
            args: Prisma.AuthenticatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          update: {
            args: Prisma.AuthenticatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthenticatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>[]
          }
          upsert: {
            args: Prisma.AuthenticatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatorPayload>
          }
          aggregate: {
            args: Prisma.AuthenticatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticator>
          }
          groupBy: {
            args: Prisma.AuthenticatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticatorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatorCountAggregateOutputType> | number
          }
        }
      }
      NewsLetterSubscriptions: {
        payload: Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>
        fields: Prisma.NewsLetterSubscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsLetterSubscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsLetterSubscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>
          }
          findFirst: {
            args: Prisma.NewsLetterSubscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsLetterSubscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>
          }
          findMany: {
            args: Prisma.NewsLetterSubscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>[]
          }
          create: {
            args: Prisma.NewsLetterSubscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>
          }
          createMany: {
            args: Prisma.NewsLetterSubscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsLetterSubscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>[]
          }
          delete: {
            args: Prisma.NewsLetterSubscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>
          }
          update: {
            args: Prisma.NewsLetterSubscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.NewsLetterSubscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsLetterSubscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsLetterSubscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.NewsLetterSubscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterSubscriptionsPayload>
          }
          aggregate: {
            args: Prisma.NewsLetterSubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsLetterSubscriptions>
          }
          groupBy: {
            args: Prisma.NewsLetterSubscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsLetterSubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsLetterSubscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsLetterSubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      PostMetrics: {
        payload: Prisma.$PostMetricsPayload<ExtArgs>
        fields: Prisma.PostMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>
          }
          findFirst: {
            args: Prisma.PostMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>
          }
          findMany: {
            args: Prisma.PostMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>[]
          }
          create: {
            args: Prisma.PostMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>
          }
          createMany: {
            args: Prisma.PostMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>[]
          }
          delete: {
            args: Prisma.PostMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>
          }
          update: {
            args: Prisma.PostMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>
          }
          deleteMany: {
            args: Prisma.PostMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>[]
          }
          upsert: {
            args: Prisma.PostMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMetricsPayload>
          }
          aggregate: {
            args: Prisma.PostMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostMetrics>
          }
          groupBy: {
            args: Prisma.PostMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<PostMetricsCountAggregateOutputType> | number
          }
        }
      }
      PostLikes: {
        payload: Prisma.$PostLikesPayload<ExtArgs>
        fields: Prisma.PostLikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          findFirst: {
            args: Prisma.PostLikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          findMany: {
            args: Prisma.PostLikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          create: {
            args: Prisma.PostLikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          createMany: {
            args: Prisma.PostLikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostLikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          delete: {
            args: Prisma.PostLikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          update: {
            args: Prisma.PostLikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          deleteMany: {
            args: Prisma.PostLikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostLikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostLikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>[]
          }
          upsert: {
            args: Prisma.PostLikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikesPayload>
          }
          aggregate: {
            args: Prisma.PostLikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostLikes>
          }
          groupBy: {
            args: Prisma.PostLikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostLikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLikesCountArgs<ExtArgs>
            result: $Utils.Optional<PostLikesCountAggregateOutputType> | number
          }
        }
      }
      PostComments: {
        payload: Prisma.$PostCommentsPayload<ExtArgs>
        fields: Prisma.PostCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          findFirst: {
            args: Prisma.PostCommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          findMany: {
            args: Prisma.PostCommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          create: {
            args: Prisma.PostCommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          createMany: {
            args: Prisma.PostCommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          delete: {
            args: Prisma.PostCommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          update: {
            args: Prisma.PostCommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>[]
          }
          upsert: {
            args: Prisma.PostCommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsPayload>
          }
          aggregate: {
            args: Prisma.PostCommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostComments>
          }
          groupBy: {
            args: Prisma.PostCommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentsCountArgs<ExtArgs>
            result: $Utils.Optional<PostCommentsCountAggregateOutputType> | number
          }
        }
      }
      PostCommentsLikes: {
        payload: Prisma.$PostCommentsLikesPayload<ExtArgs>
        fields: Prisma.PostCommentsLikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentsLikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentsLikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>
          }
          findFirst: {
            args: Prisma.PostCommentsLikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentsLikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>
          }
          findMany: {
            args: Prisma.PostCommentsLikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>[]
          }
          create: {
            args: Prisma.PostCommentsLikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>
          }
          createMany: {
            args: Prisma.PostCommentsLikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCommentsLikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>[]
          }
          delete: {
            args: Prisma.PostCommentsLikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>
          }
          update: {
            args: Prisma.PostCommentsLikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentsLikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentsLikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostCommentsLikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>[]
          }
          upsert: {
            args: Prisma.PostCommentsLikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostCommentsLikesPayload>
          }
          aggregate: {
            args: Prisma.PostCommentsLikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostCommentsLikes>
          }
          groupBy: {
            args: Prisma.PostCommentsLikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostCommentsLikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentsLikesCountArgs<ExtArgs>
            result: $Utils.Optional<PostCommentsLikesCountAggregateOutputType> | number
          }
        }
      }
      ProfileInformation: {
        payload: Prisma.$ProfileInformationPayload<ExtArgs>
        fields: Prisma.ProfileInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>
          }
          findFirst: {
            args: Prisma.ProfileInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>
          }
          findMany: {
            args: Prisma.ProfileInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>[]
          }
          create: {
            args: Prisma.ProfileInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>
          }
          createMany: {
            args: Prisma.ProfileInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>[]
          }
          delete: {
            args: Prisma.ProfileInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>
          }
          update: {
            args: Prisma.ProfileInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>
          }
          deleteMany: {
            args: Prisma.ProfileInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>[]
          }
          upsert: {
            args: Prisma.ProfileInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileInformationPayload>
          }
          aggregate: {
            args: Prisma.ProfileInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileInformation>
          }
          groupBy: {
            args: Prisma.ProfileInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileInformationCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileInformationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    authenticator?: AuthenticatorOmit
    newsLetterSubscriptions?: NewsLetterSubscriptionsOmit
    posts?: PostsOmit
    postMetrics?: PostMetricsOmit
    postLikes?: PostLikesOmit
    postComments?: PostCommentsOmit
    postCommentsLikes?: PostCommentsLikesOmit
    profileInformation?: ProfileInformationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    Authenticator: number
    PostComments: number
    PostCommentsLikes: number
    PostLikes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Authenticator?: boolean | UserCountOutputTypeCountAuthenticatorArgs
    PostComments?: boolean | UserCountOutputTypeCountPostCommentsArgs
    PostCommentsLikes?: boolean | UserCountOutputTypeCountPostCommentsLikesArgs
    PostLikes?: boolean | UserCountOutputTypeCountPostLikesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthenticatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostCommentsLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsLikesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikesWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    PostComments: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostComments?: boolean | PostsCountOutputTypeCountPostCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
  }


  /**
   * Count Type PostMetricsCountOutputType
   */

  export type PostMetricsCountOutputType = {
    PostLikes: number
  }

  export type PostMetricsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostLikes?: boolean | PostMetricsCountOutputTypeCountPostLikesArgs
  }

  // Custom InputTypes
  /**
   * PostMetricsCountOutputType without action
   */
  export type PostMetricsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetricsCountOutputType
     */
    select?: PostMetricsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostMetricsCountOutputType without action
   */
  export type PostMetricsCountOutputTypeCountPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikesWhereInput
  }


  /**
   * Count Type PostCommentsCountOutputType
   */

  export type PostCommentsCountOutputType = {
    PostCommentsLikes: number
  }

  export type PostCommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostCommentsLikes?: boolean | PostCommentsCountOutputTypeCountPostCommentsLikesArgs
  }

  // Custom InputTypes
  /**
   * PostCommentsCountOutputType without action
   */
  export type PostCommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsCountOutputType
     */
    select?: PostCommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCommentsCountOutputType without action
   */
  export type PostCommentsCountOutputTypeCountPostCommentsLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsLikesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    PostComments?: boolean | User$PostCommentsArgs<ExtArgs>
    PostCommentsLikes?: boolean | User$PostCommentsLikesArgs<ExtArgs>
    PostLikes?: boolean | User$PostLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>
    PostComments?: boolean | User$PostCommentsArgs<ExtArgs>
    PostCommentsLikes?: boolean | User$PostCommentsLikesArgs<ExtArgs>
    PostLikes?: boolean | User$PostLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Authenticator: Prisma.$AuthenticatorPayload<ExtArgs>[]
      PostComments: Prisma.$PostCommentsPayload<ExtArgs>[]
      PostCommentsLikes: Prisma.$PostCommentsLikesPayload<ExtArgs>[]
      PostLikes: Prisma.$PostLikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Authenticator<T extends User$AuthenticatorArgs<ExtArgs> = {}>(args?: Subset<T, User$AuthenticatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostComments<T extends User$PostCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$PostCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostCommentsLikes<T extends User$PostCommentsLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$PostCommentsLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostLikes<T extends User$PostLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$PostLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Authenticator
   */
  export type User$AuthenticatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    cursor?: AuthenticatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * User.PostComments
   */
  export type User$PostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    cursor?: PostCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * User.PostCommentsLikes
   */
  export type User$PostCommentsLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    where?: PostCommentsLikesWhereInput
    orderBy?: PostCommentsLikesOrderByWithRelationInput | PostCommentsLikesOrderByWithRelationInput[]
    cursor?: PostCommentsLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentsLikesScalarFieldEnum | PostCommentsLikesScalarFieldEnum[]
  }

  /**
   * User.PostLikes
   */
  export type User$PostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    where?: PostLikesWhereInput
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    cursor?: PostLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Authenticator
   */

  export type AggregateAuthenticator = {
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  export type AuthenticatorAvgAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorSumAggregateOutputType = {
    counter: number | null
  }

  export type AuthenticatorMinAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorMaxAggregateOutputType = {
    credentialID: string | null
    userId: string | null
    providerAccountId: string | null
    credentialPublicKey: string | null
    counter: number | null
    credentialDeviceType: string | null
    credentialBackedUp: boolean | null
    transports: string | null
  }

  export type AuthenticatorCountAggregateOutputType = {
    credentialID: number
    userId: number
    providerAccountId: number
    credentialPublicKey: number
    counter: number
    credentialDeviceType: number
    credentialBackedUp: number
    transports: number
    _all: number
  }


  export type AuthenticatorAvgAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorSumAggregateInputType = {
    counter?: true
  }

  export type AuthenticatorMinAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorMaxAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
  }

  export type AuthenticatorCountAggregateInputType = {
    credentialID?: true
    userId?: true
    providerAccountId?: true
    credentialPublicKey?: true
    counter?: true
    credentialDeviceType?: true
    credentialBackedUp?: true
    transports?: true
    _all?: true
  }

  export type AuthenticatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticator to aggregate.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authenticators
    **/
    _count?: true | AuthenticatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthenticatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthenticatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type GetAuthenticatorAggregateType<T extends AuthenticatorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator[P]>
      : GetScalarType<T[P], AggregateAuthenticator[P]>
  }




  export type AuthenticatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatorWhereInput
    orderBy?: AuthenticatorOrderByWithAggregationInput | AuthenticatorOrderByWithAggregationInput[]
    by: AuthenticatorScalarFieldEnum[] | AuthenticatorScalarFieldEnum
    having?: AuthenticatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatorCountAggregateInputType | true
    _avg?: AuthenticatorAvgAggregateInputType
    _sum?: AuthenticatorSumAggregateInputType
    _min?: AuthenticatorMinAggregateInputType
    _max?: AuthenticatorMaxAggregateInputType
  }

  export type AuthenticatorGroupByOutputType = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports: string | null
    _count: AuthenticatorCountAggregateOutputType | null
    _avg: AuthenticatorAvgAggregateOutputType | null
    _sum: AuthenticatorSumAggregateOutputType | null
    _min: AuthenticatorMinAggregateOutputType | null
    _max: AuthenticatorMaxAggregateOutputType | null
  }

  type GetAuthenticatorGroupByPayload<T extends AuthenticatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authenticator"]>

  export type AuthenticatorSelectScalar = {
    credentialID?: boolean
    userId?: boolean
    providerAccountId?: boolean
    credentialPublicKey?: boolean
    counter?: boolean
    credentialDeviceType?: boolean
    credentialBackedUp?: boolean
    transports?: boolean
  }

  export type AuthenticatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"credentialID" | "userId" | "providerAccountId" | "credentialPublicKey" | "counter" | "credentialDeviceType" | "credentialBackedUp" | "transports", ExtArgs["result"]["authenticator"]>
  export type AuthenticatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthenticatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthenticatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthenticatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authenticator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      credentialID: string
      userId: string
      providerAccountId: string
      credentialPublicKey: string
      counter: number
      credentialDeviceType: string
      credentialBackedUp: boolean
      transports: string | null
    }, ExtArgs["result"]["authenticator"]>
    composites: {}
  }

  type AuthenticatorGetPayload<S extends boolean | null | undefined | AuthenticatorDefaultArgs> = $Result.GetResult<Prisma.$AuthenticatorPayload, S>

  type AuthenticatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatorCountAggregateInputType | true
    }

  export interface AuthenticatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authenticator'], meta: { name: 'Authenticator' } }
    /**
     * Find zero or one Authenticator that matches the filter.
     * @param {AuthenticatorFindUniqueArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatorFindUniqueArgs>(args: SelectSubset<T, AuthenticatorFindUniqueArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authenticator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatorFindUniqueOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatorFindFirstArgs>(args?: SelectSubset<T, AuthenticatorFindFirstArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authenticator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authenticators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticators
     * const authenticators = await prisma.authenticator.findMany()
     * 
     * // Get first 10 Authenticators
     * const authenticators = await prisma.authenticator.findMany({ take: 10 })
     * 
     * // Only select the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.findMany({ select: { credentialID: true } })
     * 
     */
    findMany<T extends AuthenticatorFindManyArgs>(args?: SelectSubset<T, AuthenticatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authenticator.
     * @param {AuthenticatorCreateArgs} args - Arguments to create a Authenticator.
     * @example
     * // Create one Authenticator
     * const Authenticator = await prisma.authenticator.create({
     *   data: {
     *     // ... data to create a Authenticator
     *   }
     * })
     * 
     */
    create<T extends AuthenticatorCreateArgs>(args: SelectSubset<T, AuthenticatorCreateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authenticators.
     * @param {AuthenticatorCreateManyArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticatorCreateManyArgs>(args?: SelectSubset<T, AuthenticatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authenticators and returns the data saved in the database.
     * @param {AuthenticatorCreateManyAndReturnArgs} args - Arguments to create many Authenticators.
     * @example
     * // Create many Authenticators
     * const authenticator = await prisma.authenticator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authenticators and only return the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.createManyAndReturn({
     *   select: { credentialID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthenticatorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthenticatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authenticator.
     * @param {AuthenticatorDeleteArgs} args - Arguments to delete one Authenticator.
     * @example
     * // Delete one Authenticator
     * const Authenticator = await prisma.authenticator.delete({
     *   where: {
     *     // ... filter to delete one Authenticator
     *   }
     * })
     * 
     */
    delete<T extends AuthenticatorDeleteArgs>(args: SelectSubset<T, AuthenticatorDeleteArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authenticator.
     * @param {AuthenticatorUpdateArgs} args - Arguments to update one Authenticator.
     * @example
     * // Update one Authenticator
     * const authenticator = await prisma.authenticator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticatorUpdateArgs>(args: SelectSubset<T, AuthenticatorUpdateArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authenticators.
     * @param {AuthenticatorDeleteManyArgs} args - Arguments to filter Authenticators to delete.
     * @example
     * // Delete a few Authenticators
     * const { count } = await prisma.authenticator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticatorDeleteManyArgs>(args?: SelectSubset<T, AuthenticatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticatorUpdateManyArgs>(args: SelectSubset<T, AuthenticatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticators and returns the data updated in the database.
     * @param {AuthenticatorUpdateManyAndReturnArgs} args - Arguments to update many Authenticators.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authenticators and only return the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.updateManyAndReturn({
     *   select: { credentialID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthenticatorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthenticatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authenticator.
     * @param {AuthenticatorUpsertArgs} args - Arguments to update or create a Authenticator.
     * @example
     * // Update or create a Authenticator
     * const authenticator = await prisma.authenticator.upsert({
     *   create: {
     *     // ... data to create a Authenticator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatorUpsertArgs>(args: SelectSubset<T, AuthenticatorUpsertArgs<ExtArgs>>): Prisma__AuthenticatorClient<$Result.GetResult<Prisma.$AuthenticatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorCountArgs} args - Arguments to filter Authenticators to count.
     * @example
     * // Count the number of Authenticators
     * const count = await prisma.authenticator.count({
     *   where: {
     *     // ... the filter for the Authenticators we want to count
     *   }
     * })
    **/
    count<T extends AuthenticatorCountArgs>(
      args?: Subset<T, AuthenticatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthenticatorAggregateArgs>(args: Subset<T, AuthenticatorAggregateArgs>): Prisma.PrismaPromise<GetAuthenticatorAggregateType<T>>

    /**
     * Group by Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthenticatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthenticatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authenticator model
   */
  readonly fields: AuthenticatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authenticator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Authenticator model
   */
  interface AuthenticatorFieldRefs {
    readonly credentialID: FieldRef<"Authenticator", 'String'>
    readonly userId: FieldRef<"Authenticator", 'String'>
    readonly providerAccountId: FieldRef<"Authenticator", 'String'>
    readonly credentialPublicKey: FieldRef<"Authenticator", 'String'>
    readonly counter: FieldRef<"Authenticator", 'Int'>
    readonly credentialDeviceType: FieldRef<"Authenticator", 'String'>
    readonly credentialBackedUp: FieldRef<"Authenticator", 'Boolean'>
    readonly transports: FieldRef<"Authenticator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Authenticator findUnique
   */
  export type AuthenticatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findUniqueOrThrow
   */
  export type AuthenticatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator findFirst
   */
  export type AuthenticatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findFirstOrThrow
   */
  export type AuthenticatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authenticators.
     */
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator findMany
   */
  export type AuthenticatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter, which Authenticators to fetch.
     */
    where?: AuthenticatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: AuthenticatorOrderByWithRelationInput | AuthenticatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authenticators.
     */
    skip?: number
    distinct?: AuthenticatorScalarFieldEnum | AuthenticatorScalarFieldEnum[]
  }

  /**
   * Authenticator create
   */
  export type AuthenticatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Authenticator.
     */
    data: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
  }

  /**
   * Authenticator createMany
   */
  export type AuthenticatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authenticator createManyAndReturn
   */
  export type AuthenticatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * The data used to create many Authenticators.
     */
    data: AuthenticatorCreateManyInput | AuthenticatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authenticator update
   */
  export type AuthenticatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Authenticator.
     */
    data: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
    /**
     * Choose, which Authenticator to update.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator updateMany
   */
  export type AuthenticatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
  }

  /**
   * Authenticator updateManyAndReturn
   */
  export type AuthenticatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * The data used to update Authenticators.
     */
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyInput>
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authenticator upsert
   */
  export type AuthenticatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Authenticator to update in case it exists.
     */
    where: AuthenticatorWhereUniqueInput
    /**
     * In case the Authenticator found by the `where` argument doesn't exist, create a new Authenticator with this data.
     */
    create: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>
    /**
     * In case the Authenticator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>
  }

  /**
   * Authenticator delete
   */
  export type AuthenticatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
    /**
     * Filter which Authenticator to delete.
     */
    where: AuthenticatorWhereUniqueInput
  }

  /**
   * Authenticator deleteMany
   */
  export type AuthenticatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authenticators to delete
     */
    where?: AuthenticatorWhereInput
    /**
     * Limit how many Authenticators to delete.
     */
    limit?: number
  }

  /**
   * Authenticator without action
   */
  export type AuthenticatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authenticator
     */
    omit?: AuthenticatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthenticatorInclude<ExtArgs> | null
  }


  /**
   * Model NewsLetterSubscriptions
   */

  export type AggregateNewsLetterSubscriptions = {
    _count: NewsLetterSubscriptionsCountAggregateOutputType | null
    _avg: NewsLetterSubscriptionsAvgAggregateOutputType | null
    _sum: NewsLetterSubscriptionsSumAggregateOutputType | null
    _min: NewsLetterSubscriptionsMinAggregateOutputType | null
    _max: NewsLetterSubscriptionsMaxAggregateOutputType | null
  }

  export type NewsLetterSubscriptionsAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsLetterSubscriptionsSumAggregateOutputType = {
    id: number | null
  }

  export type NewsLetterSubscriptionsMinAggregateOutputType = {
    id: number | null
    email: string | null
    confirmationId: string | null
    confirmationExpiresAt: Date | null
    createdAt: Date | null
    confirmedAt: Date | null
    canceledAt: Date | null
  }

  export type NewsLetterSubscriptionsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    confirmationId: string | null
    confirmationExpiresAt: Date | null
    createdAt: Date | null
    confirmedAt: Date | null
    canceledAt: Date | null
  }

  export type NewsLetterSubscriptionsCountAggregateOutputType = {
    id: number
    email: number
    confirmationId: number
    confirmationExpiresAt: number
    createdAt: number
    confirmedAt: number
    canceledAt: number
    _all: number
  }


  export type NewsLetterSubscriptionsAvgAggregateInputType = {
    id?: true
  }

  export type NewsLetterSubscriptionsSumAggregateInputType = {
    id?: true
  }

  export type NewsLetterSubscriptionsMinAggregateInputType = {
    id?: true
    email?: true
    confirmationId?: true
    confirmationExpiresAt?: true
    createdAt?: true
    confirmedAt?: true
    canceledAt?: true
  }

  export type NewsLetterSubscriptionsMaxAggregateInputType = {
    id?: true
    email?: true
    confirmationId?: true
    confirmationExpiresAt?: true
    createdAt?: true
    confirmedAt?: true
    canceledAt?: true
  }

  export type NewsLetterSubscriptionsCountAggregateInputType = {
    id?: true
    email?: true
    confirmationId?: true
    confirmationExpiresAt?: true
    createdAt?: true
    confirmedAt?: true
    canceledAt?: true
    _all?: true
  }

  export type NewsLetterSubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLetterSubscriptions to aggregate.
     */
    where?: NewsLetterSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetterSubscriptions to fetch.
     */
    orderBy?: NewsLetterSubscriptionsOrderByWithRelationInput | NewsLetterSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsLetterSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsLetterSubscriptions
    **/
    _count?: true | NewsLetterSubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsLetterSubscriptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsLetterSubscriptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsLetterSubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsLetterSubscriptionsMaxAggregateInputType
  }

  export type GetNewsLetterSubscriptionsAggregateType<T extends NewsLetterSubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsLetterSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsLetterSubscriptions[P]>
      : GetScalarType<T[P], AggregateNewsLetterSubscriptions[P]>
  }




  export type NewsLetterSubscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsLetterSubscriptionsWhereInput
    orderBy?: NewsLetterSubscriptionsOrderByWithAggregationInput | NewsLetterSubscriptionsOrderByWithAggregationInput[]
    by: NewsLetterSubscriptionsScalarFieldEnum[] | NewsLetterSubscriptionsScalarFieldEnum
    having?: NewsLetterSubscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsLetterSubscriptionsCountAggregateInputType | true
    _avg?: NewsLetterSubscriptionsAvgAggregateInputType
    _sum?: NewsLetterSubscriptionsSumAggregateInputType
    _min?: NewsLetterSubscriptionsMinAggregateInputType
    _max?: NewsLetterSubscriptionsMaxAggregateInputType
  }

  export type NewsLetterSubscriptionsGroupByOutputType = {
    id: number
    email: string
    confirmationId: string
    confirmationExpiresAt: Date
    createdAt: Date
    confirmedAt: Date | null
    canceledAt: Date | null
    _count: NewsLetterSubscriptionsCountAggregateOutputType | null
    _avg: NewsLetterSubscriptionsAvgAggregateOutputType | null
    _sum: NewsLetterSubscriptionsSumAggregateOutputType | null
    _min: NewsLetterSubscriptionsMinAggregateOutputType | null
    _max: NewsLetterSubscriptionsMaxAggregateOutputType | null
  }

  type GetNewsLetterSubscriptionsGroupByPayload<T extends NewsLetterSubscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsLetterSubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsLetterSubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsLetterSubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsLetterSubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type NewsLetterSubscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    confirmationId?: boolean
    confirmationExpiresAt?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    canceledAt?: boolean
  }, ExtArgs["result"]["newsLetterSubscriptions"]>

  export type NewsLetterSubscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    confirmationId?: boolean
    confirmationExpiresAt?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    canceledAt?: boolean
  }, ExtArgs["result"]["newsLetterSubscriptions"]>

  export type NewsLetterSubscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    confirmationId?: boolean
    confirmationExpiresAt?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    canceledAt?: boolean
  }, ExtArgs["result"]["newsLetterSubscriptions"]>

  export type NewsLetterSubscriptionsSelectScalar = {
    id?: boolean
    email?: boolean
    confirmationId?: boolean
    confirmationExpiresAt?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    canceledAt?: boolean
  }

  export type NewsLetterSubscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "confirmationId" | "confirmationExpiresAt" | "createdAt" | "confirmedAt" | "canceledAt", ExtArgs["result"]["newsLetterSubscriptions"]>

  export type $NewsLetterSubscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsLetterSubscriptions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Entity ID
       */
      id: number
      /**
       * Email used for subscription
       */
      email: string
      /**
       * Universion ID generated on subscription
       */
      confirmationId: string
      /**
       * Date of expiration to confirm subscription before enable new subscription for the same email
       */
      confirmationExpiresAt: Date
      /**
       * Entity creation date
       */
      createdAt: Date
      /**
       * Date of the confirmation of subscription
       */
      confirmedAt: Date | null
      /**
       * Date of the cancelled subscription
       */
      canceledAt: Date | null
    }, ExtArgs["result"]["newsLetterSubscriptions"]>
    composites: {}
  }

  type NewsLetterSubscriptionsGetPayload<S extends boolean | null | undefined | NewsLetterSubscriptionsDefaultArgs> = $Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload, S>

  type NewsLetterSubscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsLetterSubscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsLetterSubscriptionsCountAggregateInputType | true
    }

  export interface NewsLetterSubscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsLetterSubscriptions'], meta: { name: 'NewsLetterSubscriptions' } }
    /**
     * Find zero or one NewsLetterSubscriptions that matches the filter.
     * @param {NewsLetterSubscriptionsFindUniqueArgs} args - Arguments to find a NewsLetterSubscriptions
     * @example
     * // Get one NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsLetterSubscriptionsFindUniqueArgs>(args: SelectSubset<T, NewsLetterSubscriptionsFindUniqueArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionsClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsLetterSubscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsLetterSubscriptionsFindUniqueOrThrowArgs} args - Arguments to find a NewsLetterSubscriptions
     * @example
     * // Get one NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsLetterSubscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsLetterSubscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionsClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLetterSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionsFindFirstArgs} args - Arguments to find a NewsLetterSubscriptions
     * @example
     * // Get one NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsLetterSubscriptionsFindFirstArgs>(args?: SelectSubset<T, NewsLetterSubscriptionsFindFirstArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionsClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLetterSubscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionsFindFirstOrThrowArgs} args - Arguments to find a NewsLetterSubscriptions
     * @example
     * // Get one NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsLetterSubscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsLetterSubscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionsClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsLetterSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findMany()
     * 
     * // Get first 10 NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsLetterSubscriptionsWithIdOnly = await prisma.newsLetterSubscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsLetterSubscriptionsFindManyArgs>(args?: SelectSubset<T, NewsLetterSubscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsLetterSubscriptions.
     * @param {NewsLetterSubscriptionsCreateArgs} args - Arguments to create a NewsLetterSubscriptions.
     * @example
     * // Create one NewsLetterSubscriptions
     * const NewsLetterSubscriptions = await prisma.newsLetterSubscriptions.create({
     *   data: {
     *     // ... data to create a NewsLetterSubscriptions
     *   }
     * })
     * 
     */
    create<T extends NewsLetterSubscriptionsCreateArgs>(args: SelectSubset<T, NewsLetterSubscriptionsCreateArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionsClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsLetterSubscriptions.
     * @param {NewsLetterSubscriptionsCreateManyArgs} args - Arguments to create many NewsLetterSubscriptions.
     * @example
     * // Create many NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsLetterSubscriptionsCreateManyArgs>(args?: SelectSubset<T, NewsLetterSubscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsLetterSubscriptions and returns the data saved in the database.
     * @param {NewsLetterSubscriptionsCreateManyAndReturnArgs} args - Arguments to create many NewsLetterSubscriptions.
     * @example
     * // Create many NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsLetterSubscriptions and only return the `id`
     * const newsLetterSubscriptionsWithIdOnly = await prisma.newsLetterSubscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsLetterSubscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsLetterSubscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsLetterSubscriptions.
     * @param {NewsLetterSubscriptionsDeleteArgs} args - Arguments to delete one NewsLetterSubscriptions.
     * @example
     * // Delete one NewsLetterSubscriptions
     * const NewsLetterSubscriptions = await prisma.newsLetterSubscriptions.delete({
     *   where: {
     *     // ... filter to delete one NewsLetterSubscriptions
     *   }
     * })
     * 
     */
    delete<T extends NewsLetterSubscriptionsDeleteArgs>(args: SelectSubset<T, NewsLetterSubscriptionsDeleteArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionsClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsLetterSubscriptions.
     * @param {NewsLetterSubscriptionsUpdateArgs} args - Arguments to update one NewsLetterSubscriptions.
     * @example
     * // Update one NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsLetterSubscriptionsUpdateArgs>(args: SelectSubset<T, NewsLetterSubscriptionsUpdateArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionsClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsLetterSubscriptions.
     * @param {NewsLetterSubscriptionsDeleteManyArgs} args - Arguments to filter NewsLetterSubscriptions to delete.
     * @example
     * // Delete a few NewsLetterSubscriptions
     * const { count } = await prisma.newsLetterSubscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsLetterSubscriptionsDeleteManyArgs>(args?: SelectSubset<T, NewsLetterSubscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLetterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsLetterSubscriptionsUpdateManyArgs>(args: SelectSubset<T, NewsLetterSubscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLetterSubscriptions and returns the data updated in the database.
     * @param {NewsLetterSubscriptionsUpdateManyAndReturnArgs} args - Arguments to update many NewsLetterSubscriptions.
     * @example
     * // Update many NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsLetterSubscriptions and only return the `id`
     * const newsLetterSubscriptionsWithIdOnly = await prisma.newsLetterSubscriptions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsLetterSubscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsLetterSubscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsLetterSubscriptions.
     * @param {NewsLetterSubscriptionsUpsertArgs} args - Arguments to update or create a NewsLetterSubscriptions.
     * @example
     * // Update or create a NewsLetterSubscriptions
     * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.upsert({
     *   create: {
     *     // ... data to create a NewsLetterSubscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsLetterSubscriptions we want to update
     *   }
     * })
     */
    upsert<T extends NewsLetterSubscriptionsUpsertArgs>(args: SelectSubset<T, NewsLetterSubscriptionsUpsertArgs<ExtArgs>>): Prisma__NewsLetterSubscriptionsClient<$Result.GetResult<Prisma.$NewsLetterSubscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsLetterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionsCountArgs} args - Arguments to filter NewsLetterSubscriptions to count.
     * @example
     * // Count the number of NewsLetterSubscriptions
     * const count = await prisma.newsLetterSubscriptions.count({
     *   where: {
     *     // ... the filter for the NewsLetterSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends NewsLetterSubscriptionsCountArgs>(
      args?: Subset<T, NewsLetterSubscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsLetterSubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsLetterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsLetterSubscriptionsAggregateArgs>(args: Subset<T, NewsLetterSubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetNewsLetterSubscriptionsAggregateType<T>>

    /**
     * Group by NewsLetterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterSubscriptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsLetterSubscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsLetterSubscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: NewsLetterSubscriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsLetterSubscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsLetterSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsLetterSubscriptions model
   */
  readonly fields: NewsLetterSubscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsLetterSubscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsLetterSubscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsLetterSubscriptions model
   */
  interface NewsLetterSubscriptionsFieldRefs {
    readonly id: FieldRef<"NewsLetterSubscriptions", 'Int'>
    readonly email: FieldRef<"NewsLetterSubscriptions", 'String'>
    readonly confirmationId: FieldRef<"NewsLetterSubscriptions", 'String'>
    readonly confirmationExpiresAt: FieldRef<"NewsLetterSubscriptions", 'DateTime'>
    readonly createdAt: FieldRef<"NewsLetterSubscriptions", 'DateTime'>
    readonly confirmedAt: FieldRef<"NewsLetterSubscriptions", 'DateTime'>
    readonly canceledAt: FieldRef<"NewsLetterSubscriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsLetterSubscriptions findUnique
   */
  export type NewsLetterSubscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscriptions to fetch.
     */
    where: NewsLetterSubscriptionsWhereUniqueInput
  }

  /**
   * NewsLetterSubscriptions findUniqueOrThrow
   */
  export type NewsLetterSubscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscriptions to fetch.
     */
    where: NewsLetterSubscriptionsWhereUniqueInput
  }

  /**
   * NewsLetterSubscriptions findFirst
   */
  export type NewsLetterSubscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscriptions to fetch.
     */
    where?: NewsLetterSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetterSubscriptions to fetch.
     */
    orderBy?: NewsLetterSubscriptionsOrderByWithRelationInput | NewsLetterSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLetterSubscriptions.
     */
    cursor?: NewsLetterSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLetterSubscriptions.
     */
    distinct?: NewsLetterSubscriptionsScalarFieldEnum | NewsLetterSubscriptionsScalarFieldEnum[]
  }

  /**
   * NewsLetterSubscriptions findFirstOrThrow
   */
  export type NewsLetterSubscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscriptions to fetch.
     */
    where?: NewsLetterSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetterSubscriptions to fetch.
     */
    orderBy?: NewsLetterSubscriptionsOrderByWithRelationInput | NewsLetterSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLetterSubscriptions.
     */
    cursor?: NewsLetterSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLetterSubscriptions.
     */
    distinct?: NewsLetterSubscriptionsScalarFieldEnum | NewsLetterSubscriptionsScalarFieldEnum[]
  }

  /**
   * NewsLetterSubscriptions findMany
   */
  export type NewsLetterSubscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetterSubscriptions to fetch.
     */
    where?: NewsLetterSubscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetterSubscriptions to fetch.
     */
    orderBy?: NewsLetterSubscriptionsOrderByWithRelationInput | NewsLetterSubscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsLetterSubscriptions.
     */
    cursor?: NewsLetterSubscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetterSubscriptions.
     */
    skip?: number
    distinct?: NewsLetterSubscriptionsScalarFieldEnum | NewsLetterSubscriptionsScalarFieldEnum[]
  }

  /**
   * NewsLetterSubscriptions create
   */
  export type NewsLetterSubscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsLetterSubscriptions.
     */
    data: XOR<NewsLetterSubscriptionsCreateInput, NewsLetterSubscriptionsUncheckedCreateInput>
  }

  /**
   * NewsLetterSubscriptions createMany
   */
  export type NewsLetterSubscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsLetterSubscriptions.
     */
    data: NewsLetterSubscriptionsCreateManyInput | NewsLetterSubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsLetterSubscriptions createManyAndReturn
   */
  export type NewsLetterSubscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many NewsLetterSubscriptions.
     */
    data: NewsLetterSubscriptionsCreateManyInput | NewsLetterSubscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsLetterSubscriptions update
   */
  export type NewsLetterSubscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsLetterSubscriptions.
     */
    data: XOR<NewsLetterSubscriptionsUpdateInput, NewsLetterSubscriptionsUncheckedUpdateInput>
    /**
     * Choose, which NewsLetterSubscriptions to update.
     */
    where: NewsLetterSubscriptionsWhereUniqueInput
  }

  /**
   * NewsLetterSubscriptions updateMany
   */
  export type NewsLetterSubscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsLetterSubscriptions.
     */
    data: XOR<NewsLetterSubscriptionsUpdateManyMutationInput, NewsLetterSubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which NewsLetterSubscriptions to update
     */
    where?: NewsLetterSubscriptionsWhereInput
    /**
     * Limit how many NewsLetterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsLetterSubscriptions updateManyAndReturn
   */
  export type NewsLetterSubscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update NewsLetterSubscriptions.
     */
    data: XOR<NewsLetterSubscriptionsUpdateManyMutationInput, NewsLetterSubscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which NewsLetterSubscriptions to update
     */
    where?: NewsLetterSubscriptionsWhereInput
    /**
     * Limit how many NewsLetterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsLetterSubscriptions upsert
   */
  export type NewsLetterSubscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsLetterSubscriptions to update in case it exists.
     */
    where: NewsLetterSubscriptionsWhereUniqueInput
    /**
     * In case the NewsLetterSubscriptions found by the `where` argument doesn't exist, create a new NewsLetterSubscriptions with this data.
     */
    create: XOR<NewsLetterSubscriptionsCreateInput, NewsLetterSubscriptionsUncheckedCreateInput>
    /**
     * In case the NewsLetterSubscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsLetterSubscriptionsUpdateInput, NewsLetterSubscriptionsUncheckedUpdateInput>
  }

  /**
   * NewsLetterSubscriptions delete
   */
  export type NewsLetterSubscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
    /**
     * Filter which NewsLetterSubscriptions to delete.
     */
    where: NewsLetterSubscriptionsWhereUniqueInput
  }

  /**
   * NewsLetterSubscriptions deleteMany
   */
  export type NewsLetterSubscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLetterSubscriptions to delete
     */
    where?: NewsLetterSubscriptionsWhereInput
    /**
     * Limit how many NewsLetterSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * NewsLetterSubscriptions without action
   */
  export type NewsLetterSubscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetterSubscriptions
     */
    select?: NewsLetterSubscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetterSubscriptions
     */
    omit?: NewsLetterSubscriptionsOmit<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    readTime: number | null
    Priority: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    readTime: number | null
    Priority: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    notionId: string | null
    slug: string | null
    category: string | null
    coverUrl: string | null
    excerpt_pt: string | null
    excerpt_en: string | null
    readTime: number | null
    featured: boolean | null
    Priority: number | null
    translatedModel: $Enums.TranslatedModel | null
    status: $Enums.PostStatus | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    notionId: string | null
    slug: string | null
    category: string | null
    coverUrl: string | null
    excerpt_pt: string | null
    excerpt_en: string | null
    readTime: number | null
    featured: boolean | null
    Priority: number | null
    translatedModel: $Enums.TranslatedModel | null
    status: $Enums.PostStatus | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    notionId: number
    slug: number
    category: number
    tags: number
    coverUrl: number
    excerpt_pt: number
    excerpt_en: number
    readTime: number
    featured: number
    Priority: number
    translatedModel: number
    ptBr: number
    en: number
    status: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    readTime?: true
    Priority?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    readTime?: true
    Priority?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    notionId?: true
    slug?: true
    category?: true
    coverUrl?: true
    excerpt_pt?: true
    excerpt_en?: true
    readTime?: true
    featured?: true
    Priority?: true
    translatedModel?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    notionId?: true
    slug?: true
    category?: true
    coverUrl?: true
    excerpt_pt?: true
    excerpt_en?: true
    readTime?: true
    featured?: true
    Priority?: true
    translatedModel?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    notionId?: true
    slug?: true
    category?: true
    tags?: true
    coverUrl?: true
    excerpt_pt?: true
    excerpt_en?: true
    readTime?: true
    featured?: true
    Priority?: true
    translatedModel?: true
    ptBr?: true
    en?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    notionId: string
    slug: string
    category: string
    tags: string[]
    coverUrl: string
    excerpt_pt: string
    excerpt_en: string
    readTime: number
    featured: boolean
    Priority: number
    translatedModel: $Enums.TranslatedModel
    ptBr: JsonValue
    en: JsonValue
    status: $Enums.PostStatus
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notionId?: boolean
    slug?: boolean
    category?: boolean
    tags?: boolean
    coverUrl?: boolean
    excerpt_pt?: boolean
    excerpt_en?: boolean
    readTime?: boolean
    featured?: boolean
    Priority?: boolean
    translatedModel?: boolean
    ptBr?: boolean
    en?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PostMetrics?: boolean | Posts$PostMetricsArgs<ExtArgs>
    PostComments?: boolean | Posts$PostCommentsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notionId?: boolean
    slug?: boolean
    category?: boolean
    tags?: boolean
    coverUrl?: boolean
    excerpt_pt?: boolean
    excerpt_en?: boolean
    readTime?: boolean
    featured?: boolean
    Priority?: boolean
    translatedModel?: boolean
    ptBr?: boolean
    en?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notionId?: boolean
    slug?: boolean
    category?: boolean
    tags?: boolean
    coverUrl?: boolean
    excerpt_pt?: boolean
    excerpt_en?: boolean
    readTime?: boolean
    featured?: boolean
    Priority?: boolean
    translatedModel?: boolean
    ptBr?: boolean
    en?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    notionId?: boolean
    slug?: boolean
    category?: boolean
    tags?: boolean
    coverUrl?: boolean
    excerpt_pt?: boolean
    excerpt_en?: boolean
    readTime?: boolean
    featured?: boolean
    Priority?: boolean
    translatedModel?: boolean
    ptBr?: boolean
    en?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notionId" | "slug" | "category" | "tags" | "coverUrl" | "excerpt_pt" | "excerpt_en" | "readTime" | "featured" | "Priority" | "translatedModel" | "ptBr" | "en" | "status" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PostMetrics?: boolean | Posts$PostMetricsArgs<ExtArgs>
    PostComments?: boolean | Posts$PostCommentsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      PostMetrics: Prisma.$PostMetricsPayload<ExtArgs> | null
      PostComments: Prisma.$PostCommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Entity ID
       */
      id: number
      /**
       * Notion Post ID
       */
      notionId: string
      /**
       * Post Slug
       */
      slug: string
      /**
       * Post Category
       */
      category: string
      /**
       * Post Tags
       */
      tags: string[]
      /**
       * Post Cover Image URL
       */
      coverUrl: string
      /**
       * Post Excerpt in Portuguese (varchar 500)
       */
      excerpt_pt: string
      /**
       * Post Excerpt in English (varchar 500)
       */
      excerpt_en: string
      /**
       * Post Read estimated time
       */
      readTime: number
      /**
       * If post is featured to be highlighted
       */
      featured: boolean
      /**
       * Post priority to be at top of posts
       */
      Priority: number
      /**
       * Translation model used to translate to english
       */
      translatedModel: $Enums.TranslatedModel
      /**
       * Notion JSON in Portuguese
       */
      ptBr: Prisma.JsonValue
      /**
       * Notion JSON in English
       */
      en: Prisma.JsonValue
      /**
       * Status of the post DRAFT, PUBLISHED OR ARCHIVED
       */
      status: $Enums.PostStatus
      /**
       * Date of Publish
       */
      publishedAt: Date | null
      /**
       * Date of creation
       */
      createdAt: Date
      /**
       * Last date that was edited
       */
      updatedAt: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PostMetrics<T extends Posts$PostMetricsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$PostMetricsArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PostComments<T extends Posts$PostCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$PostCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'Int'>
    readonly notionId: FieldRef<"Posts", 'String'>
    readonly slug: FieldRef<"Posts", 'String'>
    readonly category: FieldRef<"Posts", 'String'>
    readonly tags: FieldRef<"Posts", 'String[]'>
    readonly coverUrl: FieldRef<"Posts", 'String'>
    readonly excerpt_pt: FieldRef<"Posts", 'String'>
    readonly excerpt_en: FieldRef<"Posts", 'String'>
    readonly readTime: FieldRef<"Posts", 'Int'>
    readonly featured: FieldRef<"Posts", 'Boolean'>
    readonly Priority: FieldRef<"Posts", 'Int'>
    readonly translatedModel: FieldRef<"Posts", 'TranslatedModel'>
    readonly ptBr: FieldRef<"Posts", 'Json'>
    readonly en: FieldRef<"Posts", 'Json'>
    readonly status: FieldRef<"Posts", 'PostStatus'>
    readonly publishedAt: FieldRef<"Posts", 'DateTime'>
    readonly createdAt: FieldRef<"Posts", 'DateTime'>
    readonly updatedAt: FieldRef<"Posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.PostMetrics
   */
  export type Posts$PostMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    where?: PostMetricsWhereInput
  }

  /**
   * Posts.PostComments
   */
  export type Posts$PostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    cursor?: PostCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model PostMetrics
   */

  export type AggregatePostMetrics = {
    _count: PostMetricsCountAggregateOutputType | null
    _avg: PostMetricsAvgAggregateOutputType | null
    _sum: PostMetricsSumAggregateOutputType | null
    _min: PostMetricsMinAggregateOutputType | null
    _max: PostMetricsMaxAggregateOutputType | null
  }

  export type PostMetricsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    numberOfViews: number | null
    totalOfComments: number | null
    numberOfLikes: number | null
  }

  export type PostMetricsSumAggregateOutputType = {
    id: number | null
    postId: number | null
    numberOfViews: number | null
    totalOfComments: number | null
    numberOfLikes: number | null
  }

  export type PostMetricsMinAggregateOutputType = {
    id: number | null
    postId: number | null
    numberOfViews: number | null
    totalOfComments: number | null
    numberOfLikes: number | null
  }

  export type PostMetricsMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    numberOfViews: number | null
    totalOfComments: number | null
    numberOfLikes: number | null
  }

  export type PostMetricsCountAggregateOutputType = {
    id: number
    postId: number
    numberOfViews: number
    totalOfComments: number
    numberOfLikes: number
    _all: number
  }


  export type PostMetricsAvgAggregateInputType = {
    id?: true
    postId?: true
    numberOfViews?: true
    totalOfComments?: true
    numberOfLikes?: true
  }

  export type PostMetricsSumAggregateInputType = {
    id?: true
    postId?: true
    numberOfViews?: true
    totalOfComments?: true
    numberOfLikes?: true
  }

  export type PostMetricsMinAggregateInputType = {
    id?: true
    postId?: true
    numberOfViews?: true
    totalOfComments?: true
    numberOfLikes?: true
  }

  export type PostMetricsMaxAggregateInputType = {
    id?: true
    postId?: true
    numberOfViews?: true
    totalOfComments?: true
    numberOfLikes?: true
  }

  export type PostMetricsCountAggregateInputType = {
    id?: true
    postId?: true
    numberOfViews?: true
    totalOfComments?: true
    numberOfLikes?: true
    _all?: true
  }

  export type PostMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMetrics to aggregate.
     */
    where?: PostMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMetrics to fetch.
     */
    orderBy?: PostMetricsOrderByWithRelationInput | PostMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostMetrics
    **/
    _count?: true | PostMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMetricsMaxAggregateInputType
  }

  export type GetPostMetricsAggregateType<T extends PostMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostMetrics[P]>
      : GetScalarType<T[P], AggregatePostMetrics[P]>
  }




  export type PostMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMetricsWhereInput
    orderBy?: PostMetricsOrderByWithAggregationInput | PostMetricsOrderByWithAggregationInput[]
    by: PostMetricsScalarFieldEnum[] | PostMetricsScalarFieldEnum
    having?: PostMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostMetricsCountAggregateInputType | true
    _avg?: PostMetricsAvgAggregateInputType
    _sum?: PostMetricsSumAggregateInputType
    _min?: PostMetricsMinAggregateInputType
    _max?: PostMetricsMaxAggregateInputType
  }

  export type PostMetricsGroupByOutputType = {
    id: number
    postId: number
    numberOfViews: number
    totalOfComments: number
    numberOfLikes: number
    _count: PostMetricsCountAggregateOutputType | null
    _avg: PostMetricsAvgAggregateOutputType | null
    _sum: PostMetricsSumAggregateOutputType | null
    _min: PostMetricsMinAggregateOutputType | null
    _max: PostMetricsMaxAggregateOutputType | null
  }

  type GetPostMetricsGroupByPayload<T extends PostMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], PostMetricsGroupByOutputType[P]>
        }
      >
    >


  export type PostMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    numberOfViews?: boolean
    totalOfComments?: boolean
    numberOfLikes?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    PostLikes?: boolean | PostMetrics$PostLikesArgs<ExtArgs>
    _count?: boolean | PostMetricsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMetrics"]>

  export type PostMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    numberOfViews?: boolean
    totalOfComments?: boolean
    numberOfLikes?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMetrics"]>

  export type PostMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    numberOfViews?: boolean
    totalOfComments?: boolean
    numberOfLikes?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMetrics"]>

  export type PostMetricsSelectScalar = {
    id?: boolean
    postId?: boolean
    numberOfViews?: boolean
    totalOfComments?: boolean
    numberOfLikes?: boolean
  }

  export type PostMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "numberOfViews" | "totalOfComments" | "numberOfLikes", ExtArgs["result"]["postMetrics"]>
  export type PostMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    PostLikes?: boolean | PostMetrics$PostLikesArgs<ExtArgs>
    _count?: boolean | PostMetricsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type PostMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $PostMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostMetrics"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      PostLikes: Prisma.$PostLikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Entity ID
       */
      id: number
      /**
       * Post Id
       */
      postId: number
      /**
       * Number of incremental views
       */
      numberOfViews: number
      /**
       * Total of comments
       */
      totalOfComments: number
      /**
       * Number of likes
       */
      numberOfLikes: number
    }, ExtArgs["result"]["postMetrics"]>
    composites: {}
  }

  type PostMetricsGetPayload<S extends boolean | null | undefined | PostMetricsDefaultArgs> = $Result.GetResult<Prisma.$PostMetricsPayload, S>

  type PostMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostMetricsCountAggregateInputType | true
    }

  export interface PostMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostMetrics'], meta: { name: 'PostMetrics' } }
    /**
     * Find zero or one PostMetrics that matches the filter.
     * @param {PostMetricsFindUniqueArgs} args - Arguments to find a PostMetrics
     * @example
     * // Get one PostMetrics
     * const postMetrics = await prisma.postMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostMetricsFindUniqueArgs>(args: SelectSubset<T, PostMetricsFindUniqueArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostMetricsFindUniqueOrThrowArgs} args - Arguments to find a PostMetrics
     * @example
     * // Get one PostMetrics
     * const postMetrics = await prisma.postMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetricsFindFirstArgs} args - Arguments to find a PostMetrics
     * @example
     * // Get one PostMetrics
     * const postMetrics = await prisma.postMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostMetricsFindFirstArgs>(args?: SelectSubset<T, PostMetricsFindFirstArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetricsFindFirstOrThrowArgs} args - Arguments to find a PostMetrics
     * @example
     * // Get one PostMetrics
     * const postMetrics = await prisma.postMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostMetrics
     * const postMetrics = await prisma.postMetrics.findMany()
     * 
     * // Get first 10 PostMetrics
     * const postMetrics = await prisma.postMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postMetricsWithIdOnly = await prisma.postMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostMetricsFindManyArgs>(args?: SelectSubset<T, PostMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostMetrics.
     * @param {PostMetricsCreateArgs} args - Arguments to create a PostMetrics.
     * @example
     * // Create one PostMetrics
     * const PostMetrics = await prisma.postMetrics.create({
     *   data: {
     *     // ... data to create a PostMetrics
     *   }
     * })
     * 
     */
    create<T extends PostMetricsCreateArgs>(args: SelectSubset<T, PostMetricsCreateArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostMetrics.
     * @param {PostMetricsCreateManyArgs} args - Arguments to create many PostMetrics.
     * @example
     * // Create many PostMetrics
     * const postMetrics = await prisma.postMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostMetricsCreateManyArgs>(args?: SelectSubset<T, PostMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostMetrics and returns the data saved in the database.
     * @param {PostMetricsCreateManyAndReturnArgs} args - Arguments to create many PostMetrics.
     * @example
     * // Create many PostMetrics
     * const postMetrics = await prisma.postMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostMetrics and only return the `id`
     * const postMetricsWithIdOnly = await prisma.postMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostMetrics.
     * @param {PostMetricsDeleteArgs} args - Arguments to delete one PostMetrics.
     * @example
     * // Delete one PostMetrics
     * const PostMetrics = await prisma.postMetrics.delete({
     *   where: {
     *     // ... filter to delete one PostMetrics
     *   }
     * })
     * 
     */
    delete<T extends PostMetricsDeleteArgs>(args: SelectSubset<T, PostMetricsDeleteArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostMetrics.
     * @param {PostMetricsUpdateArgs} args - Arguments to update one PostMetrics.
     * @example
     * // Update one PostMetrics
     * const postMetrics = await prisma.postMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostMetricsUpdateArgs>(args: SelectSubset<T, PostMetricsUpdateArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostMetrics.
     * @param {PostMetricsDeleteManyArgs} args - Arguments to filter PostMetrics to delete.
     * @example
     * // Delete a few PostMetrics
     * const { count } = await prisma.postMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostMetricsDeleteManyArgs>(args?: SelectSubset<T, PostMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostMetrics
     * const postMetrics = await prisma.postMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostMetricsUpdateManyArgs>(args: SelectSubset<T, PostMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostMetrics and returns the data updated in the database.
     * @param {PostMetricsUpdateManyAndReturnArgs} args - Arguments to update many PostMetrics.
     * @example
     * // Update many PostMetrics
     * const postMetrics = await prisma.postMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostMetrics and only return the `id`
     * const postMetricsWithIdOnly = await prisma.postMetrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostMetrics.
     * @param {PostMetricsUpsertArgs} args - Arguments to update or create a PostMetrics.
     * @example
     * // Update or create a PostMetrics
     * const postMetrics = await prisma.postMetrics.upsert({
     *   create: {
     *     // ... data to create a PostMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostMetrics we want to update
     *   }
     * })
     */
    upsert<T extends PostMetricsUpsertArgs>(args: SelectSubset<T, PostMetricsUpsertArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetricsCountArgs} args - Arguments to filter PostMetrics to count.
     * @example
     * // Count the number of PostMetrics
     * const count = await prisma.postMetrics.count({
     *   where: {
     *     // ... the filter for the PostMetrics we want to count
     *   }
     * })
    **/
    count<T extends PostMetricsCountArgs>(
      args?: Subset<T, PostMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostMetricsAggregateArgs>(args: Subset<T, PostMetricsAggregateArgs>): Prisma.PrismaPromise<GetPostMetricsAggregateType<T>>

    /**
     * Group by PostMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostMetricsGroupByArgs['orderBy'] }
        : { orderBy?: PostMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostMetrics model
   */
  readonly fields: PostMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PostLikes<T extends PostMetrics$PostLikesArgs<ExtArgs> = {}>(args?: Subset<T, PostMetrics$PostLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostMetrics model
   */
  interface PostMetricsFieldRefs {
    readonly id: FieldRef<"PostMetrics", 'Int'>
    readonly postId: FieldRef<"PostMetrics", 'Int'>
    readonly numberOfViews: FieldRef<"PostMetrics", 'Int'>
    readonly totalOfComments: FieldRef<"PostMetrics", 'Int'>
    readonly numberOfLikes: FieldRef<"PostMetrics", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostMetrics findUnique
   */
  export type PostMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PostMetrics to fetch.
     */
    where: PostMetricsWhereUniqueInput
  }

  /**
   * PostMetrics findUniqueOrThrow
   */
  export type PostMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PostMetrics to fetch.
     */
    where: PostMetricsWhereUniqueInput
  }

  /**
   * PostMetrics findFirst
   */
  export type PostMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PostMetrics to fetch.
     */
    where?: PostMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMetrics to fetch.
     */
    orderBy?: PostMetricsOrderByWithRelationInput | PostMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMetrics.
     */
    cursor?: PostMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMetrics.
     */
    distinct?: PostMetricsScalarFieldEnum | PostMetricsScalarFieldEnum[]
  }

  /**
   * PostMetrics findFirstOrThrow
   */
  export type PostMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PostMetrics to fetch.
     */
    where?: PostMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMetrics to fetch.
     */
    orderBy?: PostMetricsOrderByWithRelationInput | PostMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMetrics.
     */
    cursor?: PostMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMetrics.
     */
    distinct?: PostMetricsScalarFieldEnum | PostMetricsScalarFieldEnum[]
  }

  /**
   * PostMetrics findMany
   */
  export type PostMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * Filter, which PostMetrics to fetch.
     */
    where?: PostMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMetrics to fetch.
     */
    orderBy?: PostMetricsOrderByWithRelationInput | PostMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostMetrics.
     */
    cursor?: PostMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMetrics.
     */
    skip?: number
    distinct?: PostMetricsScalarFieldEnum | PostMetricsScalarFieldEnum[]
  }

  /**
   * PostMetrics create
   */
  export type PostMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostMetrics.
     */
    data: XOR<PostMetricsCreateInput, PostMetricsUncheckedCreateInput>
  }

  /**
   * PostMetrics createMany
   */
  export type PostMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostMetrics.
     */
    data: PostMetricsCreateManyInput | PostMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostMetrics createManyAndReturn
   */
  export type PostMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many PostMetrics.
     */
    data: PostMetricsCreateManyInput | PostMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostMetrics update
   */
  export type PostMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostMetrics.
     */
    data: XOR<PostMetricsUpdateInput, PostMetricsUncheckedUpdateInput>
    /**
     * Choose, which PostMetrics to update.
     */
    where: PostMetricsWhereUniqueInput
  }

  /**
   * PostMetrics updateMany
   */
  export type PostMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostMetrics.
     */
    data: XOR<PostMetricsUpdateManyMutationInput, PostMetricsUncheckedUpdateManyInput>
    /**
     * Filter which PostMetrics to update
     */
    where?: PostMetricsWhereInput
    /**
     * Limit how many PostMetrics to update.
     */
    limit?: number
  }

  /**
   * PostMetrics updateManyAndReturn
   */
  export type PostMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * The data used to update PostMetrics.
     */
    data: XOR<PostMetricsUpdateManyMutationInput, PostMetricsUncheckedUpdateManyInput>
    /**
     * Filter which PostMetrics to update
     */
    where?: PostMetricsWhereInput
    /**
     * Limit how many PostMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostMetrics upsert
   */
  export type PostMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostMetrics to update in case it exists.
     */
    where: PostMetricsWhereUniqueInput
    /**
     * In case the PostMetrics found by the `where` argument doesn't exist, create a new PostMetrics with this data.
     */
    create: XOR<PostMetricsCreateInput, PostMetricsUncheckedCreateInput>
    /**
     * In case the PostMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostMetricsUpdateInput, PostMetricsUncheckedUpdateInput>
  }

  /**
   * PostMetrics delete
   */
  export type PostMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
    /**
     * Filter which PostMetrics to delete.
     */
    where: PostMetricsWhereUniqueInput
  }

  /**
   * PostMetrics deleteMany
   */
  export type PostMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMetrics to delete
     */
    where?: PostMetricsWhereInput
    /**
     * Limit how many PostMetrics to delete.
     */
    limit?: number
  }

  /**
   * PostMetrics.PostLikes
   */
  export type PostMetrics$PostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    where?: PostLikesWhereInput
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    cursor?: PostLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostMetrics without action
   */
  export type PostMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMetrics
     */
    select?: PostMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMetrics
     */
    omit?: PostMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMetricsInclude<ExtArgs> | null
  }


  /**
   * Model PostLikes
   */

  export type AggregatePostLikes = {
    _count: PostLikesCountAggregateOutputType | null
    _avg: PostLikesAvgAggregateOutputType | null
    _sum: PostLikesSumAggregateOutputType | null
    _min: PostLikesMinAggregateOutputType | null
    _max: PostLikesMaxAggregateOutputType | null
  }

  export type PostLikesAvgAggregateOutputType = {
    postMetricsId: number | null
  }

  export type PostLikesSumAggregateOutputType = {
    postMetricsId: number | null
  }

  export type PostLikesMinAggregateOutputType = {
    userId: string | null
    postMetricsId: number | null
    createdAt: Date | null
  }

  export type PostLikesMaxAggregateOutputType = {
    userId: string | null
    postMetricsId: number | null
    createdAt: Date | null
  }

  export type PostLikesCountAggregateOutputType = {
    userId: number
    postMetricsId: number
    createdAt: number
    _all: number
  }


  export type PostLikesAvgAggregateInputType = {
    postMetricsId?: true
  }

  export type PostLikesSumAggregateInputType = {
    postMetricsId?: true
  }

  export type PostLikesMinAggregateInputType = {
    userId?: true
    postMetricsId?: true
    createdAt?: true
  }

  export type PostLikesMaxAggregateInputType = {
    userId?: true
    postMetricsId?: true
    createdAt?: true
  }

  export type PostLikesCountAggregateInputType = {
    userId?: true
    postMetricsId?: true
    createdAt?: true
    _all?: true
  }

  export type PostLikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to aggregate.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLikes
    **/
    _count?: true | PostLikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostLikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostLikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLikesMaxAggregateInputType
  }

  export type GetPostLikesAggregateType<T extends PostLikesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLikes[P]>
      : GetScalarType<T[P], AggregatePostLikes[P]>
  }




  export type PostLikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikesWhereInput
    orderBy?: PostLikesOrderByWithAggregationInput | PostLikesOrderByWithAggregationInput[]
    by: PostLikesScalarFieldEnum[] | PostLikesScalarFieldEnum
    having?: PostLikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLikesCountAggregateInputType | true
    _avg?: PostLikesAvgAggregateInputType
    _sum?: PostLikesSumAggregateInputType
    _min?: PostLikesMinAggregateInputType
    _max?: PostLikesMaxAggregateInputType
  }

  export type PostLikesGroupByOutputType = {
    userId: string
    postMetricsId: number
    createdAt: Date
    _count: PostLikesCountAggregateOutputType | null
    _avg: PostLikesAvgAggregateOutputType | null
    _sum: PostLikesSumAggregateOutputType | null
    _min: PostLikesMinAggregateOutputType | null
    _max: PostLikesMaxAggregateOutputType | null
  }

  type GetPostLikesGroupByPayload<T extends PostLikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikesGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikesGroupByOutputType[P]>
        }
      >
    >


  export type PostLikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postMetricsId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postMetricsId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postMetricsId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostMetricsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLikes"]>

  export type PostLikesSelectScalar = {
    userId?: boolean
    postMetricsId?: boolean
    createdAt?: boolean
  }

  export type PostLikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "postMetricsId" | "createdAt", ExtArgs["result"]["postLikes"]>
  export type PostLikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostMetricsDefaultArgs<ExtArgs>
  }
  export type PostLikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostMetricsDefaultArgs<ExtArgs>
  }
  export type PostLikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostMetricsDefaultArgs<ExtArgs>
  }

  export type $PostLikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLikes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostMetricsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * User Id
       */
      userId: string
      /**
       * Post Metrics Id
       */
      postMetricsId: number
      /**
       * Date of creation
       */
      createdAt: Date
    }, ExtArgs["result"]["postLikes"]>
    composites: {}
  }

  type PostLikesGetPayload<S extends boolean | null | undefined | PostLikesDefaultArgs> = $Result.GetResult<Prisma.$PostLikesPayload, S>

  type PostLikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostLikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostLikesCountAggregateInputType | true
    }

  export interface PostLikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLikes'], meta: { name: 'PostLikes' } }
    /**
     * Find zero or one PostLikes that matches the filter.
     * @param {PostLikesFindUniqueArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikesFindUniqueArgs>(args: SelectSubset<T, PostLikesFindUniqueArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostLikes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikesFindUniqueOrThrowArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostLikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindFirstArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikesFindFirstArgs>(args?: SelectSubset<T, PostLikesFindFirstArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindFirstOrThrowArgs} args - Arguments to find a PostLikes
     * @example
     * // Get one PostLikes
     * const postLikes = await prisma.postLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostLikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLikes.findMany()
     * 
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLikes.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const postLikesWithUserIdOnly = await prisma.postLikes.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PostLikesFindManyArgs>(args?: SelectSubset<T, PostLikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostLikes.
     * @param {PostLikesCreateArgs} args - Arguments to create a PostLikes.
     * @example
     * // Create one PostLikes
     * const PostLikes = await prisma.postLikes.create({
     *   data: {
     *     // ... data to create a PostLikes
     *   }
     * })
     * 
     */
    create<T extends PostLikesCreateArgs>(args: SelectSubset<T, PostLikesCreateArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostLikes.
     * @param {PostLikesCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLikes = await prisma.postLikes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostLikesCreateManyArgs>(args?: SelectSubset<T, PostLikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikesCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLikes = await prisma.postLikes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostLikes and only return the `userId`
     * const postLikesWithUserIdOnly = await prisma.postLikes.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostLikesCreateManyAndReturnArgs>(args?: SelectSubset<T, PostLikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostLikes.
     * @param {PostLikesDeleteArgs} args - Arguments to delete one PostLikes.
     * @example
     * // Delete one PostLikes
     * const PostLikes = await prisma.postLikes.delete({
     *   where: {
     *     // ... filter to delete one PostLikes
     *   }
     * })
     * 
     */
    delete<T extends PostLikesDeleteArgs>(args: SelectSubset<T, PostLikesDeleteArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostLikes.
     * @param {PostLikesUpdateArgs} args - Arguments to update one PostLikes.
     * @example
     * // Update one PostLikes
     * const postLikes = await prisma.postLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostLikesUpdateArgs>(args: SelectSubset<T, PostLikesUpdateArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikesDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostLikesDeleteManyArgs>(args?: SelectSubset<T, PostLikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLikes = await prisma.postLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostLikesUpdateManyArgs>(args: SelectSubset<T, PostLikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikesUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLikes = await prisma.postLikes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostLikes and only return the `userId`
     * const postLikesWithUserIdOnly = await prisma.postLikes.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostLikesUpdateManyAndReturnArgs>(args: SelectSubset<T, PostLikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostLikes.
     * @param {PostLikesUpsertArgs} args - Arguments to update or create a PostLikes.
     * @example
     * // Update or create a PostLikes
     * const postLikes = await prisma.postLikes.upsert({
     *   create: {
     *     // ... data to create a PostLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLikes we want to update
     *   }
     * })
     */
    upsert<T extends PostLikesUpsertArgs>(args: SelectSubset<T, PostLikesUpsertArgs<ExtArgs>>): Prisma__PostLikesClient<$Result.GetResult<Prisma.$PostLikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLikes.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
    **/
    count<T extends PostLikesCountArgs>(
      args?: Subset<T, PostLikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostLikesAggregateArgs>(args: Subset<T, PostLikesAggregateArgs>): Prisma.PrismaPromise<GetPostLikesAggregateType<T>>

    /**
     * Group by PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikesGroupByArgs['orderBy'] }
        : { orderBy?: PostLikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostLikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLikes model
   */
  readonly fields: PostLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostMetricsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostMetricsDefaultArgs<ExtArgs>>): Prisma__PostMetricsClient<$Result.GetResult<Prisma.$PostMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostLikes model
   */
  interface PostLikesFieldRefs {
    readonly userId: FieldRef<"PostLikes", 'String'>
    readonly postMetricsId: FieldRef<"PostLikes", 'Int'>
    readonly createdAt: FieldRef<"PostLikes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostLikes findUnique
   */
  export type PostLikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes findUniqueOrThrow
   */
  export type PostLikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes findFirst
   */
  export type PostLikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes findFirstOrThrow
   */
  export type PostLikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes findMany
   */
  export type PostLikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikesOrderByWithRelationInput | PostLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    distinct?: PostLikesScalarFieldEnum | PostLikesScalarFieldEnum[]
  }

  /**
   * PostLikes create
   */
  export type PostLikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLikes.
     */
    data: XOR<PostLikesCreateInput, PostLikesUncheckedCreateInput>
  }

  /**
   * PostLikes createMany
   */
  export type PostLikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikesCreateManyInput | PostLikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostLikes createManyAndReturn
   */
  export type PostLikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikesCreateManyInput | PostLikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLikes update
   */
  export type PostLikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLikes.
     */
    data: XOR<PostLikesUpdateInput, PostLikesUncheckedUpdateInput>
    /**
     * Choose, which PostLikes to update.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes updateMany
   */
  export type PostLikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
  }

  /**
   * PostLikes updateManyAndReturn
   */
  export type PostLikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLikes upsert
   */
  export type PostLikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLikes to update in case it exists.
     */
    where: PostLikesWhereUniqueInput
    /**
     * In case the PostLikes found by the `where` argument doesn't exist, create a new PostLikes with this data.
     */
    create: XOR<PostLikesCreateInput, PostLikesUncheckedCreateInput>
    /**
     * In case the PostLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikesUpdateInput, PostLikesUncheckedUpdateInput>
  }

  /**
   * PostLikes delete
   */
  export type PostLikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
    /**
     * Filter which PostLikes to delete.
     */
    where: PostLikesWhereUniqueInput
  }

  /**
   * PostLikes deleteMany
   */
  export type PostLikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikesWhereInput
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number
  }

  /**
   * PostLikes without action
   */
  export type PostLikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLikes
     */
    select?: PostLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLikes
     */
    omit?: PostLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikesInclude<ExtArgs> | null
  }


  /**
   * Model PostComments
   */

  export type AggregatePostComments = {
    _count: PostCommentsCountAggregateOutputType | null
    _avg: PostCommentsAvgAggregateOutputType | null
    _sum: PostCommentsSumAggregateOutputType | null
    _min: PostCommentsMinAggregateOutputType | null
    _max: PostCommentsMaxAggregateOutputType | null
  }

  export type PostCommentsAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    numberOfLikes: number | null
  }

  export type PostCommentsSumAggregateOutputType = {
    id: number | null
    postId: number | null
    numberOfLikes: number | null
  }

  export type PostCommentsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    postId: number | null
    comment: string | null
    numberOfLikes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCommentsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    postId: number | null
    comment: string | null
    numberOfLikes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCommentsCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    comment: number
    numberOfLikes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostCommentsAvgAggregateInputType = {
    id?: true
    postId?: true
    numberOfLikes?: true
  }

  export type PostCommentsSumAggregateInputType = {
    id?: true
    postId?: true
    numberOfLikes?: true
  }

  export type PostCommentsMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    comment?: true
    numberOfLikes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCommentsMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    comment?: true
    numberOfLikes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCommentsCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    comment?: true
    numberOfLikes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostCommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to aggregate.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostComments
    **/
    _count?: true | PostCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostCommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostCommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentsMaxAggregateInputType
  }

  export type GetPostCommentsAggregateType<T extends PostCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostComments[P]>
      : GetScalarType<T[P], AggregatePostComments[P]>
  }




  export type PostCommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsWhereInput
    orderBy?: PostCommentsOrderByWithAggregationInput | PostCommentsOrderByWithAggregationInput[]
    by: PostCommentsScalarFieldEnum[] | PostCommentsScalarFieldEnum
    having?: PostCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentsCountAggregateInputType | true
    _avg?: PostCommentsAvgAggregateInputType
    _sum?: PostCommentsSumAggregateInputType
    _min?: PostCommentsMinAggregateInputType
    _max?: PostCommentsMaxAggregateInputType
  }

  export type PostCommentsGroupByOutputType = {
    id: number
    userId: string
    postId: number
    comment: string
    numberOfLikes: number
    createdAt: Date
    updatedAt: Date
    _count: PostCommentsCountAggregateOutputType | null
    _avg: PostCommentsAvgAggregateOutputType | null
    _sum: PostCommentsSumAggregateOutputType | null
    _min: PostCommentsMinAggregateOutputType | null
    _max: PostCommentsMaxAggregateOutputType | null
  }

  type GetPostCommentsGroupByPayload<T extends PostCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentsGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    comment?: boolean
    numberOfLikes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    PostCommentsLikes?: boolean | PostComments$PostCommentsLikesArgs<ExtArgs>
    _count?: boolean | PostCommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    comment?: boolean
    numberOfLikes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    comment?: boolean
    numberOfLikes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComments"]>

  export type PostCommentsSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    comment?: boolean
    numberOfLikes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostCommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "comment" | "numberOfLikes" | "createdAt" | "updatedAt", ExtArgs["result"]["postComments"]>
  export type PostCommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    PostCommentsLikes?: boolean | PostComments$PostCommentsLikesArgs<ExtArgs>
    _count?: boolean | PostCommentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostCommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type PostCommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $PostCommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostComments"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
      PostCommentsLikes: Prisma.$PostCommentsLikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Entity ID
       */
      id: number
      /**
       * User ID
       */
      userId: string
      /**
       * Post ID
       */
      postId: number
      /**
       * Actual comment
       */
      comment: string
      /**
       * Number of likes of the comment
       */
      numberOfLikes: number
      /**
       * Entity creation date
       */
      createdAt: Date
      /**
       * Entity last updated date
       */
      updatedAt: Date
    }, ExtArgs["result"]["postComments"]>
    composites: {}
  }

  type PostCommentsGetPayload<S extends boolean | null | undefined | PostCommentsDefaultArgs> = $Result.GetResult<Prisma.$PostCommentsPayload, S>

  type PostCommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCommentsCountAggregateInputType | true
    }

  export interface PostCommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostComments'], meta: { name: 'PostComments' } }
    /**
     * Find zero or one PostComments that matches the filter.
     * @param {PostCommentsFindUniqueArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCommentsFindUniqueArgs>(args: SelectSubset<T, PostCommentsFindUniqueArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostComments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCommentsFindUniqueOrThrowArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindFirstArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCommentsFindFirstArgs>(args?: SelectSubset<T, PostCommentsFindFirstArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindFirstOrThrowArgs} args - Arguments to find a PostComments
     * @example
     * // Get one PostComments
     * const postComments = await prisma.postComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostComments
     * const postComments = await prisma.postComments.findMany()
     * 
     * // Get first 10 PostComments
     * const postComments = await prisma.postComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCommentsWithIdOnly = await prisma.postComments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostCommentsFindManyArgs>(args?: SelectSubset<T, PostCommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostComments.
     * @param {PostCommentsCreateArgs} args - Arguments to create a PostComments.
     * @example
     * // Create one PostComments
     * const PostComments = await prisma.postComments.create({
     *   data: {
     *     // ... data to create a PostComments
     *   }
     * })
     * 
     */
    create<T extends PostCommentsCreateArgs>(args: SelectSubset<T, PostCommentsCreateArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostComments.
     * @param {PostCommentsCreateManyArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComments = await prisma.postComments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCommentsCreateManyArgs>(args?: SelectSubset<T, PostCommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostComments and returns the data saved in the database.
     * @param {PostCommentsCreateManyAndReturnArgs} args - Arguments to create many PostComments.
     * @example
     * // Create many PostComments
     * const postComments = await prisma.postComments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostComments and only return the `id`
     * const postCommentsWithIdOnly = await prisma.postComments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostComments.
     * @param {PostCommentsDeleteArgs} args - Arguments to delete one PostComments.
     * @example
     * // Delete one PostComments
     * const PostComments = await prisma.postComments.delete({
     *   where: {
     *     // ... filter to delete one PostComments
     *   }
     * })
     * 
     */
    delete<T extends PostCommentsDeleteArgs>(args: SelectSubset<T, PostCommentsDeleteArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostComments.
     * @param {PostCommentsUpdateArgs} args - Arguments to update one PostComments.
     * @example
     * // Update one PostComments
     * const postComments = await prisma.postComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCommentsUpdateArgs>(args: SelectSubset<T, PostCommentsUpdateArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostComments.
     * @param {PostCommentsDeleteManyArgs} args - Arguments to filter PostComments to delete.
     * @example
     * // Delete a few PostComments
     * const { count } = await prisma.postComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCommentsDeleteManyArgs>(args?: SelectSubset<T, PostCommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostComments
     * const postComments = await prisma.postComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCommentsUpdateManyArgs>(args: SelectSubset<T, PostCommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments and returns the data updated in the database.
     * @param {PostCommentsUpdateManyAndReturnArgs} args - Arguments to update many PostComments.
     * @example
     * // Update many PostComments
     * const postComments = await prisma.postComments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostComments and only return the `id`
     * const postCommentsWithIdOnly = await prisma.postComments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostComments.
     * @param {PostCommentsUpsertArgs} args - Arguments to update or create a PostComments.
     * @example
     * // Update or create a PostComments
     * const postComments = await prisma.postComments.upsert({
     *   create: {
     *     // ... data to create a PostComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostComments we want to update
     *   }
     * })
     */
    upsert<T extends PostCommentsUpsertArgs>(args: SelectSubset<T, PostCommentsUpsertArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsCountArgs} args - Arguments to filter PostComments to count.
     * @example
     * // Count the number of PostComments
     * const count = await prisma.postComments.count({
     *   where: {
     *     // ... the filter for the PostComments we want to count
     *   }
     * })
    **/
    count<T extends PostCommentsCountArgs>(
      args?: Subset<T, PostCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentsAggregateArgs>(args: Subset<T, PostCommentsAggregateArgs>): Prisma.PrismaPromise<GetPostCommentsAggregateType<T>>

    /**
     * Group by PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentsGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostComments model
   */
  readonly fields: PostCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PostCommentsLikes<T extends PostComments$PostCommentsLikesArgs<ExtArgs> = {}>(args?: Subset<T, PostComments$PostCommentsLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostComments model
   */
  interface PostCommentsFieldRefs {
    readonly id: FieldRef<"PostComments", 'Int'>
    readonly userId: FieldRef<"PostComments", 'String'>
    readonly postId: FieldRef<"PostComments", 'Int'>
    readonly comment: FieldRef<"PostComments", 'String'>
    readonly numberOfLikes: FieldRef<"PostComments", 'Int'>
    readonly createdAt: FieldRef<"PostComments", 'DateTime'>
    readonly updatedAt: FieldRef<"PostComments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostComments findUnique
   */
  export type PostCommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments findUniqueOrThrow
   */
  export type PostCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments findFirst
   */
  export type PostCommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments findFirstOrThrow
   */
  export type PostCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments findMany
   */
  export type PostCommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentsOrderByWithRelationInput | PostCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostComments.
     */
    cursor?: PostCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    distinct?: PostCommentsScalarFieldEnum | PostCommentsScalarFieldEnum[]
  }

  /**
   * PostComments create
   */
  export type PostCommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostComments.
     */
    data: XOR<PostCommentsCreateInput, PostCommentsUncheckedCreateInput>
  }

  /**
   * PostComments createMany
   */
  export type PostCommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentsCreateManyInput | PostCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostComments createManyAndReturn
   */
  export type PostCommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentsCreateManyInput | PostCommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComments update
   */
  export type PostCommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostComments.
     */
    data: XOR<PostCommentsUpdateInput, PostCommentsUncheckedUpdateInput>
    /**
     * Choose, which PostComments to update.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments updateMany
   */
  export type PostCommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
  }

  /**
   * PostComments updateManyAndReturn
   */
  export type PostCommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostComments upsert
   */
  export type PostCommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostComments to update in case it exists.
     */
    where: PostCommentsWhereUniqueInput
    /**
     * In case the PostComments found by the `where` argument doesn't exist, create a new PostComments with this data.
     */
    create: XOR<PostCommentsCreateInput, PostCommentsUncheckedCreateInput>
    /**
     * In case the PostComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentsUpdateInput, PostCommentsUncheckedUpdateInput>
  }

  /**
   * PostComments delete
   */
  export type PostCommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
    /**
     * Filter which PostComments to delete.
     */
    where: PostCommentsWhereUniqueInput
  }

  /**
   * PostComments deleteMany
   */
  export type PostCommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to delete
     */
    where?: PostCommentsWhereInput
    /**
     * Limit how many PostComments to delete.
     */
    limit?: number
  }

  /**
   * PostComments.PostCommentsLikes
   */
  export type PostComments$PostCommentsLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    where?: PostCommentsLikesWhereInput
    orderBy?: PostCommentsLikesOrderByWithRelationInput | PostCommentsLikesOrderByWithRelationInput[]
    cursor?: PostCommentsLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentsLikesScalarFieldEnum | PostCommentsLikesScalarFieldEnum[]
  }

  /**
   * PostComments without action
   */
  export type PostCommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComments
     */
    select?: PostCommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostComments
     */
    omit?: PostCommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsInclude<ExtArgs> | null
  }


  /**
   * Model PostCommentsLikes
   */

  export type AggregatePostCommentsLikes = {
    _count: PostCommentsLikesCountAggregateOutputType | null
    _avg: PostCommentsLikesAvgAggregateOutputType | null
    _sum: PostCommentsLikesSumAggregateOutputType | null
    _min: PostCommentsLikesMinAggregateOutputType | null
    _max: PostCommentsLikesMaxAggregateOutputType | null
  }

  export type PostCommentsLikesAvgAggregateOutputType = {
    postCommentId: number | null
  }

  export type PostCommentsLikesSumAggregateOutputType = {
    postCommentId: number | null
  }

  export type PostCommentsLikesMinAggregateOutputType = {
    userId: string | null
    postCommentId: number | null
    createdAt: Date | null
  }

  export type PostCommentsLikesMaxAggregateOutputType = {
    userId: string | null
    postCommentId: number | null
    createdAt: Date | null
  }

  export type PostCommentsLikesCountAggregateOutputType = {
    userId: number
    postCommentId: number
    createdAt: number
    _all: number
  }


  export type PostCommentsLikesAvgAggregateInputType = {
    postCommentId?: true
  }

  export type PostCommentsLikesSumAggregateInputType = {
    postCommentId?: true
  }

  export type PostCommentsLikesMinAggregateInputType = {
    userId?: true
    postCommentId?: true
    createdAt?: true
  }

  export type PostCommentsLikesMaxAggregateInputType = {
    userId?: true
    postCommentId?: true
    createdAt?: true
  }

  export type PostCommentsLikesCountAggregateInputType = {
    userId?: true
    postCommentId?: true
    createdAt?: true
    _all?: true
  }

  export type PostCommentsLikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCommentsLikes to aggregate.
     */
    where?: PostCommentsLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentsLikes to fetch.
     */
    orderBy?: PostCommentsLikesOrderByWithRelationInput | PostCommentsLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentsLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentsLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentsLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostCommentsLikes
    **/
    _count?: true | PostCommentsLikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostCommentsLikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostCommentsLikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentsLikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentsLikesMaxAggregateInputType
  }

  export type GetPostCommentsLikesAggregateType<T extends PostCommentsLikesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostCommentsLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostCommentsLikes[P]>
      : GetScalarType<T[P], AggregatePostCommentsLikes[P]>
  }




  export type PostCommentsLikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentsLikesWhereInput
    orderBy?: PostCommentsLikesOrderByWithAggregationInput | PostCommentsLikesOrderByWithAggregationInput[]
    by: PostCommentsLikesScalarFieldEnum[] | PostCommentsLikesScalarFieldEnum
    having?: PostCommentsLikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentsLikesCountAggregateInputType | true
    _avg?: PostCommentsLikesAvgAggregateInputType
    _sum?: PostCommentsLikesSumAggregateInputType
    _min?: PostCommentsLikesMinAggregateInputType
    _max?: PostCommentsLikesMaxAggregateInputType
  }

  export type PostCommentsLikesGroupByOutputType = {
    userId: string
    postCommentId: number
    createdAt: Date
    _count: PostCommentsLikesCountAggregateOutputType | null
    _avg: PostCommentsLikesAvgAggregateOutputType | null
    _sum: PostCommentsLikesSumAggregateOutputType | null
    _min: PostCommentsLikesMinAggregateOutputType | null
    _max: PostCommentsLikesMaxAggregateOutputType | null
  }

  type GetPostCommentsLikesGroupByPayload<T extends PostCommentsLikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentsLikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentsLikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentsLikesGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentsLikesGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentsLikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postCommentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCommentsLikes"]>

  export type PostCommentsLikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postCommentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCommentsLikes"]>

  export type PostCommentsLikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    postCommentId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCommentsLikes"]>

  export type PostCommentsLikesSelectScalar = {
    userId?: boolean
    postCommentId?: boolean
    createdAt?: boolean
  }

  export type PostCommentsLikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "postCommentId" | "createdAt", ExtArgs["result"]["postCommentsLikes"]>
  export type PostCommentsLikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
  }
  export type PostCommentsLikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
  }
  export type PostCommentsLikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    postComments?: boolean | PostCommentsDefaultArgs<ExtArgs>
  }

  export type $PostCommentsLikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostCommentsLikes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      postComments: Prisma.$PostCommentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * User ID
       */
      userId: string
      /**
       * Comment ID
       */
      postCommentId: number
      /**
       * Entity creation date
       */
      createdAt: Date
    }, ExtArgs["result"]["postCommentsLikes"]>
    composites: {}
  }

  type PostCommentsLikesGetPayload<S extends boolean | null | undefined | PostCommentsLikesDefaultArgs> = $Result.GetResult<Prisma.$PostCommentsLikesPayload, S>

  type PostCommentsLikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostCommentsLikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCommentsLikesCountAggregateInputType | true
    }

  export interface PostCommentsLikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostCommentsLikes'], meta: { name: 'PostCommentsLikes' } }
    /**
     * Find zero or one PostCommentsLikes that matches the filter.
     * @param {PostCommentsLikesFindUniqueArgs} args - Arguments to find a PostCommentsLikes
     * @example
     * // Get one PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostCommentsLikesFindUniqueArgs>(args: SelectSubset<T, PostCommentsLikesFindUniqueArgs<ExtArgs>>): Prisma__PostCommentsLikesClient<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostCommentsLikes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostCommentsLikesFindUniqueOrThrowArgs} args - Arguments to find a PostCommentsLikes
     * @example
     * // Get one PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostCommentsLikesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostCommentsLikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostCommentsLikesClient<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCommentsLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsLikesFindFirstArgs} args - Arguments to find a PostCommentsLikes
     * @example
     * // Get one PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostCommentsLikesFindFirstArgs>(args?: SelectSubset<T, PostCommentsLikesFindFirstArgs<ExtArgs>>): Prisma__PostCommentsLikesClient<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostCommentsLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsLikesFindFirstOrThrowArgs} args - Arguments to find a PostCommentsLikes
     * @example
     * // Get one PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostCommentsLikesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostCommentsLikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostCommentsLikesClient<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostCommentsLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsLikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.findMany()
     * 
     * // Get first 10 PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const postCommentsLikesWithUserIdOnly = await prisma.postCommentsLikes.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PostCommentsLikesFindManyArgs>(args?: SelectSubset<T, PostCommentsLikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostCommentsLikes.
     * @param {PostCommentsLikesCreateArgs} args - Arguments to create a PostCommentsLikes.
     * @example
     * // Create one PostCommentsLikes
     * const PostCommentsLikes = await prisma.postCommentsLikes.create({
     *   data: {
     *     // ... data to create a PostCommentsLikes
     *   }
     * })
     * 
     */
    create<T extends PostCommentsLikesCreateArgs>(args: SelectSubset<T, PostCommentsLikesCreateArgs<ExtArgs>>): Prisma__PostCommentsLikesClient<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostCommentsLikes.
     * @param {PostCommentsLikesCreateManyArgs} args - Arguments to create many PostCommentsLikes.
     * @example
     * // Create many PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCommentsLikesCreateManyArgs>(args?: SelectSubset<T, PostCommentsLikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostCommentsLikes and returns the data saved in the database.
     * @param {PostCommentsLikesCreateManyAndReturnArgs} args - Arguments to create many PostCommentsLikes.
     * @example
     * // Create many PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostCommentsLikes and only return the `userId`
     * const postCommentsLikesWithUserIdOnly = await prisma.postCommentsLikes.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCommentsLikesCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCommentsLikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostCommentsLikes.
     * @param {PostCommentsLikesDeleteArgs} args - Arguments to delete one PostCommentsLikes.
     * @example
     * // Delete one PostCommentsLikes
     * const PostCommentsLikes = await prisma.postCommentsLikes.delete({
     *   where: {
     *     // ... filter to delete one PostCommentsLikes
     *   }
     * })
     * 
     */
    delete<T extends PostCommentsLikesDeleteArgs>(args: SelectSubset<T, PostCommentsLikesDeleteArgs<ExtArgs>>): Prisma__PostCommentsLikesClient<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostCommentsLikes.
     * @param {PostCommentsLikesUpdateArgs} args - Arguments to update one PostCommentsLikes.
     * @example
     * // Update one PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostCommentsLikesUpdateArgs>(args: SelectSubset<T, PostCommentsLikesUpdateArgs<ExtArgs>>): Prisma__PostCommentsLikesClient<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostCommentsLikes.
     * @param {PostCommentsLikesDeleteManyArgs} args - Arguments to filter PostCommentsLikes to delete.
     * @example
     * // Delete a few PostCommentsLikes
     * const { count } = await prisma.postCommentsLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostCommentsLikesDeleteManyArgs>(args?: SelectSubset<T, PostCommentsLikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCommentsLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostCommentsLikesUpdateManyArgs>(args: SelectSubset<T, PostCommentsLikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCommentsLikes and returns the data updated in the database.
     * @param {PostCommentsLikesUpdateManyAndReturnArgs} args - Arguments to update many PostCommentsLikes.
     * @example
     * // Update many PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostCommentsLikes and only return the `userId`
     * const postCommentsLikesWithUserIdOnly = await prisma.postCommentsLikes.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostCommentsLikesUpdateManyAndReturnArgs>(args: SelectSubset<T, PostCommentsLikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostCommentsLikes.
     * @param {PostCommentsLikesUpsertArgs} args - Arguments to update or create a PostCommentsLikes.
     * @example
     * // Update or create a PostCommentsLikes
     * const postCommentsLikes = await prisma.postCommentsLikes.upsert({
     *   create: {
     *     // ... data to create a PostCommentsLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostCommentsLikes we want to update
     *   }
     * })
     */
    upsert<T extends PostCommentsLikesUpsertArgs>(args: SelectSubset<T, PostCommentsLikesUpsertArgs<ExtArgs>>): Prisma__PostCommentsLikesClient<$Result.GetResult<Prisma.$PostCommentsLikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostCommentsLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsLikesCountArgs} args - Arguments to filter PostCommentsLikes to count.
     * @example
     * // Count the number of PostCommentsLikes
     * const count = await prisma.postCommentsLikes.count({
     *   where: {
     *     // ... the filter for the PostCommentsLikes we want to count
     *   }
     * })
    **/
    count<T extends PostCommentsLikesCountArgs>(
      args?: Subset<T, PostCommentsLikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentsLikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostCommentsLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentsLikesAggregateArgs>(args: Subset<T, PostCommentsLikesAggregateArgs>): Prisma.PrismaPromise<GetPostCommentsLikesAggregateType<T>>

    /**
     * Group by PostCommentsLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentsLikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentsLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentsLikesGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentsLikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentsLikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentsLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostCommentsLikes model
   */
  readonly fields: PostCommentsLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostCommentsLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentsLikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    postComments<T extends PostCommentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostCommentsDefaultArgs<ExtArgs>>): Prisma__PostCommentsClient<$Result.GetResult<Prisma.$PostCommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostCommentsLikes model
   */
  interface PostCommentsLikesFieldRefs {
    readonly userId: FieldRef<"PostCommentsLikes", 'String'>
    readonly postCommentId: FieldRef<"PostCommentsLikes", 'Int'>
    readonly createdAt: FieldRef<"PostCommentsLikes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostCommentsLikes findUnique
   */
  export type PostCommentsLikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentsLikes to fetch.
     */
    where: PostCommentsLikesWhereUniqueInput
  }

  /**
   * PostCommentsLikes findUniqueOrThrow
   */
  export type PostCommentsLikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentsLikes to fetch.
     */
    where: PostCommentsLikesWhereUniqueInput
  }

  /**
   * PostCommentsLikes findFirst
   */
  export type PostCommentsLikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentsLikes to fetch.
     */
    where?: PostCommentsLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentsLikes to fetch.
     */
    orderBy?: PostCommentsLikesOrderByWithRelationInput | PostCommentsLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCommentsLikes.
     */
    cursor?: PostCommentsLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentsLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentsLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCommentsLikes.
     */
    distinct?: PostCommentsLikesScalarFieldEnum | PostCommentsLikesScalarFieldEnum[]
  }

  /**
   * PostCommentsLikes findFirstOrThrow
   */
  export type PostCommentsLikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentsLikes to fetch.
     */
    where?: PostCommentsLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentsLikes to fetch.
     */
    orderBy?: PostCommentsLikesOrderByWithRelationInput | PostCommentsLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCommentsLikes.
     */
    cursor?: PostCommentsLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentsLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentsLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCommentsLikes.
     */
    distinct?: PostCommentsLikesScalarFieldEnum | PostCommentsLikesScalarFieldEnum[]
  }

  /**
   * PostCommentsLikes findMany
   */
  export type PostCommentsLikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentsLikes to fetch.
     */
    where?: PostCommentsLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentsLikes to fetch.
     */
    orderBy?: PostCommentsLikesOrderByWithRelationInput | PostCommentsLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostCommentsLikes.
     */
    cursor?: PostCommentsLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentsLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentsLikes.
     */
    skip?: number
    distinct?: PostCommentsLikesScalarFieldEnum | PostCommentsLikesScalarFieldEnum[]
  }

  /**
   * PostCommentsLikes create
   */
  export type PostCommentsLikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostCommentsLikes.
     */
    data: XOR<PostCommentsLikesCreateInput, PostCommentsLikesUncheckedCreateInput>
  }

  /**
   * PostCommentsLikes createMany
   */
  export type PostCommentsLikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostCommentsLikes.
     */
    data: PostCommentsLikesCreateManyInput | PostCommentsLikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostCommentsLikes createManyAndReturn
   */
  export type PostCommentsLikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * The data used to create many PostCommentsLikes.
     */
    data: PostCommentsLikesCreateManyInput | PostCommentsLikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostCommentsLikes update
   */
  export type PostCommentsLikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostCommentsLikes.
     */
    data: XOR<PostCommentsLikesUpdateInput, PostCommentsLikesUncheckedUpdateInput>
    /**
     * Choose, which PostCommentsLikes to update.
     */
    where: PostCommentsLikesWhereUniqueInput
  }

  /**
   * PostCommentsLikes updateMany
   */
  export type PostCommentsLikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostCommentsLikes.
     */
    data: XOR<PostCommentsLikesUpdateManyMutationInput, PostCommentsLikesUncheckedUpdateManyInput>
    /**
     * Filter which PostCommentsLikes to update
     */
    where?: PostCommentsLikesWhereInput
    /**
     * Limit how many PostCommentsLikes to update.
     */
    limit?: number
  }

  /**
   * PostCommentsLikes updateManyAndReturn
   */
  export type PostCommentsLikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * The data used to update PostCommentsLikes.
     */
    data: XOR<PostCommentsLikesUpdateManyMutationInput, PostCommentsLikesUncheckedUpdateManyInput>
    /**
     * Filter which PostCommentsLikes to update
     */
    where?: PostCommentsLikesWhereInput
    /**
     * Limit how many PostCommentsLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostCommentsLikes upsert
   */
  export type PostCommentsLikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostCommentsLikes to update in case it exists.
     */
    where: PostCommentsLikesWhereUniqueInput
    /**
     * In case the PostCommentsLikes found by the `where` argument doesn't exist, create a new PostCommentsLikes with this data.
     */
    create: XOR<PostCommentsLikesCreateInput, PostCommentsLikesUncheckedCreateInput>
    /**
     * In case the PostCommentsLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentsLikesUpdateInput, PostCommentsLikesUncheckedUpdateInput>
  }

  /**
   * PostCommentsLikes delete
   */
  export type PostCommentsLikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
    /**
     * Filter which PostCommentsLikes to delete.
     */
    where: PostCommentsLikesWhereUniqueInput
  }

  /**
   * PostCommentsLikes deleteMany
   */
  export type PostCommentsLikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCommentsLikes to delete
     */
    where?: PostCommentsLikesWhereInput
    /**
     * Limit how many PostCommentsLikes to delete.
     */
    limit?: number
  }

  /**
   * PostCommentsLikes without action
   */
  export type PostCommentsLikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentsLikes
     */
    select?: PostCommentsLikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostCommentsLikes
     */
    omit?: PostCommentsLikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostCommentsLikesInclude<ExtArgs> | null
  }


  /**
   * Model ProfileInformation
   */

  export type AggregateProfileInformation = {
    _count: ProfileInformationCountAggregateOutputType | null
    _avg: ProfileInformationAvgAggregateOutputType | null
    _sum: ProfileInformationSumAggregateOutputType | null
    _min: ProfileInformationMinAggregateOutputType | null
    _max: ProfileInformationMaxAggregateOutputType | null
  }

  export type ProfileInformationAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfileInformationSumAggregateOutputType = {
    id: number | null
  }

  export type ProfileInformationMinAggregateOutputType = {
    id: number | null
    profileInformationType: $Enums.ProfileInformationType | null
  }

  export type ProfileInformationMaxAggregateOutputType = {
    id: number | null
    profileInformationType: $Enums.ProfileInformationType | null
  }

  export type ProfileInformationCountAggregateOutputType = {
    id: number
    profileInformationType: number
    ptBr: number
    en: number
    _all: number
  }


  export type ProfileInformationAvgAggregateInputType = {
    id?: true
  }

  export type ProfileInformationSumAggregateInputType = {
    id?: true
  }

  export type ProfileInformationMinAggregateInputType = {
    id?: true
    profileInformationType?: true
  }

  export type ProfileInformationMaxAggregateInputType = {
    id?: true
    profileInformationType?: true
  }

  export type ProfileInformationCountAggregateInputType = {
    id?: true
    profileInformationType?: true
    ptBr?: true
    en?: true
    _all?: true
  }

  export type ProfileInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileInformation to aggregate.
     */
    where?: ProfileInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileInformations to fetch.
     */
    orderBy?: ProfileInformationOrderByWithRelationInput | ProfileInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileInformations
    **/
    _count?: true | ProfileInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileInformationMaxAggregateInputType
  }

  export type GetProfileInformationAggregateType<T extends ProfileInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileInformation[P]>
      : GetScalarType<T[P], AggregateProfileInformation[P]>
  }




  export type ProfileInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileInformationWhereInput
    orderBy?: ProfileInformationOrderByWithAggregationInput | ProfileInformationOrderByWithAggregationInput[]
    by: ProfileInformationScalarFieldEnum[] | ProfileInformationScalarFieldEnum
    having?: ProfileInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileInformationCountAggregateInputType | true
    _avg?: ProfileInformationAvgAggregateInputType
    _sum?: ProfileInformationSumAggregateInputType
    _min?: ProfileInformationMinAggregateInputType
    _max?: ProfileInformationMaxAggregateInputType
  }

  export type ProfileInformationGroupByOutputType = {
    id: number
    profileInformationType: $Enums.ProfileInformationType
    ptBr: JsonValue
    en: JsonValue
    _count: ProfileInformationCountAggregateOutputType | null
    _avg: ProfileInformationAvgAggregateOutputType | null
    _sum: ProfileInformationSumAggregateOutputType | null
    _min: ProfileInformationMinAggregateOutputType | null
    _max: ProfileInformationMaxAggregateOutputType | null
  }

  type GetProfileInformationGroupByPayload<T extends ProfileInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileInformationGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileInformationGroupByOutputType[P]>
        }
      >
    >


  export type ProfileInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileInformationType?: boolean
    ptBr?: boolean
    en?: boolean
  }, ExtArgs["result"]["profileInformation"]>

  export type ProfileInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileInformationType?: boolean
    ptBr?: boolean
    en?: boolean
  }, ExtArgs["result"]["profileInformation"]>

  export type ProfileInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileInformationType?: boolean
    ptBr?: boolean
    en?: boolean
  }, ExtArgs["result"]["profileInformation"]>

  export type ProfileInformationSelectScalar = {
    id?: boolean
    profileInformationType?: boolean
    ptBr?: boolean
    en?: boolean
  }

  export type ProfileInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileInformationType" | "ptBr" | "en", ExtArgs["result"]["profileInformation"]>

  export type $ProfileInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileInformation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Entity ID
       */
      id: number
      /**
       * Profile type of Information (ENUM)
       */
      profileInformationType: $Enums.ProfileInformationType
      /**
       * Information in original language (pt-BR)
       */
      ptBr: Prisma.JsonValue
      /**
       * Information translated to english
       */
      en: Prisma.JsonValue
    }, ExtArgs["result"]["profileInformation"]>
    composites: {}
  }

  type ProfileInformationGetPayload<S extends boolean | null | undefined | ProfileInformationDefaultArgs> = $Result.GetResult<Prisma.$ProfileInformationPayload, S>

  type ProfileInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileInformationCountAggregateInputType | true
    }

  export interface ProfileInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileInformation'], meta: { name: 'ProfileInformation' } }
    /**
     * Find zero or one ProfileInformation that matches the filter.
     * @param {ProfileInformationFindUniqueArgs} args - Arguments to find a ProfileInformation
     * @example
     * // Get one ProfileInformation
     * const profileInformation = await prisma.profileInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileInformationFindUniqueArgs>(args: SelectSubset<T, ProfileInformationFindUniqueArgs<ExtArgs>>): Prisma__ProfileInformationClient<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileInformationFindUniqueOrThrowArgs} args - Arguments to find a ProfileInformation
     * @example
     * // Get one ProfileInformation
     * const profileInformation = await prisma.profileInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileInformationClient<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileInformationFindFirstArgs} args - Arguments to find a ProfileInformation
     * @example
     * // Get one ProfileInformation
     * const profileInformation = await prisma.profileInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileInformationFindFirstArgs>(args?: SelectSubset<T, ProfileInformationFindFirstArgs<ExtArgs>>): Prisma__ProfileInformationClient<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileInformationFindFirstOrThrowArgs} args - Arguments to find a ProfileInformation
     * @example
     * // Get one ProfileInformation
     * const profileInformation = await prisma.profileInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileInformationClient<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileInformations
     * const profileInformations = await prisma.profileInformation.findMany()
     * 
     * // Get first 10 ProfileInformations
     * const profileInformations = await prisma.profileInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileInformationWithIdOnly = await prisma.profileInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileInformationFindManyArgs>(args?: SelectSubset<T, ProfileInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileInformation.
     * @param {ProfileInformationCreateArgs} args - Arguments to create a ProfileInformation.
     * @example
     * // Create one ProfileInformation
     * const ProfileInformation = await prisma.profileInformation.create({
     *   data: {
     *     // ... data to create a ProfileInformation
     *   }
     * })
     * 
     */
    create<T extends ProfileInformationCreateArgs>(args: SelectSubset<T, ProfileInformationCreateArgs<ExtArgs>>): Prisma__ProfileInformationClient<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileInformations.
     * @param {ProfileInformationCreateManyArgs} args - Arguments to create many ProfileInformations.
     * @example
     * // Create many ProfileInformations
     * const profileInformation = await prisma.profileInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileInformationCreateManyArgs>(args?: SelectSubset<T, ProfileInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileInformations and returns the data saved in the database.
     * @param {ProfileInformationCreateManyAndReturnArgs} args - Arguments to create many ProfileInformations.
     * @example
     * // Create many ProfileInformations
     * const profileInformation = await prisma.profileInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileInformations and only return the `id`
     * const profileInformationWithIdOnly = await prisma.profileInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileInformation.
     * @param {ProfileInformationDeleteArgs} args - Arguments to delete one ProfileInformation.
     * @example
     * // Delete one ProfileInformation
     * const ProfileInformation = await prisma.profileInformation.delete({
     *   where: {
     *     // ... filter to delete one ProfileInformation
     *   }
     * })
     * 
     */
    delete<T extends ProfileInformationDeleteArgs>(args: SelectSubset<T, ProfileInformationDeleteArgs<ExtArgs>>): Prisma__ProfileInformationClient<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileInformation.
     * @param {ProfileInformationUpdateArgs} args - Arguments to update one ProfileInformation.
     * @example
     * // Update one ProfileInformation
     * const profileInformation = await prisma.profileInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileInformationUpdateArgs>(args: SelectSubset<T, ProfileInformationUpdateArgs<ExtArgs>>): Prisma__ProfileInformationClient<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileInformations.
     * @param {ProfileInformationDeleteManyArgs} args - Arguments to filter ProfileInformations to delete.
     * @example
     * // Delete a few ProfileInformations
     * const { count } = await prisma.profileInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileInformationDeleteManyArgs>(args?: SelectSubset<T, ProfileInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileInformations
     * const profileInformation = await prisma.profileInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileInformationUpdateManyArgs>(args: SelectSubset<T, ProfileInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileInformations and returns the data updated in the database.
     * @param {ProfileInformationUpdateManyAndReturnArgs} args - Arguments to update many ProfileInformations.
     * @example
     * // Update many ProfileInformations
     * const profileInformation = await prisma.profileInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileInformations and only return the `id`
     * const profileInformationWithIdOnly = await prisma.profileInformation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileInformation.
     * @param {ProfileInformationUpsertArgs} args - Arguments to update or create a ProfileInformation.
     * @example
     * // Update or create a ProfileInformation
     * const profileInformation = await prisma.profileInformation.upsert({
     *   create: {
     *     // ... data to create a ProfileInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileInformation we want to update
     *   }
     * })
     */
    upsert<T extends ProfileInformationUpsertArgs>(args: SelectSubset<T, ProfileInformationUpsertArgs<ExtArgs>>): Prisma__ProfileInformationClient<$Result.GetResult<Prisma.$ProfileInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileInformationCountArgs} args - Arguments to filter ProfileInformations to count.
     * @example
     * // Count the number of ProfileInformations
     * const count = await prisma.profileInformation.count({
     *   where: {
     *     // ... the filter for the ProfileInformations we want to count
     *   }
     * })
    **/
    count<T extends ProfileInformationCountArgs>(
      args?: Subset<T, ProfileInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileInformationAggregateArgs>(args: Subset<T, ProfileInformationAggregateArgs>): Prisma.PrismaPromise<GetProfileInformationAggregateType<T>>

    /**
     * Group by ProfileInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileInformationGroupByArgs['orderBy'] }
        : { orderBy?: ProfileInformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileInformation model
   */
  readonly fields: ProfileInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileInformation model
   */
  interface ProfileInformationFieldRefs {
    readonly id: FieldRef<"ProfileInformation", 'Int'>
    readonly profileInformationType: FieldRef<"ProfileInformation", 'ProfileInformationType'>
    readonly ptBr: FieldRef<"ProfileInformation", 'Json'>
    readonly en: FieldRef<"ProfileInformation", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ProfileInformation findUnique
   */
  export type ProfileInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * Filter, which ProfileInformation to fetch.
     */
    where: ProfileInformationWhereUniqueInput
  }

  /**
   * ProfileInformation findUniqueOrThrow
   */
  export type ProfileInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * Filter, which ProfileInformation to fetch.
     */
    where: ProfileInformationWhereUniqueInput
  }

  /**
   * ProfileInformation findFirst
   */
  export type ProfileInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * Filter, which ProfileInformation to fetch.
     */
    where?: ProfileInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileInformations to fetch.
     */
    orderBy?: ProfileInformationOrderByWithRelationInput | ProfileInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileInformations.
     */
    cursor?: ProfileInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileInformations.
     */
    distinct?: ProfileInformationScalarFieldEnum | ProfileInformationScalarFieldEnum[]
  }

  /**
   * ProfileInformation findFirstOrThrow
   */
  export type ProfileInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * Filter, which ProfileInformation to fetch.
     */
    where?: ProfileInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileInformations to fetch.
     */
    orderBy?: ProfileInformationOrderByWithRelationInput | ProfileInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileInformations.
     */
    cursor?: ProfileInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileInformations.
     */
    distinct?: ProfileInformationScalarFieldEnum | ProfileInformationScalarFieldEnum[]
  }

  /**
   * ProfileInformation findMany
   */
  export type ProfileInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * Filter, which ProfileInformations to fetch.
     */
    where?: ProfileInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileInformations to fetch.
     */
    orderBy?: ProfileInformationOrderByWithRelationInput | ProfileInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileInformations.
     */
    cursor?: ProfileInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileInformations.
     */
    skip?: number
    distinct?: ProfileInformationScalarFieldEnum | ProfileInformationScalarFieldEnum[]
  }

  /**
   * ProfileInformation create
   */
  export type ProfileInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * The data needed to create a ProfileInformation.
     */
    data: XOR<ProfileInformationCreateInput, ProfileInformationUncheckedCreateInput>
  }

  /**
   * ProfileInformation createMany
   */
  export type ProfileInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileInformations.
     */
    data: ProfileInformationCreateManyInput | ProfileInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileInformation createManyAndReturn
   */
  export type ProfileInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileInformations.
     */
    data: ProfileInformationCreateManyInput | ProfileInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileInformation update
   */
  export type ProfileInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * The data needed to update a ProfileInformation.
     */
    data: XOR<ProfileInformationUpdateInput, ProfileInformationUncheckedUpdateInput>
    /**
     * Choose, which ProfileInformation to update.
     */
    where: ProfileInformationWhereUniqueInput
  }

  /**
   * ProfileInformation updateMany
   */
  export type ProfileInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileInformations.
     */
    data: XOR<ProfileInformationUpdateManyMutationInput, ProfileInformationUncheckedUpdateManyInput>
    /**
     * Filter which ProfileInformations to update
     */
    where?: ProfileInformationWhereInput
    /**
     * Limit how many ProfileInformations to update.
     */
    limit?: number
  }

  /**
   * ProfileInformation updateManyAndReturn
   */
  export type ProfileInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * The data used to update ProfileInformations.
     */
    data: XOR<ProfileInformationUpdateManyMutationInput, ProfileInformationUncheckedUpdateManyInput>
    /**
     * Filter which ProfileInformations to update
     */
    where?: ProfileInformationWhereInput
    /**
     * Limit how many ProfileInformations to update.
     */
    limit?: number
  }

  /**
   * ProfileInformation upsert
   */
  export type ProfileInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * The filter to search for the ProfileInformation to update in case it exists.
     */
    where: ProfileInformationWhereUniqueInput
    /**
     * In case the ProfileInformation found by the `where` argument doesn't exist, create a new ProfileInformation with this data.
     */
    create: XOR<ProfileInformationCreateInput, ProfileInformationUncheckedCreateInput>
    /**
     * In case the ProfileInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileInformationUpdateInput, ProfileInformationUncheckedUpdateInput>
  }

  /**
   * ProfileInformation delete
   */
  export type ProfileInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
    /**
     * Filter which ProfileInformation to delete.
     */
    where: ProfileInformationWhereUniqueInput
  }

  /**
   * ProfileInformation deleteMany
   */
  export type ProfileInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileInformations to delete
     */
    where?: ProfileInformationWhereInput
    /**
     * Limit how many ProfileInformations to delete.
     */
    limit?: number
  }

  /**
   * ProfileInformation without action
   */
  export type ProfileInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileInformation
     */
    select?: ProfileInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileInformation
     */
    omit?: ProfileInformationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const AuthenticatorScalarFieldEnum: {
    credentialID: 'credentialID',
    userId: 'userId',
    providerAccountId: 'providerAccountId',
    credentialPublicKey: 'credentialPublicKey',
    counter: 'counter',
    credentialDeviceType: 'credentialDeviceType',
    credentialBackedUp: 'credentialBackedUp',
    transports: 'transports'
  };

  export type AuthenticatorScalarFieldEnum = (typeof AuthenticatorScalarFieldEnum)[keyof typeof AuthenticatorScalarFieldEnum]


  export const NewsLetterSubscriptionsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    confirmationId: 'confirmationId',
    confirmationExpiresAt: 'confirmationExpiresAt',
    createdAt: 'createdAt',
    confirmedAt: 'confirmedAt',
    canceledAt: 'canceledAt'
  };

  export type NewsLetterSubscriptionsScalarFieldEnum = (typeof NewsLetterSubscriptionsScalarFieldEnum)[keyof typeof NewsLetterSubscriptionsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    notionId: 'notionId',
    slug: 'slug',
    category: 'category',
    tags: 'tags',
    coverUrl: 'coverUrl',
    excerpt_pt: 'excerpt_pt',
    excerpt_en: 'excerpt_en',
    readTime: 'readTime',
    featured: 'featured',
    Priority: 'Priority',
    translatedModel: 'translatedModel',
    ptBr: 'ptBr',
    en: 'en',
    status: 'status',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const PostMetricsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    numberOfViews: 'numberOfViews',
    totalOfComments: 'totalOfComments',
    numberOfLikes: 'numberOfLikes'
  };

  export type PostMetricsScalarFieldEnum = (typeof PostMetricsScalarFieldEnum)[keyof typeof PostMetricsScalarFieldEnum]


  export const PostLikesScalarFieldEnum: {
    userId: 'userId',
    postMetricsId: 'postMetricsId',
    createdAt: 'createdAt'
  };

  export type PostLikesScalarFieldEnum = (typeof PostLikesScalarFieldEnum)[keyof typeof PostLikesScalarFieldEnum]


  export const PostCommentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    comment: 'comment',
    numberOfLikes: 'numberOfLikes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostCommentsScalarFieldEnum = (typeof PostCommentsScalarFieldEnum)[keyof typeof PostCommentsScalarFieldEnum]


  export const PostCommentsLikesScalarFieldEnum: {
    userId: 'userId',
    postCommentId: 'postCommentId',
    createdAt: 'createdAt'
  };

  export type PostCommentsLikesScalarFieldEnum = (typeof PostCommentsLikesScalarFieldEnum)[keyof typeof PostCommentsLikesScalarFieldEnum]


  export const ProfileInformationScalarFieldEnum: {
    id: 'id',
    profileInformationType: 'profileInformationType',
    ptBr: 'ptBr',
    en: 'en'
  };

  export type ProfileInformationScalarFieldEnum = (typeof ProfileInformationScalarFieldEnum)[keyof typeof ProfileInformationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TranslatedModel'
   */
  export type EnumTranslatedModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TranslatedModel'>
    


  /**
   * Reference to a field of type 'TranslatedModel[]'
   */
  export type ListEnumTranslatedModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TranslatedModel[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'ProfileInformationType'
   */
  export type EnumProfileInformationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileInformationType'>
    


  /**
   * Reference to a field of type 'ProfileInformationType[]'
   */
  export type ListEnumProfileInformationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileInformationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
    PostComments?: PostCommentsListRelationFilter
    PostCommentsLikes?: PostCommentsLikesListRelationFilter
    PostLikes?: PostLikesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    Authenticator?: AuthenticatorOrderByRelationAggregateInput
    PostComments?: PostCommentsOrderByRelationAggregateInput
    PostCommentsLikes?: PostCommentsLikesOrderByRelationAggregateInput
    PostLikes?: PostLikesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Authenticator?: AuthenticatorListRelationFilter
    PostComments?: PostCommentsListRelationFilter
    PostCommentsLikes?: PostCommentsLikesListRelationFilter
    PostLikes?: PostLikesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type AuthenticatorWhereInput = {
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthenticatorOrderByWithRelationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthenticatorWhereUniqueInput = Prisma.AtLeast<{
    credentialID?: string
    userId_credentialID?: AuthenticatorUserIdCredentialIDCompoundUniqueInput
    AND?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    OR?: AuthenticatorWhereInput[]
    NOT?: AuthenticatorWhereInput | AuthenticatorWhereInput[]
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_credentialID" | "credentialID">

  export type AuthenticatorOrderByWithAggregationInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrderInput | SortOrder
    _count?: AuthenticatorCountOrderByAggregateInput
    _avg?: AuthenticatorAvgOrderByAggregateInput
    _max?: AuthenticatorMaxOrderByAggregateInput
    _min?: AuthenticatorMinOrderByAggregateInput
    _sum?: AuthenticatorSumOrderByAggregateInput
  }

  export type AuthenticatorScalarWhereWithAggregatesInput = {
    AND?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    OR?: AuthenticatorScalarWhereWithAggregatesInput[]
    NOT?: AuthenticatorScalarWhereWithAggregatesInput | AuthenticatorScalarWhereWithAggregatesInput[]
    credentialID?: StringWithAggregatesFilter<"Authenticator"> | string
    userId?: StringWithAggregatesFilter<"Authenticator"> | string
    providerAccountId?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialPublicKey?: StringWithAggregatesFilter<"Authenticator"> | string
    counter?: IntWithAggregatesFilter<"Authenticator"> | number
    credentialDeviceType?: StringWithAggregatesFilter<"Authenticator"> | string
    credentialBackedUp?: BoolWithAggregatesFilter<"Authenticator"> | boolean
    transports?: StringNullableWithAggregatesFilter<"Authenticator"> | string | null
  }

  export type NewsLetterSubscriptionsWhereInput = {
    AND?: NewsLetterSubscriptionsWhereInput | NewsLetterSubscriptionsWhereInput[]
    OR?: NewsLetterSubscriptionsWhereInput[]
    NOT?: NewsLetterSubscriptionsWhereInput | NewsLetterSubscriptionsWhereInput[]
    id?: IntFilter<"NewsLetterSubscriptions"> | number
    email?: StringFilter<"NewsLetterSubscriptions"> | string
    confirmationId?: StringFilter<"NewsLetterSubscriptions"> | string
    confirmationExpiresAt?: DateTimeFilter<"NewsLetterSubscriptions"> | Date | string
    createdAt?: DateTimeFilter<"NewsLetterSubscriptions"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"NewsLetterSubscriptions"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"NewsLetterSubscriptions"> | Date | string | null
  }

  export type NewsLetterSubscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    confirmationId?: SortOrder
    confirmationExpiresAt?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
  }

  export type NewsLetterSubscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    confirmationId?: string
    AND?: NewsLetterSubscriptionsWhereInput | NewsLetterSubscriptionsWhereInput[]
    OR?: NewsLetterSubscriptionsWhereInput[]
    NOT?: NewsLetterSubscriptionsWhereInput | NewsLetterSubscriptionsWhereInput[]
    confirmationExpiresAt?: DateTimeFilter<"NewsLetterSubscriptions"> | Date | string
    createdAt?: DateTimeFilter<"NewsLetterSubscriptions"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"NewsLetterSubscriptions"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"NewsLetterSubscriptions"> | Date | string | null
  }, "id" | "email" | "confirmationId">

  export type NewsLetterSubscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    confirmationId?: SortOrder
    confirmationExpiresAt?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    _count?: NewsLetterSubscriptionsCountOrderByAggregateInput
    _avg?: NewsLetterSubscriptionsAvgOrderByAggregateInput
    _max?: NewsLetterSubscriptionsMaxOrderByAggregateInput
    _min?: NewsLetterSubscriptionsMinOrderByAggregateInput
    _sum?: NewsLetterSubscriptionsSumOrderByAggregateInput
  }

  export type NewsLetterSubscriptionsScalarWhereWithAggregatesInput = {
    AND?: NewsLetterSubscriptionsScalarWhereWithAggregatesInput | NewsLetterSubscriptionsScalarWhereWithAggregatesInput[]
    OR?: NewsLetterSubscriptionsScalarWhereWithAggregatesInput[]
    NOT?: NewsLetterSubscriptionsScalarWhereWithAggregatesInput | NewsLetterSubscriptionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsLetterSubscriptions"> | number
    email?: StringWithAggregatesFilter<"NewsLetterSubscriptions"> | string
    confirmationId?: StringWithAggregatesFilter<"NewsLetterSubscriptions"> | string
    confirmationExpiresAt?: DateTimeWithAggregatesFilter<"NewsLetterSubscriptions"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsLetterSubscriptions"> | Date | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"NewsLetterSubscriptions"> | Date | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"NewsLetterSubscriptions"> | Date | string | null
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: IntFilter<"Posts"> | number
    notionId?: StringFilter<"Posts"> | string
    slug?: StringFilter<"Posts"> | string
    category?: StringFilter<"Posts"> | string
    tags?: StringNullableListFilter<"Posts">
    coverUrl?: StringFilter<"Posts"> | string
    excerpt_pt?: StringFilter<"Posts"> | string
    excerpt_en?: StringFilter<"Posts"> | string
    readTime?: IntFilter<"Posts"> | number
    featured?: BoolFilter<"Posts"> | boolean
    Priority?: IntFilter<"Posts"> | number
    translatedModel?: EnumTranslatedModelFilter<"Posts"> | $Enums.TranslatedModel
    ptBr?: JsonFilter<"Posts">
    en?: JsonFilter<"Posts">
    status?: EnumPostStatusFilter<"Posts"> | $Enums.PostStatus
    publishedAt?: DateTimeNullableFilter<"Posts"> | Date | string | null
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    updatedAt?: DateTimeFilter<"Posts"> | Date | string
    PostMetrics?: XOR<PostMetricsNullableScalarRelationFilter, PostMetricsWhereInput> | null
    PostComments?: PostCommentsListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    notionId?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    coverUrl?: SortOrder
    excerpt_pt?: SortOrder
    excerpt_en?: SortOrder
    readTime?: SortOrder
    featured?: SortOrder
    Priority?: SortOrder
    translatedModel?: SortOrder
    ptBr?: SortOrder
    en?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PostMetrics?: PostMetricsOrderByWithRelationInput
    PostComments?: PostCommentsOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    notionId?: string
    slug?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    category?: StringFilter<"Posts"> | string
    tags?: StringNullableListFilter<"Posts">
    coverUrl?: StringFilter<"Posts"> | string
    excerpt_pt?: StringFilter<"Posts"> | string
    excerpt_en?: StringFilter<"Posts"> | string
    readTime?: IntFilter<"Posts"> | number
    featured?: BoolFilter<"Posts"> | boolean
    Priority?: IntFilter<"Posts"> | number
    translatedModel?: EnumTranslatedModelFilter<"Posts"> | $Enums.TranslatedModel
    ptBr?: JsonFilter<"Posts">
    en?: JsonFilter<"Posts">
    status?: EnumPostStatusFilter<"Posts"> | $Enums.PostStatus
    publishedAt?: DateTimeNullableFilter<"Posts"> | Date | string | null
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    updatedAt?: DateTimeFilter<"Posts"> | Date | string
    PostMetrics?: XOR<PostMetricsNullableScalarRelationFilter, PostMetricsWhereInput> | null
    PostComments?: PostCommentsListRelationFilter
  }, "id" | "notionId" | "slug">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    notionId?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    coverUrl?: SortOrder
    excerpt_pt?: SortOrder
    excerpt_en?: SortOrder
    readTime?: SortOrder
    featured?: SortOrder
    Priority?: SortOrder
    translatedModel?: SortOrder
    ptBr?: SortOrder
    en?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _avg?: PostsAvgOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
    _sum?: PostsSumOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Posts"> | number
    notionId?: StringWithAggregatesFilter<"Posts"> | string
    slug?: StringWithAggregatesFilter<"Posts"> | string
    category?: StringWithAggregatesFilter<"Posts"> | string
    tags?: StringNullableListFilter<"Posts">
    coverUrl?: StringWithAggregatesFilter<"Posts"> | string
    excerpt_pt?: StringWithAggregatesFilter<"Posts"> | string
    excerpt_en?: StringWithAggregatesFilter<"Posts"> | string
    readTime?: IntWithAggregatesFilter<"Posts"> | number
    featured?: BoolWithAggregatesFilter<"Posts"> | boolean
    Priority?: IntWithAggregatesFilter<"Posts"> | number
    translatedModel?: EnumTranslatedModelWithAggregatesFilter<"Posts"> | $Enums.TranslatedModel
    ptBr?: JsonWithAggregatesFilter<"Posts">
    en?: JsonWithAggregatesFilter<"Posts">
    status?: EnumPostStatusWithAggregatesFilter<"Posts"> | $Enums.PostStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Posts"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
  }

  export type PostMetricsWhereInput = {
    AND?: PostMetricsWhereInput | PostMetricsWhereInput[]
    OR?: PostMetricsWhereInput[]
    NOT?: PostMetricsWhereInput | PostMetricsWhereInput[]
    id?: IntFilter<"PostMetrics"> | number
    postId?: IntFilter<"PostMetrics"> | number
    numberOfViews?: IntFilter<"PostMetrics"> | number
    totalOfComments?: IntFilter<"PostMetrics"> | number
    numberOfLikes?: IntFilter<"PostMetrics"> | number
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    PostLikes?: PostLikesListRelationFilter
  }

  export type PostMetricsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfViews?: SortOrder
    totalOfComments?: SortOrder
    numberOfLikes?: SortOrder
    post?: PostsOrderByWithRelationInput
    PostLikes?: PostLikesOrderByRelationAggregateInput
  }

  export type PostMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId?: number
    AND?: PostMetricsWhereInput | PostMetricsWhereInput[]
    OR?: PostMetricsWhereInput[]
    NOT?: PostMetricsWhereInput | PostMetricsWhereInput[]
    numberOfViews?: IntFilter<"PostMetrics"> | number
    totalOfComments?: IntFilter<"PostMetrics"> | number
    numberOfLikes?: IntFilter<"PostMetrics"> | number
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    PostLikes?: PostLikesListRelationFilter
  }, "id" | "postId">

  export type PostMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfViews?: SortOrder
    totalOfComments?: SortOrder
    numberOfLikes?: SortOrder
    _count?: PostMetricsCountOrderByAggregateInput
    _avg?: PostMetricsAvgOrderByAggregateInput
    _max?: PostMetricsMaxOrderByAggregateInput
    _min?: PostMetricsMinOrderByAggregateInput
    _sum?: PostMetricsSumOrderByAggregateInput
  }

  export type PostMetricsScalarWhereWithAggregatesInput = {
    AND?: PostMetricsScalarWhereWithAggregatesInput | PostMetricsScalarWhereWithAggregatesInput[]
    OR?: PostMetricsScalarWhereWithAggregatesInput[]
    NOT?: PostMetricsScalarWhereWithAggregatesInput | PostMetricsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostMetrics"> | number
    postId?: IntWithAggregatesFilter<"PostMetrics"> | number
    numberOfViews?: IntWithAggregatesFilter<"PostMetrics"> | number
    totalOfComments?: IntWithAggregatesFilter<"PostMetrics"> | number
    numberOfLikes?: IntWithAggregatesFilter<"PostMetrics"> | number
  }

  export type PostLikesWhereInput = {
    AND?: PostLikesWhereInput | PostLikesWhereInput[]
    OR?: PostLikesWhereInput[]
    NOT?: PostLikesWhereInput | PostLikesWhereInput[]
    userId?: StringFilter<"PostLikes"> | string
    postMetricsId?: IntFilter<"PostLikes"> | number
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostMetricsScalarRelationFilter, PostMetricsWhereInput>
  }

  export type PostLikesOrderByWithRelationInput = {
    userId?: SortOrder
    postMetricsId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostMetricsOrderByWithRelationInput
  }

  export type PostLikesWhereUniqueInput = Prisma.AtLeast<{
    userId_postMetricsId?: PostLikesUserIdPostMetricsIdCompoundUniqueInput
    AND?: PostLikesWhereInput | PostLikesWhereInput[]
    OR?: PostLikesWhereInput[]
    NOT?: PostLikesWhereInput | PostLikesWhereInput[]
    userId?: StringFilter<"PostLikes"> | string
    postMetricsId?: IntFilter<"PostLikes"> | number
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostMetricsScalarRelationFilter, PostMetricsWhereInput>
  }, "userId_postMetricsId">

  export type PostLikesOrderByWithAggregationInput = {
    userId?: SortOrder
    postMetricsId?: SortOrder
    createdAt?: SortOrder
    _count?: PostLikesCountOrderByAggregateInput
    _avg?: PostLikesAvgOrderByAggregateInput
    _max?: PostLikesMaxOrderByAggregateInput
    _min?: PostLikesMinOrderByAggregateInput
    _sum?: PostLikesSumOrderByAggregateInput
  }

  export type PostLikesScalarWhereWithAggregatesInput = {
    AND?: PostLikesScalarWhereWithAggregatesInput | PostLikesScalarWhereWithAggregatesInput[]
    OR?: PostLikesScalarWhereWithAggregatesInput[]
    NOT?: PostLikesScalarWhereWithAggregatesInput | PostLikesScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"PostLikes"> | string
    postMetricsId?: IntWithAggregatesFilter<"PostLikes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostLikes"> | Date | string
  }

  export type PostCommentsWhereInput = {
    AND?: PostCommentsWhereInput | PostCommentsWhereInput[]
    OR?: PostCommentsWhereInput[]
    NOT?: PostCommentsWhereInput | PostCommentsWhereInput[]
    id?: IntFilter<"PostComments"> | number
    userId?: StringFilter<"PostComments"> | string
    postId?: IntFilter<"PostComments"> | number
    comment?: StringFilter<"PostComments"> | string
    numberOfLikes?: IntFilter<"PostComments"> | number
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    PostCommentsLikes?: PostCommentsLikesListRelationFilter
  }

  export type PostCommentsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    comment?: SortOrder
    numberOfLikes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
    PostCommentsLikes?: PostCommentsLikesOrderByRelationAggregateInput
  }

  export type PostCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostCommentsWhereInput | PostCommentsWhereInput[]
    OR?: PostCommentsWhereInput[]
    NOT?: PostCommentsWhereInput | PostCommentsWhereInput[]
    userId?: StringFilter<"PostComments"> | string
    postId?: IntFilter<"PostComments"> | number
    comment?: StringFilter<"PostComments"> | string
    numberOfLikes?: IntFilter<"PostComments"> | number
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    PostCommentsLikes?: PostCommentsLikesListRelationFilter
  }, "id">

  export type PostCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    comment?: SortOrder
    numberOfLikes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCommentsCountOrderByAggregateInput
    _avg?: PostCommentsAvgOrderByAggregateInput
    _max?: PostCommentsMaxOrderByAggregateInput
    _min?: PostCommentsMinOrderByAggregateInput
    _sum?: PostCommentsSumOrderByAggregateInput
  }

  export type PostCommentsScalarWhereWithAggregatesInput = {
    AND?: PostCommentsScalarWhereWithAggregatesInput | PostCommentsScalarWhereWithAggregatesInput[]
    OR?: PostCommentsScalarWhereWithAggregatesInput[]
    NOT?: PostCommentsScalarWhereWithAggregatesInput | PostCommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostComments"> | number
    userId?: StringWithAggregatesFilter<"PostComments"> | string
    postId?: IntWithAggregatesFilter<"PostComments"> | number
    comment?: StringWithAggregatesFilter<"PostComments"> | string
    numberOfLikes?: IntWithAggregatesFilter<"PostComments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostComments"> | Date | string
  }

  export type PostCommentsLikesWhereInput = {
    AND?: PostCommentsLikesWhereInput | PostCommentsLikesWhereInput[]
    OR?: PostCommentsLikesWhereInput[]
    NOT?: PostCommentsLikesWhereInput | PostCommentsLikesWhereInput[]
    userId?: StringFilter<"PostCommentsLikes"> | string
    postCommentId?: IntFilter<"PostCommentsLikes"> | number
    createdAt?: DateTimeFilter<"PostCommentsLikes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    postComments?: XOR<PostCommentsScalarRelationFilter, PostCommentsWhereInput>
  }

  export type PostCommentsLikesOrderByWithRelationInput = {
    userId?: SortOrder
    postCommentId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    postComments?: PostCommentsOrderByWithRelationInput
  }

  export type PostCommentsLikesWhereUniqueInput = Prisma.AtLeast<{
    userId_postCommentId?: PostCommentsLikesUserIdPostCommentIdCompoundUniqueInput
    AND?: PostCommentsLikesWhereInput | PostCommentsLikesWhereInput[]
    OR?: PostCommentsLikesWhereInput[]
    NOT?: PostCommentsLikesWhereInput | PostCommentsLikesWhereInput[]
    userId?: StringFilter<"PostCommentsLikes"> | string
    postCommentId?: IntFilter<"PostCommentsLikes"> | number
    createdAt?: DateTimeFilter<"PostCommentsLikes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    postComments?: XOR<PostCommentsScalarRelationFilter, PostCommentsWhereInput>
  }, "userId_postCommentId">

  export type PostCommentsLikesOrderByWithAggregationInput = {
    userId?: SortOrder
    postCommentId?: SortOrder
    createdAt?: SortOrder
    _count?: PostCommentsLikesCountOrderByAggregateInput
    _avg?: PostCommentsLikesAvgOrderByAggregateInput
    _max?: PostCommentsLikesMaxOrderByAggregateInput
    _min?: PostCommentsLikesMinOrderByAggregateInput
    _sum?: PostCommentsLikesSumOrderByAggregateInput
  }

  export type PostCommentsLikesScalarWhereWithAggregatesInput = {
    AND?: PostCommentsLikesScalarWhereWithAggregatesInput | PostCommentsLikesScalarWhereWithAggregatesInput[]
    OR?: PostCommentsLikesScalarWhereWithAggregatesInput[]
    NOT?: PostCommentsLikesScalarWhereWithAggregatesInput | PostCommentsLikesScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"PostCommentsLikes"> | string
    postCommentId?: IntWithAggregatesFilter<"PostCommentsLikes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostCommentsLikes"> | Date | string
  }

  export type ProfileInformationWhereInput = {
    AND?: ProfileInformationWhereInput | ProfileInformationWhereInput[]
    OR?: ProfileInformationWhereInput[]
    NOT?: ProfileInformationWhereInput | ProfileInformationWhereInput[]
    id?: IntFilter<"ProfileInformation"> | number
    profileInformationType?: EnumProfileInformationTypeFilter<"ProfileInformation"> | $Enums.ProfileInformationType
    ptBr?: JsonFilter<"ProfileInformation">
    en?: JsonFilter<"ProfileInformation">
  }

  export type ProfileInformationOrderByWithRelationInput = {
    id?: SortOrder
    profileInformationType?: SortOrder
    ptBr?: SortOrder
    en?: SortOrder
  }

  export type ProfileInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    profileInformationType?: $Enums.ProfileInformationType
    AND?: ProfileInformationWhereInput | ProfileInformationWhereInput[]
    OR?: ProfileInformationWhereInput[]
    NOT?: ProfileInformationWhereInput | ProfileInformationWhereInput[]
    ptBr?: JsonFilter<"ProfileInformation">
    en?: JsonFilter<"ProfileInformation">
  }, "id" | "profileInformationType">

  export type ProfileInformationOrderByWithAggregationInput = {
    id?: SortOrder
    profileInformationType?: SortOrder
    ptBr?: SortOrder
    en?: SortOrder
    _count?: ProfileInformationCountOrderByAggregateInput
    _avg?: ProfileInformationAvgOrderByAggregateInput
    _max?: ProfileInformationMaxOrderByAggregateInput
    _min?: ProfileInformationMinOrderByAggregateInput
    _sum?: ProfileInformationSumOrderByAggregateInput
  }

  export type ProfileInformationScalarWhereWithAggregatesInput = {
    AND?: ProfileInformationScalarWhereWithAggregatesInput | ProfileInformationScalarWhereWithAggregatesInput[]
    OR?: ProfileInformationScalarWhereWithAggregatesInput[]
    NOT?: ProfileInformationScalarWhereWithAggregatesInput | ProfileInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfileInformation"> | number
    profileInformationType?: EnumProfileInformationTypeWithAggregatesFilter<"ProfileInformation"> | $Enums.ProfileInformationType
    ptBr?: JsonWithAggregatesFilter<"ProfileInformation">
    en?: JsonWithAggregatesFilter<"ProfileInformation">
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorCreateInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
    user: UserCreateNestedOneWithoutAuthenticatorInput
  }

  export type AuthenticatorUncheckedCreateInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAuthenticatorNestedInput
  }

  export type AuthenticatorUncheckedUpdateInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorCreateManyInput = {
    credentialID: string
    userId: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUpdateManyMutationInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsLetterSubscriptionsCreateInput = {
    email: string
    confirmationId?: string
    confirmationExpiresAt: Date | string
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
  }

  export type NewsLetterSubscriptionsUncheckedCreateInput = {
    id?: number
    email: string
    confirmationId?: string
    confirmationExpiresAt: Date | string
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
  }

  export type NewsLetterSubscriptionsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    confirmationId?: StringFieldUpdateOperationsInput | string
    confirmationExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsLetterSubscriptionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    confirmationId?: StringFieldUpdateOperationsInput | string
    confirmationExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsLetterSubscriptionsCreateManyInput = {
    id?: number
    email: string
    confirmationId?: string
    confirmationExpiresAt: Date | string
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    canceledAt?: Date | string | null
  }

  export type NewsLetterSubscriptionsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    confirmationId?: StringFieldUpdateOperationsInput | string
    confirmationExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsLetterSubscriptionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    confirmationId?: StringFieldUpdateOperationsInput | string
    confirmationExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostsCreateInput = {
    notionId: string
    slug: string
    category: string
    tags?: PostsCreatetagsInput | string[]
    coverUrl: string
    excerpt_pt: string
    excerpt_en: string
    readTime: number
    featured: boolean
    Priority: number
    translatedModel: $Enums.TranslatedModel
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
    status?: $Enums.PostStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    PostMetrics?: PostMetricsCreateNestedOneWithoutPostInput
    PostComments?: PostCommentsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: number
    notionId: string
    slug: string
    category: string
    tags?: PostsCreatetagsInput | string[]
    coverUrl: string
    excerpt_pt: string
    excerpt_en: string
    readTime: number
    featured: boolean
    Priority: number
    translatedModel: $Enums.TranslatedModel
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
    status?: $Enums.PostStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    PostMetrics?: PostMetricsUncheckedCreateNestedOneWithoutPostInput
    PostComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    notionId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PostsUpdatetagsInput | string[]
    coverUrl?: StringFieldUpdateOperationsInput | string
    excerpt_pt?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    Priority?: IntFieldUpdateOperationsInput | number
    translatedModel?: EnumTranslatedModelFieldUpdateOperationsInput | $Enums.TranslatedModel
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostMetrics?: PostMetricsUpdateOneWithoutPostNestedInput
    PostComments?: PostCommentsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    notionId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PostsUpdatetagsInput | string[]
    coverUrl?: StringFieldUpdateOperationsInput | string
    excerpt_pt?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    Priority?: IntFieldUpdateOperationsInput | number
    translatedModel?: EnumTranslatedModelFieldUpdateOperationsInput | $Enums.TranslatedModel
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostMetrics?: PostMetricsUncheckedUpdateOneWithoutPostNestedInput
    PostComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: number
    notionId: string
    slug: string
    category: string
    tags?: PostsCreatetagsInput | string[]
    coverUrl: string
    excerpt_pt: string
    excerpt_en: string
    readTime: number
    featured: boolean
    Priority: number
    translatedModel: $Enums.TranslatedModel
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
    status?: $Enums.PostStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostsUpdateManyMutationInput = {
    notionId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PostsUpdatetagsInput | string[]
    coverUrl?: StringFieldUpdateOperationsInput | string
    excerpt_pt?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    Priority?: IntFieldUpdateOperationsInput | number
    translatedModel?: EnumTranslatedModelFieldUpdateOperationsInput | $Enums.TranslatedModel
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    notionId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PostsUpdatetagsInput | string[]
    coverUrl?: StringFieldUpdateOperationsInput | string
    excerpt_pt?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    Priority?: IntFieldUpdateOperationsInput | number
    translatedModel?: EnumTranslatedModelFieldUpdateOperationsInput | $Enums.TranslatedModel
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMetricsCreateInput = {
    numberOfViews?: number
    totalOfComments?: number
    numberOfLikes?: number
    post: PostsCreateNestedOneWithoutPostMetricsInput
    PostLikes?: PostLikesCreateNestedManyWithoutPostInput
  }

  export type PostMetricsUncheckedCreateInput = {
    id?: number
    postId: number
    numberOfViews?: number
    totalOfComments?: number
    numberOfLikes?: number
    PostLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostMetricsUpdateInput = {
    numberOfViews?: IntFieldUpdateOperationsInput | number
    totalOfComments?: IntFieldUpdateOperationsInput | number
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    post?: PostsUpdateOneRequiredWithoutPostMetricsNestedInput
    PostLikes?: PostLikesUpdateManyWithoutPostNestedInput
  }

  export type PostMetricsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    numberOfViews?: IntFieldUpdateOperationsInput | number
    totalOfComments?: IntFieldUpdateOperationsInput | number
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    PostLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostMetricsCreateManyInput = {
    id?: number
    postId: number
    numberOfViews?: number
    totalOfComments?: number
    numberOfLikes?: number
  }

  export type PostMetricsUpdateManyMutationInput = {
    numberOfViews?: IntFieldUpdateOperationsInput | number
    totalOfComments?: IntFieldUpdateOperationsInput | number
    numberOfLikes?: IntFieldUpdateOperationsInput | number
  }

  export type PostMetricsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    numberOfViews?: IntFieldUpdateOperationsInput | number
    totalOfComments?: IntFieldUpdateOperationsInput | number
    numberOfLikes?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikesCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikesInput
    post: PostMetricsCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikesUncheckedCreateInput = {
    userId: string
    postMetricsId: number
    createdAt?: Date | string
  }

  export type PostLikesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
    post?: PostMetricsUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikesUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postMetricsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesCreateManyInput = {
    userId: string
    postMetricsId: number
    createdAt?: Date | string
  }

  export type PostLikesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postMetricsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsCreateInput = {
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostCommentsInput
    post: PostsCreateNestedOneWithoutPostCommentsInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateInput = {
    id?: number
    userId: string
    postId: number
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
    post?: PostsUpdateOneRequiredWithoutPostCommentsNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsCreateManyInput = {
    id?: number
    userId: string
    postId: number
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsLikesCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostCommentsLikesInput
    postComments: PostCommentsCreateNestedOneWithoutPostCommentsLikesInput
  }

  export type PostCommentsLikesUncheckedCreateInput = {
    userId: string
    postCommentId: number
    createdAt?: Date | string
  }

  export type PostCommentsLikesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostCommentsLikesNestedInput
    postComments?: PostCommentsUpdateOneRequiredWithoutPostCommentsLikesNestedInput
  }

  export type PostCommentsLikesUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsLikesCreateManyInput = {
    userId: string
    postCommentId: number
    createdAt?: Date | string
  }

  export type PostCommentsLikesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsLikesUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileInformationCreateInput = {
    profileInformationType: $Enums.ProfileInformationType
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
  }

  export type ProfileInformationUncheckedCreateInput = {
    id?: number
    profileInformationType: $Enums.ProfileInformationType
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
  }

  export type ProfileInformationUpdateInput = {
    profileInformationType?: EnumProfileInformationTypeFieldUpdateOperationsInput | $Enums.ProfileInformationType
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
  }

  export type ProfileInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profileInformationType?: EnumProfileInformationTypeFieldUpdateOperationsInput | $Enums.ProfileInformationType
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
  }

  export type ProfileInformationCreateManyInput = {
    id?: number
    profileInformationType: $Enums.ProfileInformationType
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
  }

  export type ProfileInformationUpdateManyMutationInput = {
    profileInformationType?: EnumProfileInformationTypeFieldUpdateOperationsInput | $Enums.ProfileInformationType
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
  }

  export type ProfileInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profileInformationType?: EnumProfileInformationTypeFieldUpdateOperationsInput | $Enums.ProfileInformationType
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuthenticatorListRelationFilter = {
    every?: AuthenticatorWhereInput
    some?: AuthenticatorWhereInput
    none?: AuthenticatorWhereInput
  }

  export type PostCommentsListRelationFilter = {
    every?: PostCommentsWhereInput
    some?: PostCommentsWhereInput
    none?: PostCommentsWhereInput
  }

  export type PostCommentsLikesListRelationFilter = {
    every?: PostCommentsLikesWhereInput
    some?: PostCommentsLikesWhereInput
    none?: PostCommentsLikesWhereInput
  }

  export type PostLikesListRelationFilter = {
    every?: PostLikesWhereInput
    some?: PostLikesWhereInput
    none?: PostLikesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthenticatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentsLikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostLikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AuthenticatorUserIdCredentialIDCompoundUniqueInput = {
    userId: string
    credentialID: string
  }

  export type AuthenticatorCountOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type AuthenticatorMaxOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorMinOrderByAggregateInput = {
    credentialID?: SortOrder
    userId?: SortOrder
    providerAccountId?: SortOrder
    credentialPublicKey?: SortOrder
    counter?: SortOrder
    credentialDeviceType?: SortOrder
    credentialBackedUp?: SortOrder
    transports?: SortOrder
  }

  export type AuthenticatorSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NewsLetterSubscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    confirmationId?: SortOrder
    confirmationExpiresAt?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type NewsLetterSubscriptionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsLetterSubscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    confirmationId?: SortOrder
    confirmationExpiresAt?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type NewsLetterSubscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    confirmationId?: SortOrder
    confirmationExpiresAt?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type NewsLetterSubscriptionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumTranslatedModelFilter<$PrismaModel = never> = {
    equals?: $Enums.TranslatedModel | EnumTranslatedModelFieldRefInput<$PrismaModel>
    in?: $Enums.TranslatedModel[] | ListEnumTranslatedModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranslatedModel[] | ListEnumTranslatedModelFieldRefInput<$PrismaModel>
    not?: NestedEnumTranslatedModelFilter<$PrismaModel> | $Enums.TranslatedModel
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type PostMetricsNullableScalarRelationFilter = {
    is?: PostMetricsWhereInput | null
    isNot?: PostMetricsWhereInput | null
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    notionId?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    coverUrl?: SortOrder
    excerpt_pt?: SortOrder
    excerpt_en?: SortOrder
    readTime?: SortOrder
    featured?: SortOrder
    Priority?: SortOrder
    translatedModel?: SortOrder
    ptBr?: SortOrder
    en?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsAvgOrderByAggregateInput = {
    id?: SortOrder
    readTime?: SortOrder
    Priority?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    notionId?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    coverUrl?: SortOrder
    excerpt_pt?: SortOrder
    excerpt_en?: SortOrder
    readTime?: SortOrder
    featured?: SortOrder
    Priority?: SortOrder
    translatedModel?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    notionId?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    coverUrl?: SortOrder
    excerpt_pt?: SortOrder
    excerpt_en?: SortOrder
    readTime?: SortOrder
    featured?: SortOrder
    Priority?: SortOrder
    translatedModel?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsSumOrderByAggregateInput = {
    id?: SortOrder
    readTime?: SortOrder
    Priority?: SortOrder
  }

  export type EnumTranslatedModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TranslatedModel | EnumTranslatedModelFieldRefInput<$PrismaModel>
    in?: $Enums.TranslatedModel[] | ListEnumTranslatedModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranslatedModel[] | ListEnumTranslatedModelFieldRefInput<$PrismaModel>
    not?: NestedEnumTranslatedModelWithAggregatesFilter<$PrismaModel> | $Enums.TranslatedModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTranslatedModelFilter<$PrismaModel>
    _max?: NestedEnumTranslatedModelFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type PostMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfViews?: SortOrder
    totalOfComments?: SortOrder
    numberOfLikes?: SortOrder
  }

  export type PostMetricsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfViews?: SortOrder
    totalOfComments?: SortOrder
    numberOfLikes?: SortOrder
  }

  export type PostMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfViews?: SortOrder
    totalOfComments?: SortOrder
    numberOfLikes?: SortOrder
  }

  export type PostMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfViews?: SortOrder
    totalOfComments?: SortOrder
    numberOfLikes?: SortOrder
  }

  export type PostMetricsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfViews?: SortOrder
    totalOfComments?: SortOrder
    numberOfLikes?: SortOrder
  }

  export type PostMetricsScalarRelationFilter = {
    is?: PostMetricsWhereInput
    isNot?: PostMetricsWhereInput
  }

  export type PostLikesUserIdPostMetricsIdCompoundUniqueInput = {
    userId: string
    postMetricsId: number
  }

  export type PostLikesCountOrderByAggregateInput = {
    userId?: SortOrder
    postMetricsId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikesAvgOrderByAggregateInput = {
    postMetricsId?: SortOrder
  }

  export type PostLikesMaxOrderByAggregateInput = {
    userId?: SortOrder
    postMetricsId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikesMinOrderByAggregateInput = {
    userId?: SortOrder
    postMetricsId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikesSumOrderByAggregateInput = {
    postMetricsId?: SortOrder
  }

  export type PostCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    comment?: SortOrder
    numberOfLikes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfLikes?: SortOrder
  }

  export type PostCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    comment?: SortOrder
    numberOfLikes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    comment?: SortOrder
    numberOfLikes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCommentsSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    numberOfLikes?: SortOrder
  }

  export type PostCommentsScalarRelationFilter = {
    is?: PostCommentsWhereInput
    isNot?: PostCommentsWhereInput
  }

  export type PostCommentsLikesUserIdPostCommentIdCompoundUniqueInput = {
    userId: string
    postCommentId: number
  }

  export type PostCommentsLikesCountOrderByAggregateInput = {
    userId?: SortOrder
    postCommentId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostCommentsLikesAvgOrderByAggregateInput = {
    postCommentId?: SortOrder
  }

  export type PostCommentsLikesMaxOrderByAggregateInput = {
    userId?: SortOrder
    postCommentId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostCommentsLikesMinOrderByAggregateInput = {
    userId?: SortOrder
    postCommentId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostCommentsLikesSumOrderByAggregateInput = {
    postCommentId?: SortOrder
  }

  export type EnumProfileInformationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileInformationType | EnumProfileInformationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileInformationType[] | ListEnumProfileInformationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileInformationType[] | ListEnumProfileInformationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileInformationTypeFilter<$PrismaModel> | $Enums.ProfileInformationType
  }

  export type ProfileInformationCountOrderByAggregateInput = {
    id?: SortOrder
    profileInformationType?: SortOrder
    ptBr?: SortOrder
    en?: SortOrder
  }

  export type ProfileInformationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfileInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    profileInformationType?: SortOrder
  }

  export type ProfileInformationMinOrderByAggregateInput = {
    id?: SortOrder
    profileInformationType?: SortOrder
  }

  export type ProfileInformationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumProfileInformationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileInformationType | EnumProfileInformationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileInformationType[] | ListEnumProfileInformationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileInformationType[] | ListEnumProfileInformationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileInformationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProfileInformationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProfileInformationTypeFilter<$PrismaModel>
    _max?: NestedEnumProfileInformationTypeFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type PostCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput> | PostCommentsCreateWithoutUserInput[] | PostCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutUserInput | PostCommentsCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentsCreateManyUserInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostCommentsLikesCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentsLikesCreateWithoutUserInput, PostCommentsLikesUncheckedCreateWithoutUserInput> | PostCommentsLikesCreateWithoutUserInput[] | PostCommentsLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsLikesCreateOrConnectWithoutUserInput | PostCommentsLikesCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentsLikesCreateManyUserInputEnvelope
    connect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
  }

  export type PostLikesCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput> | PostLikesCreateWithoutUserInput[] | PostLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutUserInput | PostLikesCreateOrConnectWithoutUserInput[]
    createMany?: PostLikesCreateManyUserInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuthenticatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
  }

  export type PostCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput> | PostCommentsCreateWithoutUserInput[] | PostCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutUserInput | PostCommentsCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentsCreateManyUserInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostCommentsLikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentsLikesCreateWithoutUserInput, PostCommentsLikesUncheckedCreateWithoutUserInput> | PostCommentsLikesCreateWithoutUserInput[] | PostCommentsLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsLikesCreateOrConnectWithoutUserInput | PostCommentsLikesCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentsLikesCreateManyUserInputEnvelope
    connect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
  }

  export type PostLikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput> | PostLikesCreateWithoutUserInput[] | PostLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutUserInput | PostLikesCreateOrConnectWithoutUserInput[]
    createMany?: PostLikesCreateManyUserInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type PostCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput> | PostCommentsCreateWithoutUserInput[] | PostCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutUserInput | PostCommentsCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutUserInput | PostCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentsCreateManyUserInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutUserInput | PostCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutUserInput | PostCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostCommentsLikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentsLikesCreateWithoutUserInput, PostCommentsLikesUncheckedCreateWithoutUserInput> | PostCommentsLikesCreateWithoutUserInput[] | PostCommentsLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsLikesCreateOrConnectWithoutUserInput | PostCommentsLikesCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentsLikesUpsertWithWhereUniqueWithoutUserInput | PostCommentsLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentsLikesCreateManyUserInputEnvelope
    set?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    disconnect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    delete?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    connect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    update?: PostCommentsLikesUpdateWithWhereUniqueWithoutUserInput | PostCommentsLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentsLikesUpdateManyWithWhereWithoutUserInput | PostCommentsLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentsLikesScalarWhereInput | PostCommentsLikesScalarWhereInput[]
  }

  export type PostLikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput> | PostLikesCreateWithoutUserInput[] | PostLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutUserInput | PostLikesCreateOrConnectWithoutUserInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutUserInput | PostLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikesCreateManyUserInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutUserInput | PostLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutUserInput | PostLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput> | AuthenticatorCreateWithoutUserInput[] | AuthenticatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthenticatorCreateOrConnectWithoutUserInput | AuthenticatorCreateOrConnectWithoutUserInput[]
    upsert?: AuthenticatorUpsertWithWhereUniqueWithoutUserInput | AuthenticatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthenticatorCreateManyUserInputEnvelope
    set?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    disconnect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    delete?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    connect?: AuthenticatorWhereUniqueInput | AuthenticatorWhereUniqueInput[]
    update?: AuthenticatorUpdateWithWhereUniqueWithoutUserInput | AuthenticatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthenticatorUpdateManyWithWhereWithoutUserInput | AuthenticatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
  }

  export type PostCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput> | PostCommentsCreateWithoutUserInput[] | PostCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutUserInput | PostCommentsCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutUserInput | PostCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentsCreateManyUserInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutUserInput | PostCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutUserInput | PostCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostCommentsLikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentsLikesCreateWithoutUserInput, PostCommentsLikesUncheckedCreateWithoutUserInput> | PostCommentsLikesCreateWithoutUserInput[] | PostCommentsLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentsLikesCreateOrConnectWithoutUserInput | PostCommentsLikesCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentsLikesUpsertWithWhereUniqueWithoutUserInput | PostCommentsLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentsLikesCreateManyUserInputEnvelope
    set?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    disconnect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    delete?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    connect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    update?: PostCommentsLikesUpdateWithWhereUniqueWithoutUserInput | PostCommentsLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentsLikesUpdateManyWithWhereWithoutUserInput | PostCommentsLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentsLikesScalarWhereInput | PostCommentsLikesScalarWhereInput[]
  }

  export type PostLikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput> | PostLikesCreateWithoutUserInput[] | PostLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutUserInput | PostLikesCreateOrConnectWithoutUserInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutUserInput | PostLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikesCreateManyUserInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutUserInput | PostLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutUserInput | PostLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAuthenticatorInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAuthenticatorNestedInput = {
    create?: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput
    upsert?: UserUpsertWithoutAuthenticatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthenticatorInput, UserUpdateWithoutAuthenticatorInput>, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type PostsCreatetagsInput = {
    set: string[]
  }

  export type PostMetricsCreateNestedOneWithoutPostInput = {
    create?: XOR<PostMetricsCreateWithoutPostInput, PostMetricsUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostMetricsCreateOrConnectWithoutPostInput
    connect?: PostMetricsWhereUniqueInput
  }

  export type PostCommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostMetricsUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<PostMetricsCreateWithoutPostInput, PostMetricsUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostMetricsCreateOrConnectWithoutPostInput
    connect?: PostMetricsWhereUniqueInput
  }

  export type PostCommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
  }

  export type PostsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumTranslatedModelFieldUpdateOperationsInput = {
    set?: $Enums.TranslatedModel
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type PostMetricsUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostMetricsCreateWithoutPostInput, PostMetricsUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostMetricsCreateOrConnectWithoutPostInput
    upsert?: PostMetricsUpsertWithoutPostInput
    disconnect?: PostMetricsWhereInput | boolean
    delete?: PostMetricsWhereInput | boolean
    connect?: PostMetricsWhereUniqueInput
    update?: XOR<XOR<PostMetricsUpdateToOneWithWhereWithoutPostInput, PostMetricsUpdateWithoutPostInput>, PostMetricsUncheckedUpdateWithoutPostInput>
  }

  export type PostCommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutPostInput | PostCommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutPostInput | PostCommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutPostInput | PostCommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostMetricsUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostMetricsCreateWithoutPostInput, PostMetricsUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostMetricsCreateOrConnectWithoutPostInput
    upsert?: PostMetricsUpsertWithoutPostInput
    disconnect?: PostMetricsWhereInput | boolean
    delete?: PostMetricsWhereInput | boolean
    connect?: PostMetricsWhereUniqueInput
    update?: XOR<XOR<PostMetricsUpdateToOneWithWhereWithoutPostInput, PostMetricsUpdateWithoutPostInput>, PostMetricsUncheckedUpdateWithoutPostInput>
  }

  export type PostCommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput> | PostCommentsCreateWithoutPostInput[] | PostCommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostInput | PostCommentsCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentsUpsertWithWhereUniqueWithoutPostInput | PostCommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentsCreateManyPostInputEnvelope
    set?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    disconnect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    delete?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    connect?: PostCommentsWhereUniqueInput | PostCommentsWhereUniqueInput[]
    update?: PostCommentsUpdateWithWhereUniqueWithoutPostInput | PostCommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentsUpdateManyWithWhereWithoutPostInput | PostCommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutPostMetricsInput = {
    create?: XOR<PostsCreateWithoutPostMetricsInput, PostsUncheckedCreateWithoutPostMetricsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutPostMetricsInput
    connect?: PostsWhereUniqueInput
  }

  export type PostLikesCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type PostLikesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
  }

  export type PostsUpdateOneRequiredWithoutPostMetricsNestedInput = {
    create?: XOR<PostsCreateWithoutPostMetricsInput, PostsUncheckedCreateWithoutPostMetricsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutPostMetricsInput
    upsert?: PostsUpsertWithoutPostMetricsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutPostMetricsInput, PostsUpdateWithoutPostMetricsInput>, PostsUncheckedUpdateWithoutPostMetricsInput>
  }

  export type PostLikesUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutPostInput | PostLikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutPostInput | PostLikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutPostInput | PostLikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type PostLikesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput> | PostLikesCreateWithoutPostInput[] | PostLikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikesCreateOrConnectWithoutPostInput | PostLikesCreateOrConnectWithoutPostInput[]
    upsert?: PostLikesUpsertWithWhereUniqueWithoutPostInput | PostLikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikesCreateManyPostInputEnvelope
    set?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    disconnect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    delete?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    connect?: PostLikesWhereUniqueInput | PostLikesWhereUniqueInput[]
    update?: PostLikesUpdateWithWhereUniqueWithoutPostInput | PostLikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikesUpdateManyWithWhereWithoutPostInput | PostLikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostMetricsCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<PostMetricsCreateWithoutPostLikesInput, PostMetricsUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: PostMetricsCreateOrConnectWithoutPostLikesInput
    connect?: PostMetricsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    upsert?: UserUpsertWithoutPostLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostLikesInput, UserUpdateWithoutPostLikesInput>, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type PostMetricsUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<PostMetricsCreateWithoutPostLikesInput, PostMetricsUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: PostMetricsCreateOrConnectWithoutPostLikesInput
    upsert?: PostMetricsUpsertWithoutPostLikesInput
    connect?: PostMetricsWhereUniqueInput
    update?: XOR<XOR<PostMetricsUpdateToOneWithWhereWithoutPostLikesInput, PostMetricsUpdateWithoutPostLikesInput>, PostMetricsUncheckedUpdateWithoutPostLikesInput>
  }

  export type UserCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<PostsCreateWithoutPostCommentsInput, PostsUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutPostCommentsInput
    connect?: PostsWhereUniqueInput
  }

  export type PostCommentsLikesCreateNestedManyWithoutPostCommentsInput = {
    create?: XOR<PostCommentsLikesCreateWithoutPostCommentsInput, PostCommentsLikesUncheckedCreateWithoutPostCommentsInput> | PostCommentsLikesCreateWithoutPostCommentsInput[] | PostCommentsLikesUncheckedCreateWithoutPostCommentsInput[]
    connectOrCreate?: PostCommentsLikesCreateOrConnectWithoutPostCommentsInput | PostCommentsLikesCreateOrConnectWithoutPostCommentsInput[]
    createMany?: PostCommentsLikesCreateManyPostCommentsInputEnvelope
    connect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
  }

  export type PostCommentsLikesUncheckedCreateNestedManyWithoutPostCommentsInput = {
    create?: XOR<PostCommentsLikesCreateWithoutPostCommentsInput, PostCommentsLikesUncheckedCreateWithoutPostCommentsInput> | PostCommentsLikesCreateWithoutPostCommentsInput[] | PostCommentsLikesUncheckedCreateWithoutPostCommentsInput[]
    connectOrCreate?: PostCommentsLikesCreateOrConnectWithoutPostCommentsInput | PostCommentsLikesCreateOrConnectWithoutPostCommentsInput[]
    createMany?: PostCommentsLikesCreateManyPostCommentsInputEnvelope
    connect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput
    upsert?: UserUpsertWithoutPostCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostCommentsInput, UserUpdateWithoutPostCommentsInput>, UserUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostsUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<PostsCreateWithoutPostCommentsInput, PostsUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutPostCommentsInput
    upsert?: PostsUpsertWithoutPostCommentsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutPostCommentsInput, PostsUpdateWithoutPostCommentsInput>, PostsUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostCommentsLikesUpdateManyWithoutPostCommentsNestedInput = {
    create?: XOR<PostCommentsLikesCreateWithoutPostCommentsInput, PostCommentsLikesUncheckedCreateWithoutPostCommentsInput> | PostCommentsLikesCreateWithoutPostCommentsInput[] | PostCommentsLikesUncheckedCreateWithoutPostCommentsInput[]
    connectOrCreate?: PostCommentsLikesCreateOrConnectWithoutPostCommentsInput | PostCommentsLikesCreateOrConnectWithoutPostCommentsInput[]
    upsert?: PostCommentsLikesUpsertWithWhereUniqueWithoutPostCommentsInput | PostCommentsLikesUpsertWithWhereUniqueWithoutPostCommentsInput[]
    createMany?: PostCommentsLikesCreateManyPostCommentsInputEnvelope
    set?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    disconnect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    delete?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    connect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    update?: PostCommentsLikesUpdateWithWhereUniqueWithoutPostCommentsInput | PostCommentsLikesUpdateWithWhereUniqueWithoutPostCommentsInput[]
    updateMany?: PostCommentsLikesUpdateManyWithWhereWithoutPostCommentsInput | PostCommentsLikesUpdateManyWithWhereWithoutPostCommentsInput[]
    deleteMany?: PostCommentsLikesScalarWhereInput | PostCommentsLikesScalarWhereInput[]
  }

  export type PostCommentsLikesUncheckedUpdateManyWithoutPostCommentsNestedInput = {
    create?: XOR<PostCommentsLikesCreateWithoutPostCommentsInput, PostCommentsLikesUncheckedCreateWithoutPostCommentsInput> | PostCommentsLikesCreateWithoutPostCommentsInput[] | PostCommentsLikesUncheckedCreateWithoutPostCommentsInput[]
    connectOrCreate?: PostCommentsLikesCreateOrConnectWithoutPostCommentsInput | PostCommentsLikesCreateOrConnectWithoutPostCommentsInput[]
    upsert?: PostCommentsLikesUpsertWithWhereUniqueWithoutPostCommentsInput | PostCommentsLikesUpsertWithWhereUniqueWithoutPostCommentsInput[]
    createMany?: PostCommentsLikesCreateManyPostCommentsInputEnvelope
    set?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    disconnect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    delete?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    connect?: PostCommentsLikesWhereUniqueInput | PostCommentsLikesWhereUniqueInput[]
    update?: PostCommentsLikesUpdateWithWhereUniqueWithoutPostCommentsInput | PostCommentsLikesUpdateWithWhereUniqueWithoutPostCommentsInput[]
    updateMany?: PostCommentsLikesUpdateManyWithWhereWithoutPostCommentsInput | PostCommentsLikesUpdateManyWithWhereWithoutPostCommentsInput[]
    deleteMany?: PostCommentsLikesScalarWhereInput | PostCommentsLikesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostCommentsLikesInput = {
    create?: XOR<UserCreateWithoutPostCommentsLikesInput, UserUncheckedCreateWithoutPostCommentsLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCommentsCreateNestedOneWithoutPostCommentsLikesInput = {
    create?: XOR<PostCommentsCreateWithoutPostCommentsLikesInput, PostCommentsUncheckedCreateWithoutPostCommentsLikesInput>
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostCommentsLikesInput
    connect?: PostCommentsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostCommentsLikesNestedInput = {
    create?: XOR<UserCreateWithoutPostCommentsLikesInput, UserUncheckedCreateWithoutPostCommentsLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsLikesInput
    upsert?: UserUpsertWithoutPostCommentsLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostCommentsLikesInput, UserUpdateWithoutPostCommentsLikesInput>, UserUncheckedUpdateWithoutPostCommentsLikesInput>
  }

  export type PostCommentsUpdateOneRequiredWithoutPostCommentsLikesNestedInput = {
    create?: XOR<PostCommentsCreateWithoutPostCommentsLikesInput, PostCommentsUncheckedCreateWithoutPostCommentsLikesInput>
    connectOrCreate?: PostCommentsCreateOrConnectWithoutPostCommentsLikesInput
    upsert?: PostCommentsUpsertWithoutPostCommentsLikesInput
    connect?: PostCommentsWhereUniqueInput
    update?: XOR<XOR<PostCommentsUpdateToOneWithWhereWithoutPostCommentsLikesInput, PostCommentsUpdateWithoutPostCommentsLikesInput>, PostCommentsUncheckedUpdateWithoutPostCommentsLikesInput>
  }

  export type EnumProfileInformationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProfileInformationType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTranslatedModelFilter<$PrismaModel = never> = {
    equals?: $Enums.TranslatedModel | EnumTranslatedModelFieldRefInput<$PrismaModel>
    in?: $Enums.TranslatedModel[] | ListEnumTranslatedModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranslatedModel[] | ListEnumTranslatedModelFieldRefInput<$PrismaModel>
    not?: NestedEnumTranslatedModelFilter<$PrismaModel> | $Enums.TranslatedModel
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedEnumTranslatedModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TranslatedModel | EnumTranslatedModelFieldRefInput<$PrismaModel>
    in?: $Enums.TranslatedModel[] | ListEnumTranslatedModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranslatedModel[] | ListEnumTranslatedModelFieldRefInput<$PrismaModel>
    not?: NestedEnumTranslatedModelWithAggregatesFilter<$PrismaModel> | $Enums.TranslatedModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTranslatedModelFilter<$PrismaModel>
    _max?: NestedEnumTranslatedModelFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedEnumProfileInformationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileInformationType | EnumProfileInformationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileInformationType[] | ListEnumProfileInformationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileInformationType[] | ListEnumProfileInformationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileInformationTypeFilter<$PrismaModel> | $Enums.ProfileInformationType
  }

  export type NestedEnumProfileInformationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileInformationType | EnumProfileInformationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileInformationType[] | ListEnumProfileInformationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileInformationType[] | ListEnumProfileInformationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileInformationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProfileInformationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProfileInformationTypeFilter<$PrismaModel>
    _max?: NestedEnumProfileInformationTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthenticatorCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorUncheckedCreateWithoutUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type AuthenticatorCreateOrConnectWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorCreateManyUserInputEnvelope = {
    data: AuthenticatorCreateManyUserInput | AuthenticatorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentsCreateWithoutUserInput = {
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostsCreateNestedOneWithoutPostCommentsInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsCreateOrConnectWithoutUserInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput>
  }

  export type PostCommentsCreateManyUserInputEnvelope = {
    data: PostCommentsCreateManyUserInput | PostCommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentsLikesCreateWithoutUserInput = {
    createdAt?: Date | string
    postComments: PostCommentsCreateNestedOneWithoutPostCommentsLikesInput
  }

  export type PostCommentsLikesUncheckedCreateWithoutUserInput = {
    postCommentId: number
    createdAt?: Date | string
  }

  export type PostCommentsLikesCreateOrConnectWithoutUserInput = {
    where: PostCommentsLikesWhereUniqueInput
    create: XOR<PostCommentsLikesCreateWithoutUserInput, PostCommentsLikesUncheckedCreateWithoutUserInput>
  }

  export type PostCommentsLikesCreateManyUserInputEnvelope = {
    data: PostCommentsLikesCreateManyUserInput | PostCommentsLikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostLikesCreateWithoutUserInput = {
    createdAt?: Date | string
    post: PostMetricsCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikesUncheckedCreateWithoutUserInput = {
    postMetricsId: number
    createdAt?: Date | string
  }

  export type PostLikesCreateOrConnectWithoutUserInput = {
    where: PostLikesWhereUniqueInput
    create: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput>
  }

  export type PostLikesCreateManyUserInputEnvelope = {
    data: PostLikesCreateManyUserInput | PostLikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AuthenticatorUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    update: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
    create: XOR<AuthenticatorCreateWithoutUserInput, AuthenticatorUncheckedCreateWithoutUserInput>
  }

  export type AuthenticatorUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput
    data: XOR<AuthenticatorUpdateWithoutUserInput, AuthenticatorUncheckedUpdateWithoutUserInput>
  }

  export type AuthenticatorUpdateManyWithWhereWithoutUserInput = {
    where: AuthenticatorScalarWhereInput
    data: XOR<AuthenticatorUpdateManyMutationInput, AuthenticatorUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthenticatorScalarWhereInput = {
    AND?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    OR?: AuthenticatorScalarWhereInput[]
    NOT?: AuthenticatorScalarWhereInput | AuthenticatorScalarWhereInput[]
    credentialID?: StringFilter<"Authenticator"> | string
    userId?: StringFilter<"Authenticator"> | string
    providerAccountId?: StringFilter<"Authenticator"> | string
    credentialPublicKey?: StringFilter<"Authenticator"> | string
    counter?: IntFilter<"Authenticator"> | number
    credentialDeviceType?: StringFilter<"Authenticator"> | string
    credentialBackedUp?: BoolFilter<"Authenticator"> | boolean
    transports?: StringNullableFilter<"Authenticator"> | string | null
  }

  export type PostCommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: PostCommentsWhereUniqueInput
    update: XOR<PostCommentsUpdateWithoutUserInput, PostCommentsUncheckedUpdateWithoutUserInput>
    create: XOR<PostCommentsCreateWithoutUserInput, PostCommentsUncheckedCreateWithoutUserInput>
  }

  export type PostCommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: PostCommentsWhereUniqueInput
    data: XOR<PostCommentsUpdateWithoutUserInput, PostCommentsUncheckedUpdateWithoutUserInput>
  }

  export type PostCommentsUpdateManyWithWhereWithoutUserInput = {
    where: PostCommentsScalarWhereInput
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type PostCommentsScalarWhereInput = {
    AND?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
    OR?: PostCommentsScalarWhereInput[]
    NOT?: PostCommentsScalarWhereInput | PostCommentsScalarWhereInput[]
    id?: IntFilter<"PostComments"> | number
    userId?: StringFilter<"PostComments"> | string
    postId?: IntFilter<"PostComments"> | number
    comment?: StringFilter<"PostComments"> | string
    numberOfLikes?: IntFilter<"PostComments"> | number
    createdAt?: DateTimeFilter<"PostComments"> | Date | string
    updatedAt?: DateTimeFilter<"PostComments"> | Date | string
  }

  export type PostCommentsLikesUpsertWithWhereUniqueWithoutUserInput = {
    where: PostCommentsLikesWhereUniqueInput
    update: XOR<PostCommentsLikesUpdateWithoutUserInput, PostCommentsLikesUncheckedUpdateWithoutUserInput>
    create: XOR<PostCommentsLikesCreateWithoutUserInput, PostCommentsLikesUncheckedCreateWithoutUserInput>
  }

  export type PostCommentsLikesUpdateWithWhereUniqueWithoutUserInput = {
    where: PostCommentsLikesWhereUniqueInput
    data: XOR<PostCommentsLikesUpdateWithoutUserInput, PostCommentsLikesUncheckedUpdateWithoutUserInput>
  }

  export type PostCommentsLikesUpdateManyWithWhereWithoutUserInput = {
    where: PostCommentsLikesScalarWhereInput
    data: XOR<PostCommentsLikesUpdateManyMutationInput, PostCommentsLikesUncheckedUpdateManyWithoutUserInput>
  }

  export type PostCommentsLikesScalarWhereInput = {
    AND?: PostCommentsLikesScalarWhereInput | PostCommentsLikesScalarWhereInput[]
    OR?: PostCommentsLikesScalarWhereInput[]
    NOT?: PostCommentsLikesScalarWhereInput | PostCommentsLikesScalarWhereInput[]
    userId?: StringFilter<"PostCommentsLikes"> | string
    postCommentId?: IntFilter<"PostCommentsLikes"> | number
    createdAt?: DateTimeFilter<"PostCommentsLikes"> | Date | string
  }

  export type PostLikesUpsertWithWhereUniqueWithoutUserInput = {
    where: PostLikesWhereUniqueInput
    update: XOR<PostLikesUpdateWithoutUserInput, PostLikesUncheckedUpdateWithoutUserInput>
    create: XOR<PostLikesCreateWithoutUserInput, PostLikesUncheckedCreateWithoutUserInput>
  }

  export type PostLikesUpdateWithWhereUniqueWithoutUserInput = {
    where: PostLikesWhereUniqueInput
    data: XOR<PostLikesUpdateWithoutUserInput, PostLikesUncheckedUpdateWithoutUserInput>
  }

  export type PostLikesUpdateManyWithWhereWithoutUserInput = {
    where: PostLikesScalarWhereInput
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyWithoutUserInput>
  }

  export type PostLikesScalarWhereInput = {
    AND?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
    OR?: PostLikesScalarWhereInput[]
    NOT?: PostLikesScalarWhereInput | PostLikesScalarWhereInput[]
    userId?: StringFilter<"PostLikes"> | string
    postMetricsId?: IntFilter<"PostLikes"> | number
    createdAt?: DateTimeFilter<"PostLikes"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthenticatorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthenticatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
  }

  export type UserUpsertWithoutAuthenticatorInput = {
    update: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
    create: XOR<UserCreateWithoutAuthenticatorInput, UserUncheckedCreateWithoutAuthenticatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthenticatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthenticatorInput, UserUncheckedUpdateWithoutAuthenticatorInput>
  }

  export type UserUpdateWithoutAuthenticatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthenticatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostMetricsCreateWithoutPostInput = {
    numberOfViews?: number
    totalOfComments?: number
    numberOfLikes?: number
    PostLikes?: PostLikesCreateNestedManyWithoutPostInput
  }

  export type PostMetricsUncheckedCreateWithoutPostInput = {
    id?: number
    numberOfViews?: number
    totalOfComments?: number
    numberOfLikes?: number
    PostLikes?: PostLikesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostMetricsCreateOrConnectWithoutPostInput = {
    where: PostMetricsWhereUniqueInput
    create: XOR<PostMetricsCreateWithoutPostInput, PostMetricsUncheckedCreateWithoutPostInput>
  }

  export type PostCommentsCreateWithoutPostInput = {
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostCommentsInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateWithoutPostInput = {
    id?: number
    userId: string
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutPostCommentsInput
  }

  export type PostCommentsCreateOrConnectWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput>
  }

  export type PostCommentsCreateManyPostInputEnvelope = {
    data: PostCommentsCreateManyPostInput | PostCommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostMetricsUpsertWithoutPostInput = {
    update: XOR<PostMetricsUpdateWithoutPostInput, PostMetricsUncheckedUpdateWithoutPostInput>
    create: XOR<PostMetricsCreateWithoutPostInput, PostMetricsUncheckedCreateWithoutPostInput>
    where?: PostMetricsWhereInput
  }

  export type PostMetricsUpdateToOneWithWhereWithoutPostInput = {
    where?: PostMetricsWhereInput
    data: XOR<PostMetricsUpdateWithoutPostInput, PostMetricsUncheckedUpdateWithoutPostInput>
  }

  export type PostMetricsUpdateWithoutPostInput = {
    numberOfViews?: IntFieldUpdateOperationsInput | number
    totalOfComments?: IntFieldUpdateOperationsInput | number
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    PostLikes?: PostLikesUpdateManyWithoutPostNestedInput
  }

  export type PostMetricsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberOfViews?: IntFieldUpdateOperationsInput | number
    totalOfComments?: IntFieldUpdateOperationsInput | number
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    PostLikes?: PostLikesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    update: XOR<PostCommentsUpdateWithoutPostInput, PostCommentsUncheckedUpdateWithoutPostInput>
    create: XOR<PostCommentsCreateWithoutPostInput, PostCommentsUncheckedCreateWithoutPostInput>
  }

  export type PostCommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: PostCommentsWhereUniqueInput
    data: XOR<PostCommentsUpdateWithoutPostInput, PostCommentsUncheckedUpdateWithoutPostInput>
  }

  export type PostCommentsUpdateManyWithWhereWithoutPostInput = {
    where: PostCommentsScalarWhereInput
    data: XOR<PostCommentsUpdateManyMutationInput, PostCommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostsCreateWithoutPostMetricsInput = {
    notionId: string
    slug: string
    category: string
    tags?: PostsCreatetagsInput | string[]
    coverUrl: string
    excerpt_pt: string
    excerpt_en: string
    readTime: number
    featured: boolean
    Priority: number
    translatedModel: $Enums.TranslatedModel
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
    status?: $Enums.PostStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    PostComments?: PostCommentsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutPostMetricsInput = {
    id?: number
    notionId: string
    slug: string
    category: string
    tags?: PostsCreatetagsInput | string[]
    coverUrl: string
    excerpt_pt: string
    excerpt_en: string
    readTime: number
    featured: boolean
    Priority: number
    translatedModel: $Enums.TranslatedModel
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
    status?: $Enums.PostStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    PostComments?: PostCommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutPostMetricsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutPostMetricsInput, PostsUncheckedCreateWithoutPostMetricsInput>
  }

  export type PostLikesCreateWithoutPostInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikesUncheckedCreateWithoutPostInput = {
    userId: string
    createdAt?: Date | string
  }

  export type PostLikesCreateOrConnectWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    create: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput>
  }

  export type PostLikesCreateManyPostInputEnvelope = {
    data: PostLikesCreateManyPostInput | PostLikesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostsUpsertWithoutPostMetricsInput = {
    update: XOR<PostsUpdateWithoutPostMetricsInput, PostsUncheckedUpdateWithoutPostMetricsInput>
    create: XOR<PostsCreateWithoutPostMetricsInput, PostsUncheckedCreateWithoutPostMetricsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutPostMetricsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutPostMetricsInput, PostsUncheckedUpdateWithoutPostMetricsInput>
  }

  export type PostsUpdateWithoutPostMetricsInput = {
    notionId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PostsUpdatetagsInput | string[]
    coverUrl?: StringFieldUpdateOperationsInput | string
    excerpt_pt?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    Priority?: IntFieldUpdateOperationsInput | number
    translatedModel?: EnumTranslatedModelFieldUpdateOperationsInput | $Enums.TranslatedModel
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostComments?: PostCommentsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutPostMetricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    notionId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PostsUpdatetagsInput | string[]
    coverUrl?: StringFieldUpdateOperationsInput | string
    excerpt_pt?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    Priority?: IntFieldUpdateOperationsInput | number
    translatedModel?: EnumTranslatedModelFieldUpdateOperationsInput | $Enums.TranslatedModel
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostComments?: PostCommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostLikesUpsertWithWhereUniqueWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    update: XOR<PostLikesUpdateWithoutPostInput, PostLikesUncheckedUpdateWithoutPostInput>
    create: XOR<PostLikesCreateWithoutPostInput, PostLikesUncheckedCreateWithoutPostInput>
  }

  export type PostLikesUpdateWithWhereUniqueWithoutPostInput = {
    where: PostLikesWhereUniqueInput
    data: XOR<PostLikesUpdateWithoutPostInput, PostLikesUncheckedUpdateWithoutPostInput>
  }

  export type PostLikesUpdateManyWithWhereWithoutPostInput = {
    where: PostLikesScalarWhereInput
    data: XOR<PostLikesUpdateManyMutationInput, PostLikesUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutPostLikesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostLikesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
  }

  export type PostMetricsCreateWithoutPostLikesInput = {
    numberOfViews?: number
    totalOfComments?: number
    numberOfLikes?: number
    post: PostsCreateNestedOneWithoutPostMetricsInput
  }

  export type PostMetricsUncheckedCreateWithoutPostLikesInput = {
    id?: number
    postId: number
    numberOfViews?: number
    totalOfComments?: number
    numberOfLikes?: number
  }

  export type PostMetricsCreateOrConnectWithoutPostLikesInput = {
    where: PostMetricsWhereUniqueInput
    create: XOR<PostMetricsCreateWithoutPostLikesInput, PostMetricsUncheckedCreateWithoutPostLikesInput>
  }

  export type UserUpsertWithoutPostLikesInput = {
    update: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type UserUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostMetricsUpsertWithoutPostLikesInput = {
    update: XOR<PostMetricsUpdateWithoutPostLikesInput, PostMetricsUncheckedUpdateWithoutPostLikesInput>
    create: XOR<PostMetricsCreateWithoutPostLikesInput, PostMetricsUncheckedCreateWithoutPostLikesInput>
    where?: PostMetricsWhereInput
  }

  export type PostMetricsUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: PostMetricsWhereInput
    data: XOR<PostMetricsUpdateWithoutPostLikesInput, PostMetricsUncheckedUpdateWithoutPostLikesInput>
  }

  export type PostMetricsUpdateWithoutPostLikesInput = {
    numberOfViews?: IntFieldUpdateOperationsInput | number
    totalOfComments?: IntFieldUpdateOperationsInput | number
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    post?: PostsUpdateOneRequiredWithoutPostMetricsNestedInput
  }

  export type PostMetricsUncheckedUpdateWithoutPostLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    numberOfViews?: IntFieldUpdateOperationsInput | number
    totalOfComments?: IntFieldUpdateOperationsInput | number
    numberOfLikes?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutPostCommentsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostCommentsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PostCommentsLikes?: PostCommentsLikesUncheckedCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostsCreateWithoutPostCommentsInput = {
    notionId: string
    slug: string
    category: string
    tags?: PostsCreatetagsInput | string[]
    coverUrl: string
    excerpt_pt: string
    excerpt_en: string
    readTime: number
    featured: boolean
    Priority: number
    translatedModel: $Enums.TranslatedModel
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
    status?: $Enums.PostStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    PostMetrics?: PostMetricsCreateNestedOneWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutPostCommentsInput = {
    id?: number
    notionId: string
    slug: string
    category: string
    tags?: PostsCreatetagsInput | string[]
    coverUrl: string
    excerpt_pt: string
    excerpt_en: string
    readTime: number
    featured: boolean
    Priority: number
    translatedModel: $Enums.TranslatedModel
    ptBr: JsonNullValueInput | InputJsonValue
    en: JsonNullValueInput | InputJsonValue
    status?: $Enums.PostStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    PostMetrics?: PostMetricsUncheckedCreateNestedOneWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutPostCommentsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutPostCommentsInput, PostsUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostCommentsLikesCreateWithoutPostCommentsInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostCommentsLikesInput
  }

  export type PostCommentsLikesUncheckedCreateWithoutPostCommentsInput = {
    userId: string
    createdAt?: Date | string
  }

  export type PostCommentsLikesCreateOrConnectWithoutPostCommentsInput = {
    where: PostCommentsLikesWhereUniqueInput
    create: XOR<PostCommentsLikesCreateWithoutPostCommentsInput, PostCommentsLikesUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostCommentsLikesCreateManyPostCommentsInputEnvelope = {
    data: PostCommentsLikesCreateManyPostCommentsInput | PostCommentsLikesCreateManyPostCommentsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostCommentsInput = {
    update: XOR<UserUpdateWithoutPostCommentsInput, UserUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostCommentsInput, UserUncheckedUpdateWithoutPostCommentsInput>
  }

  export type UserUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostsUpsertWithoutPostCommentsInput = {
    update: XOR<PostsUpdateWithoutPostCommentsInput, PostsUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<PostsCreateWithoutPostCommentsInput, PostsUncheckedCreateWithoutPostCommentsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutPostCommentsInput, PostsUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostsUpdateWithoutPostCommentsInput = {
    notionId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PostsUpdatetagsInput | string[]
    coverUrl?: StringFieldUpdateOperationsInput | string
    excerpt_pt?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    Priority?: IntFieldUpdateOperationsInput | number
    translatedModel?: EnumTranslatedModelFieldUpdateOperationsInput | $Enums.TranslatedModel
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostMetrics?: PostMetricsUpdateOneWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutPostCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    notionId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: PostsUpdatetagsInput | string[]
    coverUrl?: StringFieldUpdateOperationsInput | string
    excerpt_pt?: StringFieldUpdateOperationsInput | string
    excerpt_en?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
    Priority?: IntFieldUpdateOperationsInput | number
    translatedModel?: EnumTranslatedModelFieldUpdateOperationsInput | $Enums.TranslatedModel
    ptBr?: JsonNullValueInput | InputJsonValue
    en?: JsonNullValueInput | InputJsonValue
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostMetrics?: PostMetricsUncheckedUpdateOneWithoutPostNestedInput
  }

  export type PostCommentsLikesUpsertWithWhereUniqueWithoutPostCommentsInput = {
    where: PostCommentsLikesWhereUniqueInput
    update: XOR<PostCommentsLikesUpdateWithoutPostCommentsInput, PostCommentsLikesUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<PostCommentsLikesCreateWithoutPostCommentsInput, PostCommentsLikesUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostCommentsLikesUpdateWithWhereUniqueWithoutPostCommentsInput = {
    where: PostCommentsLikesWhereUniqueInput
    data: XOR<PostCommentsLikesUpdateWithoutPostCommentsInput, PostCommentsLikesUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostCommentsLikesUpdateManyWithWhereWithoutPostCommentsInput = {
    where: PostCommentsLikesScalarWhereInput
    data: XOR<PostCommentsLikesUpdateManyMutationInput, PostCommentsLikesUncheckedUpdateManyWithoutPostCommentsInput>
  }

  export type UserCreateWithoutPostCommentsLikesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostCommentsLikesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput
    PostComments?: PostCommentsUncheckedCreateNestedManyWithoutUserInput
    PostLikes?: PostLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostCommentsLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostCommentsLikesInput, UserUncheckedCreateWithoutPostCommentsLikesInput>
  }

  export type PostCommentsCreateWithoutPostCommentsLikesInput = {
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostCommentsInput
    post: PostsCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentsUncheckedCreateWithoutPostCommentsLikesInput = {
    id?: number
    userId: string
    postId: number
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsCreateOrConnectWithoutPostCommentsLikesInput = {
    where: PostCommentsWhereUniqueInput
    create: XOR<PostCommentsCreateWithoutPostCommentsLikesInput, PostCommentsUncheckedCreateWithoutPostCommentsLikesInput>
  }

  export type UserUpsertWithoutPostCommentsLikesInput = {
    update: XOR<UserUpdateWithoutPostCommentsLikesInput, UserUncheckedUpdateWithoutPostCommentsLikesInput>
    create: XOR<UserCreateWithoutPostCommentsLikesInput, UserUncheckedCreateWithoutPostCommentsLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostCommentsLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostCommentsLikesInput, UserUncheckedUpdateWithoutPostCommentsLikesInput>
  }

  export type UserUpdateWithoutPostCommentsLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostCommentsLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
    PostComments?: PostCommentsUncheckedUpdateManyWithoutUserNestedInput
    PostLikes?: PostLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCommentsUpsertWithoutPostCommentsLikesInput = {
    update: XOR<PostCommentsUpdateWithoutPostCommentsLikesInput, PostCommentsUncheckedUpdateWithoutPostCommentsLikesInput>
    create: XOR<PostCommentsCreateWithoutPostCommentsLikesInput, PostCommentsUncheckedCreateWithoutPostCommentsLikesInput>
    where?: PostCommentsWhereInput
  }

  export type PostCommentsUpdateToOneWithWhereWithoutPostCommentsLikesInput = {
    where?: PostCommentsWhereInput
    data: XOR<PostCommentsUpdateWithoutPostCommentsLikesInput, PostCommentsUncheckedUpdateWithoutPostCommentsLikesInput>
  }

  export type PostCommentsUpdateWithoutPostCommentsLikesInput = {
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
    post?: PostsUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateWithoutPostCommentsLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatorCreateManyUserInput = {
    credentialID: string
    providerAccountId: string
    credentialPublicKey: string
    counter: number
    credentialDeviceType: string
    credentialBackedUp: boolean
    transports?: string | null
  }

  export type PostCommentsCreateManyUserInput = {
    id?: number
    postId: number
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsLikesCreateManyUserInput = {
    postCommentId: number
    createdAt?: Date | string
  }

  export type PostLikesCreateManyUserInput = {
    postMetricsId: number
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatorUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthenticatorUncheckedUpdateManyWithoutUserInput = {
    credentialID?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    credentialPublicKey?: StringFieldUpdateOperationsInput | string
    counter?: IntFieldUpdateOperationsInput | number
    credentialDeviceType?: StringFieldUpdateOperationsInput | string
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean
    transports?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCommentsUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutPostCommentsNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsLikesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postComments?: PostCommentsUpdateOneRequiredWithoutPostCommentsLikesNestedInput
  }

  export type PostCommentsLikesUncheckedUpdateWithoutUserInput = {
    postCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsLikesUncheckedUpdateManyWithoutUserInput = {
    postCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostMetricsUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikesUncheckedUpdateWithoutUserInput = {
    postMetricsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyWithoutUserInput = {
    postMetricsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsCreateManyPostInput = {
    id?: number
    userId: string
    comment: string
    numberOfLikes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCommentsUpdateWithoutPostInput = {
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
    PostCommentsLikes?: PostCommentsLikesUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostCommentsLikes?: PostCommentsLikesUncheckedUpdateManyWithoutPostCommentsNestedInput
  }

  export type PostCommentsUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    numberOfLikes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesCreateManyPostInput = {
    userId: string
    createdAt?: Date | string
  }

  export type PostLikesUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikesUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikesUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsLikesCreateManyPostCommentsInput = {
    userId: string
    createdAt?: Date | string
  }

  export type PostCommentsLikesUpdateWithoutPostCommentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostCommentsLikesNestedInput
  }

  export type PostCommentsLikesUncheckedUpdateWithoutPostCommentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentsLikesUncheckedUpdateManyWithoutPostCommentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}