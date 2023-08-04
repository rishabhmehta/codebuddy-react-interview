import { Suspense, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSave } from 'react-icons/ai';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Fallback from '../Fallback';
import formSteps from '../components/Form';
// import { validateEmail } from '../helpers/validators';

const Home = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [stepData, setStepData] = useState({});
  const [touched, setTouched] = useState({
    emailId: false,
    password: false,
    firstName: false,
    lastName: false,
    countryCode: false,
    phoneNumber: false,
  });
  // const navigate = useNavigate();

  const onSubmit = e => {
    e?.preventDefault();

    // const baseUrl = process.env.REACT_APP_API_URL;

    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(stepData),
    // };

    // fetch(`${baseUrl}/submit`, options)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(() => {});

    // navigate('/posts');
  };

  const nextStep = () => {
    if (stepIndex < formSteps.length - 1) {
      onSubmit(null);
      setStepIndex(stepIndex + 1);
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const changeHandler = (e, label) => {
    setStepData(prevState => ({
      ...prevState,
      [label]: e.target.value,
    }));
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
                    />
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
                disabled={stepIndex === formSteps.length - 1}
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
