// ═══════════════════════════════════════════════
//  KIYO'S MIND — data.js
//  Formas de gramática usadas en el motor:
//    "te"        → forma て  (tabete, kite…)
//    "ta"        → forma た  (tabeta, kita…)
//    "nai_stem"  → raíz ない (tabe, ko, iwa…)
//    "masu"      → raíz ます (tabe, ki, hanashi…)
//    "Volitivo"  → forma volitiva (tabeyou, ikou…)
//    "Potencial" → forma potencial (taberareru, keru…)
//    "Pasiva"    → forma pasiva (taberareru, kareru…)
//    "dic"       → forma diccionario (el verbo tal cual, f)
// ═══════════════════════════════════════════════

const verbData = [
  // ── N4 ──────────────────────────────────────
  { k:"開く",        f:"あく",          m:"Abrirse (intrans.)",           g:1, lv:"N4" },
  { k:"開ける",      f:"あける",        m:"Abrir (trans.)",               g:2, lv:"N4" },
  { k:"集まる",      f:"あつまる",      m:"Reunirse",                     g:1, lv:"N4" },
  { k:"集める",      f:"あつめる",      m:"Reunir",                       g:2, lv:"N4" },
  { k:"謝る",        f:"あやまる",      m:"Disculparse",                  g:1, lv:"N4" },
  { k:"生きる",      f:"いきる",        m:"Vivir",                        g:2, lv:"N4" },
  { k:"急ぐ",        f:"いそぐ",        m:"Apresurarse",                  g:1, lv:"N4" },
  { k:"祈る",        f:"いのる",        m:"Rezar",                        g:1, lv:"N4" },
  { k:"植える",      f:"うえる",        m:"Plantar",                      g:2, lv:"N4" },
  { k:"受ける",      f:"うける",        m:"Recibir / Tomar (examen)",     g:2, lv:"N4" },
  { k:"動く",        f:"うごく",        m:"Moverse",                      g:1, lv:"N4" },
  { k:"動かす",      f:"うごかす",      m:"Mover algo",                   g:1, lv:"N4" },
  { k:"打つ",        f:"うつ",          m:"Golpear / Teclear",            g:1, lv:"N4" },
  { k:"写す",        f:"うつす",        m:"Copiar / Fotografiar",         g:1, lv:"N4" },
  { k:"選ぶ",        f:"えらぶ",        m:"Elegir",                       g:1, lv:"N4" },
  { k:"起きる",      f:"おきる",        m:"Despertarse / Ocurrir",        g:2, lv:"N4" },
  { k:"送る",        f:"おくる",        m:"Enviar / Acompañar",           g:1, lv:"N4" },
  { k:"怒る",        f:"おこる",        m:"Enojarse",                     g:1, lv:"N4" },
  { k:"落ちる",      f:"おちる",        m:"Caer",                         g:2, lv:"N4" },
  { k:"落とす",      f:"おとす",        m:"Dejar caer",                   g:1, lv:"N4" },
  { k:"踊る",        f:"おどる",        m:"Bailar",                       g:1, lv:"N4" },
  { k:"驚く",        f:"おどろく",      m:"Sorprenderse",                 g:1, lv:"N4" },
  { k:"思い出す",    f:"おもいだす",    m:"Recordar",                     g:1, lv:"N4" },
  { k:"思う",        f:"おもう",        m:"Pensar / Creer",               g:1, lv:"N4" },
  { k:"折る",        f:"おる",          m:"Doblar / Romper",              g:1, lv:"N4" },
  { k:"折れる",      f:"おれる",        m:"Doblarse / Romperse",          g:2, lv:"N4" },
  { k:"下りる",      f:"おりる",        m:"Bajar (de un lugar)",          g:2, lv:"N4" },
  { k:"降る",        f:"ふる",          m:"Llover / Nevar",               g:1, lv:"N4" },
  { k:"飾る",        f:"かざる",        m:"Decorar",                      g:1, lv:"N4" },
  { k:"片付ける",    f:"かたづける",    m:"Ordenar / Limpiar",            g:2, lv:"N4" },
  { k:"勝つ",        f:"かつ",          m:"Ganar",                        g:1, lv:"N4" },
  { k:"変える",      f:"かえる",        m:"Cambiar algo",                 g:2, lv:"N4" },
  { k:"変わる",      f:"かわる",        m:"Cambiar (intrans.)",           g:1, lv:"N4" },
  { k:"通う",        f:"かよう",        m:"Frecuentar / Ir y venir",      g:1, lv:"N4" },
  { k:"乾く",        f:"かわく",        m:"Secarse",                      g:1, lv:"N4" },
  { k:"乾かす",      f:"かわかす",      m:"Secar algo",                   g:1, lv:"N4" },
  { k:"考える",      f:"かんがえる",    m:"Pensar / Considerar",          g:2, lv:"N4" },
  { k:"頑張る",      f:"がんばる",      m:"Esforzarse",                   g:1, lv:"N4" },
  { k:"聞く",        f:"きく",          m:"Escuchar / Preguntar",         g:1, lv:"N4" },
  { k:"聞こえる",    f:"きこえる",      m:"Oírse / Ser audible",          g:2, lv:"N4" },
  { k:"決まる",      f:"きまる",        m:"Decidirse",                    g:1, lv:"N4" },
  { k:"決める",      f:"きめる",        m:"Decidir",                      g:2, lv:"N4" },
  { k:"切る",        f:"きる",          m:"Cortar",                       g:1, lv:"N4" },
  { k:"着る",        f:"きる",          m:"Vestirse (torso)",             g:2, lv:"N4" },
  { k:"比べる",      f:"くらべる",      m:"Comparar",                     g:2, lv:"N4" },
  { k:"暮らす",      f:"くらす",        m:"Vivir / Pasar el tiempo",      g:1, lv:"N4" },
  { k:"繰り返す",    f:"くりかえす",    m:"Repetir",                      g:1, lv:"N4" },
  { k:"消える",      f:"きえる",        m:"Apagarse / Desaparecer",       g:2, lv:"N4" },
  { k:"消す",        f:"けす",          m:"Apagar / Borrar",              g:1, lv:"N4" },
  { k:"答える",      f:"こたえる",      m:"Responder",                    g:2, lv:"N4" },
  { k:"困る",        f:"こまる",        m:"Estar en apuros",              g:1, lv:"N4" },
  { k:"混む",        f:"こむ",          m:"Llenarse / Estar abarrotado",  g:1, lv:"N4" },
  { k:"壊れる",      f:"こわれる",      m:"Romperse",                     g:2, lv:"N4" },
  { k:"壊す",        f:"こわす",        m:"Romper algo",                  g:1, lv:"N4" },
  { k:"探す",        f:"さがす",        m:"Buscar",                       g:1, lv:"N4" },
  { k:"下がる",      f:"さがる",        m:"Bajar / Retroceder",           g:1, lv:"N4" },
  { k:"下げる",      f:"さげる",        m:"Bajar algo",                   g:2, lv:"N4" },
  { k:"騒ぐ",        f:"さわぐ",        m:"Hacer ruido",                  g:1, lv:"N4" },
  { k:"触る",        f:"さわる",        m:"Tocar",                        g:1, lv:"N4" },
  { k:"叱る",        f:"しかる",        m:"Regañar",                      g:1, lv:"N4" },
  { k:"調べる",      f:"しらべる",      m:"Investigar / Revisar",         g:2, lv:"N4" },
  { k:"信じる",      f:"しんじる",      m:"Creer / Confiar",              g:2, lv:"N4" },
  { k:"進む",        f:"すすむ",        m:"Avanzar / Progresar",          g:1, lv:"N4" },
  { k:"捨てる",      f:"すてる",        m:"Tirar / Desechar",             g:2, lv:"N4" },
  { k:"座る",        f:"すわる",        m:"Sentarse",                     g:1, lv:"N4" },
  { k:"育つ",        f:"そだつ",        m:"Crecer / Criarse",             g:1, lv:"N4" },
  { k:"育てる",      f:"そだてる",      m:"Criar / Educar",               g:2, lv:"N4" },
  { k:"倒れる",      f:"たおれる",      m:"Caerse / Desmayarse",          g:2, lv:"N4" },
  { k:"倒す",        f:"たおす",        m:"Derribar algo",                g:1, lv:"N4" },
  { k:"出す",        f:"だす",          m:"Sacar / Enviar",               g:1, lv:"N4" },
  { k:"訪ねる",      f:"たずねる",      m:"Visitar / Preguntar",          g:2, lv:"N4" },
  { k:"建てる",      f:"たてる",        m:"Construir",                    g:2, lv:"N4" },
  { k:"足りる",      f:"たりる",        m:"Ser suficiente",               g:2, lv:"N4" },
  { k:"食べる",      f:"たべる",        m:"Comer",                        g:2, lv:"N4" },
  { k:"試す",        f:"ためす",        m:"Probar / Intentar",            g:1, lv:"N4" },
  { k:"楽しむ",      f:"たのしむ",      m:"Disfrutar",                    g:1, lv:"N4" },
  { k:"頼む",        f:"たのむ",        m:"Pedir / Solicitar",            g:1, lv:"N4" },
  { k:"違う",        f:"ちがう",        m:"Ser diferente / Equivocarse",  g:1, lv:"N4" },
  { k:"使う",        f:"つかう",        m:"Usar",                         g:1, lv:"N4" },
  { k:"疲れる",      f:"つかれる",      m:"Cansarse",                     g:2, lv:"N4" },
  { k:"着く",        f:"つく",          m:"Llegar",                       g:1, lv:"N4" },
  { k:"付ける",      f:"つける",        m:"Encender / Pegar / Adjuntar",  g:2, lv:"N4" },
  { k:"伝える",      f:"つたえる",      m:"Comunicar / Transmitir",       g:2, lv:"N4" },
  { k:"続く",        f:"つづく",        m:"Continuar (intrans.)",         g:1, lv:"N4" },
  { k:"続ける",      f:"つづける",      m:"Continuar algo (trans.)",      g:2, lv:"N4" },
  { k:"包む",        f:"つつむ",        m:"Envolver / Empacar",           g:1, lv:"N4" },
  { k:"手伝う",      f:"てつだう",      m:"Ayudar",                       g:1, lv:"N4" },
  { k:"出掛ける",    f:"でかける",      m:"Salir (de casa)",              g:2, lv:"N4" },
  { k:"通る",        f:"とおる",        m:"Pasar por / Atravesar",        g:1, lv:"N4" },
  { k:"届く",        f:"とどく",        m:"Llegar / Alcanzar",            g:1, lv:"N4" },
  { k:"届ける",      f:"とどける",      m:"Entregar / Notificar",         g:2, lv:"N4" },
  { k:"泊まる",      f:"とまる",        m:"Hospedarse",                   g:1, lv:"N4" },
  { k:"止まる",      f:"とまる",        m:"Detenerse",                    g:1, lv:"N4" },
  { k:"止める",      f:"とめる",        m:"Detener algo",                 g:2, lv:"N4" },
  { k:"取る",        f:"とる",          m:"Tomar / Coger",                g:1, lv:"N4" },
  { k:"撮る",        f:"とる",          m:"Tomar (fotos)",                g:1, lv:"N4" },
  { k:"直る",        f:"なおる",        m:"Arreglarse / Repararse",       g:1, lv:"N4" },
  { k:"直す",        f:"なおす",        m:"Arreglar / Reparar",           g:1, lv:"N4" },
  { k:"亡くなる",    f:"なくなる",      m:"Fallecer",                     g:1, lv:"N4" },
  { k:"無くす",      f:"なくす",        m:"Perder algo",                  g:1, lv:"N4" },
  { k:"投げる",      f:"なげる",        m:"Lanzar / Tirar",               g:2, lv:"N4" },
  { k:"慣れる",      f:"なれる",        m:"Acostumbrarse",                g:2, lv:"N4" },
  { k:"並ぶ",        f:"ならぶ",        m:"Hacer fila / Alinearse",       g:1, lv:"N4" },
  { k:"並べる",      f:"ならべる",      m:"Alinear / Poner en fila",      g:2, lv:"N4" },
  { k:"なる",        f:"なる",          m:"Convertirse / Llegar a ser",   g:1, lv:"N4" },
  { k:"脱ぐ",        f:"ぬぐ",          m:"Quitarse (ropa)",              g:1, lv:"N4" },
  { k:"塗る",        f:"ぬる",          m:"Pintar / Untar",               g:1, lv:"N4" },
  { k:"濡れる",      f:"ぬれる",        m:"Mojarse",                      g:2, lv:"N4" },
  { k:"寝る",        f:"ねる",          m:"Dormir / Acostarse",           g:2, lv:"N4" },
  { k:"登る",        f:"のぼる",        m:"Escalar / Subir",              g:1, lv:"N4" },
  { k:"残る",        f:"のこる",        m:"Quedar / Sobrar",              g:1, lv:"N4" },
  { k:"乗る",        f:"のる",          m:"Subir a un transporte",        g:1, lv:"N4" },
  { k:"運ぶ",        f:"はこぶ",        m:"Transportar / Cargar",         g:1, lv:"N4" },
  { k:"始まる",      f:"はじまる",      m:"Empezar (intrans.)",           g:1, lv:"N4" },
  { k:"始める",      f:"はじめる",      m:"Empezar algo (trans.)",        g:2, lv:"N4" },
  { k:"働く",        f:"はたらく",      m:"Trabajar",                     g:1, lv:"N4" },
  { k:"払う",        f:"はらう",        m:"Pagar",                        g:1, lv:"N4" },
  { k:"晴れる",      f:"はれる",        m:"Despejarse (clima)",           g:2, lv:"N4" },
  { k:"冷える",      f:"ひえる",        m:"Enfriarse",                    g:2, lv:"N4" },
  { k:"冷やす",      f:"ひやす",        m:"Enfriar algo",                 g:1, lv:"N4" },
  { k:"引く",        f:"ひく",          m:"Tirar / Jalar",                g:1, lv:"N4" },
  { k:"引っ越す",    f:"ひっこす",      m:"Mudarse",                      g:1, lv:"N4" },
  { k:"拾う",        f:"ひろう",        m:"Recoger / Encontrar",          g:1, lv:"N4" },
  { k:"増える",      f:"ふえる",        m:"Aumentar (intrans.)",          g:2, lv:"N4" },
  { k:"増やす",      f:"ふやす",        m:"Aumentar algo (trans.)",       g:1, lv:"N4" },
  { k:"太る",        f:"ふとる",        m:"Engordar",                     g:1, lv:"N4" },
  { k:"踏む",        f:"ふむ",          m:"Pisar",                        g:1, lv:"N4" },
  { k:"褒める",      f:"ほめる",        m:"Alabar / Elogiar",             g:2, lv:"N4" },
  { k:"負ける",      f:"まける",        m:"Perder (juego/batalla)",       g:2, lv:"N4" },
  { k:"間違える",    f:"まちがえる",    m:"Equivocarse",                  g:2, lv:"N4" },
  { k:"間に合う",    f:"まにあう",      m:"Llegar a tiempo",              g:1, lv:"N4" },
  { k:"守る",        f:"まもる",        m:"Proteger / Cumplir",           g:1, lv:"N4" },
  { k:"迷う",        f:"まよう",        m:"Perderse / Estar indeciso",    g:1, lv:"N4" },
  { k:"見つける",    f:"みつける",      m:"Encontrar",                    g:2, lv:"N4" },
  { k:"見せる",      f:"みせる",        m:"Mostrar",                      g:2, lv:"N4" },
  { k:"見る",        f:"みる",          m:"Ver / Mirar",                  g:2, lv:"N4" },
  { k:"向かう",      f:"むかう",        m:"Dirigirse a",                  g:1, lv:"N4" },
  { k:"迎える",      f:"むかえる",      m:"Recibir / Ir a buscar",        g:2, lv:"N4" },
  { k:"戻る",        f:"もどる",        m:"Regresar / Volver",            g:1, lv:"N4" },
  { k:"戻す",        f:"もどす",        m:"Devolver algo",                g:1, lv:"N4" },
  { k:"貰う",        f:"もらう",        m:"Recibir",                      g:1, lv:"N4" },
  { k:"焼く",        f:"やく",          m:"Asar / Hornear",               g:1, lv:"N4" },
  { k:"痩せる",      f:"やせる",        m:"Adelgazar",                    g:2, lv:"N4" },
  { k:"止める",      f:"やめる",        m:"Dejar / Renunciar",            g:2, lv:"N4" },
  { k:"汚れる",      f:"よごれる",      m:"Ensuciarse",                   g:2, lv:"N4" },
  { k:"汚す",        f:"よごす",        m:"Ensuciar algo",                g:1, lv:"N4" },
  { k:"寄る",        f:"よる",          m:"Acercarse / Pasar por",        g:1, lv:"N4" },
  { k:"喜ぶ",        f:"よろこぶ",      m:"Alegrarse",                    g:1, lv:"N4" },
  { k:"沸く",        f:"わく",          m:"Hervir",                       g:1, lv:"N4" },
  { k:"分かる",      f:"わかる",        m:"Entender",                     g:1, lv:"N4" },
  { k:"別れる",      f:"わかれる",      m:"Separarse / Dividirse",        g:2, lv:"N4" },
  { k:"忘れる",      f:"わすれる",      m:"Olvidar",                      g:2, lv:"N4" },
  { k:"笑う",        f:"わらう",        m:"Reír",                         g:1, lv:"N4" },
  // suru verbs N4
  { k:"安心する",    f:"あんしんする",  m:"Tranquilizarse",               g:3, lv:"N4" },
  { k:"案内する",    f:"あんないする",  m:"Guiar / Mostrar el camino",    g:3, lv:"N4" },
  { k:"運転する",    f:"うんてんする",  m:"Conducir",                     g:3, lv:"N4" },
  { k:"運動する",    f:"うんどうする",  m:"Hacer ejercicio",              g:3, lv:"N4" },
  { k:"感謝する",    f:"かんしゃする",  m:"Agradecer",                    g:3, lv:"N4" },
  { k:"故障する",    f:"こしょうする",  m:"Averiarse / Descomponerse",    g:3, lv:"N4" },
  { k:"紹介する",    f:"しょうかいする",m:"Presentar a alguien",          g:3, lv:"N4" },
  { k:"招待する",    f:"しょうたいする",m:"Invitar",                      g:3, lv:"N4" },
  { k:"食事する",    f:"しょくじする",  m:"Comer / Almorzar",             g:3, lv:"N4" },
  { k:"心配する",    f:"しんぱいする",  m:"Preocuparse",                  g:3, lv:"N4" },
  { k:"説明する",    f:"せつめいする",  m:"Explicar",                     g:3, lv:"N4" },
  { k:"失敗する",    f:"しっぱいする",  m:"Fracasar / Fallar",            g:3, lv:"N4" },
  { k:"相談する",    f:"そうだんする",  m:"Consultar",                    g:3, lv:"N4" },
  { k:"注意する",    f:"ちゅういする",  m:"Tener cuidado / Advertir",     g:3, lv:"N4" },
  { k:"注文する",    f:"ちゅうもんする",m:"Pedir / Hacer un pedido",      g:3, lv:"N4" },
  { k:"遅刻する",    f:"ちこくする",    m:"Llegar tarde",                 g:3, lv:"N4" },
  { k:"貯金する",    f:"ちょきんする",  m:"Ahorrar dinero",               g:3, lv:"N4" },
  { k:"用意する",    f:"よういする",    m:"Preparar",                     g:3, lv:"N4" },
  { k:"予約する",    f:"よやくする",    m:"Reservar",                     g:3, lv:"N4" },
  { k:"約束する",    f:"やくそくする",  m:"Prometer",                     g:3, lv:"N4" },
  { k:"練習する",    f:"れんしゅうする",m:"Practicar",                    g:3, lv:"N4" },
  { k:"連絡する",    f:"れんらくする",  m:"Contactar",                    g:3, lv:"N4" },
  { k:"留学する",    f:"りゅうがくする",m:"Estudiar en el extranjero",    g:3, lv:"N4" },
  { k:"利用する",    f:"りようする",    m:"Utilizar / Aprovechar",        g:3, lv:"N4" },
  { k:"合格する",    f:"ごうかくする",  m:"Aprobar (un examen)",          g:3, lv:"N4" },
  { k:"復習する",    f:"ふくしゅうする",m:"Repasar",                      g:3, lv:"N4" },
  { k:"経験する",    f:"けいけんする",  m:"Experimentar",                 g:3, lv:"N4" },
  { k:"計画する",    f:"けいかくする",  m:"Planear",                      g:3, lv:"N4" },
  { k:"喧嘩する",    f:"けんかする",    m:"Pelear / Discutir",            g:3, lv:"N4" },
  { k:"散歩する",    f:"さんぽする",    m:"Pasear",                       g:3, lv:"N4" },
  { k:"出席する",    f:"しゅっせきする",m:"Asistir",                      g:3, lv:"N4" },
  { k:"出発する",    f:"しゅっぱつする",m:"Partir / Salir (viaje)",       g:3, lv:"N4" },
  { k:"準備する",    f:"じゅんびする",  m:"Preparar",                     g:3, lv:"N4" },
  { k:"質問する",    f:"しつもんする",  m:"Preguntar",                    g:3, lv:"N4" },
  { k:"掃除する",    f:"そうじする",    m:"Limpiar",                      g:3, lv:"N4" },
  { k:"洗濯する",    f:"せんたくする",  m:"Lavar la ropa",                g:3, lv:"N4" },
  { k:"到着する",    f:"とうちゃくする",m:"Llegar",                       g:3, lv:"N4" },
  { k:"返事する",    f:"へんじする",    m:"Responder / Contestar",        g:3, lv:"N4" },
  // くる・する
  { k:"くる",        f:"くる",          m:"Venir",                        g:3, lv:"N4" },
  { k:"する",        f:"する",          m:"Hacer",                        g:3, lv:"N4" },
];

