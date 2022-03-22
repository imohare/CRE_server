interface IArtist {
    eth_address: string,
    username: string,
    website: string,
    instagram?: string,
    twitter?: string,
    discord?: string,
    spotify?: string,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date
}

export type { IArtist };