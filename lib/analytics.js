export const log = (eventName, eventProperties) => {
  // If this were a real app, we'd send this data to an analytics service
  const obj = { eventName, ...eventProperties };
};
