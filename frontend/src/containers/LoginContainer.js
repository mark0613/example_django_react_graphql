import { useDispatch, useSelector } from 'react-redux';

import { LoginForm } from '../components';
import {
    selectStatus,
    selectToken,
    setToken,
} from '../slices/authSlice';
import { Cookie } from '../utils/cookie';


export const LoginContainer = () => {
    const token = useSelector(selectToken);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    const onLogin = ({username, password}) => {
        dispatch(setToken({username, password}));
    };

    let isSuccessful = status.slice(0, 5) !== 'error';
    if (isSuccessful) {
        Cookie.set('token', token);
    }

    return <LoginForm fail={ !isSuccessful } onLogin={ onLogin } />
};
