import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

function Timer() {
	return (
		<div>
			<CircularProgressbar value={percentage} text={`${percentage}%`} />
		</div>
	)
}

export default Timer
