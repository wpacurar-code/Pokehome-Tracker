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
    },
    kalos: {
        title: "Kalos",
        boxes: [
            {
                title: "Kalos 1",
                pokemon: [
                    "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox",
                    "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling",
                    "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo",
                    "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat",
                    "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge"
                ]
            },
            {
                title: "Kalos 2",
                pokemon: [
                    "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff",
                    "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge",
                    "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum",
                    "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink",
                    "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant"
                ]
            },
            {
                title: "Kalos 3",
                pokemon: [
                    "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern",
                    "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "volcanion"
                ]
            },
            {
                title: "Kalos Alternate",
                pokemon: [
                    "greninja-ash", "pyroar-f", "meowstic-female", "pumpkaboo-small", "pumpkaboo-large", "pumpkaboo-super",
                    "gourgeist-small", "gourgeist-large", "gourgeist-super", "furfrou-heart", "furfrou-star", "furfrou-diamond",
                    "furfrou-debutante", "furfrou-matron", "furfrou-dandy", "furfrou-la-reine", "furfrou-kabuki", "furfrou-pharaoh",
                    "flabebe-yellow", "flabebe-orange", "flabebe-blue", "flabebe-white", "floette-yellow", "floette-orange",
                    "floette-blue", "floette-white", "florges-yellow", "florges-orange", "florges-blue", "florges-white"
                ]
            },
            {
                title: "Kalos Alternate 2",
                pokemon: [
                    "zygarde-50", "zygarde-10", "zygarde-10", "hoopa-unbound"
                ]
            },
            {
                title: "Kalos Vivillon Patterns",
                pokemon: [
                    "vivillon-icy-snow", "vivillon-polar", "vivillon-tundra", "vivillon-continental", "vivillon-garden", "vivillon-elegant",
                    "vivillon-meadow", "vivillon-modern", "vivillon-marine", "vivillon-archipelago", "vivillon-high-plains", "vivillon-sandstorm",
                    "vivillon-river", "vivillon-monsoon", "vivillon-savanna", "vivillon-sun", "vivillon-ocean", "vivillon-jungle",
                    "vivillon-fancy", "vivillon-poke-ball"
                ]
            }
        ]
    },
    alola: {
        title: "Alola",
        boxes: [
            {
                title: "Alola 1",
                pokemon: [
                    "rowlet", "dartrix", "decidueye", "litten", "torracat", "incineroar",
                    "popplio", "brionne", "primarina", "pikipek", "trumbeak", "toucannon",
                    "yungoos", "gumshoos", "grubbin", "charjabug", "vikavolt", "crabrawler",
                    "crabominable", "oricorio", "cutiefly", "ribombee", "rockruff", "lycanroc",
                    "wishiwashi", "mareanie", "toxapex", "mudbray", "mudsdale", "dewpider"
                ]
            },
            {
                title: "Alola 2",
                pokemon: [
                    "araquanid", "fomantis", "lurantis", "morelull", "shiinotic", "salandit",
                    "salazzle", "stufful", "bewear", "bounsweet", "steenee", "tsareena",
                    "comfey", "oranguru", "passimian", "wimpod", "golisopod", "sandygast",
                    "palossand", "pyukumuku", "type-null", "silvally", "minior", "komala",
                    "turtonator", "togedemaru", "mimikyu", "bruxish", "drampa", "dhelmise"
                ]
            },
            {
                title: "Alola 3",
                pokemon: [
                    "jangmo-o", "hakamo-o", "kommo-o", "tapu-koko", "tapu-lele", "tapu-bulu",
                    "tapu-fini", "cosmog", "cosmoem", "solgaleo", "lunala", "nihilego",
                    "buzzwole", "pheromosa", "xurkitree", "celesteela", "kartana", "guzzlord",
                    "necrozma", "magearna", "marshadow", "poipole", "naganadel", "stakataka",
                    "blacephalon", "zeraora"
                ]
            },
            {
                title: "Alola Alternate",
                pokemon: [
                    "oricorio-pom-pom", "oricorio-pau", "oricorio-sensu", "rockruff", "lycanroc-midnight", "lycanroc-dusk",
                    "minior-orange-core", "minior-yellow-core", "minior-green-core", "minior-blue-core", "minior-indigo-core", "minior-violet-core",
                    "magearna-original"
                ]
            },
            {
                title: "Alola Forms",
                pokemon: [
                    "rattata-alolan", "raticate-alolan", "raichu-alolan", "sandshrew-alolan", "sandslash-alolan", "vulpix-alolan",
                    "ninetales-alolan", "diglett-alolan", "dugtrio-alolan", "meowth-alolan", "persian-alolan", "geodude-alolan",
                    "graveler-alolan", "golem-alolan", "grimer-alolan", "muk-alolan", "exeggutor-alolan", "marowak-alolan",
                ]
            },
            {
                title: "Unknown Region",
                pokemon: [
                    "meltan", "melmetal"
                ]
            }
        ]
    },
    galar: {
        title: "Galar",
        boxes: [
            {
                title: "Galar 1",
                pokemon: [
                    "grookey", "thwackey", "rillaboom", "scorbunny", "raboot", "cinderace",
                    "sobble", "drizzile", "inteleon", "skwovet", "greedent", "rookidee",
                    "corvisquire", "corviknight", "blipbug", "dottler", "orbeetle", "nickit",
                    "thievul", "gossifleur", "eldegoss", "wooloo", "dubwool", "chewtle",
                    "drednaw", "yamper", "boltund", "rolycoly", "carkol", "coalossal"
                ]
            },
            {
                title: "Galar 2",
                pokemon: [
                    "applin", "flapple", "appletun", "silicobra", "sandaconda", "cramorant",
                    "arrokuda", "barraskewda", "toxel", "toxtricity", "sizzlipede", "centiskorch",
                    "clobbopus", "grapploct", "sinistea", "polteageist", "hatenna", "hattrem",
                    "hatterene", "impidimp", "morgrem", "grimmsnarl", "obstagoon", "perrserker",
                    "cursola", "sirfetchd", "mr-rime", "runerigus", "milcery", "alcremie"
                ]
            },
            {
                title: "Galar 3",
                pokemon: [
                    "falinks", "pincurchin", "snom", "frosmoth", "stonjourner", "eiscue",
                    "indeedee", "morpeko", "cufant", "copperajah", "dracozolt", "arctozolt",
                    "dracovish", "arctovish", "duraludon", "dreepy", "drakloak", "dragapult",
                    "zacian", "zamazenta", "eternatus", "kubfu", "urshifu", "zarude",
                    "regieleki", "regidrago", "glastrier", "spectrier", "calyrex"
                ]
            },
            {
                title: "Galar Alternate",
                pokemon: [
                    "indeedee-female", "toxtricity-low-key", "sinistea", "polteageist", "urshifu-rapid-strike", "zarude-dada"
                ]
            },
            {
                title: "Galar Forms",
                pokemon: [
                    "meowth-galarian", "ponyta-galarian", "rapidash-galarian", "slowpoke-galarian", "slowbro-galarian", "farfetchd-galarian",
                    "weezing-galarian", "mr-mime-galarian", "articuno-galarian", "zapdos-galarian", "moltres-galarian", "slowking-galarian",
                    "corsola-galarian", "zigzagoon-galarian", "linoone-galarian", "darumaka-galarian", "darmanitan-galarian-standard", "yamask-galarian",
                    "stunfisk-galarian"
                ]
            },
            {
                title: "Alcremie 1",
                pokemon: [
                    "alcremie-vanilla-cream-strawberry", "alcremie-vanilla-cream-berry", "alcremie-vanilla-cream-love", "alcremie-vanilla-cream-star", "alcremie-vanilla-cream-clover", "alcremie-vanilla-cream-flower",
                    "alcremie-vanilla-cream-ribbon", "alcremie-ruby-cream-strawberry", "alcremie-ruby-cream-berry", "alcremie-ruby-cream-love", "alcremie-ruby-cream-star", "alcremie-ruby-cream-clover",
                    "alcremie-ruby-cream-flower", "alcremie-ruby-cream-ribbon", "alcremie-matcha-cream-strawberry", "alcremie-matcha-cream-berry", "alcremie-matcha-cream-love", "alcremie-matcha-cream-star",
                    "alcremie-matcha-cream-clover", "alcremie-matcha-cream-flower", "alcremie-matcha-cream-ribbon", "alcremie-mint-cream-strawberry", "alcremie-mint-cream-berry", "alcremie-mint-cream-love",
                    "alcremie-mint-cream-star", "alcremie-mint-cream-clover", "alcremie-mint-cream-flower", "alcremie-mint-cream-ribbon"
                ]
            },
            {
                title: "Alcremie 2",
                pokemon: [
                    "alcremie-lemon-cream-strawberry", "alcremie-lemon-cream-berry", "alcremie-lemon-cream-love", "alcremie-lemon-cream-star", "alcremie-lemon-cream-clover", "alcremie-lemon-cream-flower",
                    "alcremie-lemon-cream-ribbon", "alcremie-salted-cream-strawberry", "alcremie-salted-cream-berry", "alcremie-salted-cream-love", "alcremie-salted-cream-star", "alcremie-salted-cream-clover",
                    "alcremie-salted-cream-flower", "alcremie-salted-cream-ribbon", "alcremie-ruby-swirl-strawberry", "alcremie-ruby-swirl-berry", "alcremie-ruby-swirl-love", "alcremie-ruby-swirl-star",
                    "alcremie-ruby-swirl-clover", "alcremie-ruby-swirl-flower", "alcremie-ruby-swirl-ribbon", "alcremie-caramel-swirl-strawberry", "alcremie-caramel-swirl-berry", "alcremie-caramel-swirl-love",
                    "alcremie-caramel-swirl-star", "alcremie-caramel-swirl-clover", "alcremie-caramel-swirl-flower", "alcremie-caramel-swirl-ribbon"
                ]
            },
            {
                title: "Alcremie 3",
                pokemon: [
                    "alcremie-rainbow-swirl-strawberry", "alcremie-rainbow-swirl-berry", "alcremie-rainbow-swirl-love", "alcremie-rainbow-swirl-star", "alcremie-rainbow-swirl-clover", "alcremie-rainbow-swirl-flower",
                    "alcremie-rainbow-swirl-ribbon"
                ]
            },
            {
                title: "Hisui",
                pokemon: [
                    "wyrdeer", "kleavor", "ursaluna", "basculegion", "basculegion-female", "sneasler",
                    "overqwil", "enamorus", "enamorus-therian"
                ]
            },
            {
                title: "Hisuian Forms",
                pokemon: [
                    "growlithe-hisuian", "arcanine-hisuian", "voltorb-hisuian", "electrode-hisuian", "typhlosion-hisuian", "qwilfish-hisuian",
                    "sneasel-hisuian", "sneasel-hisuian-f", "samurott-hisuian", "lilligant-hisuian", "basculin-white-striped", "zorua-hisuian",
                    "zoroark-hisuian", "braviary-hisuian", "sliggoo-hisuian", "goodra-hisuian", "avalugg-hisuian", "decidueye-hisuian"
                ]
            }
        ]
    },
        paldea: {
        title: "Paldea",
        boxes: [
            {
                title: "Paldea 1",
                pokemon: [
                    "sprigatito", "floragato", "meowscarada", "fuecoco", "crocalor", "skeledirge",
                    "quaxly", "quaxwell", "quaquaval", "lechonk", "oinkologne", "tarountula",
                    "spidops", "nymble", "lokix", "pawmi", "pawmo", "pawmot",
                    "tandemaus", "maushold", "fidough", "dachsbun", "smoliv", "dolliv",
                    "arboliva", "squawkabilly", "nacli", "naclstack", "garganacl", "charcadet"
                ]
            },
            {
                title: "Paldea 2",
                pokemon: [
                    "armarouge", "ceruledge", "tadbulb", "bellibolt", "wattrel", "kilowattrel",
                    "maschiff", "mabosstiff", "shroodle", "grafaiai", "bramblin", "brambleghast",
                    "toedscool", "toedscruel", "klawf", "capsakid", "scovillain", "rellor",
                    "rabsca", "flittle", "espathra", "tinkatink", "tinkatuff", "tinkaton",
                    "wiglett", "wugtrio", "bombirdier", "finizen", "palafin", "varoom"
                ]
            },
            {
                title: "Paldea 3",
                pokemon: [
                    "revavroom", "cyclizar", "orthworm", "glimmet", "glimmora", "greavard",
                    "houndstone", "flamigo", "cetoddle", "cetitan", "veluza", "dondozo",
                    "tatsugiri", "annihilape", "clodsire", "farigiraf", "dudunsparce", "kingambit",
                    "great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks",
                    "iron-treads", "iron-bundle", "iron-hands", "iron-jugulis", "iron-moth", "iron-thorns"
                ]
            },
            {
                title: "Paldea 4",
                pokemon: [
                    "frigibax", "arctibax", "baxcalibur", "gimmighoul", "gholdengo", "wo-chien",
                    "chien-pao", "ting-lu", "chi-yu", "roaring-moon", "iron-valiant", "koraidon",
                    "miraidon", "walking-wake", "iron-leaves", "dipplin", "poltchageist", "sinistcha",
                    "okidogi", "munkidori", "fezandipiti", "ogerpon", "archaludon", "hydrapple",
                    "gouging-fire", "raging-bolt", "iron-boulder", "iron-crown", "terapagos", "pecharunt"
                ]
            },
            {
                title: "Paldea Alternate",
                pokemon: [
                    "oinkologne-female", "maushold-family4", "squawkabilly-blue", "squawkabilly-yellow", "squawkabilly-white", "tatsugiri-droopy",
                    "tatsugiri-stretchy", "dudunsparce-three-segment", "gimmighoul-roaming", "poltchageist", "sinistcha", "ursaluna-bloodmoon",
                ]
            },
            {
                title: "Paldean Forms",
                pokemon: [
                    "tauros-paldean-combat", "tauros-paldean-blaze", "tauros-paldean-aqua", "wooper-paldean"
                ]
            }
        ]
    }
};

