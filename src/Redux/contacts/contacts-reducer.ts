import {ContactActionEnum, ContactsAction, ContactsState } from "./contacts-types";

const initialState: ContactsState = {
	contacts: []
}

export default function ContactsReducer(state = initialState, action:ContactsAction): ContactsState{
	switch (action.type) {
		case ContactActionEnum.ADD_CONTACT: {
			let newContact = {
				contactName: action.contactName, number: action.number
			}
			return {...state, contacts: [...state.contacts, newContact]}
		}
		case ContactActionEnum.SET_CONTACTS: {
			return {...state, contacts: [...action.payload]}
		}
		case ContactActionEnum.CHANGE_CONTACT: {
			return{...state, contacts:[...state.contacts]}
		}
		case ContactActionEnum.DELETE_CONTACT: {
			return {...state, contacts: [...state.contacts.filter(contactName => contactName !== action.payload)]}
		}
		
		default:
			return state;
	}
}