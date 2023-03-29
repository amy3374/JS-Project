let news = [];
let menus = document.querySelectorAll(".menu-bar button");
menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByTopic(event))
);

let searchButton = document.getElementById("search-button");

const getLatestNews = async () => {
  let url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10"
  );
  let header = new Headers({
    "x-api-key": "-HE87_3chlwvt_6MipBTJPoVuplsEf3DflHd6uFVJY4",
  });

  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  render();
};

const getNewsByTopic = async (event) => {
  let topic = event.target.textContent.toLowerCase();
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`
  );
  let header = new Headers({
    "x-api-key": "-HE87_3chlwvt_6MipBTJPoVuplsEf3DflHd6uFVJY4",
  });

  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  render();
};

const searchNews = async () => {
  console.log("click");
  let keyword = document.getElementById("search-input").value;
  console.log(keyword);
  let url = new URL(
    `https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`
  );
  let header = new Headers({
    "x-api-key": "-HE87_3chlwvt_6MipBTJPoVuplsEf3DflHd6uFVJY4",
  });

  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  render();
};

const render = () => {
  let newsHTML = "";
  newsHTML = news
    .map((item) => {
      return `<div class="row news">
    <div class="col-lg-4">
      <img
        class="new-img"
        src="${item.media}"
      />
    </div>
    <div class="col-lg-8">
      <h2>${item.title}</h2>
      <p>
        ${item.summary}
      </p>
      <div>${item.rights} * ${item.published_date}/div>
    </div>
  </div>`;
    })
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};

searchButton.addEventListener("click", searchNews);
getLatestNews();
