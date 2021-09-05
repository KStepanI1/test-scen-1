import React from "react";

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    text: string | null;
    icon?: any;
    callback?: any;
    disabled?: boolean;
    className?: string;
}

export const Button = ({ type, text, icon, callback, disabled, className }: Props): JSX.Element => {
    return (
        <button type={type}
                className={`button ${className}`}
                onClick={callback} disabled={disabled || false}>
            {icon && <img className={'button__icon'} src={icon} alt="plus"/>}
            {text && <div className={`button__text ${icon ? 'with-icon' : ''}`}>{text}</div>}
        </button>
    );
}