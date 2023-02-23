import Head from "next/head"
import Script from "next/script"
import indexStyles from './index.module.css'

export default function index() {
  return (
    <div>
      <Head>
        <title>3D Vista in Next.js</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" id="metaViewport"
          content="user-scalable=no, initial-scale=1, width=device-width, viewport-fit=cover"
          data-tdv-general-scale="0.5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preload" href="locale/de.txt" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="script.js" as="script" />
        <link rel="preload" href="media/panorama_80E5272B_8BBE_355F_41BD_C30D1BF8FD8E_0/r/2/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_80E5272B_8BBE_355F_41BD_C30D1BF8FD8E_0/l/2/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_80E5272B_8BBE_355F_41BD_C30D1BF8FD8E_0/u/2/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_80E5272B_8BBE_355F_41BD_C30D1BF8FD8E_0/d/2/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_80E5272B_8BBE_355F_41BD_C30D1BF8FD8E_0/f/2/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_80E5272B_8BBE_355F_41BD_C30D1BF8FD8E_0/b/2/0_0.jpg" as="image" />
        <meta name="description" content="Virtual Tour" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>

      <Script src="lib/tdvplayer.js" onLoad={() => {
        console.log('Player Script has loaded')
      }} />
      <Script src="tdvquiz.js" onLoad={() => {
        console.log('Quiz Script has loaded')
      }} />

      <Script src="script.js" strategy="lazyOnload" onLoad={() => {
        console.log('Script Script has loaded')
      }} />
      <Script src="/innerHTML.js" strategy="lazyOnload" onLoad={() => {
        whenAvailable('TDV', () => {
          preTour()
        })
      }} />

      <div id="preloadContainer" className="fill-viewport preload-container-class">
        <div>
          <div className={indexStyles["center"]}>
            <div className={indexStyles["spinner"]}>
              <div className={indexStyles["spinner-item"]} />
              <div className={indexStyles["spinner-item"]} />
              <div className={indexStyles["spinner-item"]} />
            </div>
            <div className={indexStyles["spinner-text"]}>Tour wird geladen ...</div>
          </div>
        </div>
      </div>

      <div id="viewer" className="fill-viewport viewer-class"></div>
    </div>
  )
}
