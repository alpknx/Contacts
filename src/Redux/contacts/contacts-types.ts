import {IContact} from '../../components/models/IContact'


export interface ContactsState {
	contacts: IContact[];
}

export enum ContactActionEnum {
	ADD_CONTACT = "ADD_CONTANCT",
	SET_CONTACTS = "SET_CONTACTS",
	CHANGE_CONTACT = "CHANGE_CONTANCT",
	DELETE_CONTACT = "DELETE_CONTANCT",
}

export interface AddContactAction {
	type: ContactActionEnum.ADD_CONTACT;
	contactName: string,
	number: string

}
export interface setContactAction {
	type: ContactActionEnum.SET_CONTACTS;
	payload: IContact[]
}

export interface ChangeContactAction {
	type:ContactActionEnum.CHANGE_CONTACT;
	payload: IContact
}

export interface DeleteContactAction {
	type: ContactActionEnum.DELETE_CONTACT
	payload: IContact;

}

export type ContactsAction =
	AddContactAction |
	setContactAction |
	ChangeContactAction |
	DeleteContactAction
	
