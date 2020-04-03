const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Button, Modal } = wp.components;
const { withDispatch } = wp.data;
const { compose, withState } = wp.compose;

const ResetControls = ({
  isOpen,
  setState,
  layout,
  resetBlocks,
  insertBlocks
}) => {
  return (
    <Fragment>
      <Button isLink isDestructive onClick={() => setState({ isOpen: true })}>
        {__("Reset Layout", "adv-gut-zac")}
      </Button>
      {isOpen && (
        <Modal
          className="layout-switcher-reset"
          title={__("Warning!", "adv-gut-zac")}
          onRequestClose={() => setState({ isOpen: false })}
        >
          <p>
            {__("This action will remove all blocks", "adv-gut-zac")}
            <strong>
              {__(
                "This can be undone before leaving the page with the Undo option.",
                "adv-gut-zac"
              )}
            </strong>
          </p>
          <p>
            <Button
              isDefault
              onClick={() => {
                resetBlocks([]);
                insertBlocks(layout);
                setState({ isOpen: false });
              }}
            >
              {__("Reset Layout", "adv-gut-zac")}
            </Button>
          </p>
        </Modal>
      )}
    </Fragment>
  );
};
export default compose(
  withState({
    isOpen: false
  }),
  withDispatch(dispatch => {
    const { resetBlocks, insertBlocks } = dispatch("core/editor");
    return {
      resetBlocks,
      insertBlocks
    };
  })
)(ResetControls);
