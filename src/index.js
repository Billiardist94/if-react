import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Global, ThemeProvider } from '@emotion/react';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import { store, persistor } from './store/index';
// import { globalStyles } from './index.styles';

const AppThemed = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      {/*<Global styles={globalStyles} />*/}
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppThemed />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
