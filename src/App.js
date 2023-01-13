import React, { useState } from 'react'
import './App.css'

function App() {
	const [min, setMin] = useState(10)
	return (
		<div>
			<div className='Container'>
				<span>{min}</span>
			</div>
		</div>
	)
}

export default App
