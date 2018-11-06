import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="description">
          <h1>Добрый день!</h1>
          <p>Многие в  этой жизни в поиске зантия, которое будет по душе </p>
          <p> Имея уже некоторый жизненный опыт, я пришел к тому, что мне нравится писать код. 
          На старте, в прошлом году, я прошел курсы FRONT END , но те знания дают лишь понимание куда идти, дальше я обучался по книгам и курсам. Самостоятельно учил курсы javaScript, REACT, Redux, NODE.js MongoDB. GIT использую во всех проектах</p>
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
          <a href="https://whispering-stream-57497.herokuapp.com/" target="_blank">
            <img src="img/VideoIdeas.jpeg" alt="Video Ideas" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Сборник видео Идей
            </p>        
          </div>        
        </div>

        <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://sershishkov.github.io/sh_connect_manager/#/" target="_blank">
            <img src="img/ContactManager.jpeg" alt="Contact Manager" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Простая записная книга
            </p>        
          </div>        
        </div>
      </div>

      <div className="row">
        <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://gentle-bayou-84819.herokuapp.com/" target="_blank">
            <img src="img/DevConnector.jpeg" alt="Dev Connector" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Площадка для девелоперов с возможностью комментирования постов 
            </p>        
          </div>        
        </div>

        <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://lit-oasis-51851.herokuapp.com/" target="_blank">
            <img src="img/StoryBooks.jpeg" alt="Story Books" className="card-img-top"/>
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
          <a href="https://secret-taiga-70992.herokuapp.com/" target="_blank">
            <img src="img/BookShelf.jpeg" alt="Book shelf" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Любимая книжная полка
              login:visitor@gmail.com 
              password:123456789
            </p>        
          </div>        
        </div>
        <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://sh-react-client-panel.firebaseapp.com/" target="_blank">
            <img src="img/ClientPanel.jpeg" alt="Client Panel" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Учет клиентов и баланс по ним
            </p>        
          </div>        
        </div>
      </div>

      <div className="row">
          <div className="card col-lg-6 col-md-6 col-sm-12">
          <a href="https://sh-nba-full.firebaseapp.com/" target="_blank">
            <img src="img/NBA.jpeg" alt="NBA" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Список команд NBA
            </p>        
          </div>        
        </div>
        <div className="card col-lg-6 col-md-6 col-sm-12">
        <a href="http://ecolog.zp.ua/" target="_blank">
          <img src="img/Logo_ecolog_318x280.png" alt="Ecolog" className="card-img-top"/>
        </a>
        <div className="card-body">
          <p className="card-text">
            Действующий сайт ecolog.zp.ua
            на этом сайте я выполнял только FRONT END
          </p>        
        </div>        
      </div>
      </div>      

      </div>   
      
    
    </div>
  );
};

export default Main;