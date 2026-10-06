import { Helmet } from "react-helmet";

type TitleProps = {
  title: string;
};

const PageTitle = ({ title }: TitleProps) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageTitle;
