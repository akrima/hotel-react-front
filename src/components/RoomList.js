//RoomList.js: Le composant qui affiche la liste des chambres disponibles.

import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function RoomList({ rooms, onRoomClick }) {
  const renderRoomCard = (room) => (
    <Col key={room.id} md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={room.images[0]} alt={`Room ${room.roomNumber}`} className="room-card-img" />
        <Card.Body>
          <Card.Title>{room.description}</Card.Title>
          <Card.Text>Price: ${room.price}</Card.Text>
          <Card.Text>{room.available ? 'Available' : 'Not Available'}</Card.Text>
          <Button onClick={() => onRoomClick(room)}>Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <div className="room-list">
      <Row xs={1} md={2} lg={2}>
        {rooms.map((room, index) => (
          <React.Fragment key={room.id}>
            {renderRoomCard(room)}
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
}

export default RoomList;