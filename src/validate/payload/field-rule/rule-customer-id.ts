import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';

export const ruleCustomerId: FieldRules = {
  fieldName: FieldName.customerId,
  isRequired: false,
  maxLength: 100
};
