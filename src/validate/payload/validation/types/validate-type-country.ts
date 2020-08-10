import {default as countries} from '../../../../data/countries.json';
import {CountryCode} from '../../../../enum/country-code';
import {PayloadError} from '../../../error-payload';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeCountry: TypeValidation = (rules: FieldRules, val: string): void => {
  if (!isValidCountry(val)) {
    throw new PayloadError(rules, val);
  }
};

function isValidCountry(val: string): boolean {
  return countries.map(c => c[CountryCode.alpha3]).includes(val);
}
