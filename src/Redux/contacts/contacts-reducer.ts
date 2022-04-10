import {ContactActionEnum, ContactsAction, ContactsState } from "./contacts-types";

const initialState: ContactsState = {
	contacts: [
		{
			id: 1,
			contactName: 'Alexey',
			number: '91384378302'
		},
		{
			id: 2,
			contactName: 'Dima',
			number: '913843742'
		},
	],
	contact: {
		id: 0 ,
		contactName: '',
		number:''
	}
}

export default function ContactsReducer(state = initialState, action:ContactsAction): ContactsState{
	switch (action.type) {
		case ContactActionEnum.ADD_CONTACT: {
			let newContact = {
				id: 3, contactName: action.contactName, number: action.number
			}
			return {...state,
					 contacts: [...state.contacts, newContact],		
					}
		}
		case ContactActionEnum.SET_CONTACTS: {
			return {...state, contacts: [...action.payload]}
		}
		case ContactActionEnum.CHANGE_CONTACT: {
			return{...state, 
				contacts: [...state.contacts.map( contact => {
					if(contact.id !== action.id) {
						return contact
					}
					return {
						...contact,
						contactName: action.contactName,
						number: action.number
					}

					}) 
				]
			}
		}
		
		case ContactActionEnum.DELETE_CONTACT: {
			return {...state, contacts: [...state.contacts.filter(contactName => contactName !== action.payload)]}
		}
		
		default:
			return state;
	}
}