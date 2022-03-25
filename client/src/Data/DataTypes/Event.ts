interface IEvent {
    name: string,
    address: string,
    date: Date,
    description: string,
    number_of_tokens: number,
    tokens_image: string,
    tokens_value: number,
    //auto-generated
    id: number,
    createdAt: Date,
    updatedAt: Date
    ArtistId?: number,
}

export type { IEvent }