import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { loadThemeAction } from 'store/actions/theme';

import darkTheme from '../../theme/dark';
import lightTheme from '../../theme/light';
import Routes from '../../routes';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.theme.theme);

  useEffect(() => {
    dispatch(loadThemeAction());
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={status === 'dark' ? darkTheme : lightTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Router>
          <Routes />
        </Router>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
