import mongoose from "mongoose"

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    joinedAt: {
        type: Date,
        default: Date.now(),
    }
})

const model = mongoose.model('users', Schema)

export default model