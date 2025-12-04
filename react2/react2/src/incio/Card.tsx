
import styles from './Card.module.css';


interface ICardProps {
    title: string;
    children?: React.ReactNode;
}
export function Card  (props:  ICardProps)  {
    return(
        <div className={styles.card}>
            <span>
                title: {props.title}
            </span>
            <div>
                {props.children}
            </div>
            <div>
                footer
            </div>


        </div>
    );


}


