import XLSX from "xlsx";
import { saveAs } from "file-saver";

export const descargarExcel = (sheetNames, data, columns) => {
  function s2ab(s) {
    let buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }

  let workbook = XLSX.utils.book_new();
  workbook.SheetNames.push(sheetNames);

  let workshet = XLSX.utils.json_to_sheet(data);

  workbook.Sheets[sheetNames] = workshet;

  let wbout = XLSX.write(workbook, {
    bookType: "xls",
    bookSST: true,
    type: "binary",
  });

  saveAs(
    new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
    sheetNames + "_" + Date.now() + ".xls"
  );
};
