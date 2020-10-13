import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {books} from './books'
import Book from './Book'

function BookList() {
  return (
    <section className='booklist'>
    {books.map(bookItem => {
      
      return (<Book key={bookItem.id} book={bookItem}
       /> 
       )
       }
      )}
      
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));