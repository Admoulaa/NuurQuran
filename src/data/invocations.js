/**
 * DONNÉES COMPLÈTES DES INVOCATIONS (Adhkar)
 * Source: Hisn al-Muslim, Sahih Bukhari, Sahih Muslim, Abou Daoud, Tirmidhi, Ibn Maja, Nasai, Ahmed
 * Textes arabes complets et authentiques
 */

export const INVOCATIONS_DATA = [

  // ============================================
  // 1. PRIÈRE
  // ============================================
  {
    id: "priere",
    emoji: "🙏",
    title: "Prière",
    items: [
      {
        title: "Dua d'ouverture (Istiftah)",
        arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
        translit: "Subhanakallahumma wa bihamdika, wa tabarakasmuka, wa ta'ala jadduka, wa la ilaha ghayruk",
        translation: "Gloire à Toi ô Allah et Tes louanges. Béni soit Ton nom, élevée est Ta majesté. Il n'y a de divinité autre que Toi.",
        source: "Tirmidhi 243, Abou Daoud 775"
      },
      {
        title: "En s'inclinant (Ruku) — 3 fois minimum",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        translit: "Subhana Rabbiya al-'Azim",
        translation: "Gloire à mon Seigneur, le Très Grand.",
        source: "Abou Daoud 870"
      },
      {
        title: "En se relevant du Ruku",
        arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
        translit: "Sami'allahu liman hamidah, rabbana wa lakal-hamd, hamdan kathiran tayyiban mubarakan fih",
        translation: "Allah entend celui qui Le loue. Notre Seigneur, à Toi la louange, une louange abondante, bonne et bénie.",
        source: "Bukhari 689"
      },
      {
        title: "En se prosternant (Sujud) — 3 fois minimum",
        arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى",
        translit: "Subhana Rabbiya al-A'la",
        translation: "Gloire à mon Seigneur, le Très-Haut.",
        source: "Abou Daoud 871"
      },
      {
        title: "Entre les deux prosternations",
        arabic: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
        translit: "Rabbighfir li, Rabbighfir li",
        translation: "Seigneur, pardonne-moi. Seigneur, pardonne-moi.",
        source: "Abou Daoud 874"
      },
      {
        title: "Tashahhud complet",
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
        translit: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan 'abduhu wa rasuluh",
        translation: "Les salutations appartiennent à Allah, ainsi que les prières et les bonnes œuvres. Que la paix soit sur toi, ô Prophète, ainsi que la miséricorde d'Allah et Ses bénédictions. Que la paix soit sur nous et sur les serviteurs vertueux d'Allah. Je témoigne qu'il n'y a de divinité qu'Allah et je témoigne que Muhammad est Son serviteur et Son messager.",
        source: "Bukhari 831, Muslim 402"
      },
      {
        title: "Salawat Ibrahimiyya complète",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
        translit: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid",
        translation: "Ô Allah, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrahim et sur la famille d'Ibrahim. Tu es certes Digne de louange, Glorieux. Ô Allah, bénis Muhammad et la famille de Muhammad, comme Tu as béni Ibrahim et la famille d'Ibrahim. Tu es certes Digne de louange, Glorieux.",
        source: "Bukhari 3370, Muslim 406"
      },
      {
        title: "Dua avant le Salam (protection)",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
        translit: "Allahumma inni a'udhu bika min 'adhabi jahannam, wa min 'adhabil-qabr, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal",
        translation: "Ô Allah, je cherche Ta protection contre le châtiment de l'Enfer, contre le châtiment de la tombe, contre l'épreuve de la vie et de la mort, et contre le mal de l'épreuve du Faux Messie.",
        source: "Muslim 588"
      },
      {
        title: "Dua de Qunoot (Witr)",
        arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ",
        translit: "Allahumma-hdini fiman hadayt, wa 'afini fiman 'afayt, wa tawallani fiman tawallayt, wa barik li fima a'tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda 'alayk, wa innahu la yadhillu man walayt, tabarakta Rabbana wa ta'alayt",
        translation: "Ô Allah, guide-moi parmi ceux que Tu as guidés, protège-moi parmi ceux que Tu as protégés, prends-moi en charge parmi ceux que Tu as pris en charge, bénis ce que Tu m'as donné, protège-moi du mal de ce que Tu as décrété. Car Tu décides et on ne décide pas contre Toi. Celui que Tu aides n'est pas humilié. Tu es béni, notre Seigneur, et Tu es Très-Haut.",
        source: "Abou Daoud 1425, Tirmidhi 464"
      },
      {
        title: "Salam de fin de prière",
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
        translit: "As-salamu alaykum wa rahmatullah",
        translation: "Que la paix et la miséricorde d'Allah soient sur vous. (À droite puis à gauche)",
        source: "Muslim 582"
      },
      {
        title: "Dua de Musa (dans la difficulté)",
        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        translit: "Rabbi inni lima anzalta ilayya min khayrin faqir",
        translation: "Seigneur, je suis dans le besoin de tout bien que Tu feras descendre vers moi.",
        source: "Coran 28:24"
      },
    ]
  },

  // ============================================
  // 2. APRÈS LA PRIÈRE
  // ============================================
  {
    id: "apres_priere",
    emoji: "📿",
    title: "Après la prière",
    items: [
      {
        title: "Istighfar (3 fois) + As-Salam",
        arabic: "أَسْتَغْفِرُ اللَّهَ (×3)، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالإِكْرَامِ",
        translit: "Astaghfirullah (×3). Allahumma antas-salam wa minkas-salam, tabarakta ya dhal-jalali wal-ikram",
        translation: "Je demande pardon à Allah (3 fois). Ô Allah, Tu es la Paix et de Toi vient la Paix. Tu es béni, ô Possesseur de la Majesté et de la Générosité.",
        source: "Muslim 591"
      },
      {
        title: "Tasbih, Tahmid, Takbir (33 fois chacun)",
        arabic: "سُبْحَانَ اللَّهِ (×33)، الْحَمْدُ لِلَّهِ (×33)، اللَّهُ أَكْبَرُ (×33)، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translit: "SubhanAllah (×33), Alhamdulillah (×33), Allahu Akbar (×33). La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir",
        translation: "Gloire à Allah (33 fois). Louange à Allah (33 fois). Allah est le Plus Grand (33 fois). Il n'y a de divinité qu'Allah, unique sans associé. À Lui le royaume et à Lui la louange, et Il est Puissant sur toute chose. (Efface les péchés même s'ils sont comme l'écume de la mer)",
        source: "Muslim 597"
      },
      {
        title: "Ayat al-Kursi après la prière",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        translit: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi shay'im-min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ard. Wa la ya'uduhu hifzuhuma. Wa Huwal-'Aliyyul-'Azim",
        translation: "Allah — point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et ils n'embrassent de Sa science que ce qu'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand. (Quiconque le récite après la prière, rien ne l'empêchera d'entrer au Paradis sauf la mort)",
        source: "Coran 2:255 — Nasai (Sahih)"
      },
      {
        title: "La Maîtresse de l'imploration du pardon",
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
        translit: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, yuhyi wa yumit, wa huwa 'ala kulli shay'in qadir. Allahumma la mani'a lima a'tayta, wa la mu'tiya lima mana'ta, wa la yanfa'u dhal-jaddi minkal-jadd",
        translation: "Il n'y a de divinité qu'Allah, unique sans associé. À Lui le royaume et à Lui la louange. Il donne la vie et donne la mort, et Il est Puissant sur toute chose. Ô Allah, nul ne peut empêcher ce que Tu donnes, et nul ne peut donner ce que Tu retiens. La richesse ne profite pas à son possesseur auprès de Toi.",
        source: "Bukhari 844, Muslim 593"
      },
      {
        title: "Sourate Al-Ikhlas, Al-Falaq, An-Nas (après chaque prière)",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        translit: "Qul huwa Allahu ahad, Allahus-samad, lam yalid wa lam yulad, wa lam yakun lahu kufuwan ahad",
        translation: "Dis : Il est Allah, Unique. Allah, le Seul à être imploré. Il n'a jamais engendré, n'a pas été engendré non plus. Et nul n'est égal à Lui. (À lire avec Al-Falaq et An-Nas — 1 fois après chaque prière, 3 fois après Fajr et Maghrib)",
        source: "Abou Daoud 5082, Tirmidhi 2903"
      },
      {
        title: "Dua pour le Paradis (après Fajr et Maghrib)",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ، وَأَعُوذُ بِكَ مِنَ النَّارِ (×3)",
        translit: "Allahumma inni as'alukal-jannah, wa a'udhu bika minan-nar (×3)",
        translation: "Ô Allah, je Te demande le Paradis, et je cherche Ta protection contre l'Enfer. (3 fois après Fajr et Maghrib — le Paradis et l'Enfer intercèdent alors pour toi)",
        source: "Abou Daoud 792, Ibn Maja 910"
      },
      {
        title: "Dua pour les parents",
        arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
        translit: "Rabbighfir li wa liwalidayya wa lil-mu'minina yawma yaqumul-hisab",
        translation: "Seigneur, pardonne-moi, ainsi qu'à mes parents et aux croyants, le Jour où le compte sera établi.",
        source: "Coran 14:41"
      },
    ]
  },

  // ============================================
  // 3. ADHKAR DU MATIN
  // ============================================
  {
    id: "matin",
    emoji: "🌅",
    title: "Adhkar du matin",
    items: [
      {
        title: "Sayyid al-Istighfar (matin)",
        arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
        translit: "Allahumma anta Rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't. Abu'u laka bini'matika 'alayy, wa abu'u bidhanbi faghfir li fa innahu la yaghfirudh-dhunuba illa ant",
        translation: "Ô Allah, Tu es mon Seigneur, il n'y a de divinité que Toi. Tu m'as créé et je suis Ton serviteur. Je suis engagé à Ton pacte et Ta promesse dans la mesure du possible. Je cherche refuge en Toi contre le mal de ce que j'ai commis. Je reconnais Tes bienfaits envers moi et je reconnais mon péché. Pardonne-moi car nul ne pardonne les péchés hormis Toi. (Quiconque le dit le matin avec conviction et meurt dans la journée entre au Paradis)",
        source: "Bukhari 6306"
      },
      {
        title: "Ayat al-Kursi (matin)",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        translit: "Allahu la ilaha illa Huwal-Hayyul-Qayyum...",
        translation: "Verset du Trône complet. (À lire le matin — protège jusqu'au soir)",
        source: "Coran 2:255 — Nasai (Sahih)"
      },
      {
        title: "Adhkar du matin (1)",
        arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ",
        translit: "Asbahna wa asbahal-mulku lillah, walhamdulillah, la ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhal-yawm wa khayra ma ba'dah, wa a'udhu bika min sharri ma fi hadhal-yawm wa sharri ma ba'dah",
        translation: "Nous voici au matin, et le royaume appartient à Allah. Louange à Allah. Il n'y a de divinité qu'Allah, unique, sans associé. À Lui le royaume et la louange, et Il est Puissant sur toute chose. Seigneur, je Te demande le bien de ce jour et de ce qui le suit, et je cherche Ta protection contre le mal de ce jour et de ce qui le suit.",
        source: "Muslim 2723"
      },
      {
        title: "Protection du matin (3 fois)",
        arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        translit: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa huwas-Sami'ul-'Alim",
        translation: "Au nom d'Allah, avec Lequel rien ne peut nuire, ni sur terre ni dans le ciel. Il est l'Audient, l'Omniscient. (3 fois — protège de tout mal jusqu'au soir)",
        source: "Abou Daoud 5088, Tirmidhi 3388"
      },
      {
        title: "Rida bil-Islam (3 fois)",
        arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
        translit: "Raditu billahi Rabba, wa bil-Islami dinan, wa bi-Muhammadin sallallahu 'alayhi wa sallam Nabiyya",
        translation: "Je me satisfais d'Allah comme Seigneur, de l'Islam comme religion et de Muhammad ﷺ comme Prophète. (3 fois — Allah s'engage à le satisfaire)",
        source: "Tirmidhi 3389"
      },
      {
        title: "Yaa Hayyu Yaa Qayyum (matin)",
        arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
        translit: "Ya Hayyu Ya Qayyumu birahmatika astaghith, aslih li sha'ni kullahu, wa la takilni ila nafsi tarfata 'ayn",
        translation: "Ô Vivant, ô Subsistant, c'est par Ta miséricorde que je crie au secours. Arrange-moi toutes mes affaires et ne me confie pas à moi-même, ne serait-ce que le temps d'un clignement d'œil.",
        source: "Hakim (Sahih)"
      },
      {
        title: "SubhanaAllah wa bihamdihi (100 fois)",
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        translit: "SubhanAllahi wa bihamdih",
        translation: "Gloire à Allah et Sa louange. (100 fois le matin — efface les péchés même s'ils sont comme l'écume de la mer)",
        source: "Muslim 2692"
      },
      {
        title: "Tahlil (matin, 10 fois)",
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translit: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir",
        translation: "Il n'y a de divinité qu'Allah, unique, sans associé. À Lui le royaume et à Lui la louange, et Il est Puissant sur toute chose. (10 fois le matin = 10 esclaves affranchis, 100 bonnes actions, protection contre le diable)",
        source: "Tirmidhi 3474"
      },
      {
        title: "Sourate Al-Ikhlas, Al-Falaq, An-Nas (3 fois le matin)",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        translit: "Qul huwa Allahu ahad...",
        translation: "Al-Ikhlas (3 fois), Al-Falaq (3 fois), An-Nas (3 fois) — suffisent pour le matin et le soir.",
        source: "Abou Daoud 5082"
      },
      {
        title: "Dua de protection complète (matin)",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي",
        translit: "Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fi dini wa dunyaya wa ahli wa mali. Allahumastur 'awrati, wa amin raw'ati",
        translation: "Ô Allah, je Te demande la santé dans cette vie et dans l'au-delà. Ô Allah, je Te demande le pardon et la santé dans ma religion, ma vie ici-bas, ma famille et mes biens. Ô Allah, couvre mes défauts et apaise mes craintes.",
        source: "Abou Daoud 5074, Ibn Maja 3871"
      },
    ]
  },

  // ============================================
  // 4. ADHKAR DU SOIR
  // ============================================
  {
    id: "soir",
    emoji: "🌆",
    title: "Adhkar du soir",
    items: [
      {
        title: "Sayyid al-Istighfar (soir)",
        arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
        translit: "Allahumma anta Rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't. Abu'u laka bini'matika 'alayy, wa abu'u bidhanbi faghfir li fa innahu la yaghfirudh-dhunuba illa ant",
        translation: "Ô Allah, Tu es mon Seigneur, il n'y a de divinité que Toi. Tu m'as créé et je suis Ton serviteur. Je suis engagé à Ton pacte et Ta promesse dans la mesure du possible. Je cherche refuge en Toi contre le mal de ce que j'ai commis. Je reconnais Tes bienfaits envers moi et je reconnais mon péché. Pardonne-moi car nul ne pardonne les péchés hormis Toi. (Quiconque le dit le soir avec conviction et meurt dans la nuit entre au Paradis)",
        source: "Bukhari 6306"
      },
      {
        title: "Adhkar du soir (1)",
        arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا",
        translit: "Amsayna wa amsal-mulku lillah, walhamdulillah, la ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhihil-laylah wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hadhihil-laylah wa sharri ma ba'daha",
        translation: "Nous voici au soir, et le royaume appartient à Allah. Louange à Allah. Il n'y a de divinité qu'Allah, unique, sans associé. À Lui le royaume et la louange, et Il est Puissant sur toute chose. Seigneur, je Te demande le bien de cette nuit et de ce qui la suit, et je cherche Ta protection contre le mal de cette nuit et de ce qui la suit.",
        source: "Muslim 2723"
      },
      {
        title: "Protection du soir (3 fois)",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        translit: "A'udhu bikalimati-llahit-tammati min sharri ma khalaq",
        translation: "Je cherche protection dans les paroles parfaites d'Allah contre le mal de ce qu'Il a créé. (3 fois — protège de tout poison, bête venimeuse et mauvais œil jusqu'au matin)",
        source: "Muslim 2709"
      },
      {
        title: "Protection du corps (3 fois)",
        arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
        translit: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari, la ilaha illa ant",
        translation: "Ô Allah, protège mon corps. Ô Allah, protège mon ouïe. Ô Allah, protège ma vue. Il n'y a de divinité que Toi. (3 fois)",
        source: "Abou Daoud 5090"
      },
      {
        title: "Ayat al-Kursi (soir)",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
        translit: "Allahu la ilaha illa Huwal-Hayyul-Qayyum...",
        translation: "Verset du Trône complet. (À lire le soir — protège jusqu'au matin)",
        source: "Coran 2:255"
      },
      {
        title: "Dua de protection générale (soir)",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي",
        translit: "Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fi dini wa dunyaya wa ahli wa mali",
        translation: "Ô Allah, je Te demande la santé dans cette vie et dans l'au-delà. Ô Allah, je Te demande le pardon et la santé dans ma religion, ma vie ici-bas, ma famille et mes biens.",
        source: "Abou Daoud 5074"
      },
      {
        title: "Tasbih du soir (100 fois)",
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        translit: "SubhanAllahi wa bihamdih",
        translation: "Gloire à Allah et Sa louange. (100 fois le soir — efface les péchés même s'ils sont comme l'écume de la mer)",
        source: "Muslim 2692"
      },
    ]
  },

  // ============================================
  // 5. SOMMEIL
  // ============================================
  {
    id: "sommeil",
    emoji: "🌙",
    title: "Sommeil",
    items: [
      {
        title: "Bismika Allahumma (avant de dormir)",
        arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        translit: "Bismika Allahumma amutu wa ahya",
        translation: "C'est en Ton nom, ô Allah, que je meurs et que je vis.",
        source: "Bukhari 6324"
      },
      {
        title: "Dua du lit complet",
        arabic: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، اللَّهُمَّ آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
        translit: "Allahumma aslamtu nafsi ilayk, wa fawwadtu amri ilayk, wa wajjahtu wajhi ilayk, wa alja'tu zahri ilayk, raghbatan wa rahbatan ilayk, la malja'a wa la manja minka illa ilayk. Allahumma amantu bikitabika-lladhi anzalt, wa binabiyyikal-ladhi arsalt",
        translation: "Ô Allah, je me soumets à Toi, je remets mes affaires à Toi, je tourne mon visage vers Toi, je m'appuie sur Toi par désir et par crainte. Il n'y a de refuge et de salut de Toi qu'en Toi. Ô Allah, je crois en Ton Livre que Tu as révélé et en Ton Prophète que Tu as envoyé. (Quiconque meurt après cela meurt sur la fitrah)",
        source: "Bukhari 247, Muslim 2710"
      },
      {
        title: "Tasbih avant de dormir (33-33-34)",
        arabic: "سُبْحَانَ اللَّهِ (×33)، الْحَمْدُ لِلَّهِ (×33)، اللَّهُ أَكْبَرُ (×34)",
        translit: "SubhanAllah (×33), Alhamdulillah (×33), Allahu Akbar (×34)",
        translation: "Gloire à Allah (33 fois), Louange à Allah (33 fois), Allah est le Plus Grand (34 fois). (Meilleur qu'un serviteur — force pour la prière de nuit)",
        source: "Bukhari 3705, Muslim 2727"
      },
      {
        title: "Sourates de protection avant de dormir",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        translit: "Qul huwa Allahu ahad...",
        translation: "Al-Ikhlas, Al-Falaq, An-Nas — souffler sur ses mains et se frotter tout le corps. (3 fois chacune — le Prophète ﷺ ne dormait pas sans les lire)",
        source: "Bukhari 5017"
      },
      {
        title: "Ayat al-Kursi avant de dormir",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
        translit: "Allahu la ilaha illa Huwal-Hayyul-Qayyum...",
        translation: "Verset du Trône — Un gardien d'Allah veille sur toi et le diable ne t'approche pas jusqu'au matin.",
        source: "Bukhari 2311"
      },
      {
        title: "Al-Kafirun avant de dormir",
        arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ ۝ لَا أَعْبُدُ مَا تَعْبُدُونَ ۝ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ۝ وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ ۝ وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ ۝ لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
        translit: "Qul ya ayyuhal-kafirun, la a'budu ma ta'budun, wa la antum 'abiduna ma a'bud, wa la ana 'abidum-ma 'abadtum, wa la antum 'abiduna ma a'bud, lakum dinukum wa liya din",
        translation: "Dis : Ô vous les mécréants, je n'adore pas ce que vous adorez, et vous n'adorez pas ce que j'adore... À vous votre religion, à moi la mienne. (Sourate Al-Kafirun = protection contre le shirk)",
        source: "Abou Daoud 5055"
      },
      {
        title: "Au réveil du matin",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        translit: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
        translation: "Louange à Allah qui nous a redonné la vie après nous avoir fait mourir, et c'est vers Lui que sera la résurrection.",
        source: "Bukhari 6312"
      },
      {
        title: "En se réveillant la nuit",
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، الْحَمْدُ لِلَّهِ، وَسُبْحَانَ اللَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        translit: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir. Alhamdulillah, wa SubhanAllah, wa la ilaha illallah, wallahu akbar, wa la hawla wa la quwwata illa billah",
        translation: "Il n'y a de divinité qu'Allah, unique, sans associé... (À lire si on se réveille la nuit — ses péchés lui sont pardonnés même s'ils sont comme l'écume de la mer)",
        source: "Bukhari 1154"
      },
      {
        title: "Contre les cauchemars",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ وَشَرِّ عِبَادِهِ وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ",
        translit: "A'udhu bikalimati-llahit-tammati min ghadabihi wa 'iqabihi wa sharri 'ibadihi wa min hamazatish-shayatini wa an yahdurun",
        translation: "Je cherche protection dans les paroles parfaites d'Allah contre Sa colère, Son châtiment, le mal de Ses serviteurs, les suggestions des démons et leur présence. (À lire si on a un cauchemar)",
        source: "Abou Daoud 3893"
      },
    ]
  },

  // ============================================
  // 6. PROTECTION
  // ============================================
  {
    id: "protection",
    emoji: "🛡️",
    title: "Protection",
    items: [
      {
        title: "Ayat al-Kursi",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        translit: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi shay'im-min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ard. Wa la ya'uduhu hifzuhuma. Wa Huwal-'Aliyyul-'Azim",
        translation: "Allah — point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et ils n'embrassent de Sa science que ce qu'Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.",
        source: "Coran 2:255"
      },
      {
        title: "Sourate Al-Falaq complète",
        arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        translit: "Qul a'udhu bi Rabbil-falaq, min sharri ma khalaq, wa min sharri ghasiqin idha waqab, wa min sharrin-naffathati fil-'uqad, wa min sharri hasidin idha hasad",
        translation: "Dis : Je cherche refuge auprès du Seigneur de l'aube naissante, contre le mal de ce qu'Il a créé, contre le mal de l'obscurité quand elle s'étend, contre le mal de celles qui soufflent sur les nœuds, et contre le mal de l'envieux quand il envie.",
        source: "Coran 113"
      },
      {
        title: "Sourate An-Nas complète",
        arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
        translit: "Qul a'udhu bi Rabbin-nas, Malikin-nas, Ilahin-nas, min sharril-waswasil-khannas, alladhi yuwaswisu fi sudurin-nas, minal-jinnati wan-nas",
        translation: "Dis : Je cherche refuge auprès du Seigneur des hommes, du Roi des hommes, du Dieu des hommes, contre le mal du mauvais conseiller qui se retire, qui souffle le mal dans les poitrines des hommes, qu'il soit djinn ou homme.",
        source: "Coran 114"
      },
      {
        title: "Hawqala",
        arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        translit: "La hawla wa la quwwata illa billah",
        translation: "Il n'y a de force et de puissance qu'en Allah. (Trésor du Paradis)",
        source: "Bukhari 6384"
      },
      {
        title: "Protection contre le mauvais œil",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
        translit: "A'udhu bikalimati-llahit-tammati min kulli shaytanin wa hammah, wa min kulli 'aynin lammah",
        translation: "Je cherche protection dans les paroles parfaites d'Allah contre tout diable et bête venimeuse, et contre tout mauvais œil.",
        source: "Bukhari 3371"
      },
      {
        title: "HasbunAllah (lors d'une épreuve)",
        arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
        translit: "HasbunAllahu wa ni'mal-wakil",
        translation: "Allah nous suffit, et quelle excellente protection ! (Ce qu'Ibrahim a dit quand il fut jeté dans le feu, et Muhammad ﷺ quand on lui dit que les gens se rassemblaient contre lui)",
        source: "Coran 3:173 — Bukhari 4563"
      },
      {
        title: "Les deux derniers versets de la Baqara",
        arabic: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
        translit: "Amanar-rasulu bima unzila ilayhi mir-Rabbihi wal-mu'minun, kullun amana billahi wa mala'ikatihi wa kutubihi wa rusulihi, la nufarriqu bayna ahadin mir-rusulih, wa qalu sami'na wa ata'na ghufranaka Rabbana wa ilaykal-masir. La yukallifullahu nafsan illa wus'aha, laha ma kasabat wa 'alayha maktasabat. Rabbana la tu'akhidhna in nasina aw akhta'na, Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina, Rabbana wa la tuhammilna ma la taqata lana bih, wa'fu 'anna waghfir lana warhamna, anta mawlana fansurna 'alal-qawmil-kafirin",
        translation: "Le Messager a cru en ce qu'on a fait descendre sur lui venant de son Seigneur, et les croyants aussi : Chacun a cru en Allah, en Ses anges, en Ses Livres et en Ses messagers... (Quiconque récite ces deux versets la nuit, ils lui suffisent)",
        source: "Coran 2:285-286 — Bukhari 5009"
      },
      {
        title: "Dua contre le diable (en entrant dans les lieux)",
        arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        translit: "A'udhu billahi minash-shaytanir-rajim",
        translation: "Je cherche refuge en Allah contre le diable maudit.",
        source: "Coran 16:98"
      },
    ]
  },

  // ============================================
  // 7. PARDON ET REPENTIR
  // ============================================
  {
    id: "pardon",
    emoji: "🤲",
    title: "Pardon et Repentir",
    items: [
      {
        title: "Istighfar complet",
        arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
        translit: "Astaghfirullaha al-'Azima alladhi la ilaha illa Huwa al-Hayyul-Qayyumu wa atubu ilayh",
        translation: "Je demande pardon à Allah le Très Grand, en dehors de Qui il n'y a pas de divinité, le Vivant, le Subsistant, et je me repens à Lui. (Allah lui pardonne ses péchés même s'il a fui le combat)",
        source: "Abou Daoud 1517, Tirmidhi 3577"
      },
      {
        title: "Dua de Yunus (dans la détresse)",
        arabic: "لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        translit: "La ilaha illa anta subhanaka inni kuntu mina-z-zalimin",
        translation: "Il n'y a de divinité que Toi, gloire à Toi. J'ai vraiment été du nombre des injustes. (Dua de Yunus dans le ventre de la baleine — exaucée pour tout croyant en détresse)",
        source: "Coran 21:87 — Tirmidhi 3505"
      },
      {
        title: "Repentir sincère (Tawbah)",
        arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
        translit: "Rabbighfir li wa tub 'alayya innaka antat-Tawwabur-Rahim",
        translation: "Seigneur, pardonne-moi et accueille mon repentir. Tu es certes Celui qui accepte le repentir, le Très Miséricordieux. (Le Prophète ﷺ la disait 100 fois par jour)",
        source: "Bukhari 834"
      },
      {
        title: "Dua de Adam (après la faute)",
        arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
        translit: "Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakununna minal-khassirin",
        translation: "Notre Seigneur, nous avons été injustes envers nous-mêmes. Si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons certes du nombre des perdants.",
        source: "Coran 7:23"
      },
      {
        title: "Pardon journalier (100 fois)",
        arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
        translit: "Astaghfirullah wa atubu ilayh",
        translation: "Je demande pardon à Allah et je me repens à Lui. (Le Prophète ﷺ disait ceci 100 fois par jour)",
        source: "Bukhari 6307"
      },
      {
        title: "Dua de Nuh",
        arabic: "رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي أَكُن مِّنَ الْخَاسِرِينَ",
        translit: "Rabbi inni a'udhu bika an as'alaka ma laysa li bihi 'ilmun wa illa taghfir li wa tarhamni akun minal-khassirin",
        translation: "Seigneur, je cherche refuge en Toi de Te demander ce dont je n'ai pas de connaissance. Et si Tu ne me pardonnes pas et ne me fais pas miséricorde, je serai du nombre des perdants.",
        source: "Coran 11:47"
      },
      {
        title: "Dua d'Ibrahim pour le pardon",
        arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
        translit: "Rabbanaghfir li wa liwalidayya wa lil-mu'minina yawma yaqumul-hisab",
        translation: "Notre Seigneur, pardonne-moi, ainsi qu'à mes parents et aux croyants, le Jour où le Compte sera établi.",
        source: "Coran 14:41"
      },
    ]
  },

  // ============================================
  // 8. MAISON
  // ============================================
  {
    id: "maison",
    emoji: "🏠",
    title: "Maison",
    items: [
      {
        title: "En entrant chez soi",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
        translit: "Allahumma inni as'aluka khayral-mawlaji wa khayral-makhraji, bismillahi walajana, wa bismillahi kharajna, wa 'alallahi Rabbina tawakkalna",
        translation: "Ô Allah, je Te demande le bien de l'entrée et le bien de la sortie. Au nom d'Allah nous entrons, au nom d'Allah nous sortons, et en Allah notre Seigneur nous plaçons notre confiance.",
        source: "Abou Daoud 5096"
      },
      {
        title: "En sortant de chez soi",
        arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        translit: "Bismillah, tawakkaltu 'alalLah, wa la hawla wa la quwwata illa billah",
        translation: "Au nom d'Allah, je place ma confiance en Allah, et il n'y a de force et de puissance qu'en Allah. (On lui dit : tu es guidé, protégé et préservé, et le diable s'éloigne de lui)",
        source: "Abou Daoud 5095, Tirmidhi 3426"
      },
      {
        title: "Avant de dormir (protection de la maison)",
        arabic: "بِسْمِ اللَّهِ أَغْلِقُ بَابِي، وَأُوقِدُ نَارِي، وَأَكْنُفُ أَهْلِي",
        translit: "Bismillahi ughliqu babi, wa uqidu nari, wa aknufu ahli",
        translation: "Au nom d'Allah, je ferme ma porte, j'éteins mon feu, et je protège ma famille.",
        source: "Bukhari (adab al-mufrad)"
      },
      {
        title: "En entrant dans une nouvelle maison",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ أَهْلِهَا وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا وَشَرِّ مَا فِيهَا",
        translit: "Allahumma inni as'aluka khayroha wa khayra ahliha wa khayra ma fiha, wa a'udhu bika min sharriha wa sharri ahliha wa sharri ma fiha",
        translation: "Ô Allah, je Te demande le bien de cette maison, le bien de ses habitants et le bien de ce qu'elle contient. Et je cherche Ta protection contre son mal, le mal de ses habitants et le mal de ce qu'elle contient.",
        source: "Abou Daoud 5097"
      },
      {
        title: "Dua pour la bénédiction du foyer",
        arabic: "اللَّهُمَّ بَارِكْ لَنَا فِي بُيُوتِنَا وَأَهْلِنَا وَأَمْوَالِنَا",
        translit: "Allahumma barik lana fi buyutina wa ahlina wa amwalina",
        translation: "Ô Allah, bénis nos maisons, nos familles et nos biens.",
        source: "Ibn Sunni"
      },
    ]
  },

  // ============================================
  // 9. MOSQUÉE
  // ============================================
  {
    id: "mosquee",
    emoji: "🕌",
    title: "Mosquée",
    items: [
      {
        title: "En entrant dans la mosquée",
        arabic: "أَعُوذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ. بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ. اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
        translit: "A'udhu billahil-'Azim, wa biwajhihil-karim, wa sultanihil-qadim, minash-shaytanir-rajim. Bismillah, was-salatu was-salamu 'ala Rasulillah. Allahumma iftah li abwaba rahmatik",
        translation: "Je cherche refuge en Allah le Très Grand, en Son noble Visage et en Son autorité éternelle, contre le diable maudit. Au nom d'Allah, et que la prière et le salut soient sur le Messager d'Allah. Ô Allah, ouvre-moi les portes de Ta miséricorde.",
        source: "Abou Daoud 465, Muslim 713"
      },
      {
        title: "En sortant de la mosquée",
        arabic: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ. اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ. اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ",
        translit: "Bismillah, was-salatu was-salamu 'ala Rasulillah. Allahumma inni as'aluka min fadlik. Allahumma i'simni minash-shaytanir-rajim",
        translation: "Au nom d'Allah, et que la prière et le salut soient sur le Messager d'Allah. Ô Allah, je Te demande de Ta grâce. Ô Allah, préserve-moi du diable maudit.",
        source: "Ibn Maja 772, Muslim 713"
      },
      {
        title: "Après l'Adhan (dua complet)",
        arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ، إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ",
        translit: "Allahumma Rabba hadhihid-da'watit-tammah, was-salatil-qa'imah, ati Muhammadanil-wasilata wal-fadilah, wab'athhu maqamam-mahmudanil-ladhi wa'adtah, innaka la tukhlifu-l-mi'ad",
        translation: "Ô Allah, Seigneur de cet appel parfait et de la prière établie, accorde à Muhammad le rang d'intercesseur et la distinction, et élève-le au rang louable que Tu lui as promis. Tu ne manques jamais à Ta promesse. (La shafa'ah du Prophète ﷺ est acquise à celui qui dit ceci)",
        source: "Bukhari 614"
      },
      {
        title: "Répétition de l'Adhan",
        arabic: "وَأَنَا أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبًّا وَبِمُحَمَّدٍ رَسُولًا وَبِالْإِسْلَامِ دِينًا",
        translit: "Wa ana ash-hadu an la ilaha illallah wahdahu la sharika lah, wa anna Muhammadan 'abduhu wa rasuluh, raditu billahi Rabba, wa bi-Muhammadin rasulan, wa bil-Islami dinan",
        translation: "Et moi je témoigne qu'il n'y a de divinité qu'Allah, unique, sans associé, et que Muhammad est Son serviteur et Son messager. Je me satisfais d'Allah comme Seigneur, de Muhammad comme messager et de l'Islam comme religion. (Ses péchés lui sont pardonnés)",
        source: "Muslim 386"
      },
    ]
  },

  // ============================================
  // 10. VOYAGE
  // ============================================
  {
    id: "voyage",
    emoji: "🚗",
    title: "Voyage",
    items: [
      {
        title: "En montant dans un véhicule",
        arabic: "بِسْمِ اللَّهِ، الْحَمْدُ لِلَّهِ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ. اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى. اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
        translit: "Bismillah, alhamdulillah, subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun. Allahumma inna nas'aluka fi safarina hadhal-birra wat-taqwa, wa minal-'amali ma tarda. Allahumma hawwin 'alayna safarana hadha watwi 'anna bu'dah",
        translation: "Au nom d'Allah. Louange à Allah. Gloire à Celui qui a soumis cela pour nous. Nous retournerons certes à notre Seigneur. Ô Allah, nous Te demandons dans ce voyage la piété et la crainte de Toi, et une œuvre qui Te satisfasse. Ô Allah, facilite-nous ce voyage et raccourcis sa distance.",
        source: "Muslim 1342"
      },
      {
        title: "Dua du voyageur",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ",
        translit: "Allahumma inni a'udhu bika min wa'tha'is-safar, wa ka'abatil-manzar, wa su'il-munqalabi fil-mali wal-ahl",
        translation: "Ô Allah, je cherche Ta protection contre les difficultés du voyage, contre la vue désolante et contre un mauvais retour en ce qui concerne les biens et la famille.",
        source: "Muslim 1342"
      },
      {
        title: "Au retour du voyage",
        arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
        translit: "A'ibuna ta'ibuna 'abiduna li-Rabbina hamidun",
        translation: "Nous revenons, repentants, adorant notre Seigneur et Le louant.",
        source: "Bukhari 1797"
      },
      {
        title: "En entrant dans une nouvelle ville",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ أَهْلِهَا وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا وَشَرِّ مَا فِيهَا",
        translit: "Allahumma inni as'aluka khayroha wa khayra ahliha wa khayra ma fiha, wa a'udhu bika min sharriha wa sharri ahliha wa sharri ma fiha",
        translation: "Ô Allah, je Te demande le bien de cette ville, le bien de ses habitants et le bien de ce qu'elle contient. Et je cherche Ta protection contre son mal, le mal de ses habitants et le mal de ce qu'elle contient.",
        source: "Muslim 1342"
      },
      {
        title: "Dua pour celui qui reste",
        arabic: "أَسْتَوْدِعُكَ اللَّهَ الَّذِي لَا تَضِيعُ وَدَائِعُهُ",
        translit: "Astawdi'ukallaha-lladhi la tadi'u wada'i'uh",
        translation: "Je te confie à Allah, Celui dont les dépôts ne se perdent jamais.",
        source: "Ibn Maja 2825"
      },
      {
        title: "Dua du voyageur pour ceux qu'il laisse",
        arabic: "أَسْتَوْدِعُ اللَّهَ دِينَكَ وَأَمَانَتَكَ وَخَوَاتِيمَ عَمَلِكَ",
        translit: "Astawdi'ullaha dinaka wa amanataka wa khawatima 'amalik",
        translation: "Je confie à Allah ta religion, ta confiance et la fin de tes œuvres.",
        source: "Abou Daoud 2600, Tirmidhi 3443"
      },
    ]
  },

  // ============================================
  // 11. NOURRITURE
  // ============================================
  {
    id: "nourriture",
    emoji: "🍽️",
    title: "Nourriture et boisson",
    items: [
      {
        title: "Avant de manger",
        arabic: "بِسْمِ اللَّهِ",
        translit: "Bismillah",
        translation: "Au nom d'Allah. (Si on oublie au début : Bismillahi awwalahu wa akhirah — Au nom d'Allah, au début et à la fin)",
        source: "Abou Daoud 3767"
      },
      {
        title: "Après avoir mangé",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
        translit: "Alhamdulillahil-ladhi at'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah",
        translation: "Louange à Allah qui m'a nourri de cela et me l'a accordé sans force ni puissance de ma part. (Ses péchés passés lui sont pardonnés)",
        source: "Abou Daoud 4023, Tirmidhi 3458"
      },
      {
        title: "Bénédiction de l'hôte",
        arabic: "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ، وَاغْفِرْ لَهُمْ، وَارْحَمْهُمْ",
        translit: "Allahumma barik lahum fima razaqtahum, waghfir lahum, warhamhum",
        translation: "Ô Allah, bénis ce que Tu leur as accordé, pardonne-leur et fais-leur miséricorde.",
        source: "Muslim 2042"
      },
      {
        title: "Avant de boire de l'eau",
        arabic: "بِسْمِ اللَّهِ",
        translit: "Bismillah",
        translation: "Au nom d'Allah. (Boire en trois gorgées, en tenant le verre de la main droite)",
        source: "Tirmidhi 1885"
      },
      {
        title: "Après avoir bu du lait",
        arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ",
        translit: "Allahumma barik lana fihi wa zidna minh",
        translation: "Ô Allah, bénis-le pour nous et accorde-nous en davantage.",
        source: "Abou Daoud 3730, Tirmidhi 3455"
      },
      {
        title: "Dua de jeûne involontaire (chez quelqu'un)",
        arabic: "أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلَائِكَةُ",
        translit: "Aftara 'indakumus-sa'imun, wa akala ta'amakumul-abrar, wa sallat 'alaykumul-mala'ikah",
        translation: "Que les jeûneurs rompent leur jeûne chez vous, que les vertueux mangent votre nourriture et que les anges prient pour vous.",
        source: "Abou Daoud 3854, Ibn Maja 1747"
      },
    ]
  },

  // ============================================
  // 12. DHIKR GÉNÉRAL
  // ============================================
  {
    id: "dhikr",
    emoji: "✨",
    title: "Dhikr général",
    items: [
      {
        title: "Les quatre meilleures paroles",
        arabic: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
        translit: "SubhanAllah, walhamdulillah, wa la ilaha illallah, wallahu akbar",
        translation: "Gloire à Allah, Louange à Allah, Il n'y a de divinité qu'Allah, Allah est le Plus Grand. (Les paroles les plus aimées d'Allah)",
        source: "Muslim 2137"
      },
      {
        title: "Deux paroles légères, lourdes dans la balance",
        arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
        translit: "SubhanAllahi wa bihamdih, SubhanAllahil-'Azim",
        translation: "Gloire à Allah et Sa louange. Gloire à Allah le Très Grand. (Légères sur la langue, lourdes dans la balance, aimées du Miséricordieux)",
        source: "Bukhari 6682"
      },
      {
        title: "Tahlil (100 fois)",
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translit: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir",
        translation: "Il n'y a de divinité qu'Allah, unique, sans associé. À Lui le royaume et à Lui la louange, et Il est Puissant sur toute chose. (100 fois = affranchissement de 10 esclaves, 100 bonnes actions, effacement de 100 péchés, protection du diable)",
        source: "Bukhari 6403"
      },
      {
        title: "Salawat sur le Prophète ﷺ",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
        translit: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid",
        translation: "Ô Allah, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrahim et sur la famille d'Ibrahim. Tu es certes Digne de louange, Glorieux. (1 salawat = 10 bénédictions d'Allah sur toi)",
        source: "Bukhari 3370"
      },
      {
        title: "Yaa Hayyu Yaa Qayyum",
        arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
        translit: "Ya Hayyu Ya Qayyumu birahmatika astaghith",
        translation: "Ô Vivant, ô Subsistant, c'est par Ta miséricorde que je crie au secours.",
        source: "Tirmidhi 3524"
      },
      {
        title: "Istighfar (70 fois ou plus par jour)",
        arabic: "أَسْتَغْفِرُ اللَّهَ",
        translit: "Astaghfirullah",
        translation: "Je demande pardon à Allah. (Le Prophète ﷺ demandait pardon plus de 70 fois par jour)",
        source: "Bukhari 6307"
      },
      {
        title: "SubhanaAllah al-'Azim",
        arabic: "سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ",
        translit: "SubhanAllahil-'Azimi wa bihamdih",
        translation: "Gloire à Allah le Très Grand et Sa louange. (Un palmier est planté au Paradis pour celui qui la dit)",
        source: "Tirmidhi 3464"
      },
      {
        title: "Dua de Suleiman",
        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ",
        translit: "Rabbi awzi'ni an ashkura ni'matakal-lati an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardahu wa adkhilni birahmatika fi 'ibadikas-salihin",
        translation: "Seigneur, fais que je sois reconnaissant pour Tes bienfaits que Tu m'as accordés ainsi qu'à mes parents, et que j'accomplisse de bonnes œuvres qui T'agréent, et fais-moi entrer par Ta miséricorde parmi Tes serviteurs vertueux.",
        source: "Coran 27:19"
      },
    ]
  },

  // ============================================
  // 13. SANTÉ ET MALADIE
  // ============================================
  {
    id: "sante",
    emoji: "💊",
    title: "Santé et maladie",
    items: [
      {
        title: "Ruqya (7 fois sur le malade)",
        arabic: "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ",
        translit: "Bismillahi arqika, min kulli shay'in yu'dhika, min sharri kulli nafsin aw 'ayni hasidin, Allahu yashfika, bismillahi arqika",
        translation: "Au nom d'Allah je te fais une ruqya, contre tout ce qui te nuit, contre le mal de toute âme ou d'un œil envieux. Qu'Allah te guérisse. Au nom d'Allah je te fais une ruqya.",
        source: "Muslim 2186"
      },
      {
        title: "Pour soi-même quand on est malade",
        arabic: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
        translit: "Allahumma Rabban-nas, adhhib al-ba's, ishfi, Antash-shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqama",
        translation: "Ô Allah, Seigneur des gens, éloigne le mal, guéris-moi, Tu es le Guérisseur, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie.",
        source: "Bukhari 5743"
      },
      {
        title: "En posant la main sur la douleur",
        arabic: "بِسْمِ اللَّهِ (×3)، أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (×7)",
        translit: "Bismillah (×3), A'udhu billahi wa qudratihi min sharri ma ajidu wa uhadhir (×7)",
        translation: "Au nom d'Allah (3 fois). Je cherche refuge en Allah et en Sa puissance contre le mal que je ressens et contre ce que je redoute. (7 fois)",
        source: "Muslim 2202"
      },
      {
        title: "En rendant visite au malade",
        arabic: "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
        translit: "La ba'sa tahurun in sha Allah",
        translation: "Pas de problème, que cela soit une purification, si Allah le veut.",
        source: "Bukhari 5656"
      },
      {
        title: "Dua pour le malade (7 fois)",
        arabic: "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
        translit: "As'alullaha-l-'Azima Rabbal-'arshil-'azimi an yashfiyak",
        translation: "Je demande à Allah le Très Grand, Seigneur du Trône immense, de te guérir. (7 fois — si ce n'est pas son heure, il guérit)",
        source: "Abou Daoud 3106, Tirmidhi 2083"
      },
      {
        title: "Contre la fièvre",
        arabic: "بِسْمِ اللَّهِ الْكَبِيرِ، أَعُوذُ بِاللَّهِ الْعَظِيمِ مِنْ شَرِّ كُلِّ عِرْقٍ نَعَّارٍ وَمِنْ شَرِّ حَرِّ النَّارِ",
        translit: "Bismillahil-kabir, a'udhu billahil-'azimi min sharri kulli 'irqin na'arin wa min sharri harrin-nar",
        translation: "Au nom d'Allah le Très Grand, je cherche refuge en Allah le Très Grand contre le mal de toute veine qui saigne et contre la chaleur du feu.",
        source: "Tirmidhi 2075"
      },
    ]
  },

  // ============================================
  // 14. HAJJ ET UMRAH
  // ============================================
  {
    id: "hajj_umrah",
    emoji: "🕋",
    title: "Hajj et Umrah",
    items: [
      {
        title: "Talbiya complète",
        arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
        translit: "Labbayk Allahumma labbayk, labbayk la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak",
        translation: "Me voici ô Allah, me voici. Me voici, Tu n'as pas d'associé, me voici. La louange, la grâce et le Royaume T'appartiennent. Tu n'as pas d'associé.",
        source: "Bukhari 1549"
      },
      {
        title: "En voyant la Kaaba",
        arabic: "اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً",
        translit: "Allahumma zid hadhal-bayta tashrifa wa ta'ziman wa takriman wa mahabah",
        translation: "Ô Allah, augmente pour cette Maison l'honneur, la vénération, la dignité et la crainte.",
        source: "Shafi'i"
      },
      {
        title: "Pendant le Tawaf (entre les deux coins yéménites)",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translit: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
        translation: "Notre Seigneur, accorde-nous le bien dans cette vie et le bien dans l'au-delà, et préserve-nous du châtiment du Feu.",
        source: "Coran 2:201 — Abou Daoud 1892"
      },
      {
        title: "Dua d'Arafat (meilleure invocation)",
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translit: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir",
        translation: "Il n'y a de divinité qu'Allah, unique, sans associé. À Lui le royaume et à Lui la louange, et Il est Puissant sur toute chose. (Meilleure invocation du jour d'Arafat)",
        source: "Tirmidhi 3585"
      },
      {
        title: "Sur la colline de Safa",
        arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ، أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translit: "Innas-safa wal-marwata min sha'a'irillah, abd'u bima bada'allahu bih, la ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, yuhyi wa yumitu wa huwa 'ala kulli shay'in qadir",
        translation: "Safa et Marwa font partie des lieux sacrés d'Allah. Je commence par ce qu'Allah a commencé. Il n'y a de divinité qu'Allah, unique, sans associé. À Lui le royaume et la louange. Il donne la vie et donne la mort, et Il est Puissant sur toute chose.",
        source: "Muslim 1218"
      },
    ]
  },

  // ============================================
  // 15. JEÛNE (RAMADAN)
  // ============================================
  {
    id: "jeune",
    emoji: "🌙",
    title: "Jeûne (Ramadan)",
    items: [
      {
        title: "À la rupture du jeûne (Iftar) — 1",
        arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
        translit: "Allahumma laka sumtu wa 'ala rizqika aftart",
        translation: "Ô Allah, pour Toi j'ai jeûné et avec Ton subsistance je romps le jeûne.",
        source: "Abou Daoud 2358"
      },
      {
        title: "À la rupture du jeûne (Iftar) — 2",
        arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
        translit: "Dhahaba-z-zama'u wabtallatil-'uruqu wa thabatal-ajru in sha Allah",
        translation: "La soif a disparu, les veines sont désaltérées et la récompense est assurée, si Allah le veut.",
        source: "Abou Daoud 2357"
      },
      {
        title: "Nuit du Destin (Laylatul-Qadr)",
        arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        translit: "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni",
        translation: "Ô Allah, Tu es le Pardonneur, Tu aimes pardonner, alors pardonne-moi.",
        source: "Tirmidhi 3513"
      },
      {
        title: "Intention du jeûne (Niyyah)",
        arabic: "نَوَيْتُ صَوْمَ غَدٍ مِنْ شَهْرِ رَمَضَانَ الْمُبَارَكِ فَرْضًا لِلَّهِ تَعَالَى",
        translit: "Nawaytu sawma ghadin min shahri Ramadanal-mubarak fardan lillahi ta'ala",
        translation: "J'ai l'intention de jeûner demain du mois béni de Ramadan, comme acte obligatoire pour Allah le Très-Haut.",
        source: "Tradition des savants"
      },
      {
        title: "Dua de Sahur",
        arabic: "اللَّهُمَّ بَارِكْ لَنَا فِي سُحُورِنَا",
        translit: "Allahumma barik lana fi suhuruna",
        translation: "Ô Allah, bénis notre sahur.",
        source: "Tradition"
      },
    ]
  },

  // ============================================
  // 16. STRESS ET DÉTRESSE
  // ============================================
  {
    id: "stress",
    emoji: "😰",
    title: "Stress et détresse",
    items: [
      {
        title: "Dua contre l'anxiété",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
        translit: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-jubni wal-bukhl, wa dala'id-dayni wa ghalabatir-rijal",
        translation: "Ô Allah, je cherche Ta protection contre l'inquiétude et la tristesse, l'impuissance et la paresse, la lâcheté et l'avarice, le fardeau des dettes et la domination des hommes.",
        source: "Bukhari 6363"
      },
      {
        title: "Dua de Yunus (détresse extrême)",
        arabic: "لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        translit: "La ilaha illa anta subhanaka inni kuntu mina-z-zalimin",
        translation: "Il n'y a de divinité que Toi, gloire à Toi. J'ai vraiment été du nombre des injustes.",
        source: "Coran 21:87 — Tirmidhi 3505"
      },
      {
        title: "Dua contre la dépression",
        arabic: "اللَّهُمَّ إِنِّي عَبْدُكَ وَابْنُ عَبْدِكَ وَابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي",
        translit: "Allahumma inni 'abduka wabnu 'abdika wabnu amatika, nasiyati biyadika, madin fiyya hukmuka, 'adlun fiyya qada'uka, as'aluka bikulli ismin huwa laka sammayta bihi nafsaka, aw anzaltahu fi kitabika, aw 'allamtahu ahadan min khalqika, awista'tharta bihi fi 'ilmil-ghaybi 'indaka, an taj'alal-qur'ana rabi'a qalbi wa nura sadri wa jala'a huzni wa dhahaba hammi",
        translation: "Ô Allah, je suis Ton serviteur, fils de Ton serviteur, fils de Ta servante. Tu tiens mon destin en Ta main. Ton jugement s'accomplit sur moi. Ton décret est juste à mon égard. Je Te supplie par chaque nom qui est à Toi... de faire du Coran le printemps de mon cœur, la lumière de ma poitrine, le départ de ma tristesse et la disparition de mon inquiétude. (Allah enlèvera sa tristesse et lui donnera la joie à la place)",
        source: "Ahmed 3528 (Sahih)"
      },
      {
        title: "Tawakkul (confiance en Allah)",
        arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        translit: "HasbiyAllahu la ilaha illa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'arshil-'azim",
        translation: "Allah me suffit. Il n'y a de divinité que Lui. En Lui je place ma confiance, et Il est le Seigneur du Trône immense. (7 fois matin et soir — Allah s'occupe de ses affaires)",
        source: "Abou Daoud 5081"
      },
    ]
  },

  // ============================================
  // 17. CONNAISSANCE ET ÉTUDES
  // ============================================
  {
    id: "connaissance",
    emoji: "📚",
    title: "Connaissance et études",
    items: [
      {
        title: "Avant d'étudier",
        arabic: "رَبِّ زِدْنِي عِلْمًا",
        translit: "Rabbi zidni 'ilma",
        translation: "Seigneur, augmente-moi en savoir.",
        source: "Coran 20:114"
      },
      {
        title: "Pour la mémorisation",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
        translit: "Allahumma inni as'aluka 'ilman nafi'an wa rizqan tayyiban wa 'amalan mutaqabbala",
        translation: "Ô Allah, je Te demande une science utile, un bon subsistance et une œuvre acceptée.",
        source: "Ibn Maja 925"
      },
      {
        title: "Avant de lire le Coran",
        arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        translit: "A'udhu billahi minash-shaytanir-rajim",
        translation: "Je cherche refuge en Allah contre le diable maudit.",
        source: "Coran 16:98"
      },
      {
        title: "Dua de compréhension",
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِن لِّسَانِي يَفْقَهُوا قَوْلِي",
        translit: "Rabbish-rah li sadri, wa yassir li amri, wahlul 'uqdatan min lisani yafqahu qawli",
        translation: "Seigneur, ouvre ma poitrine, facilite-moi ma tâche, dénoue le nœud de ma langue afin qu'ils comprennent mes paroles. (Dua de Musa avant de parler au Pharaon)",
        source: "Coran 20:25-28"
      },
      {
        title: "Contre l'oubli",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ",
        translit: "Allahumma inni a'udhu bika minal-hammi wal-hazan wa a'udhu bika minal-'ajzi wal-kasal",
        translation: "Ô Allah, je cherche Ta protection contre l'inquiétude, la tristesse, l'impuissance et la paresse.",
        source: "Bukhari 6363"
      },
    ]
  },

  // ============================================
  // 18. TRAVAIL ET SUBSISTANCE
  // ============================================
  {
    id: "travail",
    emoji: "💼",
    title: "Travail et subsistance",
    items: [
      {
        title: "Dua pour le subsistance",
        arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        translit: "Allahumma-kfini bi-halalika 'an haramika, wa aghni-ni bi-fadlika 'amman siwak",
        translation: "Ô Allah, rends-moi indépendant du haram par le halal, et rends-moi indépendant de tout autre que Toi par Ta grâce.",
        source: "Tirmidhi 3563"
      },
      {
        title: "En commençant le travail",
        arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        translit: "Bismillahi tawakkaltu 'alalLahi wa la hawla wa la quwwata illa billah",
        translation: "Au nom d'Allah, je place ma confiance en Allah, et il n'y a de force et de puissance qu'en Allah.",
        source: "Abou Daoud 5095"
      },
      {
        title: "Dua de richesse",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
        translit: "Allahumma inni as'aluka min fadlik",
        translation: "Ô Allah, je Te demande de Ta grâce.",
        source: "Muslim 713"
      },
      {
        title: "Dua d'Ibrahim pour la prospérité",
        arabic: "رَبِّ اجْعَلْ هَذَا الْبَلَدَ آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ",
        translit: "Rabbij-'al hadhal-balada aminan warzuq ahlahu minat-thamarat",
        translation: "Seigneur, fais de cette cité un lieu sûr et accorde à ses habitants les fruits en subsistance.",
        source: "Coran 2:126"
      },
      {
        title: "Dua contre la pauvreté",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَالْقِلَّةِ وَالذِّلَّةِ وَأَعُوذُ بِكَ مِنْ أَنْ أَظْلِمَ أَوْ أُظْلَمَ",
        translit: "Allahumma inni a'udhu bika minal-faqri wal-qillati wadh-dhillati, wa a'udhu bika min an azlima aw uzlam",
        translation: "Ô Allah, je cherche Ta protection contre la pauvreté, le dénuement et l'humiliation, et je cherche Ta protection contre le fait d'oppresser ou d'être oppressé.",
        source: "Abou Daoud 1544"
      },
    ]
  },

  // ============================================
  // 19. MARIAGE ET FAMILLE
  // ============================================
  {
    id: "mariage",
    emoji: "💒",
    title: "Mariage et famille",
    items: [
      {
        title: "Bénédiction du marié",
        arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
        translit: "Baraka Allahu laka wa baraka 'alayka wa jama'a baynakuma fi khayr",
        translation: "Qu'Allah te bénisse et répande Sa bénédiction sur toi, et vous unisse dans le bien.",
        source: "Abou Daoud 2130, Tirmidhi 1091"
      },
      {
        title: "En entrant dans la chambre nuptiale",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَمِنْ شَرِّ مَا جَبَلْتَهَا عَلَيْهِ",
        translit: "Allahumma inni as'aluka khayroha wa khayra ma jabaltaha 'alayk, wa a'udhu bika min sharriha wa min sharri ma jabaltaha 'alayk",
        translation: "Ô Allah, je Te demande son bien et le bien de ce en quoi Tu l'as créée, et je cherche Ta protection contre son mal et contre le mal de ce en quoi Tu l'as créée.",
        source: "Abou Daoud 2160, Ibn Maja 1918"
      },
      {
        title: "Avant les relations conjugales",
        arabic: "بِسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا",
        translit: "Bismillah, Allahumma jannibna-sh-shaytana wa jannibish-shaytana ma razaqtana",
        translation: "Au nom d'Allah. Ô Allah, éloigne de nous le diable et éloigne le diable de ce que Tu nous accorderas. (Si un enfant naît de cette union, le diable ne pourra lui nuire)",
        source: "Bukhari 141"
      },
      {
        title: "Dua pour les enfants",
        arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        translit: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqina imama",
        translation: "Notre Seigneur, accorde-nous de nos épouses et de notre descendance ce qui réjouira nos yeux, et fais de nous un modèle pour les pieux.",
        source: "Coran 25:74"
      },
      {
        title: "Pour la bénédiction du foyer",
        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ",
        translit: "Rabbi awzi'ni an ashkura ni'matakal-lati an'amta 'alayya wa 'ala walidayya",
        translation: "Seigneur, fais que je sois reconnaissant pour Tes bienfaits que Tu m'as accordés ainsi qu'à mes parents.",
        source: "Coran 27:19"
      },
      {
        title: "Pour les parents",
        arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        translit: "Rabbir-hamhuma kama rabbayyani saghira",
        translation: "Seigneur, fais-leur miséricorde comme ils m'ont élevé quand j'étais petit.",
        source: "Coran 17:24"
      },
    ]
  },

  // ============================================
  // 20. FUNÉRAIRE ET MORT
  // ============================================
  {
    id: "funeraire",
    emoji: "🕯️",
    title: "Funéraire",
    items: [
      {
        title: "Inna Lillahi (en cas de calamité)",
        arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
        translit: "Inna lillahi wa inna ilayhi raji'un. Allahumma-jurni fi musibati wa akhlif li khayran minha",
        translation: "Nous appartenons à Allah et c'est vers Lui que nous retournons. Ô Allah, récompense-moi dans mon épreuve et remplace-la-moi par quelque chose de meilleur. (Si quelqu'un dit ceci après une calamité, Allah le remplace par mieux)",
        source: "Coran 2:156 — Muslim 918"
      },
      {
        title: "Pour le défunt (prière funèbre)",
        arabic: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الذُّنُوبِ وَالْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ",
        translit: "Allahumma-ghfir lahu warhamhu wa 'afihi wa'fu 'anhu, wa akrim nuzulahu wa wassi' madkhalahu, waghsilhu bil-ma'i wath-thalji wal-barad, wa naqqihi minadh-dhunubi wal-khataaya kama yunaqqath-thawbul-abyadhu minad-danas",
        translation: "Ô Allah, pardonne-lui, fais-lui miséricorde, protège-le et pardonne-lui, honore son séjour et élargis son entrée, lave-le avec l'eau, la neige et la grêle, et purife-le des péchés et des fautes comme un vêtement blanc est purifié de la souillure.",
        source: "Muslim 963"
      },
      {
        title: "En passant devant les tombes",
        arabic: "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ لَلَاحِقُونَ، نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",
        translit: "As-salamu 'alaykum ahlad-diyari minal-mu'minina wal-muslimin, wa inna in sha Allaha lallahiqun, nas'alullaha lana wa lakumul-'afiyah",
        translation: "Que la paix soit sur vous, ô habitants de ces demeures, croyants et musulmans. Nous vous rejoindrons certes, si Allah le veut. Nous demandons à Allah pour nous et pour vous la santé.",
        source: "Muslim 975"
      },
      {
        title: "Condoléances",
        arabic: "إِنَّ لِلَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى، فَلْتَصْبِرْ وَلْتَحْتَسِبْ",
        translit: "Inna lillahi ma akhadha, wa lahu ma a'ta, wa kullu shay'in 'indahu bi-ajalin musamma, fal-tasbir wal-tahtasib",
        translation: "À Allah appartient ce qu'Il a repris, et à Lui ce qu'Il a donné. Tout a auprès de Lui un terme fixé. Sois donc patient et compte sur la récompense d'Allah.",
        source: "Bukhari 1284"
      },
      {
        title: "Pour le mort après l'enterrement",
        arabic: "اللَّهُمَّ اغْفِرْ لِفُلَانٍ وَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ وَاخْلُفْهُ فِي عَقِبِهِ فِي الْغَابِرِينَ وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِينَ",
        translit: "Allahumma-ghfir li fulanin warfa' darajatahu fil-mahdiyyina wakhlufhu fi 'aqibihi fil-ghabirin, waghfir lana wa lahu ya Rabbal-'alamin",
        translation: "Ô Allah, pardonne à [untel] et élève son rang parmi les bien guidés, remplace-le auprès de sa descendance parmi les survivants, pardonne-nous et lui, ô Seigneur des mondes.",
        source: "Muslim 963"
      },
    ]
  },

  // ============================================
  // 21. DHIKR APRÈS LES PRIÈRES
  // ============================================
  {
    id: "dhikr_apres_priere",
    emoji: "📿",
    title: "Dhikr selon les prières",
    items: [
      {
        title: "Après Fajr (spécifique)",
        arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ (×7)",
        translit: "Allahumma ajirni minan-nar (×7)",
        translation: "Ô Allah, protège-moi du Feu. (7 fois après Fajr et Maghrib — si on meurt ce jour-là, Allah le protège du Feu)",
        source: "Abou Daoud 5079"
      },
      {
        title: "Après Maghrib et Fajr (spécifique)",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ (×3)",
        translit: "Allahumma inni as'alukal-jannah, wa a'udhu bika minan-nar (×3)",
        translation: "Ô Allah, je Te demande le Paradis et je cherche Ta protection contre l'Enfer. (3 fois après Fajr et Maghrib)",
        source: "Abou Daoud 792"
      },
      {
        title: "Tasbih de Fatima (après chaque prière)",
        arabic: "سُبْحَانَ اللَّهِ (×33)، الْحَمْدُ لِلَّهِ (×33)، اللَّهُ أَكْبَرُ (×34)",
        translit: "SubhanAllah (×33), Alhamdulillah (×33), Allahu Akbar (×34)",
        translation: "Gloire à Allah (33 fois), Louange à Allah (33 fois), Allah est le Plus Grand (34 fois). (Meilleur que d'avoir un serviteur — Fatima le faisait après chaque prière)",
        source: "Bukhari 3705"
      },
      {
        title: "Salawat après la prière",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ",
        translit: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad kama sallayta 'ala Ibrahim",
        translation: "Ô Allah, prie sur Muhammad et sur la famille de Muhammad comme Tu as prié sur Ibrahim.",
        source: "Bukhari 3370"
      },
    ]
  },

  // ============================================
  // 22. DUA DU CORAN
  // ============================================
  {
    id: "dua_coran",
    emoji: "📖",
    title: "Dua du Coran",
    items: [
      {
        title: "Dua d'Ibrahim (universel)",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translit: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
        translation: "Notre Seigneur, accorde-nous le bien dans cette vie et le bien dans l'au-delà, et préserve-nous du châtiment du Feu.",
        source: "Coran 2:201"
      },
      {
        title: "Dua de la Fatiha (guidée)",
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        translit: "Ihdinas-siratal-mustaqim, siratal-ladhina an'amta 'alayhim ghayril-maghdubi 'alayhim wa lad-dallin",
        translation: "Guide-nous dans le droit chemin, le chemin de ceux que Tu as comblés de bienfaits, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
        source: "Coran 1:6-7"
      },
      {
        title: "Dua de la Baqara (pardon)",
        arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
        translit: "Rabbana la tu'akhidhna in nasina aw akhta'na, Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina, Rabbana wa la tuhammilna ma la taqata lana bih, wa'fu 'anna waghfir lana warhamna, anta mawlana fansurna 'alal-qawmil-kafirin",
        translation: "Notre Seigneur, ne nous tiens pas rigueur si nous oublions ou si nous commettons des erreurs. Notre Seigneur, ne nous impose pas un fardeau comme Tu en as imposé un à ceux d'avant nous. Notre Seigneur, ne nous charge pas de ce que nous n'avons pas la force de porter. Efface nos fautes, pardonne-nous et fais-nous miséricorde. Tu es notre Maître, alors donne-nous la victoire sur les peuples mécréants.",
        source: "Coran 2:286"
      },
      {
        title: "Dua d'Ali Imran (guidée vers la vérité)",
        arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
        translit: "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana mil-ladunka rahmatan innaka antal-wahhab",
        translation: "Notre Seigneur, ne laisse pas nos cœurs dévier après que Tu nous as guidés. Et accorde-nous Ta miséricorde. C'est Toi le Grand Donateur.",
        source: "Coran 3:8"
      },
      {
        title: "Dua de Musa (aide et guidée)",
        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        translit: "Rabbi inni lima anzalta ilayya min khayrin faqir",
        translation: "Seigneur, je suis dans le besoin de tout bien que Tu feras descendre vers moi.",
        source: "Coran 28:24"
      },
      {
        title: "Dua d'Ayyub (maladie et épreuve)",
        arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
        translit: "Anni massaniya-d-durru wa anta arhamur-rahimin",
        translation: "Le mal m'a touché et Tu es le plus Miséricordieux des miséricordieux.",
        source: "Coran 21:83"
      },
      {
        title: "Dua de Zakariyya (pour un enfant)",
        arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
        translit: "Rabbi la tadharni fardan wa anta khayrul-waritheen",
        translation: "Seigneur, ne me laisse pas seul, et Tu es le meilleur des héritiers.",
        source: "Coran 21:89"
      },
      {
        title: "Dua de fin de vie",
        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
        translit: "Rabbana afrigh 'alayna sabran wa tawaffana muslimin",
        translation: "Notre Seigneur, répands sur nous l'endurance et fais-nous mourir en musulmans.",
        source: "Coran 7:126"
      },
      {
        title: "Dua de guidée (Al-Kahf)",
        arabic: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
        translit: "Rabbana atina mil-ladunka rahmatan wa hayyi' lana min amrina rashada",
        translation: "Notre Seigneur, accorde-nous de Ta part une miséricorde et prépare pour nous, dans notre situation, une bonne direction.",
        source: "Coran 18:10"
      },
    ]
  },

  // ============================================
  // 23. PROTECTION QUOTIDIENNE
  // ============================================
  {
    id: "protection_quotidienne",
    emoji: "🔒",
    title: "Protection quotidienne",
    items: [
      {
        title: "Contre le diable (matin et soir)",
        arabic: "أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        translit: "A'udhu billahis-sami'il-'alimi minash-shaytanir-rajim",
        translation: "Je cherche refuge en Allah l'Audient, l'Omniscient, contre le diable maudit.",
        source: "Abou Daoud 775"
      },
      {
        title: "Protection du regard",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ سَمْعِي وَمِنْ شَرِّ بَصَرِي",
        translit: "Allahumma inni a'udhu bika min sharri sam'i wa min sharri basari",
        translation: "Ô Allah, je cherche Ta protection contre le mal de mon ouïe et contre le mal de ma vue.",
        source: "Abou Daoud 1551"
      },
      {
        title: "Protection de la langue",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ لِسَانِي",
        translit: "Allahumma inni a'udhu bika min sharri lisani",
        translation: "Ô Allah, je cherche Ta protection contre le mal de ma langue.",
        source: "Abou Daoud 1551"
      },
      {
        title: "Protection du cœur",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ",
        translit: "Allahumma inni a'udhu bika minal-kufri wal-faqr",
        translation: "Ô Allah, je cherche Ta protection contre l'impiété et la pauvreté.",
        source: "Abou Daoud 1544"
      },
      {
        title: "Protection générale (matin et soir)",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
        translit: "Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah",
        translation: "Ô Allah, je Te demande la santé dans cette vie et dans l'au-delà.",
        source: "Ibn Maja 3871"
      },
    ]
  },

  // ============================================
  // 24. ABLUTIONS (WUDHU)
  // ============================================
  {
    id: "wudhu",
    emoji: "💧",
    title: "Ablutions (Wudhu)",
    items: [
      {
        title: "Avant les ablutions",
        arabic: "بِسْمِ اللَّهِ",
        translit: "Bismillah",
        translation: "Au nom d'Allah. (Obligation de commencer par Bismillah)",
        source: "Abou Daoud 101"
      },
      {
        title: "Après les ablutions",
        arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
        translit: "Ash-hadu an la ilaha illallah wahdahu la sharika lah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh. Allahumma-j'alni minat-tawwabina waj'alni minal-mutatahhirin",
        translation: "Je témoigne qu'il n'y a de divinité qu'Allah, unique, sans associé, et je témoigne que Muhammad est Son serviteur et Son messager. Ô Allah, fais de moi l'un de ceux qui se repentent souvent et fais de moi l'un de ceux qui se purifient. (Les huit portes du Paradis s'ouvrent pour lui)",
        source: "Muslim 234, Tirmidhi 55"
      },
      {
        title: "En entrant dans les toilettes",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
        translit: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith",
        translation: "Ô Allah, je cherche Ta protection contre les démons mâles et femelles.",
        source: "Bukhari 142"
      },
      {
        title: "En sortant des toilettes",
        arabic: "غُفْرَانَكَ",
        translit: "Ghufranaka",
        translation: "Ton pardon (je Te demande).",
        source: "Abou Daoud 30, Tirmidhi 7"
      },
    ]
  },

  // ============================================
  // 25. SALAWAT SUR LE PROPHÈTE ﷺ
  // ============================================
  {
    id: "salawat",
    emoji: "ﷺ",
    title: "Salawat sur le Prophète ﷺ",
    items: [
      {
        title: "Salawat Ibrahimiyya complète",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
        translit: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid",
        translation: "Ô Allah, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrahim et sur la famille d'Ibrahim. Tu es certes Digne de louange, Glorieux. Ô Allah, bénis Muhammad et la famille de Muhammad, comme Tu as béni Ibrahim et la famille d'Ibrahim. Tu es certes Digne de louange, Glorieux.",
        source: "Bukhari 3370, Muslim 406"
      },
      {
        title: "Salawat simple",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
        translit: "Allahumma salli 'ala Muhammad",
        translation: "Ô Allah, prie sur Muhammad. (1 salawat = 10 bénédictions d'Allah sur toi)",
        source: "Muslim 408"
      },
      {
        title: "Salawat du vendredi (1000 fois)",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
        translit: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad",
        translation: "Ô Allah, prie sur Muhammad et sur la famille de Muhammad. (Beaucoup de salawat le vendredi — recommandé)",
        source: "Abou Daoud 1047"
      },
      {
        title: "Salawat de la demande exaucée",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ النَّبِيِّ الْأُمِّيِّ",
        translit: "Allahumma salli 'ala Muhammadin 'abdika wa rasulikan-nabiyyil-ummiyy",
        translation: "Ô Allah, prie sur Muhammad, Ton serviteur et Ton messager, le Prophète analphabète.",
        source: "Ahmed"
      },
    ]
  },

  // ============================================
  // 26. JOIE ET GRATITUDE
  // ============================================
  {
    id: "joie",
    emoji: "😊",
    title: "Joie et gratitude",
    items: [
      {
        title: "En recevant une bonne nouvelle",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
        translit: "Alhamdulillahil-ladhi bini'matihi tatimmussalihat",
        translation: "Louange à Allah par la grâce de Qui les bonnes choses s'accomplissent.",
        source: "Ibn Maja 3803"
      },
      {
        title: "En voyant quelque chose qui plaît",
        arabic: "سُبْحَانَ اللَّهِ",
        translit: "SubhanAllah",
        translation: "Gloire à Allah ! (Exclamation d'émerveillement et de gratitude)",
        source: "Bukhari"
      },
      {
        title: "Remerciement général",
        arabic: "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ",
        translit: "Alhamdulillahi 'ala kulli hal",
        translation: "Louange à Allah en toute circonstance.",
        source: "Ibn Maja"
      },
      {
        title: "Shukr (reconnaissance)",
        arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
        translit: "Allahumma ma asbaha bi min ni'matin aw bi-ahadin min khalqika faminka wahdaka la sharika lak, falakal-hamdu wa lakash-shukr",
        translation: "Ô Allah, toute grâce qui m'atteint ou atteint l'une de Tes créatures ce matin vient de Toi seul, sans associé. À Toi la louange et à Toi la reconnaissance. (Accomplit l'obligation de remerciement de la journée)",
        source: "Abou Daoud 5073"
      },
    ]
  },

  // ============================================
  // 27. DEMANDE DE GUIDÉE
  // ============================================
  {
    id: "guidee",
    emoji: "🌟",
    title: "Guidée et droiture",
    items: [
      {
        title: "Dua Istikhara complet",
        arabic: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ",
        translit: "Allahumma inni astakhiruka bi'ilmika, wa astaqdiruka biqudratika, wa as'aluka min fadlikal-'azim, fa innaka taqdiru wa la aqdiru, wa ta'lamu wa la a'lamu, wa anta 'allamul-ghuyub. Allahumma in kunta ta'lamu anna hadhal-amra khayrun li fi dini wa ma'ashi wa 'aqibati amri faqdurhu li wa yassirhu li thumma barik li fih, wa in kunta ta'lamu anna hadhal-amra sharrun li fi dini wa ma'ashi wa 'aqibati amri fasrifhu 'anni wasrifni 'anhu waqdur liyal-khayra haythu kana thumma ardini bih",
        translation: "Ô Allah, je Te demande de choisir pour moi grâce à Ta science, je Te demande de me donner la capacité grâce à Ta puissance, et je Te demande Ta grâce immense. Car Tu peux et je ne peux pas, Tu sais et je ne sais pas, et Tu connais les choses cachées. Ô Allah, si Tu sais que cette affaire est bonne pour moi dans ma religion, ma vie et la fin de mes affaires, décrète-la pour moi, facilite-la-moi puis bénis-la pour moi. Et si Tu sais que cette affaire est mauvaise pour moi dans ma religion, ma vie et la fin de mes affaires, détourne-la de moi et détourne-moi d'elle. Décrète pour moi le bien où qu'il soit, puis rends-moi satisfait de lui.",
        source: "Bukhari 7390"
      },
      {
        title: "Dua pour la droiture",
        arabic: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
        translit: "Allahumma-hdini wa saddidni",
        translation: "Ô Allah, guide-moi et dirige-moi vers la droiture.",
        source: "Muslim 2725"
      },
      {
        title: "Dua contre les égarements",
        arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
        translit: "Rabbana la tuzigh qulubana ba'da idh hadaytana",
        translation: "Notre Seigneur, ne laisse pas nos cœurs dévier après que Tu nous as guidés.",
        source: "Coran 3:8"
      },
    ]
  },

  // ============================================
  // 28. ENFANTS ET NOUVEAU-NÉS
  // ============================================
  {
    id: "enfants",
    emoji: "👶",
    title: "Enfants et nouveau-nés",
    items: [
      {
        title: "Protection des enfants (Tahwidh)",
        arabic: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
        translit: "U'idhukuma bikalimati-llahit-tammati min kulli shaytanin wa hammatin wa min kulli 'aynin lammah",
        translation: "Je vous confie à la protection des paroles parfaites d'Allah contre tout diable, toute bête venimeuse et tout mauvais œil. (Le Prophète ﷺ protégeait ainsi Al-Hasan et Al-Husayn)",
        source: "Bukhari 3371"
      },
      {
        title: "Pour le nouveau-né",
        arabic: "أَللَّهُمَّ إِنِّي أُعِيذُهُ بِكَ وَذُرِّيَّتَهُ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        translit: "Allahumma inni u'idhuhu bika wa dhurriyyatahu minash-shaytanir-rajim",
        translation: "Ô Allah, je le confie à Ta protection ainsi que sa descendance contre le diable maudit.",
        source: "Abou Daoud 2067"
      },
      {
        title: "Dua pour un bon enfant",
        arabic: "رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ",
        translit: "Rabbi hab li mil-ladunka dhurriyyatan tayyibatan innaka sami'ud-du'a",
        translation: "Seigneur, accorde-moi de Ta part une bonne descendance. Tu es certes Celui qui exauce les prières.",
        source: "Coran 3:38"
      },
      {
        title: "Pour élever les enfants",
        arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
        translit: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yun",
        translation: "Notre Seigneur, accorde-nous de nos épouses et de notre descendance ce qui réjouira nos yeux.",
        source: "Coran 25:74"
      },
    ]
  },

  // ============================================
  // 29. VENDREDI (JUMU'AH)
  // ============================================
  {
    id: "vendredi",
    emoji: "🕌",
    title: "Vendredi (Jumu'ah)",
    items: [
      {
        title: "Salawat du vendredi",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ",
        translit: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad kama sallayta 'ala Ibrahim",
        translation: "Ô Allah, prie sur Muhammad et sur la famille de Muhammad comme Tu as prié sur Ibrahim. (Beaucoup de salawat le vendredi — recommandé)",
        source: "Abou Daoud 1047"
      },
      {
        title: "Sourate Al-Kahf (vendredi)",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَى عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا",
        translit: "Alhamdulillahil-ladhi anzala 'ala 'abdihi-l-kitaba wa lam yaj'al lahu 'iwaja",
        translation: "Louange à Allah qui a fait descendre sur Son serviteur le Livre et ne lui a pas donné de tortuosité. (Début de Sourate Al-Kahf — à lire chaque vendredi pour une lumière entre deux vendredis)",
        source: "Coran 18:1 — Hakim"
      },
      {
        title: "Dua de l'heure exaucée du vendredi",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
        translit: "Allahumma inni as'aluka bi-annaka Antallahu la ilaha illa Antal-Ahadus-Samadu-lladhi lam yalid wa lam yulad wa lam yakun lahu kufuwan ahad",
        translation: "Ô Allah, je Te supplie par le fait que Tu es Allah, qu'il n'y a de divinité que Toi, l'Unique, l'Absolu, Celui qui n'a pas engendré et n'a pas été engendré, et à Qui rien n'est égal.",
        source: "Abou Daoud 1493, Ibn Maja 3857"
      },
    ]
  },

  // ============================================
  // 30. PLUIE ET MÉTÉO
  // ============================================
  {
    id: "meteo",
    emoji: "🌤️",
    title: "Météo et nature",
    items: [
      {
        title: "En voyant la pluie",
        arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
        translit: "Allahumma sayyiban nafi'a",
        translation: "Ô Allah, une pluie bénéfique.",
        source: "Bukhari 1032"
      },
      {
        title: "Après la pluie",
        arabic: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
        translit: "Mutirna bifadlillahi wa rahmatihi",
        translation: "Nous avons reçu la pluie grâce à la grâce d'Allah et Sa miséricorde.",
        source: "Bukhari 846"
      },
      {
        title: "Lors du tonnerre",
        arabic: "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
        translit: "SubhanaLladhii yusabbihur-ra'du bihamdihi wal-mala'ikatu min khifatih",
        translation: "Gloire à Celui dont le tonnerre Le glorifie en Le louant, et les anges par crainte de Lui.",
        source: "Muwatta Malik"
      },
      {
        title: "Contre le vent fort",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ",
        translit: "Allahumma inni as'aluka khayroha wa khayra ma fiha wa khayra ma ursilat bih, wa a'udhu bika min sharriha wa sharri ma fiha wa sharri ma ursilat bih",
        translation: "Ô Allah, je Te demande son bien, le bien de ce qu'elle contient et le bien pour lequel elle a été envoyée. Et je cherche Ta protection contre son mal, le mal de ce qu'elle contient et le mal pour lequel elle a été envoyée.",
        source: "Muslim 899"
      },
      {
        title: "En voyant le croissant de lune",
        arabic: "اللَّهُ أَكْبَرُ، اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّي وَرَبُّكَ اللَّهُ",
        translit: "Allahu akbar, Allahumma ahillahu 'alayna bil-amni wal-imani was-salamati wal-Islam, Rabbi wa Rabbuka Allah",
        translation: "Allah est le Plus Grand. Ô Allah, fais que ce croissant nous apporte sécurité, foi, salut et Islam. Mon Seigneur et ton Seigneur est Allah.",
        source: "Tirmidhi 3451"
      },
    ]
  },

  // ============================================
  // 31. EXPRESSIONS QUOTIDIENNES
  // ============================================
  {
    id: "expressions",
    emoji: "💬",
    title: "Expressions quotidiennes",
    items: [
      {
        title: "Quand on planifie quelque chose",
        arabic: "إِن شَاءَ اللَّهُ",
        translit: "In sha Allah",
        translation: "Si Allah le veut. (Obligation de le dire quand on planifie une action future)",
        source: "Coran 18:23-24"
      },
      {
        title: "En voyant quelque chose d'admirable",
        arabic: "مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ",
        translit: "Ma sha Allah la quwwata illa billah",
        translation: "Ce qu'Allah a voulu ! Il n'y a de puissance qu'en Allah. (Protection contre le mauvais œil)",
        source: "Coran 18:39"
      },
      {
        title: "En commençant quelque chose",
        arabic: "بِسْمِ اللَّهِ",
        translit: "Bismillah",
        translation: "Au nom d'Allah.",
        source: "Bukhari"
      },
      {
        title: "Quand on reçoit une bonne nouvelle",
        arabic: "الْحَمْدُ لِلَّهِ",
        translit: "Alhamdulillah",
        translation: "Louange à Allah.",
        source: "Bukhari"
      },
      {
        title: "Quand on éternue",
        arabic: "الْحَمْدُ لِلَّهِ",
        translit: "Alhamdulillah",
        translation: "Louange à Allah. (Réponse de l'autre : Yarhamukallah — qu'Allah te fasse miséricorde)",
        source: "Bukhari 6224"
      },
      {
        title: "En rencontrant quelqu'un",
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
        translit: "As-salamu 'alaykum wa rahmatullahi wa barakatuh",
        translation: "Que la paix, la miséricorde d'Allah et Ses bénédictions soient sur vous.",
        source: "Abou Daoud 5195"
      },
      {
        title: "En se séparant",
        arabic: "فِي أَمَانِ اللَّهِ",
        translit: "Fi amanillah",
        translation: "Que tu sois sous la protection d'Allah.",
        source: "Tradition"
      },
      {
        title: "Pour féliciter",
        arabic: "بَارَكَ اللَّهُ فِيكَ",
        translit: "Baraka Allahu fik",
        translation: "Qu'Allah te bénisse.",
        source: "Tirmidhi 2091"
      },
    ]
  },

  // ============================================
  // 32. RAMADAN ET NUIT DU DESTIN
  // ============================================
  {
    id: "ramadan",
    emoji: "🌙",
    title: "Ramadan et nuit du Destin",
    items: [
      {
        title: "Nuit du Destin (Laylatul-Qadr)",
        arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        translit: "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni",
        translation: "Ô Allah, Tu es le Pardonneur, Tu aimes pardonner, alors pardonne-moi.",
        source: "Tirmidhi 3513, Ibn Maja 3850"
      },
      {
        title: "En voyant le croissant du Ramadan",
        arabic: "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ، رَبِّي وَرَبُّكَ اللَّهُ",
        translit: "Allahumma ahillahu 'alayna bil-amni wal-imani was-salamati wal-Islam, Rabbi wa Rabbuka Allah",
        translation: "Ô Allah, fais que ce croissant nous apporte sécurité, foi, salut et Islam. Mon Seigneur et ton Seigneur est Allah.",
        source: "Tirmidhi 3451"
      },
      {
        title: "Iftar — rupture du jeûne (1)",
        arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
        translit: "Allahumma laka sumtu wa 'ala rizqika aftart",
        translation: "Ô Allah, pour Toi j'ai jeûné et avec Ton subsistance je romps le jeûne.",
        source: "Abou Daoud 2358"
      },
      {
        title: "Iftar — rupture du jeûne (2)",
        arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
        translit: "Dhahaba-z-zama'u wabtallatil-'uruqu wa thabatal-ajru in sha Allah",
        translation: "La soif a disparu, les veines sont désaltérées et la récompense est assurée, si Allah le veut.",
        source: "Abou Daoud 2357"
      },
      {
        title: "Dua pendant Ramadan",
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
        translit: "Rabbana taqabbal minna innaka antas-sami'ul-'alim",
        translation: "Notre Seigneur, accepte de nous. Tu es certes l'Audient, l'Omniscient.",
        source: "Coran 2:127"
      },
    ]
  },

  // ============================================
  // 33. RICHESSE SPIRITUELLE
  // ============================================
  {
    id: "richesse_spirituelle",
    emoji: "💎",
    title: "Richesse spirituelle",
    items: [
      {
        title: "Dua pour la richesse spirituelle",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
        translit: "Allahumma inni as'alukal-huda wat-tuqa wal-'afafa wal-ghina",
        translation: "Ô Allah, je Te demande la guidée, la piété, la chasteté et l'aisance.",
        source: "Muslim 2721"
      },
      {
        title: "Dua du Prophète ﷺ le plus fréquent",
        arabic: "اللَّهُمَّ آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translit: "Allahumma atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar",
        translation: "Ô Allah, accorde-nous le bien dans cette vie et le bien dans l'au-delà, et préserve-nous du châtiment du Feu. (La dua la plus fréquente du Prophète ﷺ)",
        source: "Bukhari 6389"
      },
      {
        title: "Dua pour l'Amour d'Allah",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ",
        translit: "Allahumma inni as'aluka hubbaka wa hubba man yuhibbuka wa hubba 'amalin yuqarribuni ila hubbik",
        translation: "Ô Allah, je Te demande Ton amour, l'amour de ceux qui T'aiment et l'amour d'une œuvre qui me rapproche de Ton amour.",
        source: "Tirmidhi 3490"
      },
      {
        title: "Dua pour la mort en martyr",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُسْنَ الْخَاتِمَةِ",
        translit: "Allahumma inni as'aluka husnal-khatimah",
        translation: "Ô Allah, je Te demande une belle fin.",
        source: "Tradition"
      },
    ]
  },

  // ============================================
  // 34. CONTRE LE MAUVAIS ŒIL ET LA SORCELLERIE
  // ============================================
  {
    id: "mauvais_oeil",
    emoji: "🧿",
    title: "Contre le mauvais œil",
    items: [
      {
        title: "Ruqya contre le mauvais œil",
        arabic: "اللَّهُمَّ بَارِكْ فِيهِ",
        translit: "Allahumma barik fih",
        translation: "Ô Allah, bénis-le. (À dire quand on admire quelque chose pour éviter le mauvais œil)",
        source: "Abou Daoud 5096"
      },
      {
        title: "Protection générale de l'œil",
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
        translit: "A'udhu bikalimati-llahit-tammati min kulli shaytanin wa hammatin wa min kulli 'aynin lammah",
        translation: "Je cherche protection dans les paroles parfaites d'Allah contre tout diable, toute bête venimeuse et tout mauvais œil.",
        source: "Bukhari 3371"
      },
      {
        title: "Ruqya complète",
        arabic: "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ",
        translit: "Bismillahi arqika, min kulli shay'in yu'dhika, min sharri kulli nafsin aw 'ayni hasidin, Allahu yashfika, bismillahi arqika",
        translation: "Au nom d'Allah je te fais une ruqya, contre tout ce qui te nuit, contre le mal de toute âme ou d'un œil envieux. Qu'Allah te guérisse. Au nom d'Allah je te fais une ruqya. (7 fois)",
        source: "Muslim 2186"
      },
      {
        title: "Sourates de protection (3 fois)",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ، قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        translit: "Qul huwa Allahu ahad, Qul a'udhu bi Rabbil-falaq, Qul a'udhu bi Rabbin-nas",
        translation: "Al-Ikhlas, Al-Falaq, An-Nas — à lire 3 fois le matin et le soir, et souffler sur soi-même.",
        source: "Abou Daoud 5082"
      },
    ]
  },

  // ============================================
  // 35. TAZKIYAH (PURIFICATION DE L'ÂME)
  // ============================================
  {
    id: "tazkiyah",
    emoji: "🌿",
    title: "Tazkiyah (Purification)",
    items: [
      {
        title: "Purification du cœur",
        arabic: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكِّهَا أَنتَ خَيْرُ مَنْ زَكَّاهَا أَنتَ وَلِيُّهَا وَمَوْلَاهَا",
        translit: "Allahumma ati nafsi taqwaha wa zakkiha anta khayru man zakkaha, anta waliyyuha wa mawlaha",
        translation: "Ô Allah, donne à mon âme sa piété et purifie-la. Tu es le meilleur à la purifier. Tu es son Maître et son Seigneur.",
        source: "Muslim 2722"
      },
      {
        title: "Contre l'orgueil",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكِبْرِ",
        translit: "Allahumma inni a'udhu bika minal-kibr",
        translation: "Ô Allah, je cherche Ta protection contre l'orgueil.",
        source: "Abou Daoud 1551"
      },
      {
        title: "Contre l'hypocrisie",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ النِّفَاقِ",
        translit: "Allahumma inni a'udhu bika minan-nifaq",
        translation: "Ô Allah, je cherche Ta protection contre l'hypocrisie.",
        source: "Abou Daoud"
      },
      {
        title: "Pour la sincérité",
        arabic: "اللَّهُمَّ اجْعَلْ عَمَلِي كُلَّهُ صَالِحًا وَاجْعَلْهُ لِوَجْهِكَ خَالِصًا وَلَا تَجْعَلْ لِأَحَدٍ فِيهِ شَيْئًا",
        translit: "Allahumma-j'al 'amali kullahu salihan waj'alhu li-wajhika khalisan wa la taj'al li-ahadin fihi shay'a",
        translation: "Ô Allah, fais que toutes mes œuvres soient bonnes, fais-les pures pour Ta face et ne laisse aucune part pour quiconque.",
        source: "Hakim"
      },
    ]
  },

];