import { AllAdvantagesPropsInterface } from "./AllAdvantages.props";
import { HTag } from "../HTag/Htag";
import styles from './AllAdvantages.module.css';
import { Advantage } from "../Advantage/Advantage";

export const AllAdvantages = ({ advantages }: AllAdvantagesPropsInterface): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <HTag tag="h2">Преимущества</HTag>
            <div className={styles.advantages}>
                {advantages.map(({title, description, _id}) => (
                    <Advantage 
                        description={description} 
                        title={title}  
                        key={_id}                 
                    />
                ))}
            </div>
        </div>
    );
}; 