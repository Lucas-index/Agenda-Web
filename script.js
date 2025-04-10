// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set, get, child, remove } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZYPXJAj7rps0HSW-feSdsfN5nBxdWNJs",
  authDomain: "calculadora-lucas.firebaseapp.com",
  databaseURL: "https://calculadora-lucas-default-rtdb.firebaseio.com",
  projectId: "calculadora-lucas",
  storageBucket: "calculadora-lucas.appspot.com",
  messagingSenderId: "129654163462",
  appId: "1:129654163462:web:1b6ab422a2db45a1c49b87",
  measurementId: "G-3MPSGFDJRC"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Utilitários Firebase
async function getReservas() {
  const snapshot = await get(ref(db, 'reservas'));
  return snapshot.exists() ? snapshot.val() : {};
}

async function salvarReservas(reservas) {
  await set(ref(db, 'reservas'), reservas);
}

// ----- LOGIN COM USUÁRIOS FIXOS -----
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    console.log("Login form encontrado ✅");  
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const validUsers = {
      "Administrador": "123456789",
      "Matemático": "123456789"
    };

    if (validUsers[username] && validUsers[username] === password) {
      localStorage.setItem('userLogado', username);
      window.location.assign("calendar.html"); // redireciona corretamente
    } else {
      alert("Usuário ou senha inválidos.");
    }
  });
}

