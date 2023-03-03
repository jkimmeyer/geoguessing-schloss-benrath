import pageStyles from './Page.module.css';

interface Props {
  children?: React.ReactNode,
  title: string,
  subtitle?: string | React.ReactNode,
  headerSlider?: React.ReactNode,
  headerButton?: React.ReactNode,
}

const Page: React.FC<Props> = ({
  children,
  title,
  subtitle,
  headerSlider,
  headerButton,
}) => {
  return (
    <div className={pageStyles['page']}>
      <main className={pageStyles['page--main']}>
        <div className={pageStyles['page--teaser']}>
          <header className={pageStyles['page--header']}>
            {headerButton}
            {headerSlider}
          </header>

          <h1 className={pageStyles['page--title']}>
            {title}
            {!!subtitle &&
              <span className={pageStyles['page--subtitle']}>{subtitle}</span>
            }
          </h1>
        </div>
        {children}
      </main>
    </div>
  );
}

export default Page;
