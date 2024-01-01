// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types


/// <reference types="lucia" />
declare namespace Lucia {
	type Auth = import("./lucia.js").Auth;
	type DatabaseUserAttributes = {};
	type DatabaseSessionAttributes = {};
}

declare namespace App {
	interface Locals {
		auth:Lucia.Auth
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}



export {};