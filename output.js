//Tue Aug 20 2024 00:24:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    getEnvsByName: _0x19d178,
    DisableCk: _0xf45aee,
    EnableCk: _0xec6220,
    updateEnv: _0x542edb,
    updateEnv11: _0x5d4b04,
    getEnvByUserId: _0xe0116b
  } = require("./ql"),
  {
    wait: _0x352469,
    validateCarmeWithType: _0x4f8089,
    invalidCookieNotify: _0x1ca3a1,
    runOne: _0x5aa3b4,
    getCookieMap: _0x10fe8f,
    randomString: _0x33026e,
    tryCatchPromise: _0x5d3cfd
  } = require("./common.js"),
  _0x29e9a0 = require("moment"),
  _0x3c3cea = process.env.HOST,
  _0x1b7e0e = require("request"),
  _0x2fab49 = process.env.ELE_CARME,
  _0x3bcc13 = 21;
function _0x2e1dae(_0x3045d2, _0x34198f) {
  return Math.floor(Math.random() * (_0x34198f - _0x3045d2 + 1) + _0x3045d2);
}
function _0xf26980(_0x3b5818) {
  return Object.values(_0x3b5818).length === 0;
}
async function _0x1a98aa(_0x109163) {
  let _0x1cc829 = "{}",
    _0x302d9d = await _0xaf8bd7(_0x109163, _0x1cc829, "mtop.alsc.user.detail.query");
  if (_0x302d9d !== null) {
    if (!_0xf26980(_0x302d9d.data)) {
      return _0x302d9d.data;
    } else {
      if (_0x302d9d.ret) {
        return _0x302d9d.ret;
      } else {
        console.log(_0x302d9d);
      }
    }
  }
  return null;
}
function _0x3b8841(_0x102a0f, _0x90e84, _0x57f1ff, _0x3a9fb5, _0x53a646, _0xc925bc, _0x32cec1, _0x25ad3a, _0x4f13f0 = 5) {
  if (_0x4f13f0 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  let _0x1597dd = {
    carmi: _0x2fab49,
    userId: _0x25ad3a,
    gameType: _0x3bcc13,
    needSignData: {
      data: _0x102a0f,
      api: _0x90e84,
      pageId: decodeURIComponent(_0x57f1ff),
      uid: _0x53a646,
      deviceId: _0xc925bc,
      utdid: _0x32cec1
    }
  };
  _0x3a9fb5 && (_0x1597dd.needSignData.sid = _0x3a9fb5);
  _0x1597dd.needSignData = JSON.stringify(_0x1597dd.needSignData);
  const _0x352927 = {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    url: _0x3c3cea + "/get/xsign",
    body: JSON.stringify(_0x1597dd)
  };
  return _0x5d3cfd(_0x15224a => {
    _0x1b7e0e(_0x352927, async (_0x37ae28, _0x27a052, _0x2663e5) => {
      if (!_0x37ae28 && _0x27a052.statusCode === 200) {
        let _0x1e6dc3 = JSON.parse(_0x2663e5);
        _0x15224a(_0x1e6dc3);
      } else {
        _0x37ae28 && (_0x37ae28.message.indexOf("socket hang up") !== -1 || _0x37ae28.message.indexOf("read ECONNRESET") !== -1) ? (console.log("网络链接失败，将在 2 秒后重试"), await _0x352469(2), _0x15224a(await _0x3b8841(_0x102a0f, _0x90e84, _0x57f1ff, _0x3a9fb5, _0x53a646, _0xc925bc, _0x32cec1, _0x25ad3a, _0x4f13f0 - 1))) : (console.log("网络异常，请检查网络状况"), _0x15224a());
      }
    });
  });
}
async function _0xaf8bd7(_0x3d5f36, _0x33beba, _0x375259) {
  let _0x27664f = _0x10fe8f(_0x3d5f36),
    _0x2e64ec = _0x27664f.get("deviceId") || _0x33026e(44),
    _0x485988 = _0x27664f.get("utdid") || _0x33026e(24),
    _0x5619d6 = _0x27664f.get("USERID"),
    _0x3ab5f8 = _0x27664f.get("umt"),
    _0x5a52f4 = _0x33beba,
    _0x12fe9b = _0x375259,
    _0x6d3b6d = "https%3A%2F%2Fr.ele.me%2Fmagic-cube%2F%3FnavType%3D3%26spm%3Da13.b_activity_kb_m71293.0.0%23%2Fgame",
    _0x154a9e = _0x27664f.get("cookie2"),
    _0x3a00a5 = _0x27664f.get("unb"),
    _0x39840d = await _0x3b8841(_0x5a52f4, _0x12fe9b, _0x6d3b6d, _0x154a9e, _0x3a00a5, _0x2e64ec, _0x485988, _0x5619d6);
  if (!_0x39840d) {
    console.log("获取签名异常");
    return null;
  }
  if (_0x39840d.code !== 20000) {
    console.log(_0x39840d.message);
    _0x39840d.message.indexOf("没有车位了") !== -1 && process.exit(0);
    return null;
  } else {
    _0x39840d = _0x39840d.data;
  }
  _0x39840d = JSON.parse(_0x39840d.msg);
  let _0x4fa38a = encodeURIComponent(_0x39840d["x-sgext"]),
    _0x5546ac = encodeURIComponent(_0x39840d["x-sign"]);
  _0x3ab5f8 = encodeURIComponent(_0x39840d["x-umt"]);
  let _0x17f7ca = encodeURIComponent(_0x39840d["x-mini-wua"]),
    _0x58af6e = _0x39840d["x-t"],
    _0x3c2032 = encodeURIComponent(_0x39840d.wua),
    _0x52e6e5 = {
      "x-sgext": _0x4fa38a,
      "x-sign": _0x5546ac,
      "x-devid": _0x2e64ec,
      "x-pv": "6.3",
      "x-features": "1051",
      "x-mini-wua": _0x17f7ca,
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "x-t": _0x58af6e,
      "x-bx-version": "6.5.90",
      "f-refer": "mtop",
      "x-extdata": "openappkey%3DDEFAULT_AUTH",
      "x-ttid": "1601274955355@eleme_android_10.14.3",
      "x-app-ver": "10.14.3",
      "x-umt": _0x3ab5f8,
      "x-utdid": encodeURIComponent(_0x485988),
      "x-appkey": "24895413",
      "x-page-url": _0x6d3b6d,
      Host: "guide-acs.m.taobao.com",
      "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BGoogle%3BPixel+4+XL%29",
      "x-sid": _0x154a9e,
      "x-uid": _0x3a00a5,
      Cookie: _0x3d5f36
    },
    _0x510878 = "https://guide-acs.m.taobao.com/gw/" + _0x12fe9b + "/1.0/?data=" + encodeURIComponent(_0x5a52f4) + "&type=originaljson&wua=" + _0x3c2032;
  const _0x45d988 = {
    url: _0x510878,
    headers: _0x52e6e5,
    body: _0x5a52f4
  };
  return _0x5d3cfd(_0x37e0bb => {
    _0x1b7e0e(_0x45d988, async (_0x2cf07e, _0x3d10d1, _0x223593) => {
      if (!_0x2cf07e && _0x3d10d1.statusCode === 200) {
        const _0x597048 = JSON.parse(_0x223593);
        _0x37e0bb(_0x597048);
      } else {
        console.log(_0x2cf07e || _0x223593);
        _0x37e0bb();
      }
    });
  });
}
function _0x182d77(_0x12da6f) {
  let _0x1ab09c = "";
  for (let [_0x4a184b, _0x367ffa] of _0x12da6f) {
    _0x1ab09c += encodeURIComponent(_0x4a184b) + "=" + encodeURIComponent(_0x367ffa) + ";";
  }
  return _0x1ab09c;
}
async function _0x1a524a(_0x47d4b9, _0x5a8077, _0xc3e36b) {
  let _0x21ae15 = await _0x5aa3b4(_0x5a8077, _0xc3e36b);
  if (_0x21ae15 && _0x21ae15.data) {
    let _0x1e44b7 = _0x21ae15.data;
    if (_0x1e44b7.code === 3000) {
      let _0x295f8d = JSON.parse(_0x1e44b7.returnValue.data);
      const _0x4785e4 = _0x295f8d.expires,
        _0x289ce7 = _0x29e9a0(_0x4785e4 * 1000).format("YYYY-MM-DD HH:mm:ss");
      let _0x58024c = _0x10fe8f(_0x5a8077),
        _0x4f119e = JSON.parse(_0x1e44b7.returnValue.extMap.eleExt);
      for (let _0x54fd7f = 0; _0x54fd7f < _0x4f119e.length; _0x54fd7f++) {
        let _0x53ce8c = _0x4f119e[_0x54fd7f];
        if (_0x53ce8c.name === "SID") {
          _0x58024c.SID = _0x53ce8c.value;
          break;
        }
      }
      let _0x2408b6 = await _0x5aa3b4(_0x5a8077, _0x58024c.get("SID"));
      if (!_0x2408b6) {
        return;
      }
      _0x58024c.cookie2 = _0x1e44b7.returnValue.sid;
      let _0x447999 = _0x182d77(_0x58024c);
      _0x47d4b9.id ? await _0x5d4b04(_0x447999, _0x47d4b9.id, _0x47d4b9.remarks) : await _0x542edb(_0x447999, _0x47d4b9._id, _0x47d4b9.remarks);
      let _0x5b3361 = _0x58024c.get("USERID"),
        _0x39e11c = await _0xe0116b(_0x5b3361);
      _0x39e11c && (console.log("检测到 elmqqck，将进行同步刷新"), _0x39e11c.id ? await _0x5d4b04(_0x447999, _0x39e11c.id, _0x39e11c.remarks, "elmqqck") : await _0x542edb(_0x447999, _0x39e11c._id, _0x39e11c.remarks, "elmqqck"));
      let _0x43506f = "刷新成功，ck 有效期为：" + _0x289ce7;
      console.log(_0x43506f);
      return _0x43506f;
    } else {
      _0x1e44b7.message ? console.log(_0x1e44b7.message) : console.log(_0x21ae15.ret[0]);
      return null;
    }
  }
}
(async function _0x1e431d() {
  await _0x4f8089(_0x2fab49, 1);
  const _0x4d18be = await _0x19d178("elmck");
  for (let _0x2527f8 = 0; _0x2527f8 < _0x4d18be.length; _0x2527f8++) {
    let _0x597828 = _0x4d18be[_0x2527f8].value;
    if (!_0x597828) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        var _0x32edac = 0;
        _0x4d18be[_0x2527f8]._id && (_0x32edac = _0x4d18be[_0x2527f8]._id);
        _0x4d18be[_0x2527f8].id && (_0x32edac = _0x4d18be[_0x2527f8].id);
        _0x597828 = _0x597828.replace(/\s/g, "");
        let _0x2e14ff = await _0x1a98aa(_0x597828);
        if (_0x2e14ff && (_0x2e14ff[0] || !_0x2e14ff.userName)) {
          let _0xfbb098 = await _0x1a524a(_0x4d18be[_0x2527f8], _0x597828);
          if (_0xfbb098 && _0xfbb098.indexOf("刷新成功") !== -1) {
            await _0xec6220(_0x32edac);
            console.log("第", _0x2527f8 + 1, "账号正常😁\n");
          } else {
            const _0x25bf9c = await _0xf45aee(_0x32edac);
            _0x25bf9c.code === 200 ? console.log("第", _0x2527f8 + 1, "账号失效！已🈲用") : console.log("第", _0x2527f8 + 1, "账号失效！请重新登录！！！😭");
            await _0x1ca3a1(_0x597828, _0x4d18be[_0x2527f8].remarks);
          }
        } else {
          await _0x1a524a(_0x4d18be[_0x2527f8], _0x597828, _0x10fe8f(_0x597828).get("SID"));
          await _0xec6220(_0x32edac);
          console.log("第", _0x2527f8 + 1, "账号正常🎉🎉\n");
        }
      } catch (_0x213872) {
        console.log(_0x213872);
      }
    }
    await _0x352469(_0x2e1dae(2, 3));
  }
  process.exit(0);
})();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}