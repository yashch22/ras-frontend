export const programExpanded = [
  "Bachelor of Technology",
  "Bachelor of Science",
  "DoubleMajor",
  "DualA",
  "DualB",
  "DualC",
  "Master of Technology",
  "Master of Science by Research",
  "Master of Science",
  "Master of Design",
  "Master of Business Administration",
  "Doctor of Philosophy",
];

export const programCondensed = [
  "BT/BS/Double Major",
  "Dual",
  "MT/MSc/MSR",
  "MDes",
  "MBA",
  "PhD",
];

export const Branches = [
"Aerospace Engineering (AE)",
"Biological Sciences and Bioengineering (BSBE)",
"Civil Engineering (CE)",
"Chemical Engineering (CHE)",
"Computer Science and Engineering (CSE)",
"Electrical Engineering (EE)",
"Material Science and Engineering (MSE)",
"Mechanical Engineering (ME)",
"Chemistry (CH)",
"Economics (ECO)",
"Earth Sciences (ES)",
"Mathematics and Scientific Computing (MTH)",
"Statistics and Data Science (SDS)",
"Physics (Ph)",
"Cognitive Science (CGS)",
"Design (DES)",
"Management Studies (MS)",
"Materials Science Programme (MSP)",
"Nuclear Engineering and Technology (NET)",
"Photonics Science and Engineering (PSE)",
"Statistics (Stats)",
"Humanities and Social Sciences (HSS)",
"Mathematics",
"Sustainable Energy Engineering (SEE)",
  "SSA",
];

export type programType = {
  BT: number;
  BS: number;
  MT: number;
  DoubleMajor: number;
  DualA: number;
  DualB: number;
  DualC: number;
  MDes: number;
  MBA: number;
  PhD: number;
  MSc: number;
  MSR: number;
};

