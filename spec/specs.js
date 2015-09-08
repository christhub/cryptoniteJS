describe('typeTriangle', function() {
    it("will return equilateral", function() {
      expect(typeTriangle(1,1,1)).to.equal("E");
    });
    it("will return isosceles", function() {
      expect(typeTriangle(1,2,1)).to.equal("I");
    });
    it('will return scalene', function() {
      expect(typeTriangle(1,2,3)).to.equal("S");
    });
});
