// import Titulo from "./Titulo";
// import Card from "./components/Card";
// import { useEffect, useState } from "react";
import Instagram from "./components/Instagram";
import "./App.css";
//import Card, { CardBody } from "./components/Card";
//import List from "./components/List";
//import UseEffect from "./components/UseEffect";

function App(){
  return (
    <div className="d-flex">
      <Instagram />
    </div>
  );
  /*
  const nombres = ["Pepito", "Luis", "Adrian"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("sacando por consola", elemento);
  };

 */

  /*
  const [posicion, setPosicion] = useState ("");
  useEffect(() => {
    const manejarPosicion = (evento) => {
      setPosicion("x= "+evento.clientX+" y= "+evento.clientY);
    }
    window.addEventListener("mousemove", manejarPosicion)
  }, []);
  return (
    <div>
      <h1>La posicion del raton es:</h1>
      <h2>{posicion}</h2>
    </div>
  )
    */

/*
  const [mensaje, setMensaje] = useState ("");
  useEffect(() => {
    const manejarTecla = (evento) => {
      //console.log(evento.key);
      if (evento.key == "Escape"){
        setMensaje("Bieen presionaste Escape");
    }
    };
    window.addEventListener("keydown", manejarTecla);  
  }, []);
  return (
    <div>
      <h1>Has presionado la tecla</h1>
      <h2>{mensaje}</h2>
    </div>
  )
*/
/* 
  return <Titulo /> 
 return <Titulo></ Titulo>
 return(
   <CardBody title = {"Hola Mundo"} text = {"Este es el texto de cardbody"} />;
   <Card>
     <CardBody title = {"Hola Mundo"} text = {"Este es el texto de cardbody"}/>
     <List data = {nombres} onSelect = {handleSelect} />
     <List data = {nombres} onSelect = {handleSelect2} />
   </Card>
 );
  */
}

export default App;