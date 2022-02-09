import { useState, useEffect } from "react";
import { RatingPropsInterface } from "./Rating.props";
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({ 
    // isEditable = false, 
    // setRating,
    rating,   
    ...props 
}: RatingPropsInterface): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    
    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((elem: JSX.Element, i: number) => {
            return (
                <StarIcon 
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating
                    })}

                />
            );
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((elem, i) => (
                <span key={i}>{elem}</span>
            ))}
        </div>
    );
};