let news = [];
const getLastNews = async () => {
  let url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10"
  );
  let header = new Headers({
    "x-api-key": "-HE87_3chlwvt_6MipBTJPoVuplsEf3DflHd6uFVJY4",
  });

  let response = await fetch(url, { headers: header });
  let data = await response.json();
  console.log(data);
  news = data.articles;
  console.log(news);
  render();
};

const render = () => {
  let newsHTML = "";
  newsHTML = news
    .map((item) => {
      return `<div class="row news">
    <div class="col-lg-4">
      <img
        class="new-img-size"
        src="https://www.kocis.go.kr/CONTENTS/editImage/usr_1647326635899.jpg"
      />
    </div>
    <div class="col-lg-8">
      <h2>bts 빌보드 진출!!</h2>
      <p>
        빌보드 어쩌구 저쩌구 나 취업 언제하냐ㅜ 상반기 안에 취업뿌신다!!!
      </p>
      <div>KBS * 2023-03-29</div>
    </div>
  </div>`;
    })
    .join("");

  console.log(newsHTML);
  document.getElementById("news-board").innerHTML = newsHTML;
};

getLastNews();
