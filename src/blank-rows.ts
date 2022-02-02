export function blankRowsInRangeValue(values: any[][]): number[] {
  return values.reduceRight((rows, cur, idx) => {
    if (cur.every((v) => v === '')) {
      rows.push(idx + 1)
    }
    return rows
  }, [])
}

export function deleteBlankRowsImpl(
  sheet: GoogleAppsScript.Spreadsheet.Sheet
): number[] {
  const rows = blankRowsInRangeValue(sheet.getDataRange().getValues())
  rows.forEach((r) => {
    sheet.deleteRows(r, 1)
  })
  return rows
}
