const form = document.querySelector("form");
let formContainer = document.getElementById("container-form");

let countdownContainer = document.getElementById("countdown-container");

const resetBtn = document.getElementById("resteBtn");

let countdownInterval;
let dueDate;

// now create the event on the submit form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const eventName = document.getElementById("name").value;
  const eventDate = document.getElementById("date").value;
  if (!eventName || !eventDate) {
    alert("please eneter an event name and date");
    return;
  }
  dueDate = new Date(eventDate).getTime();

  startCountdown(eventName);
});

function startCountdown(eventName) {
  clearInterval(countdownInterval);
  countdownInterval = setInterval(calcCountdown, 1000, eventName);
  // resetButton(eventName);
}

function calcCountdown(title) {
  const currentTime = new Date().getTime();
  const distance = dueDate - currentTime;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  formContainer.classList.add("form-container");

  countdownContainer.style.display = "block";

  countdownContainer.innerHTML = `<h2>${title}</h2>
  <div class="countdown">
    <div class="day down">
      <div class="day input">${days}</div>
      DAYS
    </div>
    <div class="hour down">
      <div class="hour input">${hours}</div>
      HOURS
    </div>
    <div class="minutes down">
      <div class="minutes input">${minutes}</div>
      MINUTES
    </div>
    <div class="seconds down">
      <div class="seconds input">${seconds}</div>
      SECONDS
    </div>
  </div>`;
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset Countdown";
  resetBtn.onclick = resetButton(title);
  countdownContainer.append(resetBtn);
  console.log("this button is being clicked");
}

// resetBtn.addEventListener("click", function () {
//   clearInterval(countdownInterval);
//   countdownContainer.innerHTML = `<h2></h2>
// <div class="countdown">
//   <div class="day down">
//     <div class="day input">00</div>
//     DAYS
//   </div>
//   <div class="hour down">
//     <div class="hour input">00</div>
//     HOURS
//   </div>
//   <div class="minutes down">
//     <div class="minutes input">00</div>
//     MINUTES
//   </div>
//   <div class="seconds down">
//     <div class="seconds input">00</div>
//     SECONDS
//   </div>
// </div>
// <button id="resetBtn">Reset</button>`;

// });
function resetButton() {
  clearInterval(countdownInterval);
  countdownContainer.style.display = "none";
  formContainer.classList.remove("form-container");
  // countdownContainer.innerHTML = `<h2>${title}</h2>
  // <div class="countdown">
  //   <div class="day down">
  //     <div class="day input">00</div>
  //     DAYS
  //   </div>
  //   <div class="hour down">
  //     <div class="hour input">00</div>
  //     HOURS
  //   </div>
  //   <div class="minutes down">
  //     <div class="minutes input">00</div>
  //     MINUTES
  //   </div>
  //   <div class="seconds down">
  //     <div class="seconds input">00</div>
  //     SECONDS
  //   </div>
  // </div>`;
}
