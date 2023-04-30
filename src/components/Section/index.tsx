import { FC, HTMLAttributes } from "react";
import styles from './section.module.scss';


export const Section: FC<HTMLAttributes<HTMLElement>> = ({...props}) => {
    return <section {...props} className={styles.section}>{props.children}</section>
}