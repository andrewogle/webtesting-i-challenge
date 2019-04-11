const enhancer = require("./enhancer.js");
// test away!

describe("enhancer tests", () => {
  describe("repair", () => {
    it("should return the durability of item to 100 if less than 100", () => {
      const item = { name: "cracker", enhancement: 1, durability: 20 };
      const outcome = { name: "cracker", enhancement: 1, durability: 100 };

      const test = enhancer.repair(item);

      expect(test).toEqual(outcome);
    });
  });
  describe("succeed", () => {
    it("should if the enhancement level is less than 20 it should increase by 1, else it stays the same. durability should stay the same", () => {
      const item = { name: "cracker", enhancement: 1, durability: 20 };
      const outcome = { name: "cracker", enhancement: 2, durability: 20 };

      const test = enhancer.succeed(item);
      expect(test).toEqual(outcome);
    });
  });
  describe('fails', ()=>{
      it('should  If the items enhancement is less than 15, the durability of the item is decreased by 5.- If the items enhancement is 15 or more, the durability of the item is decreased by 10.- If the items enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).', ()=>{
        const item = { name: "cracker", enhancement: 17, durability: 100 };
        const outcome = { name: "cracker", enhancement: 16, durability: 90 };
        
        const test = enhancer.fail(item);
        expect(test).toEqual(outcome);
      })
  })
});
