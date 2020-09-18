// 身份证
export const IDCard = new RegExp('^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$');
// 手机号码
export const Phone = new RegExp('^1\\d{10}$');
// 邮箱
export const Email = new RegExp('^([A-Za-z0-9_\\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\\-\.])+\\.([A-Za-z]{2,8})$');
// 汉字
export const Chinese = new RegExp('^[\u4e00-\u9fa5]+$');
// IP
export const IP = new RegExp('((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))');

interface CreatePasswordRegProps {
  useENLetter?: boolean, // 是否必须包含英文字母
  useCapitalLetters?: boolean, // 是否必须包含大写英文字母
  useNumber?: boolean, // 是否必须包含字母
  useSpecialCharacters?: boolean, // 是否必须包含特殊字符
  specialCharacters?: string, // 特殊字符内容
  minLength?: number, // 最小长度
  maxLength?: number, // 最大长度
}

const defaultCreatePasswordRegProps = {
  useENLetter: true,
  useCapitalLetters: false,
  useNumber: true,
  useSpecialCharacters: false,
  specialCharacters: "#?!.,@$%^&*-",
  minLength: 6,
  maxLength: 18,
};

/**
 * 生校验正则表达式
 * @param props
 */
export function createPasswordReg(props: CreatePasswordRegProps = defaultCreatePasswordRegProps) {
  const newProps = Object.assign(defaultCreatePasswordRegProps, props);
  const canUseLetter = `[a-zA-Z\\d${newProps.specialCharacters}]`;
  const mustUseENLetter = `(?=.*?[A-Za-z])`;
  const mustUseCapitalLetters = `(?=.*?[A-Z])`;
  const mustUseNumber = `(?=.*?[0-9])`;
  const mustUseSpecialCharacters = `(?=.*?[${newProps.specialCharacters}])`;
  let str = "";
  if (newProps.useENLetter) {
    str = `${str}${mustUseENLetter}`;
  }
  if (newProps.useCapitalLetters) {
    str = `${str}${mustUseCapitalLetters}`;
  }
  if (newProps.useNumber) {
    str = `${str}${mustUseNumber}`;
  }
  if (newProps.useSpecialCharacters) {
    str = `${str}${mustUseSpecialCharacters}`;
  }
  return new RegExp(`^${str}${canUseLetter}{${newProps.minLength},${newProps.maxLength}}$`);
}

export default {
  IDCard,
  Phone,
  Email,
  Chinese,
  IP,
  createPasswordReg,
};
