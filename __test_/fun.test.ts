import fun from "../src/fun";

test('formatIDCard', () => {
  expect(fun.formatIDCard("500239199101011234")).toBe("500239********1234");
});

test("formatPhone", () => {
  expect(fun.formatPhone("18388888123")).toBe("183****8123");
});

test("formatTree", () => {
  const data = [
    {
      name: "1",
      value: "a",
      child: [
        {
          name: "1_1",
          value: "a_a",
        },
      ],
    },
    {
      name: "2",
      value: "b",
      child: [
        {
          name: "2_2",
          value: "b_b",
        },
      ],
    },
  ];
  const newData = fun.formatTree(data, (item, index) => {
    return {
      ...item,
      name: `xx_${item.name}`,
    };
  }, "child");
  expect(newData.length).toBe(2);
  expect(newData[0].children).toBeTruthy();
  expect(newData[0].children[0]).toEqual({
    children: null,
    hasChildren: false,
    level: 1,
    name: "xx_1_1",
    value: "a_a",
  });
});
