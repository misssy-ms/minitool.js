
const minitool = {
  "setDigit" : function (n, d) {
    n = n.toString();
    d = d - n.length;
    for (let i = 0; i < d; i++) {
      n = "0" + n;
    }
    return n;
  },
  "secToMsec": function (s) {
    return s * 1000;
  },
  "secToTimer": function (s) {
    return this.setDigit(Math.floor(s / 60), 2) + ":" + this.setDigit(s % 60, 2);
  },
  "month": function (m) {
    m++;
    if (m < 10) {
      m = "0" + m;
    }
    return m;
  }
}