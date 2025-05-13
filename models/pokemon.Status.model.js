import mongoose, { trusted } from "mongoose";

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
    pokemon_id:{
        type:Number,
        required:true,
        unique:true, 
    },
    view:{
        type:Boolean,
        default:true
    },
    catch:{
        type:Boolean,
        default:false
    },
    in_team:{
        type:Boolean,
        default:false
    },
    power_level:{
        type:Number,
        default: 5
    }
})
export default mongoose.model("pokemonStatus28",pokemonSchema)