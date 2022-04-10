import ContactForm from "../../components/Contacts/ContactForm";
import { IContact } from "../../components/models/IContact";
import { AddContactAction, ChangeContactAction, ContactActionEnum,DeleteContactAction, setContactAction } from "./contacts-types";


export const ContactsActionCreators = {
	addContact: (contact: IContact): AddContactAction => 
	({type: ContactActionEnum.ADD_CONTACT,  id: contact.id, contactName: contact.contactName, number: contact.number}),

	setContact: (contacts: IContact[]): setContactAction => 
	({type: ContactActionEnum.SET_CONTACTS, payload: contacts}),

	changeContact: (contact: IContact): ChangeContactAction => 
	({type: ContactActionEnum.CHANGE_CONTACT, id: contact.id, contactName: contact.contactName, number: contact.number}),

	deleteContact: (contact: IContact): DeleteContactAction => 
	({type: ContactActionEnum.DELETE_CONTACT, payload: contact}),
}