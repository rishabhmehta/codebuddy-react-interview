import { lazy } from 'react';

const formSteps = [
  {
    id: 1,
    component: lazy(
      () => new Promise(resolve => setTimeout(() => resolve(import('./Auth')), 2000)),
    ),
    stepName: 'Auth',
    disabled: () => false,
  },
  {
    id: 2,
    component: lazy(
      () => new Promise(resolve => setTimeout(() => resolve(import('./Personal')), 2000)),
    ),
    stepName: 'Personal',
    disabled: stepData => !(stepData.firstName && stepData.lastName && stepData.address),
  },
  {
    id: 3,
    component: lazy(() => import('./Contact')),
    stepName: 'Contact',
    disabled: stepData => !(stepData.countryCode && stepData.phoneNumber),
  },
];

export default formSteps;
