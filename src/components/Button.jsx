import React from 'react'
import { BsPlayBtn, BsFillPauseBtnFill } from 'react-icons/bs'

function Button(props) {
	return (
		<button {...props}>
			<BsFillPauseBtnFill />
		</button>
	)
}

export default Button
