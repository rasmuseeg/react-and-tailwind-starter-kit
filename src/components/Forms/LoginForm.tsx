import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {useThunkDispatch} from '../../redux/hooks';
import { UPDATE_AUTH } from '../../redux/reducers/auth/types';
import DefaultButton from '../UI/Buttons/DefaultButton';
import StyledInput from '../UI/Forms/StyledInput';

type LoginFormProps = {
}

type LoginFormData = {
  name: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = (props) =>
{
  const { register, handleSubmit } = useForm<LoginFormData>();

  const dispatch = useThunkDispatch();

  const handleLogin = useCallback((data: LoginFormData) => {

    dispatch({
      type: UPDATE_AUTH,
      payload: {
        loggedIn: true,
        userName: data.name,
        session: "ANONYMOUS"
      }
    });

  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <StyledInput type="text" name="name" placeholder="E-mail address" ref={register} />
      <StyledInput type="password" name="password" placeholder="Password" ref={register} />
      <DefaultButton type="submit">Login</DefaultButton>
    </form>
  );
}

export default LoginForm;