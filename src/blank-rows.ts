export namespace BlankRows {
  function blankRowsInRangeValue(values: any[][]): number[] {
    return values.reduceRight((rows, cur, idx) => {
      if (cur.every((v) => v === '')) {
        rows.push(idx + 1)
      }
      return rows
    }, [])
  }

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
