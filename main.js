/////////////// JSONデータ ///////////////

const JsonData = `[
  {
    "place": "東7F28b",
    "name": "赤いきつねと緑のまるこ",
    "master": "まるこ",
    "url": ""
  },
  {
    "place": "東7F42b",
    "name": "秋の夜うさぎ",
    "master": "あき",
    "url": "https://x.com/search?q=from%3Aakira_merc%20or%20from%3Aturayu_yato%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F13ab",
    "name": "あざらしの家（メルぱら！Re:2本部）",
    "master": "なつき",
    "url": "https://x.com/search?q=from%3ANatsukiAzarashi%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F44a",
    "name": "紫陽花しぐれ",
    "master": "アチェロ",
    "url": "https://x.com/search?q=from%3AAceroKano%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F24ab",
    "name": "あの星へ",
    "master": "Sane",
    "url": "https://x.com/search?q=from%3ASane_314%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F30a",
    "name": "油揚げたべたい",
    "master": "碧",
    "url": "https://x.com/search?q=from%3Aheki_0606%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F50a",
    "name": "天霙店[コミケ支部ゴルド両替所併設店]",
    "master": "ロボロー",
    "url": "https://x.com/search?q=from%3Aroborou_gigas%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F43b",
    "name": "あめだま",
    "master": "平和なゆう",
    "url": "https://x.com/search?q=from%3Akuonnyuu%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F01ab",
    "name": "アルコール度数70%前後",
    "master": "坂本",
    "url": "https://x.com/search?q=from%3Amo_mo_skmt%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F40b",
    "name": "いちご",
    "master": "飯田",
    "url": "https://x.com/search?q=from%3ASatuki_gogatu5%20or%20from%3Asawawawawa625%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E35a",
    "name": "いとを菓子",
    "master": "田村まろ",
    "url": "https://x.com/search?q=from%3Aiwswtbr%20or%20from%3A_morning_zzz%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F46b",
    "name": "ウール120％",
    "master": "未草",
    "url": "https://x.com/search?q=from%3Asheepgrass621%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F49ab",
    "name": "謡うこうもり本舗",
    "master": "こたろ",
    "url": "https://x.com/search?q=from%3AkotaRoU8q%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F44b",
    "name": "伝染くしき",
    "master": "ゆると",
    "url": "https://x.com/search?q=from%3A_yu_610_x%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E33a",
    "name": "海空船",
    "master": "未羽",
    "url": "https://x.com/search?q=from%3Atrths0930%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F04b",
    "name": "うるちもち",
    "master": "ぴっぽ",
    "url": "https://x.com/search?q=from%3Apizapote_nyo%20or%20from%3ABACHeally%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F50b",
    "name": "AM1:00",
    "master": "とげたに",
    "url": "https://x.com/search?q=from%3At0gebakudan%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E40b",
    "name": "LR66",
    "master": "ロクタ",
    "url": "https://x.com/search?q=from%3A666tat666%20or%20from%3Atori_mrst%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F18b",
    "name": "えるだめりぃ！",
    "master": "エリンギ",
    "url": "https://x.com/search?q=from%3Aeringi_buna%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F20b",
    "name": "Angel Project",
    "master": "水瀬かすみ",
    "url": "https://x.com/search?q=from%3Ausaminarin%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F19b",
    "name": "おかゆなら食べた",
    "master": "釜玉うどんの生卵",
    "url": "https://x.com/search?q=from%3Akankanknt%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東4し09a",
    "name": "おしおおおめで！",
    "master": "ｳﾒｼｿ",
    "url": "https://x.com/search?q=from%3A16_umesiso%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F58ab",
    "name": "おしくらまんじゅう",
    "master": "コル",
    "url": "https://x.com/search?q=from%3Amerusutotanosii%20or%20from%3Areed_yosi%20or%20from%3AhohoTp36%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F36a",
    "name": "おむらいす",
    "master": "みさ",
    "url": "https://x.com/search?q=from%3Amisa331004091%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E41a",
    "name": "おやすみまで3秒",
    "master": "日向陽",
    "url": "https://x.com/search?q=from%3Ahinadani%20or%20from%3Ausagijum033%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F62b",
    "name": "鍵取",
    "master": "K",
    "url": "https://x.com/search?q=from%3AKay__s__%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F04a",
    "name": "カフェラテマグカップ",
    "master": "白霙ラテ",
    "url": "https://x.com/search?q=from%3Aratesiramizore%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F43a",
    "name": "(株)どくだみりんご",
    "master": "かいちょお",
    "url": "https://x.com/search?q=from%3Ashunkaichoo0910%20or%20from%3ALuminales_kanro%20or%20from%3Ahiyokoyoriyori%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F12ab",
    "name": "かみつば文芸部",
    "master": "シャトン",
    "url": "https://x.com/search?q=from%3Anekoneko_chaton%20or%20from%3Agintrancenica%20or%20from%3Abeni_gmm%20or%20from%3Ahatsu0528%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2%20or%20#かみつば文芸部&src=typed_query&f=live"
  },
  {
    "place": "東7F57b",
    "name": "からあげ庵",
    "master": "ふいな",
    "url": "https://x.com/search?q=from%3Aiorifina%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F48b",
    "name": "夏炉冬扇",
    "master": "睦月",
    "url": "https://x.com/search?q=from%3Amutsuki_ika%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E41b",
    "name": "渇きに雫",
    "master": "キキョウ",
    "url": "https://x.com/search?q=from%3Akikyo_anzu%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F23a",
    "name": "kikoriの涙",
    "master": "木山きこり",
    "url": "https://x.com/search?q=from%3Akikori_namida%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F53ab",
    "name": "きまぐれびより本店",
    "master": "イテヤ",
    "url": "https://x.com/search?q=from%3Aszlk165%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F54ab",
    "name": "きまぐれびよりみゆさん支店",
    "master": "みゆ",
    "url": "https://x.com/search?q=from%3Agomaumiyu%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F62a",
    "name": "きゃんど・ぽん",
    "master": "ぽんかん",
    "url": "https://x.com/search?q=from%3Aponskahn%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F38b",
    "name": "久兵衛",
    "master": "ヒサギ",
    "url": "https://x.com/search?q=from%3Aohitasi_es%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E23a",
    "name": "Q6",
    "master": 961,
    "url": "https://x.com/search?q=from%3Akey_961%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E39a",
    "name": "銀山羊座",
    "master": "銀山羊",
    "url": "https://x.com/search?q=from%3Ayagi3_silver%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E32a",
    "name": "_(:3 ｣∠)_＆記憶倉庫",
    "master": "夜海凪",
    "url": "https://x.com/search?q=from%3Amrst_re_ru%20or%20from%3Akusarehanon%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E39b",
    "name": "くらげ蓮氷",
    "master": "やゆよ",
    "url": "https://x.com/search?q=from%3Ayayuyo31415%20or%20from%3Arenka_merc285%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F47b",
    "name": "くるっぽー",
    "master": "ぱと",
    "url": "https://x.com/search?q=from%3Apato_cocco%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E44b",
    "name": "クワトロフォルマッジ",
    "master": "ハピハピドリーマー",
    "url": "https://x.com/search?q=from%3Akedamatuba%20or%20from%3Ami_338%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F51a",
    "name": "ゲス同盟",
    "master": "めぐ",
    "url": "https://x.com/search?q=from%3Ag_mcps%20or%20from%3Avalllhalllla%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F22a",
    "name": "けせらせら",
    "master": "よじ",
    "url": "https://x.com/search?q=from%3Apetrichorat4am%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E25a",
    "name": "月下濫觴",
    "master": "安武潮",
    "url": "https://x.com/search?q=from%3ATWOSUTM_ushio%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F28a",
    "name": "限界集落時給不足",
    "master": "したや(たやこ)",
    "url": "https://x.com/search?q=from%3Asitaya469%20or%20from%3Ashitayahino%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F11b",
    "name": "構成員",
    "master": "紫水ココ",
    "url": "https://x.com/search?q=from%3Ashishiruirui55%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E36b",
    "name": "5月の庭は雨",
    "master": "間宮",
    "url": "https://x.com/search?q=from%3Anamioka0001%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F30b",
    "name": "こげたしょくぱん",
    "master": "ふな",
    "url": "https://x.com/search?q=from%3AKtm_huna%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F20a",
    "name": "さかさまのくじら。",
    "master": "はのひ",
    "url": "https://x.com/search?q=from%3Ahtpoppo_po%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E32b",
    "name": "笹舟の港",
    "master": "みるか",
    "url": "https://x.com/search?q=from%3Amilka442434%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F48a",
    "name": "寒がりな鹿",
    "master": "のーくん",
    "url": "https://x.com/search?q=from%3A73danokaz%20or%20from%3Ahariyaginko%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E37a",
    "name": "シオコブジェット",
    "master": "けやき",
    "url": "https://x.com/search?q=from%3Azlkv_k%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F31a",
    "name": "じゃがいもの湯",
    "master": "ゆなこ",
    "url": "https://x.com/search?q=from%3A136yu%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F25a",
    "name": "Chaquejour",
    "master": "日々89",
    "url": "https://x.com/search?q=from%3Ahibi89_%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F55ab",
    "name": "ジャモの木箱",
    "master": "槐　春香",
    "url": "https://x.com/search?q=from%3Aoldake%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F40a",
    "name": "砂利道。",
    "master": "ざり",
    "url": "https://x.com/search?q=from%3AO_D_T_M%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F47a",
    "name": "junktion",
    "master": "dot",
    "url": "https://x.com/search?q=from%3Ajkt_dondokodon%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E44a",
    "name": "sucres",
    "master": "ゆなせ",
    "url": "https://x.com/search?q=from%3Asytk_r%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F23b",
    "name": "10ゴルドの輝跡",
    "master": "Sane",
    "url": "https://x.com/search?q=from%3Ajoint_mrzine%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F05b",
    "name": "春夕",
    "master": "すのちゃん",
    "url": "https://x.com/search?q=from%3Asunohala00%20or%20from%3Aichi_9ra%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F27a",
    "name": "白樺の薪",
    "master": "飾白",
    "url": "https://x.com/search?q=from%3Akazari753%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F08ab",
    "name": "す。",
    "master": "キヨラ",
    "url": "https://x.com/search?q=from%3Akiyora_ze%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F32ab",
    "name": "スイートブーケ",
    "master": "朱里綾目",
    "url": "https://x.com/search?q=from%3AAkaayaI%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E45a",
    "name": "すいめんみなも",
    "master": "らこめ",
    "url": "https://x.com/search?q=from%3Arakorakome%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F35a",
    "name": "StellaLuccica",
    "master": "ふじまき",
    "url": "https://x.com/search?q=from%3Aloo_iy%20or%20from%3Aluna_seventh%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E30b",
    "name": "smicco.",
    "master": 810,
    "url": ""
  },
  {
    "place": "東7F06b",
    "name": "すみっこ",
    "master": "もそ",
    "url": ""
  },
  {
    "place": "東7F41b",
    "name": "スミレの砂糖づけ",
    "master": 423,
    "url": ""
  },
  {
    "place": "東7F17b",
    "name": "ぜぇ変奏曲",
    "master": "めしねえ",
    "url": "https://x.com/search?q=from%3Anushimee%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F63a",
    "name": "世界ノ箱",
    "master": "うつせみ",
    "url": "https://x.com/search?q=from%3AKnightsandfine%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F14b",
    "name": "ソーダ屋さん",
    "master": "はやテ～",
    "url": "https://x.com/search?q=from%3ASodaya_san%20or%20from%3AHayate_Hoso2048%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F22b",
    "name": "空色ペットボトル",
    "master": "月壺",
    "url": "https://x.com/search?q=from%3Agekko_sky%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E43b",
    "name": "駄菓子家",
    "master": "よちの",
    "url": "https://x.com/search?q=from%3Amugichaaa5959%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E45b",
    "name": "たまごどうふ",
    "master": "かろ",
    "url": "https://x.com/search?q=from%3Asorahito_08%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F27b",
    "name": "誰のお茶会",
    "master": "no○Tea",
    "url": "https://x.com/search?q=from%3Ano_mal_44%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F45a",
    "name": "魑魅モン魎",
    "master": "West仮面",
    "url": "https://x.com/search?q=from%3AWestkamen%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E38a",
    "name": "chococornet",
    "master": "hina",
    "url": "https://x.com/search?q=from%3Ahinasazuki%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F31b",
    "name": "梅雨の缶づめ",
    "master": "雨缶",
    "url": "https://x.com/search?q=from%3Ayuriknm%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E24b",
    "name": "DECOBOCO MILK",
    "master": "鼓谷",
    "url": "https://x.com/search?q=from%3Acota2_denki%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F36b",
    "name": "Toys",
    "master": "にゅ～",
    "url": "https://x.com/search?q=from%3Anew_merc%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E29b",
    "name": "燈火堂",
    "master": "鬼火",
    "url": "https://x.com/search?q=from%3Aalkekengi07%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F17a",
    "name": "東西スカイ",
    "master": "八咫",
    "url": "https://x.com/search?q=from%3Atorichan_comeon%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E26a",
    "name": "どちらかといえば素体",
    "master": "ひのこ",
    "url": "https://x.com/search?q=from%3Ahinoko_kabe%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F05a",
    "name": "土曜ビーム",
    "master": "東",
    "url": "https://x.com/search?q=from%3Aaaazmaaax%20or%20from%3Aenjoyandgame%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F37ab",
    "name": "とんぼ玉",
    "master": "ペレ",
    "url": "https://x.com/search?q=from%3Amerst_pere%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F60a",
    "name": "なないろ遊園地",
    "master": "しろさん",
    "url": "https://x.com/search?q=from%3Apikaitigo%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F03b",
    "name": "なるざわ",
    "master": 845,
    "url": "https://x.com/search?q=from%3Ashaappen%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E35b",
    "name": "nina",
    "master": "清白レイナ",
    "url": ""
  },
  {
    "place": "東7E33b",
    "name": "握り飯のサンバ",
    "master": "米樽",
    "url": "https://x.com/search?q=from%3ABetr_012%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E42b",
    "name": "二百七十番地",
    "master": "露木",
    "url": "https://x.com/search?q=from%3ASidareyanagi270%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F21ab",
    "name": "ねこのこの里",
    "master": "れい",
    "url": "https://x.com/search?q=from%3Arei_ra__%20or%20from%3Aheleyu02%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F16a",
    "name": "ねばねば納豆ごはん",
    "master": "納豆",
    "url": "https://x.com/search?q=from%3Anevernever_7210%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F26ab",
    "name": "はこぶねfeat.媚びたTシャツ屋さん",
    "master": "アーク",
    "url": "https://x.com/search?q=from%3Aark_merusuto%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F42a",
    "name": "HAPPY AMUSE！",
    "master": "野乃苺",
    "url": "https://x.com/search?q=from%3Agonono15%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E43a",
    "name": "ハムカツデスパレード",
    "master": "鹿野",
    "url": "https://x.com/search?q=from%3Amrst4ca_%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F02b",
    "name": "春風ビオトープ",
    "master": "幸鍵",
    "url": "https://x.com/search?q=from%3Aharukaze_nnkr%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E30a",
    "name": "Halcyon",
    "master": "よひら",
    "url": "https://x.com/search?q=from%3Anexus_mrst%20or%20from%3Aorts_anthology%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E46ab",
    "name": "半径1m以内",
    "master": "ねくさす",
    "url": "https://x.com/search?q=from%3Aorts_anthology%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E36a",
    "name": "*HERO",
    "master": "いもこ",
    "url": "https://x.com/search?q=from%3A_mesigaumai%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F18a",
    "name": "被弾人withA",
    "master": "あさり",
    "url": "https://x.com/search?q=from%3AHamaguri_158%20or%20from%3Asen_nnnnn%20or%20from%3AAonnu_0525%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F09a",
    "name": "Big Bad Box",
    "master": "ちあき",
    "url": "https://x.com/search?q=from%3Asnowwhiteocean1%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E23b",
    "name": "ぴっぴ1/2",
    "master": "あゆむもち、なりなり",
    "url": "https://x.com/search?q=from%3Anotsya3021%20or%20from%3Alily_na19%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F09b",
    "name": "pinacot room",
    "master": "ピナ",
    "url": "https://x.com/search?q=from%3Apinacot_%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東4く28a",
    "name": "日々堕落していく",
    "master": "ちるちる",
    "url": "https://x.com/search?q=from%3Asinchiruchiru%20or%20from%3Ai_chiruchiru%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F11a",
    "name": "ひふみ堂",
    "master": "ユユノミ",
    "url": "https://x.com/search?q=from%3AYuyunominomi%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F06a",
    "name": "ひよこふりかけ",
    "master": "ぴよりん",
    "url": "https://x.com/search?q=from%3Azassounobiru%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E31a",
    "name": "ふらーてる",
    "master": "たけ",
    "url": "https://x.com/search?q=from%3Atakemrst%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F52b",
    "name": "pourpre *出張店舗",
    "master": "ひこ",
    "url": "https://x.com/search?q=from%3Ahiko_para3%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E25b",
    "name": "proxy",
    "master": "れーの",
    "url": "https://x.com/search?q=from%3A_Re__No_%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E29a",
    "name": "pebble",
    "master": "東馬",
    "url": ""
  },
  {
    "place": "東7E31b",
    "name": "星屑とコースター",
    "master": "こう",
    "url": "https://x.com/search?q=from%3Alike_star33%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E28a",
    "name": "星摘日和",
    "master": "神北なぎさ",
    "url": "https://x.com/search?q=from%3Anagisa_243%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F57a",
    "name": "pokke!",
    "master": "ぽむ",
    "url": "https://x.com/search?q=from%3Apomm_ml%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F29a",
    "name": "ぽよぽよDX",
    "master": "高城よよよ",
    "url": "https://x.com/search?q=from%3Aakka_ri%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F25b",
    "name": "ボルシチ食堂",
    "master": "ヨシュア所長",
    "url": "https://x.com/search?q=from%3Atakenoko_wo%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F14a",
    "name": "マジカルデッドラインマン",
    "master": "羽宮かれん",
    "url": "https://x.com/search?q=from%3A_kr_um%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E34a",
    "name": "まむまむも",
    "master": "ろじゃまと",
    "url": "https://x.com/search?q=from%3ATsukizukigome68%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F34a",
    "name": "まめふくや",
    "master": "まめ",
    "url": "https://x.com/search?q=from%3Amameyarow%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F07b",
    "name": "みぞれ鍋(なべ家)",
    "master": "タカ雪",
    "url": "https://x.com/search?q=from%3AsnTakam%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F41a",
    "name": "mix melts",
    "master": "はにとー",
    "url": "https://x.com/search?q=from%3Aneru_v_v%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F52a",
    "name": "紫の国",
    "master": "葵星",
    "url": "https://x.com/search?q=from%3Aaoiboshi_mrst%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E38b",
    "name": "Mayday",
    "master": "水都遥希",
    "url": "https://x.com/search?q=from%3Amt_mrst%20or%20from%3Acyokoroom%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F03a",
    "name": "めぢから100%",
    "master": "eyes",
    "url": "https://x.com/search?q=from%3Akiruma_0613%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F56ab",
    "name": "めふてる物産展",
    "master": "plum",
    "url": "https://x.com/search?q=from%3APlumShk%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E37b",
    "name": "メメ輪結び",
    "master": "桃依",
    "url": "https://x.com/search?q=from%3Ammoii_m3%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F10a",
    "name": "メルストギルド合同誌企画",
    "master": "エド",
    "url": "https://x.com/search?q=from%3AED_mrst%20#メルストギルド合同誌&src=typed_query&f=live"
  },
  {
    "place": "東7F60b",
    "name": "めるへんくらぶ",
    "master": "あるむ",
    "url": "https://x.com/search?q=from%3Aalm_mu_%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E24a",
    "name": "麺露工房",
    "master": "らふぁえる",
    "url": "https://x.com/search?q=from%3ARu_Bi_Ca%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F16b",
    "name": "もあいきのこ",
    "master": "もゆき",
    "url": "https://x.com/search?q=from%3Amoyu06%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F34b",
    "name": "もちもちの森林",
    "master": "ゆゆず",
    "url": "https://x.com/search?q=from%3Ayyyuzu0629%20or%20from%3A844ym%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E40a",
    "name": "もみじまんじゅう",
    "master": "あきそら",
    "url": "https://x.com/search?q=from%3Aakzr_12%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F33a",
    "name": "やかましい遊び部屋",
    "master": "リツ",
    "url": "https://x.com/search?q=from%3Arrrr_ritsu%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F02a",
    "name": "焼き鳥屋さん",
    "master": "丹波",
    "url": "https://x.com/search?q=from%3Amisutorar_%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F38a",
    "name": "夜虹石",
    "master": "ラピス",
    "url": "https://x.com/search?q=from%3Alapis_off%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F15b",
    "name": "ゆかし屋",
    "master": "こち/TK",
    "url": "https://x.com/search?q=from%3Akairen__seki%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F07a",
    "name": "雪見酒",
    "master": "ひむしお",
    "url": "https://x.com/search?q=from%3Ahimsio_m%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F39ab",
    "name": "癒術士派遣協会",
    "master": "HARIO",
    "url": "https://x.com/search?q=from%3AHario_cos%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F61b",
    "name": "四葉庭園",
    "master": "みや",
    "url": ""
  },
  {
    "place": "東7F63b",
    "name": "Rapport",
    "master": "火成",
    "url": ""
  },
  {
    "place": "東7E42a",
    "name": "Lantern",
    "master": "らんて",
    "url": "https://x.com/search?q=from%3Arante_lantern%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F45b",
    "name": "林夕ﾞ林夕ﾞ",
    "master": "ろあ",
    "url": "https://x.com/search?q=from%3ARoa__n_%20or%20from%3AGree__npeas_mr%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F51b",
    "name": "レヒトの帽子",
    "master": "らむね",
    "url": "https://x.com/search?q=from%3Aigarashi_tea%20or%20from%3Amengotanpoochan%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F59ab",
    "name": "連日砂嵐",
    "master": "BNG、はゃゃ",
    "url": "https://x.com/search?q=from%3ASandstorm_BNG%20or%20from%3Atomoetomonokai%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E27ab",
    "name": "路地裏の兎",
    "master": "堀兎、猫路地",
    "url": "https://x.com/search?q=from%3Aykbr_mrst%20or%20from%3Anekoroji%20%20%23メルぱらRe2頒布物%20or%20%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F61a",
    "name": "わいるどすぴいど",
    "master": "たろうのすけ",
    "url": "https://x.com/search?q=from%3Aborn3kesan%20filter%3Alinks&src=typed_query&f=live"
  }
]`;


