/**
 * urlの深さを計算
 * @example "/" < "/hoge"
 * @example "/hoge" < "/hoge/huga"
 * @param url
 */
export const getUrlDepth = (url: string) => {
  return url.split("/").filter((item) => !!item).length;
};
