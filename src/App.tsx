import Header from './Header'
import {newBook} from '../ts/typs'
import Container from './Container'
import Footer from './Footer'
import './App.css'

function App() {
  const book1 = {
    title: "book1",
    imgSrc: "https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg",
    text: "some text "
  }
  const book2 = {
    title: "book2",
    imgSrc: "https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326_640.jpg",
    text: "some text "
  }
  const book3 = {
    title: "book3",
    imgSrc: "https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439_640.jpg",
    text: "some text "
  }

  const books :newBook[] = [book1,book2,book3]
  return (
    <>
        <Header/>
        <Container books={books}/> 
        {/* <Footer text = {}/> */}
    </>
  )
}

export default App
