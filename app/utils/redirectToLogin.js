
import history from 'utils/history';
const token = localStorage.getItem('token');

const redirectToLogin = () => {

    if (!token) {
        history.push("/login")

    }
}

export {redirectToLogin}
