import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeImg} from '../validation/types/validate-type-img';

export const ruleBacksideImage: FieldRules = {
  fieldName: FieldName.backsideImage,
  isRequired: false,
  typeValidation: validateTypeImg
};
