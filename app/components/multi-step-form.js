import Component from "@ember/component";

export default Component.extend({
  currentItem: 0,

  showItem(num) {
    let next,
      previous,
      item = document.querySelectorAll(".form-step--item");
    (next = document.getElementById("next")),
      (previous = document.getElementById("prev"));
    //take the param and add block display to the specified item
    item[num].classList.remove("hidden");
    item[num].classList.add("active");
    // display or hide the previous button
    if (num == 0) {
      previous.style.display = "none";
    } else {
      previous.style.display = "inline-block";
    }
    if (num == item.length - 1) {
      next.innerHTML = "Submit";
    } else {
      next.innerHTML = "Next";
    }
  },

  validateForm() {
    var item,
      i,
      reqElm,
      valid = true;
    item = document.querySelectorAll(".form-step--item");
    reqElm = item[this.currentItem].querySelectorAll(".required");

    for (i = 0; i < reqElm.length; i++) {
      if (reqElm[i].value == "") {
        reqElm[i].classList.add("invalid");
				valid = false;
      } else {
        reqElm[i].classList.remove("invalid");
      }
    }
    return valid;
  },

  actions: {
    nextPrev(x) {
      let form,
        item = document.querySelectorAll(".form-step--item");
      form = document.getElementById("form");
      if (x == 1 && !this.validateForm()) {
        return false;
      }
      //make the current item display none
      item[this.currentItem].classList.add("hidden");
      item[this.currentItem].classList.remove("active");
      // increase item index by one
      this.currentItem += x;

      if (this.currentItem >= item.length) {
        form.submit();
        return false;
      }
      this.showItem(this.currentItem);
    }
  }
});
