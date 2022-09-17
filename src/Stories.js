function Storie(props) {
  return (
    <div class="storiesAndName">
      <div class="stories-border-colorful">
        <div class="stories-border-white">
          <img class="stories-img" src={props.img} alt="stories" />
        </div>
      </div>
      <p class="storiesName">{props.name}</p>
    </div>
  );
}

export default function Stories() {
  const dadosStorie = [
    { name: "9gag", img: "img-videos/9gag.png" },
    { name: "meowed", img: "img-videos/meowed1.png" },
    { name: "barked", img: "img-videos/barked1.png" },
    { name: "nathanw..", img: "img-videos/nathanwpylestrangeplanet1.png" },
    { name: "wawawi..", img: "img-videos/wawawiwacomicsa1.png" },
    { name: "respondeai", img: "img-videos/respondeai1.png" },
    { name: "filomoderna", img: "img-videos/filomoderna1.png" },
    { name: "memeriago", img: "img-videos/memeriagourmet1.png" },
  ];

  return (
    <div class="stories">
      {dadosStorie.map((e) => (
        <Storie name={e.name} img={e.img} />
      ))}
      <img class="arrow" src="img-videos/Vector.png" alt="arrow" />
    </div>
  );
}
