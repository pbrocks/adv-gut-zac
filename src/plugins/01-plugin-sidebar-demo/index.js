/**
 * Get dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { PanelBody, PanelRow } = wp.components;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

const PluginSidebarDemo = props => {
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem target="adv-gut-zac-demo">
        {__("Plugin Sidebar Demo", "adv-gut-zac")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="adv-gut-zac-demo"
        title={__("Plugin Sidebar Demo", "adv-gut-zac")}
      >
        <PanelBody title={__("Sidebar Header", "adv-gut-zac")} opened>
          <PanelRow>
            <p>{__("Plugin Sidebar Demo", "adv-gut-zac")}</p>
          </PanelRow>
        </PanelBody>
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin("adv-gut-zac-demo", {
  icon: "admin-plugins",
  render: PluginSidebarDemo
});
