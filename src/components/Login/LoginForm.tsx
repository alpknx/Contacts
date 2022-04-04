import { Button, Form, Input } from 'antd'
import React, {FC, useState} from 'react'
import { useActions } from '../hooks/useActions';
import { useTypesSelector } from '../hooks/useTypesSelector';
import { rules } from '../utils/utils';

const LoginForm:FC = () => {

	const {error, isLoading} = useTypesSelector(state => state.auth);
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const {login} = useActions()

	const submit = () => {
		login(username, password)
	}

	return (
		<Form
			onFinish={submit}
		>
			<Form.Item
			label="Username"
			name="username"
			rules={[rules.required('Please input your username!')]}
		>
			<Input value={username}
                  onChange={e => setUsername(e.target.value)} />
		</Form.Item>

		<Form.Item
			label="Password"
			name="password"
			rules={[rules.required('Please input your password!')]}
		>
			<Input.Password value={password}
                  onChange={e => setPassword(e.target.value)} type={"password"}/>
		</Form.Item>

		<Form.Item>
			<Button type="primary" htmlType="submit">
				Submit
			</Button>
		</Form.Item>
		</Form>
	)
}

export default LoginForm;
