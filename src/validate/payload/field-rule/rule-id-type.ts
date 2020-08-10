import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeIdType} from '../validation/types/validate-type-id-type';

export const ruleIdType: FieldRules = {
  fieldName: FieldName.idType,
  isRequired: true,
  maxLength: 255,
  typeValidation: validateTypeIdType
};
