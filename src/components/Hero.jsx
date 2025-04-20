import React from 'react'
import { Link } from 'react-router-dom';

const Hero = ({title='MeroJob',subtitle='Find the job that fits your skill set'}) => {
  return (
    <section className='bg-indigo-700 py-0 mb-0'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'></div>
    <div className="container m-auto py-6 px-6">
        <div className='text-center'>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
                {title}
            </h1>
            <p className='my-4  text-xl text-white'>{subtitle}</p>


        </div>
      <Link
        to="/jobs"
        className="text-indigo-500 hover:text-indigo-600 flex items-center"
      >
        <i className="fas fa-arrow-left mr-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:text-blue-300 ">
  Back to Job Listings
</i>
 
      </Link>
      
    </div>
    
  </section>

  );
}

export default Hero
