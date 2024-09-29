import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url, { interopDefault: true });

const commitlintConfiguration =
  /** @type {import('@commitlint/types').UserConfig} */ (
    await jiti.import("./commitlintrc.ts")
  );

export default commitlintConfiguration;
