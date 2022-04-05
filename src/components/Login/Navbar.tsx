import { Layout, Menu} from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../router/routing'
import { useTypesSelector } from '../hooks/useTypesSelector'
import '../../App.css'
import { useActions } from '../hooks/useActions'

const Navbar:FC = () => {

	const router = useNavigate()
	const {isAuth} = useTypesSelector(state => state.auth);
	const {logout} = useActions()

	return (
		<Layout>
			<Header>
					<Menu className='header-menu' theme='dark' mode='horizontal' selectable={false}>
					{isAuth
					?
					<Menu.Item onClick={logout} key={1}>LOGOUT</Menu.Item>
					:
					<Menu.Item  onClick={()=> router(RouteNames.LOGIN)} key={1}>LOGIN</Menu.Item>
					}
					</Menu>
			</Header>
		</Layout>
	)
}

export default Navbar;
