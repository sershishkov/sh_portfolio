import React from 'react';
import { Link } from 'react-router-dom';

import '../style/main.scss';

const About = () => {
  return (
    <div className="about">
      <h4>
        <Link to='/' className="text-info my-nav" > Назад</Link>
      </h4>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td><h5>Место проживания:</h5></td>
              <td>
                <h5>Запорожье</h5>               
              </td>
            </tr>

            <tr>
              <td><h5> Гражданство:</h5></td>
              <td><h5> Украина, </h5></td>
            </tr>

            <tr>
              <td><h5>Релокация:</h5></td>
              <td><h5>Готов к командировкам</h5></td>
            </tr>

            <tr>
              <td><h5>Поиск вакансии</h5></td>
              <td><h5>Front End FullStack developer JUNIOR</h5></td>
            </tr>

            <tr>
              <td><h5>Занятость</h5></td>
              <td><h5>Полная, полный рабочий день</h5></td>
            </tr>

            <tr>
              <td>Портфолио:</td>
              <td>
                <h5>
                  <a href="https://sershishkov.github.io/sh_portfolio" target="_blank" rel="noopener noreferrer">
                    Моё портфолио
                  </a>
                </h5>
              </td>
            </tr>

            <tr>
              <td>Трудовая деятельность:</td>
              <td></td>
            </tr>
            <tr>
              <td>Июнь 2018 — настоящее время</td>
              <td>
                <h5>Частный предприниматель</h5>
                <h6>Запорожье</h6>
                <h5>Web developer</h5>
                <p>Разработка сайтов</p>
              </td>
            </tr>

            <tr>
              <td>Июнь 2016 — Май 2018</td>
              <td>
                <h5>Частный предприниматель</h5>
                <h6>Запорожье</h6>
                <h5>Риелтор</h5>
                <p>Подбор недвижимости. Работа с собственниками и покупателями. Проведение сделок. Подготовка документов к сделке. Подбор альтернатив. Работа с возражениями. Холодные звонки. Обучение сотрудников компании.</p>
              </td>
            </tr>

            <tr>
              <td>Февраль 2015 — Апрель 2016</td>
              <td>
                <h5>ОГРК-Центр, ООО</h5>
                <h6>Москва, www.ogrk-center.ru</h6>
                <h5>Риелтор</h5>
                <p>Подбор недвижимости. Работа с собственниками и покупателями. Проведение сделок. Ипотека. Подбор альтернатив. Работа с возражениями. Холодные звонки.
                За год работы получил статус "Серебряный риелтор", 6-е место в рейтинге сотрудников компании  за 2015 год.</p>
              </td>
            </tr>

            <tr>
              <td>Июнь 2008 — Декабрь 2014</td>
              <td>
                <h5>Частный Предприниматель</h5>
                <h6>Украина</h6>
                <h5>Частный Предприниматель</h5>
                <p>Закупка и продажа дверей металлических оптом и в розницу, транспортная логистика, организация складского хранения и учета.  Хранение и транспортировка зерновых. Выращивание растений.</p>
              </td>
            </tr>

            <tr>
              <td>Образование</td>
              <td>Высшее</td>
            </tr>

            <tr>
              <td>2017</td>
              <td>GOIT   Front End, web developer,</td>
            </tr>

            <tr>
              <td>1994</td>
              <td>
                <h5>Технический Университет Молдовы</h5>
                <h6>Технологический, Инженер технолог</h6>
              </td>
            </tr>

            <tr>
              <td>Языки</td>
              <td>
              <h6>Русский — родной</h6>
              <h6>Английский - pre-intermediate</h6>
              <p> На данный момент учусь в языковом центре "Полиглот" на уровне "Intermediate"</p>
                
              </td>
            </tr>
            <tr>
              <td>Навыки</td>
              <td>
                <p>
                  HTML, CSS, SCSS, javaScript, Node.js, MongoDB, React, Redux, Bootstrap, Material UI, Photoshop, GIT
               </p>
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;