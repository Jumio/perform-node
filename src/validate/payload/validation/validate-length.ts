import {PayloadError} from '../../error-payload';
import {FieldRules} from '../field-rules';

export function validateLength(rules: FieldRules, val: string): void {
  if (!hasValidLength(rules, val)) {
    throw new PayloadError(
      rules,
      val,
      `Parameter "${rules.fieldName}" has value "${val}" with length "${val?.length}" which is greater than the maximum allowed "${rules.maxLength}".`
    );
  }
}

export function hasValidLength(rule: FieldRules, val: string): boolean {
  return !rule.maxLength || val.length <= rule.maxLength;
}
