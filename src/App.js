import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import MyNavbar from './components/MyNavbar'
import CommentArea from './components/CommentArea'

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <header className="App-header">
        <WarningSign text="Watch out again!" />
        <MyBadge text="NEW!!" color="info" />
        <SingleBook book={fantasyBooks[0]} />
        <CommentArea/>
        <BookList books={fantasyBooks} />
      </header>
    </div>
  )
}

export default App
