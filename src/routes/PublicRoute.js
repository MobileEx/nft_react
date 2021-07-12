import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({
  layout: L, component: C, user, props: cProps, ...rest
}) => {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  return (
    <Route
      {...rest}
      render={(props) => (!isAuthorized ? (
        <L>
          <C {...props} {...cProps} match={rest.computedMatch} />
        </L>
      ) : (
        <Redirect to="/" />
      ))}
    />
  );
};

PublicRoute.propTypes = {
  layout: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  user: PropTypes.object,
  props: PropTypes.object,
};

PublicRoute.defaultProps = {
  user: null,
  props: {},
};

export default PublicRoute;
