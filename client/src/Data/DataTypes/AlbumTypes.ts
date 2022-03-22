interface IAlbum {
    name: string,
    year: Date,//input will have to be with calendar
    description?: string,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date
}

export type { IAlbum };