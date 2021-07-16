{
  ("use strict");

  let inputRange = document.querySelector(".range");
  let val = document.querySelector(".val");
  let pageView = document.querySelector(".views");
  let radio = document.querySelector(".radio");

  let checked = false;

  radio.addEventListener("change", (e) => {
    if (e.currentTarget.checked) {
      checked = true;
      val.innerHTML = (75 / 100) * val.innerHTML;
    } else {
      checked = false;
      val.innerHTML = Math.round(1.34 * val.innerHTML);
    }
  });

  let prices = [8, 12, 16, 24, 36];
  let pricesDiscount = [6, 9, 12, 18, 27];
  let views = ["10K", "50K", "100K", "500K", "1M"];

  inputRange.addEventListener("input", () => {
    switch (inputRange.value) {
      case "0":
        val.innerHTML = checked ? pricesDiscount[0] : prices[0];
        pageView.innerHTML = views[0];
        break;
      case "25":
        val.innerHTML = checked ? pricesDiscount[1] : prices[1];
        pageView.innerHTML = views[1];
        break;
      case "50":
        val.innerHTML = checked ? pricesDiscount[2] : prices[2];
        pageView.innerHTML = views[2];
        break;
      case "75":
        val.innerHTML = checked ? pricesDiscount[3] : prices[3];
        pageView.innerHTML = views[3];
        break;
      case "100":
        val.innerHTML = checked ? pricesDiscount[4] : prices[4];
        pageView.innerHTML = views[4];
        break;
      default:
        console.log("default");
    }

    //val.innerHTML = valArr[v];
  });
}
