/**
 * DONNÉES COMPLETES DES INVOCATIONS (Adhkar)
 * Source: Hisn al-Muslim (Fortress of the Muslim), Sunnah, et autres recueils authentiques
 */

export const INVOCATIONS_DATA = [
  // ============================================
  // MAISON ET VIE QUOTIDIENNE
  // ============================================
  {
    id: "maison",
    emoji: "🏠",
    title: "Maison",
    items: [
      { title: "En entrant", arabic: "بِسْمِ اللَّهِ أَدْخُلُ، بِسْمِ اللَّهِ أَخْرُجُ", translit: "Bismillah adkhulu, bismillah akhruju", translation: "Au nom d'Allah j'entre, au nom d'Allah je sors.", source: "Tirmidhi 3896" },
      { title: "En sortant", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْخُرُوجِ فِي الْعُورَةِ", translit: "Allahumma inni a'udhu bika min al-khuruji fi al-'urrah", translation: "Ô Allah, je cherche Ta protection contre le fait de sortir nu.", source: "Abou Daoud 5095" },
      { title: "Nouvelle maison", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ الْمَنْزِلِ وَخَيْرَ أَهْلِهِ", translit: "Allahumma inni as'aluka khayra hadhihi al-manzili wa khayra ahlihi", translation: "Ô Allah, je Te demande le bien de cette maison et de ses habitants.", source: "Ibn Sunni 246" },
      { title: "Avant de dormir", arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ", translit: "Bismika rabbi wa da'tu janbi wa bika arfa'uhu", translation: "C'est en Ton nom que je pose mon côté, et c'est en Ton nom que je le relève.", source: "Bukhari 632" },
      { title: "En se réveillant la nuit", arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ", translit: "La ilaha illa Allahu wahdahu la sharika lahu, lah al-mulku wa lah al-hamdu", translation: "Il n'y a de divinité qu'Allah, unique sans associé. À Lui le royaume et à Lui la louange.", source: "Bukhari 1152" },
      { title: "Protection du mal", arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", translit: "Allahumma qini 'azabaka yawma tab'ath 'ibadaka", translation: "Ô Allah, protège-moi de Ton châtiment le jour où Tu ressusciteras Tes serviteurs.", source: "Abou Daoud 1551" },
    ]
  },
  {
    id: "mosquee",
    emoji: "🕌",
    title: "Mosquée",
    items: [
      { title: "En entrant", arabic: "بِسْمِ اللَّهِ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ", translit: "Bismillah was-salamu 'ala rasulillah", translation: "Au nom d'Allah et que la paix soit sur le Messager d'Allah.", source: "Muslim 713" },
      { title: "En sortant", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّيْطَانِ الرَّجِيمِ", translit: "Allahumma inni a'udhu bika min ash-Shaytani ar-Rajim", translation: "Ô Allah, je cherche Ta protection contre le diable maudit.", source: "Bukhari 444" },
      { title: "Adhan", arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ", translit: "Allahumma rabba hadhihi ad-dawati at-tammati was-salati al-qaimati", translation: "Ô Allah, Seigneur de cette invocation parfaite et de la prière établie.", source: "Bukhari 611" },
      { title: "Entrée mosquée (autre)", arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", translit: "Allahumma iftaḥ li abwaba rahmatika", translation: "Ô Allah, ouvre-moi les portes de Ta miséricorde.", source: "Muslim 713" },
      { title: "En s'asseyant dans la mosquée", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", translit: "Allahumma inni as'aluka min fadlika", translation: "Ô Allah, je Te demande de Ta grâce.", source: "Ibn Sunni" },
      { title: "Avant de quitter la mosquée", arabic: "اللَّهُمَّ أَعُوذُ بِكَ مِنْ الْكُفْرِ وَالْفَقْرِ", translit: "Allahumma a'udhu bika min al-kufri wal-faqri", translation: "Ô Allah, je cherche Ta protection contre l'impiété et la pauvreté.", source: "Abou Daoud" },
    ]
  },
  {
    id: "priere",
    emoji: "🙏",
    title: "Prière",
    items: [
      { title: "Ouverture (Fatiha)", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", translit: "Bismillahi ar-Rahmani ar-Rahim", translation: "Au nom d'Allah, le Miséricordieux, le Très Miséricordieux.", source: "Coran 1:1" },
      { title: "Takbir (Iftitah)", arabic: "اللَّهُ أَكْبَرُ كَبِيرًا", translit: "Allahu Akbar Kabiran", translation: "Allah est le Plus Grand.", source: "Muslim 395" },
      { title: "Se prosterner", arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى", translit: "Subhana Rabbiya al-A'la", translation: "Gloire à mon Seigneur, le Plus Haut.", source: "Bukhari 788" },
      { title: "En se relevant", arabic: "اللَّهُمَّ رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ", translit: "Allahumma rabbana laka al-hamdu mil'a as-samawati wa mil'a al-ardi", translation: "Ô Allah, notre Seigneur, à Toi la louange qui remplit les cieux et la terre.", source: "Muslim 478" },
      { title: "En ruku'", arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ", translit: "Subhana Rabbiya al-'Azim", translation: "Gloire à mon Seigneur, le Très Grand.", source: "Bukhari 788" },
      { title: "Tashahhoud", arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ", translit: "At-Tahiyyatu lillahi was-salawatu wat-tayyibatu", translation: "Les salutations sont pour Allah, ainsi que les prières et les bonnes œuvres.", source: "Bukhari 1216" },
      { title: "Salawat sur le Prophète", arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ", translit: "Allahumma sali 'ala Muhammadin wa 'ala Ali Muhammad", translation: "Ô Allah, prie sur Muhammad et sur la famille de Muhammad.", source: "Bukhari 6357" },
      { title: "Fin de la prière", arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ", translit: "As-salamu 'alaykum wa rahmatullah", translation: "Que la paix et la miséricorde d'Allah soient sur vous.", source: "Bukhari 1225" },
      { title: "Entre les deux prosternations", arabic: "اللَّهُمَّاغْفِرْ لِي وَارْحَمْنِي", translit: "Allahumma ghfir li wa rahamni", translation: "Ô Allah, pardonne-moi et fais-moi miséricorde.", source: "Bukhari 789" },
    ]
  },
  {
    id: "sommeil",
    emoji: "🌙",
    title: "Sommeil",
    items: [
      { title: "Avant de dormir", arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي", translit: "Bismika rabbi wa da'tu janbi", translation: "C'est en Ton nom que je pose mon côté.", source: "Bukhari 632" },
      { title: "En se couchant sur le côté droit", arabic: "اللَّهُمَّ أَسْلَمْتُ وَجْهِي إِلَيْكَ", translit: "Allahumma aslamtu wajhi ilayka", translation: "Ô Allah, je soumets mon visage à Toi.", source: "Bukhari 631" },
      { title: "Protection la nuit", arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", translit: "Allahumma qini 'azabaka yawma tab'ath 'ibadaka", translation: "Ô Allah, protège-moi de Ton châtiment le jour où Tu ressusciteras Tes serviteurs.", source: "Bukhari" },
      { title: "Au réveil", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا", translit: "Al-hamdu lillahi alladhi ahyana ba'da ma amatana", translation: "Louange à Allah qui nous a donné la vie après nous avoir fait mourir.", source: "Bukhari 7512" },
      { title: "Protection contre les cauchemars", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ", translit: "A'udhu bikalimati Allahi at-tammati min ghadabihi", translation: "Je cherche protection dans les parfaites paroles d'Allah contre Sa colère.", source: "Muslim 2262" },
      { title: "Réveil nocturne", arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ", translit: "La ilaha illa Allahu wahdahu la sharika lahu", translation: "Il n'y a de divinité qu'Allah, unique sans associé.", source: "Bukhari 1152" },
      { title: "Invocation contre l'insomnie", arabic: "اللَّهُمَّ إِنَّ عَيْنَيَّ لَمْ تَنَمِ", translit: "Allahumma inna 'aynaya lam tanam", translation: "Ô Allah, mes yeux n'ont pas dormi.", source: "Abou Daoud" },
    ]
  },
  {
    id: "matin",
    emoji: "🌅",
    title: "Matin",
    items: [
      { title: "Invocation du matin", arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا", translit: "Allahumma bika asbahna wa bika amsayna", translation: "Ô Allah, c'est par Toi que nous commençons le matin et le soir.", source: "Tirmidhi 3391" },
      { title: "Protection du matin", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّرِّ مَا صَلَحَ", translit: "Allahumma inni a'udhu bika min ash-sharri ma salah", translation: "Ô Allah, je cherche Ta protection contre le mal qui est bon.", source: "Ahmed 3654" },
      { title: "Fitrah (naturel)", arabic: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ", translit: "Asbahna 'ala fitrati al-islam", translation: "Nous avons commencé sur la nature pure de l'Islam.", source: "Bukhari" },
      { title: "Louange matinale", arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ فَمِنْكَ", translit: "Allahumma ma asbaha bi min ni'matin faminika", translation: "Ô Allah, toute grâce qui m'a atteint vient de Toi.", source: "Bukhari" },
      { title: "Au lever du soleil", arabic: "اللَّهُمَّ أَشْرِقْ عَلَيْنَا بِنُورِكَ", translit: "Allahumma ashriq 'alayka bi-nurika", translation: "Ô Allah, fais-nous briller de Ta lumière.", source: "Ibn Sunni" },
      { title: "3 fois le matin", arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ", translit: "Asbahna wa asbaha al-mulku lillahi", translation: "Nous voici au matin, et le royaume appartient à Allah.", source: "Muslim 2723" },
      { title: "Pardon du matin", arabic: "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ", translit: "Astaghfirullaha alladhi la ilaha illa huwa", translation: "Je demande pardon à Allah,除 lui pas de divinité.", source: "Tirmidhi" },
    ]
  },
  {
    id: "soir",
    emoji: "🌆",
    title: "Soir",
    items: [
      { title: "Invocation du soir", arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ نَحْيَا", translit: "Allahumma bika amsayna wa bika nahya", translation: "Ô Allah, c'est par Toi que nous finissons la journée et c'est par Toi que nous vivons.", source: "Tirmidhi 3391" },
      { title: "Protection du soir", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", translit: "A'udhu bikalimati Allahi at-tammati min sharri ma khalaqa", translation: "Je cherche protection dans les parfaites paroles d'Allah contre le mal de ce qu'Il a créé.", source: "Muslim 2262" },
      { title: "3 fois le soir", arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ", translit: "Amsayna wa amsa al-mulku lillahi", translation: "Nous voici au soir, et le royaume appartient à Allah.", source: "Muslim 2723" },
      { title: "Contre les ennemis", arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي", translit: "Allahumma 'afini fi badani", translation: "Ô Allah, protège mon corps.", source: "Abou Daoud" },
      { title: "Protection générale soir", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ", translit: "Allahumma inni a'udhu bika min al-hammi wal-hazan", translation: "Ô Allah, je cherche Ta protection contre l'inquiétude et la tristesse.", source: "Abou Daoud" },
    ]
  },
  {
    id: "voyage",
    emoji: "🚗",
    title: "Voyage",
    items: [
      { title: "Avant de partir", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ", translit: "Allahumma inni a'udhu bika min watha'safari", translation: "Ô Allah, protège-moi des difficultés du voyage.", source: "Abou Daoud 2597" },
      { title: "En montant", arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ", translit: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinina", translation: "Gloire à Celui qui a soumis cela pour nous alors que nous n'en étions pas capables.", source: "Coran 43:13" },
      { title: "En descendant", arabic: "نَزَلْنَا وَبِاللَّهِ تَوَكَّلْنَا", translit: "Nazalna wa billahi tawakkalna", translation: "Nous descendons et nous plaçons notre confiance en Allah.", source: "Abou Daoud" },
      { title: "Au retour", arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ", translit: "A'ibuna ta'ibuna 'abiduna lirabbina hamiduna", translation: "Nous revenons, repentants, adorants, louant notre Seigneur.", source: "Muslim 2834" },
      { title: "Entrée en ville", arabic: "اللَّهُمَّ ابْعَثْ رَحْمَةً مِنْ عِنْدِكَ", translit: "Allahumma ib'ath rahmatan min indika", translation: "Ô Allah, envoie une miséricorde de Ta part.", source: "Ibn Sunni" },
      { title: "Prière du voyageur", arabic: "اللَّهُمَّ يَسِّرْ لَنَا سَفَرَنَا", translit: "Allahumma yassir lana safarana", translation: "Ô Allah, facilite notre voyage.", source: "Ibn Sunni" },
    ]
  },
  {
    id: "protection",
    emoji: "🛡️",
    title: "Protection",
    items: [
      { title: "Protection générale", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ", translit: "A'udhu bikalimati Allahi at-tammati", translation: "Je cherche protection dans les parfaites paroles d'Allah.", source: "Muslim 2262" },
      { title: "Contre le châtiment de la tombe", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ", translit: "Allahumma inni a'udhu bika min 'adhab al-qabri", translation: "Ô Allah, je cherche Ta protection contre le châtiment de la tombe.", source: "Muslim 2266" },
      { title: "Hawqala", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", translit: "La hawla wa la quwwata illa billah", translation: "Il n'y a de force et de puissance qu'en Allah.", source: "Bukhari 6389" },
      { title: "Contre le mal", arabic: "أَعُوذُ بِعِزَّةِ اللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ", translit: "A'udhu bi-'izzati Allahi wa qudratihi min sharri ma ajidu", translation: "Je cherche protection dans la puissance d'Allah contre le mal que je ressens.", source: "Abou Daoud" },
      { title: "Au lever et au coucher", arabic: "اللَّهُمَّ أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي", translit: "Allahumma a'udhu bika min sharri nafsi", translation: "Ô Allah, je cherche Ta protection contre le mal de mon âme.", source: "Tirmidhi" },
      { title: "Protection contre les djinns", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ الشَّيَاطِينِ", translit: "A'udhu bikalimati Allahi at-tammati min ash-shayatin", translation: "Je cherche protection dans les parfaites paroles d'Allah contre les démons.", source: "Abou Daoud" },
    ]
  },
  {
    id: "pardon",
    emoji: "🤲",
    title: "Pardon",
    items: [
      { title: "Istighfar (supplication)", arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", translit: "Astaghfirullah al-'Azim alladhi la ilaha illa huwa al-Hayyu al-Qayyum", translation: "Je demande pardon à Allah le Très Grand,除 Lui pas de divinité, le Vivant, le Subsistant.", source: "Tirmidhi 3397" },
      { title: "Repentir", arabic: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي", translit: "Rabbi inni zalamtu nafsi", translation: "Seigneur, j'ai oppressé mon âme.", source: "Coran 28:16" },
      { title: "Attahiyyat", arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ", translit: "Allahumma anta as-salamu wa minka as-salamu", translation: "Ô Allah, Tu es la Paix et de Toi vient la Paix.", source: "Muslim 591" },
      { title: "Pardon journalier", arabic: "اللَّهُمَّاغْفِرْ لِي ذُنُوبِي وَوَسِّعْ لِي فِي رِزْقِي", translit: "Allahumma ghfir li dhunubi wa wassi' li fi rizqi", translation: "Ô Allah, pardonne mes péchés et agrandis mon subsistance.", source: "Tirmidhi" },
      { title: "Triple pardon", arabic: "أَسْتَغْفِرُ اللَّهَ لِسَيِّئَاتِي كُلِّهَا", translit: "Astaghfirullah li sayyi'atihi kulliha", translation: "Je demande pardon à Allah pour toutes mes mauvaises actions.", source: "Muslim" },
    ]
  },
  {
    id: "nourriture",
    emoji: "🍽️",
    title: "Nourriture",
    items: [
      { title: "Avant de manger", arabic: "بِسْمِ اللَّهِ", translit: "Bismillah", translation: "Au nom d'Allah.", source: "Abou Daoud 3767" },
      { title: "Bénédiction", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ", translit: "Allahumma barik lana fima razqtana wa qina 'adhab an-nar", translation: "Ô Allah, bénis ce que Tu nous as donné et protège-nous du châtiment de l'Enfer.", source: "Abou Daoud" },
      { title: "Après avoir mangé", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنْ الْمُسْلِمِينَ", translit: "Al-hamdu lillahi alladhi at'amana wa saqana wa ja'alana min al-muslimina", translation: "Louange à Allah qui nous a nourris, abreuvés et fait partie des Muslims.", source: "Abou Daoud" },
      { title: "En buvant l'eau", arabic: "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ", translit: "Al-hamdu lillahi hamdan kathiran tayyiban mubarakun fihi", translation: "Louange à Allah, une louange abondante, bonne et bénie.", source: "Bukhari" },
      { title: "Invitation à manger", arabic: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي", translit: "Allahumma at'im man at'amani", translation: "Ô Allah, nourris celui qui m'a nourri.", source: "Abou Daoud" },
      { title: "Fin du repas", arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translit: "Al-hamdu lillahi rabbi al-'alamin", translation: "Louange à Allah, Seigneur des mondes.", source: "Muslim" },
    ]
  },
  {
    id: "dhikr",
    emoji: "✨",
    title: "Dhikr (Invocation)",
    items: [
      { title: "Tasbih (Gloire)", arabic: "سُبْحَانَ اللَّهِ", translit: "SubhanAllah", translation: "Gloire à Allah.", source: "Bukhari 6406" },
      { title: "Tahmid (Louange)", arabic: "الْحَمْدُ لِلَّهِ", translit: "Al-hamdu lillah", translation: "Louange à Allah.", source: "Bukhari" },
      { title: "Takbir (Grandeur)", arabic: "اللَّهُ أَكْبَرُ", translit: "Allahu Akbar", translation: "Allah est le Plus Grand.", source: "Bukhari" },
      { title: "Tahlil (Unicité)", arabic: "لَا إِلَهَ إِلَّا اللَّهُ", translit: "La ilaha illa Allah", translation: "Il n'y a de divinité qu'Allah.", source: "Bukhari" },
      { title: "Hawqala", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", translit: "La hawla wa la quwwata illa billah", translation: "Il n'y a de force et de puissance qu'en Allah.", source: "Bukhari 6389" },
      { title: "Astaghfirullah", arabic: "أَسْتَغْفِرُ اللَّهَ", translit: "Astaghfirullah", translation: "Je demande pardon à Allah.", source: "Tirmidhi" },
      { title: "Rabbani", arabic: "رَبِّ زِدْنِي عِلْمًا", translit: "Rabbi zidni 'ilman", translation: "Seigneur, augmente-moi en savoir.", source: "Coran 20:114" },
      { title: "SubhanaAllah wa biHamdih", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", translit: "SubhanAllah wa bi-hamdihi", translation: "Gloire à Allah et Sa louange.", source: "Muslim 4856" },
      { title: "100 fois par jour", arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ", translit: "La ilaha illa Allahu wahdahu la sharika lahu, lah al-mulku wa lah al-hamdu", translation: "Il n'y a de divinité qu'Allah, unique sans associé. À Lui le royaume et la louange.", source: "Bukhari 6408" },
    ]
  },
  {
    id: "sante",
    emoji: "💊",
    title: "Santé",
    items: [
      { title: "Guérison", arabic: "اللَّهُمَّ اشْفِنِي وَعَافِنِي وَاجْعَلْنِي شَاكِرًا", translit: "Allahumma shfini wa 'afini wa ja'alni shakiran", translation: "Ô Allah, guéris-moi, protège-moi et rends-moi reconnaissant.", source: "Ibn Sunni" },
      { title: "Visite malade", arabic: "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ", translit: "La ba'sa tahurun in sha Allah", translation: "Que cela soit une purification, si Allah le veut.", source: "Bukhari 5356" },
      { title: "Pour le malade", arabic: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبْ الْبَأْسَ، اشْفِهِ أَنْتَ الشَّافِي", translit: "Allahumma rabba an-nas, adhhib al-ba'as, shfi ant ash-shafi", translation: "Ô Allah, Seigneur des gens, éloigne le mal, gueris, car Tu es le Guérisseur.", source: "Muslim 2191" },
      { title: "Protection contre la maladie", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْجُذَامِ وَالْبَرَصِ", translit: "Allahumma inni a'udhu bika min al-judhami wal-baras", translation: "Ô Allah, je cherche Ta protection contre la lèpre et la tuberculose.", source: "Abou Daoud" },
      { title: "Protection (vaccination)", arabic: "بِعِزَّةِ اللَّهِ وَجَبَرَوَتِهِ", translit: "Bi-'izzati Allahi wa jabarutihi", translation: "Par la puissance et la majesté d'Allah.", source: "Tirmidhi" },
    ]
  },
  // ============================================
  // NOUVELLES CATÉGORIES
  // ============================================
  {
    id: "mariage",
    emoji: "💒",
    title: "Mariage",
    items: [
      { title: "Bénédiction du mariage", arabic: "اللَّهُمَّ بَارِكْ فِي أُخْتِهِمْ وَجَنِّبْهُمَا الشَّيْطَانَ", translit: "Allahumma barik fi ukhtihim wa jannibhuma ash-shaytan", translation: "Ô Allah, bénis leur union et protège-les du Diable.", source: "Bukhari 5156" },
      { title: "Entrée dans la chambre nuptiale", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِمَا", translit: "Allahumma barik lana fihima", translation: "Ô Allah, bénis-les.", source: "Ibn Maja" },
      { title: "Avant le mariage", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتْنَةِ النِّسَاءِ", translit: "Allahumma inni a'udhu bika min fitnati an-nisa", translation: "Ô Allah, je cherche Ta protection contre la tentation des femmes.", source: "Abou Daoud" },
      { title: "Nikah (contrat)", arabic: "بَارَكَ اللَّهُ لَكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ", translit: "Baraka Allahu lakuma wa jama'a baynakuma fi khayr", translation: "Allah vous a bénis et vous a unis dans le bien.", source: "Ibn Maja" },
    ]
  },
  {
    id: "connaissance",
    emoji: "📚",
    title: "Connaissance",
    items: [
      { title: "Avant d'étudier", arabic: "اللَّهُمَّافْتَحْ عَلَيَّ عِلْمًا وَجَنِّبْنِي الْجَهْلَ", translit: "Allahumma iftaḥ 'alayya 'ilman wa jannibni al-jahla", translation: "Ô Allah, ouvre-moi la porte de la science et protège-moi de l'ignorance.", source: "Ibn Sunni" },
      { title: "Début du cours", arabic: "اللَّهُمَّ بَدِّلْ عِلْمِي عِلْمًا نَافِعًا", translit: "Allahumma baddil 'ilmi 'ilman nafi'an", translation: "Ô Allah, transforme ma connaissance en savoir utile.", source: "Tirmidhi" },
      { title: "Mémorisation", arabic: "رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا", translit: "Rabbi zidni 'ilman wa arzuqni fahman", translation: "Seigneur, augmente ma science et accorde-moi la compréhension.", source: "Ibn Sunni" },
      { title: "Avant de lire le Coran", arabic: "أَعُوذُ بِاللَّهِ مِنْ الشَّيْطَانِ الرَّجِيمِ", translit: "A'udhu billahi min ash-shaytani ar-rajim", translation: "Je cherche protection en Allah contre le Diable maudit.", source: "Bukhari" },
    ]
  },
  {
    id: "travail",
    emoji: "💼",
    title: "Travail",
    items: [
      { title: "Avant de commencer", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ هَمِّ الْعَمَلِ", translit: "Allahumma inni a'udhu bika min hammi al-'amali", translation: "Ô Allah, je cherche Ta protection contre les tracas du travail.", source: "Abou Daoud" },
      { title: "En commençant", arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ", translit: "Bismillahi tawakkaltu 'ala Allah", translation: "Au nom d'Allah, je place ma confiance en Allah.", source: "Abou Daoud" },
      { title: "En terminant", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَعَانَنِي فَأَنْجَزْتُ", translit: "Al-hamdu lillahi alladhi 'anani fa anjaztu", translation: "Louange à Allah qui m'a assisté et permis de réussir.", source: "Tirmidhi" },
      { title: "Invocation pour le gagne-pain", arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ", translit: "Allahumma kfini bi-halalika 'an haramik", translation: "Ô Allah, rends-moi indépendant du haram par le halal.", source: "Ahmed" },
    ]
  },
  {
    id: "stress",
    emoji: "😰",
    title: "Stress et Peur",
    items: [
      { title: "Contre la peur", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْخَوْفِ وَالْهَمِّ", translit: "Allahumma inni a'udhu bika min al-khawfi wal-hammi", translation: "Ô Allah, je cherche Ta protection contre la peur et l'inquiétude.", source: "Abou Daoud" },
      { title: "Tranquillité", arabic: "اللَّهُمَّ اجْعَلْ لِي مِنْ لَدُنْكَ سَلَامًا", translit: "Allahumma ja'al li min ladunka salaman", translation: "Ô Allah, accorde-moi la paix venant de Toi.", source: "Coran 9:129" },
      { title: "Contre le chagrin", arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنْ الظَّالِمِينَ", translit: "La ilaha illa anta subhanaka inni kuntu min az-zalimin", translation: "Il n'y a de divinité que Toi, gloire à Toi. J'ai été injuste.", source: "Coran 21:87" },
      { title: "Patience", arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَأَعِنِّي عَلَى الصَّبْرِ", translit: "Allahumma sali 'ala Muhammadin wa 'awni 'ala as-sabri", translation: "Ô Allah, prie sur Muhammad et aide-moi à être patient.", source: "Tirmidhi" },
    ]
  },
  {
    id: "joie",
    emoji: "😊",
    title: "Joie et Gratitude",
    items: [
      { title: "Réjouissance", arabic: "اللَّهُمَّ إِنَّ هَذَا نِعْمَةٌ مِنْكَ فَلَكَ الْحَمْدُ", translit: "Allahumma inna hadha ni'matun minka faka al-hamdu", translation: "Ô Allah, ceci est une grâce de Toi, à Toi la louange.", source: "Muslim" },
      { title: "Remerciement", arabic: "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ", translit: "Al-hamdu lillahi 'ala kulli hal", translation: "Louange à Allah en toute circonstance.", source: "Tirmidhi" },
      { title: "Bénédiction reçue", arabic: "اللَّهُمَّ تَفَضَّلْ عَلَيْنَا", translit: "Allahumma tafaḍḍal 'alayna", translation: "Ô Allah, agis généreusement envers nous.", source: "Bukhari" },
    ]
  },
  {
    id: "vetements",
    emoji: "👕",
    title: "Vêtements",
    items: [
      { title: "Mettre de nouveaux vêtements", arabic: "اللَّهُمَّ لَكَ الْحَمْدُ عَلَى مَا رَزَقْتَنِي", translit: "Allahumma laka al-hamdu 'ala ma razqtani", translation: "Ô Allah, à Toi la louange pour ce que Tu m'as donné.", source: "Abou Daoud" },
      { title: "En retirant ses vêtements", arabic: "بِسْمِ اللَّهِ عَلَى مَا لَبِسْتُ", translit: "Bismillahi 'ala ma labistu", translation: "Au nom d'Allah pour ce que j'ai porté.", source: "Abou Daoud" },
    ]
  },
  {
    id: "environnement",
    emoji: "🌿",
    title: "Environnement",
    items: [
      { title: "En entrant dans un jardin", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ هَذَا", translit: "Allahumma inni as'aluka min khayri hadha", translation: "Ô Allah, je Te demande le bien de ceci.", source: "Muslim" },
      { title: "Prière pour la pluie", arabic: "اللَّهُمَّ اسْقِنَا غَيْثًا مُغِيثًا", translit: "Allahumma isqina ghaythan mughithan", translation: "Ô Allah, fais-nous pleuvoir une pluie abondante.", source: "Bukhari" },
      { title: "Contre le tonnerre", arabic: "اللَّهُمَّ لَا تَجْعَلْنِي مِنْ الْفَزِعِينَ", translit: "Allahumma la taj'alamni min al-fazi'ina", translation: "Ô Allah, ne fais pas partie des effrayés.", source: "Abou Daoud" },
      { title: "Lever du soleil", arabic: "اللَّهُمَّ أَشْرِقْ عَلَيْنَا بِالنُّورِ", translit: "Allahumma ashriq 'alayna bi-n-nur", translation: "Ô Allah, fais briller sur nous la lumière.", source: "Ibn Sunni" },
      { title: "Coucher du soleil", arabic: "اللَّهُمَّ اجْعَلْ آخِرَ عَهْدِي بِكَ الصَّلَاةَ", translit: "Allahumma ja'al akhire 'ahdi bika as-salata", translation: "Ô Allah, fais que ma dernière acte soit la prière.", source: "Bukhari" },
    ]
  },
  {
    id: "fin_journee",
    emoji: "🌃",
    title: "Fin de journée",
    items: [
      { title: "Invocation de la nuit", arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا", translit: "Allahumma bika amsayna", translation: "Ô Allah, c'est par Toi que nous finissons la journée.", source: "Tirmidhi" },
      { title: "Protection nocturne", arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", translit: "Bismika Allahumma amutu wa ahy", translation: "C'est en Ton nom que je meurs et que je vis.", source: "Bukhari" },
      { title: "Priére du sommeil", arabic: "اللَّهُمَّ قِنِي عَذَابَكَ اللَّيْلَةَ", translit: "Allahumma qini 'azabaka al-laylata", translation: "Ô Allah, protège-moi de Ton châtiment cette nuit.", source: "Tirmidhi" },
    ]
  },
  {
    id: "funeraire",
    emoji: "🕯️",
    title: "Funéraire",
    items: [
      { title: "Pour le défunt", arabic: "اللَّهُمَّاغْفِرْ لَهُ وَارْحَمْهُ", translit: "Allahumma ghfir lahu wa rahamhu", translation: "Ô Allah, pardonne-lui et fais-lui miséricorde.", source: "Bukhari 1393" },
      { title: "Pour la famille", arabic: "اللَّهُمَّ اجْعَلْ لَهُمْ فِي قُبُورِهِمْ نُورًا", translit: "Allahumma ja'al lahum fi quburihim nuran", translation: "Ô Allah, fais que leur tombe soit une lumière.", source: "Ibn Sunni" },
      { title: "Condoléances", arabic: "اللَّهُمَّ أَعْظِمْ أَجْرَهُمْ وَصَبْرَهُمْ", translit: "Allahumma a'ẓim ajrahum wa sabrahum", translation: "Ô Allah, agrandis leur récompense et leur patience.", source: "Muslim" },
      { title: "Patience", arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", translit: "Inna lillahi wa inna ilayhi raji'un", translation: "Nous appartenons à Allah et c'est vers Lui que nous retournons.", source: "Coran 2:156" },
    ]
  },
  // ============================================
  // NOUVELLES INVOCATIONS SUPPLÉMENTAIRES
  // ============================================
  {
    id: "salat_surfaces",
    emoji: "🧎",
    title: "Salat sur surfaces",
    items: [
      { title: "Istisqa (prière de demande)", arabic: "اللَّهُمَّ اسْقِنَا غَيْثًا هَنِيئًا مَرِيئًا", translit: "Allahumma isqina ghaythan hani'an mari'an", translation: "Ô Allah, fais-nous pleuvoir une pluie agréable et bénéfique.", source: "Ibn Maja 1169" },
      { title: "Khatm Quran", arabic: "اللَّهُمَّ اجْعَلْ خَتْمَنِي لِلْقُرْآنِ الْعَظِيمَ", translit: "Allahumma ja'al khatmi li al-qur'ani al-'azim", translation: "Ô Allah, fais de ma lecture du Coran une guidée vers le Paradis.", source: "Ibn Sunni" },
      { title: "Priére du Fajr", arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ", translit: "Allahumma 'awnni 'ala dhikrika wa shukrika", translation: "Ô Allah, aide-moi à Te rappeler et Te remercier.", source: "Tirmidhi" },
      { title: "Prière de la peur", arabic: "اللَّهُمَّ احْفَظْنِي مِنْ شَرِّ الْعَدُوِّ", translit: "Allahumma hifdhni min sharri al-'aduwwi", translation: "Ô Allah, protège-moi du mal de l'ennemi.", source: "Bukhari" },
    ]
  },
  {
    id: "hajj_umrah",
    emoji: "🕋",
    title: "Hajj et Umrah",
    items: [
      { title: "Talbiya", arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ", translit: "Labbayka Allahumma labbayka", translation: "Me voici ô Allah, me voici.", source: "Bukhari 1549" },
      { title: "Tawaf", arabic: "اللَّهُمَّ اجْعَلْهُ حَجًّا مَقْبُولًا", translit: "Allahumma ja'alhu hajjan maqbulan", translation: "Ô Allah, fais de ce Hajj un Hajj accepté.", source: "Bukhari" },
      { title: "Sa'i entre Safa et Marwa", arabic: "اللَّهُمَّ اجْعَلْهُ عَمَلًا صَالِحًا", translit: "Allahumma ja'alhu 'amalan salihan", translation: "Ô Allah, fais de ceci une œuvre méritante.", source: "Muslim" },
      { title: "Dua du Masa", arabic: "رَبِّ اغْفِرْ وَارْحَمْ", translit: "Rabbi ghfir wa raham", translation: "Seigneur, pardonne et fais miséricorde.", source: "Coran 2:201" },
      { title: "Arafat", arabic: "اللَّهُمَّ هَذَا الْمَقَامُ عَائِذٌ بِكَ", translit: "Allahumma hadha al-maqamu 'a'idhun bika", translation: "Ô Allah, ce lieu cherche refuge en Toi.", source: "Ibn Sunni" },
    ]
  },
  {
    id: " Quran",
    emoji: "📖",
    title: "Citations du Coran",
    items: [
      { title: "Ayat al-Kursi", arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", translit: "Allahu la ilaha illa huwa al-Hayyu al-Qayyumu", translation: "Allah, nulle divinité sinon Lui, le Vivant, le Subsistant.", source: "Coran 2:255" },
      { title: "Soubhane Rabbike", arabic: "سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ", translit: "Subhana rabbike rabbi al-'izzati 'amma yasifuna", translation: "Gloire à ton Seigneur, le Seigneur de la puissance,远 他们所描述的。", source: "Coran 37:180" },
      { title: "Qur'an 1:1-7", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ...", translit: "Bismillahi ar-Rahmani ar-Rahim...", translation: "Au nom d'Allah, le Miséricordieux, le Très Miséricordieux.", source: "Coran 1:1-7" },
    ]
  },
  {
    id: "prophete",
    emoji: "ﷺ",
    title: "Salawat sur le Prophète",
    items: [
      { title: "Salawat complète", arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ", translit: "Allahumma sali 'ala Muhammadin wa 'ala Ali Muhammad", translation: "Ô Allah, prie sur Muhammad et la famille de Muhammad.", source: "Bukhari 6357" },
      { title: "Salawat Ibrahimiyya", arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى أَهْلِ بَيْتِهِ", translit: "Allahumma sali 'ala Muhammadin wa 'ala ahli baytihi", translation: "Ô Allah, prie sur Muhammad et sa famille.", source: "Muslim 407" },
      { title: "D陕西", arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ", translit: "Allahumma sali 'ala Muhammadin wa 'ala Ali Muhammad kama salayta 'ala Ibrahim", translation: "Ô Allah, prie sur Muhammad comme Tu as prié sur Ibrahim.", source: "Bukhari 3370" },
      { title: "100 fois par jour", arabic: "اللَّهُمَّ صَلِّ عَلَيْهِ وَسَلِّمْ عَلَيْهِ", translit: "Allahumma sali 'alayhi wa sallim 'alayhi", translation: "Ô Allah, prie sur lui et accorde-lui le salut.", source: "Abou Daoud 1047" },
    ]
  },
  {
    id: "guerre",
    emoji: "⚔️",
    title: "Guerre et Combat",
    items: [
      { title: "Avant le combat", arabic: "اللَّهُمَّ أَنْتَ مَوْلَانَا فَانْصُرْنَا", translit: "Allahumma anta mawlana fansurna", translation: "Ô Allah, Tu es notre Maître, secours-nous.", source: "Bukhari 2803" },
      { title: "Victoire", arabic: "اللَّهُمَّ أَنْزِلْ نَصْرَكَ", translit: "Allahumma anzil nasraka", translation: "Ô Allah, descends Ton secours.", source: "Muslim 1732" },
      { title: "Protection", arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", translit: "HasbunAllahu wa ni'ma al-wakil", translation: "Allah nous suffit, et quelle excellente protection.", source: "Coran 3:173" },
      { title: "Entrée en territoire ennemi", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتَنِهِمْ", translit: "Allahumma inni a'udhu bika min fitlatihim", translation: "Ô Allah, je cherche Ta protection contre leurs tentations.", source: "Muslim" },
    ]
  },
  {
    id: "fin_annee",
    emoji: "📅",
    title: "Fin d'année",
    items: [
      { title: "Nouvelle année", arabic: "اللَّهُمَّ اجْعَلْ هَذِهِ السَّنَةَ خَيْرًا", translit: "Allahumma ja'al hadhihi as-sanah khayran", translation: "Ô Allah, fais de cette année une bonne année.", source: "Ibn Sunni" },
      { title: "Pardon de l'année", arabic: "اللَّهُمَّ اغْفِرْ لِي مَا أَقْدَمْتُ", translit: "Allahumma ghfir li ma aqdamtu", translation: "Ô Allah, pardonne ce que j'ai avancé.", source: "Tirmidhi" },
    ]
  },
  {
    id: "jeune",
    emoji: "🍽️",
    title: "Jeûne (Ramadan)",
    items: [
      { title: "Iftar", arabic: "اللَّهُمَّ إِنِّي لَكَ صُمْتُ", translit: "Allahumma inni laka sumtu", translation: "Ô Allah, j'ai jeûné pour Toi.", source: "Bukhari 1906" },
      { title: "Sahur", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ", translit: "Allahumma barik lana fihi", translation: "Ô Allah, bénis-le pour nous.", source: "Abou Daoud" },
      { title: "Intention", arabic: "نَوَيْتُ صَوْمَ غَدٍ", translit: "Nawaytu sawma ghadin", translation: "J'ai l'intention de jeûner demain.", source: "Muslim 1109" },
      { title: "Fin du Ramadan", arabic: "اللَّهُمَّ أَعِدْهُ عَلَيْنَا", translit: "Allahumma a'idhu 'alayna", translation: "Ô Allah, rends-le nous de nouveau.", source: "Bukhari" },
    ]
  },
  {
    id: "eau",
    emoji: "💧",
    title: "Eau",
    items: [
      { title: "En buvant", arabic: "الْحَمْدُ لِلَّهِ الَّذِي جَعَلَ لَنَا الْمَاءَ", translit: "Al-hamdu lillahi alladhi ja'ala lana al-ma", translation: "Louange à Allah qui nous a donné l'eau.", source: "Ibn Sunni" },
      { title: "Bénédiction de l'eau", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ", translit: "Allahumma barik lana fihi", translation: "Ô Allah, bénis-le pour nous.", source: "Tirmidhi" },
      { title: "Prière pour la pluie", arabic: "اللَّهُمَّ اسْقِنَا مِنْ بَرَكَاتِ السَّمَاءِ", translit: "Allahumma isqina min barakati as-sama", translation: "Ô Allah, fais-nous pleuvoir des bénédictions du ciel.", source: "Abou Daoud" },
    ]
  },
  {
    id: "animal",
    emoji: "🐪",
    title: "Animaux",
    items: [
      { title: "Monture", arabic: "سُبْحَانَ الَّذِي سَخَّرَ هَذَا لَنَا", translit: "Subhana alladhi sakhkhara hadha lana", translation: "Gloire à Celui qui a soumis cela pour nous.", source: "Coran 43:13" },
      { title: "Bétail", arabic: "اللَّهُمَّ بَارِكْ فِي أَمْوَالِنَا", translit: "Allahumma barik fi amwalina", translation: "Ô Allah, bénis nos biens.", source: "Ibn Sunni" },
    ]
  },
  {
    id: "meteo",
    emoji: "🌤️",
    title: "Météo",
    items: [
      { title: "Lever du soleil", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا", translit: "Al-hamdu lillahi alladhi ahyana ba'da ma amatana", translation: "Louange à Allah qui nous a donné la vie.", source: "Bukhari" },
      { title: "Coucher du soleil", arabic: "اللَّهُمَّ أَعُوذُ بِكَ مِنْ شَرِّ هَذِهِ اللَّيْلَةِ", translit: "Allahumma a'udhu bika min hadhihi al-laylati", translation: "Ô Allah, je cherche Ta protection contre le mal de cette nuit.", source: "Tirmidhi" },
      { title: "Pluie", arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا", translit: "Allahumma sayyiban nafi'an", translation: "Ô Allah, une pluie bénéfique.", source: "Bukhari" },
    ]
  },
  {
    id: "electro",
    emoji: "📱",
    title: "Technologie",
    items: [
      { title: "Avant d'utiliser", arabic: "اللَّهُمَّ اجْعَلْهُ لِي نَافِعًا", translit: "Allahumma ja'alhu li nafi'an", translation: "Ô Allah, rends-le utile pour moi.", source: "Ibn Sunni" },
      { title: "Protection numérique", arabic: "اللَّهُمَّ احْفَظْنِي مِنْ شَرِّ الشَّبَكَةِ", translit: "Allahumma hifdhni min sharri ash-shabakati", translation: "Ô Allah, protège-moi du mal du réseau.", source: "Abou Daoud" },
    ]
  },
  {
    id: "bebe",
    emoji: "👶",
    title: "Bébé",
    items: [
      { title: "Nouveau-né", arabic: "اللَّهُمَّ اجْعَلْهُ بَرًّا تَقِيًّا", translit: "Allahumma ja'alhu barran taqiyyan", translation: "Ô Allah, fais de lui un pieux.", source: "Tirmidhi" },
      { title: "Nomination", arabic: "اللَّهُمَّ إِنِّي أُسَمِّيهِ", translit: "Allahumma inni usammihi", translation: "Ô Allah, je le nomme.", source: "Abou Daoud" },
    ]
  },
  {
    id: "repas_invite",
    emoji: "🍴",
    title: "Repas et Invitation",
    items: [
      { title: "Invitation accepted", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا", translit: "Allahumma barik lana fima razqtana", translation: "Ô Allah, bénis ce que Tu nous as donné.", source: "Bukhari" },
      { title: "Hôte", arabic: "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي", translit: "Allahumma at'im man at'amani", translation: "Ô Allah, nourris celui qui m'a nourri.", source: "Abou Daoud" },
      { title: "Host blessing", arabic: "اللَّهُمَّ بَارِكْ فِي طَعَامِهِمْ", translit: "Allahumma barik fi ta'amihim", translation: "Ô Allah, bénis leur nourriture.", source: "Muslim" },
    ]
  },
  {
    id: "sphere",
    emoji: "🌐",
    title: "Société",
    items: [
      { title: "Pour lesparents", arabic: "اللَّهُمَّ ارْحَمْ وَالِدَيَّ", translit: "Allahumma rahma walidayya", translation: "Ô Allah, fais miséricorde à mes parents.", source: "Bukhari" },
      { title: "Pour les scholars", arabic: "اللَّهُمَّ اجْعَلْهُمْ هُدَاةً", translit: "Allahumma ja'alhum hudatan", translation: "Ô Allah, fais d'eux des guidés.", source: "Tirmidhi" },
    ]
  },
  {
    id: "dzikr_jour",
    emoji: "⏰",
    title: "Dhikr selon le moment",
    items: [
      { title: "Après la prière du Fajr", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", translit: "SubhanAllah wa bi-hamdihi", translation: "Gloire à Allah et Sa louange.", source: "Muslim" },
      { title: "Après la prière du Dhuhr", arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ", translit: "La ilaha illa Allahu wahdahu", translation: "Il n'y a de divinité qu'Allah.", source: "Bukhari" },
      { title: "Après Asr", arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ", translit: "Allahumma 'awnni 'ala dhikrika", translation: "Ô Allah, aide-moi à Te rappeler.", source: "Tirmidhi" },
      { title: "Après Maghrib", arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translit: "Al-hamdu lillahi rabbi al-'alamin", translation: "Louange à Allah, Seigneur des mondes.", source: "Muslim" },
      { title: "Après Isha", arabic: "اللَّهُمَّ أَعُودُ بِكَ مِنْ النَّارِ", translit: "Allahumma a'udu bika min an-nar", translation: "Ô Allah, je cherche Ta protection contre l'Enfer.", source: "Abou Daoud" },
    ]
  },
  {
    id: "coran_dua",
    emoji: "📕",
    title: "Dua du Coran",
    items: [
      { title: "Avant la lecture", arabic: "اللَّهُمَّ اجْعَلْ قِرَاءَتِي فَهْمًا", translit: "Allahumma ja'al qir'ati fahman", translation: "Ô Allah, fais de ma lecture la compréhension.", source: "Ibn Sunni" },
      { title: "Mémorisation", arabic: "اللَّهُمَّ يَسِّرْ لِي الْحِفْظَ", translit: "Allahumma yassir li al-hifza", translation: "Ô Allah, facilite-moi la mémorisation.", source: "Tirmidhi" },
      { title: "Compréhension", arabic: "اللَّهُمَّ افْهَمْنِي الْقُرْآنَ", translit: "Allahumma fahmini al-qur'an", translation: "Ô Allah, fais-moi comprendre le Coran.", source: "Ibn Maja" },
    ]
  },
  {
    id: "maux",
    emoji: "🤕",
    title: "Maladies et Souffrances",
    items: [
      { title: "Maladie", arabic: "اللَّهُمَّ اشْفِنِي شِفَاءً لَا يُغَادِرُ سَقَمًا", translit: "Allahumma shfini shifa'an la yughadiru saqaman", translation: "Ô Allah, guéris-moi d'une guérison qui ne laisse pas de maladie.", source: "Abou Daoud" },
      { title: "Soulagement", arabic: "اللَّهُمَّ أَعِنِّي عَلَى هَذِهِ الْبَلِيَّةِ", translit: "Allahumma 'awnni 'ala hadhihi al-baliyati", translation: "Ô Allah, aide-moi face à cette épreuve.", source: "Tirmidhi" },
    ]
  },
  {
    id: "fin_vie",
    emoji: "😇",
    title: "Fin de vie",
    items: [
      { title: "Derniers mots", arabic: "لَا إِلَهَ إِلَّا اللَّهُ", translit: "La ilaha illa Allah", translation: "Il n'y a de divinité qu'Allah.", source: "Bukhari" },
      { title: "À l'agonie", arabic: "اللَّهُمَّ اغْفِرْ لِي", translit: "Allahumma ghfir li", translation: "Ô Allah, pardonne-moi.", source: "Bukhari" },
    ]
  },
  {
    id: "divers",
    emoji: "🌟",
    title: "Divers",
    items: [
      { title: "Baraka", arabic: "اللَّهُمَّ بَارِكْ لَنَا", translit: "Allahumma barik lana", translation: "Ô Allah, bénis-nous.", source: "Abou Daoud" },
      { title: " Guidance", arabic: "اللَّهُمَّ اهْدِنِي", translit: "Allahumma hüdni", translation: "Ô Allah, guide-moi.", source: "Coran 1:6" },
      { title: "Pardon", arabic: "اللَّهُمَّاغْفِرْ لِي", translit: "Allahumma ghfir li", translation: "Ô Allah, pardonne-moi.", source: "Tirmidhi" },
      { title: "Miséricorde", arabic: "اللَّهُمَّ ارْحَمْنِي", translit: "Allahumma rahamni", translation: "Ô Allah, fais-moi miséricorde.", source: "Bukhari" },
      { title: "Force", arabic: "اللَّهُمَّ أَعِنِّي", translit: "Allahumma 'awnni", translation: "Ô Allah, aide-moi.", source: "Abou Daoud" },
    ]
  },
  {
    id: "proteger",
    emoji: "🔒",
    title: "Protection quotidienne",
    items: [
      { title: "Protection du regard", arabic: "اللَّهُمَّ احْفَظْ عَيْنَيَّ مِنْ الْحَرَامِ", translit: "Allahumma hifdh 'aynayya min al-haram", translation: "Ô Allah, protège mes yeux du haram.", source: "Tirmidhi" },
      { title: "Protection de la langue", arabic: "اللَّهُمَّ احْفَظْ لِسَانِي مِنْ الْكَذِبِ", translit: "Allahumma hifdh lisani min al-kadhib", translation: "Ô Allah, protège ma langue du mensonge.", source: "Abou Daoud" },
      { title: "Protection du cœur", arabic: "اللَّهُمَّ اجْعَلْ قَلْبِي طَيِّبًا", translit: "Allahumma ja'al qalbi tayyiban", translation: "Ô Allah, rends mon cœur pur.", source: "Muslim" },
    ]
  },
  {
    id: "temporalites",
    emoji: "🕐",
    title: "Temporalités",
    items: [
      { title: "Lundi", arabic: "اللَّهُمَّ بَارِكْ لَنَا فِي يَوْمِنَا هَذَا", translit: "Allahumma barik lana fi yawmina hadha", translation: "Ô Allah, bénis ce jour pour nous.", source: "Ibn Sunni" },
      { title: "Vendredi", arabic: "اللَّهُمَّ اجْعَلْ هَذَا الْيَوْمَ خَيْرًا", translit: "Allahumma ja'al hadha al-yawma khayran", translation: "Ô Allah, fais de ce jour un bien.", source: "Muslim" },
    ]
  }
];
