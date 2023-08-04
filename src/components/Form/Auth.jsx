import Form from 'react-bootstrap/Form';
import createEventHandler from '../../helpers/createEventHandler';
import controlledInput from '../../helpers/controlledInput';

const Auth = ({ formData, changeHandler }) => (
  <>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        value={controlledInput(formData, 'emailId')}
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
        value={controlledInput(formData, 'password')}
        onChange={createEventHandler(changeHandler, 'password')}
      />
    </Form.Group>
  </>
);

export default Auth;
