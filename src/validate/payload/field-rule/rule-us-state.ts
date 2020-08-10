import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeUsState} from '../validation/types/validate-type-us-state';

export const ruleUsState: FieldRules = {
  fieldName: FieldName.usState,
  isRequired: false,
  maxLength: 100,
  typeValidation: validateTypeUsState
};
