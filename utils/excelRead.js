import * as XLSX from "xlsx";
import path from "path";

export function ExcelToJSONconvert() {
  const excelFilePath = path.resolve("testData/SignUpData.xlsx");
  const workbook = XLSX.readFile(excelFilePath);
  const sheet = workbook.Sheets["SignupData"];
  const jsonData = XLSX.utils.sheet_to_json(sheet);
  return jsonData;
}
