const { Plugin } = require('@vizality/entities');

module.exports = class F8Fix extends Plugin {
  onStart () {
    document.body.addEventListener('keyup', this.keyup);
  }

  onStop () {
    document.body.removeEventListener('keyup', this.keyup);
  }

  keyup (event) {
    if (event.key === 'F8') {
      debugger;
    };
  }
};
