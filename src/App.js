// App.js Le composant racine qui définit la structure générale de votre application et gère les routes.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import RoomDetails from './components/RoomDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <Layout>
              <Home />
            </Layout>
          )}
        />
        <Route
            path="/room/:roomId"
            element={(
              <Layout>
                <RoomDetails />
              </Layout>
            )}
            />
        <Route
           path="/contact"
           element={(
              <Layout>
                  <Contact />
               </Layout>
           )}
           />
      </Routes>
    </Router>
  );
}

export default App;
