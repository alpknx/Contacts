import { Button, Form, Input } from 'antd'
import { FC, useState } from 'react'
import { ContactsState } from '../../Redux/contacts/contacts-types'
import { useActions } from '../hooks/useActions'
import { rules } from '../utils/utils'


const ChangeForm: FC<ContactsState> = (props) => {
	
	const [contactName, setContactName] = useState(props.contact.contactName)
   const [number, setNumber] = useState(props.contact.number)
	const [id, setId] = useState(props.contact.id)
	const {changeContact} = useActions()
	const submit = () => {
		changeContact({id, contactName, number})

	}
	
	return (
		<Form onFinish={submit}>
			<Form.Item
			label="Contact name"
			name="contact name"
			rules={[rules.required('Please input contact name!')]}
		>
			<Input value={props.contact.contactName}
                  onChange={e => setContactName(e.target.value)} />
		</Form.Item>

		<Form.Item
			label="Number"
			name="number"
			rules={[rules.required('Please input number!')]}
		>
			<Input value={props.contact.number}
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

export default ChangeForm;
