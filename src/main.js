// highjack the root module so that we can use it for loading
// stylesheets via loadStyleSheet.
import _module from './_module';

// Brackets modules
var React            = brackets.getModule("thirdparty/react");
var AppInit          = brackets.getModule("utils/AppInit");
var WorkspaceManager = brackets.getModule("view/WorkspaceManager");
var ExtensionUtils   = brackets.getModule("utils/ExtensionUtils");

// Application modules
import CLI               from './view/CLI.jsx';
import MainToolbarButton from './view/MainToolbarButton.jsx';
import BottomPanel       from './view/BottomPanel.jsx';


// Your appReady callback is when the application is ready
AppInit.appReady(() => {
  ExtensionUtils.loadStyleSheet(_module.get(), 'style/main.css');

  var $panel = $(React.renderComponentToStaticMarkup(<BottomPanel/>));
  var panel  = WorkspaceManager.createBottomPanel("command-line", $panel, 100);

  React.renderComponent(
    <CLI panel={panel}/>,
    panel.$panel.children('.resizable-content')[0]
  );

  React.renderComponent(
    <MainToolbarButton panel={panel}/>,
    $('<a>').appendTo("#main-toolbar .buttons")[0]
  );
});
