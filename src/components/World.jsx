import React from 'react'
import '../style/World.css';

const World = () => {
  return (
    <section>  
         <div className='backg'>''</div>
      <h3 className='trans'>Transporting Across the world</h3>
      <div className='world'>
      <img src='./accent/image/world1.png' alt='world1' className='world2'/>
      <img src='./accent/image/world2.png' alt='world2' className='world2'/>
      <img src='./accent/image/world3.png' alt='world3' className='world2'/>
      <img src='./accent/image/world4.png' alt='world4' className='world2'/>
      </div>
      <button className='works'>More Work</button>
     
    </section>
  )
}

export default World
