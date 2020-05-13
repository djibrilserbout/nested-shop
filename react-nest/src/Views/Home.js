import React from 'react';
import '../App.css';
import '../Styles/Home.css'
import Ps4Controller from '../img/ps4_controller.jpg'
import Airpods from '../img/airpods.png'
import Xiaomi from '../img/xiaomi.png'




function Home() {
  return (
   
    <div className="App">
      <div className="home-container">

        <div className="home-message-container">
            <h1>Bienvenue le Nested Shop !</h1>
            <p>Tous vos produits High-Tech préferés, au meilleur prix !</p>

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Ps4Controller} class="d-block w-100" alt="Ps4 controller" />
                </div>
                <div class="carousel-item ">
                  <img src={Airpods} class="d-block w-100" alt="Airpods pro" />
                </div>
                <div class="carousel-item ">
                  <img src={Xiaomi} class="d-block w-100" alt="Xiamoi phone" />
                </div>
              </div>
            </div>  
            
        </div>

      

      </div>
    </div>

  );
}

export default Home;