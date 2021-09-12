
import { ThemeProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import theme from './theme/theme';
import GamePage from './games/gamePage';
import GameOver from './games/gameOver';
import Home from './componentes-webpage/home';
import RegisterUser from '../src/componentes-webpage/registerPage/register/registerPage';
import LoginUser from './componentes-webpage/registerPage/login/loginAll';
import NotFound from './404-page';
import HowItWorks from './componentes-webpage/how-it-works';
import TermsPage from './legal-pages/terms';
import CookiesPage from './legal-pages/cookies';
import GDPRPage from './legal-pages/gdpr';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/game/:id">
            <GamePage></GamePage>
          </Route>
          <Route path="/death">
            <GameOver></GameOver>
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

  );
}

export default App;
