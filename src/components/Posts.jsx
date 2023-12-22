import data from "./data";
import { useState } from "react";

function Posts() {
  const [addlike, setAddlike] = useState(data);

  const plusLike = (index) => {
    const newLike = [...addlike];
    newLike[index].likes = newLike[index].likes + 1;
    setAddlike(newLike);
  };
  const disLike = (index) => {
    const newLike = [...addlike];
    if (newLike[index].likes > 0) {
      newLike[index].likes = newLike[index].likes - 1;
    }
    setAddlike(newLike);
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Post</h1>
      <div class="post-list">
        {addlike.map((item, index) => {
          return (
            <div class="post-item">
              <div class="post-header">
                <h2>
                  {item.title}#{item.id}
                </h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes:</span>
                  <span class="post-likes">{item.likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    plusLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    disLike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
