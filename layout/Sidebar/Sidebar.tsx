import { SidebarPropsInterface } from './Sidebar.props';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Search } from '../../components/Search/Search';

export const Sidebar = ({ className, ...props }: SidebarPropsInterface): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo}/>
            <Search />
            <Menu />
        </div>
    );
};