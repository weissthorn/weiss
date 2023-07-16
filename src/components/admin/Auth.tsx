import React from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';

const Auth = (props: any) => {
  const router = useRouter();
  const cookie = parseCookies();
  const [user, setUser] = React.useState<any>({ id: '', role: '' });

  React.useEffect(() => {
    let user: any = cookie;
    user = user && user._w_auth ? JSON.parse(user._w_auth) : null;
    setUser(user);
    if (user?.role !== 'admin') {
      toast.error('You are not authorized to access this page', {
        duration: 3000
      });
      router.push('/no-auth');
    }
  }, [router]);

  if (user && user?.role !== 'admin') {
    // router.push('/login');
    return <></>;
  } else {
    return (
      <div>
        <Toaster />
        {props.children}
      </div>
    );
  }
};

export default Auth;
