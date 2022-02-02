import { blankRowsInRangeValue } from './util.js'
export namespace BlankRows {
  /**
   * スプレッドシートの空行を削除.
   * @param sheet - シート.
   * @returns - 削除した行番号(降順).
   */
  export function deleteBlankRows(
    sheet: GoogleAppsScript.Spreadsheet.Sheet
  ): number[] {
    const rows = blankRowsInRangeValue(sheet.getDataRange().getValues())
    rows.forEach((r) => {
      sheet.deleteRows(r, 1)
    })
    return rows
  }
}
