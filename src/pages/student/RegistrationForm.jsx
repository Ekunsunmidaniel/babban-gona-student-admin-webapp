import { Typography, Box, Grid, TextField, MenuItem, Button, Snackbar, Alert } from '@mui/material'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import React, { useState } from 'react'
import WebcamCapture from '/src/components/Webcam/WebcamCapture'
import { useFormik } from 'formik'
import { studentRegistrationValidationSchema } from '/src/schemaValidation'
import { Gender } from '/src/utils/enums'
import { Modal, Paper } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterationForm = () => {
	const [initialValues, setInitialValues] = React.useState({}) // set the editable student here --->>>

	useEffect(() => {
		let student = JSON.parse(localStorage.getItem('editable-student')) || {}
		console.log('heree -->> ', student)
		setInitialValues(student)
	}, [])

	const formik = useFormik({
		initialValues: initialValues,
		enableReinitialize: true,
		onSubmit: () => {
			// console.log({ values });
			// Additional form submission logic...
			// Reset the form to its default state
			// formik.setValues(initialValues);
		},
		validationSchema: studentRegistrationValidationSchema,
	})

	const { values, handleBlur, handleChange, handleSubmit, touched, errors, submitCount } = formik

	const getProps = (name) => {
		return {
			name,
			id: name,
			value: values[name],
			onChange: handleChange,
			onBlur: handleBlur,
			error: Boolean((touched[name] && errors[name]) || (submitCount > 0 && errors[name])),
			helperText: (touched[name] && errors[name]) || (submitCount > 0 && errors[name]),

			size: 'small',
			variant: 'outlined',
			fullWidth: true,
			required: true,
		}
	}

	// Step 2: Create state variables
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalData, setModalData] = useState(null)
	const [capturedImage, setCapturedImage] = useState(null)

	// Step 3: Create a function to open and close the modal
	const openModal = () => {
		console.log('Opening modal')
		setModalData({
			webcamImage: capturedImage,
			formikValues: values,
		})
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}
	const handleCapture = (imageData) => {
		setCapturedImage(imageData)
	}
	const capitalizeFirstWord = (str) => {
		return str
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	}

	const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false)
	const openSuccessSnackbar = () => {
		setIsSuccessSnackbarOpen(true)
	}

	const generateId = () => {
		let dt = new Date().getTime()
		let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			let r = (dt + Math.random() * 16) % 16 | 0
			dt = Math.floor(dt / 16)
			return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
		})
		return uuid
	}

	// Function to store form data in local storage
	const storeFormData = () => {
		// Save form data to local storage
		let studentDetails = { ...values } // copy the values object
		// console.log(values);
		if (!values.id) {
			// generate unique id
			studentDetails.id = generateId()
			studentDetails.isBlacklisted = false

			let studentList = JSON.parse(localStorage.getItem('students')) || []
			studentList.push(studentDetails)

			localStorage.setItem('students', JSON.stringify(studentList))
		} else {
			let fetchedStudentList = JSON.parse(localStorage.getItem('students')) || []

			let matchedStudentIndex = fetchedStudentList.findIndex((student) => student.id == studentDetails.id)

			fetchedStudentList[matchedStudentIndex] = studentDetails
			localStorage.setItem('students', JSON.stringify(fetchedStudentList))
		}

		// set editable=student to {}
		formik.setValues({})
		localStorage.setItem('editable-student', JSON.stringify({}))

		// close modal and refresh the inputs or page
	}

	const navigate = useNavigate()

	const handleStudentRegistration = () => {
		console.log('submitted', values)
		storeFormData()

		// Display a message indicating that the form has been submitted
		openSuccessSnackbar()
		// Close the modal
		closeModal()

		navigate('/student/list')
	}

	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={12} direction='row'>
				<Grid item md={6}>
					<Grid container direction='column' spacing={2}>
						<Grid item md={6} sm={12}>
							<Typography>Student Registration Form</Typography>
						</Grid>
						<Grid item md={6} sm={12}>
							<TextField {...getProps('firstName')} label='First Name' />
						</Grid>

						<Grid item md={6} sm={12}>
							<TextField {...getProps('lastName')} label='Last Name' />
						</Grid>
						<Grid item md={6} sm={12}>
							<TextField {...getProps('email')} label='Email' />
						</Grid>
						<Grid item md={6} sm={12}>
							<TextField {...getProps('phoneNumber')} label='Phone Number' />
						</Grid>

						<Grid item md={6} sm={12}>
							<TextField {...getProps('course')} label='Department' />
						</Grid>
						<Grid item md={6} sm={12}>
							<TextField {...getProps('location')} label='Location' />
						</Grid>
						<Grid item md={6} sm={12}>
							<Grid container direction='row' spacing={2}>
								<Grid item md={6} sm={12}>
									<TextField {...getProps('gender')} label='Gender' select>
										{Gender.map(({ value, label }) => (
											<MenuItem key={value} value={value}>
												{label}
											</MenuItem>
										))}
									</TextField>
								</Grid>
								<Grid item md={6} sm={12}>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker label='Date of Birth' {...getProps('date')} />
									</LocalizationProvider>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={6} sm={12}>
							<Button variant='contained' size='small' type='submit' onClick={openModal}>
								Confirm
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={6} sm={12}>
					<WebcamCapture onCapture={handleCapture} />
				</Grid>
			</Grid>

			<Modal open={isModalOpen} onClose={closeModal}>
				<Paper
					style={{
						width: '30%',
						margin: 'auto',
						marginTop: '5%',
						padding: '20px',
					}}
				>
					<Box p={2}>
						{capturedImage && <img src={capturedImage} alt='Webcam' style={{ maxWidth: '100%' }} />}
						<Typography>
							{modalData?.formikValues &&
								Object.entries(modalData.formikValues).map(([key, value]) => (
									<div key={key} style={{ marginBottom: '8px' }}>
										<strong>{capitalizeFirstWord(key)}:</strong> {value}
									</div>
								))}
						</Typography>

						<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Button
								variant='contained'
								size='small'
								onClick={() => {
									console.log('go back to register page')
									closeModal()
								}}
							>
								Back
							</Button>
							<Button variant='contained' size='small' onClick={handleStudentRegistration}>
								Submit
							</Button>
						</Box>
					</Box>
				</Paper>
			</Modal>

			<Snackbar
				open={isSuccessSnackbarOpen}
				autoHideDuration={2000}
				onClose={() => {
					setIsSuccessSnackbarOpen(false)
					// // Reset the form to its default state after Snackbar is closed
					// formik.resetForm();
				}}
			>
				<Alert severity='success' sx={{ width: '100%' }}>
					Form submitted successfully!
				</Alert>
			</Snackbar>
		</form>
	)
}

export default RegisterationForm
