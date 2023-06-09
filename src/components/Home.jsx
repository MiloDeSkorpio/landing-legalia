import { React, useRef, useEffect } from 'react';
// import data
import { hero } from '../data';

const Home = () => {
 
  const { Animation, w, h } = hero;

  return (
    <section className='bg-white section flex items-center justify-center min-h-[900px]'>
      <div className='w-5/6 lg:w-5/12' data-aos='zoom-out' data-aos-delay='1000'>
        <img src={Animation} alt="GIF animado" width={w} height={h} />
      </div>
    </section>
  );
};

export default Home;
