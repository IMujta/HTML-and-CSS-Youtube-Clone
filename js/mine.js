// Add videos clone
const contentContainer = document.querySelector(".youtube-clone .thumbnail .videos-container");

for(let i = 0; i < 50; i++) {
  
  let thumItem = document.createElement("div");
  thumItem.className = "thumbnail-item";

  let link = document.createElement("a");
  link.href = "#";

  let thumbnailImg = document.createElement("div");
  thumbnailImg.className = "thumbnail-image";

  let thumImg = document.createElement("img");
  thumImg.src = "img/thumbnail.jpg";
  thumImg.alt = "thumbnail Image";

  let timeSpan = document.createElement("span");
  timeSpan.className = "video-length";

  let timeSpanText = document.createTextNode("26:31");
  timeSpan.appendChild(timeSpanText);

  let thumbnailDescription = document.createElement("div");
  thumbnailDescription.className = "thumbnail-description";

  let pfpImg = document.createElement("img");
  pfpImg.src="img/profile-pic2.png";
  pfpImg.alt="pfp Img";

  let textBox = document.createElement("div");
  textBox.className = "text";
  
  let videoTitle = document.createElement("p");
  let videoTitleText = document.createTextNode("Lorem ipsum dolor sit amet, consecte adipiscing elit.");
  videoTitle.appendChild(videoTitleText);

  let channelName = document.createElement("span");
  channelName.className = "channel-name";
  let channelNameText = document.createTextNode("James Gouse");
  channelName.appendChild(channelNameText);

  let views = document.createElement("span");
  views.className = "channel-name";
  let viewsText = document.createTextNode("James Gouse");
  channelName.appendChild(viewsText);

  let time = document.createElement("span");
  time.className = "channel-name";
  let timeText = document.createTextNode("James Gouse");
  channelName.appendChild(timeText);

  textBox.appendChild(videoTitle);
  textBox.appendChild(channelName);
  textBox.appendChild(views);
  textBox.appendChild(time);

  thumbnailDescription.appendChild(pfpImg);
  thumbnailDescription.appendChild(textBox);

  thumbnailImg.appendChild(thumImg);
  thumbnailImg.appendChild(timeSpan);

  link.append(thumbnailImg);
  link.append(thumbnailDescription);

  thumItem.append(link);

  contentContainer.appendChild(thumItem);

}

// Control sidebar

let sideBarBtn =  document.querySelectorAll(".navigations-Yt-Button .nav-btn");

console.log(sideBarBtn)

let minSideBar = document.querySelector(".sidebar");
let fullSideBar = document.querySelector(".full-sidebar");

sideBarBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(minSideBar.classList.contains("active")) {
      minSideBar.classList.remove("active");
      fullSideBar.classList.add("active");
    } else {
      minSideBar.classList.add("active");
      fullSideBar.classList.remove("active");
    }
  });
});