import { ProductPropsInterface } from "./Product.props";
import styles from './Product.module.css';
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";

export const Product = ({ product, className, ...props }: ProductPropsInterface): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <img src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`} alt={product.title} /> 
            </div>
            <div className={styles.title}>
                {product.title}
            </div>
            <div className={styles.price}>
                {product.price}
            </div>
            <div className={styles.credit}>
                {product.credit}
            </div>
            <div className={styles.rating}>
                <Rating 
                    rating={product.reviewAvg ?? product.initialRating} 
                    className={styles.rating}
                />
            </div>
            <div className={styles.tags}>
                {product.categories.map(category => (
                    <Tag  
                        key={category}
                        color="ghost"
                    >
                        {category}
                    </Tag>
                ))}
            </div>
            <div className={styles.priceTitle}>
                цена
            </div>
            <div className={styles.creditTitle}>
                кредит
            </div>
            <div className={styles.rateTitle}>
                {product.reviewCount} отзывов
            </div>
            <div className={styles.hr} >
                <hr />
            </div>
            <div className={styles.description}>
                {product.description}
            </div>
            <div className={styles.feature}>
                fichi
            </div>
            <div className={styles.advBlock}>
                <div className={styles.advantages}>
                    <div>
                        Преимущества
                    </div>
                    {product.advantages}
                </div>
                <div className={styles.disadvantages}>
                    <div>
                        Недостатки
                    </div>
                    {product.disadvantages}
                </div>
            </div>
            <div className={styles.hr} >
                <hr />
            </div>
            <div className={styles.actions}>
                <Button appearance="primary">
                    Узнать подробнее
                </Button>
                <Button appearance="ghost" arrow={'right'}>
                    Читать отзывы
                </Button>
            </div>
        </Card>
    );
};