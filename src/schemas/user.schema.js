import * as Yup from 'yup';
import { maritalStatuses, mobilityStatuses, states } from '../constants';

export const initialUserValues = {
  name: {
    first: '',
    middle: '',
    last: '',
  },
  email: '',
};

export const createUserSchema = Yup.object().shape({
  name: Yup.object().shape({
    first: Yup.string().required(),
    middle: Yup.string().required(),
    last: Yup.string().required(),
  }),
  email: Yup.string().email('Invalid email.').required(),
  state: Yup.string().oneOf(states),
  needInsuranceFor: Yup.string().oneOf(['Themselves', 'MySelf']).required(),
  // isSawCommercial: Yup.boolean(),
  age: Yup.number().required(),
  hasValidDriverLicenseOrStateId: Yup.boolean().required(),
  hasActiveBankAccount: Yup.boolean().required(),
  maritalStatus: Yup.string().oneOf(Object.values(maritalStatuses)).required(),
  mobilityStatus: Yup.string()
    .oneOf(Object.values(mobilityStatuses))
    .required(),
  // beneficiaries: Yup.array().of(Yup.string()),
  phoneNumber: Yup.object().shape({
    primary: Yup.string().required(),
    secondary: Yup.string(),
  }),
  coverageInterests: Yup.string().required(),
  remainsWillBe: Yup.string().oneOf(['cremated', 'buried']).required(),
  desiredCoverageAmount: Yup.number().required(),
  usedNicotine: Yup.boolean().required(),
  height: Yup.object().shape({
    feet: Yup.number().required(),
    inches: Yup.number().required(),
  }),
  weight: Yup.object().shape({
    value: Yup.number().required(),
    unit: Yup.string().default('lb'),
  }),
});
