const defaultSettings = {
  isVisible: true,
  isDisabled: true,
  colorMode: "dark",
};
const customSettings = {
  colorMode: "light",
};

const finalSettings = {
  ...defaultSettings,
  colorMode: "light",
  isDisabled: false,
  engine: "diesel",
};
const finalSettings2 = Object.assign(defaultSettings, customSettings);
console.log(finalSettings);
console.log(finalSettings2);
