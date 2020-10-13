import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const allBooks = [{
  img : "https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg",
  title: "If Animals Kissed Good Night",
  author:"Amelia hepworth"
},{
  img: "https://images-na.ssl-images-amazon.com/images/I/91O1RKTpiWL._AC_UL200_SR200,200_.jpg",
  title: "the office",
  author:"Robb pearlman"
}]

function BookList() {
  return (
    <section className='booklist'>
    {allBooks.map(bookItem => <Book 
        img={bookItem.img} title={bookItem.title} author={bookItem.author}
      > <button>Buy on Amazon</button>
       </Book>
      )}
      
    </section>
  )
}

const Book = (props) =>{
  const {img, title, author, children} = props
  return (<article className="book">
      <img src={img} alt=""/>
      {children}
      <h1>{title}</h1>
      <h5>{author}</h5>
      
  </article>)
}

ReactDOM.render(<BookList />, document.getElementById('root'));