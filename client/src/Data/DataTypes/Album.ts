interface IAlbum {
    name: string,
    year: string,
    description?: string,
    number_of_tokens: number,
    tokens_image: string,
    tokens_value: number,

    //auto-generated
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
    ArtistId: number,
}

export type { IAlbum };