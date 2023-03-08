// 0是有效的key, ！！就是转化为boolean
import {useEffect, useState} from "react";

export const isFalsy = (value: any) => value === 0 ? false : !value;

// 在一个函数中，改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
  const result = {...object};
  Object.keys(result).forEach(key => {
    // @ts-ignore
    const value = object[key]
    // 排除0为key的情况
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  })
  return result;
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

// 这里就是防抖
export const useDebounce = (value: any, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次在value变化之后，设置一个定时器
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    // 每次在上一个useEffect处理完之后再运行
    // （每次创建timer前执行这个清理操作，第二次清理第一次的timer）
    return () => clearTimeout(timer);
  }, [value, delay])

  return debounceValue
}