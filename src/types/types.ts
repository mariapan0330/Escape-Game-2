export type Item = {
    image?: string;
    title: string;
    description: string;
}

export type GameOnlyProp = {
    game: any;
    updateGame: Function;
}

export type CommentaryProps = {
    game: any;
}

export type InventoryProps = {
    game: any;
    updateGame: Function;
}