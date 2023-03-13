import { useRouter } from 'next/router';
import { JSXElementConstructor, ReactElement, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../types';

const RouteGuard = (props: {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { hasPlayerName } = useContext(UserContext) as UserContextType

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const privatePaths = ['/tour'];
    const path = url.split('?')[0];
    if (!hasPlayerName() && privatePaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/register',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized ? (
    props.children
  ) : (
    <div></div>
  )
}

export default RouteGuard;
