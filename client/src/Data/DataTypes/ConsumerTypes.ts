//CONSUMER
interface IConsumer {
    eth_address: string,
    username: string,
    location?: string,
    points?: number,
    email: string,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date
}

export type { IConsumer }