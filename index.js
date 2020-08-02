const { Plugin } = require("powercord/entities");

module.exports = class F8Fix extends Plugin {
	constructor() {
		super();
	}

	async startPlugin() {
		document.body.addEventListener("keyup", this.keyup);
	}

	pluginWillUnload() {
		document.body.removeEventListener("keyup", this.keyup);
	}

	keyup(event) {
		if (event.key == "F8") {
			debugger;
		}
	}
};
