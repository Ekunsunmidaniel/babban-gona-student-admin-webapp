import '../signIn/index.css'
import { Typography, Box } from '@mui/material'
import './signup.css'
// import SignupForm from './SignupForm.jsx'
import { Logo } from '../../../assets/Svg.jsx'

function signup() {
	return (
		<Box
			sx={{
				display: 'flex',
				// flexDirection: "column",
				justifyContent: 'center',
				alignItems: 'center',
				// width: "1440px",
				// height: 789,
				// m: "auto",
				padding: '98px 392px 99px 392px',
				background: 'var(--Grey-5, #FCFAFA)',
				height: '100%',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '1440px',
					// height: "auto",
					// m: "auto",
					gap: '10px',
					background: '#fff',
				}}
			>
				<Box>
					<Logo />
				</Box>
				<Box>
					<Typography
						variant='subtitle1'
						sx={{
							width: '665px',
							fontSize: '36px',
							textAlign: 'center',
						}}
					>
						Welcome, Signup to Digi Reg
					</Typography>
				</Box>
				{/* <SignupForm
					sx={{
						width: '512px',
						height: '494px',
						background: '#FFF',
					}}
				/> */}
			</Box>
		</Box>
	)
}

export default signup
