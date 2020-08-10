import {IdType} from '../../../..';
import {PayloadError} from '../../../error-payload';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeIdType: TypeValidation = (rules: FieldRules, val: string): void => {
  if (!isValidIdType(val)) {
    throw new PayloadError(rules, val);
  }
};

function isValidIdType(val: string): boolean {
  return [IdType.DRIVING_LICENSE, IdType.ID_CARD, IdType.PASSPORT, IdType.VISA].includes(val as IdType);
}
