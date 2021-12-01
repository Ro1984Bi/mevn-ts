import {connect}  from 'mongoose';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const startConnection = async () => {
try {
    const db = await connect('mongodb://localhost/mevn-db')
    console.log(db.connect.name)
} catch (error) {
    console.error(error)
}
}