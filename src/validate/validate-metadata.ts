import {PerformMetadata} from '..';
import {MetadataError} from './error-metadata';

function isValid(val: string): boolean {
  return !!val && val !== '';
}

export function validateMetadata(metadata: PerformMetadata): void {
  if (!isValid(metadata.apiToken)) {
    throw new MetadataError(`"API token" is required.`);
  }
  if (!isValid(metadata.apiSecret)) {
    throw new MetadataError(`"API secret" is required.`);
  }
  if (!isValid(metadata.userAgent)) {
    throw new MetadataError(`"User Agent" is required.`);
  }
}
