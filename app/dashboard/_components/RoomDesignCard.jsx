import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

function RoomDesignCard({ room }) {
  return (
    <div className='shadow-md rounded-md'>
      <ReactBeforeSliderComponent
        firstImage={{
          imageUrl:room?.aiImage,
        }}
        secondImage={{
          imageUrl:room?.orgImage,
        }}
      />

      <div className="p-4">
        <h2> Room Tyoe: {room.roomType} </h2>
        <h2> Design Tyoe: {room.designType} </h2>
        </div>
    </div>
  )
}

export default RoomDesignCard