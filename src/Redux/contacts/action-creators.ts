import { IContact } from "../../components/models/IContact";
import { AddContactAction, ChangeContactAction, ContactActionEnum, DeleteContactAction } from "./contacts-types";


export const ContactsActionCreators = {
	addContact: (contact: IContact): AddContactAction => ({type: ContactActionEnum.ADD_CONTACT, payload: contact}),
	changeContact: (contact: IContact): ChangeContactAction => ({type: ContactActionEnum.CHANGE_CONTACT, payload: contact}),
	deleteContact: (contact: IContact): DeleteContactAction => ({type: ContactActionEnum.DELETE_CONTACT, payload: contact})
}