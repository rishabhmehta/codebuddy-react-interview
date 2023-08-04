import Form from 'react-bootstrap/Form';
import createEventHandler from '../helpers/utility';
import controlledInput from '../helpers/controlledInput';

const Step2 = ({ formData, changeHandler }) => (
  <>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="First Name"
        value={controlledInput(formData, 'firstName')}
        onChange={createEventHandler(changeHandler, 'firstName')}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Last Name"
        value={controlledInput(formData, 'lastName')}
        onChange={createEventHandler(changeHandler, 'lastName')}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Address"
        value={controlledInput(formData, 'address')}
        onChange={createEventHandler(changeHandler, 'address')}
      />
    </Form.Group>
  </>
);

export default Step2;
