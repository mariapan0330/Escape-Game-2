export type Item = {
    image?: string;
    title: string;
    description: string;
    color: string;
    contains: string[];
    canBePickedUp?: boolean,
    level?: number;
    room: string;
    x: number;
    y: number;
}

export type GameOnlyProp = {
    game: any;
    updateGame: Function;
    objectsData?: any;
}

export type ButtonProps = {
    game?: any;
    updateGame?: Function;
    text: string;
    color: string;
    x: number;
    y: number;
}