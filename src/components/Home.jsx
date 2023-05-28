import {React, useRef, useEffect} from 'react'

const Home = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <section className='bg-white section flex items-center justify-center min-h-[900px]'>
      <div className='w-5/6 lg:w-5/12'>
        <video ref={videoRef}>
          <source src="../src/assets/img/home.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  )
}

export default Home