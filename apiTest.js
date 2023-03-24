const fetch = require("node-fetch");
const { v4 } = require("uuid");
// const fs = require("fs");
// const { getKeyPairs } = require("./keyPair");

const url = "https://preprod.registry.ondc.org/ondc/subscribe";
// const urlTest = "https://pilot-gateway-1.beckn.nsdl.co.in/ondc/subscribe";
const urlTest = "https://preprod.registry.ondc.org/ondc/subscribe";

const body = {
  context: { operation: { ops_no: 1 } },
  message: {
    request_id: "d4416f1a-209c-4aa8-bb35-71fb6ae8a76923",
    timestamp: "2023-03-23T12:44:39.649Z",
    entity: {
      gst: {
        legal_entity_name: "Ghoshak",
        business_address: "nungambakkam chennai 600034",
        city_code: ["std:044"],
        gst_no: "07AAACN2082N4Z7",
      },
      pan: {
        name_as_per_pan: "Ghoshak",
        pan_no: "ASDFP7657Q",
        date_of_incorporation: "23/06/2017",
      },
      name_of_authorised_signatory: "Yashvendra Kumar",
      address_of_authorised_signatory:
        "405, Pinnacle House, Kandiwali, Mumbai 400001",
      email_id: "yashendra@ghoshak.com",
      mobile_no: 8887694282,
      country: "IND",
      subscriber_id: "ghoshak-c55ee.firebaseapp.com",
      unique_key_id: "d4416f1a-209c-4aa8-bb35-71fb6ae8a76923",
      callback_url: "/ondc",
      key_pair: {
        signing_public_key: "qW9EzbJ2zrIcFuTj6WeMscNkf2rqk7ZU9JdyNgtt0M4=",
        encryption_public_key: "RPGnPamwhNLiSeSQEs/YpGTnKvvgPgdnGjDuNe2A2sY=",
        valid_from: "2023-03-23T12:44:39.649Z",
        valid_until: "2024-03-21T07:35:32.024Z",
      },
    },
    network_participant: [
      {
        subscriber_url: "/bppl",
        domain: "nic2004:52110",
        type: "sellerApp",
        msn: false,
        city_code: ["std:044"],
      },
    ],
  },
};
// const request2 = {
//   domain: "local-retail",
//   use_case: "on_search/sending_a_list_of_items",
//   ttl: 1000,
//   "message.intent.item.descriptor.name": "chicken",
//   bpp_uri: "https://ghoshak-c55ee.firebaseapp.com/",
// };
const subscribe = async () => {
  body.message.request_id = v4();
  body.message.entity.unique_key_id = body.message.request_id;
  body.message.timestamp = new Date().toISOString();

  console.log("body--", body);
  const res = await fetch(urlTest, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  // const res2 = await fetch("https://preprod.registry.ondc.org/ondc/search", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(request2),
  // });
  const data = await res.text();
  // const data2 = await res2.text();
  console.log("-----------------------");
  console.log(res);
  console.log(res.statusText, data);
};
module.exports = { subscribe };
