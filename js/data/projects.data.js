/* ********************************************************** */
// Projects Data Object
/* ********************************************************** */

let projectsDetails = [
  {
    id: 1,
    projectName: "Shipp It",
    projectDesc:
      "Shipp IT, is a Full-scale logistic service.By which from big companies to individual small sellers can deliver their product to their desired customer . Live update after product is added to our database , destination tracking, an interactive platform with proper details [not simple dots connecting each other ].In case of delay or late delivery, personal can directly update the reason with proper reason with own very own interactive app . Proper authentication with drf , jwt and with the security of Django and many more .",
    projectLink: "https://github.com/7saikat7/supply_chain",
    projectTech: `<span>Django</span> <span>DRF</span> <span>React</span> <span>Android</span> <span>Html</span> <span>CSS</span> <span>JavaScript</span> <span>Postgres</span>`,

    mentorName: "Saikat Mukherjee",
    mentorEmail: "7saikat7@gmail.com",
    mentorGithub: "https://github.com/7saikat7",
    mentorLinkedin: "https://www.linkedin.com/in/saikat-mukherjee-616534191",
  },
  {
    id: 2,
    projectName: "Indo Khadyaam",
    projectDesc:
      "An open source project to catalogue the diverse set of Indian cuisines available across the subcontinent for thousands of years. We aspire to become the defacto search engine for not only the 1.3B+ people in the nation but also everyone around the world to dive into the universe of Indian food. Furthermore, we belive that this project can lead to a community where people from all walks of life can share their ancestral or invented recipes without having any obligation to conform to woke trends.",
    projectLink: "https://github.com/smaranjitghose/indokhaadyam",
    projectTech: `<span>HTML</span> <span>CSS</span> <span>React</span> <span>Bootstrap</span> <span>MySQL</span> <span>Django</span>`,

    mentorName: "Smaranjit Ghose",
    mentorEmail: "thesmaranjitghose@gmail.com",
    mentorGithub: "https://github.com/smaranjitghose",
    mentorLinkedin: "https://www.linkedin.com/in/smaranjitghose",
  },
  {
    id: 3,
    projectName: "Fake News Detection APP",
    projectDesc:
      "Develop a machine learning program to identify when a news source may be producing fake news. We aim to use a corpus of labeled real and fake new articles to build a classifier that can make decisions about information based on the content from the corpus. The model will focus on identifying fake news sources, based on multiple articles originating from a source. Once a source is labeled as a producer of fake news, we can predict with high confidence that any future articles from that source will also be fake news. Focusing on sources widens our article misclassification tolerance, because we will have multiple data points coming from each source.",
    projectLink: "https://github.com/codejay411/Fake-News-Detection-App",
    projectTech: `<span>Python</span> <span>Flask</span> <span>Machine Learning</span> <span>Deep Learning</span> <span>Cloud</span>`,

    mentorName: "Jay Prakash Bind",
    mentorEmail: "jaypr202@gmail.com",
    mentorGithub: "https://github.com/codejay411",
    mentorLinkedin: "https://www.linkedin.com/in/jay-prakash-bind-b0736217a",
  },
  {
    id: 4,
    projectName: "Milan - Where HELP meets NEED",
    projectDesc:
      "The word ‘Milan’ when literally translated from its colloquial form to English means ‘conjugation’. It is often seen that people get scammed and their money is stolen where they were just trying to do good to other people, they were trying to extend their help. Again, it is seen that there are some Clubs or NGOs who do not get enough funds to work for humanitarian causes because of the lack of proper representation. With Milan we aim at bringing all the various NGOs and donors under one single roof to ease the burden of going to find their appropriate donors and the appropriate communities to donate to. With the help of our search filters and ask platform, it becomes easier for the people to find their right community to serve.",
    projectLink: "https://github.com/IAmTamal/Milan",
    projectTech: `<span>HTML</span> <span>CSS</span> <span>React</span> <span>Bootstrap</span> <span>JavaScript</span>`,

    mentorName: "Tamal Das",
    mentorEmail: "gyansujan69@gmail.com",
    mentorGithub: "https://github.com/IAmTamal",
    mentorLinkedin: "https://www.linkedin.com/in/say-hello-to-tamal",
  },
  {
    id: 5,
    projectName: "Awesome Developer Portfolio",
    projectDesc:
      "A community-maintained open-source project aimed at making a personal portfolio for researchers, developers and analysts simple, fast and less cumbersome. We make sure you have a full-fledged website to showcase your work while you can spend time on your learning and innovative endeavours.",
    projectLink: "https://github.com/smaranjitghose/awesome-portfolio-websites",
    projectTech: `<span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React</span>`,

    mentorName: "Anush Bhatia",
    mentorEmail: "anushbhatia1234@gmail.com",
    mentorGithub: "https://github.com/anushbhatia",
    mentorLinkedin: "https://www.linkedin.com/in/anushbhatia",
  },
  {
    id: 6,
    projectName: "Tech N Science - Fun with Science",
    projectDesc:
      "This is a website which provides calculators of different maths and physics formulas and also provides JEE level questions which students can practice.",
    projectLink: "https://github.com/Tech-N-Science/FunwithScience",
    projectTech: `<span>HTML</span> <span>CSS</span> <span>React</span> <span>PHP</span>`,

    mentorName: "Amit Kumar Mishra",
    mentorEmail: "akm43300@gmail.com",
    mentorGithub: "https://github.com/Amit366",
    mentorLinkedin: "https://www.linkedin.com/in/amit-kumar-mishra-28122a193",
  },
];

/* ********************************************************** */
// Projects Preview Mapping
/* ********************************************************** */

let projectsContent = document.querySelector(".projects_content");

Object.values(projectsDetails).map((val) => {
  projectsContent.innerHTML += `
    <!-- Project ${val.id} -->
    <div class="project_card">
      <div class="project_desc">
        <h2>${val.projectName}</h2>
        <h6>Tech Stack</h6>
        <div class="tags">${val.projectTech}</div>
        <p class="clampText">${val.projectDesc}</p>
        <span id="more">Read More</span>
        <a href="${val.projectLink}" class="btn" target="_blank">GitHub Repo</a>
      </div>

      <div id="toggleBtn">
        <i class="bx bxs-chevron-up"></i>
      </div>

      <div class="mentor_desc">
        <h6 class="bx bx-user"></h6>
        <h4>Project Mentor</h4>
        <h2>${val.mentorName}</h2>
        <a href="mailto:${val.mentorEmail}" class="btn">Mail Mentor</a>
        <div class="social">
          <a href="${val.mentorGithub}" class="btn" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
          <a href="${val.mentorLinkedin}" class="btn" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  `;
});

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
      $(this).prev().hasClass("clampText") ? $(this).text("Read More") : $(this).text("Read Less");
    });
});
