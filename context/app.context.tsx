import { PropsWithChildren, useState, createContext } from "react";
import { MenuItemInterface } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";

export interface AppContextInterface {
    menu: MenuItemInterface[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItemInterface[]) => void;
}

export const AppContext = createContext<AppContextInterface>({
    menu: [],
    firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<AppContextInterface>): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItemInterface[]>(menu);
    const setMenu = (newMenu: MenuItemInterface[]) => {
        setMenuState(newMenu);
    }

    return <AppContext.Provider value={ { menu: menuState, firstCategory, setMenu } }>
        { children }
    </AppContext.Provider>;
}