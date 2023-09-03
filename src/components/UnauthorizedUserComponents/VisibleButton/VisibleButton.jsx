import React from 'react'
import { VscEyeClosed, VscEye } from "react-icons/vsc";


const VisibleButton = ({ hendleVisible, isVisible }) => {
	
	
  return (
	  <button onClick={hendleVisible}>
		  {isVisible ? <VscEyeClosed/> : <VscEye/>}
	</button>
  )
}

export default VisibleButton