"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var parent = document.getElementById("spec-inner");
var userInput = document.getElementById("input");

userInput.onkeydown = function (e) {
  if (e.keyCode === 13 && e.shiftKey === false) {
    var inputValue = userInput.value.trim();
    var icon = document.createElement("i"); // it is here because of line 40

    var tag = document.createElement("span"); // it is here because of line 42

    if (inputValue !== "") {
      // tag.innerText = inputValue;
      // tag.className = "spec-style";
      icon.className = "far fa-times-circle spec-icon";
      var allTags = document.querySelectorAll(".spec-style");

      var foundTag = _toConsumableArray(allTags).find(function (el) {
        return el.innerText === inputValue;
      });

      if (foundTag !== undefined) {
        //    parent.insertBefore(foundTag, userInput);
        userInput.value = "";
        return;
      } // parent.appendChild(tag);


      tag.innerText = inputValue;
      tag.className = "spec-style";
      parent.insertBefore(tag, userInput);
      tag.appendChild(icon);
      userInput.value = "";
    }

    icon.onclick = function () {
      this.parentElement.remove(tag);
    };

    userInput.value = "";
  } else if (e.keyCode === 27) {
    userInput.value = "";
  } else {
    return;
  }
};