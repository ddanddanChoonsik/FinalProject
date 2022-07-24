import { BorderAll, Margin } from '@mui/icons-material';
import { height, textAlign } from '@mui/system';
import React ,{useState} from 'react';
import { ReactDOM } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../AppHeemin.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MainLogo from '../assets/images/MainLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../modules/auth';
import AnimatedNumber from "react-animated-numbers"

import Fullpage,{FullPageSections,FullpageSection,FullpageNavigation} from '@ap.cx/react-fullpage';
import Myslide from './Myslide';
import Myslide2 from './Myslide2';

import '../AppHeemin.css';
import axios from 'axios';
import jQuery from 'jquery';
import { NavLink } from 'react-router-dom';
import { setDate } from 'date-fns';

import ButtonGroup from '@mui/material/ButtonGroup';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

import MenuList from '@mui/material/MenuList';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import Beach from './Beach.mp4';
import Islands from './Islands.mp4';
import Cliff from './Cliff.mp4';
import Wave from './Waves.mp4';


//ㅡㅡㅡㅡㅡㅡㅡ배경 랜덤 

const video =[Beach, Cliff, Islands, Wave];
const video_Number = 4;

const getRandom=()=>{

    return Math.floor(Math.random()* video_Number)
}

const options = ['인기순','오름차순' ,'내림차순'];

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const Main=(row)=>{

  
  const [number, setNumber] = React.useState(162)
  const [number2, setNumber2] = React.useState(30000)
  const [number3, setNumber3] = React.useState(3000)

  const [diff, setDiff] = React.useState(0)

  // const easeOutExpo = (t = 3000) => {

  //  return  t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  // }
  
    
  // const useCountUp  = (end = 3000, start = 0, duration = 2000) => {  
    
  //   const [count, setCount] = useState(start)
  //   const frameRate = 1000 / 60
  //   const totalFrame = Math.round(duration / frameRate)

    
  
  //   useEffect(() => {
  //     let currentNumber = start
  //     const counter = setInterval(() => {
  //       const progress = easeOutExpo(++currentNumber / totalFrame)
  //       setCount(Math.round(end * progress))
  
  //       if (progress === 1) {
  //         clearInterval(counter)
  //       }
  //     }, frameRate)
  //   }, [end, frameRate, start, totalFrame])
  // }
     // redux에서 변수 얻기
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const loginNum = useSelector(state => state.auth.user.num);
  const loginName = useSelector(state => state.auth.user.name);
  const loginProfile = useSelector(state => state.auth.user.profile);

  const pages = ['여행지', '일정 만들기', '일정 보기', '인기 일정', 'About'];
  const pageLinks = ['city/list', 'plan/city/108', 'plan/detail/1', 'plan/list', ''];

  const loginSettings = ['Mypage', 'Dashboard','Logout'];
  const loginLinks = ['mypage/1', 'dashboard','logout'];

  const logoutSettings = ['Login', 'Join'];
  const logoutLinks = ['login', 'join'];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



    let cityDataUrl = process.env.REACT_APP_SPRING_URL + "cityData/";

    const [citydata2,setCityData2] = useState([]);
    const [citydata3,setCityData3] = useState([]);
    const [citydata4,setCityData4] = useState([]);

    const [citydata,setCityData] = useState('');
    const [allUserTrip,setAllUserTrip] = useState('');



    let allTripUrl = process.env.REACT_APP_SPRING_URL + "allUserTrip";
    

    const allTrip=()=>{
        axios.get(allTripUrl)
        .then(res=>{
    
            setAllUserTrip(res.data);
            console.log(res.data);
   
        })
        .catch(err => {
            alert(err);
        })
      }

    // const cityData=()=>{
    //     axios.get(cityDataUrl)
    //     .then(res=>{
    //         // setCityData(res.data);
    //         // console.log(res.data.getData2
    //         setTogleButton(res.data.getData2);
    //         setCityData2(res.data.getData2);
    //         setCityData3(res.data.getData3);
    //         setCityData4(res.data.getData4);
    //     })
    //     .catch(err => {
    //         alert(err);
    //     })
    //   }

    
    // const [select, setSelect] = useState(''); // set 하라길래 그냥 하나 만들어뒀슴다

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };
    
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);


    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
      };
      
      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
      };
      
      const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
      
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
      
        setOpen(false);

    }
   
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

      useEffect(() => {

        allTrip();

      }, []);

    const [category, setCategory] = useState(0); //카테고리 숫자 저장 하는 변수 

    return(
 
        <Fullpage>
           <AppBar position="fixed" style={{ backgroundColor:'rgba( 0,0,0,0.0 )'}}>
      <Container maxWidth="xl" style={{ backgroundColor:'rgba( 0,0,0,0.0 )'}}>
        <Toolbar disableGutters style={{ backgroundColor:'rgba( 0,0,0,0.0 )'}}>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              backgroundColor:' none;'
            }}
          >
            <img src={MainLogo} alt='' style={{width:'60px'}}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                backgroundColor:'0D9DE6'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                backgroundColor:'0D9DE6',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' ,backgroundColor:'0D9DE6' },
              }}
            >
              {pages.map((page, index) => (
                <Link to={`/${pageLinks[index]}`} key={index}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              backgroundColor:' none;'
              
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link to={`/${pageLinks[index]}`} key={index}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {
                  isLoggedIn && <Avatar alt={loginName} src={`${process.env.REACT_APP_SPRING_URL}save/${loginProfile}`} />
                }
                {
                  !isLoggedIn && <Avatar src="/static/images/avatar/2.jpg" />
                }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                // 로그인 상태의 메뉴
                isLoggedIn && loginSettings.map((setting,index) => (
                  <MenuItem key={setting} onClick={() => {
                    handleCloseUserMenu();

                    if(index === loginSettings.length - 1){ // 마지막 메뉴(로그아웃)를 클릭했을 때
                      localStorage.removeItem('jwtToken');
                      dispatch(logout());
                    }
                    else{
                      navi(loginLinks[index]);
                    }
                  }}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              }
              {
                // 로그아웃 상태의 메뉴
                !isLoggedIn && logoutSettings.map((setting,index) => (
                  <MenuItem key={setting} onClick={() => {
                    handleCloseUserMenu();
                    navi(logoutLinks[index]);
                  }}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
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
                         
                            <div className='main_top_title' >나만의 여행 플래너 Trip:Us!</div>
                            <div className='main_top_desc' >쉽고 빠르게 여행을 계획하세요.</div>
                            <div className='search_area' >
                                <div className='city_autocomplete' style={{display:'block'}}></div>
                                <input className='search_input' placeholder='국가명,도시명으로 검색' autoComplete="off" onKeyUp={Search} ></input>
                                <ul  style={{display:'block'}} id="searchAuto">{city && city.map((data, index)=>(<li onClick={()=>{navi(`/city/${data.num}`)}} >{data.name} <span className="h_search_cicu">대한민국</span></li> ))}</ul>
                                    <div className='latest_search'><Link to={`city/list`} style={{color:'white'}}>추천도시</Link>:  <Link to={`city/108`} style={{color:'white'}}>서울</Link> <Link to={`city/159`} style={{color:'white'}}>부산</Link> <Link to={`city/184`} style={{color:'white'}}>제주</Link> <Link to={`city/136`} style={{color:'white'}}>안동</Link> <Link to={`city/105`} style={{color:'white'}}>강릉</Link> </div>
                            </div>
                            
                        </div>
                        
                    </div>  
              
                </FullpageSection>
                
                <FullpageSection style={sectionStyle}>                
                    
                    <div className='page white'>
                        <div className='wrap'>
                          
                            <div className='page_title' style={{marginTop:'150px'}}>Trip:Us에서 여행을 시작하세요!</div>
                            <div className='clear'></div>
                            <div className="intro_list">
                                <div className="intro_box" onClick={() => navi('/ko/area')}>
                                    <img src="https://www.earthtory.com/res/img/main/intro_img/intro_1.jpg" alt=""/>
                                <div className="intro_title">여행정보</div>
                                <div className="intro_desc"> 대한민국 
                                            <AnimatedNumber style={{display:'inline-block'}}
                                              fontStyle={{ fontFamily: "Nunito", fontSize: 25 }}
                                              animateToNumber={number}
                                              includeComma
                                              config={{ tension: 89, friction: 40 }}
                                              onStart={() => console.log("onStart")}
                                              onFinish={() => console.log("onFinish")}
                                              animationType={"calm"}
                                            /> 개의도시, 
                                            <br></br>
                                            <br/>
                                            <AnimatedNumber style={{display:'inline-block'}}
                                              fontStyle={{ fontFamily: "Nunito", fontSize: 25 }}
                                              animateToNumber={number2}
                                              includeComma
                                              config={{ tension: 89, friction: 40 }}
                                              onStart={() => console.log("onStart")}
                                              onFinish={() => console.log("onFinish")}
                                              animationType={"calm"}
                                            /> 
                                            개의 관광명소, 음식점<br/> 쇼핑 정보를 확인하세요.	</div>
                            </div>

                            <div className="intro_box">
                                <img src="https://www.earthtory.com/res/img/main/intro_img/intro_2.jpg" alt=""/>
                                <div class="intro_title"> 여행일정	</div>
                                <div class="intro_desc" style={{marginLeft:'5px'}}>대한민국       
                                            <span>
                                             <AnimatedNumber style={{display:'inline-block'}}
                                              fontStyle={{ fontFamily: "Nunito", fontSize: 25 }}
                                              animateToNumber={number3}
                                              includeComma
                                              config={{ tension: 89, friction: 40 }}
                                              onStart={() => console.log("onStart")}
                                              onFinish={() => console.log("onFinish")}
                                              animationType={"calm"}
                                            /> 개 이상의 여행일정을 확인하고 <br/> 나만의 일정을 계획해 보세요.
                                            </span>
                                            </div>
                            </div>
                                        
                            <div className="intro_box">
                                <img src="https://www.earthtory.com/res/img/main/intro_img/intro_3.jpg" alt=""/>
                                <div className="intro_title">커뮤니티</div>
                                <div className="intro_desc" style={{marginLeft:'5px'}}>여행자들과 정보를 공유하고, 궁금한 것은 언제든 물어보세요.</div>
                            </div>

                            <div className="clear"></div>
                            <a href="/ko/intro" className="intro_link"> 사용방법이 궁금하신가요?</a>
                        </div>
                    </div>
                </div>
             </FullpageSection>
                
            <FullpageSection style={sectionStyle}>
                <div className="page silver" style={{paddingTop:"30px"}}>    
                <div className="wrap" style={{width:'1200px'}}>
                    <div className="page_title" >
                        <div> 인기 여행일정</div>
                    </div>
                    
                    <div className="page_desc">다른 여행자들의 일정을 참고해 나만의 여행을 계획해보세요!</div>

                            <Myslide></Myslide>
                
                                     <div className="more_btn" style={{marginTop:'50px'}}> <Link to = {`plan/list`} style={{color:'black'}}> {allUserTrip} 개의 추천일정 모두보기</Link> </div> 
                            
                        </div>
                    </div>  
  
                </FullpageSection>

                <FullpageSection style={sectionStyle}>
                     <div className="page silver">
                        <div className="wrap">
                            <div className="page_title" style={{marginTop:'70px'}}>인기도시</div>
                            <p className="uk-text-meta">  여행지를 목록에서 직접 선택해주세요.  </p>

                        <div style={{textAlign:'center' , borderColor:'white'}}>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                >
                                <ToggleButton onClick={() => setCategory(0)} value="web">전체</ToggleButton>
                                <ToggleButton onClick={() => setCategory(1)} value="ios">도시</ToggleButton>
                                <ToggleButton onClick={() => setCategory(2)} value="android">바다</ToggleButton>
                                <ToggleButton onClick={() => setCategory(3)} value="tema">테마</ToggleButton>
                                

                             </ToggleButtonGroup>
                        </div>


                            {/* 
                                 <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& > *': {
                                        m: 1,
                                        },
                                    }}
                                    >
                          
                                    <ButtonGroup variant="text" aria-label="text button group">
                                        <Button>전체</Button>
                                        <Button>바다</Button>
                                        <Button>전통</Button>
                                        <Button>산악</Button>
                                    </ButtonGroup>
                                    </Box> */}

                           
                   

                                <div style={{float:'right'  ,borderColor:'#f6f6f6'}}>
                                    <React.Fragment>
                                        <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" style={{zIndex:'1000'}}>
                                            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                                            <Button
                                            size="small"
                                            aria-controls={open ? 'split-button-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-label="select merge strategy"
                                            aria-haspopup="menu"
                                            onClick={handleToggle}
                                            >
                                            <ArrowDropDownIcon />
                                            </Button>
                                        </ButtonGroup>
                                        <Popper 
                                            open={open}
                                            anchorEl={anchorRef.current}
                                            role={undefined}
                                            transition
                                            disablePortal
                                            style={{zIndex:'1000'}} >
                                            {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                transformOrigin:
                                                    placement === 'bottom' ? 'center top' : 'center bottom',
                                                }}
                                            >
                                                <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList id="split-button-menu" autoFocusItem>
                                                    {options.map((option, index) => (
                                                        <MenuItem
                                                        key={option}
                                                        // disabled={index === 2}
                                                        selected={index === selectedIndex}
                                                        onClick={(event) => handleMenuItemClick(event, index)}
                                                        >
                                                        {option}
                                                        </MenuItem>
                                                    ))}
                                                    </MenuList>
                                                </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                            )}
                                        </Popper>
                                        </React.Fragment>
                                    </div>

                                <div className="top_city_list">

                                    <Myslide2 row={row} select={selectedIndex} category={category}></Myslide2>
                                             
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
