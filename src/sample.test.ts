import { TRAFIC_LIGHT } from "./sample";
describe("sample", () => {
  it("should pass", () => {
    expect(1).toBe(1);
  });
  describe("TRAFIC_LIGHT", () => {
    it("has 6 keys including reverse map", () => {
      expect(Object.keys(TRAFIC_LIGHT).length).toBe(6);
    });
  });
});
