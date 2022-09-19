import { useState } from "react";
import Sugestoes from "./Sugestoes";

function UserName(){
  const [nome, setNome] = useState("Catana");
  const [img, setImg] = useState("img-videos/catanacomics1.png");
  
  return(
    <div class="sidebarTop">
    <img
      src={img}
      alt="profile"
      onClick={() => setImg(prompt("Coloque o link da sua foto aqui"))}
    />
    <div sidebarTop-text>
      <p class="sidebarTop-p1">catanacomics</p>
      <div class="pencil">
        <p class="sidebarTop-p2">{nome}</p>
        <ion-icon
          name="pencil"
          onClick={() => setNome(prompt("Qual seu nome?"))}
        ></ion-icon>
      </div>
    </div>
  </div>
  )
}

export default function Sidebar() {

  return (
    <div class="sidebar">
      <UserName />
      <Sugestoes />
      <p class="aboutUs">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </p>
      <p class="instagram2022">© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
  );
}
