import Form from 'react-bootstrap/Form';
import createEventHandler from '../../helpers/createEventHandler';
import controlledInput from '../../helpers/controlledInput';

const Contact = ({ formData, changeHandler, isFieldValid, touched, blurHandler }) => (
  <>
    <Form.Label>Country Code</Form.Label>
    <Form.Group className="mb-3">
      <Form.Select
        value={controlledInput(formData, 'countryCode')}
        onChange={createEventHandler(changeHandler, 'countryCode')}
        onBlur={() => blurHandler('countryCode')}
        isValid={touched?.countryCode && isFieldValid?.countryCode}
        isInvalid={touched?.countryCode && !isFieldValid?.countryCode}
      >
        <option value="">Select Country Code</option>
        <option value="India (+91)">+91</option>
        <option value="America (+1)">+1</option>
      </Form.Select>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">Please select a country code.</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        type="tel"
        placeholder="Phone Number"
        value={controlledInput(formData, 'phoneNumber')}
        onChange={createEventHandler(changeHandler, 'phoneNumber')}
        onBlur={() => blurHandler('phoneNumber')}
        isValid={touched?.phoneNumber && isFieldValid?.phoneNumber}
        isInvalid={touched?.phoneNumber && !isFieldValid?.phoneNumber}
        required
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please provide a valid phone number.
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check
        onChange={createEventHandler(changeHandler, 'tnc')}
        value={controlledInput(formData, 'tnc')}
        type="checkbox"
        label="Terms and Conditions"
        onBlur={() => blurHandler('tnc')}
        isInvalid={touched?.tnc && !isFieldValid?.tnc}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please select terms and conditions before submitting the data
      </Form.Control.Feedback>
    </Form.Group>
  </>
);

export default Contact;
