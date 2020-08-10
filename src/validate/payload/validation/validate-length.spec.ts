import {FieldRules} from '../field-rules';
import {hasValidLength} from './validate-length';

test('returns true when given text has length equal to the max allowed length', () => {
  expect(hasValidLength({maxLength: 3} as FieldRules, 'abc')).toBe(true);
});
