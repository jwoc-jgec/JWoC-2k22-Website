/* ********************************************************** */
// Projects Data Object
/* ********************************************************** */

/* ********************************************************** */
// Projects Preview Mapping
/* ********************************************************** */

let projectsContent = document.querySelector(".projects_content");
const spinner = document.getElementById("spinner");
const projectsAPI = "https://jwoc-projects.glitch.me";

fetch(projectsAPI)
  .then((res) => res.json())
  .then((data) => {
    spinner.style.display = "none";
    data.map((projectData) => {
      projectsContent.innerHTML += `
        <!-- Project -->
        <div class="project_card">
          <div class="project_desc">
            <h2>${projectData.projectName}</h2>
            <h6>Tech Stack</h6>
            <div class="tags"></div>
            <p class="clampText">${projectData.projectDescription}</p>
            <span id="more">Read More</span>
            <a href="${projectData.projectLink}" class="btn" target="_blank">GitHub Repo</a>
          </div>

          <div id="toggleBtn">
            <i class="bx bxs-chevron-up"></i>
          </div>

          <div class="mentor_desc">
            <h6 class="bx bx-user"></h6>
            <h4>Project Mentor</h4>
            <h2>${projectData.name}</h2>
            <a href="mailto:${projectData.email}" class="btn">Mail Mentor</a>
            <div class="social">
              <a href="${projectData.github}" class="btn" target="_blank">
                <i class="bx bxl-github"></i>
              </a>
              <a href="${projectData.linkedIn}" class="btn" target="_blank">
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    });

    const allTagsDiv = document.querySelectorAll(".tags");

    for (let index = 0; index < allTagsDiv.length; index++) {
      const currentTags = data[index].projectTags;
      currentTags.map((tag) => {
        allTagsDiv[index].innerHTML += `<span>${tag}</span>`;
      });
    }

    // Project Card Toggle Btn Active *********************************************

    $("div.project_card div#toggleBtn").each(function () {
      $(this).click(function () {
        $(this).toggleClass("active");
      });
    });

    $("div.project_card div.project_desc").each(function () {
      $(this)
        .find("#more")
        .click(function () {
          $(this).prev().toggleClass("clampText");
          $(this).prev().hasClass("clampText")
            ? $(this).text("Read More")
            : $(this).text("Read Less");
        });
    });

    // Search Function of PROJECTS *********************************************

    let typingTimer;
    let typeInterval = 500; // Half a second

    const searchField = document.getElementById("search");

    $("form.searchTech input#search").on("input", () => {
      const liveSearch = () => {
        const projectCards = document.querySelectorAll(".project_card");
        let value = searchField.value.toLowerCase();
        for (let index = 0; index < projectCards.length; index++) {
          if (projectCards[index].innerText.toLowerCase().includes(value)) {
            projectCards[index].classList.remove("is_hidden");
          } else {
            // Otherwise, add the class.
            projectCards[index].classList.add("is_hidden");
          }
        }
      };

      clearTimeout(typingTimer);
      typingTimer = setTimeout(liveSearch, typeInterval);
    });
  })
  .catch((error) => console.log(error));

// Search form submit prevent
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => e.preventDefault());
