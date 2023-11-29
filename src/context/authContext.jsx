import { useMemo } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
})

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn])

	return (
		<AuthContext.Provider value={value}>
			{useMemo(
				() => (
					<>{children}</>
				),
				[]
			)}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProvider }
