// ═══════════════════════════════════════════
//  KIYO'S MIND — data.js  v5
// ═══════════════════════════════════════════

const verbData = [
  // ── Grupo 1 (五段) ─────────────────────
  { k:"開く",     f:"あく",       m:"Abrirse (intrans.)",          g:1, lv:"N4" },
  { k:"集まる",   f:"あつまる",   m:"Reunirse",                    g:1, lv:"N4" },
  { k:"謝る",     f:"あやまる",   m:"Disculparse",                 g:1, lv:"N4" },
  { k:"急ぐ",     f:"いそぐ",     m:"Apresurarse",                 g:1, lv:"N4" },
  { k:"祈る",     f:"いのる",     m:"Rezar",                       g:1, lv:"N4" },
  { k:"動く",     f:"うごく",     m:"Moverse",                     g:1, lv:"N4" },
  { k:"打つ",     f:"うつ",       m:"Golpear / Teclear",           g:1, lv:"N4" },
  { k:"写す",     f:"うつす",     m:"Copiar / Fotografiar",        g:1, lv:"N4" },
  { k:"選ぶ",     f:"えらぶ",     m:"Elegir",                      g:1, lv:"N4" },
  { k:"送る",     f:"おくる",     m:"Enviar / Acompañar",          g:1, lv:"N4" },
  { k:"怒る",     f:"おこる",     m:"Enojarse",                    g:1, lv:"N4" },
  { k:"落とす",   f:"おとす",     m:"Dejar caer",                  g:1, lv:"N4" },
  { k:"踊る",     f:"おどる",     m:"Bailar",                      g:1, lv:"N4" },
  { k:"驚く",     f:"おどろく",   m:"Sorprenderse",                g:1, lv:"N4" },
  { k:"思い出す", f:"おもいだす", m:"Recordar",                    g:1, lv:"N4" },
  { k:"思う",     f:"おもう",     m:"Pensar / Creer",              g:1, lv:"N4" },
  { k:"折る",     f:"おる",       m:"Doblar / Romper",             g:1, lv:"N4" },
  { k:"降る",     f:"ふる",       m:"Llover / Nevar",              g:1, lv:"N4" },
  { k:"勝つ",     f:"かつ",       m:"Ganar",                       g:1, lv:"N4" },
  { k:"変わる",   f:"かわる",     m:"Cambiar (intrans.)",          g:1, lv:"N4" },
  { k:"通う",     f:"かよう",     m:"Frecuentar",                  g:1, lv:"N4" },
  { k:"乾く",     f:"かわく",     m:"Secarse",                     g:1, lv:"N4" },
  { k:"頑張る",   f:"がんばる",   m:"Esforzarse",                  g:1, lv:"N4" },
  { k:"聞く",     f:"きく",       m:"Escuchar / Preguntar",        g:1, lv:"N4" },
  { k:"切る",     f:"きる",       m:"Cortar",                      g:1, lv:"N4" },
  { k:"決まる",   f:"きまる",     m:"Decidirse",                   g:1, lv:"N4" },
  { k:"暮らす",   f:"くらす",     m:"Vivir / Pasar el tiempo",     g:1, lv:"N4" },
  { k:"消す",     f:"けす",       m:"Apagar / Borrar",             g:1, lv:"N4" },
  { k:"困る",     f:"こまる",     m:"Estar en apuros",             g:1, lv:"N4" },
  { k:"壊す",     f:"こわす",     m:"Romper algo",                 g:1, lv:"N4" },
  { k:"探す",     f:"さがす",     m:"Buscar",                      g:1, lv:"N4" },
  { k:"下がる",   f:"さがる",     m:"Bajar / Retroceder",          g:1, lv:"N4" },
  { k:"触る",     f:"さわる",     m:"Tocar",                       g:1, lv:"N4" },
  { k:"叱る",     f:"しかる",     m:"Regañar",                     g:1, lv:"N4" },
  { k:"進む",     f:"すすむ",     m:"Avanzar / Progresar",         g:1, lv:"N4" },
  { k:"座る",     f:"すわる",     m:"Sentarse",                    g:1, lv:"N4" },
  { k:"育つ",     f:"そだつ",     m:"Crecer / Criarse",            g:1, lv:"N4" },
  { k:"出す",     f:"だす",       m:"Sacar / Enviar",              g:1, lv:"N4" },
  { k:"試す",     f:"ためす",     m:"Probar / Intentar",           g:1, lv:"N4" },
  { k:"楽しむ",   f:"たのしむ",   m:"Disfrutar",                   g:1, lv:"N4" },
  { k:"頼む",     f:"たのむ",     m:"Pedir / Solicitar",           g:1, lv:"N4" },
  { k:"違う",     f:"ちがう",     m:"Ser diferente",               g:1, lv:"N4" },
  { k:"使う",     f:"つかう",     m:"Usar",                        g:1, lv:"N4" },
  { k:"着く",     f:"つく",       m:"Llegar",                      g:1, lv:"N4" },
  { k:"続く",     f:"つづく",     m:"Continuar (intrans.)",        g:1, lv:"N4" },
  { k:"包む",     f:"つつむ",     m:"Envolver",                    g:1, lv:"N4" },
  { k:"手伝う",   f:"てつだう",   m:"Ayudar",                      g:1, lv:"N4" },
  { k:"通る",     f:"とおる",     m:"Pasar por / Atravesar",       g:1, lv:"N4" },
  { k:"届く",     f:"とどく",     m:"Llegar / Alcanzar",           g:1, lv:"N4" },
  { k:"泊まる",   f:"とまる",     m:"Hospedarse",                  g:1, lv:"N4" },
  { k:"止まる",   f:"とまる",     m:"Detenerse",                   g:1, lv:"N4" },
  { k:"取る",     f:"とる",       m:"Tomar / Coger",               g:1, lv:"N4" },
  { k:"撮る",     f:"とる",       m:"Tomar (fotos)",               g:1, lv:"N4" },
  { k:"直す",     f:"なおす",     m:"Arreglar / Reparar",          g:1, lv:"N4" },
  { k:"直る",     f:"なおる",     m:"Arreglarse (intrans.)",       g:1, lv:"N4" },
  { k:"亡くなる", f:"なくなる",   m:"Fallecer",                    g:1, lv:"N4" },
  { k:"無くす",   f:"なくす",     m:"Perder algo",                 g:1, lv:"N4" },
  { k:"並ぶ",     f:"ならぶ",     m:"Hacer fila / Alinearse",      g:1, lv:"N4" },
  { k:"なる",     f:"なる",       m:"Convertirse / Llegar a ser",  g:1, lv:"N4" },
  { k:"脱ぐ",     f:"ぬぐ",       m:"Quitarse (ropa)",             g:1, lv:"N4" },
  { k:"塗る",     f:"ぬる",       m:"Pintar / Untar",              g:1, lv:"N4" },
  { k:"登る",     f:"のぼる",     m:"Escalar / Subir",             g:1, lv:"N4" },
  { k:"残る",     f:"のこる",     m:"Quedar / Sobrar",             g:1, lv:"N4" },
  { k:"乗る",     f:"のる",       m:"Subir a un transporte",       g:1, lv:"N4" },
  { k:"運ぶ",     f:"はこぶ",     m:"Transportar / Cargar",        g:1, lv:"N4" },
  { k:"始まる",   f:"はじまる",   m:"Empezar (intrans.)",          g:1, lv:"N4" },
  { k:"働く",     f:"はたらく",   m:"Trabajar",                    g:1, lv:"N4" },
  { k:"払う",     f:"はらう",     m:"Pagar",                       g:1, lv:"N4" },
  { k:"引く",     f:"ひく",       m:"Tirar / Jalar",               g:1, lv:"N4" },
  { k:"引っ越す", f:"ひっこす",   m:"Mudarse",                     g:1, lv:"N4" },
  { k:"拾う",     f:"ひろう",     m:"Recoger / Encontrar",         g:1, lv:"N4" },
  { k:"増やす",   f:"ふやす",     m:"Aumentar algo (trans.)",      g:1, lv:"N4" },
  { k:"太る",     f:"ふとる",     m:"Engordar",                    g:1, lv:"N4" },
  { k:"踏む",     f:"ふむ",       m:"Pisar",                       g:1, lv:"N4" },
  { k:"間に合う", f:"まにあう",   m:"Llegar a tiempo",             g:1, lv:"N4" },
  { k:"守る",     f:"まもる",     m:"Proteger / Cumplir",          g:1, lv:"N4" },
  { k:"迷う",     f:"まよう",     m:"Perderse / Estar indeciso",   g:1, lv:"N4" },
  { k:"向かう",   f:"むかう",     m:"Dirigirse a",                 g:1, lv:"N4" },
  { k:"戻る",     f:"もどる",     m:"Regresar / Volver",           g:1, lv:"N4" },
  { k:"戻す",     f:"もどす",     m:"Devolver algo",               g:1, lv:"N4" },
  { k:"貰う",     f:"もらう",     m:"Recibir",                     g:1, lv:"N4" },
  { k:"焼く",     f:"やく",       m:"Asar / Hornear",              g:1, lv:"N4" },
  { k:"汚す",     f:"よごす",     m:"Ensuciar algo",               g:1, lv:"N4" },
  { k:"寄る",     f:"よる",       m:"Acercarse / Pasar por",       g:1, lv:"N4" },
  { k:"喜ぶ",     f:"よろこぶ",   m:"Alegrarse",                   g:1, lv:"N4" },
  { k:"分かる",   f:"わかる",     m:"Entender",                    g:1, lv:"N4" },
  { k:"笑う",     f:"わらう",     m:"Reír",                        g:1, lv:"N4" },
  // ── Grupo 2 (一段) ─────────────────────
  { k:"開ける",   f:"あける",     m:"Abrir (trans.)",              g:2, lv:"N4" },
  { k:"集める",   f:"あつめる",   m:"Reunir",                      g:2, lv:"N4" },
  { k:"生きる",   f:"いきる",     m:"Vivir",                       g:2, lv:"N4" },
  { k:"植える",   f:"うえる",     m:"Plantar",                     g:2, lv:"N4" },
  { k:"受ける",   f:"うける",     m:"Recibir / Tomar (examen)",    g:2, lv:"N4" },
  { k:"起きる",   f:"おきる",     m:"Despertarse / Ocurrir",       g:2, lv:"N4" },
  { k:"落ちる",   f:"おちる",     m:"Caer",                        g:2, lv:"N4" },
  { k:"折れる",   f:"おれる",     m:"Doblarse (intrans.)",         g:2, lv:"N4" },
  { k:"下りる",   f:"おりる",     m:"Bajar (de un lugar)",         g:2, lv:"N4" },
  { k:"片付ける", f:"かたづける", m:"Ordenar / Limpiar",           g:2, lv:"N4" },
  { k:"変える",   f:"かえる",     m:"Cambiar algo",                g:2, lv:"N4" },
  { k:"考える",   f:"かんがえる", m:"Pensar / Considerar",         g:2, lv:"N4" },
  { k:"聞こえる", f:"きこえる",   m:"Oírse / Ser audible",         g:2, lv:"N4" },
  { k:"決める",   f:"きめる",     m:"Decidir",                     g:2, lv:"N4" },
  { k:"着る",     f:"きる",       m:"Vestirse (torso)",            g:2, lv:"N4" },
  { k:"比べる",   f:"くらべる",   m:"Comparar",                    g:2, lv:"N4" },
  { k:"消える",   f:"きえる",     m:"Apagarse / Desaparecer",      g:2, lv:"N4" },
  { k:"答える",   f:"こたえる",   m:"Responder",                   g:2, lv:"N4" },
  { k:"壊れる",   f:"こわれる",   m:"Romperse",                    g:2, lv:"N4" },
  { k:"下げる",   f:"さげる",     m:"Bajar algo",                  g:2, lv:"N4" },
  { k:"調べる",   f:"しらべる",   m:"Investigar / Revisar",        g:2, lv:"N4" },
  { k:"信じる",   f:"しんじる",   m:"Creer / Confiar",             g:2, lv:"N4" },
  { k:"捨てる",   f:"すてる",     m:"Tirar / Desechar",            g:2, lv:"N4" },
  { k:"育てる",   f:"そだてる",   m:"Criar / Educar",              g:2, lv:"N4" },
  { k:"倒れる",   f:"たおれる",   m:"Caerse / Desmayarse",         g:2, lv:"N4" },
  { k:"訪ねる",   f:"たずねる",   m:"Visitar / Preguntar",         g:2, lv:"N4" },
  { k:"建てる",   f:"たてる",     m:"Construir",                   g:2, lv:"N4" },
  { k:"足りる",   f:"たりる",     m:"Ser suficiente",              g:2, lv:"N4" },
  { k:"食べる",   f:"たべる",     m:"Comer",                       g:2, lv:"N4" },
  { k:"疲れる",   f:"つかれる",   m:"Cansarse",                    g:2, lv:"N4" },
  { k:"付ける",   f:"つける",     m:"Encender / Pegar",            g:2, lv:"N4" },
  { k:"伝える",   f:"つたえる",   m:"Comunicar / Transmitir",      g:2, lv:"N4" },
  { k:"続ける",   f:"つづける",   m:"Continuar algo (trans.)",     g:2, lv:"N4" },
  { k:"出掛ける", f:"でかける",   m:"Salir (de casa)",             g:2, lv:"N4" },
  { k:"届ける",   f:"とどける",   m:"Entregar / Notificar",        g:2, lv:"N4" },
  { k:"止める",   f:"とめる",     m:"Detener algo",                g:2, lv:"N4" },
  { k:"投げる",   f:"なげる",     m:"Lanzar / Tirar",              g:2, lv:"N4" },
  { k:"慣れる",   f:"なれる",     m:"Acostumbrarse",               g:2, lv:"N4" },
  { k:"並べる",   f:"ならべる",   m:"Alinear / Poner en fila",     g:2, lv:"N4" },
  { k:"濡れる",   f:"ぬれる",     m:"Mojarse",                     g:2, lv:"N4" },
  { k:"寝る",     f:"ねる",       m:"Dormir / Acostarse",          g:2, lv:"N4" },
  { k:"増える",   f:"ふえる",     m:"Aumentar (intrans.)",         g:2, lv:"N4" },
  { k:"褒める",   f:"ほめる",     m:"Alabar / Elogiar",            g:2, lv:"N4" },
  { k:"負ける",   f:"まける",     m:"Perder (juego/batalla)",      g:2, lv:"N4" },
  { k:"間違える", f:"まちがえる", m:"Equivocarse",                 g:2, lv:"N4" },
  { k:"見つける", f:"みつける",   m:"Encontrar",                   g:2, lv:"N4" },
  { k:"見せる",   f:"みせる",     m:"Mostrar",                     g:2, lv:"N4" },
  { k:"見る",     f:"みる",       m:"Ver / Mirar",                 g:2, lv:"N4" },
  { k:"迎える",   f:"むかえる",   m:"Recibir / Ir a buscar",       g:2, lv:"N4" },
  { k:"痩せる",   f:"やせる",     m:"Adelgazar",                   g:2, lv:"N4" },
  { k:"止める",   f:"やめる",     m:"Dejar / Renunciar",           g:2, lv:"N4" },
  { k:"汚れる",   f:"よごれる",   m:"Ensuciarse",                  g:2, lv:"N4" },
  { k:"別れる",   f:"わかれる",   m:"Separarse / Dividirse",       g:2, lv:"N4" },
  { k:"忘れる",   f:"わすれる",   m:"Olvidar",                     g:2, lv:"N4" },
  { k:"晴れる",   f:"はれる",     m:"Despejarse (clima)",          g:2, lv:"N4" },
  { k:"冷える",   f:"ひえる",     m:"Enfriarse",                   g:2, lv:"N4" },
  // ── Grupo 3 (不規則) ───────────────────
  { k:"くる",         f:"くる",           m:"Venir",                       g:3, lv:"N4" },
  { k:"する",         f:"する",           m:"Hacer",                       g:3, lv:"N4" },
  { k:"安心する",     f:"あんしんする",   m:"Tranquilizarse",              g:3, lv:"N4" },
  { k:"案内する",     f:"あんないする",   m:"Guiar / Mostrar el camino",   g:3, lv:"N4" },
  { k:"運転する",     f:"うんてんする",   m:"Conducir",                    g:3, lv:"N4" },
  { k:"運動する",     f:"うんどうする",   m:"Hacer ejercicio",             g:3, lv:"N4" },
  { k:"感謝する",     f:"かんしゃする",   m:"Agradecer",                   g:3, lv:"N4" },
  { k:"故障する",     f:"こしょうする",   m:"Averiarse",                   g:3, lv:"N4" },
  { k:"紹介する",     f:"しょうかいする", m:"Presentar a alguien",         g:3, lv:"N4" },
  { k:"招待する",     f:"しょうたいする", m:"Invitar",                     g:3, lv:"N4" },
  { k:"食事する",     f:"しょくじする",   m:"Comer / Almorzar",            g:3, lv:"N4" },
  { k:"心配する",     f:"しんぱいする",   m:"Preocuparse",                 g:3, lv:"N4" },
  { k:"説明する",     f:"せつめいする",   m:"Explicar",                    g:3, lv:"N4" },
  { k:"失敗する",     f:"しっぱいする",   m:"Fracasar / Fallar",           g:3, lv:"N4" },
  { k:"相談する",     f:"そうだんする",   m:"Consultar",                   g:3, lv:"N4" },
  { k:"注意する",     f:"ちゅういする",   m:"Tener cuidado / Advertir",    g:3, lv:"N4" },
  { k:"注文する",     f:"ちゅうもんする", m:"Pedir / Hacer un pedido",     g:3, lv:"N4" },
  { k:"遅刻する",     f:"ちこくする",     m:"Llegar tarde",                g:3, lv:"N4" },
  { k:"貯金する",     f:"ちょきんする",   m:"Ahorrar dinero",              g:3, lv:"N4" },
  { k:"用意する",     f:"よういする",     m:"Preparar",                    g:3, lv:"N4" },
  { k:"予約する",     f:"よやくする",     m:"Reservar",                    g:3, lv:"N4" },
  { k:"約束する",     f:"やくそくする",   m:"Prometer",                    g:3, lv:"N4" },
  { k:"練習する",     f:"れんしゅうする", m:"Practicar",                   g:3, lv:"N4" },
  { k:"連絡する",     f:"れんらくする",   m:"Contactar",                   g:3, lv:"N4" },
  { k:"留学する",     f:"りゅうがくする", m:"Estudiar en el extranjero",   g:3, lv:"N4" },
  { k:"合格する",     f:"ごうかくする",   m:"Aprobar (un examen)",         g:3, lv:"N4" },
  { k:"復習する",     f:"ふくしゅうする", m:"Repasar",                     g:3, lv:"N4" },
  { k:"経験する",     f:"けいけんする",   m:"Experimentar",                g:3, lv:"N4" },
  { k:"計画する",     f:"けいかくする",   m:"Planear",                     g:3, lv:"N4" },
  { k:"喧嘩する",     f:"けんかする",     m:"Pelear / Discutir",           g:3, lv:"N4" },
  { k:"散歩する",     f:"さんぽする",     m:"Pasear",                      g:3, lv:"N4" },
  { k:"出席する",     f:"しゅっせきする", m:"Asistir",                     g:3, lv:"N4" },
  { k:"出発する",     f:"しゅっぱつする", m:"Partir / Salir (viaje)",      g:3, lv:"N4" },
  { k:"準備する",     f:"じゅんびする",   m:"Preparar",                    g:3, lv:"N4" },
  { k:"質問する",     f:"しつもんする",   m:"Preguntar",                   g:3, lv:"N4" },
  { k:"掃除する",     f:"そうじする",     m:"Limpiar",                     g:3, lv:"N4" },
  { k:"洗濯する",     f:"せんたくする",   m:"Lavar la ropa",               g:3, lv:"N4" },
  { k:"到着する",     f:"とうちゃくする", m:"Llegar",                      g:3, lv:"N4" },
  { k:"返事する",     f:"へんじする",     m:"Responder / Contestar",       g:3, lv:"N4" },
];

const grammarData = [
  { f:"nai_stem", tag:"〜なければなりません",      m:"Tener que (obligación formal)",          lv:"N4", formula:"V-ない(raíz) + ければなりません",     hint:"食べる → 食べ + なければなりません",        ex:"毎日薬を飲まなければなりません。" },
  { f:"nai_stem", tag:"〜なくてもいいです",         m:"No es necesario",                        lv:"N4", formula:"V-ない(raíz) + くてもいいです",       hint:"食べる → 食べ + なくてもいいです",          ex:"今日は来なくてもいいです。" },
  { f:"te",       tag:"〜てはいけません",           m:"Está prohibido / No se permite",         lv:"N4", formula:"V-て + はいけません",                  hint:"話す → 話して + はいけません",              ex:"ここでタバコを吸ってはいけません。" },
  { f:"te",       tag:"〜てもいいです",             m:"Se permite / Está bien que...",          lv:"N4", formula:"V-て + もいいです",                    hint:"食べる → 食べて + もいいです",              ex:"ここで写真を撮ってもいいです。" },
  { f:"te",       tag:"〜ています",                m:"Estar haciendo / Estado resultante",     lv:"N4", formula:"V-て + います",                        hint:"食べる → 食べています",                    ex:"今ご飯を食べています。" },
  { f:"te",       tag:"〜てあります",              m:"Algo está hecho con intención",          lv:"N4", formula:"V-て + あります",                      hint:"書く → 書いてあります",                    ex:"黒板に名前が書いてあります。" },
  { f:"te",       tag:"〜ておきます",              m:"Hacer algo de antemano",                 lv:"N4", formula:"V-て + おきます",                      hint:"買う → 買っておきます",                    ex:"パーティーの前に飲み物を買っておきます。" },
  { f:"te",       tag:"〜てしまいます",            m:"Terminar completamente / lamentablemente",lv:"N4",formula:"V-て + しまいます",                   hint:"食べる → 食べてしまいました",               ex:"ケーキを全部食べてしまいました。" },
  { f:"te",       tag:"〜てくる",                 m:"Acción que se acerca / empieza a",        lv:"N4", formula:"V-て + くる",                         hint:"増える → 増えてきた",                       ex:"最近、日本語が上手になってきました。" },
  { f:"te",       tag:"〜ていく",                 m:"Acción que continúa hacia el futuro",     lv:"N4", formula:"V-て + いく",                         hint:"減る → 減っていく",                         ex:"これからもっと練習していきます。" },
  { f:"ta",       tag:"〜たことがあります",        m:"Haber tenido la experiencia de",         lv:"N4", formula:"V-た + ことがあります",                hint:"行く → 行ったことがあります",               ex:"富士山に登ったことがあります。" },
  { f:"te",       tag:"〜てみます",               m:"Intentar hacer algo (ver qué pasa)",     lv:"N4", formula:"V-て + みます",                        hint:"食べる → 食べてみます",                    ex:"この料理を一度食べてみます。" },
  { f:"ta",       tag:"〜たほうがいいです",        m:"Es mejor que... (consejo)",              lv:"N4", formula:"V-た + ほうがいいです",                hint:"寝る → 寝たほうがいいです",                ex:"早く寝たほうがいいです。" },
  { f:"nai_stem", tag:"〜ないほうがいいです",      m:"Es mejor que no...",                     lv:"N4", formula:"V-ない(raíz) + ないほうがいいです",    hint:"食べる → 食べないほうがいいです",           ex:"夜遅く食べないほうがいいです。" },
  { f:"masu",     tag:"〜たいです",               m:"Querer hacer algo",                      lv:"N4", formula:"V-ます(raíz) + たいです",              hint:"行く → 行き + たいです",                   ex:"日本に行きたいです。" },
  { f:"Volitivo", tag:"〜（よ）うと思っています",  m:"Estoy pensando en... (intención futura)",lv:"N4", formula:"V-volitivo + と思っています",          hint:"受ける → 受けようと思っています",           ex:"来年、N3を受けようと思っています。" },
  { f:"Potencial", tag:"〜（ら）れる (Potencial)", m:"Poder hacer algo",                      lv:"N4", formula:"V-potencial",                          hint:"食べる→食べられる, 書く→書ける",            ex:"私は漢字が読めます。" },
  { f:"ta",       tag:"〜たら",                  m:"Si / Cuando algo ocurre (cond. real)",   lv:"N4", formula:"V-た + ら",                            hint:"帰る → 帰ったら",                          ex:"家に帰ったら、電話してください。" },
  { f:"te",       tag:"〜てあげる",              m:"Hacer un favor a alguien (yo→otro)",     lv:"N4", formula:"V-て + あげる",                        hint:"教える → 教えてあげる",                    ex:"友達に日本語を教えてあげました。" },
  { f:"te",       tag:"〜てくれる",              m:"Alguien me hace un favor (otro→yo)",     lv:"N4", formula:"V-て + くれる",                        hint:"手伝う → 手伝ってくれた",                  ex:"友達が手伝ってくれました。" },
  { f:"te",       tag:"〜てもらう",              m:"Recibir un favor de alguien",            lv:"N4", formula:"V-て + もらう",                        hint:"直す → 直してもらった",                    ex:"先生に作文を直してもらいました。" },
  { f:"masu",     tag:"〜に行く / 来る",          m:"Ir / Venir a hacer algo (propósito)",    lv:"N4", formula:"V-ます(raíz) + に行く/来る",           hint:"食べる → 食べに行く",                      ex:"昼ご飯を食べに行きます。" },
  { f:"ta",       tag:"〜たあとで",              m:"Después de hacer...",                    lv:"N4", formula:"V-た + あとで",                        hint:"食べる → 食べたあとで",                    ex:"宿題をしたあとで、ゲームをします。" },
  { f:"te",       tag:"〜てから",               m:"Después de / Desde que hice...",         lv:"N4", formula:"V-て + から",                          hint:"食べる → 食べてから",                      ex:"シャワーを浴びてから、寝ます。" },
  { f:"masu",     tag:"〜ながら",               m:"Mientras se hace otra cosa (simultáneo)",lv:"N4", formula:"V-ます(raíz) + ながら",                hint:"聞く → 聞き + ながら",                     ex:"音楽を聞きながら勉強します。" },
  { f:"masu",     tag:"〜すぎる",               m:"Hacer algo en exceso / demasiado",       lv:"N4", formula:"V-ます(raíz) / Adj + すぎる",          hint:"食べる → 食べ + すぎる",                   ex:"昨日食べすぎて、お腹が痛いです。" },
  { f:"masu",     tag:"〜やすい",               m:"Fácil de hacer",                         lv:"N4", formula:"V-ます(raíz) + やすい",                hint:"使う → 使い + やすい",                     ex:"このペンは書きやすいです。" },
  { f:"masu",     tag:"〜にくい",               m:"Difícil de hacer",                       lv:"N4", formula:"V-ます(raíz) + にくい",                hint:"読む → 読み + にくい",                     ex:"この字は読みにくいです。" },
  { f:"masu",     tag:"〜方（かた）",            m:"Manera de hacer algo",                   lv:"N4", formula:"V-ます(raíz) + 方",                   hint:"食べる → 食べ + 方",                       ex:"この料理の作り方を教えてください。" },
  { f:"masu",     tag:"〜だす",                m:"Empezar a (de repente / inesperadamente)",lv:"N4", formula:"V-ます(raíz) + だす",                  hint:"走る → 走り + だす",                       ex:"急に走り出した。" },
  { f:"masu",     tag:"〜おわる",              m:"Terminar de hacer",                       lv:"N4", formula:"V-ます(raíz) + おわる",                hint:"食べる → 食べ + おわる",                   ex:"宿題を書きおわりました。" },
  { f:"dic",      tag:"〜ようになる",           m:"Llegar a ser capaz de / empezar a",      lv:"N4", formula:"V-dic + ようになる",                   hint:"話せる + ようになった",                    ex:"練習して、泳げるようになりました。" },
  { f:"dic",      tag:"〜ようにする",           m:"Intentar / asegurarse de hacer",         lv:"N4", formula:"V-dic + ようにする",                   hint:"食べる + ようにする",                      ex:"毎日野菜を食べるようにしています。" },
  { f:"Pasiva",   tag:"〜られる (Pasiva)",      m:"Ser hecho por alguien (voz pasiva)",     lv:"N4", formula:"V-pasivo",                             hint:"叱る→叱られる, 書く→書かれる",             ex:"先生に叱られました。" },
  { f:"ta",       tag:"〜たばかり",            m:"Acabar de hacer algo",                   lv:"N4", formula:"V-た + ばかり",                        hint:"食べる → 食べたばかりです",                ex:"さっきご飯を食べたばかりです。" },
  { f:"dic",      tag:"〜まえに",              m:"Antes de hacer...",                      lv:"N4", formula:"V-dic + まえに",                       hint:"寝る → 寝るまえに",                        ex:"寝る前に歯を磨きます。" },
  { f:"dic",      tag:"〜ために",              m:"Para / Con el fin de (propósito)",       lv:"N4", formula:"V-dic / Sust + の + ために",           hint:"合格する → 合格するために",                ex:"試験に合格するために、毎日勉強します。" },
  { f:"dic",      tag:"〜ように",              m:"De modo que / Para que (objetivo)",      lv:"N4", formula:"V-dic / V-nai + ように",              hint:"忘れない + ように",                        ex:"忘れないようにメモします。" },
  { f:"dic",      tag:"〜ことができる",         m:"Ser capaz de / Poder hacer",             lv:"N4", formula:"V-dic + ことができる",                 hint:"泳ぐ → 泳ぐことができます",                ex:"私は日本語を話すことができます。" },
  { f:"dic",      tag:"〜ことにする",          m:"Decidir hacer algo (decisión propia)",   lv:"N4", formula:"V-dic + ことにする",                   hint:"行く → 行くことにした",                    ex:"日本に留学することにしました。" },
  { f:"dic",      tag:"〜ことになる",          m:"Resultar que / Quedar decidido que",     lv:"N4", formula:"V-dic + ことになる",                   hint:"転勤する → 転勤することになった",           ex:"来月、東京に引っ越すことになりました。" },
  { f:"dic",      tag:"〜はずです",           m:"Se supone que / Debería ser",            lv:"N4", formula:"V-dic / Adj + はずです",               hint:"来る → 来るはずです",                      ex:"彼は今日来るはずです。" },
  { f:"dic",      tag:"〜はずがない",          m:"Es imposible que / No puede ser que",    lv:"N4", formula:"V-dic / Adj + はずがない",             hint:"知る → 知るはずがない",                    ex:"あの人がそんなことをするはずがない。" },
  { f:"dic",      tag:"〜のに",               m:"A pesar de que / Aunque (contraste)",    lv:"N4", formula:"V-dic + のに",                        hint:"頑張った + のに",                          ex:"頑張ったのに、試験に落ちた。" },
  { f:"dic",      tag:"〜ので",               m:"Porque / Debido a (formal, objetivo)",   lv:"N4", formula:"V-dic + ので",                        hint:"遅れる → 遅れるので",                      ex:"電車が遅れているので、少し遅くなります。" },
  { f:"dic",      tag:"〜んです / のです",     m:"Es que... (explicación o énfasis)",      lv:"N4", formula:"V-dic + んです",                      hint:"疲れた → 疲れたんです",                    ex:"実は昨日眠れなかったんです。" },
  { f:"masu",     tag:"〜そうです（様態）",    m:"Parece que... / Tiene pinta de",         lv:"N4", formula:"V-ます(raíz) / Adj(raíz) + そうです",hint:"おいしい → おいしそうです",               ex:"このケーキはおいしそうです。" },
  { f:"dic",      tag:"〜そうです（伝聞）",    m:"He oído que / Dicen que",                lv:"N4", formula:"V-dic + そうです",                    hint:"来る → 来るそうです",                      ex:"明日雨が降るそうです。" },
  { f:"dic",      tag:"〜でしょう / だろう",   m:"Probablemente / ¿Verdad? (suposición)",  lv:"N4", formula:"V-dic + でしょう",                    hint:"来る → 来るでしょう",                      ex:"明日は晴れるでしょう。" },
  { f:"dic",      tag:"〜かもしれません",      m:"Quizás / Tal vez (posibilidad)",         lv:"N4", formula:"V-dic + かもしれません",               hint:"来る → 来るかもしれません",                ex:"彼は来ないかもしれません。" },
  { f:"dic",      tag:"〜ようです",           m:"Parece que... (conjetura propia)",       lv:"N4", formula:"V-dic + ようです",                    hint:"知っている → 知っているようです",           ex:"彼女は疲れているようです。" },
  { f:"dic",      tag:"〜らしいです",         m:"Parece / Se dice que (evidencia externa)",lv:"N4",formula:"V-dic + らしいです",                  hint:"来る → 来るらしい",                        ex:"彼は来ないらしいです。" },
  { f:"dic",      tag:"〜なら",              m:"Si es el caso de / Si se trata de",      lv:"N4", formula:"V-dic / Sust + なら",                 hint:"行くなら / 東京なら",                      ex:"東京に行くなら、スカイツリーに登ってください。" },
  { f:"dic",      tag:"〜し〜し",            m:"Además... también... (lista razones)",   lv:"N4", formula:"V-dic + し + V-dic + し",            hint:"安い + し、おいしい + し",                 ex:"この店は安いし、おいしいし、また来たいです。" },
  { f:"masu",     tag:"〜てほしい",          m:"Querer que alguien haga algo",           lv:"N4", formula:"V-て + ほしい",                       hint:"来る → 来てほしい",                        ex:"もっと話してほしいです。" },
  { f:"dic",      tag:"〜うちに",            m:"Mientras / Antes de que cambie el estado",lv:"N4",formula:"V-dic / V-nai + うちに",             hint:"若い + うちに",                            ex:"若いうちに、いろんな国を旅行したいです。" },
  { f:"dic",      tag:"〜かどうか",          m:"Si... o no (pregunta indirecta)",        lv:"N4", formula:"V-dic + かどうか",                    hint:"来る + かどうか",                          ex:"彼が来るかどうか分かりません。" },
  { f:"dic",      tag:"〜について",          m:"Sobre / Acerca de",                      lv:"N4", formula:"Sust + について",                     hint:"日本語 + について",                        ex:"日本語の文法について質問があります。" },
  { f:"dic",      tag:"〜によって",          m:"Por (agente) / Según / Dependiendo de",  lv:"N4", formula:"Sust + によって",                     hint:"人 + によって",                            ex:"人によって意見が違います。" },
  { f:"masu",     tag:"〜ばかり",            m:"Solo / Nada más que (exceso de algo)",   lv:"N4", formula:"V-て + ばかり / Sust + ばかり",        hint:"ゲームをして + ばかり",                    ex:"ゲームばかりしないで、勉強しなさい。" },
];

