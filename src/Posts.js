export default function Posts() {
  return (
    <>
      <div class="post">
        <div class="postTop">
          <div class="postTop-left">
            <img src="img-videos/meowed1.png" alt="profile" />
            <p class="profile-name-post">meowed</p>
          </div>
          <ion-icon class="postTop-rigth" name="ellipsis-horizontal"></ion-icon>
        </div>
        <video width="100%" height="612px" autoplay muted loop>
          <source
            src="img-videos/video-projeto-instagram.mp4"
            type="video/mp4"
          />
          <source
            src="img-videos/video-projeto-instagram.ogv"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
        <div class="postBottom">
          <div class="iconsPost">
            <div class="postBottom-left">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon
              class="postBottom-rigth"
              name="bookmark-outline"
            ></ion-icon>
          </div>
          <div class="likes">
            <img src="img-videos/respondeai1.png" alt="profile" />
            <p>
              Curtido por <strong>respondeai</strong> e
              <strong>outras 101.523 pessoas</strong>
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
      <div class="post">
        <div class="postTop">
          <div class="postTop-left">
            <img src="img-videos/barked1.png" alt="profile" />
            <p class="profile-name-post">barked</p>
          </div>
          <ion-icon class="postTop-rigth" name="ellipsis-horizontal"></ion-icon>
        </div>
        <img class="post-img" src="img-videos/barked-img-1.jpg" alt="CatImg" />
        <div class="postBottom">
          <div class="iconsPost">
            <div class="postBottom-left">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon
              class="postBottom-rigth"
              name="bookmark-outline"
            ></ion-icon>
          </div>
          <div class="likes">
            <img src="img-videos/adorableanimals1.png" alt="profile" />
            <p>
              Curtido por <strong>adorable_animals</strong> e
              <strong>outras 99.159 pessoas</strong>
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
      <div class="post">
        <div class="postTop">
          <div class="postTop-left">
            <img src="img-videos/meowed1.png" alt="profile" />
            <p class="profile-name-post">meowed</p>
          </div>
          <ion-icon class="postTop-rigth" name="ellipsis-horizontal"></ion-icon>
        </div>
        <img class="post-img" src="img-videos/meowed-img-2.jpg" alt="CatImg" />
        <div class="postBottom">
          <div class="iconsPost">
            <div class="postBottom-left">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon
              class="postBottom-rigth"
              name="bookmark-outline"
            ></ion-icon>
          </div>
          <div class="likes">
            <img src="img-videos/respondeai1.png" alt="profile" />
            <p>
              Curtido por <strong>respondeai</strong> e
              <strong>outras 101.523 pessoas</strong>
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
    </>
  );
}
