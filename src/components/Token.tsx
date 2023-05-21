import { useState, useEffect } from 'react';
import { parseCookies } from 'nookies';
import { userProp } from 'interfaces/user';

export default function useToken() {
  const cookie = parseCookies();
  const [token, setToken] = useState<userProp>({
    id: '',
    name: '',
    role: ''
  });

  useEffect(() => {
    let user: any = cookie;
    user = user && user._w_auth ? JSON.parse(user._w_auth) : null;
    user ? setToken(user) : null;
  }, []);

  return token;
}
