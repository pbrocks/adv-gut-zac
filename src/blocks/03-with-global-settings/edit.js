const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl, Button, Spinner } = wp.components;
const { apiFetch } = wp;

function getSetting() {
  return apiFetch({
    path: "/adv-gut-zac/v1/block-setting"
  })
    .then(blockSetting => blockSetting)
    .catch(error => error);
}

function setSetting(setting) {
  return apiFetch({
    path: "/adv-gut-zac/v1/block-setting",
    method: "POST",
    body: setting
  })
    .then(blockSetting => blockSetting)
    .catch(error => error);
}

export default class Edit extends Component {
  state = {
    blockSetting: "",
    isLoading: true,
    isSaving: false,
    isEditing: false
  };

  updateSetting = async () => {
    this.setState({ isSaving: true });
    const blockSetting = await setSetting(this.state.blockSetting);
    this.setState({
      blockSetting,
      isSaving: false,
      isEditing: false
    });
  };

  async componentDidMount() {
    const blockSetting = await getSetting();
    this.setState({
      blockSetting,
      isLoading: false
    });
  }

  render() {
    const { className } = this.props;

    if (this.state.isLoading) {
      return (
        <p>
          <Spinner /> {__("Loading", "adv-gut-zac")}
        </p>
      );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Block Setting", "adv-gut-zac")}
            initialOpen
          >
            <PanelRow>
              {this.state.isEditing || this.state.blockSetting === "" ? (
                <p>
                  <TextControl
                    label={__("Please enter a setting", "adv-gut-zac")}
                    value={this.state.blockSetting}
                    onChange={blockSetting => {
                      if (!this.state.isSaving) {
                        this.setState({
                          blockSetting,
                          isEditing: true
                        });
                      }
                    }}
                  />
                  <Button
                    isPrimary
                    disabled={this.state.isSaving}
                    onClick={() => {
                      this.updateSetting();
                    }}
                  >
                    {__("Save Setting", "adv-gut-zac")}
                  </Button>{" "}
                  <Button
                    isDefault
                    disabled={this.state.isSaving}
                    onClick={async () => {
                      this.setState({ isEditing: false });
                      const blockSetting = await getSetting();
                      this.setState({ blockSetting });
                    }}
                  >
                    {__("Cancel", "adv-gut-zac")}
                  </Button>
                </p>
              ) : (
                <Fragment>
                  <p>{__("Global Setting Saved", "adv-gut-zac")}</p>
                  <Button
                    isDefault
                    onClick={() => {
                      this.setState({
                        isEditing: true
                      });
                    }}
                  >
                    {__("Edit", "adv-gut-zac")}
                  </Button>
                </Fragment>
              )}
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div className={className}>
          {this.state.blockSetting === "" ? (
            <p>
              {__(
                "Please enter a block settings value in the block settings.",
                "adv-gut-zac"
              )}
            </p>
          ) : (
            <p>
              {__("Global Setting: ", "adv-gut-zac")}
              {this.state.blockSetting}
            </p>
          )}
        </div>
      </Fragment>
    );
  }
}
