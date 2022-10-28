const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
const setofWords = [
  "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.",

  "She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not the power to make her repent. It wasn't fair and no matter how long she had to endure the darkness, she wouldn't change her attitude. At three years old, Sandy's stubborn personality had already bloomed into full view.",

  "Stormi is a dog. She is dark grey and has long legs. Her eyes are expressive and are able to let her humans know what she is thinking. Her tongue is long, pink, and wet. Her long legs allow her to sprint after other dogs, people or bunnies. She can be a good dog, but also very bad. Her tail wags when happy or excited and hides between her back legs when she is bad. Stormi is a dog I love.",

  "You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created.",

  "The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.",
];
let startTime, endTime;

const playGame = () => {
  let randomNUmber = Math.floor(Math.random() * setofWords.length);
  msg.innerText = setofWords[randomNUmber];
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMsg = `Your speed is ${speed} wpm.`;
  finalMsg += compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach((item, index) => {
    if (item == words2[index]) {
      cnt++;
    }
  });
  let errorWords = words1.length - cnt;
  return ` ${cnt} correct out of ${words1.length} words and the total number of errors is ${errorWords} .`;
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == `Start`) {
    typeWords.disabled = false;
    typeWords.focus();

    playGame();
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
  } else if (this.innerText == `Done`) {
    typeWords.disabled = true;
    btn.innerText = `Start`;
    endPlay();
    setTimeout(() => {
      location.reload();
    }, 4000);
  }
});
