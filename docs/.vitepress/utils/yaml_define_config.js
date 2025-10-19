/**
 * This js function utility built by Gemini 2.5pro in Felo.ai.
 */


// 從 Node.js 內建模組匯入
import { readFileSync } from 'fs'; // <-- 注意：使用 readFileSync
import path from 'path';
import { fileURLToPath } from 'url'; // <-- 用於轉換 URL 路徑

// 從安裝的套件匯入
import yaml from 'js-yaml';

/**
 * 同步地讀取並解析一個 YAML 檔案。
 * @param {string} relativeFilePath - 相對於呼叫檔案的 YAML 檔案路徑。
 * @param {string} callerUrl - 呼叫此函式的檔案的 URL (使用 import.meta.url)。
 * @returns {Object} - 解析後的 JavaScript 物件。
 * @throws {Error} - 如果檔案讀取或解析失敗，將拋出錯誤。
 */
function readYamlSync(relativeFilePath, callerUrl) {
  try {
    // 解決路徑問題：將 import.meta.url 轉換為檔案系統路徑
    const callerDir = path.dirname(fileURLToPath(callerUrl));
    
    // 組合出 YAML 檔案的絕對路徑
    const absolutePath = path.resolve(callerDir, relativeFilePath);

    // 同步讀取檔案內容
    const fileContents = readFileSync(absolutePath, 'utf8');

    // 使用 js-yaml 的 load 方法同步解析 YAML 內容
    // Function yaml.safeLoad is removed in js-yaml 4. Use yaml.load instead, which is now safe by default.
    const data = yaml.load(fileContents);

    return data;
  } catch (error) {
    console.error(`同步讀取或解析 YAML 檔案時發生錯誤: ${relativeFilePath}`, error);
    // 重新拋出錯誤，讓呼叫者可以捕捉並處理
    throw error;
  }
}

// 使用 ES6 的 export default 關鍵字匯出函式
export default readYamlSync;
