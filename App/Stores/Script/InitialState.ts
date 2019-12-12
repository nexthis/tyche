
export interface ScriptState {
    scripts: {
        title: string,
        code: string,
    }[];
}

export const SCRIPT_INITIAL_STATE: ScriptState = {
    scripts: [
        { code: 'STRING TEST', title: 'examle code' },
        { code: 'STRING TEST', title: 'Change Windows Wallpaper' },
        { code: 'STRING TEST', title: 'examle code 2' },
    ],
}