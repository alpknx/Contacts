import { Button, Form, Input } from 'antd'
import { FC, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { IContact } from '../models/IContact'
import { rules } from '../utils/utils'


const ContactForm: FC = () => {
	const [contactName, setContactName] = useState('')
   const [number, setNumber] = useState('')
	const [id, setId] = useState(0)
	const {addContact} = useActions()
	const submit = () => {
		addContact({id,contactName, number})

	}
	return (
		<Form onFinish={submit}>
			<Form.Item
			label="Contact name"
			name="contact name"
			rules={[rules.required('Please input contact name!')]}
		>
			<Input value={contactName}
                  onChange={e => setContactName(e.target.value)} />
		</Form.Item>

		<Form.Item
			label="Number"
			name="number"
			rules={[rules.required('Please input number!')]}
		>
			<Input value={number}
                  onChange={e => setNumber(e.target.value)} type={"text"}/>
		</Form.Item>
		<Form.Item>
			<Button type="primary" htmlType="submit">
				Submit
			</Button>
		</Form.Item>
		</Form>
	)
}

export default ContactForm;