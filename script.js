const create_post = document.getElementById("create-post");
const main_center = document.querySelector(".main_center");
const cancel = document.getElementById("cancel_btn");

create_post.addEventListener("click", () => {
  let popup_box = document.createElement("div");
  popup_box.classList.add("popup");
  let HTMLdata = `
  <div class="overlay">
  <div class="content">
      <i class="fas fa-regular fa-xmark" id="cancel_btn"></i>
      <div class="flex">
          <img src="images/my-pic.jpg" class="story-pic1">
          <div class="input">
              <textarea name="" id="write" cols="30" rows="6"
                  placeholder="What's happening?" class='text-area'></textarea>
          </div>
      </div>
      <img src="" id="img_show" class="img_show">
      <hr class="line2">
      <div class="post-snap">
          <div class="file-input-container">
              <input id="image-input" class="file-input" type="file" accept="image/*">
              <label for="image-input" class="custom-file-input"><i class="fa fa-duotone fa-image"
                      id="img-icon"></i>Choose File</label>
          </div>

          <button id="post">Post</button>
      </div>
  </div>
</div>`;

  popup_box.insertAdjacentHTML("afterbegin", HTMLdata);
  main_center.appendChild(popup_box);

  cancel_btn.addEventListener("click", () => {
    popup_box.remove();
  });

  const select_Image = document.getElementById("img_show");
  const fileInput = document.getElementById("image-input");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      select_Image.src = reader.result;
      select_Image.style.display = "block"; // show the selected image
    });

    reader.readAsDataURL(file);
  });

  fileInput.style.display = "block";

  let story = document.querySelector(".story");
  let text = document.querySelector(".text-area");
  let post = document.getElementById("post");

  post.addEventListener("click", () => {
    popup_box.remove();
    const htmlData = `<div class="snaping">
    <div class="about-snap">
        <img src="images/my-pic.jpg" class="person-img">
        <div class="pos">
            <div class="nam">
                <div class="tick">
                    <span class="name-img">Hanish tharwani</span>
                    <img src="images/blue_tick.png" class="blue">
                    <span class="user-name">@Hanish$</span>
                </div>
        
                <div class="clas">
                <i class="fa-solid fa-ellipsis" id="dot-icon1"></i>
                <div class="delete-option" style="display: none;">
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
            </div>
            <span class="time">2 hours ago</span>
            <span class="text">${text.value}</span>
            ${
              fileInput.value
                ? `<img src="${select_Image.src}" id="text-img">`
                : ""
            }

            <div class="like-retweet">
                <div class="like">
                    <i class="far fa-regular fa-heart" id="icon_like"></i>
                    <span class="like-name">Like</span>
                </div>
                <div class="like">
                    <i class="far fa-regular fa-lightbulb" id="icon_snap"></i>
                    <span class="like-name">Resnap</span>
                </div>
                <div class="like">
                    <i class="fa-solid fa-comment-dots" id="icon"></i>
                    <span class="like-name">Comment</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

    story.insertAdjacentHTML("afterend", htmlData);
    const dotIcon = document.getElementById("dot-icon1");
    const deleteOption = document.querySelector(".delete-option");
    const deleteBtn = document.querySelector(".delete-btn");

    dotIcon.addEventListener("click", () => {
      deleteOption.style.display = "block";
    });

    deleteBtn.addEventListener("click", () => {
      dotIcon.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    });

    const likeBtns = document.querySelectorAll("#icon_like");
    const snapBtns = document.querySelectorAll("#icon_snap");

    likeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("far");
        btn.classList.toggle("fas");
      });
    });

    snapBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("far");
        btn.classList.toggle("fas");
      });
    });
  });
});

const like = document.querySelectorAll("#icon_like");
const snap = document.querySelectorAll("#icon_snap");
like.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("far");
    element.classList.toggle("fas");
  });
});
snap.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("far");
    element.classList.toggle("fas");
  });
});
