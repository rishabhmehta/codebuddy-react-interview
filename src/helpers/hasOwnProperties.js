const hasOwnProperties = (obj, ...props) =>
  props.some(prop => Object.prototype.hasOwnProperty.call(obj, prop));

export default hasOwnProperties;
