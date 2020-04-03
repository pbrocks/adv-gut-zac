/**
 * Block dependencies
 */
import icon from "./icon";
import Edit from "./edit";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType("adv-gut-zac/with-global-settings", {
  title: __("With Global Settings", "adv-gut-zac"),
  description: __(
    "Example block with global block settings",
    "adv-gut-zac"
  ),
  category: "adv-gut-zac",
  icon: {
    src: icon
  },
  keywords: [__("API Key", "adv-gut-zac")],
  edit: props => {
    return <Edit {...props} />;
  },
  save: props => {
    return <p>{__("Show block global settings", "adv-gut-zac")}</p>;
  }
});
