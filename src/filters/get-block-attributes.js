function customAttributesTest(attributes, block) {
  if (block.name === "core/image" && !attributes.align) {
    console.log(attributes.align);
    return lodash.merge(attributes, { align: "full" });
  }
  return attributes;
}

// Adding the filter
wp.hooks.addFilter(
  "blocks.getBlockAttributes",
  "adv-gut-zac/get-block-attributes",
  customAttributesTest
);
