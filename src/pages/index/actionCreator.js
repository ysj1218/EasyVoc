import { CHANGE_INDEX, GET_FIRENTLINK } from './actionTypes';

export const getIndexAction = (value) => ({
	type: CHANGE_INDEX,
	value: value
})

export const getfriendListAction = (value) => ({
	type: GET_FIRENTLINK,
	value: value
})
