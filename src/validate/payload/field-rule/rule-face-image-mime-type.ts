import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeMimeType} from '../validation/types/validate-type-mime-type';

export const ruleFaceImageMimeType: FieldRules = {
  fieldName: FieldName.faceImageMimeType,
  isRequired: false,
  typeValidation: validateTypeMimeType
};
