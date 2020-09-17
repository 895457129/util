import reg, {createPasswordReg} from './reg';

const a: number = 4;
const b: number = 5;

function sum(a:number, b:number): number {
  return a + b;
}

console.log(sum(a, b), reg.IDCard.test("50023919910510595x"));
const pwd = createPasswordReg({
  useENLetter: false,
  useNumber: true,
  useSpecialCharacters: false,
});
console.log(pwd);

export default {
  sum,
  reg,
}
