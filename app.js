// app.js : 영화 보드 렌더링, 검색, 필터, 정렬, 찜 저장, 상세 보기 / 방준태

// liked : 브라우저 localStorage에 저장된 찜 영화 제목 배열
const liked = JSON.parse(localStorage.getItem("liked") || "[]");
const dialog = document.getElementById("detail");

// saveLiked : 없음 ⇒ liked 배열을 localStorage에 문자열로 저장
function saveLiked() {
  localStorage.setItem("liked", JSON.stringify(liked));
}

// posterUrl : 포스터 경로(문자열 또는 null), 이미지 크기(문자열) ⇒ TMDB 이미지 주소 문자열
function posterUrl(path, size) {
  if (!path) {
    return "";
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

// search : 영화 배열, 검색어(문자열) ⇒ 제목에 검색어가 포함된 새 배열
function search(list, keyword) {
  const q = keyword.trim().toLowerCase();
  return list.filter((m) => m.title.toLowerCase().includes(q));
}

// sortBy : 영화 배열, 정렬 키(문자열), 내림차순 여부(불리언) ⇒ 정렬된 새 배열(원본 불변)
function sortBy(list, key, desc) {
  const sign = desc ? -1 : 1;
  return [...list].sort((a, b) => {
    if (typeof a[key] === "string") {
      return a[key].localeCompare(b[key]) * sign;
    }
    return (a[key] - b[key]) * sign;
  });
}

// getView : 없음 ⇒ 검색, 보기 필터, 정렬 순서로 처리한 새 배열
function getView() {
  const keyword = document.getElementById("q").value;
  const viewType = document.querySelector('input[name="type"]:checked').value;
  const sortKey = document.getElementById("sort").value;

  const searched = search(movies, keyword);
  const filtered =
    viewType === "all"
      ? searched
      : searched.filter((m) => m.type === viewType);

  return sortBy(filtered, sortKey, sortKey !== "title");
}

// renderCards : 영화 배열 ⇒ 카드 DOM 생성 및 개수, 찜 수, 빈 결과 상태 갱신
function renderCards(list) {
  const board = document.getElementById("board");
  const countEl = document.getElementById("count");
  const likeCountEl = document.getElementById("likeCount");

  board.innerHTML = "";

  for (const m of list) {
    const card = document.createElement("article");
    card.className = "card";
    if (m.rating >= 8) {
      card.classList.add("hot");
    }
    card.setAttribute("data-type", m.type);
    card.setAttribute("data-title", m.title);

    const rankHtml =
      m.type === "boxoffice" && m.rank !== null
        ? `<span class="rank">${m.rank}</span>`
        : "";

    const hotClass = m.rating >= 8 ? "badge hot" : "badge";
    const badgeHtml = `<span class="${hotClass}">${m.rating}</span>`;

    let posterHtml = "";
    if (!m.poster) {
      card.classList.add("no-poster");
      posterHtml = `<div class="poster-fallback">${m.title[0]}</div>`;
    } else {
      posterHtml = `<img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title}">`;
    }

    const likeClass = liked.includes(m.title) ? "like liked" : "like";

    card.innerHTML = `
      ${rankHtml}
      ${badgeHtml}
      ${posterHtml}
      <div class="info">
        <h3>${m.title}</h3>
        <p class="year">${m.year}</p>
      </div>
      <button class="${likeClass}" type="button">♥</button>
    `;

    board.appendChild(card);
  }

  countEl.textContent = `${list.length}편`;
  likeCountEl.textContent = liked.length;

  if (list.length === 0) {
    board.classList.add("is-empty");
  } else {
    board.classList.remove("is-empty");
  }
}

// refresh : 없음 ⇒ getView() 결과를 renderCards()로 다시 그림
function refresh() {
  renderCards(getView());
}

// openDetail : 영화 제목(문자열) ⇒ 해당 영화 상세 정보를 dialog에 넣고 열기
function openDetail(title) {
  const movie = movies.find((m) => m.title === title);
  if (!movie) {
    return;
  }

  const detailBody = document.getElementById("detailBody");
  const posterHtml = movie.poster
    ? `<img src="${posterUrl(movie.poster, "w500")}" alt="${movie.title}">`
    : `<div class="poster-fallback">${movie.title[0]}</div>`;

  detailBody.innerHTML = `
    ${posterHtml}
    <h2>${movie.title}</h2>
    <p>개봉일: ${movie.date}</p>
    <p>평점: ${movie.rating}</p>
    <p>${movie.overview}</p>
  `;

  dialog.showModal();
}

// 초기 화면 그리기
refresh();

// ===== 이벤트 리스너 (렌더 함수 밖 맨 아래에 한 번씩만 등록) =====
document.getElementById("q").addEventListener("input", refresh);
document.getElementById("sort").addEventListener("change", refresh);
document.getElementById("typeFilter").addEventListener("change", refresh);

document.getElementById("board").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) {
    return;
  }

  const title = card.getAttribute("data-title");

  if (e.target.closest(".like")) {
    const idx = liked.indexOf(title);
    if (idx === -1) {
      liked.push(title);
    } else {
      liked.splice(idx, 1);
    }
    saveLiked();
    refresh();
    return;
  }

  openDetail(title);
});

document.getElementById("closeDetail").addEventListener("click", () => {
  dialog.close();
});
