const verbData = [   // =========================
  // N4 VERBS — BLOQUE 1
  // =========================

  { k: "開く", f: "あく", m: "Abrirse", g: 1, lv: "N4" },
  { k: "開ける", f: "あける", m: "Abrir", g: 2, lv: "N4" },
  { k: "集まる", f: "あつまる", m: "Reunirse", g: 1, lv: "N4" },
  { k: "集める", f: "あつめる", m: "Reunir / juntar", g: 2, lv: "N4" },
  { k: "謝る", f: "あやまる", m: "Disculparse", g: 1, lv: "N4" },
  { k: "続ける", f: "つづける", m: "Continuar", g: 2, lv: "N4" },
  { k: "続く", f: "つづく", m: "Continuar (intransitivo)", g: 1, lv: "N4" },
  { k: "見つける", f: "みつける", m: "Encontrar", g: 2, lv: "N4" },
  { k: "見つかる", f: "みつかる", m: "Ser encontrado", g: 1, lv: "N4" },

  { k: "増える", f: "ふえる", m: "Aumentar (intransitivo)", g: 2, lv: "N4" },
  { k: "増やす", f: "ふやす", m: "Aumentar (transitivo)", g: 1, lv: "N4" },
  { k: "減る", f: "へる", m: "Disminuir", g: 1, lv: "N4" },
  { k: "減らす", f: "へらす", m: "Reducir", g: 1, lv: "N4" },

  { k: "壊れる", f: "こわれる", m: "Romperse", g: 2, lv: "N4" },
  { k: "壊す", f: "こわす", m: "Romper", g: 1, lv: "N4" },
  { k: "汚れる", f: "よごれる", m: "Ensuciarse", g: 2, lv: "N4" },
  { k: "汚す", f: "よごす", m: "Ensuciar", g: 1, lv: "N4" },

  { k: "落ちる", f: "おちる", m: "Caer", g: 2, lv: "N4" },
  { k: "落とす", f: "おとす", m: "Dejar caer", g: 1, lv: "N4" },
  { k: "倒れる", f: "たおれる", m: "Caerse", g: 2, lv: "N4" },
  { k: "倒す", f: "たおす", m: "Derribar", g: 1, lv: "N4" },

  { k: "止まる", f: "とまる", m: "Detenerse", g: 1, lv: "N4" },
  { k: "止める", f: "とめる", m: "Detener", g: 2, lv: "N4" },
  { k: "閉まる", f: "しまる", m: "Cerrarse", g: 1, lv: "N4" },
  { k: "閉める", f: "しめる", m: "Cerrar", g: 2, lv: "N4" },

  { k: "始まる", f: "はじまる", m: "Empezar", g: 1, lv: "N4" },
  { k: "始める", f: "はじめる", m: "Comenzar", g: 2, lv: "N4" },
  { k: "終わる", f: "おわる", m: "Terminar", g: 1, lv: "N4" },

  { k: "通う", f: "かよう", m: "Ir regularmente", g: 1, lv: "N4" },
  { k: "通る", f: "とおる", m: "Pasar por", g: 1, lv: "N4" },
  { k: "通す", f: "とおす", m: "Hacer pasar", g: 1, lv: "N4" },

  { k: "間に合う", f: "まにあう", m: "Llegar a tiempo", g: 1, lv: "N4" },
  { k: "間に合わせる", f: "まにあわせる", m: "Arreglárselas", g: 2, lv: "N4" },

  { k: "変わる", f: "かわる", m: "Cambiar (intransitivo)", g: 1, lv: "N4" },
  { k: "変える", f: "かえる", m: "Cambiar (transitivo)", g: 2, lv: "N4" },

  { k: "決まる", f: "きまる", m: "Decidirse", g: 1, lv: "N4" },
  { k: "決める", f: "きめる", m: "Decidir", g: 2, lv: "N4" },

  { k: "伝わる", f: "つたわる", m: "Transmitirse", g: 1, lv: "N4" },
  { k: "伝える", f: "つたえる", m: "Transmitir", g: 2, lv: "N4" },

  { k: "見える", f: "みえる", m: "Ser visible", g: 2, lv: "N4" },
  { k: "見せる", f: "みせる", m: "Mostrar", g: 2, lv: "N4" },

  { k: "聞こえる", f: "きこえる", m: "Oírse", g: 2, lv: "N4" },
  { k: "聞かせる", f: "きかせる", m: "Hacer escuchar", g: 2, lv: "N4" },

  { k: "慣れる", f: "なれる", m: "Acostumbrarse", g: 2, lv: "N4" },
  { k: "慣らす", f: "ならす", m: "Acostumbrar", g: 1, lv: "N4" },

  { k: "育つ", f: "そだつ", m: "Crecer", g: 1, lv: "N4" },
  { k: "育てる", f: "そだてる", m: "Criar / educar", g: 2, lv: "N4" },

  { k: "運ぶ", f: "はこぶ", m: "Transportar", g: 1, lv: "N4" },
  { k: "運転する", f: "うんてんする", m: "Conducir", g: 3, lv: "N4" },

  { k: "送る", f: "おくる", m: "Enviar", g: 1, lv: "N4" },
  { k: "届ける", f: "とどける", m: "Entregar", g: 2, lv: "N4" },

  { k: "払う", f: "はらう", m: "Pagar", g: 1, lv: "N4" },
  { k: "支払う", f: "しはらう", m: "Pagar", g: 1, lv: "N4" },

  { k: "予約する", f: "よやくする", m: "Reservar", g: 3, lv: "N4" },
  { k: "案内する", f: "あんないする", m: "Guiar", g: 3, lv: "N4" },
  { k: "紹介する", f: "しょうかいする", m: "Presentar", g: 3, lv: "N4" },
  { k: "準備する", f: "じゅんびする", m: "Preparar", g: 3, lv: "N4" },
  { k: "連絡する", f: "れんらくする", m: "Contactar", g: 3, lv: "N4" },
  { k: "説明する", f: "せつめいする", m: "Explicar", g: 3, lv: "N4" },

  { k: "掃除する", f: "そうじする", m: "Limpiar", g: 3, lv: "N4" },
  { k: "洗濯する", f: "せんたくする", m: "Lavar ropa", g: 3, lv: "N4" },
  { k: "練習する", f: "れんしゅうする", m: "Practicar", g: 3, lv: "N4" },
  { k: "運動する", f: "うんどうする", m: "Hacer ejercicio", g: 3, lv: "N4" },
  { k: "勉強する", f: "べんきょうする", m: "Estudiar", g: 3, lv: "N4" },
  // =========================
  // N4 VERBS — BLOQUE 2
  // =========================

  { k: "選ぶ", f: "えらぶ", m: "Elegir", g: 1, lv: "N4" },
  { k: "選べる", f: "えらべる", m: "Poder elegir", g: 2, lv: "N4" },

  { k: "比べる", f: "くらべる", m: "Comparar", g: 2, lv: "N4" },
  { k: "分ける", f: "わける", m: "Dividir", g: 2, lv: "N4" },
  { k: "分かれる", f: "わかれる", m: "Separarse", g: 2, lv: "N4" },

  { k: "続く", f: "つづく", m: "Continuar", g: 1, lv: "N4" },
  { k: "続ける", f: "つづける", m: "Continuar (transitivo)", g: 2, lv: "N4" },

  { k: "決まる", f: "きまる", m: "Decidirse", g: 1, lv: "N4" },
  { k: "決める", f: "きめる", m: "Decidir", g: 2, lv: "N4" },

  { k: "残る", f: "のこる", m: "Quedar / permanecer", g: 1, lv: "N4" },
  { k: "残す", f: "のこす", m: "Dejar / guardar", g: 1, lv: "N4" },

  { k: "間違える", f: "まちがえる", m: "Equivocarse", g: 2, lv: "N4" },
  { k: "間違う", f: "まちがう", m: "Equivocarse", g: 1, lv: "N4" },

  { k: "慌てる", f: "あわてる", m: "Entrar en pánico", g: 2, lv: "N4" },
  { k: "驚く", f: "おどろく", m: "Sorprenderse", g: 1, lv: "N4" },

  { k: "笑う", f: "わらう", m: "Reír", g: 1, lv: "N4" },
  { k: "泣く", f: "なく", m: "Llorar", g: 1, lv: "N4" },
  { k: "怒る", f: "おこる", m: "Enojarse", g: 1, lv: "N4" },

  { k: "疲れる", f: "つかれる", m: "Cansarse", g: 2, lv: "N4" },
  { k: "休む", f: "やすむ", m: "Descansar", g: 1, lv: "N4" },

  { k: "泊まる", f: "とまる", m: "Alojarse", g: 1, lv: "N4" },
  { k: "泊める", f: "とめる", m: "Alojar (a alguien)", g: 2, lv: "N4" },

  { k: "直る", f: "なおる", m: "Arreglarse", g: 1, lv: "N4" },
  { k: "直す", f: "なおす", m: "Arreglar", g: 1, lv: "N4" },

  { k: "治る", f: "なおる", m: "Curarse", g: 1, lv: "N4" },
  { k: "治す", f: "なおす", m: "Curar", g: 1, lv: "N4" },

  { k: "出かける", f: "でかける", m: "Salir", g: 2, lv: "N4" },
  { k: "戻る", f: "もどる", m: "Regresar", g: 1, lv: "N4" },

  { k: "迎える", f: "むかえる", m: "Recibir (a alguien)", g: 2, lv: "N4" },
  { k: "送る", f: "おくる", m: "Despedir / enviar", g: 1, lv: "N4" },

  { k: "準備する", f: "じゅんびする", m: "Preparar", g: 3, lv: "N4" },
  { k: "用意する", f: "よういする", m: "Preparar", g: 3, lv: "N4" },

  { k: "探す", f: "さがす", m: "Buscar", g: 1, lv: "N4" },
  { k: "見つける", f: "みつける", m: "Encontrar", g: 2, lv: "N4" },

  { k: "見つかる", f: "みつかる", m: "Ser encontrado", g: 1, lv: "N4" },

  { k: "乗り換える", f: "のりかえる", m: "Hacer transbordo", g: 2, lv: "N4" },
  { k: "乗り遅れる", f: "のりおくれる", m: "Perder (transporte)", g: 2, lv: "N4" },

  { k: "働く", f: "はたらく", m: "Trabajar", g: 1, lv: "N4" },
  { k: "勤める", f: "つとめる", m: "Trabajar (empleo)", g: 2, lv: "N4" },

  { k: "続く", f: "つづく", m: "Seguir", g: 1, lv: "N4" },

  { k: "変わる", f: "かわる", m: "Cambiar", g: 1, lv: "N4" },
  { k: "変える", f: "かえる", m: "Cambiar algo", g: 2, lv: "N4" },

  { k: "役に立つ", f: "やくにたつ", m: "Ser útil", g: 1, lv: "N4" },

  { k: "間に合う", f: "まにあう", m: "Llegar a tiempo", g: 1, lv: "N4" },

  { k: "拾う", f: "ひろう", m: "Recoger (del suelo)", g: 1, lv: "N4" },
  { k: "捨てる", f: "すてる", m: "Tirar", g: 2, lv: "N4" },

  { k: "焼く", f: "やく", m: "Asar", g: 1, lv: "N4" },
  { k: "焼ける", f: "やける", m: "Quemarse / asarse", g: 2, lv: "N4" },

  { k: "沸く", f: "わく", m: "Hervir", g: 1, lv: "N4" },
  { k: "沸かす", f: "わかす", m: "Hervir algo", g: 1, lv: "N4" },

  { k: "冷える", f: "ひえる", m: "Enfriarse", g: 2, lv: "N4" },
  { k: "冷やす", f: "ひやす", m: "Enfriar", g: 1, lv: "N4" },

  { k: "温まる", f: "あたたまる", m: "Calentarse", g: 1, lv: "N4" },
  { k: "温める", f: "あたためる", m: "Calentar", g: 2, lv: "N4" },

  { k: "乾く", f: "かわく", m: "Secarse", g: 1, lv: "N4" },
  { k: "乾かす", f: "かわかす", m: "Secar", g: 1, lv: "N4" },

  { k: "濡れる", f: "ぬれる", m: "Mojarse", g: 2, lv: "N4" },
  { k: "濡らす", f: "ぬらす", m: "Mojar", g: 1, lv: "N4" }, 
];


