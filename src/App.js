
import { ThemeProvider } from '@material-ui/styles';
import GamePage from './games/gamePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import theme from './theme/theme';
import Home from './componentes-webpage/home';
import RegisterUser from '../src/componentes-webpage/registerPage/register/registerPage';
import LoginUser from './componentes-webpage/registerPage/login/loginAll';
import NotFound from './404-page';
import HowItWorks from './componentes-webpage/how-it-works';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/game">
            <GamePage></GamePage>
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
          <Route path='/404'>
            <NotFound>
            </NotFound>
          </Route>
          <Route path='/'>
            <Home>
            </Home>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;




