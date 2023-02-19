import './App.css';
import data from './data';
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react'

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  let next = () => {
    setIndex((index) => index !== people.length -1 ? index + 1 : 0)
  }
  let previous = () => {
    setIndex((index) => index !== 0 ? index - 1 : people.length -1)
  }

  useEffect(()=>{
    let slider = setInterval(next,3000)
    return () => clearInterval(slider)
  },[index])
  
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const {id, name, image, title, quote} = person;
          
          let position = 'nextSlide';
          if(personIndex === index)(
            position = 'activeSlide'
          )
          if(personIndex === index -1 || 
            (index === 0 && personIndex === people.length - 1) ){
            position = 'lastSlide'
          }
        
          return(
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="qoute">{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          )
        })}
        <button className='prev' onClick={previous}>
          <FiChevronLeft/>
        </button>

        <button className='next'onClick={next}>
          <FiChevronRight/>
        </button>
      </div>
    
    </section>
  );
}

export default App;
