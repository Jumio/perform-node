import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';
import {validateTypeCountry} from '../validation/types/validate-type-country';

export const ruleCountry: FieldRules = {
  fieldName: FieldName.country,
  isRequired: true,
  description: 'Possible countries: ISO 3166-1 alpha-3 country code, XKX (Kosovo)',
  maxLength: 3,
  typeValidation: validateTypeCountry
};
