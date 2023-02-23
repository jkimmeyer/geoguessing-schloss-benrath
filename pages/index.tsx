import Head from 'next/head'
import SbButton from '../components/SbButton/SbButton';
import SbChapter from '../components/SbChapter/SbChapter';
import SbIcon from '../components/SbIcon/SbIcon';
import SbImageSlider from '../components/SbImageSlider/SbImageSlider';
import Page from '../layouts/Page';
import Image from 'next/image'
import { ButtonType, IconNames, ImageType } from '../types';
import '../config/i18n';
import { useTranslation } from 'react-i18next';
import gameOverlay from '../assets/images/GameOverlay_objectHovered.png'
import SbTitle from '../components/SbTitle/SbTitle';


export default function Home() {
  const { t } = useTranslation();

  const images: ImageType[] = [
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    },
    {
      url: "https://via.placeholder.com/320x180",
      alt: "Alt-Text"
    }
  ]

  return (
    <div>
      <Head>
        <title>Geoguessing Schloss Benrath</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page
        title={t('castleOfBenrath')}
        subtitle={
          <SbTitle />
        }
        headerButton={
          <SbButton
            buttonType={ButtonType.Primary}
            href="https://schloss-benrath.de"
            icon={
              <SbIcon icon={IconNames.Back} />
            }
          >
            {t('backToOfficalPage')}
          </SbButton>
        }
        headerSlider={
            <SbImageSlider images={images} />
        }
      >

        <SbChapter
          title={t('landingPage.intro.chapter1.title')}
          text={t('landingPage.intro.chapter1.teaserText')}
        >
          <Image src={gameOverlay} alt="Test" width={1080} />
        </SbChapter>

        <SbChapter
          title={t('landingPage.intro.chapter2.title')}
          text={t('landingPage.intro.chapter2.teaserText')}
        />

        <SbChapter
          title={t('landingPage.intro.chapter3.title')}
          text={t('landingPage.intro.chapter3.teaserText')}
        />

        <SbButton
          buttonType={ButtonType.Primary}
          href='/register'
          buttonSize="large"
          icon={
            <SbIcon icon={IconNames.Play} />
          }
        >
          { t('landingPage.startTour') }
        </SbButton>
      </Page>
    </div>
  )
}