// format name for span popup
function formatName(name){
    let newName = name.split('-');
    newName = newName.map(newName => {
            return newName.charAt(0).toUpperCase() + newName.slice(1);
        });

    return newName.join(" ");
}

// creates individual pokemon div
function createPokemonDiv(name) {
    // div, class, data-pokemon
    const pokemon = document.createElement("div");
    pokemon.className = "pokemon";
    pokemon.dataset.pokemon = name;

    // img, src, alt
    const img = document.createElement("img");
    img.src = `https://img.pokemondb.net/sprites/home/normal/${name}.png`;
    img.alt = name;

    // span, class, text
    const span = document.createElement("span");
    span.className = "pokemonName";
    span.textContent = formatName(name);

    pokemon.appendChild(img);
    pokemon.appendChild(span);
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
    title.id = regionData.title;
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
    const pageRegions = document.querySelector(".regions");

    regionKeys.forEach(regionKey => {
        const regionData = regions[regionKey];
        if (!regionData) return;

        pageRegions.appendChild(createRegion(regionKey, regionData));
    });
}

// render the regions
renderRegions(["kanto"]);
renderRegions(["johto"]);
renderRegions(["hoenn"]);
renderRegions(["sinnoh"]);
renderRegions(["unova"]);
renderRegions(["kalos"]);
renderRegions(["alola"]);
renderRegions(["galar"]);
renderRegions(["paldea"]);


// set that includes registered pokemon
const registeredPokemon = new Set();

// pokemon click listener
function selectionListener() {
    document.querySelectorAll(".pokemon").forEach(pokemon => {
        pokemon.addEventListener("click", () => {
            // handle event
            pokemonClicked(pokemon);
        });
    });
}

// checks if pokemon is already registered
function pokemonExist(pokemon){
    return registeredPokemon.has(pokemon.dataset.pokemon);
}

// updates progress
function updateProgress(){
    document.querySelector(".totalProgress").innerHTML = registeredPokemon.size;
}

// handles pokemon click
function pokemonClicked(pokemon){
    // logging
    console.log("clicked");

    //if unregistered
    if(!pokemonExist(pokemon)){
        // add to set
        registeredPokemon.add(pokemon.dataset.pokemon);
        // toggle visual
        pokemon.firstChild.classList.add("registered");
    }
    // if registered
    else{
        // remove from set
        registeredPokemon.delete(pokemon.dataset.pokemon);
        // toggle visual
        pokemon.firstChild.classList.remove("registered");
    }

    // update progress
    updateProgress();
}
selectionListener();