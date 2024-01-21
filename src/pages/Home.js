//Home.js: La page d'accueil qui affiche la liste des chambres disponibles.

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoomList from '../components/RoomList';
import RoomDetails from '../components/RoomDetails';
import RoomApiService from '../services/RoomApiService';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [availableRooms, setAvailableRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = RoomApiService.getAvailableRooms((roomData) => {
      setAvailableRooms((prevRooms) => [...prevRooms, roomData]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const navigateToRoomDetails = (room) => {
    navigate(`/room/${room.id}`, { state: { room } });
  };

  return (
    <Container className="mt-5">
      <p>
        <h2>Welcome to our hotel!</h2>
      </p>
      <p></p>
      <p></p>
      <Row>
        <RoomList rooms={availableRooms} onRoomClick={navigateToRoomDetails} />
      </Row>
    </Container>
  );
}

export default Home;

