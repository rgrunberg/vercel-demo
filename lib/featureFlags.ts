export const evaluate = (flagName: string) => {
  // If this were a real app, we'd fetch this data from a remote service
  // Instead just return true or false at random
  const validExperimentNames = ["buttonColor"];
  if (validExperimentNames.indexOf(flagName) == -1) {
    throw new Error("Experiment name not found");
  }
  const array = ["#e5e7eb", "#bfdbfe"];
  return array[Math.floor(Math.random() * array.length)];
};
