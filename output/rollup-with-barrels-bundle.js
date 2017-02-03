(function (exports) {
'use strict';

class Feature1Service {
	doSomething() {
		console.log("doSomething");
	}
}

const FEATURE1_PROVIDERS = [
	Feature1Service
];

class Feature2Service {
	doSomething() {
		console.log("doSomethingElse");
	}
}

const FEATURE2_PROVIDERS = [
	Feature2Service
];

const PROVIDERS = [
	...FEATURE1_PROVIDERS,
	...FEATURE2_PROVIDERS
];

exports.PROVIDERS = PROVIDERS;

}((this.test = this.test || {})));
