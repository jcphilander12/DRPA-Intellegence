import type { Cloudflare } from "../cloudflare-env";

export const env: Cloudflare.Env =
  typeof process !== "undefined" && process.env
    ? (process.env as unknown as Cloudflare.Env)
    : ({} as Cloudflare.Env);
