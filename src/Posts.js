import { useState } from "react";

function Post(props) {
  const [save, setSave] = useState("bookmark-outline");
  const [like, setLike] = useState("heart-outline");
  const [num, setNum] = useState(1450);

  return (
    <div class="post">
      <div class="postTop">
        <div class="postTop-left">
          <img src={props.profileImg} alt="profile" />
          <p class="profile-name-post">{props.profileName}</p>
        </div>
        <ion-icon class="postTop-rigth" name="ellipsis-horizontal"></ion-icon>
      </div>
      <img
        class="post-img"
        src={props.src}
        alt={props.src}
        onClick={() => {
          setLike(like === "heart-outline" ? "heart" : "heart-outline");
          setNum(like === "heart-outline" ? num + 1 : num - 1);
        }}
      />
      <div class="postBottom">
        <div class="iconsPost">
          <div class="postBottom-left">
            <ion-icon
              name={like}
              onClick={() => {
                setLike(like === "heart-outline" ? "heart" : "heart-outline");
                setNum(like === "heart-outline" ? num + 1 : num - 1);
              }}
              class={
                like === "heart-outline"
                  ? "md hydrated"
                  : "color-red md hydrated"
              }
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon
            class="postBottom-rigth"
            name={save}
            onClick={() => {
              setSave(
                save === "bookmark-outline" ? "bookmark" : "bookmark-outline"
              );
            }}
          ></ion-icon>
        </div>
        <div class="likes">
          <img src="img-videos/adorableanimals1.png" alt="profile" />
          <p>
            Curtido por <strong>adorable_animals</strong> e
            <strong> outras {num} pessoas</strong>
          </p>
        </div>
        <div class="comment">
          <div class="comment-text">
            <p>
              <strong>Profile</strong>
            </p>
            <p class="comment2">Lorem Ipsum is simply dummy text</p>
          </div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div class="comment">
          <div class="comment-text">
            <p>
              <strong>Profile</strong>
            </p>
            <p class="comment2">Lorem Ipsum is simply dummy text</p>
          </div>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
      </div>
      <div class="send-comment">
        <ion-icon name="chatbubble-outline"></ion-icon>
        <input placeholder="Add a comment..." />
        <p>Post</p>
      </div>
    </div>
  );
}

export default function Posts() {
  const dadosPost = [
    {
      profileName: "meowed",
      profileImg: "img-videos/meowed1.png",
      src: "img-videos/meowed-img-2.jpg",
    },
    {
      profileName: "barked",
      profileImg: "img-videos/barked1.png",
      src: "img-videos/barked-img-1.jpg",
    },
    {
      profileName: "meowed",
      profileImg: "img-videos/meowed1.png",
      src: "img-videos/nova_imagem.jpg",
    },
  ];

  return (
    <>
      {dadosPost.map((e) => (
        <Post
          profileName={e.profileName}
          profileImg={e.profileImg}
          src={e.src}
        />
      ))}
    </>
  );
}
