import { Feature1Service, FEATURE1_PROVIDERS } from "./feature1/index";
import { Feature2Service, FEATURE2_PROVIDERS } from "./feature2/index";

export const PROVIDERS = [
	...FEATURE1_PROVIDERS,
	...FEATURE2_PROVIDERS
];