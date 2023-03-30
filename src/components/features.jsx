import { Link} from "react-router-dom";
import React from "react";
import {
  Button,
  
} from 'semantic-ui-react';


export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Registration</h2>
          <section className="App-Welcome">
            <div className="center">
              <h1 className="title">
                Welcome to Organ Managemnet System
              </h1>
              <a href="/login"><Button> <span> Login </span> </Button> </a>
              <a href="/DRegister"><Button> <span>User Registration</span> </Button></a>
              <a href="/HRegister"><Button> <span>Hospital Registration</span>  </Button></a>
            </div>
            {/* <Segment className="grid">
              <Button style={{ margin: '5px' }} content="Login" primary className="card" />
              <Button style={{ margin: '5px' }} content="User Registration" primary className="card" />
              <Button style={{ margin: '5px' }} content="Hospital Registration" primary className="card" />
            </Segment> */}
          </section>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  
                </div>
                
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
