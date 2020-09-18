import fun from "../src/fun";

test('formatIDCard', () => {
  expect(fun.formatIDCard("500239199101011234")).toBe("500239********1234");
});

test("formatPhone", () => {
  expect(fun.formatPhone("18388888123")).toBe("183****8123");
});
