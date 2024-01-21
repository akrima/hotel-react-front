// Layout.js: Le composant de mise en page qui enveloppe chaque page.

import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import './../index.css';

function Layout({ children }) {
  return (
    <Container className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
