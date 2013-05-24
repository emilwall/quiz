describe("Game", function() {
  beforeEach(function() {
    this.game = new quiz.Game();
  });

  it("should be constructor", function() {
    expect(this.game.constructor).toBe(quiz.Game);
  });

  it("should have play method", function() {
    expect(typeof this.game.play).toBe("function");
  });

  describe("play", function() {
    beforeEach(function() {
      this.addMatchers({
        toHaveClass: function(className) {
          var re = new RegExp(className);
          var actual = this.actual;
          var notText = this.isNot ? " not" : "";

          this.message = function () {
            return "Expected " + actual + notText + " to have class " + className;
          }

          return re.exec(actual.className);
        }
      });
    });

    it("should require html element as argument", function() {
      expect(this.game.play).toThrow(new TypeError("element should be an object"));
    });

    it("should add active class to element passed as argument", function() {
      var element = {};

      this.game.play(element);

      expect(element).toHaveClass("active");
    });

    it("should not overwrite classes in element passed as argument", function() {
      var element = { className: "hidden" };

      this.game.play(element);

      expect(element).toHaveClass("hidden");
    });

    it("should not add class if already present", function() {
      var element = { className: "active" };

      this.game.play(element);

      expect(element.className).toBe("active");
    });
  });
});
