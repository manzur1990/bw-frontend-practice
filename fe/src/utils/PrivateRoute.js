import React from "react";
import { Route, Redirect } from "react-router-dom";

// rest operator (looks a lot like spreat operator)
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = component
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props => {
        if (token) {
          //return the component
          return <Component {...props} />;
        } else {
          // redirect th euser to /login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
