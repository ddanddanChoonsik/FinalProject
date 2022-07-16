import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PlaceItem } from '.';

const MyPlaceList = ({addPlace, setMapX, setMapY}) => {
  const trip = useSelector(state => state.planner.trip);

  // TODO: 로그인한 회원의 번호 넘기기
  let myPlaceUrl = `${process.env.REACT_APP_SPRING_URL}plan/my-place-list?cityNum=${trip.cityNum}`;

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwtToken')}`;
    axios.get(myPlaceUrl)
    .then(res => {
      setPlaces(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className='my-place-list'>
      <span className='label'>내가 저장한 장소</span>
      <div className='place-list'>
        {
          places && places.map((place, index) => (
            <div className='place-list-item' key={index} onMouseOver={()=>{
              setMapX(place.mapx);
              setMapY(place.mapy);
            }} onMouseOut={()=>{
              setMapX();
              setMapY();
            }}>
              <PlaceItem place={place} addPlace={addPlace}/>
              <button type='button' className='edit-btn btn btn-light btn-sm' onClick={() => addPlace(place)}>+</button>
            </div>
          ))
        }
        {
          places ? "" : "저장한 장소가 없습니다"
        }
      </div>
    </div>
  );
};

export default MyPlaceList;