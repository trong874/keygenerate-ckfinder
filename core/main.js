!function(e) {
    e.fn.keyGenCKfinder = function(r) {
        function n(e, r) {
            return 0 > e - r && e - r + 33;
        }

        function s(e) {
            return e = e.replace(new RegExp("^www."), ""),
                e = e.replace(new RegExp("^."), "");
        }

        function c(e) {
            for (var r = 0, n = 0; 10 > n; n++)
                r += e.charCodeAt(n);
            for (; r > 33;) {
                const s = r.toString().split("");
                r = 0;
                for (var c = 0; c < s.length; c++)
                    r += parseInt(s[c]);
            }
            return r;
        }

        function a(e, r, n, s, c, a) {
            for (var t = 33, l = n, i = a, h = t + (l * i - (h = s) * (y = c)) % t, o = window.Date, y = l = 0;
                 t > y;
                 y++)
                1 === h * y % t && (l = y);
            h = e,
                y = r;
            return i = new o(145751884e4),
            (l * a % t * h + l * (t + -1 * s) % t * y) % t * 12 +
            ((l * (33 + -1 * c) - 33 * ("" + l * (t + -1 * c) / 33 >>> 0)) * h + l * n % 33 * y) % t -
            1 >=
            i.getFullYear() % 2e3 * 12 + i.getMonth();
        }

        function t(e) {
            var r = 0, c = e;
            0 === t && (c = s(c));
            for (let a = 0; a < c.length; a++)
                r += c.charCodeAt(a);
            return n = r + -33 * parseInt(r % 100 / 33, 10) - 100 * ("" + r / 100 >>> 0);
        }

        function l(e) {
            function r(e) {
                for (var r = chars.toString().split(""), n = 0; n < r.length; n++)
                    if (e === r[n])
                        return n;
                return 0;
            }

            for (licenseKey = "",
                     chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ",
                     i = 0;
                 i <= 28;
                 i++)
                licenseKey += chars[Math.floor(Math.random() * (chars.length - 1))];
            return zeroChars = chars[Math.floor(Math.random() * (chars.length - 1))],
                licenseKey = licenseKey.replaceAt(1, zeroChars),
                licenseKey = licenseKey.replaceAt(3, zeroChars),
                twoChars = chars[1] +
                    chars[6] +
                    chars[11] +
                    chars[16] +
                    chars[21] +
                    chars[26] +
                    chars[31] +
                    chars[2] +
                    chars[7] +
                    chars[12] +
                    chars[17] +
                    chars[22] +
                    chars[27] +
                    chars[32],
                twoChars = twoChars[Math.floor(Math.random() * (twoChars.length - 1))],
                licenseKey = licenseKey.replaceAt(2, twoChars),
                thirteen = chars[function(e, r) {
                    for (var n = r.toString().split(""), s = 0; s < n.length; s++)
                        if (e === n[s])
                            return s;
                    return 0;
                }(licenseKey[8], chars) +
                1],
                licenseKey = licenseKey.replaceAt(13, thirteen),
                twenty = t(e),
                twentyChar = chars[twenty],
                licenseKey = licenseKey.replaceAt(20, twentyChar),
                licenseC = licenseKey[1] +
                    licenseKey[8] +
                    licenseKey[17] +
                    licenseKey[22] +
                    licenseKey[3] +
                    licenseKey[13] +
                    licenseKey[11] +
                    licenseKey[20] +
                    licenseKey[5] +
                    licenseKey[24],
                tsC = c(licenseC),
                twentySevenChars = chars[tsC],
                licenseKey = licenseKey.replaceAt(27, twentySevenChars),
                a(r(licenseC[8]),
                    r(licenseC[9]),
                    r(licenseC[0]),
                    r(licenseC[1]),
                    r(licenseC[2]),
                    r(licenseC[3]))
                    ? licenseKey
                    : l(e);
        }

        const h = {
            version: "2x",
            licenseKey: "",
            licenseName: "",
            classKey: ".licenseKey"
        };
        r = e.extend(h, r),
            String.prototype.replaceAt = function(e, r) {
                return e > this.length - 1 ? this : this.substr(0, e) + r + this.substr(e + r.length);
            },
            licName = e(r.licenseName).val(),
            "" === licName
                ? (alert("Mời bạn nhập License Name!"),
                    e(r.licenseName).css("background-color", "yellow"))
                : (e(r.licenseName).css("background-color", ""),
                    "2x" === r.version
                        ? (r.licenseKey = function(e) {
                            licenseKey = "";
                            for (chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ",
                                     i = 0;
                                 i <= 31;
                                 i++)
                                licenseKey += chars[Math.floor(Math.random() * (chars.length - 1))];
                            return zeroChars =
                                chars[4] + chars[9] + chars[14] + chars[19] + chars[24] + chars[29],
                                zeroChars = zeroChars[Math.floor(Math.random() * (zeroChars.length - 1))],
                                licenseKey = licenseKey.replaceAt(0, zeroChars),
                                threeChars =
                                    chars.substr(9 * (e.length + chars.indexOf(licenseKey[1])) % 32, 1),
                                licenseKey = licenseKey.replaceAt(3, threeChars),
                                twelveChars =
                                    chars[9 *
                                    (chars.indexOf(licenseKey[11]) + chars.indexOf(licenseKey[8])) %
                                    (chars.length - 1)],
                                licenseKey = licenseKey.replaceAt(12, twelveChars),
                                twentyFiveChars = chars[7] + chars[15] + chars[23] + chars[31],
                                twentyFiveChars =
                                    twentyFiveChars[Math.floor(Math.random() * (twentyFiveChars.length - 1))
                                        ],
                                licenseKey = licenseKey.replaceAt(25, twentyFiveChars),
                                licenseKey;
                        }(licName),
                            e(r.classKey).val(r.licenseKey))
                        : (function(e) {
                            return "" == e.trim() ||
                                null !=
                                e.toLowerCase()
                                    .match(
                                        /á|à|ả|ã|ạ|â|ấ|ầ|ậ|ẩ|ẫ|ă|ắ|ằ|ặ|ẳ|é|è|ẻ|ẹ|ê|ế|ề|ệ|ể|ẽ|đ|ụ|ủ|ù|ú|ũ|ư|ứ|ừ|ử|ự|ữ|ó|ò|ỏ|õ|ọ|ô|ố|ồ|ộ|ổ|ơ|ớ|ờ|ợ|ở|ỡ|ỉ|ì|í|ị|ĩ|ý|ỵ|ỳ|ỹ/i);
                        }(licName) &&
                        !function(e) {
                            return "" == e.trim() ||
                                !e.toLowerCase()
                                    .replace(
                                        /0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|\.|\-/gim,
                                        "");
                        }(licName) &&
                        (e(r.licenseName).css("background-color", "yellow"),
                            alert("License Name là Domain không được gõ dấu!")),
                            t(licName) > 32
                                ? alert("License Name là Domain chưa hợp lệ!")
                                : (e(r.licenseName).css("background-color", ""),
                                    r.licenseKey = l(licName),
                                    e(r.classKey).val(r.licenseKey))));
    },
        e.keyGenCKfinder = e.fn.keyGenCKfinder;
}(jQuery);
function copyToClipboard(t) {
    var e = document.createElement("textarea");
    e.style.position = "fixed",
        e.style.top = "0px",
        e.style.left = "0px",
        e.style.width = "2em",
        e.style.height = "2em",
        e.style.padding = "0px",
        e.style.border = "none",
        e.style.outline = "none",
        e.style.boxShadow = "none",
        e.style.background = "transparent",
        e.value = t,
        document.body.appendChild(e),
        e.select();
    document.body.removeChild(e);

}
$(document).ready(function(e) {
    var version = '2x',
        getLic = true;
    $('#LicenseVer').on('change',
        function() {
            version = $(this).val();
        });
    function isDomain(domainName) {
        if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,63}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domainName)) {
            return true;
        } else {
            return false;
        }
    }
    function isText(e) {
        if ("" === e.trim()) return !0;
        const t = e.toLowerCase()
            .replace(/0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|\.|\-/gmi, "");
        return !t;
    }
    function isVietnamese(e) {
        if ("" === e.trim())
            return !0;
        var t = e.toLowerCase().match(/á|à|ả|ã|ạ|â|ấ|ầ|ậ|ẩ|ẫ|ă|ắ|ằ|ặ|ẳ|é|è|ẻ|ẹ|ê|ế|ề|ệ|ể|ẽ|đ|ụ|ủ|ù|ú|ũ|ư|ứ|ừ|ử|ự|ữ|ó|ò|ỏ|õ|ọ|ô|ố|ồ|ộ|ổ|ơ|ớ|ờ|ợ|ở|ỡ|ỉ|ì|í|ị|ĩ|ý|ỵ|ỳ|ỹ/i);
        return null != t;
    }
    $('#generateBtn').on('click', function() {
        const licName = $('#LicenseName').val();
        if (licName === '') {
            alert('Mời bạn nhập License Name!');
            getLic = false;
        } else {
            if (version === '3x') {
                if (isVietnamese(licName) && !isText(licName) && isDomain(licName)) {
                    alert('License Name là Domain không được gõ dấu!');
                    getLic = false;
                } else getLic = true;
            } else getLic = true;
            if (getLic === true) {
                $.keyGenCKfinder({
                    classKey: "#Key",
                    version: version,
                    licenseName: "#LicenseName"
                });
            }
        }
    });
});
