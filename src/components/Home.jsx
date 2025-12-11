import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId"); 

  return (
    <div>
      <div className='mx-2 flex flex-row gap-7 place-content-between '>
        <input 
        className='border-2 px-5 py-1 rounded-2xl w-[66%]'
        type="text" 
        placeholder='Enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <button className='cursor-pointer p-2  rounded-xl bg-gray-600 text-white' >
          {
            pasteId ? "Update My Paste" : "Create My Paste"     //Conditional rendering
          }
        </button>
    </div>

    <div className='mt-8 flex justify-center'>
      <textarea
      className='border p-4 min-w-[500px] outline-none' 
      value={value}
      placeholder='Enter content here'
      onChange={(e) => setValue(e.target.value)}
      rows={20}
      name="" 
      id=""
      />
    </div>
    </div>
  )
}

export default Home