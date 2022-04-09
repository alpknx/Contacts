import { Dispatch } from 'react';
import { Action } from 'redux';
import {IContact} from '../../components/models/IContact'

export type Contacts = IContact[];

export interface ContactsState {
	contacts: Contacts;
}

export enum ContactActionEnum {
	ADD_CONTACT = "ADD_CONTANCT",
	CHANGE_CONTACT = "CHANGE_CONTANCT",
	DELETE_CONTACT = "DELETE_CONTANCT",
}

type ActionStringPayload = {
   type: ContactActionEnum.ADD_CONTACT | ContactActionEnum.CHANGE_CONTACT,
	name: string,
	number: string

}

type ActionObjectPayload = {
   type: ContactActionEnum.DELETE_CONTACT,
   payload: IContact;
}

export interface AddContactAction {
	type: ContactActionEnum.ADD_CONTACT;
	payload: IContact;
}

export interface ChangeContactAction {
	type:ContactActionEnum.CHANGE_CONTACT;
	payload: IContact;
}
export interface DeleteContactAction {
	type: ContactActionEnum.DELETE_CONTACT
	payload: IContact;

}

export type ContactsAction =
	ActionStringPayload |
	ActionObjectPayload 
	
