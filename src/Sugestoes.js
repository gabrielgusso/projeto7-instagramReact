export default function Sugestoes() {
  function Sugestoes(props) {
    return (
      <div class="follow">
        <div class="follow1">
          <img src={props.src} alt="profile" />
          <div class="sidebarMid-text">
            <p class="sidebarMid-text1">{props.name}</p>
            <p class="sidebarMid-text2">Segue você</p>
          </div>
        </div>
        <p class="follow-blue">seguir</p>
      </div>
    );
  }

  const SugestoesObj = [
    { name: "bad.vibes.memes", src: "img-videos/badvibesmemes1.png" },
    { name: "chibirdart", src: "img-videos/chibirdart1.png" },
    { name: "razoesparaacreditar", src: "img-videos/razoesparaacreditar1.png" },
    { name: "adorable_animals", src: "img-videos/adorableanimals1.png" },
    { name: "smallcutecats", src: "img-videos/smallcutecats1.png" },
  ];

  return (
    <>
      <div class="suggestion">
        <p class="suggestion1">Sugestões para você</p>
        <p class="suggestion2">Ver tudo</p>
      </div>
      <div class="sidebarMid">
        {SugestoesObj.map((e) => (
          <Sugestoes name={e.name} src={e.src} />
        ))}
      </div>
    </>
  );
}
