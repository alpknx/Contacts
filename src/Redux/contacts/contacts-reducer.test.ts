import { IContact } from '../../components/models/IContact';
import ContactsReducer from './contacts-reducer';
import { ContactActionEnum, ContactsAction, ContactsState } from './contacts-types';

describe('contactReducer',()=>{
    it('returns new state for "ADD_CONTACT" type', () => {
		const contact: IContact = {
			id: 1,
			contactName: 'alexey',
			number: '7345689723'
		} 
// Создаём стейт с пустым массивом 
        const initialState: ContactsState = {
			  contacts: [],
			  contact: {
				id: 0 ,
				contactName: '',
				number:''
			}
		  };
// Создаём действие 'ADD' и передаём в него объект
        const updateAction: ContactsAction = 
		  {type: ContactActionEnum.ADD_CONTACT,  id: contact.id, contactName: contact.contactName, number: contact.number};
// Вызываем редьюсер с переданными стейтом и экшеном
        const updatedState = ContactsReducer(initialState, updateAction);
// Ожидаем получить в стейте добавленный объект
        expect(updatedState).toEqual({id: contact.id, contactName: contact.contactName, number: contact.number});
    });

	 it('returns new state for "DELETE_CONTACT" type', () => {

		const contact: IContact = {
			id: 1,
			contactName: 'alexey',
			number: '7345689723'
		} 
// Создаём стейт с пустым массивом 
        const initialState: ContactsState = {
			  contacts: [],
			  contact: {
				id: 0 ,
				contactName: '',
				number:''
			}
		  };
// Создаём действие 'DELETE' и передаём в него объект 
        const updateAction: ContactsAction = 
		  {type: ContactActionEnum.DELETE_CONTACT,  payload: contact};
// Вызываем редьюсер с переданными стейтом и экшеном
        const updatedState = ContactsReducer(initialState, updateAction);
// Ожидаем удаление объекта из стейта
        expect(updatedState).toEqual({});
    });

   

   //  it('returns new state for "TOGGLE" type', () => {
   //      const task: Task = {name: 'new task', isDone: false}
   //      const initialState: State = {newTask: '', tasks: [task]};
   //      const updateAction: Action = {type: ActionType.TOGGLE, payload: task};
   //      const updatedState = todoReducer(initialState, updateAction);
   //      expect(updatedState).toEqual({newTask: '', tasks: [{name: 'new task', isDone: true}]});
   //  });

   //  it('returns new state for "CHANGE" type', () => {
   //      const initialState: State = {newTask: '', tasks: []};
   //      const updateAction: Action = {type: ActionType.CHANGE, payload: 'new task'};
   //      const updatedState = todoReducer(initialState, updateAction);
   //      expect(updatedState).toEqual({newTask: 'new task', tasks: []});
   //  });
})
