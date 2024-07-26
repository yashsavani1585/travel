import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video2.mp4'
import { GrLocation } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";  
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css';





function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
  <section className='home'>
    <div className='overlay'></div>
    <video src={video} muted autoPlay loop typeof='video2/mp4'></video>

    <div className='homeContent container'>
      <div className='textDiv'>
        <span data-aos="fade-up" className='smallText'>
          our packages
        </span>
        <h1  data-aos="fade-up" className='homeTitle'>
          search your holiday
        </h1>
      </div>
      <div  data-aos="fade-up" className='cardDiv grid'>
        <div className='dastinationInput'>
          <label htmlFor='date'>search your dastination:</label>
          <div className='input flex'>
            <input type='text' placeholder='enter name her.....'></input>
            <GrLocation  className='icon'/>
          </div>
        </div>
        

        <div className='dateInput'>
          <label htmlFor='date'>select your date:</label>
          <div className='input flex'>
            <input type='date' ></input>
           
          </div>
        </div>


        <div className='priceInput'>
          <div className='label_total flex'>
            <label htmlFor='price'>max price:</label>
            <h3 className='total'>$500</h3>
            
          </div>
          <div className='input flex'>
            <input type='range' max="5000" min="1000"></input>
          </div>
        </div>
          <div className='searchOptions flex'>
            <FaFilter className='icon'/>
            <span>filter options</span>
          </div>
      </div>

      <div data-aos="fade-up" className='homeFooterIcons flex'>
        <div className='rightIcons'></div>
        <FiFacebook  className="icon"/>
        <AiOutlineInstagram  className="icon"/>
        <FaTripadvisor  className= "icon"/>

      <div className='leftIcons'></div>
      <BsListTask   className= "icon"/>
      <TbApps  className="icon"/>
      </div>
    </div>
  </section>
  )
}

export default Home