export const func = {
  "Aerospace Engineering (AE)": {
    BT: 1,
    BS: -1,
    MT: 14,
    DoubleMajor: 28,
    DualA: 38,
    DualB: 49,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 63,
    MSc: -1,
    MSR: 85,
  },
  "Biological Sciences and Bioengineering (BSBE)": {
    BT: 2,
    BS: -1,
    MT: 15,
    DoubleMajor: 29,
    DualA: 39,
    DualB: 50,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 64,
    MSc: -1,
    MSR: -1,
  },
  "Civil Engineering (CE)": {
    BT: 3,
    BS: -1,
    MT: 16,
    DoubleMajor: 30,
    DualA: 40,
    DualB: 51,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 65,
    MSc: -1,
    MSR: 86,
  },
  "Chemical Engineering (CHE)": {
    BT: 4,
    BS: -1,
    MT: 17,
    DoubleMajor: 31,
    DualA: 41,
    DualB: 52,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 66,
    MSc: -1,
    MSR: 87,
  },
  "Computer Science and Engineering (CSE)": {
    BT: 5,
    BS: -1,
    MT: 18,
    DoubleMajor: 32,
    DualA: 42,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 67,
    MSc: -1,
    MSR: 88,
  },
  "Electrical Engineering (EE)": {
    BT: 6,
    BS: -1,
    MT: 19,
    DoubleMajor: 33,
    DualA: 43,
    DualB: 54,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 68,
    MSc: -1,
    MSR: 89,
  },
  "Material Science and Engineering (MSE)": {
    BT: 7,
    BS: -1,
    MT: 20,
    DoubleMajor: 34,
    DualA: 44,
    DualB: 55,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 69,
    MSc: -1,
    MSR: -1,
  },
  "Mechanical Engineering (ME)": {
    BT: 8,
    BS: -1,
    MT: 21,
    DoubleMajor: 35,
    DualA: 99,
    DualB: 101,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 70,
    MSc: -1,
    MSR: 90,
  },
  "Chemistry (CH)": {
    BT: -1,
    BS: 9,
    MT: -1,
    DoubleMajor: 96,
    DualA: 45,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 111,
    MSc: 107,
    MSR: -1,
  },
  "Economics (ECO)": {
    BT: -1,
    BS: 10,
    MT: -1,
    DoubleMajor: 36,
    DualA: 46,
    DualB: 56,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 112,
    MSc: 108,
    MSR: -1,
  },
  "Earth Sciences (ES)": {
    BT: -1,
    BS: 11,
    MT: 22,
    DoubleMajor: -1,
    DualA: 115,
    DualB: 116,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 71,
    MSc: 109,
    MSR: -1,
  },
  "Mathematics and Scientific Computing (MTH)": {
    BT: -1,
    BS: 12,
    MT: -1,
    DoubleMajor: 37,
    DualA: 47,
    DualB: 102,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: -1,
    MSc: -1,
    MSR: -1,
  },
  "Statistics and Data Science (SDS)": {
    BT: -1,
    BS: 95,
    MT: -1,
    DoubleMajor: 97,
    DualA: 100,
    DualB: 103,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: -1,
    MSc: -1,
    MSR: -1,
  },
  "Physics (Ph)": {
    BT: -1,
    BS: 13,
    MT: -1,
    DoubleMajor: 98,
    DualA: 48,
    DualB: 57,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 73,
    MSc: 110,
    MSR: -1,
  },
  "Cognitive Science (CGS)": {
    BT: -1,
    BS: -1,
    MT: -1,
    DoubleMajor: -1,
    DualA: -1,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 74,
    MSc: -1,
    MSR: 91,
  },
  "Design (DES)": {
    BT: -1,
    BS: -1,
    MT: -1,
    DoubleMajor: -1,
    DualA: -1,
    DualB: 58,
    DualC: -1,
    MDes: 61,
    MBA: -1,
    PhD: 75,
    MSc: -1,
    MSR: -1,
  },
  "Management Studies (MS)": {
    BT: -1,
    BS: -1,
    MT: 23,
    DoubleMajor: -1,
    DualA: -1,
    DualB: 104,
    DualC: 60,
    MDes: -1,
    MBA: 62,
    PhD: 76,
    MSc: -1,
    MSR: -1,
  },
  "Materials Science Programme (MSP)": {
    BT: -1,
    BS: -1,
    MT: 24,
    DoubleMajor: -1,
    DualA: -1,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 113,
    MSc: -1,
    MSR: -1,
  },
  "Nuclear Engineering and Technology (NET)": {
    BT: -1,
    BS: -1,
    MT: 25,
    DoubleMajor: -1,
    DualA: -1,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 77,
    MSc: -1,
    MSR: -1,
  },
  "Photonics Science and Engineering (PSE)": {
    BT: -1,
    BS: -1,
    MT: 26,
    DoubleMajor: -1,
    DualA: -1,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 78,
    MSc: -1,
    MSR: 93,
  },
  "Statistics (Stats)": {
    BT: -1,
    BS: -1,
    MT: -1,
    DoubleMajor: -1,
    DualA: -1,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 79,
    MSc: 83,
    MSR: -1,
  },
  "Humanities and Social Sciences (HSS)": {
    BT: -1,
    BS: -1,
    MT: -1,
    DoubleMajor: -1,
    DualA: -1,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 80,
    MSc: -1,
    MSR: -1,
  },
  Mathematics: {
    BT: -1,
    BS: -1,
    MT: -1,
    DoubleMajor: -1,
    DualA: -1,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 81,
    MSc: 84,
    MSR: -1,
  },
  "Sustainable Energy Engineering (SEE)": {
    BT: -1,
    BS: -1,
    MT: 27,
    DoubleMajor: -1,
    DualA: -1,
    DualB: 105,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 82,
    MSc: -1,
    MSR: 94,
  },
  SSA: {
    BT: -1,
    BS: -1,
    MT: 106,
    DoubleMajor: -1,
    DualA: -1,
    DualB: -1,
    DualC: -1,
    MDes: -1,
    MBA: -1,
    PhD: 114,
    MSc: -1,
    MSR: -1,
  },
};

