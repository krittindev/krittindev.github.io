function lg() {
    var lg_th = ["+", "๑", "๒", "๓", "๔", "ู", "฿", "๕", "๖", "๗", "๘", "๙", "ๅ", "/", "-", "ภ", "ถ", "ุ", "ึ", "ค", "ต", "จ", "ข", "ช", "๐", "\"", "ฎ", "ฑ", "ธ", "ํ", "๊", "ณ", "ฯ", "ญ", "ฐ", ",", "ฅ", "ๆ", "ไ", "ำ", "พ", "ะ", "ั", "ี", "ร", "น", "ย", "บ", "ล", "ฃ", "ฤ", "ฆ", "ฏ", "โ", "ฌ", "็", "๋", "ษ", "ศ", "ซ", ".", "ฟ", "ห", "ก", "ด", "เ", "้", "่", "า", "ส", "ว", "ง", "(", ")", "ฉ", "ฮ", "ฺ", "์", "?", "ฒ", "ฬ", "ฦ", "ผ", "ป", "แ", "อ", "ิ", "ื", "ท", "ม", "ใ", "ฝ"]
    lg_en = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
    var rawdata, lg_result1 = "",
        lg_result2 = "";
    rawdata = document.getElementById("rawdata").value;
    for (var i = 0; i < rawdata.length; i++) {
        for (var j = 0; j < 92; j++) {
            if (rawdata.charAt(i) == lg_th[j]) {
                lg_result1 += lg_en[j];
                j = 93;
            }
        }
        if (j == 92) {
            lg_result1 += " ";
        }
    }
    for (var i = 0; i < rawdata.length; i++) {
        for (var j = 0; j < 92; j++) {
            if (rawdata.charAt(i) == lg_en[j]) {
                lg_result2 += lg_th[j];
                j = 93;
            }
        }
        if (j == 92) {
            lg_result2 += " ";
        }
    }
    if (lg_result1 > lg_result2) {
        document.getElementById("lg_result").innerHTML = "ผลลัพธ์ : " + lg_result1;
    } else {
        document.getElementById("lg_result").innerHTML = "ผลลัพธ์ : " + lg_result2;
    }
}

function randomNumbers() {
    document.getElementById("num24_1").value = rnd(10);
    document.getElementById("num24_2").value = rnd(10);
    document.getElementById("num24_3").value = rnd(10);
    document.getElementById("num24_4").value = rnd(10);
    document.getElementById("solvenum24").innerHTML = "";
}
var ar = [],
    order = [0, 1, 2],
    op = [],
    val = [];
var NOVAL = 9999,
    oper = "+-*/",
    out;

function rnd(n) {
    return Math.floor(Math.random() * n)
}

function say(s) {
    try {
        document.getElementById("solvenum24").innerHTML += s + "<br>";
    } catch (e) {
        WScript.Echo(s)
    }
}

function getvalue(x, dir) {
    var r = NOVAL;
    if (dir > 0) ++x;
    while (1) {
        if (val[x] != NOVAL) {
            r = val[x];
            val[x] = NOVAL;
            break;
        }
        x += dir;
    }
    return r * 1;
}

function calc() {
    var c = 0,
        l, r, x;
    val = ar.join('/').split('/');
    while (c < 3) {
        x = order[c];
        l = getvalue(x, -1);
        r = getvalue(x, 1);
        switch (op[x]) {
            case 0:
                val[x] = l + r;
                break;
            case 1:
                val[x] = l - r;
                break;
            case 2:
                val[x] = l * r;
                break;
            case 3:
                if (!r || l % r) return 0;
                val[x] = l / r;
        }
        ++c;
    }
    return getvalue(-1, 1);
}

function shuffle(s, n) {
    var x = n,
        p = eval(s),
        r, t;
    while (x--) {
        r = rnd(n);
        t = p[x];
        p[x] = p[r];
        p[r] = t;
    }
}

function parenth(n) {
    while (n > 0) --n, out += '(';
    while (n < 0) ++n, out += ')';
}

function getpriority(x) {
    for (var z = 3; z--;)
        if (order[z] == x) return 3 - z;
    return 0;
}

function showsolution() {
    var x = 0,
        p = 0,
        lp = 0,
        v = 0;
    while (x < 4) {
        if (x < 3) {
            lp = p;
            p = getpriority(x);
            v = p - lp;
            if (v > 0) parenth(v);
        }
        out += ar[x];
        if (x < 3) {
            if (v < 0) parenth(v);
            out += oper.charAt(op[x]);
        }
        ++x;
    }
    parenth(-p);
    say(out);
}

function solve24() {
    s = "";
    s += document.getElementById("num24_1").value;
    s += document.getElementById("num24_2").value;
    s += document.getElementById("num24_3").value;
    s += document.getElementById("num24_4").value;
    var z = 4,
        r;
    while (z--) ar[z] = s.charCodeAt(z) - 48;
    out = "";
    for (z = 100000; z--;) {
        r = rnd(256);
        op[0] = r & 3;
        op[1] = (r >> 2) & 3;
        op[2] = (r >> 4) & 3;
        shuffle("ar", 4);
        shuffle("order", 3);
        if (calc() != 24) continue;
        showsolution();
        break;
    }
}