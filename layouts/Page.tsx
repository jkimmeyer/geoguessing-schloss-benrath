import pageStyles from './Page.module.css';

interface Props {
  children?: React.ReactNode;
}

const Page: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={pageStyles.page}>
      { children }
    </div>
  );
}

export default Page;
