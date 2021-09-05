import React from "react";

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    text: string | null;
    icon?: any;
    callback?: any;
    disabled?: boolean;
}

export const Button = ({ type, text, icon, callback, disabled }: Props): JSX.Element => {
    return (
        <button type={type}
                className={'button'}
                onClick={callback} disabled={disabled || false}>
            {icon && <img className={'button__icon'} src={icon} alt="plus"/>}
            {text && <div className={`button__text ${icon ? 'with-icon' : ''}`}>{text}</div>}
        </button>
    );
}