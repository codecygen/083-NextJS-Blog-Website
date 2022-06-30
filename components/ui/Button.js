import Link from 'next/link';
import classes from './Button.module.scss';

const Button = (props) => {
    const buttonStyle = props.buttonStyle === '1' ? classes.button1 : classes.button2;

    if (props.link) {
        return (

            <Link href={props.link}>
                <a>
                    <button className={buttonStyle}>
                        {props.children}
                    </button>
                </a>
            </Link>
        );
    }

    return (
        <button className={buttonStyle}>{props.children}</button>
    );
};

export default Button;