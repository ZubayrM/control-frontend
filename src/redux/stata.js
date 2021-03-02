import axios from "axios";
import {renderEntireTree} from "../index";

let render = () =>{
    alert("hi")
}

let state = {

    employees : [
        {
            name : "Gogi",
            surName : "Loshkov"
        },
        {
            name : "Monika",
            surName : "Beluchi"
        }

    ],

    details : [

    ],
    newDetail : "new detail",

    addPost(text) {
        debugger
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respons => {
        })
        state.newDetail = text
        renderEntireTree(state)
    }
}

export let updateNewDetail = (text) => {
    state.newDetail = text
    renderEntireTree(state)
}

export function newPrint (msg) {
    alert(msg)
}

export let addDetail = (detail) => {
    state.details.push(detail)
}

export const subscribe = (subscriber) =>{
    render = subscriber
}

export default state