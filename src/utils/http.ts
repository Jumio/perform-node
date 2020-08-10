import {IncomingMessage} from 'http';
import https from 'https';

import {PerformPayload} from '..';
import {HttpStatus} from '../enum/http-status';

export type HttpHeaders = Record<string, number | string | string[]>;

export function createRequest<T extends object = object>(options: https.RequestOptions, payload: PerformPayload): Promise<T> {
  return new Promise((resolve, reject) => {
    const request = https.request(options, (response: IncomingMessage) => {
      let responseBody = '';
      response.on('data', chunk => (responseBody += chunk));
      response.on('end', () => {
        if (response.statusCode === HttpStatus.success) {
          resolve(JSON.parse(responseBody));
        }
        reject(responseBody);
      });
      response.on('error', error => reject(error));
    });
    request.end(JSON.stringify(payload));
  });
}
