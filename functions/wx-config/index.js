const axios = require("axios").default;
const tcb = require("@cloudbase/node-sdk");
const crypto = require("crypto");

const app = tcb.init({});
const db = app.database();

exports.main = async (event) => {
  const { wxAppId, wxAppSecret } = process.env;
  const wxCollection = db.collection("wx");
  const now = new Date();

  let { value: jsApiTicket, expiry: jsApiTicketExpiry } = (
    await wxCollection.doc("jsapi_ticket").get()
  ).data[0];

  if (!jsApiTicket || !jsApiTicketExpiry || jsApiTicketExpiry < now) {
    let { value: accessToken, expiry: accessTokenExpiry } = (
      await wxCollection.doc("access_token").get()
    ).data[0];

    if (!accessToken || !accessTokenExpiry || accessTokenExpiry < now) {
      const { access_token: newAccessToken, expires_in: expiresIn } = (
        await axios.get(
          `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wxAppId}&secret=${wxAppSecret}`
        )
      ).data;
      await wxCollection.doc("access_token").update({
        value: newAccessToken,
        expiry: new Date(now.getTime() + expiresIn * 1000),
      });
      accessToken = newAccessToken;
    }

    const { ticket: newTicket, expires_in: expiresIn } = (
      await axios.get(
        `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi`
      )
    ).data;
    await wxCollection.doc("jsapi_ticket").update({
      value: newTicket,
      expiry: new Date(now.getTime() + expiresIn * 1000),
    });
    jsApiTicket = newTicket;
  }
  const { url } = JSON.parse(event.body);
  const timestamp = Math.floor(now.getTime() / 1000);
  const nonce = (Math.random() + 1).toString(36).substring(2);
  const shasum = crypto.createHash("sha1");
  shasum.update(
    `jsapi_ticket=${jsApiTicket}&noncestr=${nonce}&timestamp=${timestamp}&url=${url}`
  );
  return {
    appId: wxAppId,
    timestamp,
    nonceStr: nonce,
    signature: shasum.digest("hex"),
  };
};
