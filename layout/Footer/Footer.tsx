import { P } from '../../components/P/P';
import { FooterPropsInterface } from './Footer.props';
import styles from './Footer.module.css';
import { format } from 'date-fns';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterPropsInterface): JSX.Element => {
    return (
        <div className={cn(styles.footer, className)}
            {...props}
        >
            <P size="m">
                <a href="" target="_black">
                    OwlTop © 2020-{format(new Date(), 'yyyy')} Все права защищены
                </a>
            </P>
            <P size="m">
                <a href="" target="_black">
                    Пользовательское соглашение
                </a>
            </P>
            <P size="m">
                <a href="" target="_black">
                    Политика конфиденциальности
                </a>
            </P>
        </div>
    );
};