export const rev = {
  1: "BT-AE",
  2: "BT-BSBE",
  3: "BT-CE",
  4: "BT-CHE",
  5: "BT-CSE",
  6: "BT-EE",
  7: "BT-MSE",
  8: "BT-ME",
  9: "BS-CHM",
  10: "BS-ECO",
  11: "BS-ES",
  12: "BS-MTH",
  95: "BS-SDS",
  13: "BS-PHY",
  28: "DoubleMajor-AE",
  29: "DoubleMajor-BSBE",
  30: "DoubleMajor-CE",
  31: "DoubleMajor-CHE",
  32: "DoubleMajor-CSE",
  33: "DoubleMajor-EE",
  34: "DoubleMajor-MSE",
  35: "DoubleMajor-ME",
  96: "DoubleMajor-CHM",
  36: "DoubleMajor-ECO",
  37: "DoubleMajor-MTH",
  97: "DoubleMajor-SDS",
  98: "DoubleMajor-PHY",
  38: "DualA-AE",
  39: "DualA-BSBE",
  40: "DualA-CE",
  41: "DualA-CHE",
  42: "DualA-CSE",
  43: "DualA-EE",
  44: "DualA-MSE",
  45: "DualA-CHM",
  99: "DualA-ME",
  46: "DualA-ECO",
  47: "DualA-MTH",
  100: "DualA-SDS",
  48: "DualA-PHY",
  49: "DualB-AE",
  50: "DualB-BSBE",
  51: "DualB-CE",
  52: "DualB-CHE",
  53: "<DELETED>DualB-CSE</DELETED>",
  54: "DualB-EE",
  55: "DualB-MSE",
  101: "DualB-ME",
  56: "DualB-ECO",
  102: "DualB-MTH",
  103: "DualB-SDS",
  57: "DualB-PHY",
  58: "DualB-DES",
  59: "<DELETED>DualC-EE</DELETED>",
  104: "DualB-MS",
  105: "DualB-SEE",
  60: "DualC-MS",
  14: "MT-AE",
  15: "MT-BSBE",
  16: "MT-CE",
  17: "MT-CHE",
  18: "MT-CSE",
  19: "MT-EE",
  20: "MT-MSE",
  21: "MT-ME",
  22: "MT-ES",
  23: "MT-MS",
  24: "MT-MSP",
  25: "MT-NET",
  26: "MT-PSE",
  27: "MT-SEE",
  106: "MT-SSA",
  85: "MSR-AE",
  86: "MSR-CE",
  87: "MSR-CHE",
  88: "MSR-CSE",
  89: "MSR-EE",
  90: "MSR-ME",
  91: "MSR-CGS",
  92: "<DELETED>MSR-EEM</DELETED>",
  93: "MSR-PSE",
  94: "MSR-SEE",
  107: "MSc-CHM",
  108: "MSc-ECO",
  109: "MSc-ES",
  110: "MSc-PHY",
  83: "MSc-Stats",
  84: "MSc-Mathematics",
  61: "MDes-DES",
  62: "MBA-MS",
  63: "PhD-AE",
  64: "PhD-BSBE",
  65: "PhD-CE",
  66: "PhD-CHE",
  67: "PhD-CSE",
  68: "PhD-EE",
  69: "PhD-MSE",
  70: "PhD-ME",
  111: "PhD-CHM",
  112: "PhD-ECO",
  71: "PhD-ES",
  72: "<DELETED>PhD-MTH</DELETED>",
  73: "PhD-PHY",
  74: "PhD-CGS",
  75: "PhD-DES",
  76: "PhD-MS",
  113: "PhD-MSP",
  77: "PhD-NET",
  78: "PhD-PSE",
  79: "PhD-Stats",
  80: "PhD-HSS",
  81: "PhD-Mathematics",
  82: "PhD-SEE",
  114: "PhD-SSA",
  // Stupidest thing ever written if it works.
  115: "DualA-ES",
  116: "DualB-ES",
};

export default { programExpanded, Branches, programCondensed, rev, func };
