import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {books} from './books'
import Book from './Book'
import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting);
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