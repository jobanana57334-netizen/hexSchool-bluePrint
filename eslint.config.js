import pluginVue from "eslint-plugin-vue";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
  // 1. 載入 Vue 基礎設定
  ...pluginVue.configs["flat/essential"],
  skipFormatting,

  // 2. 設定檢查範圍與全域規則
  {
    files: ["**/*.{js,mjs,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      // 修正這裡：規則名稱是 semi，值是等級與模式
      "semi": ["error", "always"],
      "no-console": "off",
      "no-debugger": "off"
    }
  },

  // 3. 針對 Vue 檔案的特殊覆蓋
  {
    files: ["**/*.vue"],
    plugins: {
      vue: pluginVue
    },
    rules: {
      // 確保 Vue 3 的多根節點不會報錯
      "vue/no-multiple-template-root": "off"
    }
  }
]; // 確保結尾只有一個分號和正確的括號
