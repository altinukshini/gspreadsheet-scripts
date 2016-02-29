// Add menu item
function onOpen() {
 var ss = SpreadsheetApp.getActive();
 var items = [
   {name: 'Insert Date', functionName: 'insertTimestamp'}
 ];
 ss.addMenu('Custom functions', items);
}

// Main function to insert date automatically in a cell
function insertTimestamp() {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var cell = ss.getActiveCell();

 cell.setValue(new Date());
 cell.setNumberFormat("dd.mm.yyyy");
}
