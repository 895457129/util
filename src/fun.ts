/**
 * 隐藏身份证号码
 * @param IDCard
 * @param start 开始隐藏位置
 * @param len 隐藏长度
 */
export function formatIDCard(IDCard: string, start: number = 6, len:number = 8) {
  return hiddenStr(IDCard, 6, 8,);
}

/**
 * 隐藏手机号码
 * @param phone
 */
export function formatPhone(phone: string) {
  return hiddenStr(phone, 3, 4,);
}

/**
 * 隐藏并替换字符串
 * @param str
 * @param start
 * @param len
 * @param replaceStrChar
 */
export function hiddenStr(str: string, start: number, len: number, replaceStrChar: string = "*") {
  const replaceStr = new Array(len).fill(replaceStrChar).join("");
  const reg = new RegExp(`^(.{${start}})(.{${len}})(.{${str.length - start - len}})$`);
  return str.replace(reg, `$1${replaceStr}$3`);
}

/**
 * 格式化树
 * @param list 树
 * @param formatFun 格式化没一项的函数
 * @param childrenName 子级 的key
 * @param level 当前层级
 */
export function formatTree(list: any[] = [], formatFun: (item: any, index: number) => any, childrenName: string = 'children', level: number = 0): any[] {
  return list.map((z, i) => {
    const hasChildren = !!(z[childrenName] || []).length ;
    return {
      ...formatFun(z, i),
      level,
      hasChildren,
      children: hasChildren ? formatTree(z[childrenName] || [], formatFun, childrenName, level + 1) : null,
    };
  });
}

export default {
  formatIDCard,
  formatPhone,
  formatTree,
}
