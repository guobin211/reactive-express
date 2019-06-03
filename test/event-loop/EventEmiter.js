/**
 * EventEmiter
 * @author guobin201314@gmail.com on 2019-06-03
 */
class EventEmiter {
  constructor() {
    this.subs = {};
  }

  on(event, callback) {
    if (!this.subs[event]) {
      this.subs[event] = [];
      this.subs[event].push(callback);
    } else {
      this.subs[event].push(callback);
    }
  }

  notify(event, data) {
    if (this.subs[event]) {
      this.subs[event].forEach(cb => {
        cb(data);
      });
    }
  }

  once(event, onceCB) {
    const cb = (...rest) => {
      let res = onceCB.apply(null, rest);
      this.off(event, onceCB);
      return res;
    };
    if (!this.subs[event]) {
      this.subs[event] = [];
      this.subs[event].push(cb);
    }
  }

  off(event, offCB) {
    if (this.subs[event]) {
      let index = this.subs[event].findIndex(cb => cb === offCB);
      this.subs[event].splice(index, 1);
      if (!this.subs[event].length) {
        delete this.subs[event];
      }
    }
  }
}

const ev = new EventEmiter();
const jack = {
  name: 'jack',
  handleEvent: (data) => {
    console.log(jack.name + ': ' + data);
  }
};
const tom = {
  name: 'tom',
  handleEvent: (data) => {
    console.log(tom.name + ': ' + data);
  }
};
const eventName = 'hello';
ev.on(eventName, tom.handleEvent.bind(this));
ev.on(eventName, (data) => {
  jack.handleEvent(data);
});

ev.notify(eventName, 'welcome to node');
