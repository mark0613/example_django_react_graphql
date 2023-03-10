import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class Cookie {
    static set(key, value) {
        cookies.set(key, value, {
            path: '/',
            secure: true,
            sameSite: true,
        });
    }

    static get(key) {
        return cookies.get(key);
    }

    static contains(key) {
        return Object.prototype.hasOwnProperty.call(cookies.getAll(), key);
    }

    static remove(key) {
        cookies.remove(key, { path: '/' });
    }
}
