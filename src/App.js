
import './App.css';
import Banner from './componentes-webpage/banner';
import Footer from './componentes-webpage/footer';
import Header from './componentes-webpage/header';
import HowItWorks from './componentes-webpage/how-it-works';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Footer></Footer>

    </div>
  );
}

export default App;
