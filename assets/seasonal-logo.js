// assets/seasonal-logo.js
document.addEventListener("DOMContentLoaded", () => {
  const logoImg = document.querySelector(".brand img");
  if (!logoImg) return;

  const today = new Date();
  const m = today.getMonth() + 1; // 1-12
  const d = today.getDate();      // 1-31
  const md = m * 100 + d;         // 例: 12月6日 => 1206

  // デフォルト（万が一どの期間にも当てはまらないとき用）
  let src = "images/logo-wordmark.svg";
  let alt = "Brave Athletes Club";

  // クリスマス 12/6–12/25
  if (md >= 1206 && md <= 1225) {
    src = "assets/seasonal/logo-christmas.png";
    alt = "Brave Athletes Club Christmas Logo";

  // 冬ピンク 12/26–2/2（年またぎ）
  } else if (md >= 1226 || md <= 202) {
    src = "assets/seasonal/logo-winter-pink.png";
    alt = "Brave Athletes Club Winter Logo";

  // Spring 黄色 2/3–3/15
  } else if (md >= 203 && md <= 315) {
    src = "assets/seasonal/logo-spring-yellow.png";
    alt = "Brave Athletes Club Spring Yellow Logo";

  // Spring ピンク 3/16–4/15
  } else if (md >= 316 && md <= 415) {
    src = "assets/seasonal/logo-spring-pink.png";
    alt = "Brave Athletes Club Spring Pink Logo";

  // 黒背景ピンク 4/16–5/15
  } else if (md >= 416 && md <= 515) {
    src = "assets/seasonal/logo-black-pink.png";
    alt = "Brave Athletes Club Black Background Logo";

  // 釣りサイ 5/16–6/30
  } else if (md >= 516 && md <= 630) {
    src = "assets/seasonal/logo-fishing.png";
    alt = "Brave Athletes Club Fishing Logo";

  // 海のサイ 7/1–8/15
  } else if (md >= 701 && md <= 815) {
    src = "assets/seasonal/logo-summer-sea.png";
    alt = "Brave Athletes Club Summer Sea Logo";

  // オールシーズン 8/16–9/30
  } else if (md >= 816 && md <= 930) {
    src = "assets/seasonal/logo-allseason.png";
    alt = "Brave Athletes Club All Season Logo";

  // もみじ 10/1–11/15
  } else if (md >= 1001 && md <= 1115) {
    src = "assets/seasonal/logo-autumn-maple.png";
    alt = "Brave Athletes Club Autumn Logo";

  // 秋冬背景の黄色 11/16–12/5
  } else if (md >= 1116 && md <= 1205) {
    src = "assets/seasonal/logo-autumn-winter-yellow.png";
    alt = "Brave Athletes Club Autumn-Winter Logo";
  }

  logoImg.src = src;
  logoImg.alt = alt;
});
