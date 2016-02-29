/*
* USE
*
* =sumByBGColor("A1:A10", "B1")
* 
* Where A1:A10 is the range of cells you want to sum the values, and B1 is the colored cell used for reference
*
**/

function sumByBGColor(range, colorRange) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = sheet.getSheets()[0];

  var colorCell = sheet.getRange(colorRange);
  var colorValue = colorCell.getBackground();
  
  var range = sheet.getRange(range);
  var rangeVal = range.getValues();
  
  var sum = 0;
  var allColors = range.getBackgrounds();
  for (var i = 0; i < allColors.length; i++) {
      for (var j = 0; j < allColors[0].length; j++) {
        if (allColors[i][j] == colorValue){
          sum += rangeVal[i][j];
        }
      };
  };
  return sum;
}
