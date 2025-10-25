/** biome-ignore-all lint/complexity/noStaticOnlyClass: BRO ITS A D.TS FILE */
enum COMPATIBILITY_MODE {
	NONE = "none",
	IE5 = "ie5",
	NETSCAPE = "netscape",
	OPERA_PRESTO = "opera_presto"
}

export default class falsejs {

	/**
	 * Returns false from the given parameters.
	 *
	 * @param {"yes"|"no"} loggingEnabled - Indicates whether logging should be enabled.
	 * @param {"yes"|"no"} shouldDoSomethingAsync - A pointless option that indicates whether something should be done asynchronously that just waits 200ms before saying "Did something async"
	 * @param {"yes"|"no"} shouldDoSomethingAsyncWithIsTenThousand - Indicates whether something should be done asynchronously when checking the self equality of 10,000 using the isTenThousand module (credits to james-work-account)
	 * @param {"yes"|"no"} disableAprilFoolsSideEffects - Indicates whether April Fools side effects should be disabled.
	 * @param {"yes"|"no"} definitelyDisableAprilFoolsSideEffects - Indicates whether April Fools side effects should be definitely disabled.
	 * @param {"yes"|"no"} strictDisableAprilFoolsSideEffectsCheck - Indicates whether strict checking for disabling April Fools side effects should be enabled.
	 * @param {"none"|"ie5"|"netscape"|"opera_presto"} compatibilityMode - The compatibility mode for various legcay browser environments.
	 * @returns {boolean} - The calculated boolean value 'false'.
	 */
	static COMPATIBILITY_MODE = COMPATIBILITY_MODE
	static False(
		loggingEnabled?: "yes" | "no",
		shouldDoSomethingAsync?: "yes" | "no",
		shouldDoSomethingAsyncWithIsTenThousand?: "yes" | "no",
		disableAprilFoolsSideEffects?: "yes" | "no",
		definitelyDisableAprilFoolsSideEffects?: "yes" | "no",
		strictDisableAprilFoolsSideEffectsCheck?: "yes" | "no",
		compatibilityMode?: COMPATIBILITY_MODE | "none" | "ie5" | "netscape" | "opera_presto"
	): boolean

	/**
	 * Checks if a given value is false.
	 *
	 * @param {any} value - The value to be checked.
	 * @returns {boolean} - True if the value is false, false otherwise.
	 */

	static isFalse(value: any, loggingEnabled?: "yes" | "no"): boolean

	static injectIntojQuery(): void
	static expressMiddleware(req: any, res: any, next: any): void
}
