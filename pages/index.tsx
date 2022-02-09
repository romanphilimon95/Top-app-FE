//components
import { Button } from "../components/Button/Button";
import { HTag } from "../components/HTag/Htag";
import { Tag } from "../components/Tag/Tag";
import { Rating } from "../components/Rating/Rating";
import { P } from "../components/P/P";
// HOC
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
// other
import axios from 'axios';
import { MenuItemInterface } from "../interfaces/menu.interface";

 function Home({ menu /*, firstCategory*/}: HomePropsInterface): JSX.Element {
  return (
    <>
      <HTag tag="h1">Текст</HTag>
      <Button appearance="primary" arrow="right">KNOPKA</Button>
      <Button appearance="ghost" arrow="down">KNOPKA</Button>
      <P size="s">little</P>
      <P>medium</P>
      <P size="l">large</P>
      <Tag href="www.google.com" color="red">google medium</Tag>
      <Tag color="primary" size="m">google medium</Tag>
      <Tag color="green" size="m">google medium</Tag>
      <Tag color="ghost" size="m">google medium</Tag>
      <Rating rating={4} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItemInterface[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory, 
    }
  };
};

interface HomePropsInterface extends Record<string, unknown> {
  menu: MenuItemInterface[];
  firstCategory: number;
}