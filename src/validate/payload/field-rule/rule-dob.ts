import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeDate} from '../validation/types/validate-type-date';

export const ruleDob: FieldRules = {
  fieldName: FieldName.dob,
  isRequired: false,
  typeValidation: validateTypeDate
};
