// Создаем свой тестовый модуль
// Экспортируем данные

var color = ['blue', 'green', 'yellow', 'red'];

exports.getColor = function() {
	var local = Math.floor(Math.random() * color.length);
	return color[local];
}