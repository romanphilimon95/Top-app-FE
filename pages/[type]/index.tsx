import { MenuItemInterface } from "../../interfaces/menu.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { GetStaticProps, GetStaticPaths } from "next";
import { withLayout } from "../../layout/Layout";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import axios from 'axios';

function Type({ firstCategory }: TypePropsInterface): JSX.Element {
    return (
        <>
            <p>type: {firstCategory}</p>
        </>
    );
}

export default withLayout(Type);

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        };
    }

    const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);

    if (!firstCategoryItem) {
        return {
            notFound: true,
        };
    }

    const { data: menu } = await axios.post<MenuItemInterface[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory: firstCategoryItem.id,
    });
    
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id,
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => `/${m.route}`),
        fallback: true,
    };
};

interface TypePropsInterface extends Record<string, unknown> {
    menu: MenuItemInterface[];
    firstCategory: number;
}