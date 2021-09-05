
interface Props {
    text: string;
    icon?: any;
}

export const Button = ({ text, icon }: Props): JSX.Element => {
    return (
        <button>
            {icon}
            {text && <div>{text}</div>}
        </button>
    );
}