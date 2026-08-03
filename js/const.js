export const Effects = {
  CHROME: "chrome",
  SEPIA: "sepia",
  MARVIN: "marvin",
  PHOBOS: "phobos",
  HEAT: "heat",
  NONE: "none",
};

export const EffectsSettings = {
  [Effects.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },
    style: "grayscale",
    units: "",
  },
  [Effects.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },

    style: "sepia",
    units: "",
  },
  [Effects.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
    },
    style: "invert",
    units: "%",
  },
  [Effects.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
    style: "blur",
    units: "px",
  },
  [Effects.HEAT]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
    style: "brightness",
    units: "",
  },
  [Effects.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
    },
    style: "none",
    units: "",
  },
};
