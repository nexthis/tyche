import {ScriptState,SCRIPT_INITIAL_STATE} from './InitialState'
import { createReducer } from 'reduxsauce'
import {ScriptTypes} from './Actions'

export const addScript = (state:ScriptState,payload: any) => ({
    ...state,
    scripts: [...state.scripts,payload.script]
})
export const removeScript = (state:ScriptState,payload: any) => ({
    ...state,
    scripts: state.scripts.filter(arrayItem => arrayItem !== payload.script)
})
export const reducer = createReducer(SCRIPT_INITIAL_STATE,{
    [ScriptTypes.ADD_SCRIPT]: addScript,
    [ScriptTypes.REMOVE_SCRIPT]: removeScript
})