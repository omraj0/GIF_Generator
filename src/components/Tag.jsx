import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {

  const [tag, setTag] = useState('');
  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className='w-3/5 lg:w-2/5 bg-green-400 relative text-center rounded-2xl'>
      <h1 className='text-bold text-[3.4vw] lg:text-[1.6vw] text-center mt-4 mb-6 font-bold uppercase'>SEARCH RANDOM {tag} GIF</h1>
      
      {
        loading
        ? (<Spinner />) 
        : (<img src={gif} alt='img' width="400" className='mx-auto'/>)
      }
      
      <input
        className=' items-center w-10/12 bg-green-300 mt-6 mb-4 py-2 rounded-lg text-[1.4vw] text-center font-semibold'
        onChange={(event) => setTag(event.target.value)}
        type='text'
        placeholder='Search here'
        value={tag}
      />

      <button 
      onClick={() => {
        fetchData(tag)
      }}
      className='items-center w-10/12 bg-green-300 mb-4 py-2 font-bold rounded-lg text-[1.4vw]'
      >
        GENERATE
      </button>
    </div>
  )
}

export default Tag