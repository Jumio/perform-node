import {PayloadError} from '../../../error-payload';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeDate: TypeValidation = (rules: FieldRules, val: string): void => {
  if (!isValidDate(val)) {
    throw new PayloadError(rules, val);
  }
};

function isValidDate(val: string): boolean {
  // TODO add valication logic.
  return true;
}
