import { useDispatch, useSelector } from 'react-redux';

import { LoginForm } from '../components';
import {
    getToken,
    selectToken,
} from '../slices/authSlice';
import { Cookie } from '../utils/cookie';


export const LoginContainer = () => {
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    const onLogin = ({username, password}) => {
        dispatch(getToken({username, password}));
    };

    let isSuccessful = token.slice(0, 5) !== 'error';
    if (isSuccessful && token !== '') {
        Cookie.set('token', token);
    }

    return <LoginForm fail={ !isSuccessful } onLogin={ onLogin } />
};
