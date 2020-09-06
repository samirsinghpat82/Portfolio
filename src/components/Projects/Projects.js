import React from 'react';
import Accordian1 ,{Accordian2, Accordian3, Accordian4} from './Accordian';

import image1 from '../../assets/Capture1.PNG';
import image2 from '../../assets/Capture2.PNG';
import image3 from '../../assets/Capture3.PNG';
import image4 from '../../assets/Capture4.PNG';
import "./Projects.module.css";


import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  
} from '@merc/react-timeline';

export default function Projects() {
  return (
    <div id="project">
    <h1 className="pt-3 text-center font-details pb-3">Projects</h1>
    <Timeline className='project-body'>
    <Events>
     


      <ImageEvent
        date="8/13/19"
       
        src={image1}
        alt="Tindog"
        
      >

      <div>
      <Accordian1/>
      </div>

        <div>
          <UrlButton href="https://samirsinghpat82.github.io/my-site/">
            View Live
          </UrlButton>
        </div>
      </ImageEvent>

      <ImageEvent
      date="8/18/20"
      
      src={image2}
      alt="chat app"
      
    >


    <div>
    <Accordian2/>
    </div>


    <div>
    <UrlButton href="https://brave-benz-358d78.netlify.app/">
      View Live
    </UrlButton>

  </div>
</ImageEvent>


<ImageEvent
date="7/13/20"

src={image3}
alt="news app"

>


<div>
<Accordian3/>
</div>


<div>
<UrlButton href="https://samirsinghpat82.github.io/react_news_app/">
View Live
</UrlButton>

</div>
</ImageEvent>


<ImageEvent
date="7/22/20"

src={image4}
alt="portfolio"

>


<div>
<Accordian4/>
</div>


<div>
<UrlButton href="">
View live
</UrlButton>

</div>
</ImageEvent>


    </Events>
  </Timeline>
    </div>

  );
}

 