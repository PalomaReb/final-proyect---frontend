import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import theme from './theme/theme';
import GamePage from './pages/games/gamePage';
import GameOver from './pages/games/gameOver';
import Home from './pages/home/index';
import RegisterUser from './pages/registerPage/register/registerPage';
import LoginUser from './pages/registerPage/login/loginAll';
import NotFound from './pages/404-page/index';
import HowItWorks from './pages/how-it-works/index';
import TermsPage from './pages/legal-pages/terms';
import CookiesPage from './pages/legal-pages/cookies';
import GDPRPage from './pages/legal-pages/gdpr';
import Reviewsinput from './pages/reviews/reviewInput';
import ViewReview from './pages/reviews/viewReview';
import SurvivalPage from './pages/games/endPage';

import { I18nextProvider } from 'react-i18next';
import globalEs from './langauges/espa.json'
import globalEn from './langauges/eng.json'
import i18next from 'i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    },
  }
})

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/game/:id">
              <GamePage></GamePage>
            </Route>
            <Route path="/death">
              <GameOver></GameOver>
            </Route>
            <Route path="/alive">
              <SurvivalPage></SurvivalPage>
            </Route>
            <Route path='/register'>
              <RegisterUser></RegisterUser>
            </Route>
            <Route path='/login'>
              <LoginUser></LoginUser>
            </Route>
            <Route path="/howitworks">
              <HowItWorks></HowItWorks>
            </Route>
            <Route path="/reviews">
              <Reviewsinput>
              </Reviewsinput>
            </Route>
            <Route path="/view-reviews">
              <ViewReview></ViewReview>
            </Route>
            <Route path="/terms">
              <TermsPage></TermsPage>
            </Route>
            <Route path="/cookies">
              <CookiesPage></CookiesPage>
            </Route>
            <Route path="/gdpr">
              <GDPRPage></GDPRPage>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
