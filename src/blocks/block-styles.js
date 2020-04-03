const { registerBlockStyle } = wp.blocks;

import "./style.scss";

registerBlockStyle("core/quote", {
  name: "colorful-quote",
  label: "Colorful Quote"
});

registerBlockStyle("adv-gut-zac/shoutout-styles", {
  name: "default",
  label: "Default"
});

registerBlockStyle("adv-gut-zac/shoutout-styles", {
  name: "serious",
  label: "Serious"
});

registerBlockStyle("adv-gut-zac/shoutout-styles", {
  name: "colorful",
  label: "Colorful"
});
