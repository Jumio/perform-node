import {PayloadError} from '../../../error-payload';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeUsState: TypeValidation = (rules: FieldRules, val: string): void => {
  if (!isValid(val)) {
    throw new PayloadError(rules, val);
  }
};

function isValid(val: string): boolean {
  // TODO add valication logic.
  return true;
}
