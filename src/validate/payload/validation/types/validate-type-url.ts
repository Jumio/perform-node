import {PayloadError} from '../../../error-payload';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeUrl: TypeValidation = (rules: FieldRules, val: string): void => {
  if (!isValidUrl(val)) {
    throw new PayloadError(rules, val);
  }
};

function isValidUrl(val: string): boolean {
  // TODO add valication logic.
  return true;
}
