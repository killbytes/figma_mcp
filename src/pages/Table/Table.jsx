import classes from './Table.module.scss';
import { BookmakerCard } from './BookmakerCard.jsx';

export function Table() {
    return (
        <div className={classes.container}>
            <BookmakerCard rank={1} />
            <BookmakerCard rank={2} />
            <BookmakerCard rank={3} isExpanded={true} />
        </div>
    );
}
