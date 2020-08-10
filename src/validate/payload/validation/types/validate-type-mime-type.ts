import {ImageType} from '../../../../enum/image-type';
import {PayloadError} from '../../../error-payload';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeMimeType: TypeValidation = (rules: FieldRules, val: string): void => {
  if (!isValidMimeType(val)) {
    throw new PayloadError(rules, val);
  }
};

function isValidMimeType(val: string): boolean {
  return [ImageType.JPG || val === ImageType.PNG].includes(val as ImageType);
}
