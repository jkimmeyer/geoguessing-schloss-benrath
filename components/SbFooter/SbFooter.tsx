import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../../config/i18n';
import footerStyles from './SbFooter.module.css';

const SbFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={footerStyles['sb-footer']}>
      <h4 className={footerStyles['footer-headline']}>Geoguessing Schloss Benrath</h4>
      <div className={footerStyles['second-row']}>
        <div className={footerStyles['link-wrapper']}>
          <Link
            href={'https://www.schloss-benrath.de/impressum'}
          >
            { t('footer.imprint') }
          </Link>
          <p>|</p>
          <Link
            href={'https://www.schloss-benrath.de/datenschutzerklärung'}
          >
            { t('footer.privacy') }
          </Link>
          <p>|</p>
          <Link
            href={'https://www.schloss-benrath.de/agb'}
          >
            { t('footer.tac') }
          </Link>
        </div>
        <div className={footerStyles['networks-wrapper']}>
          <Link
            href={'https://www.facebook.com/schlossbenrath/'}
          >
            <svg className={footerStyles['network-icon']} id='facebook-icon' width='42' height='42' viewBox='0 0 42 42' fill='white' xmlns='http://www.w3.org/2000/svg'>
              <path d='M35.3904 5.25H7.01085C6.03818 5.25 5.25 6.03796 5.25 7.01085V35.3904C5.25 36.3629 6.03818 37.151 7.01085 37.151H22.2891V24.7974H18.1319V19.9826H22.2891V16.4323C22.2891 12.3118 24.8058 10.0681 28.4819 10.0681C30.2421 10.0681 31.7553 10.1992 32.1963 10.2579V14.564L29.6475 14.5651C27.6479 14.5651 27.2612 15.515 27.2612 16.9089V19.9826H32.0286L31.4077 24.7974H27.2612V37.151H35.3904C36.3629 37.151 37.151 36.3629 37.151 35.3904V7.01085C37.151 6.03796 36.3629 5.25 35.3904 5.25Z'></path>
            </svg>
          </Link>
          <Link
            href={'https://www.instagram.com/schlossbenrath/'}
          >
            <svg className={footerStyles['network-icon']} id='instagram-icon' width='42' height='42' viewBox='0 0 42 42' fill='white' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' clip-rule='evenodd' d='M34.1483 19.0689H31.3044C31.5114 19.8733 31.6342 20.7136 31.6342 21.5826C31.6342 27.1348 27.1339 31.6342 21.583 31.6342C16.0324 31.6342 11.5323 27.1348 11.5323 21.5826C11.5323 20.7136 11.6551 19.8733 11.8625 19.0689H9.01842V32.8906C9.01842 33.5835 9.5812 34.1461 10.2761 34.1461H32.8901C33.5853 34.1461 34.1483 33.5835 34.1483 32.8906V19.0689ZM34.1483 10.2748C34.1483 9.5812 33.5853 9.01842 32.8901 9.01842H29.1219C28.4281 9.01842 27.8656 9.5812 27.8656 10.2748V14.0446C27.8656 14.7382 28.4281 15.3009 29.1219 15.3009H32.8901C33.5853 15.3009 34.1483 14.7382 34.1483 14.0446V10.2748V10.2748ZM21.583 15.3009C18.1134 15.3009 15.3009 18.113 15.3009 21.5826C15.3009 25.0519 18.1134 27.8656 21.583 27.8656C25.0528 27.8656 27.8656 25.0519 27.8656 21.5826C27.8656 18.113 25.0528 15.3009 21.583 15.3009ZM34.1483 37.9165H9.01842C6.93738 37.9165 5.25 36.2284 5.25 34.1461V9.01842C5.25 6.93715 6.93738 5.25 9.01842 5.25H34.1483C36.2298 5.25 37.9165 6.93715 37.9165 9.01842V34.1461C37.9165 36.2284 36.2298 37.9165 34.1483 37.9165Z'></path>
            </svg>
          </Link>
          <Link
            href={'https://twitter.com/schlossbenrath/'}
          >
            <svg className={footerStyles['network-icon']} id='twitter-icon' width='39' height='40' viewBox='0 0 39 40' fill='white' xmlns='http://www.w3.org/2000/svg'>
              <path d='M38.4202 8.52281C37.0633 9.12406 35.6057 9.53031 34.0733 9.71394C35.6545 8.76785 36.8374 7.27882 37.4013 5.52469C35.9158 6.40704 34.29 7.02813 32.5946 7.36094C31.4544 6.14359 29.9443 5.33672 28.2986 5.06558C26.6529 4.79445 24.9637 5.07422 23.4933 5.86147C22.0229 6.64872 20.8536 7.8994 20.1668 9.41933C19.4801 10.9393 19.3143 12.6434 19.6953 14.2672C16.6853 14.1161 13.7407 13.3337 11.0526 11.9709C8.36456 10.6081 5.99307 8.69532 4.09207 6.35669C3.44207 7.47794 3.06832 8.77794 3.06832 10.1624C3.0676 11.4088 3.37453 12.6361 3.96188 13.7354C4.54923 14.8347 5.39884 15.772 6.43532 16.4642C5.23327 16.4259 4.05774 16.1011 3.00657 15.5168V15.6143C3.00645 17.3624 3.61113 19.0567 4.718 20.4097C5.82487 21.7627 7.36575 22.6911 9.0792 23.0373C7.9641 23.3391 6.795 23.3836 5.6602 23.1673C6.14363 24.6714 7.08532 25.9867 8.35342 26.9291C9.62153 27.8714 11.1526 28.3936 12.7322 28.4226C10.0507 30.5276 6.73902 31.6695 3.32995 31.6644C2.72607 31.6646 2.1227 31.6293 1.52295 31.5588C4.98335 33.7837 9.0115 34.9645 13.1254 34.9599C27.0517 34.9599 34.6648 23.4257 34.6648 13.4222C34.6648 13.0972 34.6567 12.7689 34.6421 12.4439C36.1229 11.373 37.4012 10.0469 38.417 8.52769L38.4202 8.52281V8.52281Z'></path>
            </svg>
          </Link>
          <Link
            href={'https://www.pinterest.de/schlossbenrath/_created/'}
          >
            <svg className={footerStyles['network-icon']} id='pinterest-icon' width='42' height='42' viewBox='0 0 42 42' fill='white' xmlns='http://www.w3.org/2000/svg'>
              <path d='M35 15.6145C35 22.7141 30.7545 28.0158 24.491 28.0158C22.3881 28.0158 20.4109 26.9592 19.732 25.7594C19.732 25.7594 18.6013 29.9303 18.3625 30.7341C17.5205 33.5751 15.0393 36.4204 14.8473 36.6556C14.7129 36.8161 14.4147 36.7655 14.384 36.5526C14.3297 36.19 13.6979 32.6018 14.4431 29.6749C14.8169 28.2073 16.948 19.816 16.948 19.816C16.948 19.816 16.3256 18.66 16.3256 16.9526C16.3256 14.2708 18.0006 12.2693 20.082 12.2693C21.8536 12.2693 22.7101 13.5039 22.7101 14.985C22.7101 16.6406 21.5769 19.1147 20.9904 21.4064C20.5007 23.3269 22.0264 24.8916 24.0651 24.8916C27.7544 24.8916 30.238 20.488 30.238 15.2716C30.238 11.3067 27.365 8.33713 22.1352 8.33713C16.2289 8.33713 12.546 12.4306 12.546 17.0033C12.546 18.5787 13.0475 19.6915 13.8305 20.5507C14.1902 20.9463 14.2421 21.1056 14.1117 21.5605C14.0151 21.8944 13.8047 22.6943 13.7123 23.0128C13.5845 23.4698 13.1849 23.6346 12.7378 23.4655C10.0177 22.4325 8.75 19.6641 8.75 16.5529C8.75 11.4122 13.4166 5.25 22.669 5.25C30.1086 5.25 35 10.2477 35 15.6145Z'></path>
            </svg>
          </Link>
          <Link
            href={'https://www.youtube.com/channel/UC0SkxkDRM7h3v5ynK0N5JCg'}
          >
            <svg className={footerStyles['network-icon']} id='youtube-icon' width='42' height='42' viewBox='0 0 42 42' fill='white' xmlns='http://www.w3.org/2000/svg'>
              <path d='M41.1251 11.3862C40.8873 10.5378 40.424 9.76977 39.7846 9.16366C39.1271 8.53892 38.3213 8.09203 37.4431 7.86516C34.1566 6.99891 20.9896 6.99891 20.9896 6.99891C15.5004 6.93646 10.0126 7.21114 4.5571 7.82141C3.67894 8.06504 2.87459 8.52191 2.2156 9.15141C1.5681 9.77441 1.0991 10.5427 0.854104 11.3844C0.265566 14.555 -0.0203855 17.7743 0.000103508 20.9989C-0.0208965 24.2207 0.264353 27.4389 0.854104 30.6134C1.09385 31.4517 1.5611 32.2164 2.21035 32.8342C2.8596 33.4519 3.6681 33.8982 4.5571 34.1344C7.88735 34.9989 20.9896 34.9989 20.9896 34.9989C26.4858 35.0615 31.9806 34.7868 37.4431 34.1764C38.3213 33.9496 39.1271 33.5027 39.7846 32.8779C40.4321 32.2602 40.8924 31.4919 41.1234 30.6554C41.7273 27.4861 42.0209 24.2654 42.0001 21.0392C42.0455 17.7992 41.7523 14.5634 41.1251 11.3844V11.3862ZM16.8036 26.9909V15.0087L27.7586 21.0007L16.8036 26.9909Z'></path>
            </svg>
          </Link>
          
        </div>
      </div>
    </footer>
  );
}

export default SbFooter;