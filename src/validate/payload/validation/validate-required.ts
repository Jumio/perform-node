import {PayloadError} from '../../error-payload';
import {FieldRules} from '../field-rules';

export function validateRequired(rules: FieldRules, val: string | undefined): void {
  if (!isPopulatedWhenRequired(rules, val)) {
    throw new PayloadError(rules, val, `Required parameter "${rules.fieldName}" is missing.`);
  }
}

function isPopulatedWhenRequired(rule: FieldRules, val: string | undefined): boolean {
  return !rule.isRequired || (!!val && val !== '');
}
