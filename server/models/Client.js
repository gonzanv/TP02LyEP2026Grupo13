import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { 
        firstname: { type: String, required: true },
        lastname: { type: String, default: '*******'}
    },
    adress: {
        city: { type: String, default: '' },
        street: { type: String, default: '' },
        number: { type: Number, default: 0 },
        zipcode: { type: String, default: '' },
        geolocation: {
            lat: { type: String, default: '0' },
            long: { type: String, default: '0' }
        }
    },
    phone: { type: Number, default: '' } 
}, {timestamps: true });

//Virtual 'id' que mapea al _id de Mongo (compatibilidad con el Frontend)
clientSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => { 
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
    }
})

const Client = mongoose.model('Client', clientSchema);
export default Client;