import Head from "next/head"
import Script from "next/script"
import SbMenuFrame from "../../components/SbMenuFrame/SbMenuFrame"
import SbOverlay from "../../components/SbOverlay/SbOverlay"
import indexStyles from './index.module.css'
import { useState } from "react"
import SbTitle from "../../components/SbTitle/SbTitle"
import { MyStopwatch } from "../../components/SbStopwatch/SbStopwatch"

const Overlay = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const buttonHandler = () => {
    setOverlayOpen(current => !current)
  }

  const [onboardingCompleted, toggleOnboardingCompleted] = useState(false);

  const toggleOnboarding = () => {
    toggleOnboardingCompleted(current => !current)
  }
  return (
    <SbOverlay withContent={overlayOpen}>
      <SbMenuFrame
        timer={
          <MyStopwatch />
        }
        points={"0"}
        progress={"0 von 50"}
        logo={<SbTitle />}
        closeOverlay={buttonHandler}
        onboarding={onboardingCompleted}
        toggleOnboarding={toggleOnboarding}
      />
    </SbOverlay>
  )
}

export default function index() {
  return (
    <div>
      <Head>
        <title>Schloss Benrath - 360 Tour</title>
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

      <div id="viewer" className="fill-viewport viewer-class">
        <Overlay />
      </div>
    </div>
  )
}