/////////////////////////////////////////

const arr = JSON.parse(JsonData);
//console.log(arr);
// keyを追加して連想配列を作成
const hash = Object.fromEntries(arr.map(c => [c.place.slice(2,), c]));
//console.log(hash);

// 保存用と読み出し用を共有
let SaveData = [];
// デバッグおかしくなった時用
//localStorage.removeItem('bookmark');

// 読み込み実行
if (localStorage.hasOwnProperty('bookmark')) {
  if (localStorage.getItem('bookmark').length > 0) {
    SaveData = localStorage.getItem('bookmark').split(',');
    //console.log(SaveData);

    for (let i = 0; i < SaveData.length; i++) {
      let desk_id = '#' + SaveData[i].slice(0, 3);
      //console.log(desk_id);
      $('.container').find(desk_id).css('background-color', 'orange');
    }
  }
}

// お気に入り(チェックボックス)をクリック
$('#output').on('click', '.favorite', function () {
  const location  = $(this).closest('.information').children('.place').text();
  const desk = location.slice(location.indexOf(' ') + 1, location.indexOf('-'));
  const desk_id = '#' + desk;
  const key = location.slice(location.indexOf(' ') + 1, location.indexOf(')')).replace('-', '');

  $next = $(this).next();
  if ($(this).prop('checked')) {
    // 要素を追加
    SaveData.push(key);
    $next.text('★');
    $next.css('color', 'yellow');
    $('.container').find(desk_id).css('background-color', 'orange');
  } else {
    //要素を削除
    SaveData.some(function(v, i) {
      if (v == key) SaveData.splice(i, 1);
    });

    $next.text('☆');
    $next.css('color', 'black');
    if (SaveData.includes(desk + 'a') || SaveData.includes(desk + 'b')) {
      $('.container').find(desk_id).css('background-color', 'orange');
    } else {
      $('.container').find(desk_id).css('background-color', '');
    }
  }
  //console.log(location);
  //console.log(desk);
  //console.log(key);
  //console.log(SaveData);
  localStorage.setItem('bookmark', SaveData.join(','));
});

