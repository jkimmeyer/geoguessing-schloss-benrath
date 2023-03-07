import Link from 'next/link';
import '../config/i18n';
import { useTranslation } from 'react-i18next';

const SbFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>Geoguessing Schloss Benrath</p>
      <Link
        href={'/imprint'}
      >
        { t('footer.imprint') }
      </Link>
      <Link
        href={'/privacy'}
      >
        { t('footer.privacy') }
      </Link>
    </footer>
  );
}

export default SbFooter;
