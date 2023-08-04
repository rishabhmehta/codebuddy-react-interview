import { lazy } from 'react';
import hasOwnProperties from '../../helpers/hasOwnProperties';

const formController = [
  {
    id: 1,
    component: lazy(
      () => new Promise(resolve => setTimeout(() => resolve(import('./Auth')), 2000)),
    ),
    stepName: 'Auth',
    fields: [],
  },
  {
    id: 2,
    component: lazy(
      () => new Promise(resolve => setTimeout(() => resolve(import('./Personal')), 2000)),
    ),
    stepName: 'Personal',
    fields: ['firstName', 'lastName', 'address'],
  },
  {
    id: 3,
    component: lazy(() => import('./Contact')),
    stepName: 'Contact',
    fields: ['countryCode', 'phoneNumber'],
  },
];

const formSteps = formController.map((step, index, array) => ({
  ...step,
  disabled: stepData => (index === 0 ? false : !hasOwnProperties(stepData, ...array[index].fields)),
}));

export default formSteps;
