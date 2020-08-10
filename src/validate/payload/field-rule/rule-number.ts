import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';

export const ruleNumber: FieldRules = {
  fieldName: FieldName.number,
  isRequired: false,
  maxLength: 100
};
