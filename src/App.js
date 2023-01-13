import React, { useState } from 'react'
import './App.css'

function App() {
	const [min, setMin] = useState(10)
	return (
		<div className='Container'>
			<span>{min}</span>
		</div>
	)
}

export default App
