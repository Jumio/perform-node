import {FieldRules} from './field-rules';

export type TypeValidation = (fieldRule: FieldRules, fieldVal: string) => void;
