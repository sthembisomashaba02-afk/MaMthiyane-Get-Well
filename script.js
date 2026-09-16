const opening = document.getElementById("opening");
const messages = document.getElementById("messages");
const final = document.getElementById("final");

const messageText = document.getElementById("messageText");
const heartsContainer = document.getElementById("hearts");

const messageSequence = [
  "I just wanted to send you something ❤️",
  "I hope you get some rest...",
  "Take care of yourself, MaMTHIYANE WAM ❤️",
  "And most importantly...",
  "HOPEFULLY YOU GET BETTER SOON ❤️"
];

let messageIndex = 0;


/* --------------------------------
   Scene controller
-------------------------------- */

function showScene(scene) {
  document.querySelectorAll(".scene").forEach((item) => {
    item.classList.remove("active");
  });

  scene.classList.add("active");
}


/* --------------------------------
   Wait helper
-------------------------------- */

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}


/* --------------------------------
   Show messages one by one
-------------------------------- */

async function playMessages() {

  showScene(messages);

  await wait(800);

  for (const message of messageSequence) {

    messageText.classList.remove("message-animation");

    // Force browser to restart animation
    void messageText.offsetWidth;

    messageText.textContent = message;

    messageText.classList.add("message-animation");

    await wait(2400);
  }

  await wait(900);

  showScene(final);

  createHeartBurst();
}


/* --------------------------------
   Floating hearts
-------------------------------- */

function createFloatingHeart() {

  const heart = document.createElement("span");

  heart.className = "floating-heart";

  const symbols = [
    "♥",
    "♡",
    "❤",
    "💗"
  ];

  heart.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left =
    `${Math.random() * 100}%`;

  heart.style.fontSize =
    `${12 + Math.random() * 25}px`;

  heart.style.animationDuration =
    `${6 + Math.random() * 6}s`;

  heart.style.animationDelay =
    `${Math.random() * 2}s`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 14000);
}


/* --------------------------------
   Heart burst at the end
-------------------------------- */

function createHeartBurst() {

  for (let i = 0; i < 30; i++) {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.textContent = "♥";

    heart.style.left = "50%";

    heart.style.bottom = "45%";

    heart.style.fontSize =
      `${15 + Math.random() * 30}px`;

    heart.style.animationDuration =
      `${3 + Math.random() * 3}s`;

    heart.style.animationDelay =
      `${Math.random() * 0.8}s`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
}


/* --------------------------------
   Start background hearts
-------------------------------- */

for (let i = 0; i < 25; i++) {
  createFloatingHeart();
}

setInterval(() => {
  createFloatingHeart();
}, 650);


/* --------------------------------
   Start animation
-------------------------------- */

showScene(opening);

setTimeout(() => {
  playMessages();
}, 3000);
