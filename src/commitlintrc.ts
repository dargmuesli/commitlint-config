import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

const ruleMaxLineLength: [RuleConfigSeverity, "always", 100] = [
  process.env.CI === "true"
    ? RuleConfigSeverity.Disabled
    : RuleConfigSeverity.Error,
  "always",
  100,
];

const configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": ruleMaxLineLength,
    "footer-max-line-length": ruleMaxLineLength,
  },
};

export default configuration;
