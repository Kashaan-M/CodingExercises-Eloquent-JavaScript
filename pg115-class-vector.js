class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vec(other.x + this.x, other.y + this.y);
  }
  minus(other) {
    return new Vec(other.x - this.x, other.y - this.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
