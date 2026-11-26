type SpaceUpdatesProps = {
    name: string;
    type?: 'text' | 'number' | 'color';
    plaseholder?: string;
    className?: string;
    onChange?: () => void;
}

function SpaceUpdates(props: SpaceUpdatesProps) {
    return (
        <input 
            name={props.name}
            type={props.type}
            placeholder={props.plaseholder}
            className={props.className}
            onChange={props.onChange} 
        />
    )
}

export { SpaceUpdates }