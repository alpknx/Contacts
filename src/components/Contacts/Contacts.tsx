import {Layout} from 'antd';
import React, { FC, useReducer} from 'react';
import {Action, State, ContextState, ActionType} from "./stateType";
import NewContact from './NewContact';
import ContactsList from './ContactsLIst';
import { contactReducer } from '../../Redux/contacts/contacts-reducer';

// Начальные значения стейта
export const initialState: State = {
	newName: '',
	contacts: []
}

// <Partial> позволяет создать контекст без дефолтных значений
export const ContextContacts = React.createContext<Partial<ContextState>>({});

//Создаём редьюсер, принимающий на вход текущий стейт и объект Action с полями type и payload, тип возвращаемого редьюсером значения - State

const Contacts: FC = () => {
	// Используем созданный todoReducer, передав его аргументом в useReduser. Изначально в стейт попадёт initialState, и далее при диспатче (changeState) будет обновляться.
	const [state, changeState] = useReducer<React.Reducer<State, Action>>(contactReducer, initialState);

		const ContextState: ContextState = {
			state,
			changeState
		};

 	 // Передаём в контекст результаты работы useReducer - стейт и метод его изменения
	return (
		<Layout>
			<ContextContacts.Provider value={ContextState}>
				<NewContact />
				<ContactsList />
			</ContextContacts.Provider>
		</Layout>
	)
}
	
export default Contacts;
