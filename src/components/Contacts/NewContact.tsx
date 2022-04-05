import { Button, Form, Input, Layout } from 'antd';
import * as React from 'react';
import {FC, useContext} from "react";
import {ContextContacts} from "./Contacts";

import {Contact, contactName} from "./contactType";
import {ActionType} from "./stateType";

const NewContact: React.FC = () => {
// получаем state и dispatch-метод
   const {state, changeState} = useContext(ContextContacts);

	const addContact = (event: React.FormEvent<HTMLFormElement>, contact:contactName) => {
		event.preventDefault();
		changeState!({type: ActionType.ADD, name: contact})
		changeState!({type: ActionType.CHANGE, name: contact})
	}

	const changeContact = (event: React.ChangeEvent<HTMLInputElement>) => {
		changeState!({type: ActionType.CHANGE, name: event.target.value})
	}


	return (
		<div>
			<form onSubmit={(event)=>addContact(event, state!.newName)}>
               <input type='text' onChange={(event)=>changeContact(event)} value={state!.newName}/>
               <button type="submit">Add Contact </button>
            </form>
		</div>
	)
};

export default NewContact;
