import { Typography, Box, Grid } from '@mui/material'
import FacultyIcon from '../../assets/faculty.png'
import DepartmentIcon from '../../assets/Department.png'
import BasicBars from './chart/Chart'
import BasicPie from './chart/PieChart'
import HorizontalBars from './chart/LayoutChart'

const Dashboard = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				width: '1199px',
				height: '723px',
				// position: "fixed",
				left: '241px',
				top: '64px',
				background: '#fff',
			}}
		>
			<Grid container height='100%'>
				<Grid
					xs={6}
					items
					sx={{
						display: 'flex',
						flexDirection: 'column',
						// background: "#FF0000",
						padding: '10px',
					}}
				>
					<Grid
						items
						sx={{
							display: 'flex',
							flexDirection: 'column',
							// background: "#FF0",
							height: '100%',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								// justifyContent: "space-between",
								gap: '10px',
							}}
						>
							{' '}
							<Typography
								sx={{
									display: 'flex',
									color: '#808191',
									fontFamily: 'Roboto',
									fontSize: '45px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '16.8px',
									textAlign: 'center',
									alignItems: 'center',
								}}
							>
								Faculties
							</Typography>
							<Box sx={{ width: '58px', height: '59px' }}>
								<img src={FacultyIcon} alt='Student' style={{ width: '100%', height: 'auto' }} />
							</Box>
						</Box>
						<Box>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Engineering
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Science
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Arts
							</Typography>
						</Box>
					</Grid>
					<Grid
						items
						sx={{
							display: 'flex',
							flexDirection: 'column',
							// background: "	#00FF00",
							height: '100%',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								// justifyContent: "space-between",
								gap: '10px',
							}}
						>
							{' '}
							<Typography
								sx={{
									display: 'flex',
									color: '#808191',
									fontFamily: 'Roboto',
									fontSize: '45px',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '16.8px',
									textAlign: 'center',
									alignItems: 'center',
								}}
							>
								Departments
							</Typography>
							<Box sx={{ width: '58px', height: '59px' }}>
								<img src={DepartmentIcon} alt='Student' style={{ width: '100%', height: 'auto' }} />
							</Box>
						</Box>
						<Box>
							{' '}
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Mechanical Engineering
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Software Engineering
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Computer Science
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Agricultural Science
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								People and Culture
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Product Design
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Materials Engineering
							</Typography>
							<Typography
								sx={{
									fontFamily: 'Roboto',
									color: '#000',
									fontSize: '18px',
								}}
							>
								Machine Learning
							</Typography>
						</Box>
					</Grid>
				</Grid>

				<Grid xs={6} items sx={{ columnGap: '20px' }}>
					<Grid item>
						<BasicBars />
					</Grid>
					<Grid item>
						<BasicPie />
					</Grid>
					<Grid item>
						<HorizontalBars />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Dashboard
