import { AppContextProvider } from '../context/app.context';
// types and interfaces
import { FunctionComponent } from 'react';
import { LayoutPropsInterface } from './Layout.props';
import { AppContextInterface } from '../context/app.context';
// components
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
// styles
import styles from './Layout.module.css';
import { AppContext } from '../context/app.context';

const Layout = ({ children }: LayoutPropsInterface): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & AppContextInterface>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}