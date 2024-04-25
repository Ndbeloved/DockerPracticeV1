import mongoose from "mongoose"

const initDB = async function(App){
    if(process.env.DEPLOYMENT_ENV == 'test'){
        mongoose.connect(process.env.MONGO_URL_TEST)
            .then(()=>{
                console.log('connected to mongoDB successfully')
                App.listen(process.env.PORT, ()=>{
                    console.log(`App is listening http://localhost:${process.env.PORT}`)
                })
            })
    }
    else{
        mongoose.connect(process.env.MONGO_URL_PROD)
            .then(()=>{
                console.log('connected to mongoDB successfully')
                App.listen(process.env.PORT, ()=>{
                    console.log(`App is listening https://live:${process.env.PORT}`)
                })
            })
    }
}

export {initDB}