import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useState } from 'react'
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';

const Contacts: FC = () => {

	const [modalVisible, setModalVisible] = useState(false)

	return (
		<Layout>
			<ContactsList contacts={[]}/>
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

export default Contacts;