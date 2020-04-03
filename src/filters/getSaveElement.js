const { addFilter } = wp.hooks;

addFilter(
  "blocks.getSaveElement",
  "adv-gut-zac/get-save-element",
  extendWithGetSaveElement
);

function extendWithGetSaveElement(el, type, attributes) {
  if ("core/quote" === type.name) {
    return <div className="MYWRAPPER">{el}</div>;
  }
  return el;
}
