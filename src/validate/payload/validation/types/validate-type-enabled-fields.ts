import {PayloadError} from '../../../error-payload';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeEnabledFields: TypeValidation = (rules: FieldRules, val: string): void => {
  if (!isValidEnabledFields(val)) {
    throw new PayloadError(rules, val);
  }
};

function isValidEnabledFields(val: string): boolean {
  // TODO add valication logic.
  return true;
}
