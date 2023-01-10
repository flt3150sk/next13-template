import { envsafe, url, bool } from 'envsafe';

export const env = envsafe({
  NEXT_PUBLIC_USING_MOCK: bool({
    input: process.env.NEXT_PUBLIC_USING_MOCK,
  }),
  NEXT_PUBLIC_API_URL: url({
    input: process.env.NEXT_PUBLIC_API_URL,
  }),
});
