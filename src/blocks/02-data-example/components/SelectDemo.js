const { __ } = wp.i18n;
const { select } = wp.data;

const SelectDemo = props => {
  const blockCount = select("core/editor").getBlockCount();

  return (
    <div>
      <pre>
        <code>{"select()"}</code>
      </pre>
      <p>
        {__("Block Count:", "adv-gut-zac")} {blockCount}
      </p>
    </div>
  );
};

export default SelectDemo;
