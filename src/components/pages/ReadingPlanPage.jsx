import { useState } from "react";
import { PageHeader } from "../PageHeader";
import { Card } from "../Card";

const INVOCATIONS_DATA = [
  {
    id: "maison",
    emoji: "🏠",
    title: "Maison",
    subcategories: [
      {
        id: "entrer-maison",
        title: "En entrant à la maison",
        items: [
          {
            arabic: "بِسْمِ اللَّهِ أَدْخُلُ، بِسْمِ اللَّهِ أَخْرُجُ، وَعَلَى اللَّهِ رَبِّي أَتَوَكَّلُ",
            translit: "Bismillah adkhulu, bismillah akhruju, wa 'ala Allahi rabbi tawakkaltu",
            translation: "Au nom d'Allah j'entre, au nom d'Allah je sors et en Allah, mon Seigneur, je place ma confiance.",
            source: "Tirmidhi 3416"
          },
          {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَكَفَانَا وَآوَانَا",
            translit: "Al-hamdu lillahi alladhi at'amana wa saqana wa kafana wa awana",
            translation: "Louange à Allah qui nous a nourris, abreuvés, satisfaits et logés.",
            source: "Muslim 2731"
          }
        ]
      },
      {
        id: "sortir-maison",
        title: "En sortant de la maison",
        items: [
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْخُرُوجِ فِي الْعُورَةِ، وَالدُّخُولِ فِي الْهَرَبِ",
            translit: "Allahumma inni a'udhu bika min al-khuruji fi al-'urrah, wa ad-dukhuli fi al-harab",
            translation: "Ô Allah, je cherche Ta protection contre le fait de sortir nu et de fuir dans la peur.",
            source: "Abou Daoud 3896"
          },
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَعُوذُ بِكَ أَنْ أَزْلُفَ إِلَيْكَ بِمَا قَدْ نَهَيْتَنِي عَنْهُ",
            translit: "Allahumma inni a'udhu bika an ushirka bika wa ana a'lamu, wa a'udhu bika an azlifa ilayka ma qad nahaytani 'anhu",
            translation: "Ô Allah, je cherche Ta protection contre le polythéisme que je connaisse, et je cherche Ta protection contre le rapprochement de Toi par ce dont Tu m'as interdit.",
            source: "Ahmed 1754"
          }
        ]
      }
    ]
  },
  {
    id: "mosquee",
    emoji: "🕌",
    title: "Mosquée",
    subcategories: [
      {
        id: "aller-mosquee",
        title: "En allant à la mosquée",
        items: [
          {
            arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَمِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ شِمَالِي نُورًا، وَمِنْ أَمَامِي نُورًا، وَمِنْ خَلْفِي نُورًا، وَاجْعَلْ فِي نَفْسِي نُورًا",
            translit: "Allahumma aj'al fi qalbi nooran, wa fi lisani nooran, wa fi sam'i nooran, wa fi basari nooran, wa min fawqi nooran, wa min tahti nooran, wa 'an yamani nooran, wa 'an shimali nooran, wa min amami nooran, wa min khalfi nooran, wa aj'al fi nafsi nooran",
            translation: "Ô Allah, place dans mon cœur une lumière, dans ma langue une lumière, dans mon ouïe une lumière, dans ma vue une lumière, au-dessus de moi une lumière, sous moi une lumière, à ma droite une lumière, à ma gauche une lumière, devant moi une lumière, derrière moi une lumière, et place dans mon âme une lumière.",
            source: "Tirmidhi 3416"
          }
        ]
      },
      {
        id: "entrer-mosquee",
        title: "En entrant à la mosquée",
        items: [
          {
            arabic: "بِسْمِ اللَّهِ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ",
            translit: "Bismillah was-salamu 'ala rasulillah",
            translation: "Au nom d'Allah et que la paix soit sur le Messager d'Allah.",
            source: "Muslim 713"
          },
          {
            arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
            translit: "Allahumma iftaḥ li abwaba rahmatik",
            translation: "Ô Allah, ouvre-moi les portes de Ta miséricorde.",
            source: "Muslim 713"
          }
        ]
      },
      {
        id: "sortir-mosquee",
        title: "En sortant de la mosquée",
        items: [
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّيْطَانِ الرَّجِيمِ",
            translit: "Allahumma inni a'udhu bika min ash-Shaytani ar-Rajim",
            translation: "Ô Allah, je cherche Ta protection contre le diable maudit.",
            source: "Bukhari 832"
          }
        ]
      },
      {
        id: "adhan",
        title: "En entendant l'adhan",
        items: [
          {
            arabic: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
            translit: "Allahumma rabba hadhihi ad-dawati at-tammati was-salati al-qa'imati, ati Muhammadan al-wasilata wal-fadilata, wa b'athhu maqaman mahmudan alladhi wa'dtahu",
            translation: "Ô Allah, Seigneur de cette invocation parfaite et de cette prière établie, accorde à Muhammad le degré élevé et la grâce, et ressuscite-le au lieu louangé que Tu lui as promis.",
            source: "Bukhari 614"
          }
        ]
      },
      {
        id: "apres-adhan",
        title: "Après l'adhan",
        items: [
          {
            arabic: "اللَّهُمَّ اجْعَلْ قَلْبِي ذَاكِرًا، وَ لِسَانِي شَاكِرًا، وَاجْعَلْنِي مِنْ عِبَادِكَ الصَّادِقِينَ",
            translit: "Allahumma aj'al qalbi dhakiran, wa lisani shakiran, wa aj'alni min 'ibadika as-sadiqin",
            translation: "Ô Allah, rends mon cœur remembers et ma langue reconnaissant, et fais de moi l'un de Tes serviteurs sincères.",
            source: "Abou Daoud 1322"
          }
        ]
      }
    ]
  },
  {
    id: "priere",
    emoji: "🙏",
    title: "Prière",
    subcategories: [
      {
        id: "ouverture-priere",
        title: "Invocation d'ouverture",
        items: [
          {
            arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
            translit: "Bismillahi ar-Rahmani ar-Rahim",
            translation: "Au nom d'Allah, le Miséricordieux, le Tout Miséricordieux.",
            source: "Coran 1:1"
          },
          {
            arabic: "اللَّهُ أَكْبَرُ كَبِيرًا",
            translit: "Allahu Akbar Kabiran",
            translation: "Allah est le Plus Grand, très grand.",
            source: "Muslim 387"
          },
          {
            arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
            translit: "Subhanaka Allahumma wa bi-hamdika, wa tabaraka smuka, wa ta'ala jadduka, wa la ilaha ghayruk",
            translation: "Gloire à Toi, ô Allah, et à Toi la louange ; béni est Ton Nom, élevée estTa majesté, et il n'y a de divinité autre que Toi.",
            source: "Abou Daoud 1285"
          }
        ]
      },
      {
        id: "inclinaison",
        title: "En inclinaison",
        items: [
          {
            arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
            translit: "Subhana Rabbiya al-'Azim",
            translation: "Gloire à mon Seigneur, le Très Grand.",
            source: "Bukhari 799"
          }
        ]
      },
      {
        id: "redressement",
        title: "Au redressement après l'inclinaison",
        items: [
          {
            arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
            translit: "Sami'Allahhu liman hamidah",
            translation: "Allah entend celui qui Le loue.",
            source: "Bukhari 796"
          },
          {
            arabic: "رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ",
            translit: "Rabbana laka al-hamdu mil'a as-samawat wa mil'a al-ardi wa mil'a ma shi'ta min shay'in ba'du",
            translation: "Seigneur, à Toi la louange qui remplit les cieux, la terre et ce que Tu veux d'autre.",
            source: "Muslim 477"
          }
        ]
      },
      {
        id: "prosternation",
        title: "En prosternation",
        items: [
          {
            arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
            translit: "Subhana Rabbiya al-A'la",
            translation: "Gloire à mon Seigneur, le Plus Haut.",
            source: "Bukhari 799"
          },
          {
            arabic: "اللَّهُمَّ لَكَ سَجَدْتُ، وَبِكَ آمَنْتُ، وَإِلَيْكَ أَسْلَمْتُ، سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ",
            translit: "Allahumma laka sajadtu, wa bika amantu, wa ilayka aslamtu, sajada wajhi lilladhi khalaqahu wa sawwarahu wa shaqqa sam'ahu wa basarahu, tabaraka Allahu ahsanu al-khaliqin",
            translation: "Ô Allah, c'est à Toi que je me prosterne, en Toi que je crois, à Toi que je m soumets. Mon visage se prosterne devant Celui qui l'a créé, modelé, lui a donné l'ouïe et la vue. Que Allah soit béni, le meilleur des créateurs.",
            source: "Muslim 771"
          }
        ]
      },
      {
        id: "entre-prosternations",
        title: "Entre les deux prosternations",
        items: [
          {
            arabic: "رَبِّ اغْفِرْ لِي",
            translit: "Rabbi ghfir li",
            translation: "Seigneur, pardonne-moi.",
            source: "Bukhari 834"
          }
        ]
      },
      {
        id: "tachahhoud",
        title: "Tachahhoud",
        items: [
          {
            arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ",
            translit: "At-Tahiyyatu lillahi was-salawatu wat-tayyibatu. As-salamu 'alayka ayyuha an-Nabiyyu wa rahmatullahi wa barakatuhu. As-salamu 'alayna wa 'ala 'ibadillahi as-salihin",
            translation: "Les salutations, les prières et les paroles pures sont pour Allah. Que la paix soit sur toi, Prophète, ainsi que la miséricorde d'Allah et Ses bénédictions. Que la paix soit sur nous et sur les serviteurs d'Allah vertueux.",
            source: "Bukhari 6255"
          },
          {
            arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
            translit: "Allahumma sali 'ala Muhammadin wa 'ala ali Muhammadin kama salayta 'ala Ibrahima wa 'ala ali Ibrahima, innaka Hamidun Majid",
            translation: "Ô Allah, prie sur Muhammad et la famille de Muhammad comme Tu as prié sur Ibrahim et la famille d'Ibrahim. Tu es certes Louable et Glorieux.",
            source: "Bukhari 3370"
          }
        ]
      },
      {
        id: "salawat",
        title: "Prières sur le Prophète",
        items: [
          {
            arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
            translit: "Allahumma sali 'ala Muhammadin wa 'ala ali Muhammadin kama salayta 'ala Ibrahima wa 'ala ali Ibrahima, innaka Hamidun Majid",
            translation: "Ô Allah, prie sur Muhammad et la famille de Muhammad comme Tu as prié sur Ibrahim et la famille d'Ibrahim. Tu es certes Louable et Glorieux.",
            source: "Bukhari 3370"
          },
          {
            arabic: "اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
            translit: "Allahumma barik 'ala Muhammadin wa 'ala ali Muhammadin kama barakta 'ala Ibrahima wa 'ala ali Ibrahima, innaka Hamidun Majid",
            translation: "Ô Allah, bénis Muhammad et la famille de Muhammad comme Tu as béni Ibrahim et la famille d'Ibrahim. Tu es certes Louable et Glorieux.",
            source: "Bukhari 3370"
          }
        ]
      },
      {
        id: "avant-salutation",
        title: "Avant la salutation finale",
        items: [
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ",
            translit: "Allahumma inni a'udhu bika min 'adhab al-qabri, wa min fitnati al-mahya wa al-mamati",
            translation: "Ô Allah, je cherche Ta protection contre le châtiment de la tombe et contre l'épreuve de la vie et de la mort.",
            source: "Muslim 2717"
          },
          {
            arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
            translit: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhab an-nar",
            translation: "Seigneur, donne-nous une belle part ici-bas et une belle part dans l'au-delà, et protège-nous du châtiment de l'Enfer.",
            source: "Coran 2:201"
          }
        ]
      },
      {
        id: "apres-priere",
        title: "Après la prière",
        items: [
          {
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "La ilaha illa Allahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
            translation: "Il n'y a de divinité qu'Allah, l'Unique sans associé. À Lui la royauté, à Lui la louange, et Il est sur toute chose capable.",
            source: "Bukhari 6393"
          },
          {
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
            translit: "Astaghfirullah al-'Azim alladhi la ilaha illa huwa al-Hayyu al-Qayyumu wa atubu ilayhi",
            translation: "Je demande pardon à Allah le Très Grand,除 Lui pas de divinité, le Vivant, le Subsistant, et je me repens à Lui.",
            source: "Tirmidhi 3574"
          }
        ]
      }
    ]
  },
  {
    id: "sommeil",
    emoji: "🌙",
    title: "Sommeil",
    subcategories: [
      {
        id: "avant-dormir",
        title: "Avant de dormir",
        items: [
          {
            arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، إِنْ أَمَسَكَتْ نَفْسِي فَاغْفِرْ لَهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا",
            translit: "Bismika rabbi wa da'tu janbi, wa bika arfa'uhu, in amsakat nafsi faghfir laha, wa in arsaltaha fahfazha",
            translation: "C'est en Ton nom, mon Seigneur, que je pose mon côté, et c'est par Toi que je le relève. Si Tu retiens mon âme, pardonne-lui ; si Tu la laisses aller, protège-la.",
            source: "Bukhari 6324"
          },
          {
            arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
            translit: "Allahumma qini 'azabaka yawma tab'athu 'ibadaka",
            translation: "Ô Allah, protège-moi de Ton châtiment le jour où Tu ressusciteras Tes serviteurs.",
            source: "Bukhari 6329"
          },
          {
            arabic: "بِعِيَادَةِ اللَّهِ أَبِيتُ، وَبِعِيَادَةِ اللَّهِ أَقُومُ",
            translit: "Bi'iyadati Allahi abitu, wa bi'iyadati Allahi aqumu",
            translation: "C'est sous la protection d'Allah que je me couche, c'est sous la protection d'Allah que je me lève.",
            source: "Bukhari 6322"
          },
          {
            arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            translit: "A'udhu bikalimati Allahi at-tammati min shari ma khalaq",
            translation: "Je cherche protection dans les parfaites paroles d'Allah contre le mal de ce qu'Il a créé.",
            source: "Muslim 2709"
          }
        ]
      },
      {
        id: "reveil",
        title: "Au réveil",
        items: [
          {
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
            translit: "Al-hamdu lillahi alladhi ahyana ba'da ma amatana wa ilayhi an-nushur",
            translation: "Louange à Allah qui nous a donné la vie après nous avoir fait mourir, et vers Lui est la résurrection.",
            source: "Bukhari 6324"
          },
          {
            arabic: "اللَّهُمَّ أَعِتْنِي فِي مَقَامِي، وَأَعِظْمْ لِي بُرْهَانِي",
            translit: "Allahumma a'tini fi maqami, wa a'zim li burhani",
            translation: "Ô Allah, protège-moi dans ma situation et agrée ma preuve.",
            source: "Tirmidhi 3398"
          }
        ]
      },
      {
        id: "reveil-nocturne",
        title: "En cas de réveil nocturne",
        items: [
          {
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "La ilaha illa Allahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
            translation: "Il n'y a de divinité qu'Allah, l'Unique sans associé. À Lui la royauté, à Lui la louange, et Il est sur toute chose capable.",
            source: "Bukhari 1154"
          },
          {
            arabic: "اللَّهُمَّ أَعِنِي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            translit: "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatika",
            translation: "Ô Allah, aide-moi à Te évoquer, à Te remercier et à bien T'adorer.",
            source: "Abou Daoud 1522"
          }
        ]
      }
    ]
  },
  {
    id: "matinetsoir",
    emoji: "🌅",
    title: "Matin et soir",
    subcategories: [
      {
        id: "invocations-matin",
        title: "Invocations du matin",
        items: [
          {
            arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
            translit: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilayka an-nushur",
            translation: "Ô Allah, c'est par Toi que nous commençons le matin, c'est par Toi que nous finissons la soirée, c'est par Toi que nous vivons, c'est par Toi que nous mourrons et c'est vers Toi que sera la résurrection.",
            source: "Tirmidhi 3391"
          },
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّرِّ مَا صَلَحَ بِهِ صَبَاحُنَا",
            translit: "Allahumma inni a'udhu bika min ash-sharri ma salahu bihi sabahuna",
            translation: "Ô Allah, je cherche Ta protection contre le mal dont notre matinée a été exempte.",
            source: "Ahmed 2176"
          },
          {
            arabic: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ",
            translit: "Asbahna 'ala fitrati al-islam, wa 'ala kalimati al-ikhlas, wa 'ala dini nabiyyina Muhammadin",
            translation: "Nous avons commencé cette journée sur la nature pure de l'Islam, sur la parole de sincère adoration et sur la religion de notre Prophète Muhammad.",
            source: "Bukhari 6042"
          },
          {
            arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ",
            translit: "Allahumma ma asbaha bi min ni'matin faminka wahdaka la sharika lak",
            translation: "Ô Allah, toute faveur qui m'est parvenue ce matin vient de Toi, l'Unique sans associé.",
            source: "Muslim 2732"
          },
          {
            arabic: "اللَّهُمَّ أَعِذْنِي مِنْ جَهْدِ النَّهَارِ، وَسُوءِ الْمَنَامِ",
            translit: "Allahumma a'idhni min jahdi al-nahari, wa su'i al-manam",
            translation: "Ô Allah, protège-moi de la fatigue de la journée et du mauvais sommeil.",
            source: "Ibn Sunni 250"
          }
        ]
      },
      {
        id: "invocations-soir",
        title: "Invocations du soir",
        items: [
          {
            arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
            translit: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namutu, wa ilayka an-nushur",
            translation: "Ô Allah, c'est par Toi que nous finissons la soirée, c'est par Toi que nous commençons le matin, c'est par Toi que nous vivons, c'est par Toi que nous mourrons et c'est vers Toi que sera la résurrection.",
            source: "Tirmidhi 3391"
          },
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّرِّ مَا صَلَحَ بِهِ مَسَاؤُنَا",
            translit: "Allahumma inni a'udhu bika min ash-sharri ma salahu bihi masa'una",
            translation: "Ô Allah, je cherche Ta protection contre le mal dont notre soirée a été exempte.",
            source: "Ahmed 2176"
          },
          {
            arabic: "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ",
            translit: "Amsayna 'ala fitrati al-islam, wa 'ala kalimati al-ikhlas, wa 'ala dini nabiyyina Muhammadin",
            translation: "Nous avons commencé cette soirée sur la nature pure de l'Islam, sur la parole de sincère adoration et sur la religion de notre Prophète Muhammad.",
            source: "Bukhari 6042"
          },
          {
            arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ",
            translit: "Allahumma ma amsa bi min ni'matin faminka wahdaka la sharika lak",
            translation: "Ô Allah, toute faveur qui m'est parvenue ce soir vient de Toi, l'Unique sans associé.",
            source: "Muslim 2732"
          },
          {
            arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            translit: "A'udhu bikalimati Allahi at-tammati min shari ma khalaq",
            translation: "Je cherche protection dans les parfaites paroles d'Allah contre le mal de ce qu'Il a créé.",
            source: "Muslim 2709"
          }
        ]
      }
    ]
  },
  {
    id: "voyage",
    emoji: "🚗",
    title: "Voyage",
    subcategories: [
      {
        id: "avant-partir",
        title: "Avant de partir",
        items: [
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمَنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ",
            translit: "Allahumma inni a'udhu bika min watha'safari, wa ka'abati al-manzari, wa su'i al-manqalabi fi al-mali wa al-ahl",
            translation: "Ô Allah, je cherche Ta protection contre les difficultés du voyage, le désappointement du regard et le mauvais retour en richesse et famille.",
            source: "Abou Daoud 2602"
          },
          {
            arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            translit: "A'udhu bikalimati Allahi at-tammati min shari ma khalaq",
            translation: "Je cherche protection dans les parfaites paroles d'Allah contre le mal de ce qu'Il a créé.",
            source: "Muslim 2709"
          },
          {
            arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
            translit: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin",
            translation: "Gloire à Celui qui a soumis cela ; nous n'y aurions pas réussi.",
            source: "Coran 43:13"
          }
        ]
      },
      {
        id: "pendant-voyage",
        title: "Pendant le voyage",
        items: [
          {
            arabic: "اللَّهُمَّ اجْعَلْ لَنَا مِنْ سَفَرِنَا هَذَا أَجْرًا، وَمِنْ أَهْلِنَا بُرْهَانًا",
            translit: "Allahumma aj'al lana min safarina hadha ajran, wa min ahlina burhanan",
            translation: "Ô Allah, rends ce voyage profitable pour nous et notre famille une preuve.",
            source: "Ahmed 7832"
          },
          {
            arabic: "اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا، وَاجْعَلْهُ لَنَا شِعَارًا وَدُعَاءً صَالِحًا",
            translit: "Allahumma hawwil 'alayna safarana hadha, wa aj'alhu lana shi'aran wa du'a'an salihan",
            translation: "Ô Allah, facilite-nous ce voyage et fais-en une invocation vertueuse pour nous.",
            source: "Ibn Sunni 448"
          }
        ]
      },
      {
        id: "retour-voyage",
        title: "Au retour",
        items: [
          {
            arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
            translit: "A'ibuna ta'ibuna 'abiduna lirabbina hamidun",
            translation: "Nous revenons, repentants, adorants et louant notre Seigneur.",
            source: "Muslim 2818"
          },
          {
            arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
            translit: "Allahumma kfini bi-halalika 'an harramika, wa aghnini bi-fadlika 'amman siwak",
            translation: "Ô Allah, rends-moi suffisant de ce que Tu as permis contre ce que Tu as interdit, et enrichis-moi par Ta grâce contre ceux qui ne sont pas comme Toi.",
            source: "Tirmidhi 3561"
          }
        ]
      }
    ]
  },
  {
    id: "protection",
    emoji: "🛡️",
    title: "Protection",
    subcategories: [
      {
        id: "protection-generale",
        title: "Protection générale",
        items: [
          {
            arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            translit: "A'udhu bikalimati Allahi at-tammati min shari ma khalaq",
            translation: "Je cherche protection dans les parfaites paroles d'Allah contre le mal de ce qu'Il a créé.",
            source: "Muslim 2709"
          },
          {
            arabic: "بِسْمِ اللَّهِ تَرَكْتُ شَرَّ فُلَانٍ",
            translit: "Bismillahi taraktu sharra fulani",
            translation: "Au nom d'Allah, j'ai laissé le mal d'untel.",
            source: "Abou Daoud 5098"
          },
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْجُبُنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ",
            translit: "Allahumma inni a'udhu bika al-jubni wa al-bukhli, wa a'udhu bika an uradda ila ardhali al-umur",
            translation: "Ô Allah, je cherche Ta protection contre la lâcheté et l'avarice, et je cherche Ta protection contre le retour à la misère de la vieillesse.",
            source: "Bukhari 2823"
          },
          {
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ",
            translit: "Allahumma inni a'udhu bika min 'adhab al-qabri, wa min fitnati al-mahya wa al-mamati",
            translation: "Ô Allah, je cherche Ta protection contre le châtiment de la tombe et contre l'épreuve de la vie et de la mort.",
            source: "Muslim 2717"
          }
        ]
      }
    ]
  },
  {
    id: "pardon",
    emoji: "🤲",
    title: "Demande de pardon",
    subcategories: [
      {
        id: "astaghfirullah",
        title: "Demande de pardon",
        items: [
          {
            arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
            translit: "Astaghfirullah al-'Azim alladhi la ilaha illa huwa al-Hayyu al-Qayyumu wa atubu ilayhi",
            translation: "Je demande pardon à Allah le Très Grand,除 Lui pas de divinité, le Vivant, le Subsistant, et je me repens à Lui.",
            source: "Tirmidhi 3574"
          },
          {
            arabic: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِندِكَ",
            translit: "Rabbi inni zalamtu Nafsi zulman kathiran wa la yaghfiru adh-dhunuba illa anta faghfir li maghfiratan min 'indik",
            translation: "Seigneur, j'ai beaucoup oppressé mon âme. Nulle autre que Toi ne pardonne. Accorde-moi donc un pardon qui vienne de Toi.",
            source: "Coran 3:147"
          },
          {
            arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
            translit: "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abdak, wa ana 'ala 'ahdika wa wa'dika mastata'tu",
            translation: "Ô Allah, Tu es mon Seigneur, il n'y a de divinité que Toi. Tu m'as créé et je suis Ton serviteur. Je suis fidèle à Ton alliance et Ta promesse autant que je le peux.",
            source: "Bukhari 6323"
          },
          {
            arabic: "تَابَ اللَّهُ عَلَيْهِمْ إِنَّ اللَّهَ هُوَ التَّوَّابُ الرَّحِيمُ",
            translit: "Taba Allahu 'alayhim inna Allahu Huwa at-Tawwab ar-Rahim",
            translation: "Allah s'est tournée vers eux ; car Allah est cel Qui accepte le repentir, le Miséricordieux.",
            source: "Coran 2:160"
          }
        ]
      }
    ]
  }
];

