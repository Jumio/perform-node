import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeUrl} from '../validation/types/validate-type-url';

export const ruleCallbackUrl: FieldRules = {
  fieldName: FieldName.callbackUrl,
  isRequired: false,
  maxLength: 255,
  typeValidation: validateTypeUrl
};
