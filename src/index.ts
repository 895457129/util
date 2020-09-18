import reg from './reg';
import fun from './fun';

console.log(fun.formatPhone("18382346121"), fun.formatIDCard("500239199105105956"));

export default {
  regExpUtils: reg,
  funUtils: fun,
}
