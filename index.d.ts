/**
 * Type definitions for FalseJS
 */

export interface FalseJS {
	/**
	 * The core False function.
	 * Accepts configuration strings and a compatibility mode.
	 */
	False: (...args: (string | any)[]) => false

	/**
	 * Validates if a value is strictly false.
	 */
	isFalse: (value: any) => value is false

	/**
	 * Injects FalseJS functionality into a global jQuery instance.
	 */
	injectIntojQuery: () => void

	/**
	 * Express.js middleware that attaches False and isFalse to the request object.
	 */
	expressMiddleware: (req: any, res: any, next: () => void) => void

	/**
	 * Compatibility constants nested strictly under the default export.
	 */
	COMPATIBILITY_MODE: {
		NONE: "none"
		NETSCAPE: "netscape"
		IE5: "ie5"
		OPERA_PRESTO: "opera_presto"
	}
}

/**
 * The single default export representing the library object.
 */
declare const falsejs: FalseJS

export default falsejs
