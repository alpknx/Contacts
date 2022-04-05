import React, { useContext} from 'react'
import { ContextContacts } from './Contacts';
import { ActionType, Contact } from './stateType';

const ContactsList: React.FC = () => {

	// Получаем состояние и диспатч (названный changeState)
	const {state, changeState} = useContext(ContextContacts);

	const removeContact = (contactForRemoving: Contact) => {
		changeState!({type: ActionType.REMOVE, payload: contactForRemoving})
	}

	return (
		<div>
			<ul>
				{state!.contacts.map((contact, i)=>(
					<div key={i}>
						<div>
								{contact.name}
						</div>
						<div>
							<button onClick={()=>removeContact(contact)}>
								X
							</button>
						</div>
					</div>
				))}
            </ul>
		</div>
	)
}

export default ContactsList
