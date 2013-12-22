var files = new Array();
files=["Bear.png", "Bells.png", "Bow.png", "Candle.png", "Cane.png", "Card.png", "Carolers.png", "Coal.png", "Doll.png", "Fireplace.png", "Holly.png", "Horse.png", "Lights.png", "Ornament.png", "Present.png", "Reindeer.png", "Santa.png", "Sleigh.png", "Snowflake.png", "Snowman.png", "Soldier.png", "Star.png", "Stocking.png", "Toys.png", "Train.png", "Tree.png", "Wreath.png"];

var rows = 4;
var columns = 4;

for (var row = 0; row < rows; row++) {
	document.write("<tr>");
	for (var column = 0; column < columns; column++) {
		index = (4 * row) + column;
		file = files[index];
		img = "<img src=\"pictures/" + file + "\" />";
		document.write("<td>" + img + "</td>");
	}
	document.write("</tr>")
}
