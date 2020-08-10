import {PerformPayload} from '..';
import {fieldRules} from './payload/field-rules';
import {validateLength} from './payload/validation/validate-length';
import {validateRequired} from './payload/validation/validate-required';

export function validatePayload(payload: PerformPayload): void {
  fieldRules.forEach(rule => {
    const val: string | undefined = payload[rule.fieldName];
    validateRequired(rule, val);
    if (val) {
      validateLength(rule, val);
      rule.typeValidation?.call(null, rule, val);
    }
  });
}
