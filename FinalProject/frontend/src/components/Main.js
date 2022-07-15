import { Margin } from '@mui/icons-material';
import { height, textAlign } from '@mui/system';
import React ,{useState} from 'react';
import { ReactDOM } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Fullpage,{FullPageSections,FullpageSection,FullpageNavigation} from '@ap.cx/react-fullpage';
import Myslide from './Myslide';
import Menu from './Menu';
import '../AppHeemin.css';
import axios from 'axios';
import jQuery from 'jquery';
import { NavLink } from 'react-router-dom';
import { setDate } from 'date-fns';

import Sea from './Sea.mp4';
import Beach from './Beach.mp4';
import Clouds from './Clouds.mp4';
import Islands from './Islands.mp4';
import Cliff from './Cliff.mp4';
import Wave from './Waves.mp4';



const video =[Beach, Cliff, Islands, Wave];
const video_Number = 4;

const getRandom=()=>{
    return Math.floor(Math.random()* video_Number)
}




const Main=()=>{
    const [city, setCity] = useState([]) 
    const navi=useNavigate();

    const sectionStyle = {
        height:'100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'

    }

    

    const sectionStyle2 = {
        height:'',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'

    }

    const sectionStyle3 = {
      
        height:'100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        

    }

    const Search=(e)=>{


        if(e.target.value!=""){

        let searchUrl = process.env.REACT_APP_SPRING_URL+"searchauto?searchWord="+e.target.value;
    
    
    
    
        axios.get(searchUrl)
        .then(res=>{
            console.log(res.data)
        
          setCity(res.data);
            
    
        })
    
    }else{
        setCity('');
    }
       
    
    }

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            setCity();
        }
      }
    return(
 
        <Fullpage>
          <FullpageNavigation/>
            <FullPageSections>
                
                <FullpageSection style={sectionStyle3}>

                   
                     <div className='main_top'>
                             <div style={{zIndex:'-9999'}}>
                            <video muted autoPlay loop style={{width:'100%', height:'100vh', objectFit:'cover',position:'absolute'}}>
                                <source src={video[getRandom()]} type="video/mp4"/>
                            </video>
                            </div> 
                             <div className="wrap"style={{marginTop:'60px'}}>
                         
                            <div className='main_top_title' >나만의 여행 플래너 Trip Us!</div>
                            <div className='main_top_desc' >쉽고 빠르게 여행을 계획하세요.</div>
                            <div className='search_area' >
                                <div className='city_autocomplete' style={{display:'block'}}></div>
                                <input className='search_input' placeholder='국가명,도시명으로 검색' autocomplete="off" onKeyUp={Search} ></input>
                                <ul  style={{display:'block'}} id="searchAuto">{city && city.map((data, index)=>(<li onClick={()=>{navi(`/city/${data.num}`)}} >{data.name} <span class="h_search_cicu">대한민국</span></li> ))}</ul>
                                    <div className='latest_search'>추천도시:  서울  부산  제주  강릉  인천 </div>
                            </div>
                            
                        </div>
                        
                    </div>  
              
                </FullpageSection>
                
                <FullpageSection style={sectionStyle}>                
                    
                    <div className='page white'>
                    {/* <Menu></Menu> */}
                        <div className='wrap'>
                            <div className='page_title' style={{marginTop:'150px'}}>Trip Us에서 여행을 시작하세요!</div>
                            <div className='clear'></div>
                            <div className="intro_list">
                                <div className="intro_box" onclick="location.href='/ko/area';">
                                    <img src="https://www.earthtory.com/res/img/main/intro_img/intro_1.jpg" alt=""/>
                                <div className="intro_title">여행정보</div>
                                <div className="intro_desc"> 전 세계 800개 도시, 30만개의 관광명소, 음식점, 쇼핑 정보를 확인하세요.	</div>
                            </div>

                            <div className="intro_box">
                                <img src="https://www.earthtory.com/res/img/main/intro_img/intro_2.jpg" alt=""/>
                                <div class="intro_title"> 여행일정	</div>
                                <div class="intro_desc">전 세계 100,000개 이상의 여행일정을 확인하고 나만의 일정을 계획해 보세요.</div>
                            </div>
                                        
                            <div class="intro_box">
                                <img src="https://www.earthtory.com/res/img/main/intro_img/intro_3.jpg" alt=""/>
                                <div class="intro_title">커뮤니티</div>
                                <div class="intro_desc">여행자들과 정보를 공유하고, 궁금한 것은 언제든 물어보세요.</div>
                            </div>

                            <div class="clear"></div>
                            <a href="/ko/intro" class="intro_link"> 사용방법이 궁금하신가요?</a>
                        </div>
                    </div>
                </div>
             </FullpageSection>
                
            <FullpageSection style={sectionStyle}>
                <div className="page silver" style={{paddingTop:"30px"}}>    
                <div className="wrap" style={{width:'1150px'}}>
                    <div className="page_title" >
                        <div> 인기 여행일정</div>
                    </div>
                    
                    <div className="page_desc">다른 여행자들의 일정을 참고해 나만의 여행을 계획해보세요!</div>

                            <Myslide></Myslide>
                
                                    <div className="more_btn" style={{marginTop:'50px'}}> 56,065개의 추천일정 모두보기 </div>
                            
                        </div>
                    </div>  
  
                </FullpageSection>

                <FullpageSection style={sectionStyle}>
                     <div className="page silver">
                        <div className="wrap">
                            <div className="page_title">인기도시</div>
                                <div className="top_city_list">
                                    {/* <a href="/ko/city/london_309" className="top_city w2">
                                        <div className="top_city_title">가평</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/gapyeong.jpg" alt=""/>
                                    </a> */}

                                    <a href="/ko/city/london_309" className="top_city">
                                        <div className="top_city_title">가평</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/gapyeong.jpg" alt=""/>
                                    </a>
                                
                                    <a href="/ko/city/paris_307" className="top_city">
                                        <div className="top_city_title"> 안동</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/andong.jpg" alt=""/>
                                    </a>

                                    <a href="/ko/city/paris_307" className="top_city">
                                        <div className="top_city_title"> 전주</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/jeonju.jpg" alt=""/>
                                    </a>

                                    <a href="/ko/city/singapore_243" className="top_city">
                                        <div className="top_city_title"> 여수</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/daejeon.jpg" alt=""/>
                                    </a>

                                    <a href="/ko/city/istanbul_202" className="top_city">
                                        <div className="top_city_title"> 대전</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/daejeon.jpg" alt=""/>
                                    </a>
                                    
                                    <a href="/ko/city/venice_187" className="top_city">
                                        <div className="top_city_title">  강릉</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/gangneung.jpg" alt=""/>
                                    
                                    </a>
                                    
                                    <a href="/ko/city/barcelona_10005" className="top_city">
                                        <div className="top_city_title"> 경주	</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/gyeongju.jpg" alt=""/>
                                    </a>
                                    
                                    {/* <a href="/ko/city/taipei_92" className="top_city h2">
                                        <div className="top_city_title"> 타이베이 </div>
                                        <img src="https://www.earthtory.com/res/img/main/po_city/po_city_07.jpg" alt="" style={{height:'590px'}}/>
                                    </a> */}

                                    {/* <a href="/ko/city/hong-kong_245" className="top_city">
                                        <div className="top_city_title"> 홍콩 </div>
                                        <img src="https://www.earthtory.com/res/img/main/po_city/po_city_02.jpg" alt=""/>
                                    </a>
                                    
                                    <a href="/ko/city/bangkok_86" className="top_city">
                                        <div className="top_city_title"> 방콕 </div>
                                        <img src="https://www.earthtory.com/res/img/main/po_city/po_city_02.jpg" alt=""/>
                                    </a> */}
                                    
                                    <a href="/ko/city/jeju_312" className="top_city">
                                        <div className="top_city_title"> 제주도	</div>
                                        <img src="https://www.myro.co.kr/myro_image/city/jeju.jpg" alt=""/>
                                    </a>
                        
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>

        
    )
}

export default Main;
