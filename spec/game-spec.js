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
    it("should require html element as argument", function() {
      expect(this.game.play).toThrow(new TypeError("element should be an object"));
    });
  });
});
