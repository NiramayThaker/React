import React from 'react'

function ColorBtn({btnBg, onClick, fontClr='black'}) {
    console.log(btnBg)
  return (
    <div>
        <button className='p-4 rounded-2xl h-15 w-30 font-bold cursor-pointer border-2'
        style={{backgroundColor: btnBg, color: fontClr}}
        onClick={onClick}
        >{btnBg}</button>
    </div>
  )
}

export default ColorBtn