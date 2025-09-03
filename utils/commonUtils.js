import path from "path";
import fs from "fs";

export async function takeScreenShot(page, testInfo) {
  const status = testInfo.status || "info";

  const fileName = `${testInfo.title}_${status}_${Date.now()}.png`;
  const folderPath = path.join("reports", "screenshot", status);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filePath = path.join(folderPath, fileName);
  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`Screenshot saved at: ${filePath}`);
}
