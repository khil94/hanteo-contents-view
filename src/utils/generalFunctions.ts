export const get24Time = (target: number) => {
  return target < 10 ? `0${target}` : target;
};

export const getYYYYMMDDHHmm = (date: Date) => {
  const YYYY = date.getFullYear();
  const MM = date.getMonth() + 1;
  const DD = date.getDate();
  const HH = date.getHours();
  const mm = date.getMinutes();

  return `${YYYY}-${get24Time(MM)}-${get24Time(DD)} ${get24Time(
    HH
  )}:${get24Time(mm)}`;
};

export const makeEllipsis = (str: string, target: number) => {
  return str.length > target ? `${str.slice(0, target)}...` : str;
};
