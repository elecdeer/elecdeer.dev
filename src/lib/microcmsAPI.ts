import { createClient } from "microcms-js-sdk";

const apiDomain = process.env.API_DOMAIN;
const apiKey = process.env.API_KEY;
if (!apiDomain) {
  throw new Error("env: API_DOMAIN not set");
}
if (!apiKey) {
  throw new Error("env: API_KEY not set");
}

export const client = createClient({
  serviceDomain: apiDomain,
  apiKey: apiKey,
});
