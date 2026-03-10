import { useState } from "react";
import { PageHeader } from "../PageHeader";
import { Card } from "../Card";

const INVOCATIONS_DATA = [
  {
    id: "priere",
    emoji: "🙏",
    title: "Prière",
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
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        translit: "Subhana Rabbiya al-'Azim",
        translation: "Gloire à mon Seigneur, le Très Grand.",
        source: "Bukhari 799"
      },
      {
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        translit: "Subhana Rabbiya al-A'la",
        translation: "Gloire à mon Seigneur, le Plus Haut.",
        source: "Bukhari 799"
      },
      {
        arabic: "رَبِّ اغْفِرْ لِي",
        translit: "Rabbi ghfir li",
        translation: "Seigneur, pardonne-moi.",
        source: "Bukhari 834"
      },
      {
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translit: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhab an-nar",
        translation: "Seigneur, donne-nous une belle part ici-bas et une belle part dans l'au-delà, et protège-nous du châtiment de l'Enfer.",
        source: "Coran 2:201"
      },
      {
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ",
        translit: "At-Tahiyyatu lillahi was-salawatu wat-tayyibatu. As-salamu 'alayka ayyuha an-Nabiyyu wa rahmatullahi wa barakatuhu.",
        translation: "Les salutations, les prières et les paroles pures sont pour Allah. Que la paix soit sur toi, Prophète, ainsi que la miséricorde d'Allah et Ses bénédictions.",
        source: "Bukhari 6255"
      },
      {
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translit: "La ilaha illa Allahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
        translation: "Il n'y a de divinité qu'Allah, l'Unique sans associé. À Lui la royauté, à Lui la louange, et Il est sur toute chose capable.",
        source: "Bukhari 6393"
      }
    ]
  },
  {
    id: "mosquee",
    emoji: "🕌",
    title: "Mosquée",
    items: [
      {
        arabic: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَمِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ شِمَالِي نُورًا، وَمِنْ أَمَامِي نُورًا، وَمِنْ خَلْفِي نُورًا، وَاجْعَلْ فِي نَفْسِي نُورًا",
        translit: "Allahumma aj'al fi qalbi nooran, wa fi lisani nooran, wa fi sam'i nooran, wa fi basari nooran",
        translation: "Ô Allah, place dans mon cœur une lumière, dans ma langue une lumière, dans mon ouïe une lumière et dans ma vue une lumière.",
        source: "Tirmidhi 3416"
      },
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
      },
      {
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّيْطَانِ الرَّجِيمِ",
        translit: "Allahumma inni a'udhu bika min ash-Shaytani ar-Rajim",
        translation: "Ô Allah, je cherche Ta protection contre le diable maudit.",
        source: "Bukhari 832"
      }
    ]
  },
  {
    id: "maison",
    emoji: "🏠",
    title: "Maison",
    items: [
      {
        arabic: "بِسْمِ اللَّهِ أَدْخُلُ، بِسْمِ اللَّهِ أَخْرُجُ، وَعَلَى اللَّهِ رَبِّي أَتَوَكَّلُ",
        translit: "Bismillah adkhulu, bismillah akhruju, wa 'ala Allahi rabbi tawakkaltu",
        translation: "Au nom d'Allah j'entre, au nom d'Allah je sors et en Allah, mon Seigneur, je place ma confiance.",
        source: "Tirmidhi 3416"
      },
      {
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْخُرُوجِ فِي الْعُورَةِ، وَالدُّخُولِ فِي الْهَرَبِ",
        translit: "Allahumma inni a'udhu bika min al-khuruji fi al-'urrah, wa ad-dukhuli fi al-harab",
        translation: "Ô Allah, je cherche Ta protection contre le fait de sortir nu et de fuir dans la peur.",
        source: "Abou Daoud 3896"
      },
      {
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَكَفَانَا وَآوَانَا",
        translit: "Al-hamdu lillahi alladhi at'amana wa saqana wa kafana wa awana",
        translation: "Louange à Allah qui nous a nourris, abreuvés, satisfaits et logés.",
        source: "Muslim 2731"
      },
      {
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَعُوذُ بِكَ أَنْ أَزْلُفَ إِلَيْكَ بِمَا قَدْ نَهَيْتَنِي عَنْهُ",
        translit: "Allahumma inni a'udhu bika an ushirka bika wa ana a'lamu, wa a'udhu bika an azlifa ilayka ma qad nahaytani 'anhu",
        translation: "Ô Allah, je cherche Ta protection contre le polythéisme que je connaisse, et je cherche Ta protection contre le rapprochement de Toi par ce dont Tu m'as interdit.",
        source: "Ahmed 1754"
      }
    ]
  },
  {
    id: "sommeil",
    emoji: "🌙",
    title: "Sommeil",
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
        arabic: "اللَّهُمَّ أَعِتْنِي فِي مَقَامِي، وَأَعِظْمْ لِي بُرْهَانِي",
        translit: "Allahumma a'tini fi maqami, wa a'zim li burhani",
        translation: "Ô Allah, protège-moi dans ma situation et agrée ma preuve.",
        source: "Tirmidhi 3398"
      }
    ]
  },
  {
    id: "matinetsoir",
    emoji: "🌅",
    title: "Matin et soir",
    items: [
      {
        arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
        translit: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilayka an-nushur",
        translation: "Ô Allah, c'est par Toi que nous commençons le matin, c'est par Toi que nous finissons la soirée, c'est par Toi que nous vivons, c'est par Toi que nous mourrons et c'est vers Toi que sera la résurrection.",
        source: "Tirmidhi 3391"
      },
      {
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الشَّرِّ مَا صَلَحَ بِهِ صَبَاحُنَا وَمَسَاؤُنَا",
        translit: "Allahumma inni a'udhu bika min ash-sharri ma salahu bihi sabahuna wa masa'una",
        translation: "Ô Allah, je cherche Ta protection contre le mal dont notre matinée et notre soirée ont été exemptes.",
        source: "Ahmed 2176"
      },
      {
        arabic: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ",
        translit: "Asbahna 'ala fitrati al-islam, wa 'ala kalimati al-ikhlas, wa 'ala dini nabiyyina Muhammadin",
        translation: "Nous avons commencé cette journée sur la nature pure de l'Islam, sur la parole de sincère adoration et sur la religion de notre Prophète Muhammad.",
        source: "Bukhari 6042"
      },
      {
        arabic: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ عِبَادِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ",
        translation: "Ô Allah, toute faveur qui m'est parvenue ou qui est parvenue à l'un de Tes serviteurs vient de Toi, l'Unique sans associé.",
        source: "Muslim 2732"
      }
    ]
  },
  {
    id: "voyage",
    emoji: "🚗",
    title: "Voyage",
    items: [
      {
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمَنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ",
        translit: "Allahumma inni a'udhu bika min watha's safari, wa ka'abati al-manzari, wa su'i al-manqalabi fi al-mali wa al-ahl",
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
      },
      {
        arabic: "اللَّهُمَّ اجْعَلْ لَنَا مِنْ سَفَرِنَا هَذَا أَجْرًا، وَمِنْ أَهْلِنَا بُرْهَانًا",
        translit: "Allahumma aj'al lana min safarina hadha ajran, wa min ahlina burhanan",
        translation: "Ô Allah, rends ce voyage profitable pour nous et notre famille une preuve.",
        source: "Ahmed 7832"
      }
    ]
  },
  {
    id: "protection",
    emoji: "🛡️",
    title: "Protection",
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
  },
  {
    id: "pardon",
    emoji: "🤲",
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
        translation: "Ô Allah, Tu es mon Seigneur, il n'y a de divinité que Toi. Tu m'as créé et je suis Ton serviteur. Je suis faithful à Ton alliance et Ta promesse autant que je le peux.",
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
];