export function ReadingPlanPage({ styles, theme }) {
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubcategories, setOpenSubcategories] = useState({});

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
    // Fermer toutes les sous-catégories quand on ferme une catégorie
    if (openCategory === categoryId) {
      setOpenSubcategories({});
    }
  };

  const toggleSubcategory = (categoryId, subcategoryId) => {
    const key = `${categoryId}-${subcategoryId}`;
    setOpenSubcategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div style={styles.pageContent}>
      <PageHeader
        eyebrow="Invocations"
        title="Invocations"
        description="Les invocations et prières du Coran et de la Sunna."
        styles={styles}
        theme={theme}
      />
      <div style={styles.stack}>
        {INVOCATIONS_DATA.map((category) => {
          const isCategoryOpen = openCategory === category.id;
          
          return (
            <Card key={category.id} styles={styles} theme={theme}>
              {/* Catégorie principale */}
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                style={{
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  margin: "-0.25rem",
                  transition: "background 0.2s ease",
                  ...(isCategoryOpen ? { background: theme.accentSoft } : {})
                }}
              >
                <span style={{ fontSize: "1.75rem", marginRight: "0.875rem" }}>{category.emoji}</span>
                <span style={{ flex: 1, fontSize: "1.125rem", fontWeight: "700", color: theme.text }}>{category.title}</span>
                <span style={{ 
                  color: theme.muted, 
                  fontSize: "0.875rem",
                  transform: isCategoryOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease"
                }}>▼</span>
              </button>

              {/* Sous-catégories */}
              {isCategoryOpen && category.subcategories && (
                <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: `1px solid ${theme.border}` }}>
                  {category.subcategories.map((subcategory) => {
                    const isSubcategoryOpen = openSubcategories[`${category.id}-${subcategory.id}`];
                    
                    return (
                      <div key={subcategory.id} style={{ marginBottom: "0.5rem" }}>
                        {/* Sous-catégorie */}
                        <button
                          type="button"
                          onClick={() => toggleSubcategory(category.id, subcategory.id)}
                          style={{
                            cursor: "pointer",
                            background: isSubcategoryOpen ? `${theme.border}` : "transparent",
                            border: "none",
                            width: "100%",
                            textAlign: "left",
                            padding: "0.625rem 0.75rem",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "8px",
                            margin: "0.25rem 0",
                            transition: "background 0.15s ease",
                            ...(isSubcategoryOpen ? {} : { background: `${theme.pageBg}` })
                          }}
                        >
                          <span style={{ 
                            flex: 1, 
                            fontSize: "0.925rem", 
                            fontWeight: "600", 
                            color: theme.text,
                            paddingLeft: "1.5rem"
                          }}>
                            {subcategory.title}
                          </span>
                          <span style={{ 
                            color: theme.muted, 
                            fontSize: "0.75rem",
                            transform: isSubcategoryOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease"
                          }}>▼</span>
                        </button>

                        {/* Invocations de la sous-catégorie */}
                        {isSubcategoryOpen && subcategory.items && (
                          <div style={{ 
                            marginTop: "0.5rem", 
                            paddingLeft: "1rem",
                            paddingRight: "0.5rem"
                          }}>
                            {subcategory.items.map((item, index) => (
                              <div 
                                key={index} 
                                style={{ 
                                  marginBottom: index < subcategory.items.length - 1 ? "1.25rem" : 0,
                                  paddingBottom: index < subcategory.items.length - 1 ? "1rem" : 0,
                                  borderBottom: index < subcategory.items.length - 1 ? `1px dashed ${theme.border}` : "none"
                                }}
                              >
                                <p style={{ 
                                  fontSize: "1.15rem", 
                                  marginBottom: "0.5rem", 
                                  color: theme.text, 
                                  fontFamily: "'Amiri', 'Traditional Arabic', serif", 
                                  textAlign: "right", 
                                  lineHeight: "1.7" 
                                }}>
                                  {item.arabic}
                                </p>
                                <p style={{ 
                                  fontSize: "0.8rem", 
                                  marginBottom: "0.375rem", 
                                  color: theme.accentStrong, 
                                  fontStyle: "italic" 
                                }}>
                                  {item.translit}
                                </p>
                                <p style={{ 
                                  fontSize: "0.875rem", 
                                  marginBottom: "0.375rem", 
                                  color: theme.muted, 
                                  lineHeight: "1.5" 
                                }}>
                                  {item.translation}
                                </p>
                                <p style={{ 
                                  fontSize: "0.7rem", 
                                  color: theme.muted, 
                                  opacity: 0.7,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.25rem"
                                }}>
                                  <span>📖</span> {item.source}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

