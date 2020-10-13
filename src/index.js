import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () =>{
  return (<article className="book">
      <Image />
      <Title />
      <Author />
  </article>)
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg" alt=""/>

const Title = () => <h1>If Animals Kissed Good Night</h1>
const Author = () => <h5 style={{color:'#617d98', 
fontSize: '0.75rem', marginTop: '0.25rem'}}>Ann Whitford Paul</h5>
ReactDOM.render(<BookList />, document.getElementById('root'));