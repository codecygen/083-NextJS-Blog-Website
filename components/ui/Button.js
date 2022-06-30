import Link from 'next/link';
import classes from './Button.module.scss';

const Button = (props) => {
    if (props.link) {
        return (

            <Link href={props.link}>
                <a>
                    <button className={classes.button1}>
                        {props.children}
                    </button>
                </a>
            </Link>
        );
    }

    return (
        <button className={classes.button1}>{props.children}</button>
    );
};

export default Button;