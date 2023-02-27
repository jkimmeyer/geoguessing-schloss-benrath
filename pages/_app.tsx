import '../styles/index.css';

import type { AppProps } from 'next/app'
import { useEffect } from 'react';
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'stack-l': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;

      'switcher-l': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}


import '../compositions/switcher/component.css';
import '../compositions/stack/component.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("../compositions/compositions.js");
  });

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
