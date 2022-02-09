// types and interfaces
import { MenuItemInterface } from "../../interfaces/menu.interface";
import { ProductModelInterface } from "../../interfaces/product.interface";
import { TopPageModelInterface } from "../../interfaces/page.interface";
// other
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../layout/Layout";
import { ParsedUrlQuery } from "querystring";
import axios from 'axios';

const firstCategory = 0;

function Course({ /*menu, page, */ products }: CoursePropsInterface): JSX.Element {
    return (
        <>
            {products.length}
        </>
    );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItemInterface[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    });

    return {
        paths: menu.flatMap(element => element.pages.map(page => `/courses/${page.alias}`)),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<CoursePropsInterface> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    
    if (!params) {
        return {
            notFound: true,
        };
    }

    const { data: menu } = await axios.post<MenuItemInterface[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    });
    
    const { data: page } = await axios.get<TopPageModelInterface>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`);

    const { data: products } = await axios.post<ProductModelInterface[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find/`, {
        category: page.category,
        limit: 10,
    });

    return {
        props: {
            firstCategory,
            products,
            page,
            menu
        }
    };
};

interface CoursePropsInterface extends Record<string, unknown> {
    menu: MenuItemInterface[];
    firstCategory: number;
    page: TopPageModelInterface;
	products: ProductModelInterface[];
}