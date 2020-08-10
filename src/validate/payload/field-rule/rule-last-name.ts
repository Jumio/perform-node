import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';

export const ruleLastName: FieldRules = {
  fieldName: FieldName.lastName,
  isRequired: false,
  maxLength: 100
};
