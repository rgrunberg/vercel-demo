import { getVariant } from "../lib/helpers";

export const log = (
  eventName: string,
  eventProperties: { [index: string]: string | number | boolean }
) => {
  // If this were a real app, we'd send this data to an analytics service
  const obj = { eventName, ...eventProperties };
  console.log(obj);
};

export const getId = () => {
  // A fake id
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

const experiments: { experimentName: string; variants: string[] }[] = [
  {
    experimentName: "buttonColor",
    variants: ["#e5e7eb", "#bfdbfe"],
  },
];

const experimentNames = experiments.map((experiment) => {
  return experiment.experimentName;
});

export const experiment = (experimentName: string, id: string) => {
  // Check the experiment exists
  const experiment = experiments.find(
    (experiment) => experiment.experimentName == experimentName
  );
  if (!experiment) {
    throw new Error("Experiment not found");
  }
  // Get the variant for this experiment
  const variant = getVariant(experiment.variants, id);
  // Log the exposure
  log("experimentExposure", { id, experimentName, variant });
  // Return the experiment value
  return variant;
};
