class Snack {
  constructor(snack) {
    this.deliciousLevel = 'extra';
    this.type = snack;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    snack.includes('Fruit') ? this.healthy = true : this.healthy = false;
  }

  getEaten() {
    this.amount -= 10;
    this.amount <= 20 ? this.cuttingItClose = true : this.cuttingItClose = false;
  }
}

module.exports = Snack;
