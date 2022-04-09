import { Avatar, Button, List, Modal, Row } from 'antd';
import React, { FC, useContext, useState } from 'react';
import { ContactsActionCreators } from '../../Redux/contacts/action-creators';
import ContactsReducer from '../../Redux/contacts/contacts-reducer';
import { IContact } from '../models/IContact';
import ContactForm from './ContactForm';

interface ContactProps {
	contacts: IContact[]
}

const ContactsList: FC<ContactProps> = (props) => {

	const [modalVisible, setModalVisible] = useState(false)
	
	const deleteContact = (contactForDeleting: IContact) => {
		ContactsActionCreators.deleteContact(contactForDeleting)   
	}

	return (
		<List
		itemLayout="horizontal"
		dataSource={props.contacts}
		renderItem={item => (
			<List.Item>
				{props.contacts.map(contact => 
					<><List.Item.Meta
						avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
						title={<a href="https://ant.design">{contact.name}</a>} /><List.Item.Meta
							title={<a href="https://ant.design">{contact.number}</a>} /></>
					
				)}
				
				<Row justify='center'>
					<Button onClick={()=> setModalVisible(true)}>
						Change Contact
					</Button>
				</Row>
				<Modal title="change Contact" visible={modalVisible} footer={null} onCancel={()=> setModalVisible(false)}>
					<ContactForm/>
				</Modal>
				<Button onClick={()=> deleteContact(item)}>
						Delete Contact
					</Button>
			</List.Item>
		)}
		/>
	)
}

export default ContactsList;
