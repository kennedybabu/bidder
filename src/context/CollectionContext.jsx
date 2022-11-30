import { info } from 'autoprefixer';
import firebase from 'firebase';
import { useState } from 'react';

const db = firebase.firestore()

const fetchProducts = () => {

    const setData = useState([])

    db.collection("products").get().then((productResponse) => {
        productResponse.forEach(element => {
            var data = element.data()
            setData(arr => [...arr, data])
        })
    })
}

const postProducts = () => {
    const [name  , Setname] = useState("");
    const [type , Settype] = useState("");
    const [price , Setprice] = useState("");
    const post = (e) => {
        e.preventDefault();
         
        // Add data to the store
        db.collection("products").add({
            Nane: name,
            Type: type,
            bidPrice: price
        })
        .then((docRef) => {
            alert("Product Successfully Added");
        })
        .catch((error) => {
            console.error("Error Adding The Product: ", error);
        });
    }
}