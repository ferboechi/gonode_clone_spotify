import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';


import './config/reactotron';
import store from './store';

import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  </Fragment>
);

export default App;
