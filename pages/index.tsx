import Head from 'next/head'
import SbButton from '../components/SbButton/SbButton';
import SbChapter from '../components/SbChapter/SbChapter';
import SbIcon from '../components/SbIcon/SbIcon';
import SbImageSlider from '../components/SbImageSlider/SbImageSlider';
import Page from '../layouts/Page';
import { ButtonType, IconNames, ImageType } from '../types';
import '../config/i18n';
import { useTranslation } from 'react-i18next';
import gameOverlay from '../assets/images/GameOverlay_objectHovered.png';
import queenVisit from '../assets/images/Queen_Visit.jpg'
import angelSculptures from '../assets/images/Angel_Sculptures.jpg'
import SbTitle from '../components/SbTitle/SbTitle';
import { landingPageImages } from '../landingPageImages';
import landingPageStyles from '../assets/stylesheets/landing-page.module.css';
import SbFooter from '../components/SbFooter/SbFooter';
import SbImage from '../components/SbImage/SbImage';

export default function Home() {
  const { t } = useTranslation();

  const images: ImageType[] = landingPageImages;

  return (
    <div className={landingPageStyles['page-wrapper']}>
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
          <SbImage className={landingPageStyles['landing-page-image']} src={gameOverlay} alt="Simulierter Einblick in das Spiel" width={1080} />
        </SbChapter>

        <SbChapter
          title={t('landingPage.intro.chapter2.title')}
          text={t('landingPage.intro.chapter2.teaserText')}
        >
          <SbImage className={landingPageStyles['landing-page-image']} src={angelSculptures} alt="Puttenfiguren im Kuppelsaal des Schlosses" width={924} />
        </SbChapter>

        <SbChapter
          title={t('landingPage.intro.chapter3.title')}
          text={t('landingPage.intro.chapter3.teaserText')}
        >
          <SbImage className={landingPageStyles['landing-page-image']} src={queenVisit} alt="Queen Elizabeth die zweite auf dem Schlossbalkon" width={924} />
        </SbChapter>

        <SbChapter
          title={t('landingPage.intro.chapter4.title')}
          text={t('landingPage.intro.chapter4.teaserText')}
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
      <SbFooter></SbFooter>
    </div>
  )
}
