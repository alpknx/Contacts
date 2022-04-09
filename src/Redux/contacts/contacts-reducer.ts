import {ContactActionEnum, ContactsAction, ContactsState } from "./contacts-types";

const initialState: ContactsState = {
	contacts: [
		{
			name: 'Ant',
			number: '8968178200'
		}
	]
}

export default function ContactsReducer(state = initialState, action:ContactsAction): ContactsState{
	switch (action.type) {
		case ContactActionEnum.ADD_CONTACT: {
			return {...state, contacts: [...state.contacts, {name: action.name, number: action.number}]}
		}
		case ContactActionEnum.CHANGE_CONTACT: {
			return {...state, contacts: [...state.contacts, {name: action.name, number: action.number}]}
		}
		case ContactActionEnum.DELETE_CONTACT: {
			return {...state, contacts: [...state.contacts.filter(name => name !== action.payload)]}
		}
		
		default:
			return state;
	}
}