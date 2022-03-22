import { IConsumer } from "DataTypes";

//BASEURI
const BASE_URL = 'http://localhost:3001'


//createConsumer
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

//getConsumerById
const getConsumerById = (consumerId: number) => {
    fetch(`${BASE_URL}/getConsumer/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}



//**patch consumer points
// patchConsumerPoints=()=>{} //not done yet

export { createConsumer, getConsumerById }