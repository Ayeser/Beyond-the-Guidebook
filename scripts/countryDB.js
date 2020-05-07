const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/beyondtheguidebook"
);

const countriesSeed = [
    {
      name: "Afghanistan",
      description: "Kabul",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/af-flag.jpg",
      date: new Date(Date.now()),
      languages: "Pashto, Dari",
      animal: " National Animal is a Snow Leopard.",
      currency: "Afghani"
       
    },
    {
      name: "Albania",
      description: "Tirana",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/al-flag.jpg",
      date: new Date(Date.now()),
      languages: "Albanian",
      animal: "National Bird is a Golden Eagle.",
      currency: "Lek"
    },
    {
      name: "Algeria",
      description: "Algiers",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/dz-flag.jpg",
      date: new Date(Date.now()),
      languages: "Arabic",
      animal: " National Animal is a Fennec Fox.",
      currency: "Algerian Dinar"
    },
    {
      name: "Andorra",
      description: "Adorra la Vella",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ad-flag.jpg",
      date: new Date(Date.now()),
      languages: "Catalan",
      animal: " Motto: 'Virtus Unita Fortior'(United Virtue is Stronger)",
      currency: "Euro"

    },
    {
      name: "Angola",
      description: "Luanda",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ao-flag.jpg",
      date: new Date(Date.now()),
      languages: "Portuguese",
      animal: "National Bird is a Mangificent Frigatebird",
      currency: "Kwanza"
    },
    {
      name: "Antigue and Barbuda",
      description: "St. John's",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ag-flag.jpg",
      date: new Date(Date.now()),
      languages: "English",
      animal: "National Animal is a European Fallow Deer",
      currency: "East Caribbean Dollar"
    },
    {
      name: "Argentina",
      description: "Buenos Aires",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ar-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "National Dance is the Tango.",
      currency: "Argentina Peso"
    },
    {
      name: "Armenia",
      description: "Yerevan",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/am-flag.jpg",
      date: new Date(Date.now()),
      languages: "Armenian",
      animal: " National Fruit is an Apricot.",
      currency: "Dram"
    },
    {
      name: "Australia",
      description: "Canberra",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/au-flag.jpg",
      date: new Date(Date.now()),
      languages: "English",
      animal: " National Tree is a Golden Wattle.",
      currency: "Australian Dollar"
    },
    {
      name: "Austria",
      description: "Vienna",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/at-flag.jpg",
      date: new Date(Date.now()),
      languages:"German",
      animal: " National Flower is Gentiana",
      currency: "Euro"
    },

    {
      name: "Azerbaijan",
      description: "Baku",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/az-flag.jpg",
      date: new Date(Date.now()),
      languages: "Azerbaijani",
      animal: "National Animal is Karabakh horse.",
      currency: "Manat"
    },
    {
      name: "Bahamas",
      description: "Nassau",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bs-flag.jpg",
      date: new Date(Date.now()),
      languages: "English",
      animal: "National Fish is a Blue Marlin.",
      currency: "Bahamian Dollar"
      
    },
    {
      name: "Bahrain",
      description: "Manama",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bh-flag.jpg",
      date: new Date(Date.now()),
      languages: "Arabic",
      animal: " National Bird is a White-cheeked Bulbul",
      currency: "Bahraini Dinar"
    },
    {
      name: "Bangladesh",
      description: "Dhaka",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bd-flag.jpg",
      date: new Date(Date.now()),
      languages: "Bangla",
      animal: "National Flower is a Water Lily.",
      currency: "Taka"
    },
    {
      name: "Barbados",
      description: "Bridgetown",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bb-flag.jpg",
      date: new Date(Date.now()),
      languages: " English",
      animal: "Motto: Pride and Industry.",
      currency: "Barbadian Dollar"
    },
    {
      name: "Belarus",
      description: "Minsk",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/by-flag.jpg",
      date: new Date(Date.now()),
      languages: "Belarusian",
      animal:"National Animal is Wisent(European Bison)",
      currency: "Blearusian Ruble"
    },
    {
      name: "Belgium",
      description: "Brussels",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/be-flag.jpg",
      date: new Date(Date.now()),
      languages: "Dutch",
      animal: "National Animal is a Lion.",
      currency: "Euro"
    },
    {
      name: "Belize",
      culture: "Culture of Belize",
      description: "Capital city is Belmopan",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bz-flag.jpg",
      date: new Date(Date.now()),
      languages: "English",
      animal: "",
      currency: "Belize Dollar"
    },
    {
      name: "Benin",
      description: "Porto-Novo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bj-flag.jpg",
      date: new Date(Date.now()),
      languages: "English",
      animal: " National Animal is a Tapir.",
      currency: "Belizean Dollar"
    },
    {
      name: "Bhutan",
      description: "Thimphu",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bt-flag.jpg",
      date: new Date(Date.now()),
      languages: "Dzongkha",
      animal: " National Sport is Archery.",
      currency: "Ngultrum"
      
    },
    {
      name: "Bolivia",
      description: "La Paz",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bo-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish, Quechua, Aymara",
      animal: "National Animal is a Llama.",
      currency: "Bolivia Boliviano"
    },
    {
      name: "Bosnia and Herzegovina",
      description: "Sarajevo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ba-flag.jpg",
      date: new Date(Date.now()),
      languages: "Bosnian,Coratian, Serbian",
      animal: "National Flower is a Bosnian Lily.",
      currency: "Bosnia and Herzegovian Convertiable Mark"
    },
    {
      name: "Botswana",
      description: "Gaborone",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bw-flag.jpg",
      date: new Date(Date.now()),
      languages: "Setswana, Kalanga, Sekgalagadi, English",
      animal: "National animal is the Zebra.",
      currency: "Pula"
    },
    {
      name: "Brazil",
      description: "Brasilia",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/br-flag.jpg",
      date: new Date(Date.now()),
      languages: "Portuguese",
      animal: "Motto: 'Ordem e Progresso' 'Order and Progress'",
      currency: "Brazil Real"
    },
    {
      name: "Brunei Darussalam",
      description: "Bandar Seri Begawan",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bn-flag.jpg",
      date: new Date(Date.now()),
      languages: "Mayla",
      animal: "",
      currency: "Brunei Dollar"
    },
    {
      name: "Bulgaria",
      culture: "Culture of Bulgaria",
      description: "Capital city is Sofia",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bg-flag.jpg",
      date: new Date(Date.now()),
      languages: "Bulgarian",
      animal: "",
      currency: "Lev"
    },
    {
      name: "Burkina Faso",
      culture: "Culture of Burkina Faso",
      description: "Capital city is Ouagadougou",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bf-flag.jpg",
      date: new Date(Date.now()),
      languages: "French",
      animal: "",
      currency: "West African CFA Franc"
    },
    {
      name: "Burma",
      culture: "Culture of Burma",
      description: "Capital city is Nay Pyi Taw",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mm-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Burundi",
      culture: "Culture of Berundi",
      description: "Capital city is Bujumbura",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bi-flag.jpg",
      date: new Date(Date.now()),
      languages: "Kirundi; French",
      animal: "",
      currency: "Burundi Franc"
    },
    {
      name: "Cambodia",
      culture: "Culture of Cambodia",
      description: "Capital city is Phnom Penh",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/kh-flag.jpg",
      date: new Date(Date.now()),
      languages: "Khmer",
      animal: "",
      currency: "Riel"
    },
    {
      name: "Cameroon",
      culture: "Culture of Cameroon",
      description: "Capital city is Yaounde",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cm-flag.jpg",
      date: new Date(Date.now()),
      languages: "French; English",
      animal: "",
      currency: "Central African CFA Franc"
    },
    {
      name: "Canada",
      culture: "Culture of Canada",
      description: "Capital city is Ottawa",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ca-flag.jpg",
      date: new Date(Date.now()),
      languages: "English; French",
      animal: "",
      currency: "Canadian Dollar"
    },
    {
      name: "Cape Verde",
      culture: "Culture of Cape Verde",
      description: "Capital city is Praia",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cv-flag.jpg",
      date: new Date(Date.now()),
      languages: "Portuguese",
      animal: "",
      currency: "Cape Verdean Escudo"
    },
    {
      name: "Central African Republic",
      culture: "Culture of Central African Republic",
      description: "Capital city is Bangui",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cf-flag.jpg",
      date: new Date(Date.now()),
      languages: "Sango; French",
      animal: "",
      currency: "Central African CFA Franc"
    },
    {
      name: "Chad",
      culture: "Culture of Chad",
      description: "Capital city is N'Djamena",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/td-flag.jpg",
      date: new Date(Date.now()),
      languages: "French; Arabic",
      animal: "",
      currency: "Central African CFA Franc"
    },
    {
      name: "Chile",
      culture: "Culture of Chile",
      description: "Capital city is Santiago",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cl-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "",
      currency: "Chilean Peso"
    },
    {
      name: "China",
      culture: "Culture of China",
      description: "Capital city is Beijing",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cn-flag.jpg",
      date: new Date(Date.now()),
      languages: "Mandarin",
      animal: "",
      currency: "Chinese Yuan"
    },
    {
      name: "Colombia",
      culture: "Culture of Colombia",
      description: "Capital city is Bogota",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/co-flag.jpg",
      date: new Date(Date.now()),
      languages: "spanish",
      animal: "",
      currency: "Colombian Peso"
    },
    {
      name: "Comoros",
      culture: "Culture of Comoros",
      description: "Capital city is Moroni",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/km-flag.jpg",
      date: new Date(Date.now()),
      languages: "Comorian; Arabic; French",
      animal: "",
      currency: "Comorian Franc"
    },
    {
      name: "Congo",
      culture: "Culture of Congo",
      description: "Capital city is Brazzaville",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cg-flag.jpg",
      date: new Date(Date.now()),
      languages: "French",
      animal: "",
      currency: "Central African CFA Franc"
    },
    {
      name: "Costa Rica",
      culture: "Culture of Costa Rica",
      description: "Capital city is San Jose",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cr-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "",
      currency: "Colon"
    },
    {
      name: "Cote d'Ivoire",
      culture: "Culture of Cote d'Ivoire",
      description: "Capital city is Yamoussoukro",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ci-flag.jpg",
      date: new Date(Date.now()),
      languages: "French",
      animal: "",
      currency: "West African CFA Franc"
    },
    {
      name: "Croatia",
      culture: "Culture of Croatia",
      description: "Capital city is Zagreb",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/hr-flag.jpg",
      date: new Date(Date.now()),
      languages: "Kuna",
      animal: "",
      currency: "Croatian"
    },
    {
      name: "Cuba",
      culture: "Culture of Cuba",
      description: "Capital city is Havana",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cu-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "",
      currency: "Cuban Peso"
    },
    {
      name: "Cyprus",
      culture: "Culture of Cyprus",
      description: "Capital city is Nicosia",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cy-flag.jpg",
      date: new Date(Date.now()),
      languages: "Greek; Turkish",
      animal: "",
      currency: "Euro"
    },
    {
      name: "Czech Republic",
      culture: "Culture of Czech Republic",
      description: "Capital city is Prague",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cz-flag.jpg",
      date: new Date(Date.now()),
      languages: "Czech; Slovak",
      animal: "",
      currency: "Czech Koruna"
    },
    {
      name: "Democratic Republic of Congo",
      culture: "Culture of Democratic Republic of Congo",
      description: "Capital city is Kinshasa",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/cd-flag.jpg",
      date: new Date(Date.now()),
      languages: "French",
      animal: "",
      currency: "Congolese Franc"
    },
    {
      name: "Denmark",
      culture: "Culture of Denmark",
      description: "Capital city is Copenhagen",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/dk-flag.jpg",
      date: new Date(Date.now()),
      languages: "Danish",
      animal: "",
      currency: "Danish Krone"
    },
    {
      name: "Djibouti",
      culture: "Culture of Djibouti",
      description: "Capital city is Djibouti",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/dj-flag.jpg",
      date: new Date(Date.now()),
      languages: "Arabic; French",
      animal: "",
      currency: "Djiboutian Franc"
    },
    {
      name: "Dominica",
      culture: "Culture of Dominica",
      description: "Capital city is Roseau",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/dm-flag.jpg",
      date: new Date(Date.now()),
      languages: "English; French; Antillean Creole",
      animal: "",
      currency: "East Caribbean Dollar"
    },
    {
      name: "Dominican Republic",
      culture: "Culture of Dominican Republic",
      description: "Capital city is Santo Domingo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/do-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "",
      currency: "Dominican Peso"
    },
    {
      name: "Ecuador",
      culture: "Culture of Ecuador",
      description: "Capital city is Quito",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ec-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "",
      currency: "United States Dollar"
    },
    {
      name: "Egypt",
      culture: "Culture of Egypt",
      description: "Capital city is Cairo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/eg-flag.jpg",
      date: new Date(Date.now()),
      languages: "Arabic",
      animal: "",
      currency: "Egyptian Pound"
    },
    {
      name: "El Salvador",
      culture: "Culture of El Salvador",
      description: "Capital city is San Salvador",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sv-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "",
      currency: "United States Dollar"
    },
    {
      name: "Equatorial Guinea",
      culture: "Culture of Equatorial Guinea",
      description: "Capital city is Malabo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gq-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish; French; Portuguese",
      animal: "",
      currency: "Central African FCA Franc"
    },
    {
      name: "Eritrea",
      culture: "Culture of Eritrea",
      description: "Capital city is Asmara",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/er-flag.jpg",
      date: new Date(Date.now()),
      languages: "Arabic; Tingrinya; English",
      animal: "",
      currency: "Nakfa"
    },
    {
      name: "Estonia",
      culture: "Culture of Estonia",
      description: "Capital city is Tallinn",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ee-flag.jpg",
      date: new Date(Date.now()),
      languages: "Estonian",
      animal: "",
      currency: "Estonian Kroon; Euro"
    },
    {
      name: "Ethiopia",
      culture: "Culture of Ethiopia",
      description: "Capital city is Addis Ababa",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/et-flag.jpg",
      date: new Date(Date.now()),
      languages: "Amharic",
      animal: "",
      currency: "Birr"
    },
    {
      name: "Fiji",
      culture: "Culture of Fiji",
      description: "Capital city is Suva",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/fj-flag.jpg",
      date: new Date(Date.now()),
      languages: "English; Bau Fijian; Hindi",
      animal: "",
      currency: "Fijian Dollar"
    },
    {
      name: "Finland",
      culture: "Culture of Finland",
      description: "Capital city is Helsinki",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/fi-flag.jpg",
      date: new Date(Date.now()),
      languages: "Finnish; Swedish",
      animal: "",
      currency: "Euro"
    },
    {
      name: "France",
      culture: "Culture of France",
      description: "Capital city is Paris",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/fr-flag.jpg",
      date: new Date(Date.now()),
      languages: "French",
      animal: "",
      currency: "Euro; CFP Franc"
    },
    {
      name: "Gabon",
      culture: "Culture of Gabon",
      description: "Capital city is Libreville",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ga-flag.jpg",
      date: new Date(Date.now()),
      languages: "French",
      animal: "",
      currency: "Central African CFA Franc"
    },
    {
      name: "Gambia",
      culture: "Culture of Gambia",
      description: "Capital city is Banjul",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gm-flag.jpg",
      date: new Date(Date.now()),
      languages: "English",
      animal: "",
      currency: "Dalasi"
    },
    {
      name: "Georgia",
      culture: "Culture of Georgia",
      description: "Capital city is Tbilisi",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ge-flag.jpg",
      date: new Date(Date.now()),
      languages: "Georgian",
      animal: "",
      currency: "Lari"
    },
    {
      name: "Germany",
      culture: "Culture of Germany",
      description: "Capital city is Berlin",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/de-flag.jpg",
      date: new Date(Date.now()),
      languages: "German",
      animal: "",
      currency: "Euro"
    },
    {
      name: "Ghana",
      culture: "Culture of Ghana",
      description: "Capital city is Accra",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gh-flag.jpg",
      date: new Date(Date.now()),
      languages: "English",
      animal: "",
      currency: "Ghanaian Cedi"
    },
    {
      name: "Greece",
      culture: "Culture of Greece",
      description: "Capital city is Athens",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gr-flag.jpg",
      date: new Date(Date.now()),
      languages: "Greek",
      animal: "",
      currency: "Euro"
    },
    {
      name: "Grenada",
      culture: "Culture of Grenada",
      description: "Capital city is St. George's",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gd-flag.jpg",
      date: new Date(Date.now()),
      languages: "English; Patois",
      animal: "",
      currency: "East Caribbean Dollar"
    },
    {
      name: "Guetemala",
      culture: "Culture of Guetemala",
      description: "Capital city is Guatemala City",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gt-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "",
      currency: "Quetzal"
    },
    {
      name: "Guinea",
      culture: "Culture of Guinea",
      description: "Capital city is Conakry",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gn-flag.jpg",
      date: new Date(Date.now()),
      languages: "French",
      animal: "",
      currency: "Guinean Franc"
    },
    {
      name: "Guinea-Bissau",
      culture: "Culture of Guinea-Bissau",
      description: "Capital city is Bissau",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gw-flag.jpg",
      date: new Date(Date.now()),
      languages: "Portuguese",
      animal: "",
      currency: "West African CFA Franc"
    },
    {
      name: "Guyana",
      culture: "Culture of Guyana",
      description: "Capital city is Georgetown",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gy-flag.jpg",
      date: new Date(Date.now()),
      languages: "English",
      animal: "",
      currency: "Guyanese Dollar"
    },
    {
      name: "Haiti",
      culture: "Culture of Haiti",
      description: "Capital city is Port-au-Prince",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ht-flag.jpg",
      date: new Date(Date.now()),
      languages: "Haitian Creole; French",
      animal: "",
      currency: "Gourde"
    },
    {
      name: "Honduras",
      culture: "Culture of Honduras",
      description: "Capital city is Tegucigalpa",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/hn-flag.jpg",
      date: new Date(Date.now()),
      languages: "Spanish",
      animal: "",
      currency: "Lempira"
    },
    {
      name: "Hungary",
      culture: "Culture of Hungary",
      description: "Capital city is Budapest",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/hu-flag.jpg",
      date: new Date(Date.now()),
      languages: "Hungarian",
      animal: "",
      currency: "Forint"
    },
    {
      name: "Iceland",
      culture: "Culture of Iceland",
      description: "Capital city is Reykjavik",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/is-flag.jpg",
      date: new Date(Date.now()),
      languages: "Icelandic",
      animal: "",
      currency: "Icelandic Krona"
    },
    {
      name: "India",
      culture: "Culture of India",
      description: "Capital city is New Delhi",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/in-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Indonesia",
      culture: "Culture of Indonesia",
      description: "Capital city is Jakarta",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/id-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Iran",
      culture: "Culture of Iran",
      description: "Capital city is Tehran",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ir-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Iraq",
      culture: "Culture of Iraq",
      description: "Capital city is Baghdad",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/iq-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Ireland",
      culture: "Culture of Ireland",
      description: "Capital city is Dublin",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ie-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Israel",
      culture: "Culture of Israel",
      description: "Capital city is Jerusalem",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/il-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Italy",
      culture: "Culture of Italy",
      description: "Capital city is Rome",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/it-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Jamaica",
      culture: "Culture of Jamaica",
      description: "Capital city is Kingston",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/jm-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Japan",
      culture: "Culture of Japan",
      description: "Capital city is Tokyo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/jp-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Jordan",
      culture: "Culture of Jordan",
      description: "Capital city is Amman",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/jo-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Kazakhstan",
      culture: "Culture of Kazakhstan",
      description: "Capital city is Astana",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/kz-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Kenya",
      culture: "Culture of Kenya",
      description: "Capital city is Nairobi",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ke-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Kiribati",
      culture: "Culture of Kiribati",
      description: "Capital city is Tarawa",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ki-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Kuwait",
      culture: "Culture of Kuwait",
      description: "Capital city is Kuwait City",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/kw-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Kyrgyzstan",
      culture: "Culture of Kyrgyzstan",
      description: "Capital city is Bishkek",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/kg-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Lao , People's Democratic Republic",
      culture: "Culture of Lao People's Democratic Republic",
      description: "Capital city is Vientiane",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/la-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Latvia",
      culture: "Culture of Latvia",
      description: "Capital city is Riga",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/lv-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Lebanon",
      culture: "Culture of Lebanon",
      description: "Capital city is Beirut",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/lb-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Lesotho",
      culture: "Culture of Lesotho",
      description: "Capital city is Maseru",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ls-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Liberia",
      culture: "Culture of Liberia",
      description: "Capital city is Monrovia",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/lr-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Libya",
      culture: "Culture of Libya",
      description: "Capital city is Tripolis",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ly-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Liechtenstein",
      culture: "Culture of Liechtenstein",
      description: "Capital city is Vaduz",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/li-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Lithuania",
      culture: "Culture of Lithuania",
      description: "Capital city is Vilnius",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/lt-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Luxembourg",
      culture: "Culture of Luxembourg",
      description: "Capital city is Luxembourg",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/lu-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Macedonia",
      culture: "Culture of Macedonia",
      description: "Capital city is Skopje",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mk-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Madagascar",
      culture: "Culture of Madagascar",
      description: "Capital city is Maseru",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mg-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Malawi",
      culture: "Culture of Malawi",
      description: "Capital city is Lilongwe",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mw-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Malaysia",
      culture: "Culture of Malaysia",
      description: "Capital city is Kuala Lumpur",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/my-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Maldives",
      culture: "Culture of Maldives",
      description: "Capital city is Male",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mv-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Mali",
      culture: "Culture of Mali",
      description: "Capital city is Bamako",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ml-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Malta",
      culture: "Culture of Malta",
      description: "Capital city is Valletta",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mt-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Marshall Islands",
      culture: "Culture of Marshall Islands",
      description: "Capital city is Majuro",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mh-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Mauritania",
      culture: "Culture of Mauritania",
      description: "Capital city is Nouakchott",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mr-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Mauritius",
      culture: "Culture of Mauritius",
      description: "Capital city is Port Louis",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mu-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Mexico",
      culture: "Culture of Mexico",
      description: "Capital city is Mexico City",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mx-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Micronesia, Federated States of",
      culture: "Culture of Micronesia",
      description: "Capital city is Palikir",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/fm-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Moldova",
      culture: "Culture of Moldova",
      description: "Capital city is Chisinau",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/md-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Monaco",
      culture: "Culture of Monaco",
      description: "Capital city is Monaco",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mc-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Mongolia",
      culture: "Culture of Mongolia",
      description: "Capital city is Ulan Bator",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mn-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Montenegro",
      culture: "Culture of Montenegro",
      description: "Capital city is Podgorica",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/me-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Morocco",
      culture: "Culture of Morocco",
      description: "Capital city is Rabat",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ma-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Mozambique",
      culture: "Culture of Mozambique",
      description: "Capital city is Maputo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mz-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Namibia",
      culture: "Culture of Namibia",
      description: "Capital city is Windhoek",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/na-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Nauru",
      culture: "Culture of Nauru",
      description: "Capital city is Yaren",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/nr-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Nepal",
      culture: "Culture of Nepal",
      description: "Capital city is Kathmandu",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/np-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Netherlands",
      culture: "Culture of Netherlands",
      description: "Capital city is Amsterdam",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/nl-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "New Zealand",
      culture: "Culture of New Zealand",
      description: "Capital city is Wellington",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/nz-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Nicaragua",
      culture: "Culture of Niciragua",
      description: "Capital city is Managua",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ni-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Niger",
      culture: "Culture of Niger",
      description: "Capital city is Niamey",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ne-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Nigeria",
      culture: "Culture of Nigeria",
      description: "Capital city is Amsterdam",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ng-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "North Korea",
      culture: "Culture of North Korea",
      description: "Capital city is Pyongyang",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/kp-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Norway",
      culture: "Culture of Norway",
      description: "Capital city is Oslo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/no-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Oman",
      culture: "Culture of Oman",
      description: "Capital city is Muscat",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/om-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Pakistan",
      culture: "Culture of Pakistan",
      description: "Capital city is Islamabad",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pk-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Palau",
      culture: "Culture of Palau",
      description: "Capital city is Melekeok",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pw-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Panama",
      culture: "Culture of Panama",
      description: "Capital city is Panama City",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pa-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Papa New Guinea",
      culture: "Culture of Papa New Guinea",
      description: "Capital city is Port Moresby",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pg-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Paraguay",
      culture: "Culture of Paraguay",
      description: "Capital city is Asuncion",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/py-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Peru",
      culture: "Culture of Peru",
      description: "Capital city is Lima",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pe-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Philippines",
      culture: "Culture of Philippines",
      description: "Capital city is Manila",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ph-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Poland",
      culture: "Culture of Poland",
      description: "Capital city is Warsaw",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pl-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Portugal",
      culture: "Culture of Portugal",
      description: "Capital city is Lisbon",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pt-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Qatar",
      culture: "Culture of Qatar",
      description: "Capital city is Doha",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/qa-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Romania",
      culture: "Culture of Romania",
      description: "Capital city is Bucharest",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ro-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Russian Federation",
      culture: "Culture of Russia",
      description: "Capital city is Moscow",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ru-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Rwanda",
      culture: "Culture of Rwanda",
      description: "Capital city is Kigali",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/rw-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Saint Kitts and Nevis",
      culture: "Culture of Saint Kitts and Nevis",
      description: "Capital city is Basseterre",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/kn-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Saint Lucia",
      culture: "Culture of Saint Lucia",
      description: "Capital city is Castries",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/lc-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Samoa",
      culture: "Culture of Samoa",
      description: "Capital city is Apia",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ws-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "San Marino",
      culture: "Culture of San Marino",
      description: "Capital city is Can Marino",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sm-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Sao Tome and Principe",
      culture: "Culture of Sao Tome and Principe",
      description: "Capital city is Sao Tome",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/st-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Saudi Arabia",
      culture: "Culture of Saudi Arabia",
      description: "Capital city is Riyadh",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sa-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Senegal",
      culture: "Culture of Senegal",
      description: "Capital city is Dakar",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sn-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Serbia",
      culture: "Culture of Serbia",
      description: "Capital city is Belgrade",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/rs-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Seychelles",
      culture: "Culture of Seychelles",
      description: "Capital city is Victoria",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sc-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Sierra Leone",
      culture: "Culture of Sierra Leone",
      description: "Capital city is Freetown",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sl-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Singapore",
      culture: "Culture of Singapore",
      description: "Capital city is Singapur",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sg-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Slovakia",
      culture: "Culture of Slovakia",
      description: "Capital city is Bratislava",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sk-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Slovenia",
      culture: "Culture of Slovenia",
      description: "Capital city is Ljubljana",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/si-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Solomon Islands",
      culture: "Culture of Solomon Islands",
      description: "Capital city is Honiara",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sb-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Somalia",
      culture: "Culture of Somalia",
      description: "Capital city is Mogadishu",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/so-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "South Africa",
      culture: "Culture of South Africa",
      description: "Capital city is Pretoria",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/za-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "South Korea",
      culture: "Culture of South Korea",
      description: "Capital city is Capital City Seoul",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/kr-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "South Sudan",
      culture: "Culture of South Sudan",
      description: "Capital city is Juba",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ss-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Spain",
      culture: "Culture of Spain",
      description: "Capital city is Madrid",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/es-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Sri Lanka",
      culture: "Culture of Sri Lanka",
      description: "Capital city is Colombo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/lk-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "St Vincent and the Grenadines",
      culture: "Culture of St Vincent and the Grenadines",
      description: "Capital city is Kingstown",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/vc-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Sudan",
      culture: "Culture of Sudan",
      description: "Capital city is Khartoum",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sd-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Suriname",
      culture: "Culture of Suriname",
      description: "Capital city is Paramaribo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sr-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Swaziland",
      culture: "Culture of Swaziland",
      description: "Capital city is Mbabane",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sz-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Sweden",
      culture: "Culture of Sweden",
      description: "Capital city is Stockholm",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/se-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Switzerland",
      culture: "Culture of Switzerland",
      description: "Capital city is Bern",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ch-flag.png",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Syrian Arab Republic",
      culture: "Culture of Syerian Arab Republic",
      description: "Capital city is Damascus",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/sy-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Tajikistan",
      culture: "Culture of Tajikistan",
      description: "Capital city is Dushanbe",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tj-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Tanzania",
      culture: "Culture of Tanzania",
      description: "Capital city is Dodoma",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tz-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Thailand",
      culture: "Culture of Thailand",
      description: "Capital city is Bangkok",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/th-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Timor-Leste",
      culture: "Culture of Timor-Leste",
      description: "Capital city is Dili",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tl-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Togo",
      culture: "Culture of Togo",
      description: "Capital city is Lome",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tg-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Tonga",
      culture: "Culture of Tonga",
      description: "Capital city is Nuku'alofa",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/to-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Trinidad and Tobago",
      culture: "Culture of Trinidad and Tobago",
      description: "Capital city is Port of Spain",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tt-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Tunisia",
      culture: "Culture of Tunisia",
      description: "Capital city is Tunis",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tn-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Turkey",
      culture: "Culture of Turkey",
      description: "Capital city is Ankara",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tr-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Turkmenistan",
      culture: "Culture of Turkmenistan",
      description: "Capital city is Ashgabat",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tm-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Tuvalu",
      culture: "Culture of Tuvalu",
      description: "Capital city is Funafuti",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tv-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Uganda",
      culture: "Culture of Uganda",
      description: "Capital city is Kampala",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ug-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Ukraine",
      culture: "Culture of Ukraine",
      description: "Capital city is Kiev",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ua-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "United Arab Emirates",
      culture: "Culture of United Arab Emirates",
      description: "Capital city is Abu Dhabi",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ae-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "United Kingdom",
      culture: "Culture of United Kingdom",
      description: "Capital city is London",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gb-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "United States",
      culture: "Culture of United States",
      description: "Capital city is Washington",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/us-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Uruguay",
      culture: "Culture of Uruguay",
      description: "Capital city is Montevideo",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/uy-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Uzbekistan",
      culture: "Culture of Uzbekistan",
      description: "Capital city is Tashkent",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/uz-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Vanuatu",
      culture: "Culture of Vanuatu",
      description: "Capital city is Port Vila",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/vu-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Venezuela",
      culture: "Culture of Venezuela",
      description: "Capital city is Caracas",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ve-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Vietnam",
      culture: "Culture of Vietnam",
      description: "Capital city is Hanoi",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/vn-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Yemen",
      culture: "Culture of Yemen",
      description: "Capital city is Sana'a",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ye-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Zambia",
      culture: "Culture of Zambia",
      description: "Capital city is Lusaka",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/zm-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Zimbabwe",
      culture: "Culture of Zimbabwe",
      description: "Capital city is Harare",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/zw-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Palestine",
      culture: "Palestine is a UN Observed State",
      description: "Capital city is East Jerusalem",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ps-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Vatican",
      culture: "Vatican is a UN Observed State",
      description: "Capital city is Vatican City",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/va-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "American Samoa",
      culture: "Culture of American Samoa",
      description: "This is a Dependent Territory. Capital city is Pago Pago",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/as-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Anguilla",
      culture: "Culture of Anguilla",
      description: "This is a Dependent Territory. Capital city is The Valley",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ai-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Aruba",
      culture: "Culture of Aruba",
      description: "This is a Dependent Territory. Capital city is Oranjestad",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/va-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Bermuda",
      culture: "Culture of Bermuda",
      description: "This is a Dependent Territory. Capital city is Hamilton",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/bm-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "British Virgin Islands",
      culture: "Culture of British Virgin Islands",
      description: "This is a Dependent Territory. Capital city is Road Town",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/vg-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Cayman Islands",
      culture: "Culture of Cayman Islands",
      description: "This is a Dependent Territory. Capital city is George Town",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ky-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Cook Islands",
      culture: "Culture of Cook Islands",
      description: "This is a Dependent Territory. Capital city is Avarua",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ck-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Falkland Islands",
      culture: "Culture of Falkland Islands",
      description: "This is a Dependent Territory. Capital city is Stanley",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/fk-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "French Guiana",
      culture: "Culture of French Guiana",
      description: "This is a Dependent Territory. Capital city is Cayenne",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gf-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "French Polynesia",
      culture: "Culture of French Polynesia",
      description: "This is a Dependent Territory. Capital city is Papeete",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pf-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Gibraltar",
      culture: "Culture of Gibraltar",
      description: "This is a Dependent Territory. Capital city is Gibraltar",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gi-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Greenland",
      culture: "Culture of Greenland",
      description: "This is a Dependent Territory. Capital city is Nuuk",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gl-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Guadeloupe",
      culture: "Culture of Guadeloupe",
      description: "This is a Dependent Territory. Capital city is Basse-Terre",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gp-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Guam",
      culture: "Culture of Guam",
      description: "This is a Dependent Territory. Capital city is Hagatna",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/gu-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Hong Kong",
      culture: "Culture of Hong Kong",
      description: "This is a Dependent Territory. Capital city is Hong Kong",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/hk-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Macao",
      culture: "Macao",
      description: "This is a Dependent Territory. Capital city is Macao",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mo-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Montserrat",
      culture: "Culture of Montserrat",
      description: "This is a Dependent Territory. Capital city is Plymouth",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/ms-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "New Caledonia",
      culture: "Culture of New Caledonia",
      description: "This is a Dependent Territory. Capital city is Noumea",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/nc-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Niue",
      culture: "Culture of Niue",
      description: "This is a Dependent Territory. Capital city is Alofi",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/nu-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Norfolk Island",
      culture: "Culture of Norfolk Island",
      description: "This is a Dependent Territory. Capital city is Kingston",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/nf-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Northern Mariana Islands",
      culture: "Culture of Northern Mariana Islands",
      description: "This is a Dependent Territory. Capital city is Saipan",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/mp-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Pitcairn",
      culture: "Culture of Pitcairn",
      description: "This is a Dependent Territory. Capital city is Adamstown",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pn-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Puerto Rico",
      culture: "Culture of Puerto Rico",
      description: "This is a Dependent Territory. Capital city is San Juan",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/pr-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Reunion",
      culture: "Culture of Reunion",
      description: "This is a Dependent Territory. Capital city is Saint-Denis",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/re-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Taiwan",
      culture: "Culture of Taiwan",
      description: "This is a Dependent Territory. Capital city is Taipei",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tw-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Tokelau",
      culture: "Culture of Tokelau",
      description: "This is a Dependent Territory.",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tk-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Turks and Caicos",
      culture: "Culture of Turks and Caicos",
      description: "This is a Dependent Territory. Capital city is Cockburn Town",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/tc-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "US Virgin Islands",
      culture: "Culture of US Virgin Islands",
      description: "This is a Dependent Territory. Capital city is Charlote Amalie",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/vi-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Wallis and Futuna",
      culture: "Culture of Wallis and Futuna",
      description: "This is a Dependent Territory. Capital city is Mata Utu",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/wf-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    },
    {
      name: "Western Sahara",
      culture: "Culture of Western Sahara",
      description: "This is a Dependent Territory. Capital city is El-Aaiun",
      profilePicture: "https://www.worldatlas.com/r/w480/img/flag/eh-flag.jpg",
      date: new Date(Date.now()),
      languages: "",
      animal: "",
      currency: ""
    }
  ];
  
  db.Countries
    .remove({})
    .then(() => db.Countries.collection.insertMany(countriesSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });



