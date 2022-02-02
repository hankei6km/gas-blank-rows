import { deleteBlankRows } from '../src/blank-rows'

describe('deleteBlankRows()', () => {
  it('should delete blank rows', () => {
    expect(deleteBlankRows('' as any)).toEqual('')
  })
})
