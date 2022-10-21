import { IRoute } from '@/navigation/navigation.types'
import { Auth, Home, Profile, Settings, Statistics } from '@/components/screens'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Settings',
		component: Settings
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Statistics',
		component: Statistics
	}
]
