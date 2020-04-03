/**
 * Get dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody, PanelRow } = wp.components;

import classnames from "classnames";
import icon from "./icon";
import "./plugin.scss";
import BlockList from "./components/BlockList";

const TableOfContents = props => {
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem target="adv-gut-zac-toc">
        {__("Table of Contents", "adv-gut-zac")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="adv-gut-zac-toc"
        title={__("Table of Contents", "adv-gut-zac")}
      >
        <PanelBody>
          <PanelRow>
            <BlockList />
          </PanelRow>
        </PanelBody>
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin("adv-gut-zac-toc", {
  icon,
  render: TableOfContents
});
