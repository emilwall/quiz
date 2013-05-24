describe("Game", function() {
  it("should be defined as function in quiz namespace", function() {
    expect(quiz).toBeDefined();
    expect(typeof quiz.Game).toBe("function");
  });

  it("should be constructor", function() {
    var game = new quiz.Game();

    expect(game.constructor).toBe(quiz.Game);
  });
});

