const { PeerServer } = require("peer");
const {
    uniqueNamesGenerator,
    adjectives,
    colors,
    animals,
    NumberDictionary,
} = require("unique-names-generator");

const numbers = NumberDictionary.generate({ min: 1000, max: 9999 });

const generateClientId = () =>
    uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals, numbers],
        separator: "-",
        length: 4,
    });

PeerServer({ port: 9000, proxied: true, generateClientId });
