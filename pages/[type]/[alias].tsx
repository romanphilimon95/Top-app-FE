// types and interfaces
import { ProductModelInterface } from "../../interfaces/product.interface";
import { TopLevelCategory, TopPageModelInterface } from "../../interfaces/page.interface";
import { MenuItemInterface } from "../../interfaces/menu.interface";
// other
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { TopPageComponent } from "../../page-components";
import { firstLevelMenu } from "../../helpers/helpers";
import { withLayout } from "../../layout/Layout";
import { ParsedUrlQuery } from "querystring";
import axios from 'axios';

const TopPage = ({ firstCategory, page,  products }: TopPagePropsInterface): JSX.Element => {
    return <TopPageComponent 
        firstCategory={firstCategory} 
        products={products}
        page={page} 
    />;
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItemInterface[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
            firstCategory: m.id,
        });

        paths = paths.concat(menu.flatMap(element => element.pages.map(page => `/${m.route}/${page.alias}`)));
    }
    (paths);
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<TopPagePropsInterface> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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

    try {
        const { data: menu } = await axios.post<MenuItemInterface[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
            firstCategory: firstCategoryItem.id,
        });
        if (menu.length === 0) {
            return {
                notFound: true,
            };
        }
        
        const { data: page } = await axios.get<TopPageModelInterface>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`);
    
        const { data: products } = await axios.post<ProductModelInterface[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find/`, {
            category: page.category,
            limit: 10,
        });

        return {
            props: {
                firstCategory: firstCategoryItem.id,
                products,
                page,
                menu,
            }
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

interface TopPagePropsInterface extends Record<string, unknown> {
	products: ProductModelInterface[];
    page: TopPageModelInterface;
    menu: MenuItemInterface[];
    firstCategory: TopLevelCategory;
}