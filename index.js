const { Plugin } = require('@vizality/entities');

module.exports = class F8Fix extends Plugin {
  start () {
    document.body.addEventListener('keyup', this.keyup);
  }

  stop () {
    document.body.removeEventListener('keyup', this.keyup);
  }

  keyup (event) {
    if (event.key === 'F8') {
      debugger;
    };
  }
};
