import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';

export const rulePersonalNumber: FieldRules = {
  fieldName: FieldName.personalNumber,
  isRequired: false,
  maxLength: 14
};
