
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
 * Model NewsLetterSubscriptions
 * 
 */
export type NewsLetterSubscriptions = $Result.DefaultSelection<Prisma.$NewsLetterSubscriptionsPayload>
/**
 * Model PostMetrics
 * 
 */
export type PostMetrics = $Result.DefaultSelection<Prisma.$PostMetricsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NewsLetterSubscriptions
 * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findMany()
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
   * // Fetch zero or more NewsLetterSubscriptions
   * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findMany()
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
   * `prisma.newsLetterSubscriptions`: Exposes CRUD operations for the **NewsLetterSubscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsLetterSubscriptions
    * const newsLetterSubscriptions = await prisma.newsLetterSubscriptions.findMany()
    * ```
    */
  get newsLetterSubscriptions(): Prisma.NewsLetterSubscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postMetrics`: Exposes CRUD operations for the **PostMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostMetrics
    * const postMetrics = await prisma.postMetrics.findMany()
    * ```
    */
  get postMetrics(): Prisma.PostMetricsDelegate<ExtArgs, ClientOptions>;
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
    NewsLetterSubscriptions: 'NewsLetterSubscriptions',
    PostMetrics: 'PostMetrics'
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
      modelProps: "newsLetterSubscriptions" | "postMetrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
    newsLetterSubscriptions?: NewsLetterSubscriptionsOmit
    postMetrics?: PostMetricsOmit
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
   * Models
   */

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
    numberOfViews: number | null
  }

  export type PostMetricsSumAggregateOutputType = {
    id: number | null
    numberOfViews: number | null
  }

  export type PostMetricsMinAggregateOutputType = {
    id: number | null
    numberOfViews: number | null
  }

  export type PostMetricsMaxAggregateOutputType = {
    id: number | null
    numberOfViews: number | null
  }

  export type PostMetricsCountAggregateOutputType = {
    id: number
    numberOfViews: number
    _all: number
  }


  export type PostMetricsAvgAggregateInputType = {
    id?: true
    numberOfViews?: true
  }

  export type PostMetricsSumAggregateInputType = {
    id?: true
    numberOfViews?: true
  }

  export type PostMetricsMinAggregateInputType = {
    id?: true
    numberOfViews?: true
  }

  export type PostMetricsMaxAggregateInputType = {
    id?: true
    numberOfViews?: true
  }

  export type PostMetricsCountAggregateInputType = {
    id?: true
    numberOfViews?: true
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
    numberOfViews: number
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
    numberOfViews?: boolean
  }, ExtArgs["result"]["postMetrics"]>

  export type PostMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberOfViews?: boolean
  }, ExtArgs["result"]["postMetrics"]>

  export type PostMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberOfViews?: boolean
  }, ExtArgs["result"]["postMetrics"]>

  export type PostMetricsSelectScalar = {
    id?: boolean
    numberOfViews?: boolean
  }

  export type PostMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numberOfViews", ExtArgs["result"]["postMetrics"]>

  export type $PostMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostMetrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numberOfViews: number
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
    readonly numberOfViews: FieldRef<"PostMetrics", 'Int'>
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


  export const PostMetricsScalarFieldEnum: {
    id: 'id',
    numberOfViews: 'numberOfViews'
  };

  export type PostMetricsScalarFieldEnum = (typeof PostMetricsScalarFieldEnum)[keyof typeof PostMetricsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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

  export type PostMetricsWhereInput = {
    AND?: PostMetricsWhereInput | PostMetricsWhereInput[]
    OR?: PostMetricsWhereInput[]
    NOT?: PostMetricsWhereInput | PostMetricsWhereInput[]
    id?: IntFilter<"PostMetrics"> | number
    numberOfViews?: IntFilter<"PostMetrics"> | number
  }

  export type PostMetricsOrderByWithRelationInput = {
    id?: SortOrder
    numberOfViews?: SortOrder
  }

  export type PostMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostMetricsWhereInput | PostMetricsWhereInput[]
    OR?: PostMetricsWhereInput[]
    NOT?: PostMetricsWhereInput | PostMetricsWhereInput[]
    numberOfViews?: IntFilter<"PostMetrics"> | number
  }, "id">

  export type PostMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    numberOfViews?: SortOrder
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
    numberOfViews?: IntWithAggregatesFilter<"PostMetrics"> | number
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

  export type PostMetricsCreateInput = {
    numberOfViews: number
  }

  export type PostMetricsUncheckedCreateInput = {
    id?: number
    numberOfViews: number
  }

  export type PostMetricsUpdateInput = {
    numberOfViews?: IntFieldUpdateOperationsInput | number
  }

  export type PostMetricsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberOfViews?: IntFieldUpdateOperationsInput | number
  }

  export type PostMetricsCreateManyInput = {
    id?: number
    numberOfViews: number
  }

  export type PostMetricsUpdateManyMutationInput = {
    numberOfViews?: IntFieldUpdateOperationsInput | number
  }

  export type PostMetricsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberOfViews?: IntFieldUpdateOperationsInput | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type PostMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    numberOfViews?: SortOrder
  }

  export type PostMetricsAvgOrderByAggregateInput = {
    id?: SortOrder
    numberOfViews?: SortOrder
  }

  export type PostMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    numberOfViews?: SortOrder
  }

  export type PostMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    numberOfViews?: SortOrder
  }

  export type PostMetricsSumOrderByAggregateInput = {
    id?: SortOrder
    numberOfViews?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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