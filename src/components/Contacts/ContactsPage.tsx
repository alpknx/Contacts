import { Button, Form, Input, Layout, Modal, Row } from 'antd';
import React, { FC, useState } from 'react'
import { useTypesSelector } from '../hooks/useTypesSelector';
import { IContact } from '../models/IContact';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';

const ContactsPage: FC = () => {

	const [modalVisible, setModalVisible] = useState(false)
	const contacts = useTypesSelector(state => state.contacts.contacts);
	const contact = useTypesSelector(state => state.contacts.contact);
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<Layout>
			<Form>
			<Form.Item>
			<Input value={searchQuery} placeholder="Search..."
                  onChange={e => setSearchQuery(e.target.value)} />
			</Form.Item>
			</Form>
			<ContactsList contacts={contacts} contact={contact}/>
			<Row justify='center'>
				<Button onClick={()=> setModalVisible(true)}>
					Add Contact
				</Button>
			</Row>
			<Modal title="add Contact" visible={modalVisible} footer={null} onCancel={()=> setModalVisible(false)}>
				<ContactForm/>
			</Modal>

		</Layout>
	)
}

export default ContactsPage;
