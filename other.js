scoreBtns = document.querySelectorAll('[data-target]');
homeScore = document.querySelector('.home-score-total');
guestScore = document.querySelector('.guest-score-total');
scoreboardTimer = document.querySelector('.timer');

let guestCurrentScore = [];
let homeCurrentScore = [];

scoreBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.target == ['home-score']) {
      let homeStartingScore = 0;
      homeBtnValue = parseInt(btn.dataset.value);
      homeCurrentScore.push(homeBtnValue);
      let updatedHomeScore = homeCurrentScore.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        homeStartingScore
      );
      homeScore.textContent = updatedHomeScore;
      whoIsWinning();
    }
    if (btn.dataset.target == ['guest-score']) {
      let guestStartingScore = 0;
      guestBtnValue = parseInt(btn.dataset.value);
      guestCurrentScore.push(guestBtnValue);
      let updatedGuestScore = guestCurrentScore.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        guestStartingScore
      );
      guestScore.textContent = updatedGuestScore;
      whoIsWinning();
    }
  });
});

const whoIsWinning = () => {
  let home = parseInt(homeScore.textContent);
  let guest = parseInt(guestScore.textContent);
  if (home < guest) {
    console.log('guest is winning');
    guestScore.style.color = '#1cf01c';
    homeScore.style.color = '#F94F6D';
  } else if (home > guest) {
    console.log('home is winning');
    guestScore.style.color = '#F94F6D';
    homeScore.style.color = '#1cf01c';
  } else {
    console.log('tie');
    guestScore.style.color = '#F94F6D';
    homeScore.style.color = '#F94F6D';
  }
};

let quarterMinutes = 11;
let quarterSeconds = 60;

setInterval(() => {
  if (quarterMinutes == 0 && quarterSeconds == 1) {
    scoreboardTimer.textContent = '00:00';
  } else {
    quarterSeconds--;
    if (quarterSeconds == 0) {
      // subtract one from minutes once it reaches 0
      quarterMinutes--;
      // set quarterSeconds back to 59 at start of new minute
      quarterSeconds = 59;
      if (quarterMinutes == 0) {
        //
        quarterMinutes = quarterMinutes;
      }
    }
    // adding the 0 in front of minutes if it goes below 10
    if (quarterMinutes.toString().length == 1) {
      quarterMinutes = '0' + quarterMinutes;
    }
    // adding the 0 in front of seconds if it goes below 10
    if (quarterSeconds.toString().length == 1) {
      quarterSeconds = '0' + quarterSeconds;
    }
    // displaying quarterMinutes and quarterSeconds current values
    scoreboardTimer.textContent = quarterMinutes + ':' + quarterSeconds;
  }
}, 1000);
