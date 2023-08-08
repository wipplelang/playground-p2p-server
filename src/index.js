const { PeerServer } = require("peer");
const { uniqueNamesGenerator, adjectives, animals } = require("unique-names-generator");

const generateClientId = () =>
    uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        separator: "-",
        length: 2,
    });

PeerServer({ port: 9000, proxied: true, generateClientId });
