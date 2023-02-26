import '../styles/index.css';

import type { AppProps } from 'next/app'

// Stack
import "../compositions/stack/component"
import "../compositions/stack/component.css"

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'stack-l': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
