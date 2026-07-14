import { createClient } from "microcms-js-sdk";

console.log(process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN);
console.log(process.env.MICROCMS_API_KEY);

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});
