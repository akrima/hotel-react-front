import React from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FaBan,FaWheelchair   } from 'react-icons/fa';
import { IoRestaurantSharp,IoWifiSharp  } from "react-icons/io5";
import { MdOutlineRoomService,MdFamilyRestroom,MdCoffeeMaker,MdOutlineFreeBreakfast} from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { Tb24Hours } from "react-icons/tb";



function RoomDetails() {
  const { state } = useLocation();
  const room = state?.room;

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Room Details</h2>

      <div className="row d-flex align-items-stretch">
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Room Number: {room.roomNumber}</h5>
              <p className="card-text">Price: ${room.price}.00</p>
              <p className="card-text">Availability: {room.available ? 'Available' : 'Not Available'}</p>
              <p className="card-text">Description: {room.description}</p>

              <p className="card-text"><FaBan className="fa-icon" /> Non-smoking rooms</p>
              <p className="card-text"><FaWheelchair className="fa-icon" /> Facilities for disabled guests</p>
              <p className="card-text"><MdOutlineRoomService  className="fa-icon" /> Room service</p>
              <p className="card-text"><IoRestaurantSharp  className="fa-icon" /> 3 restaurants</p>
              <p className="card-text"><LuParkingCircle className="fa-icon" /> Private Parking</p>
              <p className="card-text"><IoWifiSharp  className="fa-icon" /> Free WiFi</p>
              <p className="card-text"><MdFamilyRestroom className="fa-icon" /> Family rooms</p>
              <p className="card-text"><Tb24Hours className="fa-icon" /> 24-hour front desk</p>
              <p className="card-text"><MdCoffeeMaker className="fa-icon" /> Tea/Coffee Maker in All Rooms</p>
              <p className="card-text"><MdOutlineFreeBreakfast className="fa-icon" /> Breakfast</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <Carousel>
            {room.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block mx-auto img-fluid"
                  src={image}
                  alt={`Room ${room.roomNumber} - ${index + 1}`}
                  style={{ maxHeight: '700px', objectFit: 'contain' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
