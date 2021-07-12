import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Container from '../Layout/Container';
import HeaderTitle from '../Typography/HeaderTitle';
import SmallAvatarInfo from '../AvatarInfoItems/SmallAvatarInfo';
import BidResultCard from '../Cards/BidResultCard';
import FilledButton from '../Buttons/FilledButton';
import OutlinedButton from '../Buttons/OutlinedButton';
import PlaceBidModal from '../Modals/PlaceBidModal';
import PlaceBidStepsModal from '../Modals/PlaceBidStepsModal';
import PlaceBidConnectWalletModal from '../Modals/PlaceBidConnectWalletModal';
// import { resourcePath } from '../../constants/config';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(11),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(8.25),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(2.75),
      paddingBottom: theme.spacing(18.5),
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  videoWrapper: {
    height: 799,
    maxWidth: 640,
    [theme.breakpoints.down('xs')]: {
      height: '128vw !important',
    },
  },
  video: {
    borderRadius: theme.shape.mdBorderRadius,
  },
  subHeader: {
    marginTop: 4,
  },
  items: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingRight: 22,
    marginBottom: 41,
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 38,
    '& button': {
      marginBottom: 9,
      fontSize: 16,
    },
  },
  label: {
    fontSize: 45,
  },
  left: {
    [theme.breakpoints.only('sm')]: {
      maxWidth: '62.5% !important',
      flexBasis: '62.5% !important',
    },
  },
  right: {
    [theme.breakpoints.only('sm')]: {
      maxWidth: '37.5% !important',
      flexBasis: '37.5% !important',
    },
  },
}));

const CreatorTopSection = () => {
  const classes = useStyles();
  const [isShowPlaceBidModal, setIsShowPlaceBidModal] = useState(false);
  const [isShowPlaceBidStepsModal, setIsShowPlaceBidStepsModal] = useState(false);
  const [isShowPlaceBidWalletModal, setIsShowPlaceBidWalletModal] = useState(false);

  const handleClickBid = () => {
    setIsShowPlaceBidModal(false);
    setIsShowPlaceBidStepsModal(true);
  };

  const handleConnectWallet = () => {
    setIsShowPlaceBidStepsModal(false);
    setIsShowPlaceBidWalletModal(true);
  };

  return (
    <Box component="section" className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          justify="space-between"
          spacing={4}
        >
          <Grid item sm={8} xs={12} className={classes.left}>
            <div className={classes.videoWrapper}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                width="100%"
                height="100%"
                controls
                className={classes.video}
                // src={resourcePath.video}
              >
                <source />
              </video>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} className={classes.right}>
            <HeaderTitle className={classes.subHeader}>
              Marco carrillo
              <sup className={classes.label}>®</sup>
            </HeaderTitle>

            <div className={classes.items}>
              <SmallAvatarInfo
                name="Jack Robot"
                title="Manager"
                photoName="1.jpg"
              />
              <SmallAvatarInfo
                name="Dash Pa"
                title="Web developer"
                photoName="3.jpg"
              />
            </div>

            <BidResultCard />

            <div className={classes.buttonWrapper}>
              <FilledButton
                label="Place a bid"
                size="large"
                handleClick={() => setIsShowPlaceBidModal(true)}
              />
              <OutlinedButton label="View item" size="large" />
            </div>
          </Grid>
        </Grid>
      </Container>

      <PlaceBidModal
        handleClose={() => setIsShowPlaceBidModal(false)}
        isOpen={isShowPlaceBidModal}
        handleClickBid={handleClickBid}
      />
      <PlaceBidStepsModal
        handleClose={() => setIsShowPlaceBidStepsModal(false)}
        isOpen={isShowPlaceBidStepsModal}
        handleSuccess={handleConnectWallet}
      />
      <PlaceBidConnectWalletModal
        handleClose={() => setIsShowPlaceBidWalletModal(false)}
        isOpen={isShowPlaceBidWalletModal}
      />
    </Box>
  );
};

export default CreatorTopSection;
