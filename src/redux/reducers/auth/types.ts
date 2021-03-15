export const UPDATE_AUTH = "UPDATE_AUTH";
interface UpdateAuthAction
{
    type: typeof UPDATE_AUTH,
    payload: {
        loggedIn: boolean;
        session: string;
        userName: string;
    };
}

export type AuthActionTypes = UpdateAuthAction;