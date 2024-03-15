import jiti from "jiti";

const moduleFileUrl = new URL(import.meta.url);
const JITI = jiti(moduleFileUrl.pathname);

/**
 * @type {import('@commitlint/types').UserConfig}
 */
const commitlintConfiguration = JITI("./commitlintrc.ts").default;

export default commitlintConfiguration;
