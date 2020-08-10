import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeMimeType} from '../validation/types/validate-type-mime-type';

export const ruleFrontsideImageMimeType: FieldRules = {
  fieldName: FieldName.frontsideImageMimeType,
  isRequired: false,
  typeValidation: validateTypeMimeType
};
