import React from 'react'
import './about.css';
import Award from "../../img/award.png"

function About() {

  return (
    <div className='a'>
        <div className='a-left'>

        </div>
        <div className='a-right'>
            <div className='a-content'>
                <h1 className='about-heading'>About Me</h1>
                <p className='p-bold'>It is a long established fact that a reader will be distracted by the readable content.</p>
                <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehende.</p>
            </div>
            <div className='a-award'>
                <img src={Award} alt='award-certificate' className="award-pic"/>
                <div className='a-info'>
                    <h3>International Design Awards 2021</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and fugit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default About