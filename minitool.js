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
  },
  "customSecTimer": function (type, time) {
    if (type === "h") {
      return this.setDigit(Math.floor(time / 3600), 2);
    } else if (type === "m") {
      let m = Math.floor(time / 60);
      if (m >= 60) {
        m = Math.floor(m / 60);
      }
      return this.setDigit(m, 2);
    } else if (type === "s") {
      return this.setDigit(time % 60, 2);
    }
  },
  "msecToSec": function (ms) {
    return Number(ms.toString().substring(0, ms.toString().length - 3));
  }
}