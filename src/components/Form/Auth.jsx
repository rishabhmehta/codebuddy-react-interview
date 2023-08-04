import Form from 'react-bootstrap/Form';
import createEventHandler from '../../helpers/createEventHandler';
import controlledInput from '../../helpers/controlledInput';
// import { validateEmail, validatePassword } from '../../helpers/validators';

const Auth = ({ formData, changeHandler, isFieldValid, touched, blurHandler }) => (
  // const [touched, setTouched] = useState({ emailId: false, password: false });

  // const blurHandler = field => {
  //   setTouched({ ...touched, [field]: true });
  // };

  // const isEmailValid = validateEmail(formData.emailId);
  // const isPasswordValid = validatePassword(formData.password);

  <>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        value={controlledInput(formData, 'emailId')}
        onChange={createEventHandler(changeHandler, 'emailId')}
        onBlur={() => blurHandler('emailId')}
        isValid={touched?.emailId && isFieldValid?.emailId}
        isInvalid={touched?.emailId && !isFieldValid?.emailId}
        required
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">Please provide a valid email id.</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter password"
        value={controlledInput(formData, 'password')}
        onChange={createEventHandler(changeHandler, 'password')}
        onBlur={() => blurHandler('password')}
        isValid={touched?.password && isFieldValid.password}
        isInvalid={touched?.password && !isFieldValid.password}
        required
      />
      <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Text className="text-muted">
        <div className="d-flex flex-column">
          <p className="m-0">Must contain at least 2 uppercase letters</p>
          <p className="m-0">Must contain at least 2 lowercase letters</p>
          <p className="m-0">Must contain at least 2 digits</p>
          <p className="m-0">Must contain at least 2 special characters</p>
        </div>
      </Form.Text>
    </Form.Group>
  </>
);
export default Auth;