// ═══════════════════════════════════════════════
//  GRAMMAR DATA
//  IMPORTANTE — campo "f" indica qué forma del
//  verbo necesita esta gramática:
//    te | ta | nai_stem | masu | Volitivo | Potencial | dic
//  Sólo se incluyen gramáticas donde el motor
//  puede generar la forma automáticamente.
// ═══════════════════════════════════════════════
const grammarData = [
  // ── Obligación / Permiso ──────────────────
  { f:"nai_stem", tag:"〜なければなりません",    m:"Tener que (obligación formal)",        lv:"N4", formula:"V-ない(raíz) + ければなりません",          hint:"Usa la raíz ない. Ej: 食べる → 食べ + なければなりません" },
  { f:"nai_stem", tag:"〜なくてもいいです",       m:"No es necesario",                      lv:"N4", formula:"V-ない(raíz) + くてもいいです",             hint:"Raíz ない + くてもいいです. Ej: 食べ + なくてもいいです" },
  { f:"te",       tag:"〜てはいけません",         m:"Prohibido / No se permite",            lv:"N4", formula:"V-て + はいけません",                       hint:"Forma て del verbo. Ej: 食べて + はいけません" },
  { f:"te",       tag:"〜てもいいです",           m:"Se permite / Está bien que...",        lv:"N4", formula:"V-て + もいいです",                          hint:"Forma て del verbo. Ej: 食べて + もいいです" },

  // ── Estado y acciones ────────────────────
  { f:"te",       tag:"〜ています",              m:"Estar haciendo / Estado resultante",   lv:"N4", formula:"V-て + います",                             hint:"Forma て. Ej: 食べて → 食べています (comiendo)" },
  { f:"te",       tag:"〜てあります",            m:"Algo está hecho con intención",        lv:"N4", formula:"V-て + あります",                           hint:"Forma て. Se usa con verbos transitivos. Ej: 書いてあります" },
  { f:"te",       tag:"〜ておきます",            m:"Hacer algo con antelación (preparar)", lv:"N4", formula:"V-て + おきます",                           hint:"Forma て. Ej: 買っておきます (compro con anticipación)" },
  { f:"te",       tag:"〜てしまいます",          m:"Hacer completamente / lamentablemente",lv:"N4", formula:"V-て + しまいます",                         hint:"Forma て. Ej: 食べてしまいました (me lo comí todo…)" },
  { f:"te",       tag:"〜てくる",               m:"Acción que se acerca al presente",      lv:"N4", formula:"V-て + くる",                               hint:"Forma て. Ej: 増えてきた (ha ido aumentando)" },
  { f:"te",       tag:"〜ていく",               m:"Acción que se aleja hacia el futuro",   lv:"N4", formula:"V-て + いく",                               hint:"Forma て. Ej: 減っていく (irá disminuyendo)" },

  // ── Experiencia e intentos ───────────────
  { f:"ta",       tag:"〜たことがあります",      m:"Haber tenido la experiencia de",       lv:"N4", formula:"V-た + ことがあります",                     hint:"Forma た. Ej: 行ったことがあります (he ido alguna vez)" },
  { f:"te",       tag:"〜てみます",             m:"Intentar hacer algo (ver qué pasa)",    lv:"N4", formula:"V-て + みます",                             hint:"Forma て. Ej: 食べてみます (voy a intentar comerlo)" },

  // ── Recomendaciones ──────────────────────
  { f:"ta",       tag:"〜たほうがいいです",      m:"Es mejor que... (consejo)",            lv:"N4", formula:"V-た + ほうがいいです",                     hint:"Forma た. Ej: 早く寝たほうがいいです" },
  { f:"nai_stem", tag:"〜ないほうがいいです",    m:"Es mejor que no...",                   lv:"N4", formula:"V-ない(raíz) + ないほうがいいです",          hint:"Raíz ない + ないほうがいいです. Ej: 食べないほうがいいです" },

  // ── Deseos ───────────────────────────────
  { f:"masu",     tag:"〜たいです",             m:"Querer hacer algo",                     lv:"N4", formula:"V-ます(raíz) + たいです",                   hint:"Raíz ます. Ej: 食べ → 食べたいです (quiero comer)" },
  { f:"Volitivo", tag:"〜（よ）うと思っています", m:"Estoy pensando en... (intención)",    lv:"N4", formula:"V-volitivo + と思っています",                hint:"Forma volitiva. Ej: 行こうと思っています" },

  // ── Capacidad ────────────────────────────
  { f:"Potencial", tag:"〜（られ）る (Potencial)",m:"Poder hacer algo",                   lv:"N4", formula:"V-potencial",                               hint:"Forma potencial. Ej: 食べる → 食べられる, 書く → 書ける" },

  // ── Condicionales ────────────────────────
  { f:"ta",       tag:"〜たら",                 m:"Si / Cuando algo ocurre (cond. real)",  lv:"N4", formula:"V-た + ら",                                hint:"Forma た + ら. Ej: 家に着いたら、電話します" },

  // ── Dar y recibir ────────────────────────
  { f:"te",       tag:"〜てあげる",            m:"Hacer un favor a alguien",              lv:"N4", formula:"V-て + あげる",                             hint:"Forma て. Ej: 教えてあげる (le enseño / le hago el favor)" },
  { f:"te",       tag:"〜てくれる",            m:"Alguien me hace un favor",              lv:"N4", formula:"V-て + くれる",                             hint:"Forma て. Ej: 手伝ってくれた (me ayudó)" },
  { f:"te",       tag:"〜てもらう",            m:"Recibir un favor de alguien",           lv:"N4", formula:"V-て + もらう",                             hint:"Forma て. Ej: 直してもらった (me lo arregló)" },

  // ── Propósito ────────────────────────────
  { f:"masu",     tag:"〜に行く",              m:"Ir a hacer algo",                       lv:"N4", formula:"V-ます(raíz) + に行く",                     hint:"Raíz ます. Ej: 食べ → 食べに行く (ir a comer)" },

  // ── Tiempo y secuencia ───────────────────
  { f:"ta",       tag:"〜たあとで",            m:"Después de hacer...",                   lv:"N4", formula:"V-た + あとで",                             hint:"Forma た. Ej: 食べたあとで、歯を磨きます" },
  { f:"te",       tag:"〜てから",              m:"Después de / Desde que hice...",        lv:"N4", formula:"V-て + から",                               hint:"Forma て. Ej: 食べてから、出かけます" },

  // ── Simultáneo / Manera ──────────────────
  { f:"masu",     tag:"〜ながら",              m:"Hacer algo mientras se hace otra cosa", lv:"N4", formula:"V-ます(raíz) + ながら",                     hint:"Raíz ます. Ej: 音楽を聞き + ながら勉強する" },
  { f:"masu",     tag:"〜すぎる",              m:"Hacer algo en exceso",                  lv:"N4", formula:"V-ます(raíz) + すぎる",                     hint:"Raíz ます. Ej: 食べ + すぎる (comer demasiado)" },
  { f:"masu",     tag:"〜やすい",              m:"Fácil de hacer",                        lv:"N4", formula:"V-ます(raíz) + やすい",                     hint:"Raíz ます. Ej: 使い + やすい (fácil de usar)" },
  { f:"masu",     tag:"〜にくい",              m:"Difícil de hacer",                      lv:"N4", formula:"V-ます(raíz) + にくい",                     hint:"Raíz ます. Ej: 使い + にくい (difícil de usar)" },
  { f:"masu",     tag:"〜方（かた）",           m:"Manera de hacer algo",                 lv:"N4", formula:"V-ます(raíz) + 方",                         hint:"Raíz ます. Ej: 食べ + 方 (manera de comer)" },
  { f:"masu",     tag:"〜だす",               m:"Empezar a (de repente)",                 lv:"N4", formula:"V-ます(raíz) + だす",                       hint:"Raíz ます. Ej: 走り + だす (echarse a correr de repente)" },
  { f:"masu",     tag:"〜おわる",             m:"Terminar de hacer",                      lv:"N4", formula:"V-ます(raíz) + おわる",                     hint:"Raíz ます. Ej: 食べ + おわる (terminar de comer)" },

  // ── Cambios de estado ────────────────────
  { f:"dic",      tag:"〜ようになる",          m:"Llegar a ser capaz de / Empezar a",     lv:"N4", formula:"V-dic + ようになる",                        hint:"Forma diccionario. Ej: 話せる + ようになった" },
  { f:"dic",      tag:"〜ようにする",          m:"Intentar / Asegurarse de hacer",        lv:"N4", formula:"V-dic + ようにする",                        hint:"Forma diccionario. Ej: 毎日運動する + ようにする" },

  // ── Voz pasiva y causativa ───────────────
  { f:"Pasiva",   tag:"〜られる (Pasiva)",     m:"Ser hecho por alguien (Voz Pasiva)",    lv:"N4", formula:"V-pasivo",                                  hint:"Forma pasiva. Ej: 食べる → 食べられる, 書く → 書かれる" },
  { f:"te",       tag:"〜てもらう (Pasiva fav.)",m:"Que alguien haga algo por mí",       lv:"N4", formula:"V-て + もらう",                             hint:"Forma て. Ej: 直してもらう (recibir el favor de que lo arreglen)" },

  // ── Limitación / Énfasis ─────────────────
  { f:"ta",       tag:"〜たばかり",            m:"Acabar de hacer algo",                  lv:"N4", formula:"V-た + ばかり",                             hint:"Forma た. Ej: 食べたばかりです (acabo de comer)" },
];

