import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {

  const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-3/5 lg:w-2/5 bg-pink-400 relative text-center rounded-2xl'>
      <h1 className='text-bold text-[3.4vw] lg:text-[1.6vw] text-center mt-4 mb-6 font-bold'>A RANDOM GIF</h1>
      
      {
        loading
        ? (<Spinner />) 
        : (<img src={gif} alt='img' width="400" className='mx-auto'/>)
      }
      
      <button 
      onClick={() => {
        fetchData()
      }}
      className=' items-center w-10/12 bg-pink-300 mt-6 mb-4 py-2 font-bold rounded-lg text-[1.4vw]'
      >
        GENERATE
      </button>
    </div>
  )
}

export default Random