import React, { useState, useEffect } from 'react';
import { peopleData } from '../data';
import Title from './Title';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [people, setPeople] = useState(peopleData);
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      return checkNumber(index);
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      return checkNumber(index);
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        return checkNumber(index);
      });
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='section reviews' id='reviews'>
      <Title title='/' subtitle='reviews' />
      <div className='section-center  reviews-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article key={id} className={`reviews-article ${position}`}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
