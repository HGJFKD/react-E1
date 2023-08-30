import Title from './Title'

interface newBook {
    title:string,
    imgSrc: string,
    text: string
}

export default function Book(book : newBook) {
  return (
    <div id='Book'>
        <Title text = {book.title}/>
        <img id='imgBook' src={book.imgSrc} alt="img" />
        <p> {book.text}</p>
    </div>

  )
}
