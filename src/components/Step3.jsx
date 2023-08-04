import Form from 'react-bootstrap/Form';
import createEventHandler from '../helpers/utility';
import ControlledInput from '../helpers/ControlledInput';

const Step3 = ({ formData, changeHandler }) => (
  <>
    <Form.Label>Country Code</Form.Label>
    <Form.Select
      className="mb-3"
      aria-label="Default select example"
      value={ControlledInput(formData, 'countryCode')}
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
        value={ControlledInput(formData, 'phoneNumber')}
        onChange={createEventHandler(changeHandler, 'phoneNumber')}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
  </>
);
export default Step3;
