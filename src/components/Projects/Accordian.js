import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";



export   default function Accordian1 ()  {
    return(
        <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
             Description
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
         
            <Card.Body>
            <div>
        
            <p strong> A website for a "Dog" company named 'Tindog' </p> 
            <br/> 
              <h4 strong> Tech. Used</h4>
              <br/>
              <ul>
              <li> HTML 5</li>
              <li> CSS 3</li>
              <li> BOOTSTRAP</li>
              </ul>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
      </Accordion>
    )
}


export  function Accordian2 ()  {
  return(
      <Accordion defaultActiveKey="1">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
         Description
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
       
          <Card.Body>
          <div>
        
          <p> A real time chat app. To chat you need only to create or enter into a correct room. </p> 
          <br/> 
            <h4 strong> Tech. Used</h4>
            <br/>
            <ul>
            <li> React.js </li>
            <li> Node.js</li>
            <li> Socket.io</li>
            </ul>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    
    </Accordion>
  )
}

export  function Accordian3 ()  {
  return(
      <Accordion defaultActiveKey="1">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Description
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
       
          <Card.Body>
          <div>
        
          <p> A news App where you can get most current news from any field <br/> 
          i.e. news related from health,sports,technology and many more. </p> 
          <br/> 
            <h4 strong> Tech. Used</h4>
            <br/>
            <ul>
            <li> React</li>
            <li> React Bootstrap</li>
            <li> Alan Ai</li>
            <li>Material Ui</li>
            </ul>
            </div>
        
         
          </Card.Body>
        </Accordion.Collapse>
      </Card>
     
    </Accordion>
  )
}

export  function Accordian4 ()  {
  return(
      <Accordion defaultActiveKey="1">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Description
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
       
          <Card.Body> 
          
          <div>
        
          <p> A website which having details of my skills, my projects and my interests. <br/> 
       </p> 
          <br/> 
            <h4 strong> Tech. Used</h4>
            <br/>
            <ul>
            <li> React</li>
            <li> React Router</li>
            <li>React BOOTSTRAP</li>
            <li>Material Ui</li>
            </ul>
            </div>

          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>
  )
}



