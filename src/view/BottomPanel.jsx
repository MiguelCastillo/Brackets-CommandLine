var React = brackets.getModule("thirdparty/react");


function render() {
  return (
    <div id="cli" className="bottom-panel vert-resizable top-resizer">
      <div className="resizable-content">
      </div>
    </div>
  );
}


export default React.createClass({
  render
});
