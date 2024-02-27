export const log = (
  eventName: string,
  eventProperties: { [index: string]: string | number | boolean }
) => {
  // If this were a real app, we'd send this data to an analytics service
  const obj = { eventName, ...eventProperties };
};

export const getId = () => {
  // A fake id
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
