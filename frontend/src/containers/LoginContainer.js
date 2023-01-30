import { useDispatch, useSelector } from 'react-redux';

import { LoginForm } from '../components';
import { selectStatus, selectToken, setToken } from '../slices/authSlice';
import { Cookie } from '../utils/cookie';

export const LoginContainer = () => {
    const token = useSelector(selectToken);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    const onLogin = ({ username, password }) => {
        dispatch(setToken({ username, password }));
    };

    if (status === 'ok') {
        Cookie.set('token', token);
        alert('登入成功!');
        window.history.back();
    }

    return <LoginForm fail={status.startsWith('error')} onLogin={onLogin} />;
};
