import MenuMobile from "./MenuMobile";

export default function Menu() {
  return (
    <>
      <div class="allmenu">
        <div class="menu">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="spacer"></div>
            <img
              src="img-videos/logo.png"
              class="logo-text"
              alt="logo instagram"
            />
          </div>
          <img class="logo-mobile" src="img-videos/logo.png" alt="logo" />
          <input type="text" placeholder="Pesquisar" />
          <div class="menu-itens">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon class="compass" name="compass-outline"></ion-icon>
            <ion-icon class="heart" name="heart-outline"></ion-icon>
            <ion-icon class="person" name="person-outline"></ion-icon>
          </div>
        </div>
      </div>
      <MenuMobile />
    </>
  );
}
