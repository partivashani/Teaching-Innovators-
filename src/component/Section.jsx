import React, { useState } from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiVideoOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa";



const Section = () => {
const [card, setCard] = useState("icon")


// for Second part

const array2 = [
  {title: 'Build a Learning Ecosystem',
    description: 'Create a thriving community of Coding educatos who promote tech with like-minded individuals from colleges across India.',
    icon:'fa-solid fa-code'
  },

  {title: 'No Commercial Pressure',
    description: 'Foster genuine connections and knowledge sharing without the burden of sales tactics or commercial interests.',
    icon: 'fa-regular fa-user'
  },
  
  {title: 'Expand Beyond Classrooms',
    description: 'Extend your influence and share your expertise with a broader community, transcending institutional boundaries.',
    icon:'fa-solid fa-share',
  }
];


const array3 = [
  {title: 'Win Cash Prizes',
    description: 'No worthless coupons, just real cash rewards for your skills',
    icon:'fa-solid fa-dollar-sign'
  },

  {title: 'No Fees',
    description: 'Participate in challenges and learn without any financial burden',
    icon: 'fa-solid fa-bolt',
  },
  
  {title: 'Help Students Learn',
    description: 'Share your knowledge and contribute to the growth and success of students across the country.',
    icon:'fa-solid fa-book-open'
  },
  {title: 'Build Your Professional Network',
    description: 'Connect with fellow educators, mentors, and like-minded professionals to grow your influence.',
    icon:'fa-solid fa-user'
  },
  {title: "Join India's Best",
    description: 'Be part of the most active and vibrant coding community in the country',
  icon:'fa-solid fa-award'
  },

    {title: 'Share Your Expertise',
      description: 'Discuss web3, AI, Git, Python, JavaScript, HTML, and more',
    icon: 'fa-solid fa-code'
    },

];





//  for Fourth part

const array = [
  
    {title: 'Step 1: Anyone Can Apply', description:'Open to all college students in India, regardless of your coding experience.',
    icons: '<CiCircleCheck />'},

    {title: 'Step 2: Wait for Open Intake', description:'Keep an eye out for our application periods throughout the year.',
    icons: '<SlCalender />'},
    
    {title: 'Step 3: Submit Your Application', description:'Create a video showcasing why you are the best fit and how you will contribute to the community.',
    icons: '<CiVideoOn />'},

    {title: 'Step 4: Create and Host Events', description:'Once accepted, start organizing coding events and invite users to participate.',
    icons: '<CiUser />'},

    {title: 'Step 5: Voting System', description:'The highest-voted event host wins the pool prize each month.',
    icons: '<CiStar />'},

    {title:'Step 6: Win Monthly Prizes', description:'The highest-voted event host wins the pool prize each month.', 
    icons: '<TfiCup />'},

    {title:'Step 6: Win Monthly Prizes', description:'The competition resets monthly, giving everyone a chance to shine.',
    icons: '<FaArrowRight />'},
    
  
];

  return (

    //Second Section strat from here//

    <div className='bg-gray-900 text-white'>
      
      <div className=''>
      <div className=' w-96 m-auto p-14 '>
      <h1 className='text-center text-5xl font-bold '>Our <span className='text-yellow-500 font-bold'>Mission</span></h1>
      </div>

      <div className='flex justify-center'>
      <div className=' max-w-3xl'>
          <p className='text-center text-xl '>Build an ecosystem where Coding Heroes Promote tech with like minded people, without the sales pressure. Share your knowledge beyond college walls.</p>
        </div>
      </div>
    
      
    <div className='border-red-500 border-2 my-5 flex gap-5 p-3'>
    {array2.map((data, index)=>{
      const bgcolor = ['bg-gradient-to-r from-blue-800 to-pink-500', 'bg-gradient-to-r from-blue-800 to-pink-500',
         'bg-gradient-to-r from-red-600 to-blue-500', ];
      const cardColor = bgcolor[index % bgcolor.length];
      
       return  <div className={`text-center ${cardColor} p-7 rounded-xl shadow-xl max-w-lg w-90 h-auto m-auto my-10`}>
         <div className='w-16 h-16 rounded-full bg-yellow-500 m-auto p-4'>  <i class={` ${data.icon} text-white text-center text-2xl `}></i></ div>
       <h1 className='font-bold text-xl my-3'>{data.title}</h1>
       <p>{data.description}</p>
   </div> 
      })}
    

    </div>

      <div className='flex justify-center my-10 p-5'><button className='p-3 bg-yellow-400 bg- rounded-md w-60 font-bold text-gray-800 my-5'>Join Our Community</button></div>
      </div>
      
      {/* Third section start from here */}


      <div className=" bg-gray-700 p-2">
        
        <div className=' max-w-4xl m-auto text-center p-2 my-16'>
    
          <h1 className='text-6xl font-bold'>Why Become a <span className='text-blue-500 '>Educator</span></h1>
        <p className='p-3 text-xl'>Join the most active coding community in India and unleash your potential</p></div>
        
        <div className=' max-w-6xl h-auto m-auto text-center p-8 flex justify-center gap-8  flex-wrap '>
          {/* first box */}
          {array3.map((data,index)=>{
            const colors = [ 'bg-green-600','bg-blue-600', 'bg-red-600', 'bg-purple-600', 'bg-yellow-500', 'bg-indigo-900'];

            const iconbox = colors[index % colors.length];
           

         return <div className='h-auto w-80 bg-gradient-to-r from-blue-200 to-blue-800 rounded-xl p-2 hover:shadow-2xl transition-shadow duration-300   '>
          <div className={`'h-16 w-16 rounded-full ${iconbox} p-3 flex justify-center items-center text-4xl m-auto '`}><i class={`${data.icon}`}></i></div>
              <h1 className='text-xl font-bold p-2'>{data.title}</h1>
              <p>{data.description}</p>
            </div>
          })}
         
  
         
        </div>
         
      <div className='flex justify-center my-20'>  <button className='p-3 w-32 bg-blue-500 bg- rounded-3xl font-bold text-white '>Join Now</button></div>

    </div>

      {/* fourth section start from here */}

    
           <section className='bg-gray-900 h-auto w-screen'>
            <div className='max-w-6xl m-auto my-16'>  <h1 className='text-5xl font-bold text-blue-500 '>Your 7-Step Journey to Becoming a Educator</h1></div>
                {/* firstcard-box */}
                {array.map((data, index)=>{
                   const colors = ['bg-blue-600', 'bg-green-600', 'bg-red-600', 'bg-purple-600', 'bg-yellow-500', 'bg-indigo-900'];
                   const bgColor = colors[index % colors.length];

  
                return <div className='flex gap-5 max-w-7xl m-auto p-2 mx-20 my-2 ' >
                <div className={`w-14 h-14 rounded-full p-3 ${bgColor} text-3xl flex justify-center items-center`}>{<TfiCup />}</div>
              <div className={`min-w-full h-24 overflow-hidden box-border ${bgColor} rounded-md p-2`}>
                <h1 className='font-bold text-2xl my-1'>{data.title}</h1>
                <h2>{data.description} </h2>
              </div> 
              </div>
              })}
                       <div className='flex justify-center my-10'><button className='p-3 bg-blue-500 bg- rounded-full w-60 font-bold text-gray-800 my-5'>Start Your Journey</button></div>           
          </section>



{/* Fifth Section start from here...... */}

<div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-600">Become an Educator</h1>
          <p className="text-lg text-gray-600 mt-4">Unleash your teaching potential and gain access to a world of opportunities. The Educator Program is open to all teachers across India.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[ 
            { title: 'Earn Recognition', description: 'Compete in challenges and win recognition for your efforts!' },
            { title: 'Build a Learning Community', description: 'Create a network of fellow educators and learners.' },
            { title: 'Network with Fellow Educators', description: 'Connect with other professionals and grow your influence.' },
            { title: 'Gain Leadership Skills', description: 'Strengthen your leadership abilities and impact the next generation.' },
            { title: 'True Teaching, No Sales', description: 'Teach and mentor without any sales pressures or commercial interests.' },
            { title: 'Develop Mentorship Skills', description: 'Help students grow and develop their skills through mentorship.' },
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-indigo-600">{card.title}</h2>
              <p className="text-gray-600 mt-4">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#join-now" className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-indigo-700 transition-all duration-300">
            Join Now
          </a>
        </div>
      </div>


    {/* sixth Section start from here */}
    <section className="bg-gradient-to-r from-blue-200 to-indigo-900 text-white py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">What’s in it for You?</h1>
          <p className="text-lg text-gray-300 max-w-3xl m-auto">
            Join the Educator Program and unlock these amazing benefits to enhance your teaching journey. All at no cost!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-blue-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Host Free Events</h2>
            <p className="text-gray-200 text-lg mb-4">Host your own educational events and invite learners to join.</p>
            <span className="block text-2xl font-bold text-green-500">Free</span>
          </div>

          <div className="bg-blue-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Teach Any Topic</h2>
            <p className="text-gray-200 text-lg mb-4">Teach any topic you're passionate about, and inspire others.</p>
            <span className="block text-2xl font-bold text-green-500">Free</span>
          </div>

          <div className="bg-blue-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Engage with Students</h2>
            <p className="text-gray-200 text-lg mb-4">Work with students who are passionate about learning.</p>
            <span className="block text-2xl font-bold text-green-500">Free</span>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
            Ready to become an Educator?
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Join thousands of teachers from across India and start your educational journey today!
          </p>
          <a href="#signup" className="bg-yellow-400 text-gray-900 font-bold text-2xl py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300">
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  )
}
export default Section