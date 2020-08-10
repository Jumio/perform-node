import {IdType} from '..';
import {FieldName} from '../enum/field-name';

export interface PerformPayload {
  [FieldName.merchantIdScanReference]: string;
  [FieldName.frontsideImage]: string;
  [FieldName.faceImage]?: string;
  [FieldName.country]: string;
  [FieldName.idType]: IdType;
  [FieldName.frontsideImageMimeType]?: string;
  [FieldName.faceImageMimeType]?: string;
  [FieldName.backsideImage]?: string;
  [FieldName.backsideImageMimeType]?: string;
  [FieldName.enabledFields]?: string;
  [FieldName.merchantReportingCriteria]?: string;
  [FieldName.customerId]?: string;
  [FieldName.callbackUrl]?: string;
  [FieldName.firstName]?: string;
  [FieldName.lastName]?: string;
  [FieldName.usState]?: string;
  [FieldName.expiry]?: string;
  [FieldName.number]?: string;
  [FieldName.dob]?: string;
  [FieldName.callbackGranularity]?: string;
  [FieldName.personalNumber]?: string;
}
