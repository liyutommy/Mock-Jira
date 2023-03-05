// 0是有效的key, ！！就是转化为boolean
export const isFalsy = (value) => value === 0? false : !value;

// 在一个函数中，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  const result = {...object};
  Object.keys(result).forEach(key => {
    const value = object[key]
    // 排除0为key的情况
    if(isFalsy(value)){
      delete result[key];
    }
  })
  return result;
}