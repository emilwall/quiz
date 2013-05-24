(function () {
  if (typeof quiz === 'undefined') {
    quiz = {};
  }

  function Game() {
    this.play = function (element) {
      if (typeof element !== "object") {
        throw new TypeError("element should be an object");
      }

      element.class = "active";
    };
  };

  quiz.Game = Game;
}());
