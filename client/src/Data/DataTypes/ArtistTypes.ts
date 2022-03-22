interface IArtist {
    id?: number; //(?) as added on server side
    name: string;
    address: string;
    date: Date;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type { IArtist };