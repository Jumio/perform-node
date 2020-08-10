import {ErrorType, VerificationError} from '../classes/verification-error.class';
import {FieldRules} from './payload/field-rules';

export class PayloadError extends VerificationError {
  constructor(rules: FieldRules, val: string | undefined, message?: string) {
    message = message || `Parameter "${rules.fieldName}" has invalid value "${val}".`;
    if (rules.description) {
      message += ` [${rules.description}]`;
    }
    super(ErrorType.validationPayload, message);
  }
}
