(function (exports) {
'use strict';

class Feature1Service {
	doSomething() {
		console.log("doSomething");
	}
}

class Feature2Service {
	doSomething() {
		console.log("doSomethingElse");
	}
}

const PROVIDERS = [
	Feature1Service,
	Feature2Service
];

exports.PROVIDERS = PROVIDERS;

}((this.test2 = this.test2 || {})));
