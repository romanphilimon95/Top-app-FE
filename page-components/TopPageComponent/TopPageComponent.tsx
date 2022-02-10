import { useReducer } from "react";
// components
import { AllAdvantages } from "../../components/AllAdvantages/AllAdvantages";
import { Product } from "../../components/Product/Product";
import { Skills } from "../../components/Skills/Skills";
import { HhData } from "../../components/HhData/HhData";
import { HTag } from "../../components/HTag/Htag";
import { Sort } from "../../components/Sort/Sort";
import { Tag } from "../../components/Tag/Tag";
// typescript stuff
import { TopPageComponentPropsInterface } from "./TopPageComponent.props";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
// other
import styles from './TopPageComponent.module.css';
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({
    firstCategory,
    products,
    page,
}: TopPageComponentPropsInterface): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum): void => {
        dispatchSort({ type: sort });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag="h1">
                    {page.title}
                </HTag>
                {
                    sortedProducts &&
                    <Tag color="grey" size="m">
                        {products.length}
                    </Tag>
                }
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortedProducts
                    && sortedProducts.map(product => (
                        <Product product={product} key={product._id} />
                    ))}
            </div>
            <div className={styles.hhTitle}>
                <HTag tag="h2">
                    Вакансии - {page.category}
                </HTag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {
                firstCategory === TopLevelCategory.Courses
                && page.hh
                && <HhData {...page.hh} />
            }
            {
                (page.advantages
                    && page.advantages.length > 0
                    && page.advantages[0].title)
                && <AllAdvantages advantages={page.advantages} />
            }
            {
                page.seoText
                && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
            }
            {
                (page.tags && page.tags.length > 0)
                && <Skills tags={page.tags} />
            }
        </div>
    );
};