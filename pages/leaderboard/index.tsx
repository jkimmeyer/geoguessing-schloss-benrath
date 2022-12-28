import Head from 'next/head'
import '../../config/i18n';
import { useTranslation } from 'react-i18next';
import Page from '../../layouts/Page';
import SbChapter from '../../components/SbChapter/SbChapter';
import SbInput from '../../components/SbInput/SbInput';
import SbButton from '../../components/SbButton/SbButton';
import { ButtonType } from '../../types';
import SbTitle from '../../components/SbTitle/SbTitle';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t('leaderboard.title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page
        title={t('castleOfBenrath')}
        subtitle={
          <SbTitle />
        }
      >
        <SbChapter title={t('register.chooseName')} text={t('register.chooseNameHint')}>
          <SbInput label={t('register.playerName')} placeholder={t('register.playerName')} type="text" />
        </SbChapter>

        <SbButton buttonType={ButtonType.Primary} href="/tour">{t('continue')}</SbButton>
      </Page>
    </div>
  )
}
