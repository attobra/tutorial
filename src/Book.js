import React from 'react'

const Book = (props) =>{
    const {img, title, author} = props.book
    //attribute nad event Handler
    //onClick, onMouseOver
    const clickHandler=()=>{
      alert('Hello World')
    }
    const handleMouseOver = ()=>{
      console.log({title})
    }
    return (<article className="book" onMouseOver={handleMouseOver}>
        <img src={img} alt=""/>
        {/* {children} */}
        <h1 >{title}</h1>
        <h5>{author}</h5>
        <button type="button" onClick={clickHandler}>Try on Amazon</button>
        
    </article>)
  }

  export default Book