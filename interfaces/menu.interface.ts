import { TopLevelCategory } from "./page.interface";

export interface PageItemInterface {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface MenuItemInterface {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: PageItemInterface[];
}

export interface firstLevelMenuItemInterface {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}
