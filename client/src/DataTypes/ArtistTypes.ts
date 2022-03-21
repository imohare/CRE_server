interface IArtist {
    name: string;
    address: string;
    date: Date;
    description?: string;
    id: number;
    createdAt?: string;
    updatedAt?: string;
}

export type { IArtist };