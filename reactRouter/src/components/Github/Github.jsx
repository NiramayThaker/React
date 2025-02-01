import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
  const data = useLoaderData();
  
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch("https://api.github.com/users/NiramayThaker")
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(data);
  //       setData(data);
  //     })
  //     .catch(error => console.error("Error:", error));
  // }, []);
  
  

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers} 
        <br />
        <img className='flex items-center' src={data.avatar_url} width={300} height={300}>
        </img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const res = await fetch('https://api.github.com/users/NiramayThaker')
  
  return res.json()
}
