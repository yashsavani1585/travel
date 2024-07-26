import React,{useEffect} from 'react'
import './main.css'
import { FaLocationDot } from "react-icons/fa6";
import {HiOutlineClipboardCheck} from "react-icons/hi"

import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img2(2).jpg'

import img3 from '../../Assets/img3(3).jpg'

import img4 from '../../Assets/img4(4).jpg'

import img5 from '../../Assets/img5(5).jpg'

import img6 from '../../Assets/img6(6).jpg'

import img7 from '../../Assets/img7(7).jpg'

import img8 from '../../Assets/img8 (8).jpg'

import img9 from '../../Assets/img9(9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css';







const data = [
  {
    id: 1,
    ImgSrc: img,
    destTitle: 'bora bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "the epitone of romance,bora bora is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

  {
    id: 2,
    ImgSrc: img2,
    destTitle: 'machu pichu',
    location: 'peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "the epitone of romance,machu pichu is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

  {
    id: 3,
    ImgSrc: img3,
    destTitle: 'great bariaer reef',
    location: 'australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "the epitone of romance,bora bora is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

  {
    id: 4,
    ImgSrc: img4,
    destTitle: 'cappadocia',
    location: 'turkey',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "the epitone of romance,cappadocia is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

  {
    id: 5,
    ImgSrc: img5,
    destTitle: 'guanjuato',
    location: 'mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: "the epitone of romance,guanjuato is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

  {
    id: 6,
    ImgSrc: img6,
    destTitle: ' cinque terre',
    location: 'italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: "the epitone of romance,cinque terre is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

  {
    id: 7,
    ImgSrc: img7,
    destTitle: 'Angokar wat',
    location: 'cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: "the epitone of romance,Angokar wat is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

  {
    id: 8,
    ImgSrc: img8,
    destTitle: 'himachal',
    location: 'india',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "the epitone of romance,himachal(india) is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

  {
    id: 9,
    ImgSrc: img9,
    destTitle: 'bali island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: "the epitone of romance,bali island is one of the best travel destinations in the world. this  place is known for its luxrious stays and adventurous activities"
  },

]

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3   data-aos="fade-right"className='title'>most visited dastination</h3>
      </div>

      <div className='setContent grid'>
        {/* .map() method in array */}

        {
          data.map(({id,ImgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className='singleDestination'>

                <div className='imageDiv'>
                  <img src={ImgSrc} alt={destTitle}/>
                  </div>

                  <div className='cardInfo'>
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                    <FaLocationDot  className="icon"/>
                    <span className='name'>{location}</span>
                    </span>
                    <div className='fees flex'>
                      <div className='grade'>
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className='price'>
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className='desc'>
                     <p>{description}</p>
                    </div>
                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className="icon"/>
                    </button>
                    </div>

                </div>
            )

          })
        }

      </div>

    </section>
  )
}

export default Main
