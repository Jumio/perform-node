import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeImg} from '../validation/types/validate-type-img';

export const ruleFaceImage: FieldRules = {
  fieldName: FieldName.faceImage,
  isRequired: false,
  description: 'Base64 encoded image of face. Mandatory if Face match enabled',
  typeValidation: validateTypeImg
};
