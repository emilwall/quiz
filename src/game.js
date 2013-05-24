(function () {
  if (typeof quiz === 'undefined') {
    quiz = {};
  }

  function Game() {
    this.play = function (element) {
      if (typeof element !== "object") {
        throw new TypeError("element should be an object");
      }

      var classes = element.className ? element.className.split(" ") : [];
      if (classes.indexOf("active") == -1) {
        classes.push("active");
      }
      element.className = classes.join(" ");
    };
  };

  quiz.Game = Game;
}());
