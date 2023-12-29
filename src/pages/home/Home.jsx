import React from 'react'
import profile from "../../assets/IWHI0613.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="home section grid">
        <img src={profile} alt="" className="home__img" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Shefali Saini</span> Full Stack Developer
            </h1>

            <p className="home__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis hic expedita ut? Magnam, nam nisi, rerum atque obcaecati, eos eaque aliquid necessitatibus ad eius dolorem et praesentium. Alias laudantium perspiciatis nisi repellendus provident similique, ullam exercitationem neque vero harum adipisci. Modi error debitis animi?
            </p>

            <Link to='/about' className='button'> More About Me {''} 
            <span className="button__icon"> <FaArrowRight/> </span>
            </Link>
          </div>
        </div>

        <div className="color__block"></div>
      </section>
    </div>
  )
}

export default Home
