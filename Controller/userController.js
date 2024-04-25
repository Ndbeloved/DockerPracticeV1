import UserModel from "../Models/UserSchema.js"

const createUser = async function(req, res){
    try{
        const {name} = req.body
        const userCreate = new UserModel({
            name
        })

        await userCreate.save()
        res.status(201).json({message: "user created successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Error trying to save user"})
    }
}

export {createUser}