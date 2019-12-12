import { ActionCreators, createActions } from 'reduxsauce';

export enum ScriptTypes {
    ADD_SCRIPT = "ADD_SCRIPT",
    REMOVE_SCRIPT = "REMOVE_SCRIPT",
}

interface C extends ActionCreators {
    addScript: (script:object) =>  { type: ScriptTypes.ADD_SCRIPT };
    removeScript: (script:object) =>  { type: ScriptTypes.REMOVE_SCRIPT };
}

const CreatedActions = createActions( {
    addScript: ['script'],
    removeScript: ['script'],
});


export default CreatedActions.Creators as C