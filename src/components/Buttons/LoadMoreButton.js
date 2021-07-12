import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import LoaderIndicator from '../Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.surface[3]}`,
  },
  indicatorLeft: {
    marginRight: 10,
  },
  indicatorRight: {
    marginLeft: 10,
  },
}));

const LoadMoreButton = ({ iconPos }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant="outlined"
    >
      {iconPos === 'right' && 'Load more'}
      <LoaderIndicator
        className={clsx({
          [classes.indicatorLeft]: iconPos === 'left',
          [classes.indicatorRight]: iconPos === 'right',
        })}
      />
      {iconPos === 'left' && 'Load more'}
    </Button>
  );
};

LoadMoreButton.propTypes = {
  iconPos: PropTypes.oneOf(['left', 'right']),
};

LoadMoreButton.defaultProps = {
  iconPos: 'left',
};

export default LoadMoreButton;
