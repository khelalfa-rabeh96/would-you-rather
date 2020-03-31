import thunk from "redux"
import logger from './logger'

import {applyMiddleware} from 'redux'

export default applyMiddleware(
	thunk,
	logger,
)