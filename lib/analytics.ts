export const log = (
  eventName: string,
  eventProperties: { [index: string]: string | number }
) => {
  // If this were a real app, we'd send this data to an analytics service
  const obj = { eventName, ...eventProperties };
};
