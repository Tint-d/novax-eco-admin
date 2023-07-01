import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../services/api/authApi";
import { removeUser } from "../services/feature/authSlice";
import { paths } from "../routes/paths";

const withUser = (WrapperCompo) => {
  const HOC = (props) => {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async () => {
      await logoutUser(token);
      dispatch(removeUser());
      navigate(paths.login);
    };

    return (
      <WrapperCompo
        {...props}
        user={user}
        token={token}
        logoutHandler={logoutHandler}
      />
    );
  };
  return HOC;
};

export default withUser;
