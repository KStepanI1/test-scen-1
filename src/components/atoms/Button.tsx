
interface Props {
    text: string | null;
    icon?: any;
}

export const Button = ({ text, icon }: Props): JSX.Element => {
    return (
        <button className={'button'}>
            <img className={'button__icon'} src={icon} alt="plus"/>
            {text && <div className={'button__text'}>{text}</div>}
        </button>
    );
}