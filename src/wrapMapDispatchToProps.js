import {
	bindActionCreators
} from 'redux'
import parseName from './parseName'

export default function wrapMapDispatchToProps(fullName, actionCreators, reducer) {
	const parsedName = parseName(fullName),
		wrapActionCreators = {},
		keys = Object.keys(actionCreators)

	for (let i = 0; i < keys.length; i++) {
		let key = keys[i]
		let wrapActionCreator = wrapAction(actionCreators[key], 
			reducer, parsedName.fullName, parsedName.name, 
			parsedName.query, parsedName.params)
		wrapActionCreators[key] = wrapActionCreator
	}

	return dispatch => {
		return {...bindActionCreators(wrapActionCreators, dispatch)
		}
	}
}

function wrapAction(actionCreator, reducer, fullName, name, query, params) {
	return (...args) => {
		return function() {
			return {
				fullName,
				name,
				query,
				params,
				actionCreator,
				reducer,
				args
			}
		}
	}
}