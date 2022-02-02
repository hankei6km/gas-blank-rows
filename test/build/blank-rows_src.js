import { jest } from '@jest/globals'

describe('deleteBlankRows()', () => {
  it('should delete blank rows', () => {
    const sheet = {
      getDataRange: () => ({
        getValues: () => [
          ['a', 'b'],
          ['', '']
        ]
      }),
      deleteRows: jest.fn()
    }
    expect(deleteBlankRows(sheet)).toEqual([2])
    expect(sheet.deleteRows.mock.calls).toEqual([[2, 1]])
  })
})
