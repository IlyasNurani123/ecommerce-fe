import { React, useState } from 'react';
import './style.css';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginAsyn } from '../../../../redux/action/loginAction';

const Index = () => {
  const [admin, setAdmin] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
    dispatch(loginAsyn(admin));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(admin);
  };

  return (
    <div className='flex-container'>
      <div>
        <div className='text-center pb-4'>
          <h3>ADMIN</h3>
        </div>
        <Form className='form-container' onSubmit={onHandleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control
              type='email'
              name='email'
              onChange={onChangeHandler}
              placeholder='Enter your Email'
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Control
              type='password'
              name='password'
              onChange={onChangeHandler}
              placeholder='Password'
            />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <div className='text-center'>
            <Button variant='primary' type='submit' className='custom-btn'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Index;
