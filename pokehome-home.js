const regions = {
    kanto: {
        title: "Kanto",
        boxes: [
            {
                title: "Kanto 1",
                pokemon: [
                    "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
                    "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
                    "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
                    "rattata", "raticate", "spearow", "fearow", "ekans", "arbok",
                    "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina"
                ]
            },
            {
                title: "Kanto 2",
                pokemon: [
                    "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable",
                    "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat",
                    "oddish", "gloom", "vileplume", "paras", "parasect", "venonat",
                    "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck",
                    "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag"
                ]
            },
            {
                title: "Kanto 3",
                pokemon: [
                    "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop",
                    "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool",
                    "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash",
                    "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo",
                    "dodrio", "seel", "dewgong", "grimer", "muk", "shellder"
                ]
            },
            {
                title: "Kanto 4",
                pokemon: [
                    "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
                    "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute",
                    "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung",
                    "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela",
                    "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu"
                ]
            },
            {
                title: "Kanto 5",
                pokemon: [
                    "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar",
                    "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto",
                    "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte",
                    "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno",
                    "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo"
                ]
            },
            {
                title: "Kanto 6",
                pokemon: [
                    "mew"
                ]
            },
            {
                title: "Kanto Females",
                pokemon: [
                    "venusaur-f", "butterfree-f", "rattata-f", "raticate-f", "pikachu-f", "raichu-f",
                    "zubat-f", "golbat-f", "gloom-f", "vileplume-f", "kadabra-f", "alakazam-f",
                    "doduo-f", "dodrio-f", "hypno-f", "rhyhorn-f", "rhydon-f", "goldeen-f",
                    "seaking-f", "scyther-f", "magikarp-f", "gyarados-f", "eevee-f"
                ]
            },
            {
                title: "Cap Pikachu",
                pokemon: [
                    "pikachu-original-cap", "pikachu-hoenn-cap", "pikachu-sinnoh-cap", "pikachu-unova-cap", "pikachu-kalos-cap", "pikachu-alola-cap",
                    "pikachu-partner-cap", "pikachu-world-cap"
                ]
            }
        ]
    },

    johto: {
        title: "Johto",
        boxes: [
            {
                title: "Johto 1",
                pokemon: [
                    "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion",
                    "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot",
                    "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat",
                    "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi",
                    "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos"
                ]
            },
            {
                title: "Johto 2",
                pokemon: [
                    "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip",
                    "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma",
                    "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking",
                    "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress",
                    "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish"
                ]
            },
            {
                title: "Johto 3",
                pokemon: [
                    "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring",
                    "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid",
                    "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom",
                    "kingdra", "phanpy", "donphan", "porygon2", "stantler", "smeargle",
                    "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank"
                ]
            },
            {
                title: "Johto 4",
                pokemon: [
                    "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar",
                    "tyranitar", "lugia", "ho-oh", "celebi"
                ]
            },
            {
                title: "Johto Females",
                pokemon: [
                    "meganium-f", "ledyba-f", "ledian-f", "xatu-f", "sudowoodo-f", "politoed-f",
                    "aipom-f", "wooper-f", "quagsire-f", "murkrow-f", "wobbuffet-f", "girafarig-f",
                    "gligar-f", "steelix-f", "scizor-f", "heracross-f", "sneasel-f", "ursaring-f",
                    "piloswine-f", "octillery-f", "houndoom-f", "donphan-f"
                ]
            },
            {
                title: "Unown Alternate",
                pokemon: [
                    "unown-a", "unown-b", "unown-c", "unown-d", "unown-e", "unown-f",
                    "unown-g", "unown-h", "unown-i", "unown-j", "unown-k", "unown-l",
                    "unown-m", "unown-n", "unown-o", "unown-p", "unown-q", "unown-r",
                    "unown-s", "unown-t", "unown-u", "unown-v", "unown-w", "unown-x",
                    "unown-y", "unown-z", "unown-em", "unown-qm"
                ]
            }
        ]
    },

    hoenn: {
        title: "Hoenn",
        boxes: [
            {
                title: "Hoenn 1",
                pokemon: [
                    "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken",
                    "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon",
                    "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox",
                    "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry",
                    "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia"
                ]
            },
            {
                title: "Hoenn 2",
                pokemon: [
                    "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth",
                    "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur",
                    "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass",
                    "skitty", "delcatty", "sableye", "mawile", "aron", "lairon",
                    "aggron", "meditite", "medicham", "electrike", "manectric", "plusle"
                ]
            },
            {
                title: "Hoenn 3",
                pokemon: [
                    "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot",
                    "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt",
                    "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava",
                    "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose",
                    "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish"
                ]
            },
            {
                title: "Hoenn 4",
                pokemon: [
                    "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith",
                    "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet",
                    "banette", "duskull", "dusclops", "tropius", "chimecho", "absol",
                    "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein",
                    "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon"
                ]
            },
            {
                title: "Hoenn 5",
                pokemon: [
                    "shelgon", "salamence", "beldum", "metang", "metagross", "regirock",
                    "regice", "registeel", "latias", "latios", "kyogre", "groudon",
                    "rayquaza", "jirachi", "deoxys"
                ]
            },
            {
                title: "Hoenn Females",
                pokemon: [
                    "torchic-f", "combusken-f", "blaziken-f", "beautifly-f", "dustox-f", "ludicolo-f",
                    "nuzleaf-f", "shiftry-f", "meditite-f", "medicham-f", "roselia-f", "gulpin-f",
                    "swalot-f", "numel-f", "camerupt-f", "cacturne-f", "milotic-f", "relicanth-f"
                ]
            },
            {
                title: "Hoenn Alternate",
                pokemon: [
                    "deoxys-normal", "deoxys-attack", "deoxys-defense", "deoxys-speed"
                ]
            }
        ]
    },
    sinnoh: {
        title: "Sinnoh",
        boxes: [
            {
                title: "Sinnoh 1",
                pokemon: [
                    "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape",
                    "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor",
                    "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio",
                    "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon",
                    "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen"
                ]
            },
            {
                title: "Sinnoh 2",
                pokemon: [
                    "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos",
                    "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny",
                    "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky",
                    "skuntank", "bronzor", "bronzong", "bonsly", "mime-jr", "happiny",
                    "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax"
                ]
            },
            {
                title: "Sinnoh 3",
                pokemon: [
                    "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion",
                    "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke",
                    "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior",
                    "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon",
                    "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass"
                ]
            },
            {
                title: "Sinnoh 4",
                pokemon: [
                    "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf",
                    "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia",
                    "phione", "manaphy", "darkrai", "shaymin", "arceus"
                ]
            },
            {
                title: "Sinnoh Female 1",
                pokemon: [
                    "starly-f", "staravia-f", "staraptor-f", "bidoof-f", "bibarel-f", "kricketot-f",
                    "kricketune-f", "shinx-f", "luxio-f", "luxray-f", "roserade-f", "combee-f",
                    "pachirisu-f", "buizel-f", "floatzel-f", "ambipom-f", "gible-f", "gabite-f",
                    "garchomp-f", "hippopotas-f", "hippowdon-f", "croagunk-f", "toxicroak-f", "finneon-f",
                    "lumineon-f", "snover-f", "abomasnow-f", "weavile-f", "rhyperior-f", "tangrowth-f"
                ]
            },
            {
                title: "Sinnoh Female 2",
                pokemon: [
                    "mamoswine-f"
                ]
            },
            {
                title: "Sinnoh Alternate",
                pokemon: [
                    "burmy-sandy", "burmy-trash", "wormadam-sandy", "wormadam-trash", "shellos-east", "gastrodon-east",
                    "rotom-heat", "rotom-wash", "rotom-frost", "rotom-fan", "rotom-mow", "shaymin-sky"
                ]
            }
        ]
    },
    unova: {
        title: "Unova",
        boxes: [
            {
                title: "Unova 1",
                pokemon: [
                    "victini", "snivy", "servine", "serperior", "tepig", "pignite",
                    "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog",
                    "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage",
                    "simisage", "pansear", "simisear", "panpour", "simipour", "munna",
                    "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika"
                ]
            },
            {
                title: "Unova 2",
                pokemon: [
                    "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur",
                    "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole",
                    "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon",
                    "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott",
                    "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile"
                ]
            },
            {
                title: "Unova 3",
                pokemon: [
                    "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy",
                    "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta",
                    "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark",
                    "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis",
                    "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish"
                ]
            },
            {
                title: "Unova 4",
                pokemon: [
                    "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier",
                    "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik",
                    "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang",
                    "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick",
                    "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo"
                ]
            },
            {
                title: "Unova 5",
                pokemon: [
                    "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo",
                    "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp",
                    "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor",
                    "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona",
                    "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram"
                ]
            },
            {
                title: "Unova 6",
                pokemon: [
                    "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect"
                ]
            },
            {
                title: "Unova Alternate",
                pokemon: [
                    "unfezant-f", "deerling-summer", "deerling-autumn", "deerling-winter", "sawsbuck-summer", "sawsbuck-autumn",
                    "sawsbuck-winter", "frillish-f", "jellicent-f", "basculin-blue-striped", "tornadus-therian", "thundurus-therian",
                    "landorus-therian", "keldeo-resolute"
                ]
            }
        ]
    }
};

