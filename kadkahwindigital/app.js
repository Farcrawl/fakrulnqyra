// Initialize [COPY THE SNIPPET PROJECT OVERVIEW SETTINGS -> GENERAL -. FIREBASE SDK SNIPPET]
var config = {
  apiKey: "AIzaSyAPqVPaLCrjw9YKFRxODi9Zdg_yqPfF2CQ",
  authDomain: "fakrulnqyra.firebaseapp.com",
  databaseURL: "https://fakrulnqyra-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fakrulnqyra",
  storageBucket: "fakrulnqyra.appspot.com",
  messagingSenderId: "232310140110",
  appId: "1:232310140110:web:34d7dcb12932b2d0c2349f",
  measurementId: "G-G1P1V5VHSS"
  };
  firebase.initializeApp(config);
  

  //Reference for form collection
  let formMessage = firebase.database().ref('RSVP');
  
  //listen for submit event
  document.getElementById('RSVP')
  document.addEventListener('submit', formSubmit);
  
  //Submit form
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let kehadiran = document.querySelector('#kehadiran').value;
    let nama = document.querySelector('#nama').value;
    let notel = document.querySelector('#notel').value;
    let bilhadir = document.querySelector('#bilhadir').value;
    let slothadir = document.querySelector ('#slothadir').value;
    let ucapan = document.querySelector ('#ucapan').value;

    //send message values
    sendMessage(kehadiran,nama,notel,bilhadir,slothadir,ucapan);
  
    // //Hide Alert Message After Seven Seconds
    // setTimeout(function() {
    //   document.querySelector('.alert1').style.display = 'none';
    // }, 7000);
        
    // //Show Alert Message
    // document.querySelector('.alert1').style.display = 'block';
  

  
    //Form Reset After Submission
    document.getElementById('RSVP').reset();
  }
  
  //Send Message to Firebase
  
  function sendMessage(KehadiranTetamu,Nama,NoTelefon,BilanganKehadiran,SlotKehadiran,ucapan) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      kehadiran: KehadiranTetamu,
      nama:Nama,
      notel:NoTelefon,
      bilhadir:BilanganKehadiran ,
      slothadir:SlotKehadiran,
      ucapan:ucapan
    });}