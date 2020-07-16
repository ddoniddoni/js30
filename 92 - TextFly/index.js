const input_text = document.querySelector(".input__text");
const input_btn = document.querySelector(".input__btn");
// const viewText = "안 녕 하 세 요";
const words = {};
const words_attr = [];
const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

function onClick() {
  let text1 = input_text.value;
  let viewText = text1;
  console.log(viewText);
  input_text.value = "";
  handleString(viewText);
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d"),
      ctx_width = canvas.width,
      ctx_height = canvas.height;
    console.log(ctx_width, ctx_height);
    ctx.fillStyle = "White";
    ctx.lineWidth = 5;

    Word = function (key) {
      this.text = key;
      this.x = Math.random() * ctx_width;
      this.y = Math.random() * ctx_height;
      this.font = `${words[key] * 20}px arial`;
      this.speed = words[key];
    };
    for (key in words) {
      words_attr.push(new Word(key));
    }
    function animation() {
      for (let i = 0; i < words_attr.length; i++) {
        ctx.font = words_attr[i].font;
        ctx.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
        words_attr[i].width = ctx.measureText(words_attr[i].text).width;
        ctx.stroke();
      }
      move();
    }

    function move() {
      for (let i = 0; i < words_attr.length; i++) {
        if (words_attr[i].x > ctx_width) {
          words_attr[i].x = -words_attr[i].width;
          words_attr[i].y = Math.random() * ctx_height;
        } else {
          words_attr[i].x += words_attr[i].speed;
        }
      }
    }
    setInterval(() => {
      ctx.clearRect(0, 0, ctx_width, ctx_height);
      animation();
    }, 24);
  }

  function handleString(str) {
    const split_str = str.split(" ");
    const word_array = [];
    const word_count = [];
    for (let i = 0; i < split_str.length; i++) {
      check = true;
      for (let j = 0; j <= word_array.length; j++) {
        if (split_str[i] == word_array[j]) {
          word_count[j]++;
          check = false;
          break;
        }
      }
      if (check) {
        word_array.push(split_str[i]);
        word_count.push(1);
      }
    }
    for (let i = 0; i < word_array.length; i++) {
      words[word_array[i]] = word_count[i];
    }
    return words;
  }
}

input_btn.addEventListener("click", onClick);
