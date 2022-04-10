import { Avatar, Button, Col, List, Modal, Row } from 'antd';
import React, { FC, useContext, useState } from 'react';
import { ContactsActionCreators } from '../../Redux/contacts/action-creators';
import ContactsReducer from '../../Redux/contacts/contacts-reducer';
import { ContactsState } from '../../Redux/contacts/contacts-types';
import { useActions } from '../hooks/useActions';
import { IContact } from '../models/IContact';
import ContactForm from './ContactForm';
import '../../App.css'

const ContactsList: FC<ContactsState> = (props) => {

	const [modalVisible, setModalVisible] = useState(false)
	const [contactName, setContactName] = useState('')
   const [number, setNumber] = useState('')
	const {deleteContact} = useActions() 
	const {changeContact} = useActions() 
	const deleteSubmit = () => {
		deleteContact({contactName, number})
	}
	return (
		<List
		itemLayout="horizontal"
		dataSource={props.contacts}
		renderItem={item => (
				<List.Item className='contacts-item'>
					<List.Item.Meta
						avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
						title={<a href="https://ant.design">{item.contactName}</a>}/>
					<List.Item.Meta
						title={<a href="https://ant.design">{item.number}</a>}/>
					<Button onClick={()=> setModalVisible(true)}>
						Change Contact
					</Button>
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
