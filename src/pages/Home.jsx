import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSave } from 'react-icons/ai';
import createEventHandler from '../helpers/utility';

const Home = () => {
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();

  const onSubmit = () => navigate('/posts');

  const changeHandler = (e, label) => {
    setFormData(prevState => ({
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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formData.emailId}
              onChange={createEventHandler(changeHandler, 'emailId')}
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={createEventHandler(changeHandler, 'password')}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={createEventHandler(changeHandler, 'firstName')}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={createEventHandler(changeHandler, 'lastName')}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={createEventHandler(changeHandler, 'address')}
            />
          </Form.Group>

          <Form.Label>Country Code</Form.Label>
          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            value={formData.countryCode}
            onChange={createEventHandler(changeHandler, 'countryCode')}
          >
            <option value="">Select Country Code</option>
            <option value="India (+91)">+91</option>
            <option value="America (+1)">+1</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={createEventHandler(changeHandler, 'phoneNumber')}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button className="d-flex align-items-center gap-2" onClick={onSubmit}>
              <AiOutlineArrowLeft />
              <span>Back</span>
            </Button>
            <div className="d-flex gap-4">
              <Button className="d-flex align-items-center gap-2" onClick={onSubmit}>
                <AiOutlineSave />
                <span>Save</span>
              </Button>
              <Button className="d-flex align-items-center gap-2" onClick={onSubmit}>
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
