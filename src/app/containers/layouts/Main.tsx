import React from 'react';
import './layout.scss';
import { Header, Footer } from 'app/components';

export interface LayoutProps {
  children: React.ReactNode
}

export const Main = (props: LayoutProps) => {
  return <>
    <header className="layoutHeader"><Header /></header>
    <section className="layoutContainer">
      {props.children}
    </section>
    <footer className="layoutFooter"><Footer /></footer>
  </>
}
