// components
import { HTag } from "../../components/HTag/Htag";
import { Card } from "../../components/Card/Card";
import { Tag } from "../../components/Tag/Tag";
// other
import { TopPageComponentPropsInterface } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { HhData } from "../../components/HhData/HhData";

export const TopPageComponent = ({
    firstCategory,
    products,
    page,
}: TopPageComponentPropsInterface): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <HTag tag="h1">
                    {page.title}
                </HTag>
                {
                    products && 
                    <Tag color="grey" size="m">
                        {products.length}
                    </Tag>
                }
                <span>
                    Сортировка
                </span>
            </div>
            <div>
                {products.map(product => (
                    <div key={product._id}>
                        {product.title}
                    </div>
                ))}
            </div>
            <div className={styles.hhTitle}>
                <HTag tag="h2">
                    Вакансии - {page.category}
                </HTag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {page.hh && <HhData {...page.hh} />}
        </div>
    );
};