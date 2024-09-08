window.onload = function () {
  const link2Project = () => {
    document
      .querySelectorAll(
        'li > div > div > a[href^="https://playentry.org/project"]'
      )
      .forEach((i) => {
        if (i.classList.item(0) !== "changed") {
          console.log(
            (i.innerHTML = `
            <br>
            <a target="_blank" href="https://playentry.org/project/${i.href.slice(
              30
            )}" rel="noreferrer">
              <iframe width="320px" height="220px" class="xproject-preview" title="${i.href.slice(
                30
              )}" src="/iframe/${i.href.slice(30)}"></iframe>
              <br><br>
              <span class="goto-project">바로가기&rarr;<span>
            </a>
            <br><br>
          `),
            i.classList.add("changed")
          );
        }
      });

    console.log("Done!");
  };

  link2Project();

  let interval;
  let findButton = setInterval(() => {
    let loadMoreButton = document.querySelector("button");
    if (loadMoreButton) {
      clearInterval(findButton);
      link2Project();
      loadMoreButton.addEventListener("click", () => {
        interval = setInterval(link2Project, 1);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    }
  }, 10);
};
