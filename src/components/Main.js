import React from 'react';
import { Link } from 'react-router-dom';
import imgFitness from '../img/Fitness.jpeg';
import imgDevConnector from '../img/DevConnector.jpeg';
import imgClientPanel from '../img/ClientPanel.jpeg';
import imgStoryBooks from '../img/StoryBooks.jpeg';
import imgBurger from '../img/burger_sandwich.png';
import imgHome from '../img/home_for_scss_grid.jpeg';
import '../style/main.scss';

const Main = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div className='description'>
          <h1>Hello dear guest!</h1>
          <p> Many in this life in search of work, which will delight.</p>
          <p>
            {' '}
            I completed the FRONT END courses, but that knowledge only gives an
            understanding of where to go, I studied further on books and UDEMY
            courses. Independently taught courses REACT, Redux, javaScript,
            NODE.js MongoDB, Git, Material UI, Bootsrap{' '}
          </p>
          <p>
            At the moment I am looking for a job FRONT END, FULLSTACK with a
            level of JUNIOR
          </p>
        </div>
        <h4>
          <Link to='/about' className='text-info my-nav'>
            {' '}
            My CV{' '}
          </Link>
        </h4>
      </div>
      <h2>My portfolio:</h2>
      <div className='container'>
        <div className='row'>
          <div className='card col-lg-6 col-md-6 col-sm-12'>
            <a
              href='https://radiant-retreat-46400.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={imgFitness} alt='Book shelf' className='card-img-top' />
            </a>
            <div className='card-body'>
              <p className='card-text'>
                "Creator of trainigs" - REACT, Redux, javaScript, NODE.js
                MongoDB, Git, Material UI
              </p>
            </div>
          </div>

          <div className='card col-lg-6 col-md-6 col-sm-12'>
            <a
              href='https://gentle-bayou-84819.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={imgDevConnector}
                alt='Dev Connector'
                className='card-img-top'
              />
            </a>
            <div className='card-body'>
              <p className='card-text'>
                "Development place" REACT, Redux, javaScript, NODE.js MongoDB,
                Git, Bootsrap
              </p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='card col-lg-6 col-md-6 col-sm-12'>
            <a
              href='https://sh-burger.firebaseapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={imgBurger} alt='Burger' className='card-img-top' />
            </a>
            <div className='card-body'>
              <p className='card-text'>
                "Burger" REACT, Redux, javaScript, NODE.js, Firebase, Git,
              </p>
            </div>
          </div>

          <div className='card col-lg-6 col-md-6 col-sm-12'>
            <a
              href='https://sershishkov.github.io/sh_scss_in_react/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={imgHome} alt='SCSS GRID' className='card-img-top' />
            </a>
            <div className='card-body'>
              <p className='card-text'>"Travelling" REACT SCSS GRID</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='card col-lg-6 col-md-6 col-sm-12'>
            <a
              href='https://guarded-coast-87223.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={imgClientPanel}
                alt='Client Panel'
                className='card-img-top'
              />
            </a>
            <div className='card-body'>
              <p className='card-text'>
                "To do list " REACT, javaScript, Git, Bootsrap,
              </p>
            </div>
          </div>

          <div className='card col-lg-6 col-md-6 col-sm-12'>
            <a
              href='https://lit-oasis-51851.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={imgStoryBooks}
                alt='Story Books'
                className='card-img-top'
              />
            </a>
            <div className='card-body'>
              <p className='card-text'>
                "Book store" googleAuth, javaScript, NODE.js, MongoDB,
                handlebars
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
