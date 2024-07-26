import React,{useEffect} from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
   <section className='footer'>
    <div className='videoDiv'>
      <video src={video1 } muted autoPlay loop typeof='video/mp4'></video>
    </div>

    <div className='secContent Container'>
      <div data-aos="fade-up" className='contactDiv flex'>
        <div className='text'>
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>

        </div>

        <div className='inputDiv flex'>
          <input type='email' data-aos="fade-up" placeholder='enter your email address' />
          <button data-aos="fade-up" className='btn flex' type='submit'>
            send<FiSend className='icon'/>
          </button>
        </div>
      </div>

      <div className='footerCard flex'>
        <div className='footerIntro flex'>
          <div className='logoDiv'>
            <a href='#' className='logo flex'>
              <MdOutlineTravelExplore className='icon' />travel
            </a>

          </div>
          <div data-aos="fade-up" className='footerParagraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eligendi exercitationem voluptates illum incidunt consectetur optio sunt soluta, sed ea, eos, quae ullam deleniti tenetur vitae dolores dignissimos animi. Quis.



          </div>
          <div data-aos="fade-up" className='footerSocials flex'>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
          </div>
        </div>
        <div  data-aos="fade-up" className='footerLinks grid'>
          {/* grop one */}
          <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
            <span className='groupTitle'>
              OUR AGENCY
            </span>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  services
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  insurance
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Agency
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Tourism
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Payment
                </li>
          </div>
           {/* grop two */}
           <div data-aos="fade-up"  data-aos-duration="4000" className='linkGroup'>
            <span className='groupTitle'>
              Partners
            </span>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  bookings
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  rentCars
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Hostelworld
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Trivago
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  TripAdvisor
                </li>
          </div>
           {/* grop three */}
           <div data-aos="fade-up"  data-aos-duration="5000" className='linkGroup'>
            <span className='groupTitle'>
              LAST MINUTE
            </span>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  london
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  California
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Indonesia
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  Europe
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className='icon'/>
                  oceania
                </li>
          </div>
        </div>

        <div className='footerDiv flex'>
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small> COPYRIGHTS © RESERVED = yash savani 2024</small>
        </div>
      </div>

    </div>

   </section>
  )
}

export default Footer
