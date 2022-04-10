import { Avatar, Button, List, Modal } from 'antd';
import { FC, useState } from 'react';
import { ContactsState} from '../../Redux/contacts/contacts-types';
import { useActions } from '../hooks/useActions';
import '../../App.css'
import ChangeForm from './ChangeForm';
import { IContact } from '../models/IContact';
import React from 'react';

const ContactsList: FC<ContactsState> = (props) => {
	const [contact, setContact] = useState<IContact>({
		id: 0,
		contactName: '',
		number: ''
	} as IContact);

	const {deleteContact} = useActions()

	const [visible, setVisible] = React.useState(false);
  	const [confirmLoading, setConfirmLoading] = React.useState(false);

 	 const showModal = () => {
    setVisible(true);
  };

  	const handleOk = () => {
    setConfirmLoading(true);
	 setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  	};

  	const handleCancel = () => {
    setVisible(false);
  	};
	
	return (
		<List
		itemLayout="horizontal"
		dataSource={props.contacts}
		renderItem={item => (
				<List.Item className='contacts-item'>
					<List.Item.Meta key={item.id}
						avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
						title={<a href="https://ant.design">{item.contactName}</a>}/>
					<List.Item.Meta
						title={<a href="https://ant.design">{item.number}</a>}/>
					<Button type="primary" onClick={showModal}>
						Change Contact
					</Button>
					<Modal title="change Contact" visible={visible} 
							onOk={handleOk}
							confirmLoading={confirmLoading}
							onCancel={handleCancel}>
						<ChangeForm contact={item} contacts={props.contacts}/>
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