// ═══════════════════════════════════════════════
//  STAR DATA — Ejercicios estilo JLPT
//  Formato: la ★ indica dónde va la respuesta.
//  "options" tiene 4 opciones; "answer" es la correcta.
// ═══════════════════════════════════════════════
const starData = [
  // ── Obligación / Permiso ──────────────────────────────────────────
  {
    lv:"N4", grammar:"〜なければなりません",
    sentence:"毎日 薬を ___★___ なりません。",
    options:["飲まなければ","飲んでも","飲みながら","飲んだら"],
    answer:"飲まなければ",
    explanation:"V-ない(raíz) + ければなりません → 飲む → 飲ま + なければなりません"
  },
  {
    lv:"N4", grammar:"〜てもいいです",
    sentence:"ここで 写真を ___★___ いいですか？",
    options:["撮っても","撮るなら","撮ったら","撮ることが"],
    answer:"撮っても",
    explanation:"V-て + もいいです → 撮る → 撮って + もいいです"
  },
  {
    lv:"N4", grammar:"〜てはいけません",
    sentence:"図書館で 話し___★___。",
    options:["てはいけません","てもいいです","ながら","てみます"],
    answer:"てはいけません",
    explanation:"V-て + はいけません → 話す → 話して + はいけません"
  },
  {
    lv:"N4", grammar:"〜なくてもいいです",
    sentence:"今日は 早く 来___★___。",
    options:["なくてもいいです","なければなりません","てはいけません","てもいいです"],
    answer:"なくてもいいです",
    explanation:"V-ない(raíz) + くてもいいです → 来る → こ + なくてもいいです"
  },

  // ── Experiencia ───────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜たことがあります",
    sentence:"富士山に ___★___ ことがあります。",
    options:["登った","登って","登る","登り"],
    answer:"登った",
    explanation:"V-た + ことがあります → 登る → 登った + ことがあります"
  },
  {
    lv:"N4", grammar:"〜たことがあります",
    sentence:"すしを 食べ___★___ ことがありますか？",
    options:["た","て","る","ながら"],
    answer:"た",
    explanation:"食べる → 食べた + ことがあります"
  },

  // ── Intento ────────────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜てみます",
    sentence:"この 料理を 一度 食べ___★___。",
    options:["てみます","てあります","ておきます","てしまいます"],
    answer:"てみます",
    explanation:"V-て + みます → 食べる → 食べて + みます (voy a intentar comerlo)"
  },
  {
    lv:"N4", grammar:"〜てみます",
    sentence:"新しい アプリを 使っ___★___。",
    options:["てみます","てもいいです","てはいけません","ておきます"],
    answer:"てみます",
    explanation:"使う → 使って + みます"
  },

  // ── Estado resultante ─────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜てあります",
    sentence:"ドアに 名前が 書い___★___。",
    options:["てあります","てみます","ておきます","てしまいます"],
    answer:"てあります",
    explanation:"V-て + あります → 書く → 書いて + あります (está escrito con intención)"
  },
  {
    lv:"N4", grammar:"〜ておきます",
    sentence:"パーティーの 前に 食べ物を 買っ___★___。",
    options:["ておきます","てみます","てあります","てしまいます"],
    answer:"ておきます",
    explanation:"V-て + おきます → 買う → 買って + おきます (compro de antemano)"
  },
  {
    lv:"N4", grammar:"〜てしまいます",
    sentence:"宿題を 忘れ___★___。",
    options:["てしまいました","てみました","てあります","ておきます"],
    answer:"てしまいました",
    explanation:"V-て + しまいます → 忘れる → 忘れて + しまいました (lo olvidé por completo, lamentablemente)"
  },

  // ── Secuencia ─────────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜てから",
    sentence:"シャワーを 浴び___★___ 寝ます。",
    options:["てから","たあとで","たら","ながら"],
    answer:"てから",
    explanation:"V-て + から → 浴びる → 浴びて + から (después de ducharse)"
  },
  {
    lv:"N4", grammar:"〜たあとで",
    sentence:"ご飯を 食べ___★___ 歯を 磨きます。",
    options:["たあとで","てから","ながら","たら"],
    answer:"たあとで",
    explanation:"V-た + あとで → 食べる → 食べた + あとで"
  },

  // ── Condicional ───────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜たら",
    sentence:"家に 帰っ___★___ 電話してください。",
    options:["たら","たあとで","てから","ながら"],
    answer:"たら",
    explanation:"V-た + ら → 帰る → 帰った + ら (cuando llegues a casa)"
  },
  {
    lv:"N4", grammar:"〜たら",
    sentence:"春に なっ___★___ 花見を しましょう。",
    options:["たら","てから","たあとで","ながら"],
    answer:"たら",
    explanation:"なる → なった + ら (cuando llegue la primavera)"
  },

  // ── Simultaneidad ─────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜ながら",
    sentence:"音楽を 聞き___★___ 勉強します。",
    options:["ながら","てから","たあとで","たら"],
    answer:"ながら",
    explanation:"V-ます(raíz) + ながら → 聞く → 聞き + ながら (mientras escucha música)"
  },
  {
    lv:"N4", grammar:"〜ながら",
    sentence:"歩き___★___ スマホを 見るのは 危ないです。",
    options:["ながら","てから","たら","すぎて"],
    answer:"ながら",
    explanation:"歩く → 歩き + ながら (mientras caminas)"
  },

  // ── Exceso ────────────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜すぎる",
    sentence:"昨日 食べ___★___ お腹が 痛いです。",
    options:["すぎて","てみて","ながら","てから"],
    answer:"すぎて",
    explanation:"V-ます(raíz) + すぎる → 食べ + すぎて (comí demasiado)"
  },
  {
    lv:"N4", grammar:"〜すぎる",
    sentence:"この 荷物は 重___★___。",
    options:["すぎます","てみます","ながら","たら"],
    answer:"すぎます",
    explanation:"重い → 重 + すぎます (es demasiado pesado)"
  },

  // ── Cambio de estado ──────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜ようになる",
    sentence:"練習して、泳げる___★___。",
    options:["ようになりました","ことがあります","てみます","ておきます"],
    answer:"ようになりました",
    explanation:"V-dic + ようになる → 泳げる + ようになりました (llegué a poder nadar)"
  },
  {
    lv:"N4", grammar:"〜ようにする",
    sentence:"毎日 野菜を 食べる___★___。",
    options:["ようにしています","ことがあります","てみます","てしまいます"],
    answer:"ようにしています",
    explanation:"V-dic + ようにする → 食べる + ようにしています (me aseguro de comer verdura)"
  },

  // ── Dar / Recibir ─────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜てあげる",
    sentence:"友達に 日本語を 教え___★___。",
    options:["てあげました","てもらいました","てくれました","ておきました"],
    answer:"てあげました",
    explanation:"V-て + あげる → 教える → 教えて + あげました (le enseñé como favor)"
  },
  {
    lv:"N4", grammar:"〜てくれる",
    sentence:"先生が 宿題を 直し___★___。",
    options:["てくれました","てあげました","てもらいました","ておきました"],
    answer:"てくれました",
    explanation:"V-て + くれる → 直す → 直して + くれました (el profesor me lo corrigió)"
  },
  {
    lv:"N4", grammar:"〜てもらう",
    sentence:"友達に 荷物を 持っ___★___。",
    options:["てもらいました","てあげました","てくれました","てしまいました"],
    answer:"てもらいました",
    explanation:"V-て + もらう → 持つ → 持って + もらいました (recibí el favor de que llevara mi bolsa)"
  },

  // ── Deseos ────────────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜たいです",
    sentence:"日本に 行き___★___。",
    options:["たいです","てみます","てしまいます","ておきます"],
    answer:"たいです",
    explanation:"V-ます(raíz) + たいです → 行く → 行き + たいです (quiero ir a Japón)"
  },
  {
    lv:"N4", grammar:"〜（よ）うと思っています",
    sentence:"来年 日本語の 試験を 受け___★___。",
    options:["ようと思っています","てみます","ておきます","てしまいます"],
    answer:"ようと思っています",
    explanation:"V-volitivo + と思っています → 受ける → 受けよう + と思っています"
  },

  // ── Manera / Facilidad ────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜やすい",
    sentence:"このペンは 書き___★___。",
    options:["やすいです","にくいです","すぎます","ながら"],
    answer:"やすいです",
    explanation:"V-ます(raíz) + やすい → 書く → 書き + やすい (fácil de escribir)"
  },
  {
    lv:"N4", grammar:"〜にくい",
    sentence:"この 漢字は 読み___★___。",
    options:["にくいです","やすいです","すぎます","ながら"],
    answer:"にくいです",
    explanation:"V-ます(raíz) + にくい → 読む → 読み + にくい (difícil de leer)"
  },

  // ── Acabar de / Pasiva ────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜たばかり",
    sentence:"さっき ご飯を 食べ___★___。",
    options:["たばかりです","てしまいました","てみました","てあります"],
    answer:"たばかりです",
    explanation:"V-た + ばかり → 食べる → 食べた + ばかりです (acabo de comer)"
  },
  {
    lv:"N4", grammar:"〜られる (Pasiva)",
    sentence:"先生に ___★___ 。",
    options:["叱られました","叱りました","叱ってみました","叱っておきました"],
    answer:"叱られました",
    explanation:"叱る → 叱られる (ser regañado — voz pasiva)"
  },

  // ── Potencial ─────────────────────────────────────────────────────
  {
    lv:"N4", grammar:"〜（られ）る (Potencial)",
    sentence:"私は 漢字が 読め___★___。",
    options:["ます","てみます","てしまいます","ておきます"],
    answer:"ます",
    explanation:"読む → 読める (poder leer) → 読めます"
  },
  {
    lv:"N4", grammar:"〜（られ）る (Potencial)",
    sentence:"子どもの 頃は 野菜が 食べ___★___。",
    options:["られませんでした","てしまいました","てみました","てあります"],
    answer:"られませんでした",
    explanation:"食べる → 食べられる → 食べられませんでした (no podía comer verduras)"
  },
];
