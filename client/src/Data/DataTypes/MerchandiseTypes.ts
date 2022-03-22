interface IMerchandise {
    name: string;
    type: string,
    description: string,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date
}

export type { IMerchandise }