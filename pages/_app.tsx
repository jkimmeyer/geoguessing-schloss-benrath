import '../styles/index.css';

import type { AppProps } from 'next/app'
import { DOMAttributes, useEffect } from 'react';


type WonderfulCustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['stack-l']: WonderfulCustomElement<Stack>;
      ['switcher-l']: WonderfulCustomElement<Switcher>;

    }
  }
}


import '../compositions/switcher/component.css';
import '../compositions/stack/component.css';
import Stack from '../compositions/stack/component';
import Switcher from '../compositions/switcher/component';

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
