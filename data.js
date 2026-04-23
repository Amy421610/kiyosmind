const verbData = [

  // =========================
  // N4
  // =========================

  { k: "開く", f: "あく", m: "Abrirse", g: 1, lv: "N4" },
  { k: "開ける", f: "あける", m: "Abrir", g: 2, lv: "N4" },
  { k: "集まる", f: "あつまる", m: "Reunirse", g: 1, lv: "N4" },
  { k: "集める", f: "あつめる", m: "Reunir", g: 2, lv: "N4" },

  { k: "増える", f: "ふえる", m: "Aumentar", g: 2, lv: "N4" },
  { k: "増やす", f: "ふやす", m: "Aumentar algo", g: 1, lv: "N4" },

  { k: "落ちる", f: "おちる", m: "Caer", g: 2, lv: "N4" },
  { k: "落とす", f: "おとす", m: "Dejar caer", g: 1, lv: "N4" },

  { k: "止まる", f: "とまる", m: "Detenerse", g: 1, lv: "N4" },
  { k: "止める", f: "とめる", m: "Detener", g: 2, lv: "N4" },

  { k: "始まる", f: "はじまる", m: "Empezar", g: 1, lv: "N4" },
  { k: "始める", f: "はじめる", m: "Comenzar", g: 2, lv: "N4" },

  { k: "変わる", f: "かわる", m: "Cambiar", g: 1, lv: "N4" },
  { k: "変える", f: "かえる", m: "Cambiar algo", g: 2, lv: "N4" },

  { k: "決まる", f: "きまる", m: "Decidirse", g: 1, lv: "N4" },
  { k: "決める", f: "きめる", m: "Decidir", g: 2, lv: "N4" },

  { k: "運ぶ", f: "はこぶ", m: "Transportar", g: 1, lv: "N4" },
  { k: "送る", f: "おくる", m: "Enviar", g: 1, lv: "N4" },

  { k: "払う", f: "はらう", m: "Pagar", g: 1, lv: "N4" },

  { k: "勉強する", f: "べんきょうする", m: "Estudiar", g: 3, lv: "N4" },
  { k: "練習する", f: "れんしゅうする", m: "Practicar", g: 3, lv: "N4" },

];

const grammarData = [

  // =========================
  // N4
  // =========================

  { f: "te", tag: "〜ています", m: "Estar haciendo", lv: "N4", formula: "V-te + います" },
  { f: "nai_stem", tag: "〜なければなりません", m: "Tener que", lv: "N4", formula: "V-nai + ければなりません" },
  { f: "te", tag: "〜てもいい", m: "Se permite", lv: "N4", formula: "V-te + もいい" },
  { f: "te", tag: "〜てはいけません", m: "No se permite", lv: "N4", formula: "V-te + はいけません" },

  { f: "dic", tag: "〜つもりです", m: "Intención", lv: "N4", formula: "V-dic + つもりです" },
  { f: "dic", tag: "〜予定です", m: "Planeado", lv: "N4", formula: "V-dic + 予定です" },

  { f: "te", tag: "〜てみる", m: "Intentar", lv: "N4", formula: "V-te + みる" },
  { f: "te", tag: "〜てしまう", m: "Completar / lamentar", lv: "N4", formula: "V-te + しまう" },

  { f: "masu", tag: "〜たい", m: "Querer", lv: "N4", formula: "V-masu + たい" },

  { f: "Volitivo", tag: "〜ましょう", m: "Vamos a", lv: "N4", formula: "V + ましょう" },

  { f: "ta", tag: "〜たほうがいい", m: "Mejor hacer", lv: "N4", formula: "V-ta + ほうがいい" },

  { f: "dic", tag: "〜と思う", m: "Creo que", lv: "N4", formula: "Frase + と思う" },

];