import { expect, it } from "vitest";
import { sum } from "../src";

it("should work", () => {
  expect(sum(1, 2)).toEqual(3);
});
