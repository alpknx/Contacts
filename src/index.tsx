import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { reduxStore } from './Redux/redux-store';
import reportWebVitals from './reportWebVitals';

	createRoot(document.getElementById('root')!)
	.render(
		<Provider store={reduxStore}>
			<App />
		</Provider>
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
