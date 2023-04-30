import { ButtonHTMLAttributes, Children, FC, ReactNode } from 'react';
import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: `${ButtonVariants}`;
    className?: string;
}

enum ButtonVariants {
    Primary = "primary",
    PrimaryGrey = "primary-grey",
    Secondary = "secondary",
}

const buttonVariants = {
    [ButtonVariants.Primary]: styles["button-primary"],
    [ButtonVariants.PrimaryGrey]: styles["button-primary--grey"],
    [ButtonVariants.Secondary]: styles["button-secondary"],
}

export const Button: FC<ButtonProps> = ({ className = '', children, variant = ButtonVariants.Primary, ...props }) => {
    return (
        <button {...props} className={`${buttonVariants[variant]} ${className}`}>
            {children}
        </button>
    );
}