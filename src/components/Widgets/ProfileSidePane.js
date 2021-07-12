import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import Pane from '../Pane';
import SubTitle1 from '../Typography/Subtitle1';
import Body1 from '../Typography/Body1';
import Body2 from '../Typography/Body2';
import Tiny from '../Typography/Tiny';
import FilledButton from '../Buttons/FilledButton';
import IconCircleButton from '../Buttons/IconCircleButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.mdBorderRadius,
    padding: '30px 27px',
    textAlign: 'center',
  },
  avatar: {
    width: 160,
    height: 160,
    background: theme.palette.surface[0],
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 47,
    marginBottom: 50,
    width: 171,
  },
  name: {
    color: theme.palette.text.primary,
    marginTop: 23,
  },
  description: {
    color: theme.palette.text.secondary,
    marginTop: 17,
    marginBottom: 18,
  },
  icon: {
    fontSize: 16,
    color: theme.palette.text.secondary,
  },
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: 5,
    },
    '& a': {
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
  },
  sites: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 46,
    width: 103,
  },
  bottom: {
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: '52px 0 5px',
  },
}));

const ProfileSidePane = () => {
  const classes = useStyles();

  return (
    <Pane className={classes.root}>
      <Avatar
        className={classes.avatar}
        src="/assets/images/users/2.jpg"
      />
      <SubTitle1 className={classes.name}>Enrico Cole</SubTitle1>
      <Body1>0xc4c16a645...b21a</Body1>

      <Body2 className={classes.description}>
        A wholesome farm owner in Montana. Upcoming gallery solo show in Germany
      </Body2>

      <Body2 className={classes.linkWrapper}>
        <LanguageOutlinedIcon className={classes.icon} />
        <Link to="#">https://ui8.net</Link>
      </Body2>

      <div className={classes.buttons}>
        <FilledButton label="Follow" />
        <IconCircleButton>
          <PublishOutlinedIcon />
        </IconCircleButton>
        <IconCircleButton>
          <MoreHorizOutlinedIcon />
        </IconCircleButton>
      </div>

      <div className={classes.sites}>
        <Link to="#">
          <TwitterIcon className={classes.icon} />
        </Link>
        <Link to="#">
          <InstagramIcon className={classes.icon} />
        </Link>
        <Link to="#">
          <FacebookIcon className={classes.icon} />
        </Link>
      </div>

      <div className={classes.bottom}>
        <Tiny>
          Member since Mar 15, 2021
        </Tiny>
      </div>
    </Pane>
  );
};

ProfileSidePane.propTypes = {
};

ProfileSidePane.defaultProps = {
};

export default ProfileSidePane;
