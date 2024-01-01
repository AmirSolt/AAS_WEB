
import { NODE_ENV } from "$env/static/private";
import { lucia, type Env } from "lucia";
import { sveltekit } from "lucia/middleware";
import { prisma as prismaAdapter } from "@lucia-auth/adapter-prisma";
import "lucia/polyfill/node";
import { prisma } from "./prisma";

// expect error (see next section)
export const auth = lucia({
	env: NODE_ENV==="development" ? "DEV" : "PROD",
    middleware:sveltekit(),
    adapter:prismaAdapter(prisma),
});

export type Auth = typeof auth;