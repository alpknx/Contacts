import { Button, Form, Input, Layout, Modal, Row } from 'antd';
import React from 'react';
import { FC, useState } from 'react'
import { useTypesSelector } from '../hooks/useTypesSelector';
import ContactForm from './ContactForm';
import ContactsList from './ContactsLIst';


const ContactsPage: FC = () => {
	const contacts = useTypesSelector(state => state.contacts.contacts);
	const contact = useTypesSelector(state => state.contacts.contact);
	const [searchQuery, setSearchQuery] = useState('');

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
		<Layout>
			<Form>
			<Form.Item>
			<Input value={searchQuery} placeholder="Search..."
                  onChange={e => setSearchQuery(e.target.value)} />
			</Form.Item>
			</Form>
			<ContactsList contacts={contacts} contact={contact}/>
			<Row justify='center'>
				<Button type="primary" onClick={showModal}>
					Add Contact
				</Button>
			</Row>
			<Modal title="add Contact" visible={visible} 
							onOk={handleOk}
							confirmLoading={confirmLoading}
							onCancel={handleCancel}>
				<ContactForm/>
			</Modal>

		</Layout>
	)
}

export default ContactsPage;
