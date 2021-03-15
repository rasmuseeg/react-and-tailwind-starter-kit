import React from "react";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../redux/reducers/auth/reducer";
import LoginForm from "../Forms/LoginForm";
import Modal from "../UI/Overlays/Modals/Modal";

type LoginSplashProps = {
  open?: boolean;
}

const LoginSplash: React.FC<LoginSplashProps> = ({ open, children }) =>
{
  const renderOverlay = () =>
  {
    if (open)
    {
      return (
        <Modal>
          <LoginForm />
        </Modal>
      );
    }
  };

  return (
    <>
      {children}
      {renderOverlay()}
    </>
  );
}

type ProtectedProps = {
}

const Protected: React.FC<ProtectedProps> = (props) =>
{
  // Initialy return login page

  // On timeout, show login splash
  const isTimeout = true;
  const isAuth = isAuthenticated();
  return (
    <>
      {<LoginSplash open={!isAuth}> {props.children}</LoginSplash>}
    </>
  );
};

export default Protected;