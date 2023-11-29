import React from 'react'
import { TextField, Box, Grid, Button, CircularProgress } from '@mui/material'
import { useFormik } from 'formik'
import { signinValidationSchema } from '../../../schemaValidation'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext.jsx'

const SigninForm = () => {
	// eslint-disable-next-line no-unused-vars
	const [initialValues, setInitialValues] = React.useState({})
	const { setIsLoggedIn } = useContext(AuthContext)

	const formik = useFormik({
		initialValues: initialValues,
		enableReinitialize: true,
		// onSubmit: handleSignin,
		validationSchema: signinValidationSchema,
	})

	const { values, isSubmitting, handleBlur, handleChange, touched, errors, isValid, submitCount } = formik

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
		}
	}

	const navigate = useNavigate()

	const handleSignin = () => {
		if (values.username === 'Admin' && values.password === 'Admin@01') {
			console.log('navigate to dashboard check')
			setIsLoggedIn(true)
			navigate('/dashboard')
		} else {
			alert('Invalid Credentials')
		}
	}

	return (
		<Box component='div' sx={{ my: 2 }}>
			<form onSubmit={(e) => e.preventDefault()}>
				<Grid container direction='column' spacing={3}>
					<Grid item sm={12} md={6}>
						<TextField
							{...getProps('username')}
							label='Username'
							sx={{
								width: '248px',
								height: '42px',
								flexshrink: '0',
							}}
						/>
					</Grid>
					<Grid item sm={12} md={6}>
						<TextField
							{...getProps('password')}
							label='Password'
							type='password'
							sx={{
								width: '248px',
								height: '42px',
								flexshrink: '0',
							}}
						/>
					</Grid>
				</Grid>
				<Grid container sx={{ mt: 2 }} justifyContent='right'>
					<Grid item sm={12} md={2}>
						<Button
							disabled={isSubmitting || !isValid}
							type='submit'
							size='small'
							color='primary'
							variant='contained'
							fullWidth
							startIcon={isSubmitting ? <CircularProgress size='1rem' className='mr-1' /> : null}
							onClick={handleSignin}
						>
							{isSubmitting ? 'Submitting' : 'Submit'}
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	)
}

export default SigninForm
