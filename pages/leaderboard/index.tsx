import Head from 'next/head'
import '../../config/i18n';
import { useTranslation } from 'react-i18next';
import Page from '../../layouts/Page';
import SbChapter from '../../components/SbChapter/SbChapter';
import SbButton from '../../components/SbButton/SbButton';
import { ButtonType } from '../../types';
import prisma from '../../config/prisma';
import { GetServerSideProps } from 'next';
import SbTable from '../../components/SbTable/SbTable';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const getServerSideProps: GetServerSideProps = async () => {
  const ranking = await prisma.ranking.findMany();

  return {
    props: {
      ranking
    },
  };
};

interface RankingProps {
  id: string,
  playerName: string,
  score?: number,
}

type Props = {
  ranking: RankingProps[];
};

export default function Home(props: Props) {
  const { t } = useTranslation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (window.tour) {
      router.reload()
    }
  })

  return (
    <div>
      <Head>
        <title>{t('leaderboard.title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page
        title={t('castleOfBenrath')}
      >
        <SbChapter title={t('leaderboard.title')} text={t('leaderboard.description')}>
          <SbTable columns={[
            t('leaderboard.position'),
            t('leaderboard.playerName'),
            t('leaderboard.score'),
          ]}>
            {props.ranking.sort((a, b) => (b?.score || 0) - (a?.score || 0)).map((rank, index) => (
              <tr key={rank.id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  {rank.playerName}
                </td>
                <td>
                  {rank.score}
                </td>
              </tr>
            ))}
          </SbTable>
        </SbChapter>

        <SbButton buttonType={ButtonType.Primary} href="/tour">{t('playAgain')}</SbButton>
      </Page>
    </div>
  )
}
