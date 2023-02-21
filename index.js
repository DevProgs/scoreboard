scoreBtns = document.querySelectorAll('[data-target]');
homeScore = document.querySelector('.home-score-total');
guestScore = document.querySelector('.guest-score-total');
scoreboardTimer = document.querySelector('.timer');

let homeCurrentScore = [];
let guestCurrentScore = [];
let newHomeScore = []
let newGuestScore = []

// replacing testing with homeCurrentScore

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
      whoIsWinning()
      console.log(homeCurrentScore);
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
      console.log(guestCurrentScore)
    }
  });
});

// doens't work
// problems: colors update if pressing same btn for both teams (like pressing +1 on both sides), but any time you press a +2 or +3 to go over anothers score the colors dont update
const whoIsWinning = () => {
  if (homeCurrentScore < guestCurrentScore) {
    console.log('guest is winning')
    // guestScore.style.color = '#1cf01c';
    // homeScore.style.color = '#F94F6D';
  } else if (homeCurrentScore > guestCurrentScore) {
    console.log('home is winning')
    // guestScore.style.color = '#F94F6D';
    // homeScore.style.color = '#1cf01c';
  } else {
    console.log('tie')
    // guestScore.style.color = '#F94F6D';
    // homeScore.style.color = '#F94F6D';
  }
};


// // changing font-size if score is over 100
// const overHundred = () => {
//   if (homeCount < 100) {
//     homeScore.style.fontSize = '80 px'
//   }
// }

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
