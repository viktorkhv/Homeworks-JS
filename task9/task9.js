function Animal(name) {
    this.name = name;
    this._foodAmount = 50;

    var self = this;

    self.formatFoodAmount = function() {
        return self._foodAmount + ' гр.';
    };
    self.dailyNorm = function(amount) {
        if (!arguments.length) return self.formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };
    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}
function Cat(name) {
    Animal.apply(this, arguments);
    var animalFeed = this.feed;
    this.feed = function () {
        animalFeed.call(self);
        console.log('Кот доволен ^_^');
        return this;
    }
    this.stroke = function () {
        console.log('Гладим кота.');
    }
}

var bars = new Cat('Bars');
console.log(bars.feed().stroke());
