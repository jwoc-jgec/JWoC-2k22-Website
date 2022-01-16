var notyf = new Notyf({
  duration: 5000,
  position: { x: "right", y: "top" },
  dismissible: true,
});

const loader = document.getElementById("loader");
const authForm = document.getElementById("auth_form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const whatsapp = document.getElementById("whatsapp");
const college = document.getElementById("college");
const year = document.getElementById("year");
const github = document.getElementById("github");
const linkedIn = document.getElementById("linkedIn");
const projectName = document.getElementById("projectName");
const projectLink = document.getElementById("projectLink");
const projectDescription = document.getElementById("projectDescription");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
let ipDetails;

window.addEventListener("load", () => {
  fetch("https://api.db-ip.com/v2/free/self")
    .then((res) => res.json())
    .then((data) => (ipDetails = data))
    .catch(() => notyf.error("An error has occurred. Please reload the page and try again !"));
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.style.display = "flex";
  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    whatsapp: whatsapp.value,
    ipAddress: ipDetails.ipAddress,
    ipDetails: ipDetails,
    college: college.value,
    year: +year.value,
    github: github.value,
    linkedIn: linkedIn.value,
    projectName: projectName.value,
    projectLink: projectLink.value,
    projectTags: $("#projectTags").tagsinput("items"),
    projectDescription: projectDescription.value,
    answer1: answer1.value,
    answer2: answer2.value,
  };
  submitForm(data);
  authForm.reset();
});

const submitForm = (data) => {
  fetch("http://localhost:5000/mentor", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      loader.style.display = "none";
      res.success === "ok" ? notyf.success(res.message) : notyf.error(res.message);
    })
    .catch(() => {
      loader.style.display = "none";
      notyf.error("An error has occurred. Please reload the page and try again !");
    });
};
