import React from "react";
import Contacts from "../Contacts/Contacts";
import Login from "../Login/Login";

export interface IRoute {
	path: string;
	element: React.ElementType;
}

export enum RouteNames {
	LOGIN = '/login',
	CONTACTS = '/'
}

export const publicRoutes: IRoute[] = [
	{path: RouteNames.LOGIN, element: Login}
]

export const privateRoutes: IRoute[] = [
	{path: RouteNames.CONTACTS, element: Contacts}
]
