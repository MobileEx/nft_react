import React from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';

import SubHeader from '../../components/Layout/Header/SubHeader';
import PageTitle from '../../components/Typography/PageTitle';
import Body1 from '../../components/Typography/Body1';
import Body2 from '../../components/Typography/Body2';
import OutlinedButton from '../../components/Buttons/OutlinedButton';
import InputField from '../../components/Forms/InputField';
import FilledButton from '../../components/Buttons/FilledButton';
import Container from '../../components/Layout/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(5.75),
    },
  },
  container: {
    padding: '78px 15px 136px',
    [theme.breakpoints.down('sm')]: {
      padding: '61px 15px 136px',
    },
  },
  title: {
    marginTop: 29,
  },
  description: {
    letterSpacing: 0,
    color: theme.palette.text.secondary,
    marginTop: 20,
  },
  primary: {
    color: theme.palette.text.primary,
  },
  userInfo: {
    marginBottom: 20,
  },
  content: {
    marginTop: 64,
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
    },
  },
  avatar: {
    width: 128,
    height: 128,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      width: 64,
      height: 64,
    },
  },
  info: {
    padding: '0 30px 0 7px',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0.25),
    },
  },
  label: {
    fontWeight: 500,
    marginBottom: 8,
  },
  uploadBtn: {
    marginTop: 17,
    width: 80,
  },
  secondary: {
    color: theme.palette.text.secondary,
  },
  edit: {
    paddingLeft: 16,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      marginTop: 28,
    },
  },
  formWrapper: {
    marginTop: 30,
  },
  section: {
    marginBottom: 41,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 4,
    },
  },
  addSocialBtn: {
    marginTop: 31,
    width: 230,
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 51,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  buttonGroup: {
    display: 'flex',
    width: '100%',
    paddingTop: 40,
    marginTop: 20,
    borderTop: `1px solid ${theme.palette.divider}`,
    '& button:nth-child(1)': {
      marginRight: 24,
    },
    '& button:nth-child(2)': {
      color: theme.palette.text.secondary,
      '& svg': {
        marginRight: 6,
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 42,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 38,
      flexDirection: 'column',
      '& button': {
        marginRight: '0 !important',
        marginBottom: 20,
      },
    },
  },
  action: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingTop: 15,
    },
  },
}));

const EditProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SubHeader />

      <Container
        className={classes.container}
        size="small"
      >
        <PageTitle className={classes.title}>Edit profile</PageTitle>
        <Body1 className={classes.description}>
          You can set preferred display name, create
          <span className={classes.primary}>&nbsp;your profile URL&nbsp;</span>
          and manage other personal settings.
        </Body1>

        <Grid container className={classes.content}>
          <Grid container item md={6} sm={12} className={classes.userInfo}>
            <Grid item md={5} xs={3}>
              <Avatar className={classes.avatar} />
            </Grid>
            <Grid item md={7} sm={5} xs={9}>
              <div className={classes.info}>
                <Body1 className={classes.label}>Profile photo</Body1>
                <Body2 className={classes.secondary}>
                  We recommend an image of at least 400*400. Gifs work too
                </Body2>
                <OutlinedButton className={classes.uploadBtn} label="Upload" />
              </div>
            </Grid>
          </Grid>

          <Grid item md={6} sm={12}>
            <Grid container spacing={4} className={classes.edit}>
              <Grid item md={12} sm={6} xs={12} className={classes.section}>
                <Body1 className={classes.label}>Account info</Body1>
                <InputField
                  wrapperClass={classes.formWrapper}
                  label="Display Name"
                  placeholder="Enter your display name"
                />

                <InputField
                  wrapperClass={classes.formWrapper}
                  label="Custom URL"
                  placeholder="ui8.net/You custom URL"
                />

                <InputField
                  wrapperClass={classes.formWrapper}
                  label="BIO"
                  isMulti
                  placeholder="About yourself in a few words"
                />
              </Grid>
              <Grid item md={12} sm={6} xs={12} className={classes.section}>
                <Body1 className={classes.label}>Social</Body1>
                <InputField
                  wrapperClass={classes.formWrapper}
                  label="Portfolio or Website"
                  placeholder="Enter URL"
                />

                <InputField
                  wrapperClass={classes.formWrapper}
                  label="Twitter"
                  placeholder="@twitter username"
                />

                <OutlinedButton
                  className={clsx(classes.addSocialBtn, classes.secondary)}
                  label="Add more social account"
                  icon={(
                    <AddCircleOutlineIcon />
                  )}
                  iconPosition="start"
                />
              </Grid>

              <div className={classes.action}>
                <Body1 className={classes.secondary}>
                  To update your settings you should sign message through your wallet. Click ‘Update profile’ then sign
                  the message
                </Body1>

                <div className={classes.buttonGroup}>
                  <FilledButton
                    label="Update Profile"
                    size="large"
                  />
                  <Button size="large" variant="text">
                    <HighlightOffIcon />
                    Clear All
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

EditProfile.propTypes = {
};

EditProfile.defaultProps = {
};

export default EditProfile;
