/* eslint-disable react/prop-types */
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '400px',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

const BasicModal = ({ image, firstName, lastName, middleName, phoneNumber, email, location, department, faculty, gender }) => {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button
				onClick={handleOpen}
				style={{
					maxWidth: '200px',
					maxHeight: '50px',
					minWidth: '200px',
					minHeight: '50px',
				}}
				variant='contained'
				sx={{
					background: '#1f7a8c',
					alignItems: 'center',
					justifyContent: 'center',
					':hover': {
						bgcolor: '#1f7a8c',
						color: 'white',
						alignItems: 'center',
						justifyContent: 'center',
					},
					size: 'small',
				}}
			>
				Confirm
			</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<>
						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<img src={image} alt='Student Image' />
						</Box>

						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Name: {firstName}
							{middleName}
							{lastName}
						</Typography>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Gender: {gender}
						</Typography>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Email: {email}
						</Typography>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							PhoneNumber: {phoneNumber}
						</Typography>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Faculty: {faculty}
						</Typography>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Department: {department}
						</Typography>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Date of Birth:
						</Typography>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							Location: {location}
						</Typography>
					</>
					<Box sx={{ display: 'flex', gap: '10px', marginLeft: '200px' }}>
						<Button
							variant='contained'
							onClick={() => {
								console.log('go back to register page')
								handleClose()
							}}
						>
							Back
						</Button>
						<Button
							variant='contained'
							onClick={() => {
								console.log('submitted')
							}}
						>
							Submit
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	)
}

export default BasicModal
