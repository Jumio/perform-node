import {CustomError} from './custom-error';

export enum ErrorType {
  validationPayload = 'Request payload validation error',
  validationMetadata = 'Request metadata validation error',
  request = 'Server error'
}

export class VerificationError extends CustomError {
  constructor(readonly type: ErrorType, readonly message: string) {
    super();
  }
}
