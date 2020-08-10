import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeMimeType} from '../validation/types/validate-type-mime-type';

export const ruleBacksideImageMimeType: FieldRules = {
  fieldName: FieldName.backsideImageMimeType,
  isRequired: false,
  typeValidation: validateTypeMimeType
};
