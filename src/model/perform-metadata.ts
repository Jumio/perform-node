import {Region} from '..';

export interface PerformMetadata {
  apiToken: string;
  apiSecret: string;
  region: Region;
  userAgent: string;
  hostname?: string;
}
