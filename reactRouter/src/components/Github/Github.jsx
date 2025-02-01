import React, { useEffect, useState } from 'react'

function Github() {

  const [data, setData] = useState([])

  useEffect(() => {
    // fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://github.com/NiramayThaker"))
    fetch("https://api.github.com/users/NiramayThaker")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setData(data);
      })
      .catch(error => console.error("Error:", error));
  }, []);
  
  

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers} 
        <br />
        <br />
        Github Following: {data.following}
    </div>
  )
}

export default Github