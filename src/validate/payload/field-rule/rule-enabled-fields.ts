import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeEnabledFields} from '../validation/types/validate-type-enabled-fields';

export const ruleEnabledFields: FieldRules = {
  fieldName: FieldName.enabledFields,
  isRequired: false,
  maxLength: 100,
  typeValidation: validateTypeEnabledFields
};
