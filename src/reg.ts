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
  useNumber?: boolean, // 是否必须包含字母
  useSpecialCharacters?: boolean, // 是否必须包含特殊字符
  specialCharacters?: string, // 特殊字符内容
  minLength?: number, // 最小长度
  maxLength?: number, // 最大长度
}

const defaultCreatePasswordRegProps = {
  useENLetter: true,
  useNumber: true,
  useSpecialCharacters: false,
  specialCharacters: "#?!.,@$%^&*-",
  minLength: 6,
  maxLength: 18,
};

export function createPasswordReg(props: CreatePasswordRegProps = defaultCreatePasswordRegProps) {
  const newProps = Object.assign(defaultCreatePasswordRegProps, props);
  console.log(111, newProps);
  let str = ".";
  let canUseLetter = `[a-zA-Z\\d${newProps.specialCharacters}]`;
  let mustUseENLetter = `(?=.*?[A-Za-z])`;
  let mustUseNumber = `(?=.*?[0-9])`;
  let mustUseSpecialCharacters = `(?=.*?[${newProps.specialCharacters}])`;
  if (!newProps.useENLetter && !newProps.useNumber && !newProps.useSpecialCharacters) {
    str = ".";
  }
  if (newProps.useENLetter) {
    str = `${mustUseENLetter}${canUseLetter}`
  }
  if () {

  }
  else if (newProps.useENLetter && !newProps.useNumber && !newProps.useSpecialCharacters) {
    str = `(?=.*?[A-Z])${canUseLetter}`;
  } else if (!newProps.useENLetter && newProps.useNumber && !newProps.useSpecialCharacters) {
    str = `(?=.*?[0-9])${canUseLetter}`;
  } else if (!newProps.useENLetter && !newProps.useNumber && !newProps.useSpecialCharacters) {
    str = `(?=.*?[${newProps.specialCharacters}])${canUseLetter}`;
  } else if () {

  }
  return new RegExp(`^${str}{${newProps.minLength},${newProps.maxLength}}$`);
}
export default {
  IDCard,
  Phone,
  Email,
  Chinese,
  IP,
  createPasswordReg,
};
