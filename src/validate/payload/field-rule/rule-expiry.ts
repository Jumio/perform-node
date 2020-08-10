import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeDate} from '../validation/types/validate-type-date';

export const ruleExpiry: FieldRules = {
  fieldName: FieldName.expiry,
  isRequired: false,
  typeValidation: validateTypeDate
};
