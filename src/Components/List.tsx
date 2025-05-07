interface ListProps {
    li: React.ReactNode;
}

const List = (props: ListProps) => {
    return <ul>{props.li}</ul>;
};
