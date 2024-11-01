window.onload = function () {
  const link2Project = () => {
    document
      .querySelectorAll(
        'li > div > div > a[href^="https://playentry.org/project"]'
      )
      .forEach((i) => {
        if (i.classList.item(0) !== "changed") {
          console.log(
            (i.outerHTML = `
              <div class="pp">
                <a target="_blank" href="https://playentry.org/project/${i.href.slice(
                  30
                )}" rel="noreferrer">
                  https://playentry.org/project/${i.href.slice(30)}
                </a>
                <details class="preview-button">
                  <summary>Preview <a class="goto-project" target="_blank" href="https://playentry.org/project/${i.href.slice(
                    30
                  )}" rel="noreferrer">
                    <span>바로가기&rarr;<span>
                  </a></summary>
                  <iframe width="320px" height="220px" title="${i.href.slice(
                    30
                  )}" src="/iframe/${i.href.slice(30)}"></iframe>
                  
                </details>
              </div>
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
