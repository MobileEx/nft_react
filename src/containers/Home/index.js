import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import Container from '../../components/Layout/Container';
import FilledButton from '../../components/Buttons/FilledButton';
import OutlinedButton from '../../components/Buttons/OutlinedButton';
import Title from '../../components/Typography/Title';
import Caption from '../../components/Typography/Caption';
import HeaderTitle from '../../components/Typography/HeaderTitle';
import Body1 from '../../components/Typography/Body1';
import CreatorTopSection from '../../components/Home/CreatorTopSection';
import CreatorBottomSection from '../../components/Home/CreatorBottomSection';
import SellerSection from '../../components/Home/SellerSection';
import HotBidSection from '../../components/Home/HotBidSection';
import HotCollectionSection from '../../components/Home/HotCollectionSection';
import DiscoverSection from '../../components/Home/DiscoverSection';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: 76,
      textAlign: 'center',
    },
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      lineHeight: '47px',
    },
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(10.625),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8.5),
    },
  },
  searchComment: {
    marginBottom: theme.spacing(1),
  },
  searchBtn: {
    marginTop: 26,
    width: 180,
  },
  buttonGroup: {
    display: 'flex',
    paddingTop: 40,
    '& button:nth-child(1)': {
      marginRight: 15,
    },
    '& button': {
      padding: '0 23px',
      fontSize: 15,
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
      '& button': {
        marginBottom: 12,
        width: '100%',
      },
    },
  },
  footerSection: {
    paddingTop: 76,
    paddingBottom: 81,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 74,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 25,
      paddingBottom: 61,
    },
  },
  left: {
    paddingTop: 175,
    width: '43%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 33,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingTop: theme.spacing(5),
      marginBottom: theme.spacing(3.5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  comment: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,
    },
  },
  imageWrapper: {
    width: '57%',
    [theme.breakpoints.down('sm')]: {
      width: '49%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  subHeader: {
    fontSize: 61,
    marginTop: 7,
    letterSpacing: 1.1,
    marginBottom: 24,
    lineHeight: '63px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 45,
      lineHeight: '56px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Box component="section" className={classes.section}>
        <Container className={classes.searchSection}>
          <>
            <Caption className={classes.searchComment}>
              Create, Explore, & Collect Digital Art NFTS.
            </Caption>
            <Title className={classes.title}>A creator economy.</Title>
            <OutlinedButton
              label="Start your search"
              className={classes.searchBtn}
              size="large"
              handleClick={() => history.push('/search')}
            />
          </>
        </Container>
      </Box>

      <CreatorTopSection />
      <CreatorBottomSection />
      <SellerSection />
      <HotBidSection />
      <HotCollectionSection />
      <DiscoverSection />

      <Divider />

      <Box component="section" className={classes.footerSection}>
        <Container className={classes.footerContainer}>
          <div className={classes.left}>
            <Body1 className={classes.comment}>Save Your Time With Stacks</Body1>
            <HeaderTitle className={classes.subHeader}>Earn free crypto with Ari</HeaderTitle>
            <Body1>A creative agency that lead and inspire</Body1>
            <div className={classes.buttonGroup}>
              <FilledButton size="large" label="Earn now" />
              <OutlinedButton size="large" label="Discover more" />
            </div>
          </div>
          <div className={classes.imageWrapper}>
            <img src="/assets/images/crypto.png" alt="crypto" />
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Home;
