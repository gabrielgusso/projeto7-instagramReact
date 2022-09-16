import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Container() {
  return (
    <div class="center">
      <div class="container">
        <div class="timeline">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
