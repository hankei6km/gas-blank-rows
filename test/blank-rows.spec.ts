import { jest } from '@jest/globals'
import { BlankRows } from '../src/blank-rows.js'

describe('deleteBlankRowsImpl()', () => {
  const getSheetMock = (values: any[][]) => ({
    getDataRange: () => ({
      getValues: () => values
    }),
    deleteRows: jest.fn()
  })
  it('should delete blank rows', () => {
    const sheet = getSheetMock([
      ['a', 'b', 'c'],
      ['', '', ''],
      ['', '', ''],
      ['A', 'B', 'C'],
      ['', '', ''],
      ['1', '2', '3']
    ])
    expect(BlankRows.deleteBlankRows(sheet as any)).toEqual([5, 3, 2])
    expect(sheet.deleteRows.mock.calls).toEqual([
      [5, 1],
      [3, 1],
      [2, 1]
    ])
  })
  it('should delete blank rows(all)', () => {
    const sheet = getSheetMock([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ])
    expect(BlankRows.deleteBlankRows(sheet as any)).toEqual([4, 3, 2, 1])
    expect(sheet.deleteRows.mock.calls).toEqual([
      [4, 1],
      [3, 1],
      [2, 1],
      [1, 1]
    ])
  })
  it('should delete blank rows(not exists)', () => {
    const sheet = getSheetMock([
      ['a', 'b', 'c'],
      ['A', 'B', 'C'],
      ['1', '2', '3']
    ])
    expect(BlankRows.deleteBlankRows(sheet as any)).toEqual([])
    expect(sheet.deleteRows.mock.calls).toEqual([])
  })
})
