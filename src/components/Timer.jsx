import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import Button from './Button'

function Timer() {
	return (
		<div>
			<CircularProgressbar
				value={60}
				text={`60%`}
				styles={buildStyles({
					textColor: 'white',
					pathColor: 'red',
					trailColor: 'green',
				})}
			/>
			<div>
				<Button />
			</div>
		</div>
	)
}

export default Timer
