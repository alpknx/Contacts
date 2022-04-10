import { Avatar, Button, List, Modal } from 'antd';
import { FC, useState } from 'react';
import { ContactsState} from '../../Redux/contacts/contacts-types';
import { useActions } from '../hooks/useActions';
import '../../App.css'
import ChangeForm from './ChangeForm';
import { IContact } from '../models/IContact';

const ContactsList: FC<ContactsState> = (props) => {

	const [modalVisible, setModalVisible] = useState(false)
	const [contact, setContact] = useState<IContact>({
		id: 0,
		contactName: '',
		number: ''
	} as IContact);
	const {deleteContact} = useActions()
	
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
					<Button onClick={()=> setModalVisible(true)}>
						Change Contact
					</Button>
					<Modal title="change Contact" visible={modalVisible} footer={null} onCancel={()=> setModalVisible(false)}>
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
