var React = brackets.getModule("thirdparty/react");


function render() {
  return (
    <span onClick={this.togglePanel}>CLI</span>
  );
}


function togglePanel() {
  if (this.props.panel.isVisible()) {
      this.hidePanel();
  }
  else {
      this.showPanel();
  }
}


function showPanel() {
  this.props.panel.setVisible(true);
  this.setState({visible: true});
}


function hidePanel() {
  this.props.panel.setVisible(false);
  this.setState({visible: true});
}


export default React.createClass({
  render,
  togglePanel,
  showPanel,
  hidePanel
});
