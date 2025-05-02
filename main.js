/////////////// JSONデータ ///////////////

const JsonData = `[
  {
    "place": "東7F28b",
    "name": "赤いきつねと緑のまるこ",
    "producer": "まるこ",
    "xurl": "https://x.com/search?q=from%3Amarukodon%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F42b",
    "name": "秋の夜うさぎ",
    "producer": "あき、やと",
    "xurl": "https://x.com/search?q=from%3Aakira_merc%20or%20from%3Aturayu_yato%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F13ab",
    "name": "あざらしの家（メルぱら！Re:2本部）",
    "producer": "なつき",
    "xurl": "https://x.com/search?q=from%3ANatsukiAzarashi%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F44a",
    "name": "紫陽花しぐれ",
    "producer": "アチェロ",
    "xurl": "https://x.com/search?q=from%3AAceroKano%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F24ab",
    "name": "あの星へ",
    "producer": "Sane",
    "xurl": "https://x.com/search?q=from%3ASane_314%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F30a",
    "name": "油揚げたべたい",
    "producer": "碧",
    "xurl": "https://x.com/search?q=from%3Aheki_0606%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F50a",
    "name": "天霙店[コミケ支部ゴルド両替所併設店]",
    "producer": "ロボロー",
    "xurl": "https://x.com/search?q=from%3Aroborou_gigas%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F43b",
    "name": "あめだま",
    "producer": "平和なゆう",
    "xurl": "https://x.com/search?q=from%3Akuonnyuu%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F01ab",
    "name": "アルコール度数70%前後",
    "producer": "坂本",
    "xurl": "https://x.com/search?q=from%3Amo_mo_skmt%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F40b",
    "name": "いちご",
    "producer": "飯田、さわわ",
    "xurl": "https://x.com/search?q=from%3ASatuki_gogatu5%20or%20from%3Asawawawawa625%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E35a",
    "name": "いとを菓子",
    "producer": "田村まろ、あさ",
    "xurl": "https://x.com/search?q=from%3Aiwswtbr%20or%20from%3A_morning_zzz%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F46b",
    "name": "ウール120％",
    "producer": "未草",
    "xurl": "https://x.com/search?q=from%3Asheepgrass621%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F49ab",
    "name": "謡うこうもり本舗",
    "producer": "こたろ",
    "xurl": "https://x.com/search?q=from%3AkotaRoU8q%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F44b",
    "name": "伝染くしき",
    "producer": "ゆると",
    "xurl": "https://x.com/search?q=from%3A_yu_610_x%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E33a",
    "name": "海空船",
    "producer": "未羽",
    "xurl": "https://x.com/search?q=from%3Atrths0930%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F04b",
    "name": "うるちもち",
    "producer": "ぴっぽ、BACHeally",
    "xurl": "https://x.com/search?q=from%3Apizapote_nyo%20or%20from%3ABACHeally%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F50b",
    "name": "AM1:00",
    "producer": "とげたに",
    "xurl": "https://x.com/search?q=from%3At0gebakudan%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E40b",
    "name": "LR66",
    "producer": "ロクタ、文鳥、ハヤヒ",
    "xurl": "https://x.com/search?q=from%3A666tat666%20or%20from%3Atori_mrst%20or%20from%3Ahitohayashi%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F18b",
    "name": "えるだめりぃ！",
    "producer": "エリンギ",
    "xurl": "https://x.com/search?q=from%3Aeringi_buna%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F20b",
    "name": "Angel Project",
    "producer": "水瀬かすみ",
    "xurl": "https://x.com/search?q=from%3Ausaminarin%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F19b",
    "name": "おかゆなら食べた",
    "producer": "釜玉うどんの生卵",
    "xurl": "https://x.com/search?q=from%3Akankanknt%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東4し09a",
    "name": "おしおおおめで！",
    "producer": "ウメシソ、胡麻餅",
    "xurl": "https://x.com/search?q=from%3A16_umesiso%20or%20from%3Amochi50g%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F58ab",
    "name": "おしくらまんじゅう",
    "producer": "コル、人人、綿山、川本",
    "xurl": "https://x.com/search?q=from%3Amerusutotanosii%20or%20from%3Areed_yosi%20or%20from%3AhohoTp36%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F36a",
    "name": "おむらいす",
    "producer": "みさ",
    "xurl": "https://x.com/search?q=from%3Amisa331004091%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E41a",
    "name": "おやすみまで3秒",
    "producer": "日向陽、うさぎジャム",
    "xurl": "https://x.com/search?q=from%3Ahinadani%20or%20from%3Ausagijum033%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F62b",
    "name": "鍵取",
    "producer": "K",
    "xurl": "https://x.com/search?q=from%3AKay__s__%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F10b",
    "name": "カナン普及委員会",
    "producer": "キュー、もか",
    "xurl": "https://x.com/search?q=from%3Anonostoria%20or%20from%3ARey_sleeping%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2%20or%20%23メルぱらRe2頒布品&src=typed_query&f=live"
  },
  {
    "place": "東7F04a",
    "name": "カフェラテマグカップ",
    "producer": "白霙ラテ",
    "xurl": "https://x.com/search?q=from%3Aratesiramizore%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F43a",
    "name": "(株)どくだみりんご",
    "producer": "かいちょお、ルミナレス、ひよこ",
    "xurl": "https://x.com/search?q=from%3Ashunkaichoo0910%20or%20from%3ALuminales_mrst%20or%20from%3Ahiyokoyoriyori%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F12ab",
    "name": "かみつば文芸部",
    "producer": "シャトン、ギン、紅、はつかり、ましゅろ",
    "xurl": "https://x.com/search?q=from%3Anekoneko_chaton%20or%20from%3Agintrancenica%20or%20from%3Abeni_gmm%20or%20from%3Ahatsu0528%20or%20from%3A2b_lily%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2%20or%20#かみつば文芸部&src=typed_query&f=live"
  },
  {
    "place": "東7F33b",
    "name": "がむしろ大爆破！",
    "producer": "くろいみれい、永風とばる、ヴァネドラ、朔盈(さくえい)",
    "xurl": "https://x.com/search?q=from%3AMirexi_K%20or%20from%3Atbar_Aqpinwheel%20or%20from%3AVANEDRA_zip%20or%20from%3ASak_A_LD%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F57b",
    "name": "からあげ庵",
    "producer": "ふいな",
    "xurl": "https://x.com/search?q=from%3Aiorifina%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F48b",
    "name": "夏炉冬扇",
    "producer": "睦月、ぶん太",
    "xurl": "https://x.com/search?q=from%3Amutsuki_ika%20or%20from%3Abunta_2238%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E41b",
    "name": "渇きに雫",
    "producer": "キキョウ",
    "xurl": "https://x.com/search?q=from%3Akikyo_anzu%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F23a",
    "name": "kikoriの涙",
    "producer": "木山きこり",
    "xurl": "https://x.com/search?q=from%3Akikori_namida%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F53ab",
    "name": "きまぐれびより本店",
    "producer": "イテヤ",
    "xurl": "https://x.com/search?q=from%3Aszlk165%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F54ab",
    "name": "きまぐれびよりみゆさん支店",
    "producer": "みゆ",
    "xurl": "https://x.com/search?q=from%3Agomaumiyu%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F62a",
    "name": "きゃんど・ぽん",
    "producer": "ぽんかん",
    "xurl": "https://x.com/search?q=from%3Aponskahn%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F38b",
    "name": "久兵衛",
    "producer": "ヒサギ",
    "xurl": "https://x.com/search?q=from%3Aohitasi_es%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E23a",
    "name": "Q6",
    "producer": "961",
    "xurl": "https://x.com/search?q=from%3Akey_961%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E28b",
    "name": "きらぼし",
    "producer": "ヒカル",
    "xurl": "https://x.com/search?q=from%3Ahikat1019087%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F15a",
    "name": "菌床栽培",
    "producer": "椎",
    "xurl": "https://x.com/search?q=from%3ASi_nappa%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E39a",
    "name": "銀山羊座",
    "producer": "銀山羊",
    "xurl": "https://x.com/search?q=from%3Ayagi3_silver%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E32a",
    "name": "_(:3 ｣∠)_＆記憶倉庫",
    "producer": "夜海凪、はのん",
    "xurl": "https://x.com/search?q=from%3Amrst_re_ru%20or%20from%3Akusarehanon%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E39b",
    "name": "くらげ蓮氷",
    "producer": "やゆよ、蓮香",
    "xurl": "https://x.com/search?q=from%3Ayayuyo31415%20or%20from%3Arenka_merc285%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F47b",
    "name": "くるっぽー",
    "producer": "ぱと",
    "xurl": "https://x.com/search?q=from%3Apato_cocco%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E44b",
    "name": "クワトロフォルマッジ",
    "producer": "ハピハピドリーマー、三鞘(みさや)",
    "xurl": "https://x.com/search?q=from%3Akedamatuba%20or%20from%3Ami_338%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F51a",
    "name": "ゲス同盟",
    "producer": "めぐ、ろーるきゃべつ",
    "xurl": "https://x.com/search?q=from%3Avalllhalllla%20or%20from%3Ag_mcps%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F22a",
    "name": "けせらせら",
    "producer": "よじ",
    "xurl": "https://x.com/search?q=from%3Apetrichorat4am%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E25a",
    "name": "月下濫觴",
    "producer": "安武潮",
    "xurl": "https://x.com/search?q=from%3ATWOSUTM_ushio%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F28a",
    "name": "限界集落時給不足",
    "producer": "したや(たやこ)",
    "xurl": "https://x.com/search?q=from%3Asitaya469%20or%20from%3Ashitayahino%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F11b",
    "name": "構成員",
    "producer": "紫水ココ",
    "xurl": "https://x.com/search?q=from%3Ashishiruirui55%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E36b",
    "name": "5月の庭は雨",
    "producer": "間宮",
    "xurl": "https://x.com/search?q=from%3Anamioka0001%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F30b",
    "name": "こげたしょくぱん",
    "producer": "ふな",
    "xurl": "https://x.com/search?q=from%3AKtm_huna%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F20a",
    "name": "さかさまのくじら。",
    "producer": "はのひ",
    "xurl": "https://x.com/search?q=from%3Ahtpoppo_po%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E32b",
    "name": "笹舟の港",
    "producer": "みるか",
    "xurl": "https://x.com/search?q=from%3Amilka442434%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F48a",
    "name": "寒がりな鹿",
    "producer": "のーくん、はりやぎ",
    "xurl": "https://x.com/search?q=from%3A73danokaz%20or%20from%3Ahariyaginko%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E37a",
    "name": "シオコブジェット",
    "producer": "けやき",
    "xurl": "https://x.com/search?q=from%3Azlkv_k%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F31a",
    "name": "じゃがいもの湯",
    "producer": "ゆなこ",
    "xurl": "https://x.com/search?q=from%3A136yu%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F25a",
    "name": "Chaquejour",
    "producer": "日々89",
    "xurl": "https://x.com/search?q=from%3Ahibi89_%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F55ab",
    "name": "ジャモの木箱",
    "producer": "槐　春香",
    "xurl": "https://x.com/search?q=from%3Aoldake%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2%20or%20%23めるパラRe2頒布&src=typed_query&f=live"
  },
  {
    "place": "東7F40a",
    "name": "砂利道。",
    "producer": "ざり",
    "xurl": "https://x.com/search?q=from%3AO_D_T_M%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F47a",
    "name": "junktion",
    "producer": "dot",
    "xurl": "https://x.com/search?q=from%3Ajkt_dondokodon%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E44a",
    "name": "sucres",
    "producer": "ゆなせ",
    "xurl": "https://x.com/search?q=from%3Asytk_r%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F23b",
    "name": "10ゴルドの輝跡",
    "producer": "多数(寄稿)",
    "xurl": "https://x.com/search?q=from%3Ajoint_mrzine%20or%20from%3Aindy_merc%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F05b",
    "name": "春夕",
    "producer": "すのちゃん、いちくら、おおば",
    "xurl": "https://x.com/search?q=from%3Asunohala00%20or%20from%3Aichi_9ra%20or%20from%3Aob_drad%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F27a",
    "name": "白樺の薪",
    "producer": "飾白",
    "xurl": "https://x.com/search?q=from%3Akazari753%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F08ab",
    "name": "す。",
    "producer": "キヨラ、MEW",
    "xurl": "https://x.com/search?q=from%3Akiyora_ze%20or%20from%3Amew_mofmof%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F32ab",
    "name": "スイートブーケ",
    "producer": "朱里綾目、そに",
    "xurl": "https://x.com/search?q=from%3AAkaayaI%20or%20from%3Asoni_mrst%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E45a",
    "name": "すいめんみなも",
    "producer": "らこめ",
    "xurl": "https://x.com/search?q=from%3Arakorakome%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F35a",
    "name": "StellaLuccica",
    "producer": "ふじまき、月宮るな",
    "xurl": "https://x.com/search?q=from%3Aloo_iy%20or%20from%3Aluna_seventh%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F19a",
    "name": "stroll road",
    "producer": "笹葉更紗",
    "xurl": "https://x.com/search?q=from%3ASarasa03301%20or%20from%3Asweetanthology%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E30b",
    "name": "smicco.",
    "producer": "810",
    "xurl": "https://x.com/search?q=from%3Apoppo_coo%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F06b",
    "name": "すみっこ",
    "producer": "もそ",
    "xurl": ""
  },
  {
    "place": "東7F41b",
    "name": "スミレの砂糖づけ",
    "producer": "423",
    "xurl": "https://x.com/search?q=from%3A423smr%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F17b",
    "name": "ぜぇ変奏曲",
    "producer": "めしねえ",
    "xurl": "https://x.com/search?q=from%3Anushimee%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F63a",
    "name": "世界ノ箱",
    "producer": "うつせみ",
    "xurl": "https://x.com/search?q=from%3AKnightsandfine%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F14b",
    "name": "ソーダ屋さん",
    "producer": "はやテ～",
    "xurl": "https://x.com/search?q=from%3ASodaya_san%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F22b",
    "name": "空色ペットボトル",
    "producer": "月壺",
    "xurl": "https://x.com/search?q=from%3Agekko_sky%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E43b",
    "name": "駄菓子家",
    "producer": "よちの",
    "xurl": "https://x.com/search?q=from%3Amugichaaa5959%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E45b",
    "name": "たまごどうふ",
    "producer": "かろ",
    "xurl": "https://x.com/search?q=from%3Asorahito_08%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F27b",
    "name": "誰のお茶会",
    "producer": "no○Tea",
    "xurl": "https://x.com/search?q=from%3Ano_mal_44%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F45a",
    "name": "魑魅モン魎",
    "producer": "West仮面",
    "xurl": "https://x.com/search?q=from%3AWestkamen%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E38a",
    "name": "chococornet",
    "producer": "hina",
    "xurl": "https://x.com/search?q=from%3Ahinasazuki%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F31b",
    "name": "梅雨の缶づめ",
    "producer": "雨缶",
    "xurl": "https://x.com/search?q=from%3Ayuriknm%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E24b",
    "name": "DECOBOCO MILK",
    "producer": "鼓谷",
    "xurl": "https://x.com/search?q=from%3Acota2_denki%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2%20or%20メルぱら%20or%20色紙&src=typed_query&f=live"
  },
  {
    "place": "東7F36b",
    "name": "Toys",
    "producer": "にゅ～",
    "xurl": "https://x.com/search?q=from%3Anew_merc%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E29b",
    "name": "燈火堂",
    "producer": "鬼火",
    "xurl": "https://x.com/search?q=from%3Aalkekengi07%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F17a",
    "name": "東西スカイ",
    "producer": "八咫",
    "xurl": "https://x.com/search?q=from%3Atorichan_comeon%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E26a",
    "name": "どちらかといえば素体",
    "producer": "ひのこ",
    "xurl": "https://x.com/search?q=from%3Ahinoko_kabe%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F05a",
    "name": "土曜ビーム",
    "producer": "東、さすらいの壁、来栖",
    "xurl": "https://x.com/search?q=from%3Aaaazmaaax%20or%20from%3Aenjoyandgame%20or%20from%3ACruz_K44%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F37ab",
    "name": "とんぼ玉",
    "producer": "ペレ",
    "xurl": "https://x.com/search?q=from%3Amerst_pere%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F60a",
    "name": "なないろ遊園地",
    "producer": "しろさん、まゆゆん、まいころりん",
    "xurl": "https://x.com/search?q=from%3Apikaitigo%20or%20from%3Agame_mayuyun%20or%20from%3Amaikororin%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F03b",
    "name": "なるざわ",
    "producer": "845",
    "xurl": "https://x.com/search?q=from%3Ashaappen%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E35b",
    "name": "nina",
    "producer": "清白レイナ",
    "xurl": ""
  },
  {
    "place": "東7E33b",
    "name": "握り飯のサンバ",
    "producer": "米樽",
    "xurl": "https://x.com/search?q=from%3ABetr_012%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E42b",
    "name": "二百七十番地",
    "producer": "露木",
    "xurl": "https://x.com/search?q=from%3ASidareyanagi270%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F21ab",
    "name": "ねこのこの里",
    "producer": "れい、ゆう(黄)、ろあ",
    "xurl": "https://x.com/search?q=from%3Arei_ra__%20or%20from%3Ahiyo94_%20or%20from%3Aheleyu02%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F16a",
    "name": "ねばねば納豆ごはん",
    "producer": "納豆",
    "xurl": "https://x.com/search?q=from%3Anevernever_7210%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F26ab",
    "name": "はこぶねfeat.媚びたTシャツ屋さん",
    "producer": "アーク",
    "xurl": "https://x.com/search?q=from%3Aark_merusuto%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F42a",
    "name": "HAPPY AMUSE！",
    "producer": "野乃苺",
    "xurl": "https://x.com/search?q=from%3Agonono15%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E43a",
    "name": "ハムカツデスパレード",
    "producer": "鹿野",
    "xurl": "https://x.com/search?q=from%3Amrst4ca_%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F02b",
    "name": "春風ビオトープ",
    "producer": "幸鍵",
    "xurl": "https://x.com/search?q=from%3Aharukaze_nnkr%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E30a",
    "name": "Halcyon",
    "producer": "よひら",
    "xurl": "https://x.com/search?q=from%3Ay_hrno%20or%20from%3Alevetoike%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E46ab",
    "name": "半径1m以内",
    "producer": "ねくさす他多数(寄稿)",
    "xurl": "https://x.com/search?q=from%3Anexus_mrst%20or%20from%3Aorts_anthology%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E36a",
    "name": "*HERO",
    "producer": "いもこ、こめつぶ",
    "xurl": "https://x.com/search?q=from%3A_mesigaumai%20or%20from%3Akomekome_oni%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F18a",
    "name": "被弾人withA",
    "producer": "あさり、ぬ",
    "xurl": "https://x.com/search?q=from%3AHamaguri_158%20or%20from%3Asen_nnnnn%20or%20from%3AAonnu_0525%20or%20from%3Ahornowl_k%20or%20from%3Athistle_imo%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F09a",
    "name": "Big Bad Box",
    "producer": "ちあき",
    "xurl": "https://x.com/search?q=from%3Asnowwhiteocean1%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E23b",
    "name": "ぴっぴ1/2",
    "producer": "あゆむもち、なりなり",
    "xurl": "https://x.com/search?q=from%3Anotsya3021%20or%20from%3Alily_na19%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F09b",
    "name": "pinacot room",
    "producer": "ピナ",
    "xurl": "https://x.com/search?q=from%3Apinacot_%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東4く28a",
    "name": "日々堕落していく",
    "producer": "ちるちる",
    "xurl": "https://x.com/search?q=from%3Asinchiruchiru%20or%20from%3Ai_chiruchiru%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F46a",
    "name": "ピピン",
    "producer": "ゆりかもめ",
    "xurl": "https://x.com/search?q=from%3Afji_kam%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F11a",
    "name": "ひふみ堂",
    "producer": "ユユノミ",
    "xurl": "https://x.com/search?q=from%3AYuyunominomi%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2%20or%20#メルストTRPG%20or%20メルぱら&src=typed_query&f=live"
  },
  {
    "place": "東7F06a",
    "name": "ひよこふりかけ",
    "producer": "ぴよりん",
    "xurl": "https://x.com/search?q=from%3Azassounobiru%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E31a",
    "name": "ふらーてる",
    "producer": "たけ",
    "xurl": "https://x.com/search?q=from%3Atakemrst%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F29b",
    "name": "ブルーアワー",
    "producer": "りいりん",
    "xurl": "https://x.com/search?q=from%3Ajdriringil%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F52b",
    "name": "pourpre *出張店舗",
    "producer": "ひこ",
    "xurl": "https://x.com/search?q=from%3Ahiko_para3%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E25b",
    "name": "proxy",
    "producer": "れーの",
    "xurl": "https://x.com/search?q=from%3A_Re__No_%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E29a",
    "name": "pebble",
    "producer": "東馬",
    "xurl": ""
  },
  {
    "place": "東7E31b",
    "name": "星屑とコースター",
    "producer": "こう",
    "xurl": "https://x.com/search?q=from%3Alike_star33%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E28a",
    "name": "星摘日和",
    "producer": "神北なぎさ",
    "xurl": "https://x.com/search?q=from%3Anagisa_243%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F57a",
    "name": "pokke!",
    "producer": "ぽむ",
    "xurl": "https://x.com/search?q=from%3Apomm_ml%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F29a",
    "name": "ぽよぽよDX",
    "producer": "高城よよよ",
    "xurl": "https://x.com/search?q=from%3Aakka_ri%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F25b",
    "name": "ボルシチ食堂",
    "producer": "ヨシュア所長",
    "xurl": "https://x.com/search?q=from%3Atakenoko_wo%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F14a",
    "name": "マジカルデッドラインマン",
    "producer": "羽宮かれん",
    "xurl": "https://x.com/search?q=from%3A_kr_um%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E34a",
    "name": "まむまむも",
    "producer": "ろじゃまと",
    "xurl": "https://x.com/search?q=from%3ATsukizukigome68%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F34a",
    "name": "まめふくや",
    "producer": "まめ",
    "xurl": "https://x.com/search?q=from%3Amameyarow%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F07b",
    "name": "みぞれ鍋(なべ家)",
    "producer": "タカ雪",
    "xurl": "https://x.com/search?q=from%3AsnTakam%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F41a",
    "name": "mix melts",
    "producer": "はにとー",
    "xurl": "https://x.com/search?q=from%3Aneru_v_v%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E26b",
    "name": "むぎちゃパック",
    "producer": "むぎ",
    "xurl": "https://x.com/search?q=from%3Aamahamchan%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F52a",
    "name": "紫の国",
    "producer": "葵星",
    "xurl": "https://x.com/search?q=from%3Aaoiboshi_mrst%20or%20from%3Amrst_1c%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E38b",
    "name": "Mayday",
    "producer": "水都遥希",
    "xurl": "https://x.com/search?q=from%3Amt_mrst%20or%20from%3Acyokoroom%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F03a",
    "name": "めぢから100%",
    "producer": "eyes",
    "xurl": "https://x.com/search?q=from%3Akiruma_0613%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F56ab",
    "name": "めふてる物産展",
    "producer": "plum",
    "xurl": "https://x.com/search?q=from%3APlumShk%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E37b",
    "name": "メメ輪結び",
    "producer": "桃依",
    "xurl": "https://x.com/search?q=from%3Ammoii_m3%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F10a",
    "name": "メルストギルド合同誌企画",
    "producer": "エド他多数(寄稿)",
    "xurl": "https://x.com/search?q=from%3AED_mrst%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2%20or%20#メルストギルド合同誌&src=typed_query&f=live"
  },
  {
    "place": "東7F60b",
    "name": "めるへんくらぶ",
    "producer": "あるむ",
    "xurl": "https://x.com/search?q=from%3Aalm_mu_%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7E24a",
    "name": "麺露工房",
    "producer": "らふぁえる",
    "xurl": "https://x.com/search?q=from%3ARu_Bi_Ca%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F16b",
    "name": "もあいきのこ",
    "producer": "もゆき",
    "xurl": "https://x.com/search?q=from%3Amoyu06%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F34b",
    "name": "もちもちの森林",
    "producer": "ゆゆず、yomo",
    "xurl": "https://x.com/search?q=from%3Ayyyuzu0629%20or%20from%3A844ym%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E40a",
    "name": "もみじまんじゅう",
    "producer": "あきそら",
    "xurl": "https://x.com/search?q=from%3Aakzr_12%20filter%3Alinks&src=typed_query&f=live"
  },
  {
    "place": "東7F33a",
    "name": "やかましい遊び部屋",
    "producer": "リツ",
    "xurl": "https://x.com/search?q=from%3Arrrr_ritsu%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F02a",
    "name": "焼き鳥屋さん",
    "producer": "丹波",
    "xurl": "https://x.com/search?q=from%3Amisutorar_%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F38a",
    "name": "夜虹石",
    "producer": "ラピス",
    "xurl": "https://x.com/search?q=from%3Alapis_off%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F15b",
    "name": "ゆかし屋",
    "producer": "こち/TK",
    "xurl": "https://x.com/search?q=from%3Akairen__seki%20#メルぱらRe頒布物%20or%20#メルぱらRe&src=typed_query&f=live"
  },
  {
    "place": "東7F07a",
    "name": "雪見酒",
    "producer": "ひむしお",
    "xurl": "https://x.com/search?q=from%3Ahimsio_m%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F39ab",
    "name": "癒術士派遣協会",
    "producer": "HARIO、狐村杏里(こむらあんり)、ナギ、ゆずり",
    "xurl": "https://x.com/search?q=from%3AHario_cos%20or%20from%3AComCom_majo%20or%20from%3Anagimrst_cos%20or%20from%3Ayuzuricos%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F61b",
    "name": "四葉庭園",
    "producer": "みや",
    "xurl": ""
  },
  {
    "place": "東7F63b",
    "name": "Rapport",
    "producer": "火成",
    "xurl": ""
  },
  {
    "place": "東7E42a",
    "name": "Lantern",
    "producer": "らんて",
    "xurl": "https://x.com/search?q=from%3Arante_lantern%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F45b",
    "name": "林夕ﾞ林夕ﾞ",
    "producer": "ろあ、ぐりーん",
    "xurl": "https://x.com/search?q=from%3ARoa__n_%20or%20from%3AGree__npeas_mr%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F51b",
    "name": "レヒトの帽子",
    "producer": "らむね、なう/しーmam",
    "xurl": "https://x.com/search?q=from%3Aigarashi_tea%20or%20from%3Amengotanpoochan%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F59ab",
    "name": "連日砂嵐",
    "producer": "BNG、はゃゃ",
    "xurl": "https://x.com/search?q=from%3ASandstorm_BNG%20or%20from%3Atomoetomonokai%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7E27ab",
    "name": "路地裏の兎",
    "producer": "堀兎、猫路地",
    "xurl": "https://x.com/search?q=from%3Aykbr_mrst%20or%20from%3Anekoroji_%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F61a",
    "name": "わいるどすぴいど",
    "producer": "たろうのすけ",
    "xurl": "https://x.com/search?q=from%3Aborn3kesan%20%23メルぱらRe2頒布物%20or%20%23メルぱらRe2&src=typed_query&f=live"
  },
  {
    "place": "東7F35b",
    "name": "301",
    "producer": "3",
    "xurl": ""
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

// お品書きの最大ページ数(2以上しか使わない)
let page_max = [1, 1, 1];

// 読み込み実行
if (localStorage.hasOwnProperty('bookmark')) {
  if (localStorage.getItem('bookmark').length > 0) {
    SaveData = localStorage.getItem('bookmark').split(',');
    //console.log(SaveData);

    for (const data of SaveData) {
      let desk_id = '#' + data.slice(0, 3);
      //console.log(desk_id);
      $('.container').find(desk_id).css('background-color', 'orange');
    }
  }
}

// キーワード検索を実行
$('#search').on('click', function () {
  const keyword = $(this).prev().val();
  // 表示を初期化
  $('.tbl').find('.booth, .another').removeClass('match');
  $('.club').find('.place, .name, .producer').removeClass('match');

  if (keyword) {
    for (const a of arr) {
      let flag = 0;

      if (a.place.includes(keyword)) {
        flag += 1;
      }
      if (a.name.includes(keyword)) {
        flag += 1;
      }
      if (a.producer.includes(keyword)) {
        flag += 1;
      }

      if (flag) {
        $('.tbl').find('#' + a.place.slice(2,5)).addClass('match');
      }
    }
  }
});

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


function checkImage(url){
  return new Promise(function (resolve, reject) {
      const img = new Image();
      img.src = url;
      img.onload = function () { return resolve(url) };
      img.onerror = function () { return reject(url) };
  });
};

// 最終ページが1の時はpage_max使わないので判定なしで大丈夫
async function menuCount(dir, i) {

  let img3_url = dir + 'menu3.jpg';
  checkImage(img3_url)
    .then(() => {

      let img4_url = dir + 'menu4.jpg';
      checkImage(img4_url)
        .then(() => {

          let img5_url = dir + 'menu5.jpg';
          checkImage(img5_url)
            .then(() => {

              let img6_url = dir + 'menu6.jpg';
              checkImage(img6_url)
                .then(() => {
                  page_max[i] = 6;
                })
                .catch(() => {
                  page_max[i] = 5;
                });
            })
            .catch(() => {
              page_max[i] = 4;
            });
        })
        .catch(() => {
          page_max[i] = 3;
        });
    })
    .catch(() => {
      page_max[i] = 2;
    });
}

/*
function menuCount(dir) {
  let i = 1, i_max = 7;

  for (i = 3; i < i_max; i++) {
    try {
      let img_url = dir + 'menu' + String(i) + '.jpg';
      checkImage(img_url);
    } catch {
      page_max = i - 1;
      // 強制的にループ抜けさせる
      i = i_max;
    }
  }
}
*/

// ブースをクリック
$('.tbl').on('click', '.booth, .another', function () {
    const desk = $(this).prop('id');
    const label = ['ab', 'a', 'b'];
    const data = label.map(lb => hash[desk + lb]);
    const $frame = label.map(lb => $('#' + lb));

    for (let i = 0; i < label.length; i++) {
      if (data[i] != null) {
        let hall = data[i].place.slice(0,2);
        let place_name = hall + ' ' + desk + '-' + label[i];
        $frame[i].find('.place').text('(' + place_name + ')');
        $frame[i].find('.name').text(data[i].name);
        $frame[i].find('.producer').text(data[i].producer);

        let $product = $frame[i].find('.url');
        $product.find('.goods').attr('href', data[i].xurl);
        if (data[i].xurl != '') {
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

        const img_dir = './img/' + desk + label[i] + '/';
        const img_url = img_dir + 'menu1.jpg';

        checkImage(img_url)
          .then(() => {
            $frame[i].find('.menu, .menu_').show();
            // お品書きクリック時判定だと即時反映できないため(原因不明)
            menuCount(img_dir, i);
            // 外に出すと出現が早い
            $frame[i].show();
          })
          .catch(() => {
            $frame[i].find('.menu, .menu_').hide();
            // 外に出すと出現が早い
            $frame[i].show();
          });
      } else {
        $frame[i].hide();
      }
    }
    // 使い方・更新履歴のリンクを隠す
    $('.link').hide();
});

//　お品書きをクリック
$('.club').on('click', '.menu', function () {
  const location  = $(this).closest('.club').find('.place').text();
  const key = location.slice(location.indexOf(' ') + 1, location.indexOf(')')).replace('-', '');

  const img_dir = './img/' + key + '/';
  // お品書きは1ページまでは存在
  const img_url = img_dir + 'menu1.jpg';
  $('#menu_img').attr('src', img_url);

  const $pages = $('#pages');
  const img2_url = img_dir + 'menu2.jpg';
  checkImage(img2_url)
    .then(() => {
      $pages.children('.back, .go').show();
      $pages.children('.page_num').text(1);
      if (key.includes('ab')) {
        $pages.children('.page_all').text(page_max[0]);
      } else if (key.includes('a')) {
        $pages.children('.page_all').text(page_max[1]);
      } else if (key.includes('b')) {
        $pages.children('.page_all').text(page_max[2]);
      } else {
        $pages.children('.page_all').text(0);
      }
    })
    .catch(() => {
      $pages.children('.back, .go').hide();
      $pages.children('.page_num').text(1);
      $pages.children('.page_all').text(1);
    });
});

// 次ページに進む
$('#pages').on('click', '.go', function () {
  const $pages = $('#pages');
  const current_page = Number($pages.children('.page_num').text());
  const final_page = Number($pages.children('.page_all').text());
  const next_page = current_page + 1;
  const current_url = $('#menu_img').attr('src');

  if (current_page < final_page) {
    var next_url = current_url.replace('menu' + String(current_page), 'menu' + String(next_page));
    $pages.children('.page_num').text(next_page);
  } else {
    var next_url = current_url.replace('menu' + String(current_page), 'menu1');
    $pages.children('.page_num').text(1)
  }
  $('#menu_img').attr('src', next_url);
});

// 前ページに戻る
$('#pages').on('click', '.back', function () {
  const $pages = $('#pages');
  const current_page = Number($pages.children('.page_num').text());
  const final_page = Number($pages.children('.page_all').text());
  const prev_page = current_page - 1;
  const current_url = $('#menu_img').attr('src');

  if (current_page > 1) {
    var next_url = current_url.replace('menu' + String(current_page), 'menu' + String(prev_page));
    $pages.children('.page_num').text(prev_page);
  } else {
    var next_url = current_url.replace('menu' + String(current_page), 'menu' + String(final_page));
    $pages.children('.page_num').text(final_page)
  }
  $('#menu_img').attr('src', next_url);
});


$('.popup').magnificPopup({
  type: 'inline',
  mainClass: 'mfp-fade', //フェードインアウトについてクラスを設定
  removalDelay: 100, //ポップアップが閉じるときの遅延時間を設定
});
// 閉じるボタン
$('.close').on('click', function (e) {
  e.preventDefault();
  $.magnificPopup.close();
});

/*
//後で念のため確認(onloadは動く)
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);

  } catch (error) {
    console.error(error.message);
  }
}

$(document).ready(function() {
	const url = './data.json' //任意のAPIのhttpアドレス
  getData(url);
});
*/
