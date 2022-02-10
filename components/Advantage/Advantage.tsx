import { AdvantagePropsInterface } from "./Advantage.props";
import styles from './Advantage.module.css';
import DeltaIcon from './deltaIcon.svg';
import { HTag } from "../HTag/Htag";
import { P } from "../P/P";

export const Advantage = ({ title, description }: AdvantagePropsInterface): JSX.Element => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <div className={styles.deltaIcon} >
                        <DeltaIcon />
                    </div>
                    <HTag tag="h3">{title}</HTag>
                </div>
                <div className={styles.description}>
                    <P size="l">{description}</P>
                </div>
            </div>
        </>
    );
}; 