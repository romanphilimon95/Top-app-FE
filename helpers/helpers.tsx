// typescript stuff
import { firstLevelMenuItemInterface } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";
// svg icons
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';

export const firstLevelMenu: firstLevelMenuItemInterface[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services }
];

export const getPriceInRoubles = (price: number): string => {
    return price
        .toString()
        .replace(/\B(?=(\d{3})+(?!(\d)))/g, ' ')
        .concat(' ₽');
};

export const getRightDeclention = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}