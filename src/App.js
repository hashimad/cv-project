
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Educational from './components/Educational';
import Work from './components/Work';
import Footer from './components/Footer';

const App = () => {
 
  return <div className="container-fliud">
   <Header/>
   <Personal />
   <Educational/>
   <Work />

    <Footer />
   
  </div>
}

export default App;
