import {CallbackGranularity} from '../../../../enum/callback-granularity';
import {PayloadError} from '../../../error-payload';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeCallbackGranularity: TypeValidation = (rules: FieldRules, val: string): void => {
  if (!isValidCallbackGranularity(val)) {
    throw new PayloadError(rules, val);
  }
};

function isValidCallbackGranularity(val: string): boolean {
  return [CallbackGranularity.onFinish, CallbackGranularity.onAllSteps].includes(val as CallbackGranularity);
}