const grammarData = [ ...   // =========================
  // N4 GRAMMAR — BLOQUE COMPLETO
  // =========================

  { f: "te", tag: "〜ています", m: "Estar haciendo / estado continuo", lv: "N4", formula: "V-te + います" },
  { f: "nai_stem", tag: "〜なければなりません", m: "Tener que", lv: "N4", formula: "V-nai + ければなりません" },
  { f: "nai_stem", tag: "〜なくてもいい", m: "No hace falta", lv: "N4", formula: "V-nai + なくてもいい" },
  { f: "te", tag: "〜てもいい", m: "Se permite", lv: "N4", formula: "V-te + もいいです" },
  { f: "te", tag: "〜てはいけません", m: "No se permite", lv: "N4", formula: "V-te + はいけません" },

  { f: "te", tag: "〜てから", m: "Después de hacer", lv: "N4", formula: "V-te + から" },
  { f: "ta", tag: "〜たあとで", m: "Después de hacer", lv: "N4", formula: "V-ta + あとで" },
  { f: "dic", tag: "〜前に", m: "Antes de hacer", lv: "N4", formula: "V-dic + 前に" },

  { f: "dic", tag: "〜つもりです", m: "Tener intención de", lv: "N4", formula: "V-dic + つもりです" },
  { f: "dic", tag: "〜予定です", m: "Está planeado", lv: "N4", formula: "V-dic + 予定です" },
  { f: "dic", tag: "〜ことにする", m: "Decidir hacer", lv: "N4", formula: "V-dic + ことにする" },
  { f: "dic", tag: "〜ことになる", m: "Se decide que", lv: "N4", formula: "V-dic + ことになる" },

  { f: "te", tag: "〜てみる", m: "Intentar hacer", lv: "N4", formula: "V-te + みる" },
  { f: "te", tag: "〜てしまう", m: "Terminar de / lamentar", lv: "N4", formula: "V-te + しまう" },
  { f: "te", tag: "〜ておく", m: "Hacer por adelantado", lv: "N4", formula: "V-te + おく" },

  { f: "te", tag: "〜てあげる", m: "Hacer por alguien", lv: "N4", formula: "V-te + あげる" },
  { f: "te", tag: "〜てもらう", m: "Recibir el favor", lv: "N4", formula: "V-te + もらう" },
  { f: "te", tag: "〜てくれる", m: "Alguien hace por mí", lv: "N4", formula: "V-te + くれる" },

  { f: "te", tag: "〜ていただけませんか", m: "¿Podría usted...?", lv: "N4", formula: "V-te + いただけませんか" },
  { f: "te", tag: "〜てくださいますか", m: "¿Podría usted...?", lv: "N4", formula: "V-te + くださいますか" },

  { f: "masu", tag: "〜たいです", m: "Querer hacer", lv: "N4", formula: "V-masu + たいです" },
  { f: "masu", tag: "〜たがっています", m: "Parece que quiere", lv: "N4", formula: "V-masu + たがっています" },

  { f: "Volitivo", tag: "〜ましょう", m: "Vamos a...", lv: "N4", formula: "V-ますstem + ましょう" },
  { f: "Volitivo", tag: "〜ましょうか", m: "¿Hago...?", lv: "N4", formula: "V-ますstem + ましょうか" },
  { f: "Volitivo", tag: "〜（よ）うと思っています", m: "Estoy pensando en", lv: "N4", formula: "V-volitivo + と思っています" },

  { f: "dic", tag: "〜ながら", m: "Mientras...", lv: "N4", formula: "V-masu stem + ながら" },
  { f: "dic", tag: "〜やすい", m: "Fácil de", lv: "N4", formula: "V-masu stem + やすい" },
  { f: "dic", tag: "〜にくい", m: "Difícil de", lv: "N4", formula: "V-masu stem + にくい" },

  { f: "dic", tag: "〜始める", m: "Empezar a", lv: "N4", formula: "V-masu stem + 始める" },
  { f: "dic", tag: "〜終わる", m: "Terminar de", lv: "N4", formula: "V-masu stem + 終わる" },
  { f: "dic", tag: "〜続ける", m: "Continuar haciendo", lv: "N4", formula: "V-masu stem + 続ける" },

  { f: "ta", tag: "〜たほうがいい", m: "Será mejor que", lv: "N4", formula: "V-ta + ほうがいい" },
  { f: "nai_stem", tag: "〜ないほうがいい", m: "Mejor no", lv: "N4", formula: "V-nai + ないほうがいい" },

  { f: "Potencial", tag: "可能形", m: "Forma potencial", lv: "N4", formula: "V-potencial" },
  { f: "Pasiva", tag: "受身形", m: "Forma pasiva", lv: "N4", formula: "V-pasiva" },
  { f: "Volitivo", tag: "意向形", m: "Forma volitiva", lv: "N4", formula: "V-volitivo" },

  { f: "dic", tag: "〜と思います", m: "Creo que", lv: "N4", formula: "Frase + と思います" },
  { f: "ta", tag: "〜たり〜たりする", m: "Hacer cosas como", lv: "N4", formula: "V-ta + り、V-ta + りする" },
  { f: "dic", tag: "〜し", m: "Y además", lv: "N4", formula: "Frase + し" },

  { f: "dic", tag: "〜そうです", m: "Parece que", lv: "N4", formula: "V-masu stem + そうです" },
  { f: "dic", tag: "〜ようです", m: "Parece / da la impresión", lv: "N4", formula: "Frase + ようです" },
  { f: "dic", tag: "〜らしい", m: "Dicen que / al parecer", lv: "N4", formula: "Frase + らしい" },

  { f: "dic", tag: "〜なら", m: "Si es que", lv: "N4", formula: "Frase + なら" },
  { f: "dic", tag: "〜ば", m: "Si (condicional)", lv: "N4", formula: "Forma ば" },
  { f: "te", tag: "〜ても", m: "Aunque", lv: "N4", formula: "V-te + も" },
];