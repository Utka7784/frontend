import React from 'react';
import {motion} from 'framer-motion';
import me from "../../assets/pexels-pixabay-40784.jpg";
const Founder = () => {
    const options={
        initial:{
            x:"-100%",
            opacity:0
          },
          whileInView:{
            x:0,
            opacity:1
          }
    }
  return (

    <section className='founder'>
        <motion.div {...options}>
            <img src={me} height={"200"} width={"200"} alt='founder'/>
                <h3>
                Water Leak Detection
                </h3>
            <p>
                Water Leakage is not an issue it's a disaster...
                <br/>
                <br/>
                Code-LeakGuardians will serve you to detect them...
            </p>
        </motion.div>
    </section>
  )
}

export default Founder