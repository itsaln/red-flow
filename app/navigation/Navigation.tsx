import { FC } from 'react'
import { Text, View } from 'react-native'
import { useAuth } from '@/hooks/useAuth'

const Navigation: FC = () => {
	const { user } = useAuth()

	return (
		<View>
			<Text>Navigation</Text>
		</View>
	)
}

export default Navigation