// ═══════════════════════════════════════════
//  STAR DATA — 50+ ejercicios JLPT reales N4
//
//  Estructura de cada ejercicio:
//  • context (opcional): diálogo o situación previa
//  • pre / post: texto fijo antes y después de los 4 blancos
//  • parts[4]: las 4 opciones numeradas 1〜4
//  • order[4]: orden correcto de las partes (1-based)
//  • starIndex: cuál parte (1-based) va en la posición ★
//    (★ es SIEMPRE el 3er blank visualmente)
//  • translation: traducción al español
// ═══════════════════════════════════════════
const starData = [

  // ── ★ posición 1 (la primera de las 4 partes ordenadas) ──
  {
    lv:"N4", grammar:"〜てもいいです",
    pre:"ここで", post:"か？",
    parts:["撮って","も","写真を","いいです"],
    order:[3,1,2,4], starIndex:1,
    translation:"¿Está bien tomar fotos aquí?"
  },
  {
    lv:"N4", grammar:"〜かもしれません",
    pre:"明日は", post:"。",
    parts:["雨が","降る","かも","しれません"],
    order:[1,2,3,4], starIndex:1,
    translation:"Quizás mañana llueva."
  },
  {
    lv:"N4", grammar:"〜ことができます",
    pre:"私は", post:"。",
    parts:["話す","日本語を","ことが","できます"],
    order:[2,1,3,4], starIndex:1,
    translation:"Puedo hablar japonés."
  },
  {
    lv:"N4", grammar:"〜てから",
    pre:"シャワーを", post:"。",
    parts:["から","浴びて","寝ます","も"],
    order:[2,1,3,4], starIndex:1,
    translation:"Después de ducharme, me voy a dormir."
  },
  {
    lv:"N4", grammar:"〜ようになりました",
    pre:"練習して", post:"。",
    parts:["ように","漢字が","なりました","読める"],
    order:[2,4,1,3], starIndex:1,
    translation:"Con práctica, llegué a poder leer kanji."
  },
  // Ejercicios reales de examen (★=1)
  {
    lv:"N4", grammar:"〜てくれた〜のに",
    pre:"れいぞうこに", post:"ので、食べました。",
    parts:["ケーキが","父が","買って きた","残って いた"],
    order:[2,3,1,4], starIndex:1,
    translation:"El pastel que papá compró quedó en el refrigerador, así que me lo comí."
  },
  {
    lv:"N4", grammar:"〜なれた ところ",
    pre:"ケン「はい。やっと 日本の", post:"です。」",
    parts:["なれた","ところ","に","生活"],
    order:[4,3,1,2], starIndex:1,
    translation:"Ken: «Sí. Por fin me he acostumbrado a la vida en Japón.»"
  },
  {
    lv:"N4", grammar:"〜食堂は どなた でも",
    pre:"ABC大学の 図書館と", post:"できます。",
    parts:["食堂は","でも","利用","どなた"],
    order:[1,4,2,3], starIndex:1,
    translation:"La biblioteca y la cafetería de la Universidad ABC pueden ser usadas por cualquier persona."
  },
  {
    lv:"N4", grammar:"〜やった のに",
    pre:"A「はい。がんばって しゅくだいを", post:"きて しまいました。」",
    parts:["のに","忘れて","家に","やった"],
    order:[4,1,3,2], starIndex:1,
    translation:"A: «Sí. A pesar de que hice el trabajo con esfuerzo, lo olvidé en casa.»"
  },

  // ── ★ posición 2 ──────────────────────────
  {
    lv:"N4", grammar:"〜てはいけません",
    pre:"図書館で", post:"。",
    parts:["大きな","話して","声で","はいけません"],
    order:[1,3,2,4], starIndex:2,
    translation:"No se permite hablar en voz alta en la biblioteca."
  },
  {
    lv:"N4", grammar:"〜たばかりです",
    pre:"さっき", post:"。",
    parts:["食べ","た","ばかりです","ご飯を"],
    order:[4,1,2,3], starIndex:2,
    translation:"Acabo de comer hace un momento."
  },
  {
    lv:"N4", grammar:"〜てみます",
    pre:"この料理を", post:"。",
    parts:["一度","てみます","作って","ください"],
    order:[1,3,2,4], starIndex:2,
    translation:"Voy a intentar hacer esta comida una vez."
  },
  {
    lv:"N4", grammar:"〜はずです",
    pre:"彼は", post:"。",
    parts:["今日","はず","来る","です"],
    order:[1,3,2,4], starIndex:2,
    translation:"Se supone que él viene hoy."
  },
  {
    lv:"N4", grammar:"〜てもらいました",
    pre:"先生に", post:"。",
    parts:["直して","作文を","て","もらいました"],
    order:[2,1,3,4], starIndex:2,
    translation:"Recibí que el/la profesor/a corrigiera mi redacción."
  },
  // Reales (★=2)
  {
    lv:"N4", grammar:"〜ところ（食べた）",
    context:"山田「田中さん、これから 食事でも どうですか。」\n田中「すみません。ちょうど",
    pre:"", post:"です。」",
    parts:["なん","ところ","食べた","今"],
    order:[4,3,2,1], starIndex:2,
    translation:"Yamada: «Tanaka-san, ¿qué tal si vamos a comer?»\nTanaka: «Lo siento. Justo acabo de comer.»"
  },
  {
    lv:"N4", grammar:"〜より 早く",
    pre:"あしたは 会議が あるので", post:"に 行きます。",
    parts:["早く","いつも","会社","より"],
    order:[2,4,1,3], starIndex:2,
    translation:"Como mañana hay una reunión, voy a la empresa más temprano que de costumbre."
  },
  {
    lv:"N4", grammar:"〜いるか 教えて",
    context:"A「すみません. 日曜日は 図書館は 何時まで",
    pre:"", post:"くださいませんか。」\nB「日曜日は 5時までです。」",
    parts:["開いて","教えて","いるか","くださいませんか"],
    order:[1,3,2,4], starIndex:2,
    translation:"A: «Perdone, ¿podría decirme hasta qué hora abre la biblioteca los domingos?»\nB: «Los domingos hasta las 5.»"
  },
  {
    lv:"N4", grammar:"〜なれた ところ",
    pre:"最近、仕事が いそがしくて、", post:"日が 多い。",
    parts:["帰る","なる","遅く","のが"],
    order:[1,4,3,2], starIndex:2,
    translation:"Últimamente tengo mucho trabajo, y son muchos los días en que llego tarde a casa."
  },

  // ── ★ posición 3 ──────────────────────────
  {
    lv:"N4", grammar:"〜なければなりません",
    pre:"毎日", post:"。",
    parts:["薬を","飲ま","なければ","なりません"],
    order:[1,2,3,4], starIndex:3,
    translation:"Todos los días tengo que tomar la medicina."
  },
  {
    lv:"N4", grammar:"〜たことがあります",
    pre:"私は", post:"。",
    parts:["登った","富士山に","こと","があります"],
    order:[2,1,3,4], starIndex:3,
    translation:"He subido al Monte Fuji alguna vez."
  },
  {
    lv:"N4", grammar:"〜ておきます",
    pre:"パーティーの", post:"。",
    parts:["買って","飲み物を","おきます","前に"],
    order:[4,2,1,3], starIndex:3,
    translation:"Antes de la fiesta, compraré bebidas de antemano."
  },
  {
    lv:"N4", grammar:"〜ようにしています",
    pre:"毎日", post:"。",
    parts:["食べる","野菜を","よう","にしています"],
    order:[2,1,3,4], starIndex:3,
    translation:"Me aseguro de comer verduras todos los días."
  },
  {
    lv:"N4", grammar:"〜ことにしました",
    pre:"来年、", post:"。",
    parts:["することに","日本に","しました","留学"],
    order:[2,4,1,3], starIndex:3,
    translation:"Decidí estudiar en Japón el próximo año."
  },
  // Reales (★=3)
  {
    lv:"N4", grammar:"〜できた（花屋→喫茶店）",
    pre:"先月まで 花屋が あった", post:"、おいしいです。",
    parts:["できた","りんごの ケーキが","きっさてんは","場所に"],
    order:[4,3,1,2], starIndex:3,
    translation:"En el lugar donde antes había una floristería, ahora hay una cafetería que sirve un delicioso pastel de manzana."
  },
  {
    lv:"N4", grammar:"〜いそがしくて ひくのが",
    pre:"私は ピアノを", post:"時間が ありません。",
    parts:["ひくのが","ひく","最近 いそがしくて","好きですが"],
    order:[2,4,3,1], starIndex:3,
    translation:"Me gusta tocar el piano, pero últimamente estoy tan ocupada/o que no tengo tiempo para tocarlo."
  },
  {
    lv:"N4", grammar:"〜使って 大切に",
    pre:"私は 20さいの たんじょうびに そふが", post:"います。",
    parts:["大切に","くれた","使って","カメラを"],
    order:[2,4,3,1], starIndex:3,
    translation:"Uso con mucho cuidado la cámara que mi abuelo me regaló en mi vigésimo cumpleaños."
  },
  {
    lv:"N4", grammar:"〜ときは すべらない ように",
    pre:"先生「ろうかが ぬれて います。歩く", post:"してください。」",
    parts:["ように","注意","ときは","すべらない"],
    order:[3,4,1,2], starIndex:3,
    translation:"Maestra: «El pasillo está mojado. Cuando caminen, tengan cuidado de no resbalarse.»"
  },
  {
    lv:"N4", grammar:"〜ことに する",
    pre:"来週、会社の", post:"しました。",
    parts:["近くに","する","ことに","ひっこしを"],
    order:[1,4,3,2], starIndex:3,
    translation:"Decidí mudarme cerca de la empresa la semana que viene."
  },
  {
    lv:"N4", grammar:"〜有名だ（北町）",
    pre:"北町に", post:"そうです。",
    parts:["和食の お店は","「さくら」と いう","有名だ","ある"],
    order:[2,1,3,4], starIndex:3,
    translation:"Se dice que en Kitamachi hay un restaurante de comida japonesa llamado «Sakura» que es famoso."
  },
  {
    lv:"N4", grammar:"〜反対 されても 東京で 勉強",
    context:"田中「山田さん。東京の 大学に 行く ことを、もう ご両親に 話しましたか。」\n山田「いいえ。でも、もし 両親に",
    pre:"", post:"つもりです。」",
    parts:["反対","する","東京で 勉強","されても"],
    order:[1,4,3,2], starIndex:3,
    translation:"Tanaka: «Yamada-san, ¿ya le contó a sus padres sobre ir a la universidad en Tokio?»\nYamada: «No. Pero aunque mis padres se opongan, tengo intención de estudiar en Tokio.»"
  },
  {
    lv:"N4", grammar:"〜通って 気を つけて",
    pre:"この 道は、雨の 日は すべり", post:"ください。",
    parts:["通って","やすくて","気を つけて","あぶないから"],
    order:[2,4,1,3], starIndex:3,
    translation:"Esta calle es peligrosa porque resbala cuando llueve, así que tengan cuidado al caminar por aquí."
  },
  {
    lv:"N4", grammar:"〜夜 が 最も 長い",
    pre:"今日は、一年で", post:"です。",
    parts:["日","が","夜","最も 長い"],
    order:[3,2,4,1], starIndex:3,
    translation:"Hoy es el día en que la noche es más larga del año."
  },
  {
    lv:"N4", grammar:"〜住める 家を 建てる ために",
    pre:"両親と いっしょに", post:"貯金しています。",
    parts:["ために","家を","建てる","住める"],
    order:[4,2,3,1], starIndex:3,
    translation:"Estoy ahorrando para construir una casa donde vivir con mis padres."
  },

  // ── ★ posición 4 ──────────────────────────
  {
    lv:"N4", grammar:"〜たほうがいいです",
    pre:"風邪の", post:"。",
    parts:["は","ほうがいいです","早く寝た","とき"],
    order:[4,1,3,2], starIndex:4,
    translation:"Cuando tienes resfriado, es mejor dormir temprano."
  },
  {
    lv:"N4", grammar:"〜てくれました",
    pre:"先生が", post:"。",
    parts:["くれました","作文を","直して","て"],
    order:[2,3,4,1], starIndex:4,
    translation:"El/la profesor/a me corrigió la redacción."
  },
  {
    lv:"N4", grammar:"〜てしまいました",
    pre:"大事な", post:"。",
    parts:["し","なく","書類を","てしまいました"],
    order:[3,2,1,4], starIndex:4,
    translation:"Por desgracia perdí un documento importante."
  },
  {
    lv:"N4", grammar:"〜てあげました",
    pre:"道に迷っている", post:"。",
    parts:["てあげました","人に","教えて","道を"],
    order:[2,4,3,1], starIndex:4,
    translation:"Le indiqué el camino a una persona que estaba perdida."
  },
  {
    lv:"N4", grammar:"〜られました（受身）",
    pre:"授業中に", post:"。",
    parts:["名前を","先生に","呼ば","れました"],
    order:[2,1,3,4], starIndex:4,
    translation:"Durante la clase, el/la profesor/a me llamó por mi nombre."
  },
  {
    lv:"N4", grammar:"〜ために",
    pre:"試験に", post:"毎日勉強します。",
    parts:["するために","合格","一生懸命","を"],
    order:[2,4,1,3], starIndex:4,
    translation:"Estudio todos los días con todas mis fuerzas para aprobar el examen."
  },
  // Reales (★=4)
  {
    lv:"N4", grammar:"〜どこ に 置いた か",
    pre:"きのうの 夜 家に 帰ってから、かぎを", post:"覚えて いません。",
    parts:["どこ","置いた","に","か"],
    order:[1,3,2,4], starIndex:4,
    translation:"Desde que llegué a casa anoche, no recuerdo dónde puse las llaves."
  },
  {
    lv:"N4", grammar:"〜見に行った ことが ない ので",
    context:"林「来週、野球の 試合を 見に 行こうと 思って いるんですが、リーさんも いっしょに どうですか。」\nリー「えっ、野球の 試合ですか。いいですね。",
    pre:"", post:"です。」",
    parts:["ぜひ 行きたい","ことが ない","見に行った","ので"],
    order:[3,2,4,1], starIndex:4,
    translation:"Hayashi: «La semana que viene pienso ir a ver un partido de béisbol, ¿le gustaría venir, Li-san?»\nLi: «¡Ah, un partido de béisbol! Qué bueno. Como nunca he ido a ver uno, me encantaría ir.»"
  },
  {
    lv:"N4", grammar:"〜チケットを 買った人 しか",
    pre:"このパーティーは", post:"入れません。",
    parts:["を","しか","チケット","買った人"],
    order:[3,1,4,2], starIndex:4,
    translation:"A esta fiesta solo pueden entrar quienes hayan comprado un boleto."
  },
  {
    lv:"N4", grammar:"〜だれ も いませんか",
    context:"学生「さようなら。」\n先生「さようなら。教室には、もう",
    pre:"", post:"。」\n学生「いいえ。田中さんが べんきょうして います。」",
    parts:["も","か","いませんか","だれ"],
    order:[4,1,3,2], starIndex:4,
    translation:"Alumno: «Adiós.»\nMaestro: «Adiós. ¿Ya no queda nadie en el salón?»\nAlumno: «No, Tanaka-san todavía está estudiando.»"
  },
  {
    lv:"N4", grammar:"〜を 聞く と かならず",
    pre:"わたしは この 音楽", post:"ねむく なります。",
    parts:["かならず","を","聞く","と"],
    order:[2,3,4,1], starIndex:4,
    translation:"Cada vez que escucho esta música, me da sueño."
  },
  {
    lv:"N4", grammar:"〜タクシーに 乗れば 間に合うかもしれないから",
    context:"A「コンサートには もう 間に合わないですね。」\nB「今すぐ",
    pre:"", post:"行こう。」",
    parts:["タクシーに","タクシーで","間に合うかもしれないから","乗れば"],
    order:[1,4,3,2], starIndex:4,
    translation:"A: «Ya no llegaremos al concierto a tiempo, ¿verdad?»\nB: «¡Si tomamos un taxi ahora mismo quizás lleguemos, vamos!»"
  },
  {
    lv:"N4", grammar:"〜そんな くつ で は",
    context:"A「あしたは 大事な おきゃくさまに 会うから、",
    pre:"", post:"いけませんよ。」",
    parts:["くつ","は","そんな","で"],
    order:[3,1,4,2], starIndex:4,
    translation:"A: «Mañana vamos a recibir a un cliente importante, así que no debes venir con esos zapatos.»"
  },
  {
    lv:"N4", grammar:"〜強い し 寒そう だから",
    pre:"今日は、風が", post:"出かけたくない。",
    parts:["し","だから","寒そう","強い"],
    order:[4,1,3,2], starIndex:4,
    translation:"Hoy hace mucho viento y parece hacer frío, así que no quiero salir."
  },
  {
    lv:"N4", grammar:"〜大事な 話の とちゅう で",
    pre:"大事な", post:"が かかって きた。",
    parts:["電話","とちゅう","話の","で"],
    order:[3,2,4,1], starIndex:4,
    translation:"En medio de una conversación importante, me llegó una llamada."
  },
  {
    lv:"N4", grammar:"〜駅 で だれ か",
    context:"山下「いいえ、わかりません。",
    pre:"", post:"に 聞きましょう。」",
    parts:["で","だれ","駅","か"],
    order:[3,1,2,4], starIndex:4,
    translation:"Yamashita: «No, no sé. Preguntémosle a alguien en la estación.»"
  },
  {
    lv:"N4", grammar:"〜形 の 赤くて あまい",
    pre:"きのう パーティーで 丸い", post:"くだものを 食べました。",
    parts:["あまい","の","赤くて","形"],
    order:[4,2,3,1], starIndex:4,
    translation:"Ayer en la fiesta comí una fruta redonda, roja y dulce."
  },
  {
    lv:"N4", grammar:"〜帰る のが 遅く なる",
    pre:"最近、仕事が いそがしくて、", post:"日が 多い。",
    parts:["帰る","なる","遅く","のが"],
    order:[1,4,3,2], starIndex:4,
    translation:"Últimamente tengo mucho trabajo y son muchos los días en que llego tarde a casa."
  },
  {
    lv:"N4", grammar:"〜明日は 早起きできる かどうか",
    pre:"明日は 朝早く 出かけない", post:"心配です。",
    parts:["が","と","早起きできる","いけないのですが"],
    order:[4,2,1,3], starIndex:4,
    translation:"Como mañana tengo que salir muy temprano, me preocupa si podré levantarme a tiempo."
  },
  {
    lv:"N4", grammar:"〜話の とちゅう で 電話",
    pre:"大事な", post:"が かかって きた。",
    parts:["電話","とちゅう","話の","で"],
    order:[3,2,4,1], starIndex:4,
    translation:"En medio de una conversación importante, me entró una llamada."
  },
];
