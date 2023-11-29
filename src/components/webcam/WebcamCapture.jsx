/* eslint-disable no-unused-vars */
import React from 'react'
import Webcam from 'react-webcam'
import { useRef, useState, useCallback } from 'react'
import { Box, Button } from '@mui/material'

// eslint-disable-next-line react/prop-types
const WebcamCapture = ({ onCapture }) => {
	const webcamRef = useRef(null)
	const [imgSrc, setImgSrc] = useState(null)
	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot()
		setImgSrc(imageSrc)
		onCapture(imageSrc)
	}, [webcamRef])
	const retake = () => {
		setImgSrc(null)
	}

	return (
		<Box>
			{imgSrc ? <img src={imgSrc} alt='webcam' /> : <Webcam height={220} width={220} ref={webcamRef} />}
			<Box>{imgSrc ? <Button onClick={retake}>Retake photo</Button> : <Button onClick={capture}>Capture photo</Button>}</Box>
		</Box>
	)
}

export default WebcamCapture
