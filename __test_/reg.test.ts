import reg from "../src/reg";

test('createPasswordReg', () => {
  const passwordReg = reg.createPasswordReg({
    useCapitalLetters: true,
    useSpecialCharacters: true,
    useNumber: true,
  });
  const match1 = passwordReg.test("AAA333&&&&fdf");
  const match2 = passwordReg.test("AAA3333333");
  const match3 = passwordReg.test("33333333&&&&");
  expect(match1).toBe(true);
  expect(match2).toBe(false);
  expect(match3).toBe(false);
});

