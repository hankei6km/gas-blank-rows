export function blankRowsInRangeValue(values: any[][]): number[] {
  return values.reduceRight((rows, cur, idx) => {
    if (cur.every((v) => v === '')) {
      rows.push(idx + 1)
    }
    return rows
  }, [])
}
