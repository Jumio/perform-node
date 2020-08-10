import {RequestOptions} from 'https';

import {PerformMetadata, PerformPayload, VerificationError, VerificationResult} from '..';
import {hosts, requestOpts} from '../utils/constants';
import {createRequest, HttpHeaders} from '../utils/http';
import {validateMetadata} from '../validate/validate-metadata';
import {validatePayload} from '../validate/validate-payload';
import {ErrorType} from './verification-error.class';

export class Netverify {
  private static getHeaders(payload: PerformPayload, metadata: PerformMetadata): HttpHeaders {
    const {apiToken, apiSecret} = metadata;
    const authorization = Buffer.from(`${apiToken}:${apiSecret}`).toString('base64');
    return {
      Accept: requestOpts.headers.accept,
      'Content-Type': requestOpts.headers.contentType,
      'Content-Length': Buffer.byteLength(JSON.stringify(payload)),
      Authorization: `${requestOpts.headers.auth} ${authorization}`,
      'User-Agent': metadata.userAgent
    };
  }

  private static getRequestOptions(payload: PerformPayload, metadata: PerformMetadata): RequestOptions {
    return {
      hostname: metadata.hostname || hosts.find(h => h.region === metadata.region)?.name,
      path: requestOpts.path,
      port: requestOpts.port,
      method: requestOpts.method,
      headers: Netverify.getHeaders(payload, metadata)
    };
  }

  private static checkPayload(payload: PerformPayload): PerformPayload {
    validatePayload(payload);
    return payload;
  }

  private static checkMetadata(metadata: PerformMetadata): PerformMetadata {
    validateMetadata(metadata);
    return metadata;
  }

  async perform(payload: PerformPayload, metadata: PerformMetadata): Promise<VerificationResult> {
    const checkedPayload = Netverify.checkPayload(payload);
    const checkedMetadata = Netverify.checkMetadata(metadata);
    const options = Netverify.getRequestOptions(checkedPayload, checkedMetadata);
    try {
      return await createRequest<VerificationResult>(options, payload);
    } catch (error) {
      throw new VerificationError(ErrorType.request, error);
    }
  }
}
