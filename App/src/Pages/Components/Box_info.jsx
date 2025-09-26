import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Box_info = () => {
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setTotalStudents(response.data.length);
      } catch (err) {
        console.error("Error fetching student count:", err);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className='flex flex-row gap-5'>
      <div className='box-count'>
        <h1 className='text-lg font-semibold text-gray-700'>No of Students</h1>
        <h1 className='text-4xl font-bold text-gray-900 mt-2'>{totalStudents}</h1>
      </div>
      <div className='box-count'>
        <h1 className='text-lg font-semibold text-gray-700'>No of Departs</h1>
        <h1 className='text-4xl font-bold text-gray-900 mt-2'>--</h1>
      </div>
      <div className='box-count'>
        <h1 className='text-lg font-semibold text-gray-700'>No of Courses</h1>
        <h1 className='text-4xl font-bold text-gray-900 mt-2'>--</h1>
      </div>
    </div>
  );
};

export default Box_info;
