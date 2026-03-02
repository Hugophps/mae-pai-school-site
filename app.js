const LINKS = {
  donate: 'https://www.mepasie.org/',
  volunteer: 'https://volontairemep.com/',
  mep: 'https://www.mepasie.org/'
};

const I18N = {
  fr: {
    common: {
      navHome: 'Home',
      navSchool: "L'ecole de Mae Pai",
      navAbout: 'A propos',
      navSave: "Sauver l'ecole",
      donate: 'Donner',
      ctaDonate: 'Je fais un don',
      ctaVolunteer: 'Je deviens volontaire',
      urgency: 'Urgent: lancement des travaux vise apres la saison des pluies 2026',
      footerTitle: 'Sauvons l ecole de Mae Pai',
      footerText: "Projet de collecte de fonds pour la renovation de l'ecole de Mae Pai et la protection de l'avenir des enfants karens.",
      footerContact: 'Nous ecrire: mep.pab@gmail.com',
      footerNavTitle: 'Navigation',
      footerActionTitle: 'Passer a l action',
      footerLegal: 'Mentions: certaines informations operationnelles (noms, montants exacts, contacts dedies) restent a confirmer avant publication officielle.',
      mepSite: 'Site MEP',
      volunteerSite: 'Volontariat MEP'
    },
    home: {
      title: "Sauvons l'ecole de Mae Pai",
      heroKicker: 'Collecte de fonds education',
      heroTitle: "Un projet concret pour sauver l'ecole de Mae Pai",
      heroText:
        "A Mae Pai et Tiloplo, deux villages montagneux tres isoles du nord-ouest de la Thailande, l'ecole est un point d'appui vital pour les enfants. Sans subvention publique, elle doit etre renovee rapidement pour continuer a proteger et former durablement les eleves.",
      quickLabel: 'Synthese du projet',
      quickTitle: 'Version concise des pages Ecole et A propos',
      card1Title: 'Contexte Karen en Thailande',
      card1Text:
        "Les Karens vivent souvent en marge du developpement rapide du pays. Les fragilites economiques et sociales touchent d'abord les enfants, et l'ecole demeure leur principal refuge.",
      card2Title: 'Village de Mae Pai',
      card2Text:
        "Mae Pai compte environ 300 habitants. Les familles vivent d'une agriculture de montagne exigeante, avec peu de temps disponible pour l'accompagnement scolaire des enfants.",
      card3Title: "Situation de l'ecole",
      card3Text:
        "L'ecole catholique, creee il y a environ 40 ans, fonctionne grace au diocese de Nakhon Sawan, aux MEP, a Enfants du Mekong et a une association locale de soutien.",
      card4Title: 'Evaluation des besoins',
      card4Text:
        "Renovation globale des batiments, remplacement des batteries des panneaux solaires, et investissements pedagogiques indispensables.",
      card5Title: 'Plan de renovation',
      card5Text:
        "Objectif: demarrage a la fin de la saison des pluies 2026, pour stopper la baisse des effectifs et redonner confiance aux familles.",
      card6Title: 'Comment aider',
      card6Text:
        "Volontariat, dons particuliers, campagnes en etablissements scolaires, et soutien de fondations ou d'entreprises.",
      stats1Value: '60',
      stats1Name: 'Enfants actuellement scolarises',
      stats2Value: '75-80',
      stats2Name: 'Effectif potentiel avec de bonnes conditions',
      stats3Value: '36 000 EUR',
      stats3Name: 'Ordre de grandeur du devis renovation (a confirmer)',
      lastTitle: "Chaque don accelere la renovation de l'ecole",
      lastText:
        "Notre objectif est simple: maintenir les enfants dans leur village, renforcer la qualite de l'enseignement et preparer l'avenir de Mae Pai."
    },
    school: {
      title: "L'ecole de Mae Pai",
      heroKicker: 'Page projet',
      heroTitle: "L'ecole de Mae Pai: sauver un pilier educatif local",
      heroText:
        "Element central du village, l'ecole de Mae Pai doit faire face a une degradation avancee de ses installations. Le projet vise une renovation globale et une securisation energetique rapide.",
      s1Label: 'Sauvons l ecole',
      s1Title: "Pourquoi la situation est urgente",
      s1Text1:
        "L'ecole de Mae Pai est une ecole catholique privee non conventionnee. Gratuite pour les familles, elle ne beneficie d'aucune subvention du gouvernement thailandais.",
      s1Text2:
        "Si les couts de fonctionnement sont difficilement couverts, les investissements necessaires a l'entretien et au renouvellement des equipements ne sont pas assures. Cette fragilite a des consequences directes sur les infrastructures et la qualite pedagogique.",
      s1Text3:
        "Avec des conditions materielles renforcees, l'effectif pourrait revenir de 60 a 75-80 enfants. L'enjeu est aussi d'eviter des separations familiales precoces quand certains eleves doivent partir en pensionnat ailleurs des le CM1/CM2.",
      s2Label: 'Historique et partenaires',
      s2Title: 'Une ecole nee de la mission en terre karen',
      s2Text1:
        "Sous l'impulsion du pere Guillou, envoye en Thailande par les Missions Etrangeres de Paris, plusieurs ecoles catholiques ont ete creees dans les villages karens de montagne non pourvus.",
      s2Text2:
        "L'ecole de Mae Pai a ete fondee il y a environ 40 ans. Les enseignants actuels en sont eux-memes issus, preuve de son impact local durable.",
      s2Text3:
        "Le projet est soutenu par le diocese de Nakhon Sawan, les Missions Etrangeres de Paris (MEP), Enfants du Mekong et une association locale de soutien qui ne peut toutefois couvrir l'ensemble des besoins.",
      s3Label: 'Evaluation des besoins',
      s3Title: 'Travaux prioritaires a financer',
      s3Card1Title: 'Renovation globale des batiments',
      s3Card1Text:
        "Faute de budget d'entretien regulier, portes, persiennes, peintures et plusieurs elements structurels doivent etre repris. Un devis local evalue cette phase autour de 36 000 EUR (equivalent THB a confirmer).",
      s3Card2Title: 'Alimentation electrique de l ecole',
      s3Card2Text:
        "Les panneaux solaires installes precedemment sont encore operationnels, mais les batteries ne tiennent plus la charge. Leur remplacement est urgent pour assurer les besoins journaliers et les activites de soiree.",
      s3Card3Title: 'Projection hydroelectrique',
      s3Card3Text:
        "Un projet de mini-unite hydroelectrique sur la riviere voisine a ete prepare. Il offrirait une electricite plus stable 24h/24 des que les financements seront mobilises.",
      s4Label: 'Plan de renovation et perspectives',
      s4Title: 'Feuille de route 2026-2027',
      s4Text1:
        "Le demarrage des travaux est vise a la fin de la saison des pluies 2026. La priorite immediate est de stopper l'hemorragie des classes CM1/CM2 et de conserver les eleves au village.",
      s4Text2:
        "La remise a niveau energetique permettra aussi d'envisager des cours du soir diplomants pour les adultes du village a partir de la rentree 2026-2027.",
      s4Text3:
        "Au-dela des infrastructures, la renovation aura un effet remobilisateur majeur pour l'equipe enseignante, qui pourra consacrer son energie a 100% a l'apprentissage des enfants.",
      lastTitle: 'Financer les priorites de terrain maintenant',
      lastText: 'Accedez a la page Sauver l ecole pour choisir votre mode d engagement et contribuer immediatement.'
    },
    about: {
      title: 'A propos du contexte',
      heroKicker: 'Comprendre',
      heroTitle: 'Contexte Karen, villages isoles et enjeux educatifs',
      heroText:
        "Cette page detaille le contexte humain et territorial du projet. Comprendre cette realite permet de mesurer pourquoi l'ecole de Mae Pai est essentielle.",
      s1Label: 'Contexte Karen en Thailande',
      s1Title: 'Une communaute resiliente en zone montagneuse',
      s1Text1:
        "Les Karens vivent principalement dans les montagnes de part et d'autre de la frontiere birmano-thailandaise. En Thailande, de nombreuses familles karens vivent depuis des millenaires entre Mae Sot et Chiang Mai, en marge des grands axes de developpement.",
      s1Text2:
        "Les economies locales restent fragiles et les services de base souvent deficients. Le passage progressif a une agriculture concentree sur le mais a provoque du surendettement et des situations tres precaires.",
      s1Text3:
        "Cette vulnerabilite, combinee aux effets de la mondialisation, fragilise les structures familiales et expose les jeunes a des risques d'addictions. Dans ce contexte, proteger les ecoles, c'est proteger les enfants et preserver une culture millenaire.",
      s2Label: 'Village de Mae Pai et Tiloplo',
      s2Title: 'Deux villages tres enclaves',
      s2Text1:
        "Situe a environ 2 heures de Mae Sot, Mae Pai compte une soixantaine de maisons pour environ 300 habitants. Le village est niche dans une vallee verdoyante et constitue majoritairement de maisons en bois sur pilotis.",
      s2Text2:
        "A environ 500 metres, Tiloplo est un village plus petit, egalement tres paisible. Les deux communautes vivent dans un environnement superbe mais isole, sans couverture internet ou telephonique stable.",
      s2Text3:
        "En saison des pluies, l'isolement s'accentue fortement. Les familles dependent presque exclusivement de l'agriculture de montagne (mais et riz), tres exigeante en temps et en energie.",
      s3Label: 'Situation de l ecole',
      s3Title: "Pourquoi l'ecole est un pilier collectif",
      s3Text1:
        "Parce que les parents sont mobilises par des travaux agricoles difficiles, l'ecole devient l'espace central de protection, de stabilite et de projection d'avenir pour les enfants.",
      s3Text2:
        "La coexistence religieuse dans le village est paisible, et l'ecole joue aussi un role de cohesion sociale. Son maintien en bon etat est un enjeu educatif mais aussi communautaire.",
      s3Text3:
        "Renover l'ecole de Mae Pai, c'est proteger les enfants aujourd'hui et renforcer durablement la resilience du village face aux fragilites economiques et sociales.",
      lastTitle: 'Comprendre le contexte, puis passer a l action',
      lastText: 'La page Sauver l ecole vous permet de contribuer immediatement selon votre capacite d engagement.'
    },
    save: {
      title: "Sauver l'ecole de Mae Pai",
      heroKicker: 'Agir maintenant',
      heroTitle: "Sauver l'ecole de Mae Pai",
      heroText:
        "Cette page rassemble les leviers concrets d'engagement pour particuliers, etablissements et entreprises, avec un objectif unique: financer rapidement les besoins prioritaires de l'ecole.",
      vLabel: 'Volontariat',
      vTitle: 'Volontariat de terrain a Mae Pai',
      vText1:
        "Le village de Mae Pai offre une opportunite exceptionnelle de volontariat: hospitalite des habitants, immersion culturelle forte et lien direct avec les enfants.",
      vText2:
        "Une famille francaise a ainsi soutenu le projet sur place, en assurant des cours d'anglais et des activites periscolaires au sein de l'ecole.",
      vText3:
        "Repas a la cantine le midi, dners chez les villageois le soir: l'experience est autant humaine qu'educative.",
      fLabel: 'Soutien financier',
      fTitle: 'Trois modes de soutien financier',
      pTitle: 'Soutien individuel / particuliers',
      pText:
        "Je souhaite soutenir financierement l'ecole et le village de Mae Pai via les MEP. En France, la donation peut etre defiscalisee a hauteur de 66% selon votre situation.",
      eTitle: 'Soutien etablissements scolaires',
      eText:
        "Je peux organiser une campagne de sensibilisation: operation bol de riz, concours de dessins solidaires mon ecole de reve, ou relais sportif. Les recettes sont reversees aux MEP avec la mention operation ecole Mae Pai.",
      cTitle: "Soutien fondations et entreprises",
      cText:
        "Je souhaite engager mon entreprise sur tout ou partie du projet. Un contact dedie avec l'equipe MEP permet de cadrer le niveau d'engagement et les modalites.",
      contactLabel: 'Contactez-nous',
      contactTitle: 'Prenons contact pour organiser votre soutien',
      contactText:
        "Que vous soyez particulier, ecole, association ou entreprise, nous vous accompagnons pour orienter votre contribution vers les besoins les plus urgents.",
      lastTitle: 'Votre engagement a un impact direct sur les enfants',
      lastText: "En contribuant maintenant, vous aidez l'ecole a retrouver des conditions dignes et vous renforcez l'avenir educatif de Mae Pai."
    }
  },
  en: {
    common: {
      navHome: 'Home',
      navSchool: 'Mae Pai School',
      navAbout: 'About',
      navSave: 'Save the School',
      donate: 'Donate',
      ctaDonate: 'Donate now',
      ctaVolunteer: 'Become a volunteer',
      urgency: 'Urgent: renovation launch targeted right after the 2026 rainy season',
      footerTitle: 'Save Mae Pai School',
      footerText: 'Fundraising project supporting school renovation and long-term protection of Karen children s educational future.',
      footerContact: 'Write to us: mep.pab@gmail.com',
      footerNavTitle: 'Navigation',
      footerActionTitle: 'Take action',
      footerLegal: 'Notes: some operational details (names, exact budgets, dedicated contacts) still need confirmation before official publication.',
      mepSite: 'MEP website',
      volunteerSite: 'MEP volunteering'
    },
    home: {
      title: 'Save Mae Pai School',
      heroKicker: 'Education fundraising',
      heroTitle: 'A concrete project to save Mae Pai school',
      heroText:
        'In Mae Pai and Tiloplo, two highly isolated mountain villages in northwestern Thailand, school is a vital support point for children. Without public subsidy, Mae Pai school needs rapid renovation to continue protecting and educating students.',
      quickLabel: 'Project overview',
      quickTitle: 'Concise version of School and About pages',
      card1Title: 'Karen context in Thailand',
      card1Text:
        'Karen communities often remain outside major development routes. Economic and social fragilities affect children first, and school remains their main safe place.',
      card2Title: 'Mae Pai village',
      card2Text:
        'Mae Pai has around 300 residents. Families depend on demanding mountain farming and have limited time for educational follow-up.',
      card3Title: 'School situation',
      card3Text:
        'The Catholic school, founded about 40 years ago, operates thanks to Nakhon Sawan Diocese, MEP, Enfants du Mekong, and a local support association.',
      card4Title: 'Needs assessment',
      card4Text: 'Full building renovation, solar battery replacement, and key educational investments are all required.',
      card5Title: 'Renovation roadmap',
      card5Text: 'Target start: right after the 2026 rainy season, to stop enrollment decline and rebuild trust.',
      card6Title: 'How to help',
      card6Text: 'Volunteering, individual donations, school campaigns, and corporate or foundation support.',
      stats1Value: '60',
      stats1Name: 'Children currently enrolled',
      stats2Value: '75-80',
      stats2Name: 'Potential enrollment with better conditions',
      stats3Value: 'EUR 36,000',
      stats3Name: 'Estimated renovation quote (to be confirmed)',
      lastTitle: 'Every donation speeds up school renovation',
      lastText: 'Our goal is clear: keep children in their village, improve learning quality, and strengthen Mae Pai s future.'
    },
    school: {
      title: 'Mae Pai School',
      heroKicker: 'Project page',
      heroTitle: 'Mae Pai school: protecting a core educational pillar',
      heroText:
        'A central element of village life, Mae Pai school now faces advanced infrastructure deterioration. The project focuses on full renovation and urgent energy stabilization.',
      s1Label: 'Save the school',
      s1Title: 'Why the situation is urgent',
      s1Text1:
        'Mae Pai school is a private Catholic school with no public subsidy. It is free for families and receives no funding from the Thai government.',
      s1Text2:
        'Operating costs are barely covered, while maintenance and equipment renewal investments are not secured. This directly impacts facilities and teaching quality.',
      s1Text3:
        'With improved material conditions, enrollment could increase from 60 to 75-80 children. Another major issue is avoiding early family separation when students must leave for boarding elsewhere from CM1/CM2 level.',
      s2Label: 'History and partners',
      s2Title: 'A school born from mission work in Karen areas',
      s2Text1:
        'Under Father Guillou s impulse, sent to Thailand by the Paris Foreign Missions Society, several Catholic schools were created in underserved Karen mountain villages.',
      s2Text2:
        'Mae Pai school was founded around 40 years ago. Many current teachers are former students, showing its long-term local impact.',
      s2Text3:
        'The project is supported by Nakhon Sawan Diocese, MEP, Enfants du Mekong, and a local support association that cannot cover all needs alone.',
      s3Label: 'Needs assessment',
      s3Title: 'Priority works to fund',
      s3Card1Title: 'Full building renovation',
      s3Card1Text:
        'Because of limited maintenance budgets, doors, shutters, paint, and several structural elements require urgent upgrades. A local quote estimates around EUR 36,000 (THB equivalent to be confirmed).',
      s3Card2Title: 'School power supply',
      s3Card2Text:
        'Solar panels remain functional, but batteries no longer hold charge. Replacement is urgent for daily school operations and evening activities.',
      s3Card3Title: 'Hydropower projection',
      s3Card3Text:
        'A micro-hydropower project on the nearby river has been prepared. It would deliver more stable 24/7 power once funding is secured.',
      s4Label: 'Renovation plan and outlook',
      s4Title: '2026-2027 execution roadmap',
      s4Text1:
        'Renovation start is targeted for the end of the 2026 rainy season. Immediate priority is to stop the loss of upper primary students and keep them in the village.',
      s4Text2:
        'Energy upgrades will also support evening diploma-oriented classes for adults from the 2026-2027 school year.',
      s4Text3:
        'Beyond infrastructure, renovation will strongly remobilize teachers, letting them focus fully on education rather than facility constraints.',
      lastTitle: 'Fund field priorities now',
      lastText: 'Go to Save the School to choose your engagement path and contribute immediately.'
    },
    about: {
      title: 'About the context',
      heroKicker: 'Understand',
      heroTitle: 'Karen context, isolated villages, and educational stakes',
      heroText: 'This page details the human and territorial context behind the project and explains why Mae Pai school is essential.',
      s1Label: 'Karen context in Thailand',
      s1Title: 'A resilient mountain community',
      s1Text1:
        'Karen communities mainly live in mountain areas across the Myanmar-Thai border. In Thailand, many Karen families have lived for centuries between Mae Sot and Chiang Mai, often outside major development routes.',
      s1Text2:
        'Local economies remain fragile and access to basic services is often weak. The shift toward maize-focused farming has increased debt and social vulnerability.',
      s1Text3:
        'This vulnerability, combined with globalization pressures, weakens family structures and exposes youth to addictions. In this context, protecting schools means protecting children and preserving a millennial culture.',
      s2Label: 'Mae Pai and Tiloplo villages',
      s2Title: 'Two highly isolated villages',
      s2Text1:
        'Located about two hours from Mae Sot, Mae Pai has around sixty houses and roughly 300 residents. The village sits in a green valley, with mostly wooden stilt houses.',
      s2Text2:
        'Around 500 meters away, Tiloplo is smaller and very peaceful. Both communities live in a beautiful but isolated environment with unstable internet and phone coverage.',
      s2Text3:
        'During the rainy season, isolation grows stronger. Families rely almost entirely on demanding mountain agriculture (mainly maize and rice).',
      s3Label: 'School situation',
      s3Title: 'Why school is a collective pillar',
      s3Text1:
        'Because parents are absorbed by physically demanding farming work, school becomes the key space of stability, protection, and future planning for children.',
      s3Text2:
        'Religious coexistence is peaceful in the village, and school also acts as a social cohesion anchor. Keeping it in good condition is both an educational and community issue.',
      s3Text3:
        'Renovating Mae Pai school means protecting children today and strengthening long-term village resilience against economic and social fragility.',
      lastTitle: 'Understand the context, then take action',
      lastText: 'The Save the School page lets you contribute immediately based on your capacity.'
    },
    save: {
      title: 'Save Mae Pai School',
      heroKicker: 'Act now',
      heroTitle: 'Save Mae Pai School',
      heroText:
        'This page gathers concrete engagement paths for individuals, schools, and companies, with one goal: quickly fund the school s priority needs.',
      vLabel: 'Volunteering',
      vTitle: 'Field volunteering in Mae Pai',
      vText1:
        'Mae Pai offers an exceptional volunteering opportunity: strong local hospitality, deep cultural immersion, and direct impact with children.',
      vText2:
        'A French family recently supported the project on-site by teaching English and running after-school activities.',
      vText3:
        'Lunch at the school canteen and evening meals with villagers make this experience both educational and deeply human.',
      fLabel: 'Financial support',
      fTitle: 'Three ways to provide financial support',
      pTitle: 'Individual donors',
      pText: 'I want to support Mae Pai school and village financially through MEP. In France, donations may be tax-deductible up to 66% depending on your profile.',
      eTitle: 'Schools and institutions',
      eText:
        'I can organize awareness campaigns: rice-bowl operation, solidarity drawing contest my dream school, or sports relay events. Funds are transferred to MEP with Mae Pai school operation mention.',
      cTitle: 'Corporate and foundation support',
      cText:
        'I want my company to support all or part of the project. A direct contact with the MEP team helps define scope and implementation details.',
      contactLabel: 'Contact us',
      contactTitle: 'Let us organize your contribution',
      contactText: 'Whether you are an individual, school, association, or company, we help direct your support toward the most urgent priorities.',
      lastTitle: 'Your commitment has direct impact on children',
      lastText: 'By contributing now, you help restore dignified school conditions and strengthen Mae Pai s educational future.'
    }
  }
};

function get(obj, path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function setActiveNav() {
  const current = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === current);
  });
}

function setLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = get(dict, key);
    if (typeof value === 'string') node.textContent = value;
  });

  document.querySelectorAll('[data-link="donate"]').forEach((el) => {
    el.setAttribute('href', LINKS.donate);
  });

  document.querySelectorAll('[data-link="volunteer"]').forEach((el) => {
    el.setAttribute('href', LINKS.volunteer);
  });

  document.querySelectorAll('[data-link="mep"]').forEach((el) => {
    el.setAttribute('href', LINKS.mep);
  });

  const titleKey = document.body.dataset.titleKey;
  const title = get(dict, titleKey);
  if (typeof title === 'string') {
    document.title = `${title} | Mae Pai School Fund`;
  }

  document.getElementById('lang-fr')?.classList.toggle('active', lang === 'fr');
  document.getElementById('lang-en')?.classList.toggle('active', lang === 'en');
  localStorage.setItem('maepai-lang', lang);
}

function initLang() {
  document.getElementById('lang-fr')?.addEventListener('click', () => setLanguage('fr'));
  document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
  const saved = localStorage.getItem('maepai-lang');
  setLanguage(saved === 'en' ? 'en' : 'fr');
}

setActiveNav();
initLang();
