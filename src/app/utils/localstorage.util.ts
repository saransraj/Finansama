export const localStorageUtil = {
    getLocalStorage: (key: string): any => {
        if (typeof window !== undefined && window.localStorage) {
            return window.localStorage[key];
        } else {
            return null;
        }
    },

    setLocalStorage: (key: string, value: string): any => {
        if (typeof window !== undefined && window.localStorage) {
            return window.localStorage.setItem(key, value);
        } else {
            return null;
        }
    },

    clearLocalStorage: (key: string) => {
        window.localStorage.removeItem(key);
    },

    clearAllLocalStorage: () => {
        window.localStorage.clear();
    }
};
