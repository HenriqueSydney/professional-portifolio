export interface CachePrefix {
  name: string;
  prefix: string;
  active: boolean;
  stats: {
    keys: number;
    size: string;
    hits: number;
    misses: number;
    hitRate: string;
  };
}

export interface CacheInfoDTO {
  connected: boolean;
  overview: {
    totalKeys: number;
    notionKeys: number;
    tagKeys: number;
  };
  prefixes: CachePrefix[];
}
