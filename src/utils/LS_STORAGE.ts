export const getItemFromLS = (key: string): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};
