import { useContext } from 'react';
// next
import DefaultErrorPage from 'next/error'
import { useRouter } from 'next/router';
import Link from 'next/link';
// types and interfaces
import { 
    firstLevelMenuItemInterface, 
    MenuItemInterface, 
    PageItemInterface 
} from '../../interfaces/menu.interface';
// other 
import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import styles from './Menu.module.css';
import cn from 'classnames';

export const Menu = (): JSX.Element => {
    const context = useContext(AppContext);
    const { menu, setMenu, firstCategory } = context;
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }

            return m;
        }));
    };

    const isThisSecondLevelOpened = (level: MenuItemInterface): void => {
        if (level.pages.map(path => path.alias).includes(router.asPath.split('/')[2])) {
            level.isOpened = true;
        }
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <a>
                                <div
                                    className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]: m.id === firstCategory,
                                    })}
                                >
                                    {m.icon}
                                    <span>
                                        {m.name}
                                    </span>
                                </div>
                            </a>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: firstLevelMenuItemInterface) => {
        return (
            <div className={styles.secondBlock}>
                {menu && menu.map(m => {
                    isThisSecondLevelOpened(m);

                    return (
                        <div key={m._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() => openSecondLevel(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened,
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItemInterface[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`} key={p._id}>
                    <a
                        className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
                        })}
                    >
                        {p.category}
                    </a>
                </Link>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            <ul>
                {buildFirstLevel()}
            </ul>
        </div>
    );
};