export function ReadingPlanPage({ styles, theme }) {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
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
          const isOpen = openCategory === category.id;
          return (
            <Card key={category.id} styles={styles} theme={theme}>
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                style={{
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  margin: "-0.25rem",
                  ...(isOpen ? { background: theme.accentSoft } : {})
                }}
              >
                <span style={{ fontSize: "1.5rem", marginRight: "0.75rem" }}>{category.emoji}</span>
                <span style={{ flex: 1, fontSize: "1rem", fontWeight: "600", color: theme.text }}>{category.title}</span>
                <span style={{ color: theme.muted, fontSize: "0.875rem" }}>{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: `1px solid ${theme.border}` }}>
                  {category.items.map((item, index) => (
                    <div key={index} style={{ marginBottom: index < category.items.length - 1 ? "1.25rem" : 0 }}>
                      <p style={{ fontSize: "1.1rem", marginBottom: "0.375rem", color: theme.text, fontFamily: "'Amiri', 'Traditional Arabic', serif", textAlign: "right", lineHeight: "1.6" }}>{item.arabic}</p>
                      <p style={{ fontSize: "0.8rem", marginBottom: "0.375rem", color: theme.accentStrong, fontStyle: "italic" }}>{item.translit}</p>
                      <p style={{ fontSize: "0.85rem", marginBottom: "0.375rem", color: theme.muted, lineHeight: "1.5" }}>{item.translation}</p>
                      <p style={{ fontSize: "0.7rem", color: theme.muted, opacity: 0.7 }}>📖 {item.source}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

