import { Suspense, lazy, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSave } from 'react-icons/ai';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Fallback from '../Fallback';

const steps = [
  {
    id: 1,
    component: lazy(
      () => new Promise(resolve => setTimeout(() => resolve(import('../components/Step1')), 2000)),
    ),
    stepName: 'Auth',
    disabled: () => false,
  },
  {
    id: 2,
    component: lazy(
      () => new Promise(resolve => setTimeout(() => resolve(import('../components/Step2')), 2000)),
    ),
    stepName: 'Personal',
    disabled: stepData => !(stepData.firstName && stepData.lastName && stepData.address),
  },
  {
    id: 3,
    component: lazy(() => import('../components/Step3')),
    stepName: 'Contact',
    disabled: stepData => !(stepData.countryCode && stepData.phoneNumber),
  }, // No delay
];

const Home = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [stepData, setStepData] = useState({});
  // const navigate = useNavigate();

  console.log(stepData);

  // const StepComponent = steps[stepIndex].component;

  const onSubmit = e => {
    e.preventDefault();

    // navigate('/posts');
  };

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const changeHandler = (e, label) => {
    console.log('Changing', label, 'to', e.target.value);
    setStepData(prevState => ({
      ...prevState,
      [label]: e.target.value,
    }));
  };

  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
      <Container>
        <Form onSubmit={onSubmit}>
          <Tabs
            id="controlled-tab-example"
            activeKey={stepIndex}
            onSelect={k => setStepIndex(Number(k))}
            className="mb-3"
          >
            {steps.map((step, index) => (
              <Tab
                eventKey={index}
                title={step.stepName}
                key={step.id}
                disabled={step.disabled(stepData)}
              >
                <Suspense fallback={<Fallback />}>
                  {index === stepIndex && (
                    <step.component formData={stepData} changeHandler={changeHandler} />
                  )}
                </Suspense>
              </Tab>
            ))}
          </Tabs>

          <div className="d-flex justify-content-between">
            <Button
              disabled={stepIndex === 0}
              className="d-flex align-items-center gap-2"
              onClick={prevStep}
            >
              <AiOutlineArrowLeft />
              <span>Back</span>
            </Button>
            <div className="d-flex gap-4">
              <Button type="submit" className="d-flex align-items-center gap-2">
                <AiOutlineSave />
                <span>Save</span>
              </Button>
              <Button
                disabled={stepIndex === steps.length - 1}
                className="d-flex align-items-center gap-2"
                onClick={nextStep}
              >
                <AiOutlineArrowRight />
                <span>Save and Next</span>
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </main>
  );
};

export default Home;
