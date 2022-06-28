import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import '../../styles/placeinfo.css';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


//kakao map
const { kakao } = window;

const PlaceInfo=()=>{

    //stars rating

    //mui
    const [value, setValue] = React.useState('1');
    const [starsvalue, setStarsValue] = React.useState(0);


    const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue==='1'){
    return kakaomapscript();
    }
    };

    //지도api & 관광지 api 
    const contentId=127419; //임시 contentid 값 추후 cityInfo에서 contentid 넘겨받기
    const [placeTitle, setPlaceTitle] = useState();
    const [placeAddr, setPlaceAddr] = useState();
    const [placeImg,setPlaceImg]= useState();
    const [review,setReview]= useState();

    const [cat1name,setCat1name] =useState();
    const [cat2name,setCat2name] = useState();
    const [cat3name,setCat3name] =useState();
    const [cattypename,setCattypename]=useState();

    console.log("let cat1:",cat1name,"let cat2:",cat2name,"let cat3:",cat3name);

    // 사진이 있는 장소만 받는 url(arrange=P)
     let apiUrl=`http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=YHbvEJEqXIWLqYGKEDkCqF7V08yazpZHKk3gWVyGKJpuhY5ZowEIwkt9i8nmTs%2F5BMBmSKWuyX349VO5JN6Tsg%3D%3D&contentId=${contentId}&defaultYN=Y&mapinfoYN=Y&addrinfoYN=Y&firstImageYN=Y&catcodeYN=Y&MobileOS=ETC&MobileApp=AppTest&_type=json`;
     let apiUrl2=`http://api.visitkorea.or.kr/openapi/service/rest/KorService/categoryCode?ServiceKey=YHbvEJEqXIWLqYGKEDkCqF7V08yazpZHKk3gWVyGKJpuhY5ZowEIwkt9i8nmTs%2F5BMBmSKWuyX349VO5JN6Tsg%3D%3D&cat1=${cat1name}&cat2=${cat2name}&cat3=${cat3name}&MobileOS=ETC&MobileApp=AppTest&_type=json`;

    //후기 작성
    const [photo,setPhoto]=useState('');
    const [subject,setSubject]=useState('');
    const [content,setContent]=useState('');

    //url선언
    // let uploadUrl=process.env.REACT_APP_SPRING_URL+"board/upload";
    // let insertUrl=process.env.REACT_APP_SPRING_URL+"board/insert";
    // let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

    //이미지 업로드 이벤트
    // const imageUpload=(e)=>{
    //     const uploadFile=e.target.files[0]; //
    //     const imageFile=new FormData();
    //     imageFile.append("uploadFile",uploadFile);

    //     axios({
    //         method:'post',
    //         url:uploadUrl,
    //         data:imageFile,
    //         headers:{'Content-Type':'multipart/form-data'}
    //     }).then(res=>{
    //         console.log(res.data);
    //         setPhoto(res.data);
    //     })
    //      }

    //submit 이벤트
    // const onBoardInsert=(e)=>{
    //     e.preventDefault();

    //     axios.post(insertUrl,{id,photo,subject,content}).then(res=>{navi("/board/list/1");})
    // }

