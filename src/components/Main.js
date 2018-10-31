import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="description">
          <h1>Добрый день</h1>
          <p>Многие в  этой жизни в поиске зантия, которое будет по душе </p>
          <p> Имея уже некоторый жизненный опыт, я пришел к тому, что мне нравится писать код. 
          На старте, в прошлом году, я прошел курсы FRONT END , но те знания дают лишь понимание куда идти, дальше я обучался по книгам и курсам. Прошел курсы javaScript, REACT, Redux, NODE.js MongoDB.
           GIT использую во всех проектах</p>
          <p>На данный момент ищу вакансию FRONT END , FULLSTACK со статусом JUNIOR</p>
          
        </div>
      </div>
      <h2>Примеры моих работ:</h2>
      <div className="container">
      
        <div className="card">
          <a href="https://whispering-stream-57497.herokuapp.com/" target="_blank">
            <img src="img/VideoIdeas.jpeg" alt="Video Ideas" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Сборник видео Идей
            </p>        
          </div>        
        </div>

        <div className="card">
          <a href="https://sershishkov.github.io/sh_connect_manager/#/" target="_blank">
            <img src="img/ContactManager.jpeg" alt="Contact Manager" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Простая записная книга
            </p>        
          </div>        
        </div>

        <div className="card">
          <a href="https://gentle-bayou-84819.herokuapp.com/" target="_blank">
            <img src="img/DevConnector.jpeg" alt="Dev Connector" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Площадка для девелоперов с возможностью комментирования постов 
            </p>        
          </div>        
        </div>

        <div className="card">
          <a href="https://lit-oasis-51851.herokuapp.com/" target="_blank">
            <img src="img/StoryBooks.jpeg" alt="Story Books" className="card-img-top"/>
          </a>
          <div className="card-body">
            <p className="card-text">
              Хранилище любимых книг 
            </p>        
          </div>        
        </div>

        <div className="card">
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

        

      </div>
      
      
    
    </div>
  );
};

export default Main;