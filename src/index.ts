/**
 * 旧命名空间兼容壳 (@char46/koishi-plugin-video-parser-all)。
 *
 * 实现完全来自 @sns-parse/koishi-plugin-sns-parse，仅命名空间保持 video-parser-all，
 * 老用户升级后无需改动已有配置；新旧包配置可通过 `parse/config export|migrate` 互迁。
 */
import { createPlugin, Config } from '@sns-parse/koishi-plugin-sns-parse'

export const name = 'video-parser-all'
export { Config }

/** 可选服务依赖：ferret-transform-image (>=0.0.4) 提供图片混淆服务 */
export const inject = {
  optional: ['ferret-transform'],
}

export const apply = createPlugin(name)
