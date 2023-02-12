const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "red";
      break;

    case "taurus":
      body.style.backgroundColor = "blue";
      break;

    case "gemini":
      body.style.backgroundColor = "green";
      break;

    case "cancer":
      body.style.backgroundColor = "yellow";
      break;

    case "leo":
      body.style.backgroundColor = "grey";
      break;

    case "virgo":
      body.style.backgroundColor = "#D1FFF3";
      break;

    case "libra":
      body.style.backgroundColor = "#F6F7C1";
      break;
    case "scorpio":
      body.style.backgroundColor = "#698269";
      break;

    case "sagittarius":
      body.style.backgroundColor = "#F2921D";
      break;

    case "aquarius":
      body.style.backgroundColor = "#301E67";
      break;

    case "capricon":
      body.style.backgroundColor = "#ABC270";
      break;

    case "pisces":
      body.style.backgroundColor = "#ECECEC";
      break;

    default:
      body.style.backgroundColor = "#fff";

      break;
  }
};
