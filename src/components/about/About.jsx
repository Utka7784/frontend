import React from 'react'
import {Link} from 'react-router-dom';
import {RiFindReplaceLine} from "react-icons/ri"
import me from '../../assets/Me.jpg'
const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>Code-LeakGuardians</h4>
                <p>A system based on a wireless sensor network designed to 
monitor water distribution systems, such as irrigation systems, which, with the help of an 
autonomous learning algorithm, allows for precise location of water leaks.</p>
                {/* <p></p> */}
                <Link to='/'><RiFindReplaceLine/></Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt='founder'/>
                        <h3>Utkarsh Walchale</h3>
                    </div>
                    <p>
                    “Man who invented the Code-LeakGuardians was smart; man who invented the Centralized system was a genius.”
                    <p>
                    Taking the water leaks Seriously.
                    </p>
                    </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About