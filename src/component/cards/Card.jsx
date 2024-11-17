import React from 'react'

const Card = ({img,title,classname}) => {
   
  return (
    <div className='bg-gray-400 p-2 w-[250px] '>
        <img src={img} alt="video image" className='w-[200px] h-[150px] object-cover'/>
        <h1 className='my-2'>{title}</h1>
    <button className={` py-1 px-2  text-white rounded-xl ${classname}`} >watch</button>
    
    </div>
  )
}

export default Card