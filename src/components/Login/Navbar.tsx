import { Layout, Menu} from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router/routing'
import { useTypesSelector } from '../hooks/useTypesSelector'
import '../../App.css'

const Navbar:FC = () => {

	const router = useNavigate()
	const {isAuth} = useTypesSelector(state => state.auth);

	return (
		<Layout>
			<Header>
					<Menu className='header-menu' theme='dark' mode='horizontal' selectable={false}>
					{isAuth
					?
					<Menu.Item onClick={() => router(RouteNames.LOGIN)} key={1}>LOGOUT</Menu.Item>
					:
					<Menu.Item  onClick={()=> router(RouteNames.LOGIN)} key={1}>LOGIN</Menu.Item>
					}
					</Menu>
			</Header>
		</Layout>
	)
}

export default Navbar;
function useTypedSelector(arg0: (state: any) => any): { isAuth: any } {
	throw new Error('Function not implemented.')
}

