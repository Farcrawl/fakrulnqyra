const firebaseConfig = {
    apiKey: "AIzaSyAPqVPaLCrjw9YKFRxODi9Zdg_yqPfF2CQ",
    authDomain: "fakrulnqyra.firebaseapp.com",
    databaseURL: "https://fakrulnqyra-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fakrulnqyra",
    storageBucket: "fakrulnqyra.appspot.com",
    messagingSenderId: "232310140110",
    appId: "1:232310140110:web:34d7dcb12932b2d0c2349f",
    measurementId: "G-G1P1V5VHSS"
  };

// Starting the firebase
  firebase.initializeApp(firebaseConfig);

// reference my db

var FakrulnQyraDB = firebase.database().ref('fakrulnqyrawed')

document.getElementById('fakrulnqyrawed').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();

    var name = getElementVal ('nama');
    var telefon = getElementVal ('telefon');
    var BilanganKehadiran = getElementVal ('bilhadir');
    var Ucapan = getElementVal ('form-field-field_205f1cd');
    var Slot = getElementVal ('form_fields[field_4d141b3]');

    console.log(name,telefon,BilanganKehadiran,Ucapan,Slot);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};