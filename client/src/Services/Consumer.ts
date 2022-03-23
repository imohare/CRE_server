import { IConsumer } from "../Data/DataTypes";
const BASE_URL = 'http://localhost:3001'

const createConsumer = (consumer: IConsumer) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consumer)
    }
    fetch(`${BASE_URL}/createConsumer`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getConsumerById = (consumerId: number) => {
    fetch(`${BASE_URL}/getConsumerById/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const getConsumerByUsername = (consumerUsername: string) => {
    fetch(`${BASE_URL}/getConsumerByUsername/${consumerUsername}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const getConsumerByEthAddress = (consumerEthAddress: string) => {
    fetch(`${BASE_URL}/getConsumerByEthAddress/${consumerEthAddress}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}


const deleteConsumer = (consumerId: number) => {
    return fetch(`${BASE_URL}/deleteConsumer/${consumerId}`, 
    {method: "DELETE"});
}

export { createConsumer, getConsumerById, getConsumerByUsername, deleteConsumer, getConsumerByEthAddress }