useEffect(() => {
       kakaomapscript();
    });

    //kakomap + tourapi3
    const kakaomapscript = () => {
        
        const container = document.getElementById('place_map');

        axios.get(apiUrl)
        .then((res) => {
        console.dir(res.data.response.body.items.item);

        const apidata=res.data.response.body.items.item;
        const placex=apidata.mapx;  //관광지 위치(x좌표)
        const placey=apidata.mapy;  //관광지 위치(y좌표)
        const placetitle=apidata.title; //관광지명
        const placeaddr1=apidata.addr1; //관광지 주소 
        const placeaddr2=apidata.addr2; //관광지 상세주소
        const placeimg=apidata.firstimage; //관광지 대표 이미지
        
        const cat1 =apidata.cat1; //관광지 대분류
        const cat2=apidata.cat2; //관광지 중분류
        const cat3=apidata.cat3; //관광지 소분류

        setCat1name(cat1);
        setCat2name(cat2);
        setCat3name(cat3);

        
        // console.log("placeimgurl:",placeimg);
        //console.log("placeaddr2:",placeaddr2);

        setPlaceTitle(placetitle);
            if(placeaddr2===undefined){
                setPlaceAddr(placeaddr1);
            }else{
                setPlaceAddr(placeaddr1+placeaddr2);
            }
        setPlaceImg(placeimg);

        const options = {
            center: new kakao.maps.LatLng(placey,placex),
            //center: new kakao.maps.LatLng(35.1591243474,129.1603078991),
            //new kakao.maps.LatLng(y좌표,x좌표)
            level: 2
        };
        
        const map = new kakao.maps.Map(container, options);
    
        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(placey,placex);

        // 마커를 생성
        let marker = new kakao.maps.Marker({position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
        //setPlaces(res.data.response.body.items.item);
        }).catch((err) => {
    
        });
    };

    axios.get(apiUrl2).then((res) => {

        console.log("apiUrl2",res.data.response.body.items.item);
        const api2data=res.data.response.body.items.item;
        const servicetypecodename=api2data.name;
        setCattypename(servicetypecodename);

    }).catch((err) => {
    
    });
    
    return (
        <div className='place_info'>

            <Box sx={{ width: 'inherit', typography: 'body1' }}>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

            <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Map" value="1" />
            <Tab label="Review" value="2" />
            {/* <Tab label="Item Three" value="3" /> */}

            </TabList>
            </Box>
        
            <TabPanel value="1">
                <div id='place_map'>
                </div>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
                {/* <TabPanel value="3">Item Three</TabPanel> */}
            </TabContext>
            </Box>
        
            <div className='place_all_data'>
            <div className='place_sub_data'>
                <img src={placeImg} alt={placeTitle} className='place_img'/>
        
                <div className='place_img_name_type'>
                    <h3>PlaceName : {placeTitle}</h3>
                    <i className="fa-solid fa-map-location-dot"></i>&nbsp;&nbsp;{placeAddr}<br/>
                    {cattypename}
                </div>
            </div>
            <br/>

            <div className='stars_like'>

            <Box
            sx={{
    '& > legend': { mt: 2 },
  }}
>
   <Typography component="legend">Stars</Typography>
  <Rating
    name="simple-controlled"
    value={starsvalue}
    onChange={(event, newValue) => {
      setStarsValue(newValue);
      alert(newValue);
    }}
  
  />

</Box>

<Box>
<Typography>Like</Typography>
  <Typography>
  <div id="main-content">
  {/* <div> */}
<input type="checkbox" id="checkbox" />
<label for="checkbox">
  <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'-25px'}}>
  {/* {onMouseUp={()=>{alert(1)}}} */}
    <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
      <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2"/>
      <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"/>

      <g id="grp7" opacity="0" transform="translate(7 6)">
        <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/>
        <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/>
      </g>

      <g id="grp6" opacity="0" transform="translate(0 28)">
        <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/>
        <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/>
      </g>

      <g id="grp3" opacity="0" transform="translate(52 28)">
        <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/>
        <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/>
      </g>

      <g id="grp2" opacity="0" transform="translate(44 6)">
        <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"/>
        <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"/>
      </g>

      <g id="grp5" opacity="0" transform="translate(14 50)">
        <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"/>
        <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"/>
      </g>

      <g id="grp4" opacity="0" transform="translate(35 50)">
        <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"/>
        <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"/>
      </g>

      <g id="grp1" opacity="0" transform="translate(24)">
        <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"/>
        <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"/>
      </g>
    </g>
  </svg>
</label>
{/* </div> */}
</div>
  </Typography>
  </Box>


</div>
            <div className='place_review_write'>
            
                <textarea placeholder='50글자내로 작성해주세요🥕' className='review'onChange={(e)=>{setReview(e.target.value)}}/>
                <button type='submit' className='btn_review_write'>글쓰기</button>
            </div>
            <br/>
                {review}
        </div>
        </div>
    );
}

export default PlaceInfo;