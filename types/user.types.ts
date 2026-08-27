export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,

    address: {
        street: string,
        city: string
        zipcode: string
    },

    company: {
        name: string,
        catchPhrase: string,
    }
}