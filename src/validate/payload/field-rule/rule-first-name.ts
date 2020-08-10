import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';

export const ruleFirstname: FieldRules = {
  fieldName: FieldName.firstName,
  isRequired: false,
  maxLength: 100
};
