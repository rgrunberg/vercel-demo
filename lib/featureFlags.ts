import { getVariant } from "../lib/helpers";

export const evaluate = (flagName: string, id: string) => {
  // If this were a real app, we'd fetch this data from a remote service
  // Instead just return true or false at random
  const validFlagNames = ["buttonColor"];
  if (validFlagNames.indexOf(flagName) == -1) {
    throw new Error("Flag name not found");
  }
  const array = ["#e5e7eb", "#bfdbfe"];
  return getVariant(array, id);
};
