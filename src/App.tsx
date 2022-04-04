import React, { FC, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { Layout } from 'antd';
import Navbar from './components/Login/Navbar';
import { IUser } from './components/models/IUser';
import { useActions } from './components/hooks/useActions';

const App: FC = () => {

	const {setUser, setIsAuth} = useActions();

	useEffect(() => {
		if(localStorage.getItem('auth')) {
			setUser({username: localStorage.getItem('username' || '')} as IUser)
			setIsAuth(true);
		}
	}, [])

	return (
		<BrowserRouter>
			<Layout>
				<Navbar/>
				<Layout.Content>
					<AppRouter/>
				</Layout.Content>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
