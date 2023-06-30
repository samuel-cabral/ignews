import { ClientConfig, createClient } from '@prismicio/client';

export function getPrismicClient(options?: ClientConfig) {
  return createClient(process.env.PRISMIC_ENDPOINT, {
    ...options,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });
}
