import { useState } from "react";
import postData from "../data/postdata";
// 1. import useState
function Posts() {
  // 2. สร้าง State กำหนดค่าตั้งต้นเป็นข้อมูลที่มี
  const [like, setLike] = useState(postData);

  const thumbUp = (likeIndex) => {
    // 4. เขียน logic ในการอัพเดท like state ตอนนี้มันคือ [{},{}] > Clone Array > reassign ตัว property likesตามindex ให้บวกเพิ่ม > อัพเดทตัว stateเป็นค่าใหม่
    const addNewLike = [...like];
    addNewLike[likeIndex].likes += 1;
    setLike(addNewLike);
  };

  const thumbDown = (likeIndex) => {
    const addNewLike = [...like];
    addNewLike[likeIndex].likes > 0
      ? (addNewLike[likeIndex].likes -= 1)
      : (addNewLike[likeIndex].likes = 0);
    setLike(addNewLike);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {like.map((item, index) => {
          // เอา like มา render เป็น list item ด้วย .map() มีparam 1ตัว
          // state อยู่ใน arrayของobject
          return (
            <div key={index} class="post-item">
              <div class="post-header">
                <h2>{item.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{item.likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    thumbUp(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    thumbDown(index);
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
