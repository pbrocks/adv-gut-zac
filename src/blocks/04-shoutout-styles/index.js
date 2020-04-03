/**
 * Block dependencies
 */
// import icons from "./icons";
import "./style.scss";
// import "./editor.scss";

/**
 * Internal block libraries
 */
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register example block
 */
export default registerBlockType("adv-gut-zac/shoutout-styles", {
  title: __("Shoutout", "adv-gut-zac"),
  description: __(
    "An example block for working with Styles API.",
    "adv-gut-zac"
  ),
    category: "adv-gut-zac",
  icon: {
    src: "megaphone"
  },
  keywords: [__("Call to Action", "adv-gut-zac")],
  attributes: {
    headline: {
      type: "string"
    },
    text: {
      type: "html"
    }
  },
  edit: props => {
    const {
      attributes: { headline, text },
      className,
      setAttributes,
      isSelected
    } = props;

    return (
      <div className={className}>
        {/* {isSelected ? (
          <TextControl
            label="Headline"
            value={headline}
            onChange={headline => setAttributes({ headline })}
          />
        ) : (
          <h2>{headline}</h2>
        )} */}
        <RichText
          value={headline}
          tagName="h2"
          placeholder={__("Headline", "adv-gut-zac")}
          onChange={headline => setAttributes({ headline })}
        />
        <RichText
          value={text}
          placeholder={__("Shoutout Text", "adv-gut-zac")}
          onChange={text => setAttributes({ text })}
        />
      </div>
    );
  },
  save: props => {
    const { headline, text } = props.attributes;
    return (
      <div>
        <RichText.Content value={headline} tagName="h2" />
        <RichText.Content value={text} tagName="div" />
      </div>
    );
  }
});
