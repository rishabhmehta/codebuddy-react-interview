import Form from 'react-bootstrap/Form';
import createEventHandler from '../helpers/utility';
import ControlledInput from '../helpers/ControlledInput';

const Step2 = ({ formData, changeHandler }) => (
  <>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="First Name"
        value={ControlledInput(formData, 'firstName')}
        onChange={createEventHandler(changeHandler, 'firstName')}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Last Name"
        value={ControlledInput(formData, 'lastName')}
        onChange={createEventHandler(changeHandler, 'lastName')}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Address"
        value={ControlledInput(formData, 'address')}
        onChange={createEventHandler(changeHandler, 'address')}
      />
    </Form.Group>
  </>
);

export default Step2;
