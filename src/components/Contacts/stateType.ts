import {Dispatch} from "react";

// Созданная задача имеет название и статус готовности
export type Contact = {
	name: string;
}

export type Contacts = Contact[];

// В состоянии хранится записываемая в инпут новая задача, а также массив уже созданных задач
export type State = {
	newName: string;
	contacts: Contacts;
}

// Все возможные варианты действий со стейтом
export enum ActionType {
	ADD = 'ADD',
	CHANGE = 'CHANGE',
	REMOVE = 'REMOVE'
}

// Для действий ADD и CHANGE доступна передача только строковых и цифровых значений
type ActionStringPayload = {
   type: ActionType.ADD | ActionType.CHANGE,
	name: string,

}

// Для действий TOGGLE и REMOVE доступна передача только объекта типа Contact
type ActionObjectPayload = {
   type: ActionType.REMOVE,
   payload: Contact
}

// Объединяем предыдущие две группы для использования в редьюсере
export type Action = ActionStringPayload | ActionObjectPayload;

// Наш контекст состоит из стейта и функции-редьюсера, в которую будут передаваться Action. Тип Dispatch импортируется из библиотеки react
export type ContextState = {
   state: State;
   changeState: Dispatch<Action>
}