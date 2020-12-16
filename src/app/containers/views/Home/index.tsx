import React from 'react';
import './style.scss'
import { RouteComponentProps } from 'react-router'



export namespace Home {
  export interface Props extends RouteComponentProps<void> { }
}

export const Home = () => {
  return <div className="recommend">
    <div className="row">
    <div className="col">
      <div className="card img-responsive">
        <a href="#"><img src="./assets/images/1.jpg" /></a>
      </div>
    </div>
    <div className="col">
      <div className="row">
        <div className="col2">
          <div className="card img-responsive">
            <a href="#"><img src="./assets/images/2.jpg" /></a>
          </div>
        </div>
        <div className="col2">
          <div className="card img-responsive">
            <a href="#"><img src="./assets/images/3.jpg" /></a>
          </div>
        </div>
        <div className="col2">
          <div className="card img-responsive">
            <a href="#"><img src="./assets/images/4.jpg" /></a>
          </div>
        </div>
        <div className="col2">
          <div className="card img-responsive">
            <a href="#"><img src="./assets/images/5.jpg" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card img-responsive w">
        <a href="#"><img src="./assets/images/6.jpg" /></a>
      </div>
    </div>
    <div className="col">
      <div className="row">
        <div className="col2">
          <div className="card img-responsive">
            <a href="#"><img src="./assets/images/7.jpg" /></a>
          </div>
        </div>
        <div className="col2">
          <div className="card img-responsive">
            <a href="#"><img src="./assets/images/8.jpg" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="row">
        <div className="col2">
          <div className="card img-responsive">
            <a href="#"><img src="./assets/images/9.jpg" /></a>
          </div>
        </div>
        <div className="col2">
          <div className="card img-responsive">
            <a href="#"><img src="./assets/images/10.jpg" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card img-responsive w">
        <a href="#"><img src="./assets/images/11.jpg" /></a>
      </div>
    </div>
  </div>
  </div>
}
