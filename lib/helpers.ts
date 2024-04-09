export const getVariant = (variants: string[], id: string): string => {
  return variants[Math.floor(Math.random() * variants.length)];
};
