import React from 'react';
import './style.scss'
import { RouteComponentProps } from 'react-router'



export namespace Home {
  export interface Props extends RouteComponentProps<void> { }
}

export const Home = () => {
  return <div>BODY</div>
}
