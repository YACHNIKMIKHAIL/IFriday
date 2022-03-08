

export const loadIsLoggedIn = () => {
    try {
        const serializedIsloggedIn = localStorage.getItem('isLogged');
        if (serializedIsloggedIn === null) {
            return undefined;
        }
        return JSON.parse(serializedIsloggedIn);
    } catch (err) {
        return undefined;
    }
};

export const saveIsLoggedIn = (isLogged: boolean ) => {
    try {
        const serializedIsloggedIn = JSON.stringify(isLogged);
        localStorage.setItem('isLogged', serializedIsloggedIn);
    } catch {

    }
};