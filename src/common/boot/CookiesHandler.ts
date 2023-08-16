import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();

const createCookie = (
  cookie = {
    name: '',
    value: '',
    expiresIn: '1h',
  }
) => {
  cookies.set(cookie.name, cookie.value, cookie.expiresIn)
};

const returnCookie = (name: string) => {
  const token = cookies.get(name);
  return token;
};

const cookieIsValid = (name: string) => {
  return cookies.get(name);
};

const removeCookie = (name: string) => {
  return cookies.remove(name);
}

export {
  createCookie,
  returnCookie,
  cookieIsValid,
  removeCookie,
}

