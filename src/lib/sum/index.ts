type Sum = (nums: number[]) => number;

export const sum: Sum = (nums) => {
  return nums.reduce((prev, current) => prev + current, 0);
};