// ブースをクリック
$('table').on('click', '.booth, .another', function () {
    const desk = $(this).prop('id');
    const label = ['ab', 'a', 'b'];
    const len = label.length;
    let data = [], $frame = [];

    for (let i = 0; i < len; i++) {
      data[i] = hash[desk + label[i]];
      $frame[i] = $('#' + label[i]);
    }

    for (let i = 0; i < len; i++) {
      if (data[i] != null) {
        let hall = data[i].place.slice(0,2);
        let place_name = hall + ' ' + desk + '-' + label[i];
        $frame[i].find('.place').text('(' + place_name + ')');
        $frame[i].find('.name').text(data[i].name);
        $frame[i].find('.master').text(data[i].master);

        let $product = $frame[i].find('.sale');
        $product.find('.url').attr('href', data[i].url);
        if (data[i].url != '') {
          $product.show();
        } else {
          $product.hide();
        }

        let $checked = $frame[i].find('.favorite');
        $checked.prop('checked', SaveData.includes(desk + label[i]));
        if ($checked.prop('checked')) {
          $checked.next().text('★');
          $checked.next().css('color', 'yellow');
        } else {
          $checked.next().text('☆');
          $checked.next().css('color', 'black');
        }
        $frame[i].show();
      } else {
        //$frame[i].find('.place').text('');
        //$frame[i].find('.name').text('');
        //$frame[i].find('.master').text('');
        //$frame[i].find('.favorite').prop('checked', false);
        $frame[i].hide();
      }
    }
    $('.link').hide();
});

// サークル情報の辞書取得
//async () => {
//  const response = await fetch('./data.json');
//  const arr =  await response.json();
//  const hash = Object.fromEntries(arr.map(c => [c.place.substr(3,3), c]));
  //console.log(hash["28b"]);
//};