import React from 'react';
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../../assets/typing.jpg';
import image2 from '../../assets/pic2.jpg';
import image3 from '../../assets/pic3.jpg';
import styles from './Home.module.css';

const Home = () => {
  return(
    <div className={styles.home} id="home">
      <h3>Hi , I am <br/> Samir</h3>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
      <h2>Wb Developer</h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
    
        <Carousel.Caption>
         <h2>Learner</h2>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h2> Electronics Engineer </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  );
}

export default Home;
