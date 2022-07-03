import Link from 'next/link';
import classes from './Button.module.scss';

const Button = (props) => {
     let buttonStyle;

    switch (props.buttonStyle) {
        case '1':
            buttonStyle = classes.button1;
            break;
        case '2':
            buttonStyle = classes.button2;
            break;
        default:
            buttonStyle = classes.button1;
    }

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