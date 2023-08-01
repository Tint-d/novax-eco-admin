import React from "react";
import checkPageAccess from "./checkPageAccess";
import { Navigate, Route } from "react-router-dom";
import Guard from "./Guard";
import { connect } from "react-redux";

const _ProtectedRoute = (props) => {
  const { component, path, permittedPages, stateOfUser, ...rest } = props;

  const checkAccess = checkPageAccess(path, permittedPages);

  return (
    <Route
      {...rest}
      render={(props) =>
        checkAccess.isUserAuthorized == false ||
        (typeof checkAccess.isUserAuthorized == "undefined" &&
          stateOfUser.loginSuccess) ? (
          <Navigate to="/login" />
        ) : (
          <Guard {...props} actions={checkAccess.allowedActionsName} />
        )
      }
    />
  );
};

const ProtectedRoute = connect((state) => ({
  permittedPages: state.getPermittedPagesReducer.permittedPages,
  stateOfUser: state.user,
}))(_ProtectedRoute);

export default ProtectedRoute;
