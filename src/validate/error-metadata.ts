import {ErrorType, VerificationError} from '../classes/verification-error.class';

export class MetadataError extends VerificationError {
  constructor(message: string) {
    super(ErrorType.validationMetadata, message);
  }
}
