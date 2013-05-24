describe("Game", function() {
  it("should be defined as function in quiz namespace", function() {
    expect(quiz).toBeDefined();
    expect(typeof quiz.Game).toBe("function");
  });
});

