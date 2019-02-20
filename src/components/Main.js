import React from 'react';
import { Link } from 'react-router-dom';
import imgFitness from '../img/Fitness.jpeg';
import imgDevConnector from '../img/DevConnector.jpeg';
import imgClientPanel from '../img/ClientPanel.jpeg';
import imgStoryBooks from '../img/StoryBooks.jpeg';
import imgBurger from '../img/burger_sandwich.png'
import '../style/main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="description">
          <h1>Добрый день!</h1>
          <p>Многие в  этой жизни в поиске зантия, которое будет по душе </p>
          <p> Имея уже некоторый жизненный опыт, я пришел к тому, что мне нравится писать код. 
          На старте, в прошлом году, я прошел курсы FRONT END , но те знания дают лишь понимание куда идти, дальше я обучался по книгам и курсам UDEMY. Самостоятельно учил курсы javaScript, REACT, Redux, NODE.js MongoDB. GIT использую во всех проектах</p>
          <p>На данный момент ищу вакансию FRONT END , FULLSTACK со статусом JUNIOR</p>
          
        </div>
        <h4>
           <Link to='/about' className="text-info my-nav" > Моё резюме </Link>
         </h4>
      </div>
      <h2>Примеры моих работ:</h2>
      <div className="container">
      
      <div className="row">
      
      <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://radiant-retreat-46400.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgFitness} alt="Book shelf" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Приложение для создания тренировок              
            </p>        
          </div>        
        </div>
        

        <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://gentle-bayou-84819.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgDevConnector} alt="Dev Connector" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Площадка для девелоперов с возможностью комментирования постов 
            </p>        
          </div>        
        </div>

        
      </div>

      <div className="row">

      <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://sh-react-client-panel.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgClientPanel} alt="Client Panel" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Учет клиентов и баланс по ним
            </p>        
          </div>        
        </div>     
        

        <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://lit-oasis-51851.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgStoryBooks} alt="Story Books" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Хранилище любимых книг 
            </p>        
          </div>        
        </div>


      </div>

      <div className="row">

      <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://sh-burger.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={imgBurger} alt="Burger" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Burger 
            </p>        
          </div>        
        </div>
       
        

      </div>

          

      </div>   
      
    
    </div>
  );
};

export default Main;