interface BookmakerCardProps {
    rank?: number;
    isExpanded?: boolean;
    onToggle?: (expanded: boolean) => void;
}

export function BookmakerCard(props: BookmakerCardProps): JSX.Element;
