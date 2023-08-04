const createEventHandler = (func, key) => e => func(e, key);

export default createEventHandler;
