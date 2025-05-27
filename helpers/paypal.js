const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "Ae9BnANhbzz9jUpo4IZ6fDgjI5Qcfjeq8ICr1KctU4ETyCJE8kDb2hClPAa-N7tOl9zm0dPlPJ5XhtQ9",
  client_secret:
    "EMUidDYC-LHtWqaREEKnzSMPEWf9_hdV5r5HAnCh-qdl4RD-kLlT1icBMneYAedyvgqxKNFb8XhcKuss",
});

module.exports = paypal;
