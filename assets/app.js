const allContainer = document.querySelector(".all-contain"),
  container = document.querySelectorAll(".container"),
  shortcutImg = document.querySelectorAll(".shortcut .ph img"),
  shortcut = document.querySelector(".shortcut"),
  shortcutMore = document.querySelector("main .shortcut .ph.more"),
  element = document.querySelector("main .element");

let scActive = document.querySelector(".shortcut .ph img.active"),
  conActive = document.querySelector(".container.active");

shortcutImg.forEach((sc) => {
  sc.addEventListener("click", () => {
    scActive.classList.remove("active");
    sc.classList.add("active");
    scActive = sc;
    conActive.classList.remove("active");
    container.forEach((con) => {
      if (sc.dataset.shortcut == con.dataset.contain) {
        con.classList.add("active");
        conActive.querySelector(".contain-main").style.opacity = 0;
        conActive = con;
        conActive.querySelector(".contain-main").style.opacity = 1;
      }
    });
  });
});

container.forEach((con) => {
  let title = con.querySelector(".contain-main .title"),
    tag = con.querySelector(".contain-main .tag"),
    subtitle = con.querySelector(".contain-main .subtitle"),
    more = con.querySelector(".contain-main .more"),
    textMore = con.querySelector(".text-more"),
    back = textMore.querySelector(".back"),
    background = con.querySelector(".background img");

  more.addEventListener("click", () => {
    title.style.transform = "translateY(-45vh)";
    tag.style.transform = "translateY(-45vh)";
    subtitle.style.transform = "translateX(-35vh)";
    more.style.transform = "translateX(-35vw)";
    textMore.classList.add("show");
    shortcut.style.opacity = 0;
    shortcut.style.pointerEvents = "none";
    background.style.filter = "blur(4px)";
  });

  back.addEventListener("click", () => {
    title.style.transform = "translateY(0)";
    tag.style.transform = "translateY(0)";
    subtitle.style.transform = "translateX(0)";
    more.style.transform = "translateX(0";
    textMore.classList.remove("show");
    background.style.filter = "blur(0px)";
    setTimeout(() => {
      shortcut.style.opacity = 1;
      shortcut.style.pointerEvents = "all";
    }, 420);
  });

  title.addEventListener("click", () => {
    title.style.transform = "translateY(0)";
    tag.style.transform = "translateY(0)";
    textMore.classList.remove("show");
    subtitle.style.transform = "translateX(0)";
    more.style.transform = "translateX(0";
    background.style.filter = "blur(0px)";
    setTimeout(() => {
      shortcut.style.opacity = 1;
      shortcut.style.pointerEvents = "all";
    }, 420);
  });

  tag.addEventListener("click", () => {
    title.style.transform = "translateY(0)";
    tag.style.transform = "translateY(0)";
    subtitle.style.transform = "translateX(0)";
    more.style.transform = "translateX(0";
    textMore.classList.remove("show");
    background.style.filter = "blur(0px)";
    setTimeout(() => {
      shortcut.style.opacity = 1;
      shortcut.style.pointerEvents = "all";
    }, 420);
  });
});

shortcutMore.addEventListener("click", () => {
  conActive.querySelector(".contain-main").style.transform =
    "translateX(-48vh)";
  shortcut.style.transform = "translateY(25vh)";
  conActive.querySelector(".background img").style.filter = "blur(7px)";
  element.style.transform = "translateY(-80vh)";
});

let elementBack = element.querySelector(".back");
elementBack.addEventListener("click", () => {
  conActive.querySelector(".contain-main").style.transform = "translateX(0)";
  shortcut.style.transform = "translateY(0)";
  conActive.querySelector(".background img").style.filter = "blur(0)";
  element.style.transform = "translateY(-180vh)";
});

let elementItems = element.querySelectorAll(".items .item");
elementItems.forEach((item) => {
  item.addEventListener("click", () => {
    conActive.querySelector(".contain-main").style.transform = "translateX(0)";
    shortcut.style.transform = "translateY(0)";
    conActive.querySelector(".background img").style.filter = "blur(0)";
    element.style.transform = "translateY(-180vh)";
    conActive.classList.remove("active");
    container.forEach((con) => {
      if (item.dataset.item == con.dataset.contain) {
        con.classList.add("active");
        conActive.querySelector(".contain-main").style.opacity = 0;
        conActive = con;
        conActive.querySelector(".contain-main").style.opacity = 1;
      }
    });
    scActive.classList.remove("active");
    shortcutImg.forEach((sc) => {
      if (item.dataset.item == sc.dataset.shortcut) {
        sc.classList.add("active");
        scActive = sc;
      }
    });

    let forEl = parseInt(item.dataset.item) + 2,
      lastEl = [...elementItems].pop(),
      arrSc = [...shortcutImg];
    if (forEl <= lastEl.dataset.item) {
      for (let i = 0; i <= parseInt(lastEl.dataset.item) - 1; i++) {
        if ([...elementItems][i].dataset.item == item.dataset.item) {
          arrSc[0].src = [...elementItems][i].querySelector("img").src;
          arrSc[0].dataset.shortcut = [...elementItems][i].dataset.item;
          scActive.classList.remove("active");
          arrSc[0].classList.add("active");
          scActive = arrSc[0];
        } else if (
          [...elementItems][i].dataset.item ==
          parseInt(item.dataset.item) + 1
        ) {
          arrSc[1].src = [...elementItems][i].querySelector("img").src;
          arrSc[1].dataset.shortcut = [...elementItems][i].dataset.item;
        } else if (
          [...elementItems][i].dataset.item ==
          parseInt(item.dataset.item) + 2
        ) {
          arrSc[2].src = [...elementItems][i].querySelector("img").src;
          arrSc[2].dataset.shortcut = [...elementItems][i].dataset.item;
        }
      }
    } else {
      arrSc[0].src = [...elementItems][
        parseInt(lastEl.dataset.item) - 3
      ].querySelector("img").src;
      arrSc[0].dataset.shortcut = [...elementItems][
        [parseInt(lastEl.dataset.item) - 3]
      ].dataset.item;

      arrSc[1].src = [...elementItems][
        parseInt(lastEl.dataset.item) - 2
      ].querySelector("img").src;
      arrSc[1].dataset.shortcut = [...elementItems][
        [parseInt(lastEl.dataset.item) - 2]
      ].dataset.item;

      arrSc[2].src = [...elementItems][
        parseInt(lastEl.dataset.item) - 1
      ].querySelector("img").src;
      arrSc[2].dataset.shortcut = [...elementItems][
        [parseInt(lastEl.dataset.item) - 1]
      ].dataset.item;

      for (let i = 0; i < 3; i++) {
        if (arrSc[i].dataset.shortcut == item.dataset.item) {
          scActive.classList.remove("active");
          arrSc[i].classList.add("active");
          scActive = arrSc[i];
        }
      }
    }
  });
});
