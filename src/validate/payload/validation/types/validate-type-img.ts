// tslint:disable-next-line:no-var-requires
const sizeOf = require('image-size');

import {PayloadError} from '../../../error-payload';
import {imgReqs} from '../../constants';
import {FieldRules} from '../../field-rules';
import {TypeValidation} from '../../type-validation';

export const validateTypeImg: TypeValidation = (rules: FieldRules, val: string): void => {
  const img = Buffer.from(val.substring(val.indexOf(',') + 1), 'base64');
  if (!hasValidSize(img)) {
    throw new PayloadError(rules, val, `Image "${rules.fieldName}" exceeds the maximum file size of ${imgReqs.maxFileSizeMB} MB.`);
  }
  if (!hasValidDims(img)) {
    throw new PayloadError(
      rules,
      val,
      `Image "${rules.fieldName}" exceeds the maximum width ${imgReqs.maxWidthPx} or height of ${imgReqs.maxHeightPx} pixels.`
    );
  }
};

function hasValidSize(img: Buffer): boolean {
  const sizeActual = (img.length / 4) * 3;
  const sizeMax = imgReqs.maxFileSizeMB * 1024 * 1024;
  return sizeActual <= sizeMax;
}

function hasValidDims(img: Buffer): boolean {
  try {
    const dim = sizeOf(img);
    if (dim.width > imgReqs.maxWidthPx || dim.height > imgReqs.maxHeightPx) {
      return false;
    }
  } catch (error) {
    return false;
  }
  return true;
}
