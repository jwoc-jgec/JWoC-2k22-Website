var notyf = new Notyf({
  duration: 6000,
  position: { x: "right", y: "top" },
  dismissible: true,
});

const loader = document.getElementById("loader");
const discordModal = document.getElementById("form_modal");
const discordLink = document.getElementById("discord-link");
const authForm = document.getElementById("auth_form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const whatsapp = document.getElementById("whatsapp");
const college = document.getElementById("college");
const year = document.getElementById("year");
const github = document.getElementById("github");
const linkedIn = document.getElementById("linkedIn");
const isFirstTime = document.getElementById("isFirstTime");
const answer1 = document.getElementById("answer1");
let ipDetails;

window.addEventListener("load", () => {
  fetch("https://api.db-ip.com/v2/free/self")
    .then((res) => res.json())
    .then((data) => (ipDetails = data))
    .catch(() => notyf.error("An error has occurred. Please reload the page and try again !"));
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!ipDetails) {
    notyf.error("Please use Google Chrome browser for registration !");
  } else {
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
      isFirstTime: +isFirstTime.value === 1 ? true : false,
      answer1: answer1.value,
    };
    submitForm(data);
    authForm.reset();
  }
});

const submitForm = (data) => {
  fetch("https://jwoc-backend.glitch.me/mentee", {
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

      discordLink.href = "https://discord.gg/ve6ad4jfEP";
      discordModal.classList.add("active");
      setTimeout(() => {
        discordModal.classList.remove("active");
      }, 8000);
    })
    .catch(() => {
      loader.style.display = "none";
      notyf.error("An error has occurred. Please reload the page and try again !");
    });
};
