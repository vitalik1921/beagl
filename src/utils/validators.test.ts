import { isInteger, isRequired } from "./validators";

test("isInteger check if it is integer", () => {
  expect(isInteger("not valid", 2)).toBeFalsy(),
    expect(isInteger("not valid", "12a")).toEqual("not valid");
  expect(isInteger("not valid", "a12")).toEqual("not valid");
  expect(isInteger("not valid", 11.1)).toEqual("not valid");
  expect(isInteger("not valid", true)).toEqual("not valid");
  expect(isInteger("not valid", false)).toEqual("not valid");
});

test("isRequired if it is required", () => {
  expect(isRequired("not valid", "abc")).toBeFalsy();
  expect(isRequired("not valid", "")).toEqual("not valid");
  expect(isRequired("not valid", null)).toEqual("not valid");
  expect(isRequired("not valid", false)).toBeFalsy();
  expect(isRequired("not valid", 0)).toBeFalsy();
});
