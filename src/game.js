(function () {
  if (typeof quiz === 'undefined') {
    quiz = {};
  }

  function Game() {
    this.play = function (element) {
      if (typeof element !== "object") {
        throw new TypeError("element should be an object");
      }

      var classes = element.class ? element.class.split(" ") : [];
      classes.push("active");
      element.class = classes.join(" ");
    };
  };

  quiz.Game = Game;
}());
