import {FieldName} from '../../enum/field-name';
import {TypeValidation} from './type-validation';

import {ruleBacksideImage} from './field-rule/rule-backside-image';
import {ruleBacksideImageMimeType} from './field-rule/rule-backside-image-mime-type';
import {ruleCallbackGranularity} from './field-rule/rule-callback-granularity';
import {ruleCallbackUrl} from './field-rule/rule-callback-url';
import {ruleCountry} from './field-rule/rule-country';
import {ruleCustomerId} from './field-rule/rule-customer-id';
import {ruleDob} from './field-rule/rule-dob';
import {ruleEnabledFields} from './field-rule/rule-enabled-fields';
import {ruleExpiry} from './field-rule/rule-expiry';
import {ruleFaceImage} from './field-rule/rule-face-image';
import {ruleFaceImageMimeType} from './field-rule/rule-face-image-mime-type';
import {ruleFirstname} from './field-rule/rule-first-name';
import {ruleFrontsideImage} from './field-rule/rule-frontside-image';
import {ruleFrontsideImageMimeType} from './field-rule/rule-frontside-image-mime-type';
import {ruleIdType} from './field-rule/rule-id-type';
import {ruleLastName} from './field-rule/rule-last-name';
import {ruleMerchantIdScanReference} from './field-rule/rule-merchant-id-scan-reference';
import {ruleMerchantReportingCritera} from './field-rule/rule-merchant-reporting-criteria';
import {ruleNumber} from './field-rule/rule-number';
import {rulePersonalNumber} from './field-rule/rule-personal-number';
import {ruleUsState} from './field-rule/rule-us-state';

export interface FieldRules {
  fieldName: FieldName;
  isRequired: boolean;
  description?: string;
  maxLength?: number;
  typeValidation?: TypeValidation;
}

export const fieldRules: FieldRules[] = [
  ruleMerchantIdScanReference,
  ruleFrontsideImage,
  ruleFaceImage,
  ruleCountry,
  ruleIdType,
  ruleFrontsideImageMimeType,
  ruleFaceImageMimeType,
  ruleBacksideImage,
  ruleBacksideImageMimeType,
  ruleEnabledFields,
  ruleMerchantReportingCritera,
  ruleCustomerId,
  ruleCallbackUrl,
  ruleFirstname,
  ruleLastName,
  ruleUsState,
  ruleExpiry,
  ruleNumber,
  ruleDob,
  ruleCallbackGranularity,
  rulePersonalNumber
];
