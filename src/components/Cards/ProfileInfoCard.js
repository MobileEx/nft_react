import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Tiny from '../Typography/Tiny';
import SubTitle1 from '../Typography/Subtitle1';
import OutlinedButton from '../Buttons/OutlinedButton';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1.75),
    padding: theme.spacing(1.25),
    boxShadow: '0px 21px 28px 2px #1111',
    borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
  },
  top: {
    display: 'flex',
    marginBottom: '12px',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  button: {
    width: '100%',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
}));

const ProfileInfoCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.iconWrapper}>
          <img src="/assets/images/profile-icon.png" alt="profile" />
        </div>
        <div>
          <Tiny>Balance</Tiny>
          <SubTitle1 color="primary">4.689 ETH</SubTitle1>
        </div>
      </div>
      <OutlinedButton
        className={classes.button}
        size="small"
        label="Manage fun on Coinbase"
      />
    </div>
  );
};

ProfileInfoCard.propTypes = {
};

ProfileInfoCard.defaultProps = {
};

export default ProfileInfoCard;
