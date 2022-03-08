

export const loadToken = () => {
    try {
        const serializedToken = localStorage.getItem('token');
        if (serializedToken === null) {
            return undefined;
        }
        return JSON.parse(serializedToken);
    } catch (err) {
        return undefined;
    }
};

export const saveToken = (token: string|null ) => {
    try {
        const serializedToken = JSON.stringify(token);
        localStorage.setItem('token', serializedToken);
    } catch {

    }
};