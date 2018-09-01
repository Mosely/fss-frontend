import Component from "@ember/component";

export default Component.extend({
  /**
   * Making a multi step form slider by taking the elements wrapped in in a div
   * with a class of form-step--item.
   * Each form-step--item will represent each 'slide' and will display them
   * accordingly to the Next and Previous buttons.
   **/

  currentItem: 0, // Variable to keep the current index of the multi-step-form.

  didInsertElement() {
    let next,
      submit,
      item = document.querySelectorAll(".form-step--item");
    (next = document.getElementById("next")),
      (submit = document.getElementById('submit'));
    if (item.length > 1 ) {
      next.style.display = "inline-block";
      submit.style.display = "none";
    } else {
      next.style.display = "none";
      submit.style.display = "inline-block";
    }
  },

  /**
   * Shows the current item in the multi-step-form by removing hidden class and
   * adding active class.
   *
   * @param {number} num The index to determine what form-step--item will be displayed
   **/
  showItem(num) {
    let next,
      submit,
      previous,
      item = document.querySelectorAll(".form-step--item");
    (next = document.getElementById("next")),
      (previous = document.getElementById("prev")),
      (submit = document.getElementById('submit'));
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
      next.style.display = "none";
      submit.style.display = "inline-block";
    } else {
      next.innerHTML = "Next";
      next.style.display = "inline-block";
      submit.style.display = "none";
    }
  },

  /**
   * Checks the current form item for any input with the class 'required',
   * ckecks if the value is empty and if so adds 'invalid' class to the inputs.
   *
   * @return {boolean} Returns true or false based off the validation.
   **/

  validateForm() {
    let item,
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
    /**
     * Determines if Next or Previous was clicked and calls the showItem
     * function.
     * Also checks if validateForm if true or false and will return false if so.
     *
     * @param {number} x The number that determines if Next or Previous was
     * clicked.
     **/
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
