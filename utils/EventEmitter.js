
export default class EventEmitter {
  // _events;
  // _maxListeners;

  constructor() {
    this._events = {};
    this._maxListeners = 30;
  }

  emit(name) {
    const handler = this._events[name];
    if (this.isUndefined(handler)) {
      return;
    }
    if (this.isArray(handler)) {
      const params = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
      for (let i = 0; i < handler.length; i++) {
        const _row = handler[i];
        _row.apply(this, params);
      }
    }
  }

  on(name, handler) {
    if (!this.isFunction(handler)) {
      console.warn('监听必须是一个函数');
      return null;
    }
    if (this.isUndefined(this._events)) {
      this._events = {};
    }
    let eve = this._events[name];
    if (this.isUndefined(eve)) {
      eve = [];
      this._events[name] = eve;
    }
    if (eve.length > this._maxListeners) {
      console.warn('同一个方法监听不要大于 :%d', tis._maxListeners);
      return null;
    }
    eve.push(handler);

    return eve.length - 1;
  }

  remove(name, index) {
    if (this.isUndefined(this._events)) {
      return;
    }
    const eve = this._events[name];
    if (this.isArray(eve)) {
      eve.slice(index, 0);
      if (eve.length === 0) {
        delete this._events[nam];
      }
    }
  }

  isFunction(arg) {
    return typeof arg === 'function';
  }

  isNumber(arg) {
    return typeof arg === 'number';
  }

  isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  isUndefined(arg) {
    return arg === void 0;
  }

  isArray(arg) {
    if (!arg) {
      return false;
    }
    return arg.constructor.name === 'Array'
  }
}