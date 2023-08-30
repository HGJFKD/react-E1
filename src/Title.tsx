
interface Props {
    text: string;
};

export default function Title(props: Props) :JSX.Element{
    return <h4>{props.text}</h4>
};
