interface IConsumer {
    eth_address: string,
    username: string,
    profile_picture: string, 
    location?: string,
    email: string,
    //auto-generated
    id?: number,
    createdAt?: Date,
    updatedAt?: Date
}

export type { IConsumer }