let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok");
obj = null;