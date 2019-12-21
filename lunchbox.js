class LunchBox {
  constructor(lunchBoxInfo) {
    this.owner = lunchBoxInfo.owner;
    this.material = lunchBoxInfo.madeOf;
    this.shape = lunchBoxInfo.shape;
    this.color = lunchBoxInfo.color;
    this.handle = true;
    this.snacks = [];
    this.healthySnacks = [];
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
    if (snack.healthy === true) {
      this.healthySnacks.push(snack);
    }
  }

  findHealthySnacks() {
    return this.healthySnacks;
  }
}

module.exports = LunchBox;
