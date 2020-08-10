import {FieldName} from '../../../enum/field-name';
import {FieldRules} from '../field-rules';

export const ruleMerchantIdScanReference: FieldRules = {
  fieldName: FieldName.merchantIdScanReference,
  isRequired: true,
  description:
    'Your reference for each scan must not contain sensitive data like PII (Personally Identifiable Information) or account login',
  maxLength: 100
};
