import { useContext } from 'react';
import { P } from '../../components/P/P';
import styles from './Menu.module.css';
import { format } from 'date-fns';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItemInterface, PageItemInterface } from '../../interfaces/menu.interface';
import cn from 'classnames';
// svg-icons
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/product.svg';
import ServicesIcon from './icons/services.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';


const firstLevelMenu: firstLevelMenuItemInterface[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services}
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory} = useContext(AppContext)

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
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
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        )
    };

    const buildSecondLevel = (menuItem: firstLevelMenuItemInterface) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                        </div>
                        {buildThirdLevel(m.pages, menuItem.route)}
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItemInterface[], route: string) => {
        return (
            pages.map(p => (
                <a  
                    key={p._id}
                    href={`/${route}/${p.alias}`}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: false,
                    })}
                >
                    {p.category}
                </a>
            ))
        )
    };

    return (
        <div className={styles.menu}>
            <ul>
                {buildFirstLevel()}
            </ul>
        </div>
    );
};