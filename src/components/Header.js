import React from 'react';

const Header = () => {
  return (
    <div className="header bg-light">
          <div className="container">
            
            <div className="header_photo">
              <img src="img/avatar04_17.jpg" alt=""/>
              <p >Porfolio FrontEND FullStack Junior
            </p>
            </div>
            <div className="header_info"> 
              <h2>Шишков Сергей</h2>           
              <h6>phone: +380 (50) 2279650 <i className="fab fa-viber" style={{color:"green"}}></i> <i className="fab fa-whatsapp-square" style={{color:"green"}}></i></h6>
              <h6>email: ser.shishkov@gmail.com</h6>
              <h6>Skype: ser.shishkov</h6>
              <div className="header_info_links">
                <a href="https://www.facebook.com/ser.shishkov" target="_blank"><i className="fab fa-facebook-square" style={{color:"green",fontSize:"2rem"}}></i></a>
                <a href="https://github.com/sershishkov/" target="_blank"><i className="fab fa-github-square" style={{color:"green",fontSize:"2rem"}}></i></a>
                <a href="https://www.linkedin.com/in/сергей-шишков-902800100/" target="_blank"><i className="fab fa-linkedin" style={{color:"green",fontSize:"2rem"}}></i></a>
              </div>

            </div>
          </div>
    </div>
  );
};

export default Header;