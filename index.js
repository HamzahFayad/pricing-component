{
  ("use strict");

  let inputRange = document.querySelector(".range");
  let val = document.querySelector(".val");
  let pageView = document.querySelector(".views");
  let radio = document.querySelector("radio");

  let prices = [8, 12, 16, 24, 36];
  let pricesDiscount = [6, 9, 12, 18, 27];
  let views = ["10K", "50K", "100K", "500K", "1M"];

  inputRange.addEventListener("input", () => {
    /*if (x) {
    }*/

    switch (inputRange.value) {
      case "0":
        val.innerHTML = prices[0];
        pageView.innerHTML = views[0];
        break;
      case "25":
        val.innerHTML = prices[1];
        pageView.innerHTML = views[1];
        break;
      case "50":
        val.innerHTML = prices[2];
        pageView.innerHTML = views[2];
        break;
      case "75":
        val.innerHTML = prices[3];
        pageView.innerHTML = views[3];
        break;
      case "100":
        val.innerHTML = prices[4];
        pageView.innerHTML = views[4];
        break;
      default:
        console.log("default");
    }
    //val.innerHTML = valArr[v];
  });
}
