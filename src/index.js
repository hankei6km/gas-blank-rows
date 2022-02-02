/**
 * gas-blank-rows
 * @copyright (c) 2022 hankei6km
 * @license MIT
 * see "LICENSE.txt" "OPEN_SOURCE_LICENSES.txt" of "gas-blank-rows.zip" in
 * releases(https://github.com/hankei6km/gas-blank-rows/releases)
 */

'use strict'

/**
 * スプレッドシートの空行を削除.
 * @param { SpreadsheetApp.Sheet } sheet - シート.
 * @returns {Array<number>} - 削除した行番号(降順).
 */
function deleteBlankRows(sheet) {
  return _entry_point_.BlankRows.deleteBlankRows(sheet)
}
