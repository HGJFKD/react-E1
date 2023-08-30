import {newBook} from '../ts/typs'
import Book from './Book'

type Props = {
    books : newBook[]
}

const Container = (props :Props) => {
    const {books} = props
   
    return   (<div>
        {books.map((book) => (<Book title={book.title} imgSrc={book.imgSrc} text={book.text}/>))}
    </div>)
  
}

export default Container