import { KeyboardEvent, useState } from "react";
// components
import SearchIcon from './searchIcon.svg';
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
// other
import { SearchPropsInterface } from "./Search.props";
import styles from './Search.module.css';
import { useRouter } from "next/router";
import cn from 'classnames';

export const Search = ({ className, ...props }: SearchPropsInterface): JSX.Element => {
    const [searchState, setSearchState] = useState<string>('');
    const router = useRouter();

    const goToSearchPage = (): void => {
        router.push({
            pathname:'/search',
            query: {
                q: searchState
            }
        });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            goToSearchPage();
        }
    };
    
    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input 
                className={styles.input}
                placeholder='Поиск...'
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={goToSearchPage}
            >
                <SearchIcon />
            </Button>
        </div>
    );
};