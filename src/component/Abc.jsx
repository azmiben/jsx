import React from 'react'
import im from "./ggg.png"


function Abc() {
  return (
    <div>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={im}  />

    <br />
    <video width={320} height={240} controls="autoplay">
  <source src="mp4.mp4" type="video/mp4" />
</video>
   
  </div>
  
  
  </div>
  )
}

export default Abc