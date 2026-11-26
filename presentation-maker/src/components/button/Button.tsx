type ButtonProps = {
    text?: string;
    imageUrl?: string;
    styleImg?: string;
    styleButton?: string;
    onClick?: () => void;
}

function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={props.styleButton}>
            {props.text ? <span>{props.text}</span> : null}
            {props.imageUrl ? <img src={props.imageUrl} className={props.styleImg} alt="" /> : null}
        </button>
    )
}

export { Button }