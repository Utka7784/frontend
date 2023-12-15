import React from 'react'
import {motion} from 'framer-motion'
const MenuCard = ({itemNum,burgerSrc,price,title,handler,delay}) => {
  return (
    <motion.div 
    initial={{
      x:"-100%",
      opacity:0
    }}
    whileInView={{
      x:0,
      opacity:1
    }}
    transition={{
      delay,}}
    
    className='menuCard'>
        <div>
             {itemNum}
        </div>
        <main>
            {/* <img src={burgerSrc} alt={itemNum}/> */}
            <h5>{price}</h5>
            <p>{title}</p>
            <button onClick={()=>handler(itemNum)} >More Info</button>
        </main>
    </motion.div>
  )
}

export default MenuCard

//57