var React = brackets.getModule("thirdparty/react");

function render() {
  return (
    <div className="cli-content">
      Hello, world!
    </div>
  );
}

export default React.createClass({
  render
});
