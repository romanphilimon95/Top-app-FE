import { withLayout } from "../../layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItemInterface } from "../../interfaces/menu.interface";

 function Search(): JSX.Element {
  return (
    <>
      <p>dsfsdf</p>
    </>
  );
}

export default withLayout(Search);

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