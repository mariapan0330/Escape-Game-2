export type Item = {
    image?: string;
    title: string;
    description: string;
}

export type GameOnlyProp = {
    game: any;
    updateGame: Function;
}