import './App.css';
import MyBadge from './components/MyBadge';
// import SingleBook from './components/SingleBook';
import SingleBook2 from './components/SingleBook2'
import BookList from './components/BookList';
import horror from '../src/data/horror.json'
import SingleBook from './components/SingleBook2';


function App() {
  return (
    <div className="App">
      <MyBadge color="primary" text="Check this out!" />
      {/* <SingleBook singlebook={horror[0]} className="my-3 mx-auto"/> */}
      <BookList allBooks={horror} />
    </div>
  );
}

export default App;
{/* <SingleBook singlebook={horror[0]} className="my-3 mx-auto"/> */}