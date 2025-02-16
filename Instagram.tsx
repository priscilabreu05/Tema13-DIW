import { useState } from "react";
import { House, Search, Compass, CameraReels, ChatDots, Bell, PlusSquare, Grid, Person, List } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";

const menuItems = [
  { icon: <House />, label: "Inicio" },
  { icon: <Search />, label: "Buscar" },
  { icon: <Compass />, label: "Explorar" },
  { icon: <CameraReels />, label: "Reels" },
  { icon: <ChatDots />, label: "Mensajes" },
  { icon: <Bell />, label: "Notificaciones" },
  { icon: <PlusSquare />, label: "Crear" },
  { icon: <Grid />, label: "Panel" },
  { icon: <Person />, label: "Perfil" },
];

function Instagram() {
  const [lista, setLista] = useState(0);

  return (
    <div className="d-flex flex-column p-3 bg-light vh-100" style={{ width: "250px" }}>
      <h1 className="fs-4 fw-bold mb-4">Instagram</h1>
      <ul className="nav flex-column mb-auto">
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            <a
              href="#"
              className={`nav-link d-flex align-items-center gap-2 ${lista === index ? "active" : "text-dark"}`}
              onClick={() => setLista(index)}
            >
              {item.icon} <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <a href="#" className="nav-link d-flex align-items-center gap-2 text-dark">
          <List /> <span>Más</span>
        </a>
      </div>
    </div>
  );
}

export default Instagram;