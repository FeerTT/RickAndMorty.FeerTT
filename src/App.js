import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/favorites";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const email = "ejemplo@gmail.com";
  const password = "contra1";

  function login(userData) {
    if (userData.password === password && userData.username === email) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Datos incorrectos");
    }
  }
  //DESCOMENTAR PARA PODER NAVEGAR
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const [characters, setCharacters] = useState([]);
  function onSearch(id) {
    if (id > 0 && id < 827) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            const characterExists = characters.some(
              (char) => char.id === data.id
            );
            if (!characterExists) {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    } else {
      window.alert("NO EXISTE");
    }
  }
  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  const { pathname } = useLocation();

  return (
    <>
      <div className="App">
        {pathname !== "/" && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>

        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />

        <Route path="/favorites" element={<Favorites onClose={onClose} />} />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
