interface IEvent {
    name: string,
    address: string,
    date: Date,
    description: string,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date
}

export type { IEvent }