function createPokemonDiv(name) {
    const pokemon = document.createElement("div");
    pokemon.className = "pokemon";
    pokemon.dataset.pokemon = name;

    const img = document.createElement("img");
    img.src = `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
    img.alt = name;

    pokemon.appendChild(img);
    return pokemon;
}

function createBox(regionTitle, pokemonList) {
    const box = document.createElement("div");
    box.className = "box";

    const heading = document.createElement("h3");
    heading.className = "boxTitles";
    heading.textContent = `${regionTitle}`;
    box.appendChild(heading);

    pokemonList.forEach(pokemon => {
        box.appendChild(createPokemonDiv(pokemon));
    });

    return box;
}

function createRegion(regionKey, regionData) {
    const section = document.createElement("section");
    section.className = "region";
    section.dataset.region = regionKey;

    const title = document.createElement("h2");
    title.textContent = regionData.title;
    section.appendChild(title);

    regionData.boxes.forEach((boxData) => {
        section.appendChild(
            createBox(
                boxData.title,
                boxData.pokemon
            )
        )
        ;
    });
    return section;
}

function renderRegions(regionKeys = Object.keys(regions)) {
    const main = document.querySelector(".main");

    regionKeys.forEach(regionKey => {
        const regionData = regions[regionKey];
        if (!regionData) return;

        main.appendChild(createRegion(regionKey, regionData));
    });
}

renderRegions(["kanto"]);
renderRegions(["johto"]);
renderRegions(["hoenn"]);
renderRegions(["sinnoh"]);
renderRegions(["unova"]);
// renderRegions(["kalos"]);
// renderRegions(["alola"]);
// renderRegions(["galar"]);
// renderRegions(["paldea"]);
