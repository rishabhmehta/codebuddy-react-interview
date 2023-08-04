import Form from 'react-bootstrap/Form';
import createEventHandler from '../../helpers/createEventHandler';
import controlledInput from '../../helpers/controlledInput';

const Personal = ({ formData, changeHandler, isFieldValid, touched, blurHandler }) => (
  <>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="First Name"
        value={controlledInput(formData, 'firstName')}
        onChange={createEventHandler(changeHandler, 'firstName')}
        onBlur={() => blurHandler('firstName')}
        isValid={touched?.firstName && isFieldValid?.firstName}
        isInvalid={touched?.firstName && !isFieldValid?.firstName}
        required
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Please provide a valid first name.
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Last Name"
        value={controlledInput(formData, 'lastName')}
        onChange={createEventHandler(changeHandler, 'lastName')}
        onBlur={() => blurHandler('lastName')}
        isValid={touched?.lastName && isFieldValid?.lastName}
        isInvalid={touched?.lastName && !isFieldValid?.lastName}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">Please provide a valid last name</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Address"
        value={controlledInput(formData, 'address')}
        onChange={createEventHandler(changeHandler, 'address')}
        onBlur={() => blurHandler('address')}
        isValid={touched?.address && isFieldValid?.address}
        isInvalid={touched?.address && !isFieldValid?.address}
        required
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">Please provide a address.</Form.Control.Feedback>
    </Form.Group>
  </>
);

export default Personal;
