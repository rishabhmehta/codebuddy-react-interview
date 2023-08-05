import { Suspense, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSave } from 'react-icons/ai';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Fallback from '../Fallback';
import formSteps from '../components/Form';
import validate from '../helpers/validators';
import SpaceBetween from '../components/Layout/SpaceBetween';

const Home = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [stepData, setStepData] = useState({});
  const [isFieldValid, setIsFieldValid] = useState({
    emailId: false,
    password: false,
    firstName: false,
    lastName: false,
    address: false,
    countryCode: false,
    phoneNumber: false,
  });
  const [touched, setTouched] = useState({
    emailId: false,
    password: false,
    firstName: false,
    lastName: false,
    address: false,
    countryCode: false,
    phoneNumber: false,
    tnc: false,
  });

  const navigate = useNavigate();

  const onSubmit = e => {
    e?.preventDefault();
    const allFieldsValid = Object.values(isFieldValid).every(value => value === true);

    if (stepIndex === formSteps.length - 1 && allFieldsValid) {
      const baseUrl = process.env.REACT_APP_API_URL;

      const options = {
        method: 'POST',
        body: JSON.stringify(stepData),
      };

      fetch(`${baseUrl}/submit`, options)
        .then(res => res.json())
        .then(() => {})
        .catch(() => {});

      navigate('/posts');
    } else {
      const currentStepFields = formSteps[stepIndex].fields;
      const newTouched = { ...touched };
      currentStepFields.forEach(field => {
        newTouched[field] = true;
      });
      setTouched(newTouched);
    }
  };

  const nextStep = () => {
    const currentStepFields = formSteps[stepIndex].fields;

    const allCurrentFieldsValid = currentStepFields.every(field => isFieldValid[field]);

    if (allCurrentFieldsValid && stepIndex < formSteps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      const newTouched = { ...touched };
      currentStepFields.forEach(field => {
        newTouched[field] = true;
      });
      setTouched(newTouched);
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const changeHandler = (e, label) => {
    if (label === 'tnc') {
      setStepData(prevState => ({
        ...prevState,
        [label]: e.target.checked,
      }));
      setIsFieldValid(prevState => ({
        ...prevState,
        [label]: validate[label](e.target.checked),
      }));
    } else {
      setStepData(prevState => ({
        ...prevState,
        [label]: e.target.value,
      }));
      setIsFieldValid(prevState => ({
        ...prevState,
        [label]: validate[label](e.target.value),
      }));
    }
  };

  const blurHandler = field => {
    setTouched({ ...touched, [field]: true });
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
        <Form noValidate onSubmit={onSubmit}>
          <Tabs
            id="controlled-tab"
            activeKey={stepIndex}
            onSelect={k => setStepIndex(Number(k))}
            className="mb-3"
          >
            {formSteps.map((step, index) => (
              <Tab
                eventKey={index}
                title={step.stepName}
                key={step.id}
                disabled={step.disabled(stepData)}
              >
                <Suspense fallback={<Fallback />}>
                  {index === stepIndex && (
                    <step.component
                      formData={stepData}
                      blurHandler={blurHandler}
                      changeHandler={changeHandler}
                      isFieldValid={isFieldValid}
                      touched={touched}
                    />
                  )}
                </Suspense>
              </Tab>
            ))}
          </Tabs>

          <SpaceBetween>
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
                disabled={stepIndex === formSteps.length - 1}
                className="d-flex align-items-center gap-2"
                onClick={nextStep}
              >
                <AiOutlineArrowRight />
                <span>Save and Next</span>
              </Button>
            </div>
          </SpaceBetween>
        </Form>
      </Container>
    </main>
  );
};

export default Home;
