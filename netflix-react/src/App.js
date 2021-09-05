import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNav from './components/CustomNav';
import Footer from './components/Footer';
import Header from './components/Header';
import RowOfMovies from './components/RowOfMovies';
// import Placeholders from './components/Placeholders';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomNav />
        <Header />
        
        {/* movies={result of fetch} */}
        <RowOfMovies className="mt-3" title="Harry Potter" />
        <RowOfMovies className="mt-3" title="The Lord Of The Rings" />
        <RowOfMovies className="mt-3" title="Star Wars" />
  
        <Footer />
      </Router>
    </div>
  );
}

export default App;




