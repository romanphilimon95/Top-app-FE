import { getPriceInRoubles, getRightDeclention } from "../../helpers/helpers";
import { ProductPropsInterface } from "./Product.props";
import styles from './Product.module.css';
// components
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";
import { Card } from "../Card/Card";
import { Tag } from "../Tag/Tag";
import { Divider } from "../Divider/Divider";
import Image from "next/image";

export const Product = ({ product, className, ...props }: ProductPropsInterface): JSX.Element => {
    
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <Image 
                    src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`} 
                    alt={product.title} 
                    height={70}
                    width={70}
                /> 
            </div>
            <div className={styles.title}>
                {product.title}
            </div>
            <div className={styles.price}>
                {getPriceInRoubles(product.price)}
                {product.oldPrice 
                && <Tag  className={styles.oldPrice} color="green" size="s">
                    {getPriceInRoubles(product.price - product.oldPrice)}
                </Tag>}
            </div>
            <div className={styles.credit}>
                {getPriceInRoubles(product.credit)}<span>/мес</span>
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
                        className={styles.category}
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
                {`${product.reviewCount} 
                ${getRightDeclention(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}`}
            </div>
            <Divider className={styles.hr} />
            <div className={styles.description}>
                {product.description}
            </div>
            <div className={styles.feature}>
                {product.characteristics.map(char => (
                    <div className={styles.characteristics} key={char.name}>
                        <span className={styles.characteristicsName}>
                            {char.name}
                        </span>
                        <span className={styles.characteristicsDots}>
                        
                        </span>
                        <span className={styles.characteristicsValue}>
                            {char.value}
                        </span>
                    </div>
                ))}
            </div>
            <div className={styles.advBlock}>
                {   
                    product.advantages 
                    && <div className={styles.advantages}>
                        <div className={styles.advTitle}>
                            Преимущества
                        </div>
                        {product.advantages}
                    </div>
                }
                {
                    product.disadvantages 
                    && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>
                            Недостатки
                        </div>
                        {product.disadvantages}
                    </div>
                }
            </div>
            <Divider className={styles.hr} />
            <div className={styles.actions}>
                <Button appearance="primary">
                    Узнать подробнее
                </Button>
                <Button 
                    className={styles.reviewButton}
                    appearance="ghost" 
                    arrow={'right'}
                >
                    Читать отзывы
                </Button>
            </div>
        </Card>
    );
};