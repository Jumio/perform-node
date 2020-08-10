import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeCallbackGranularity} from '../validation/types/validate-type-callback-granularity';

export const ruleCallbackGranularity: FieldRules = {
  fieldName: FieldName.callbackGranularity,
  isRequired: false,
  maxLength: 255,
  typeValidation: validateTypeCallbackGranularity
};
