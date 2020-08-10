import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeImg} from '../validation/types/validate-type-img';

export const ruleFrontsideImage: FieldRules = {
  fieldName: FieldName.frontsideImage,
  isRequired: true,
  description: 'Base64 encoded image of ID front side',
  typeValidation: validateTypeImg
};
