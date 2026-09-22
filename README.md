# @char46/koishi-plugin-video-parser-all（兼容壳）

旧命名空间 `video-parser-all` 的兼容壳，实现转发到 [`@sns-parse/koishi-plugin-sns-parse`](https://www.npmjs.com/package/@sns-parse/koishi-plugin-sns-parse)。

- 老用户可继续使用本包，配置命名空间不变（`video-parser-all`）。
- **建议迁移**到 `@sns-parse/koishi-plugin-sns-parse`（命名空间 `sns-parse`），但**非强制**。
- 迁移：旧包执行 `parse/config export --include-secrets`，新包执行 `parse/config migrate <文件>`。

## 许可

MIT
