import { SkillsPropsInterface } from "./Skills.props";
import styles from './Skills.module.css';
import { Tag } from "../Tag/Tag";
import { HTag } from "../HTag/Htag";

export const Skills = ({ tags }: SkillsPropsInterface): JSX.Element => {
    return (
        <>
            <HTag tag="h2">Получаемые навыки</HTag>{tags.map(skill => (
                <div 
                    key={Math.random().toString()} 
                    className={styles.skill}
                >
                    <Tag color="primary">
                        {skill}
                    </Tag>
                </div>
            ))}
        </>
    );
}; 