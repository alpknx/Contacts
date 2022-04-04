import React, { FC } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { Layout } from 'antd';
import Navbar from './components/Login/Navbar';

const App: FC = () => {
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
