//Создаём редьюсер, принимающий на вход текущий стейт и объект Action с полями type и payload, тип возвращаемого редьюсером значения - State
import { State, Action, ActionType } from "../../components/Contacts/stateType";

export const contactReducer:  React.Reducer<State, Action> = (state, action):State=> {
	switch (action.type) {
		case ActionType.ADD: {
			return {...state, contacts: [...state.contacts, {
						name: action.name,
					}]}
		}
		case ActionType.CHANGE: {
			return {...state, newName: action.name}
		}
		case ActionType.REMOVE: {
			return {...state, contacts:  [...state.contacts.filter(name => name !== action.payload)]}
		}
		default: throw new Error('Unexpected action');
	}
};
