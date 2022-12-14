import React from 'react';
import {useEffect,useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import glass1 from '../images/glass1.png';
import glass2 from '../images/glass2.png';
import glass3 from '../images/glass3.png';
import glass4 from '../images/glass4.png';



const slider = () => {
    let date= new Date().toLocaleTimeString()
  

    const [interval,setIntervalData]=useState(date)
    useEffect(()=>{
     setInterval(()=>{
       const date2 = new Date().toLocaleTimeString()
       setIntervalData(date2)       
     },1000)
    },[])
    let flag=0;
    const clickOnIcon=(x)=>{
        flag=flag+x;
        slideShow(flag);

    }
    useEffect(()=>{
    slideShow(flag);

    })
    function slideShow(num){
        let slides=document.getElementsByClassName('slide');
        if(num==slides.length){
            flag=0;
            num=0;

        }
        if(num<0){
            flag=slides.length-1;
            num=slides.length-1;
        }
        for(let y of slides){
            y.style.display="none";
        }
        slides[num].style.display="block";


    }
  return (
    <>
    
  <div className="slider-container">
		<ul className="slider lg:m-16 relative">
            <h1 className='absolute  left-[10%] top-28 md:absolute md:left-[25%] md:top-1/2 lg:absolute lg:left-[25%] lg:top-1/2 h1 text-yellow-500 p-2 uppercase text-center'>It is {interval}</h1>
			<li className="slide hidden">
                <img src={glass1} alt="img1" className='lg:w-3/2 selection:w-full' />
            </li>
			<li className="slide hidden">
                <img src={glass2} alt="img2" className='lg:w-3/2 w-full' />
            </li>
			<li className="slide hidden">
            <img src={glass3} alt="img3" className='lg:w-3/2 w-full' />

            </li>
            <li className="slide hidden">
            <img src={glass4} alt="img4" className='lg:w-3/2 w-full' />

            </li>
		</ul>
  </div>
  
    <span onClick={()=>{clickOnIcon(-1)}} className='absolute left-10 top-20 text-4xl lg:left-10 lg:top-1/2 lg:p-1 lg:rounded-full lg:bg-white lg:hover:bg-red-400 md:left-10 md:top-1/2 md:p-8 md:rounded-full md:bg-white md:hover:bg-red-400 hover:text-white font-bold text-xl' id='prev'>&#65308;</span>
    <span onClick={()=>{clickOnIcon(1)}} className='absolute right-10 top-20 text-4xl  lg:right-10 lg:top-1/2 lg:p-1 lg:rounded-full lg:bg-white lg:hover:bg-red-400 md:right-10 md:top-1/2 md:p-8 md:rounded-full md:bg-white md:hover:bg-red-400 hover:text-white font-bold text-xl' id='next'>&#65310;</span>


   
    </>
  )
}

export default slider