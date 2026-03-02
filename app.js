const LINKS = {
  donate: 'https://volontairemep.com/',
  volunteer: 'https://volontairemep.com/',
  mep: 'https://www.mepasie.org/'
};

const I18N = {
  fr: {
    common: {
      navHome: 'Accueil',
      navSchool: "L'école de Mae Pai",
      navAbout: 'À propos',
      navSave: "Sauver l'école",
      donate: 'Donner',
      ctaDonate: 'Je fais un don',
      ctaVolunteer: 'Je deviens volontaire',
      urgency: 'Urgent : lancement des travaux visé après la saison des pluies 2026',
      footerTitle: "Sauvons l'école de Mae Pai",
      footerText: "Projet de collecte de fonds pour la rénovation de l'école de Mae Pai et la protection de l'avenir des enfants karens.",
      footerContact: 'Nous écrire : mep.pab@gmail.com',
      footerNavTitle: 'Navigation',
      footerActionTitle: "Passer à l'action",
      footerLegal: 'Mentions : certaines informations opérationnelles restent à confirmer avant publication officielle.',
      legalPage: 'Mentions légales',
      mepSite: 'Site MEP',
      volunteerSite: 'Volontariat MEP'
    },
    home: {
      title: "Sauvons l'école de Mae Pai",
      heroKicker: 'Collecte de fonds éducation',
      heroTitle: "Un projet concret pour sauver l'école de Mae Pai",
      heroText:
        "À Mae Pai et Tiloplo, deux villages montagneux isolés du nord-ouest de la Thaïlande, l'école est un point d'appui vital pour les enfants. Sans subvention publique, elle doit être rénovée rapidement pour continuer à protéger et former durablement les élèves.",
      quickLabel: 'Synthèse du projet',
      quickTitle: "Version concise des pages École et À propos",
      card1Title: 'Contexte Karen en Thaïlande',
      card1Text:
        "Les Karens vivent souvent en marge du développement rapide du pays. Les fragilités économiques et sociales touchent d'abord les enfants, et l'école demeure leur principal refuge.",
      card2Title: 'Village de Mae Pai',
      card2Text:
        "Mae Pai compte environ 300 habitants. Les familles vivent d'une agriculture de montagne exigeante, avec peu de temps disponible pour l'accompagnement scolaire des enfants.",
      card3Title: "Situation de l'école",
      card3Text:
        "L'école catholique, créée il y a environ 40 ans, fonctionne grâce au diocèse de Nakhon Sawan, aux MEP, à Enfants du Mékong et à une association locale de soutien.",
      card4Title: 'Évaluation des besoins',
      card4Text:
        'Rénovation globale des bâtiments, remplacement des batteries des panneaux solaires et investissements pédagogiques indispensables.',
      card5Title: 'Plan de rénovation',
      card5Text:
        'Objectif : démarrage à la fin de la saison des pluies 2026, pour stopper la baisse des effectifs et redonner confiance aux familles.',
      card6Title: 'Comment aider',
      card6Text:
        "Volontariat, dons particuliers, campagnes en établissements scolaires et soutien de fondations ou d'entreprises.",
      stats1Value: '60',
      stats1Name: 'Enfants actuellement scolarisés',
      stats2Value: '75-80',
      stats2Name: 'Effectif potentiel avec de bonnes conditions',
      stats3Value: '36 000 EUR',
      stats3Name: 'Ordre de grandeur du devis rénovation (à confirmer)',
      lastTitle: "Chaque don accélère la rénovation de l'école",
      lastText:
        "Notre objectif est simple : maintenir les enfants dans leur village, renforcer la qualité de l'enseignement et préparer l'avenir de Mae Pai."
    },
    school: {
      title: "L'école de Mae Pai",
      heroKicker: 'Page projet',
      heroTitle: "L'école de Mae Pai : sauver un pilier éducatif local",
      heroText:
        "Élément central du village, l'école de Mae Pai doit faire face à une dégradation avancée de ses installations. Le projet vise une rénovation globale et une sécurisation énergétique rapide.",
      s1Label: "Sauvons l'école",
      s1Title: 'Pourquoi la situation est urgente',
      s1Text1:
        "L'école de Mae Pai est une école catholique privée non conventionnée. Gratuite pour les familles, elle ne bénéficie d'aucune subvention du gouvernement thaïlandais.",
      s1Text2:
        "Si les coûts de fonctionnement sont difficilement couverts, les investissements nécessaires à l'entretien et au renouvellement des équipements ne sont pas assurés.",
      s1Text3:
        "Avec de meilleures conditions matérielles, l'effectif pourrait revenir de 60 à 75-80 enfants. L'enjeu est aussi d'éviter des séparations familiales précoces.",
      s1Text4:
        "Aujourd'hui, certains parents se voient contraints d'envoyer leurs enfants dans d'autres villages dès les grandes classes afin de préserver leurs chances de poursuivre au collège. Cette situation fragilise le lien familial et accentue les inégalités.",
      s1Text5:
        "Sauver l'école de Mae Pai, c'est donc agir à la fois sur les conditions matérielles, la continuité pédagogique et la stabilité sociale du village.",
      s2Label: 'Historique et partenaires',
      s2Title: 'Une école née de la mission en terre karen',
      s2Text1:
        "Sous l'impulsion du père Guillou, envoyé en Thaïlande par les Missions Étrangères de Paris, plusieurs écoles catholiques ont été créées dans les villages karens de montagne.",
      s2Text2:
        "L'école de Mae Pai a été fondée il y a environ 40 ans. Les enseignants actuels en sont eux-mêmes issus, preuve de son impact local durable.",
      s2Text3:
        "Le projet est soutenu par le diocèse de Nakhon Sawan, les MEP, Enfants du Mékong et une association locale qui ne peut toutefois couvrir l'ensemble des besoins.",
      s3Label: 'Évaluation des besoins',
      s3Title: 'Travaux prioritaires à financer',
      s3Card1Title: 'Rénovation globale des bâtiments',
      s3Card1Text:
        "Portes, persiennes, peintures et éléments structurels doivent être repris. Un devis local situe cette phase autour de 36 000 EUR (équivalent THB à confirmer).",
      s3Card2Title: "Alimentation électrique de l'école",
      s3Card2Text:
        "Les panneaux solaires restent opérationnels, mais les batteries ne tiennent plus la charge. Leur remplacement est urgent.",
      s3Card3Title: 'Projection hydroélectrique',
      s3Card3Text:
        'Un projet de mini-unité hydroélectrique sur la rivière voisine est envisagé pour assurer une électricité plus stable 24h/24.',
      s4Label: 'Plan de rénovation et perspectives',
      s4Title: 'Feuille de route 2026-2027',
      s4Text1:
        "Le démarrage des travaux est visé à la fin de la saison des pluies 2026. La priorité est de stopper l'hémorragie des classes CM1/CM2.",
      s4Text2:
        "La remise à niveau énergétique permettra aussi d'envisager des cours du soir diplômants pour les adultes du village.",
      s4Text3:
        "La rénovation aura aussi un effet remobilisateur majeur pour l'équipe enseignante.",
      lastTitle: 'Financer les priorités de terrain maintenant',
      lastText: "Accédez à la page Sauver l'école pour choisir votre mode d'engagement."
    },
    about: {
      title: 'À propos du contexte',
      heroKicker: 'Comprendre',
      heroTitle: 'Contexte Karen, villages isolés et enjeux éducatifs',
      heroText:
        "Cette page détaille le contexte humain et territorial du projet. Comprendre cette réalité permet de mesurer pourquoi l'école de Mae Pai est essentielle.",
      s1Label: 'Contexte Karen en Thaïlande',
      s1Title: 'Une communauté résiliente en zone montagneuse',
      s1Text1:
        "Les Karens vivent principalement dans les montagnes de part et d'autre de la frontière birmano-thaïlandaise.",
      s1Text2:
        "Les économies locales restent fragiles et les services de base souvent déficients. Le surendettement lié à la monoculture fragilise les familles.",
      s1Text3:
        "Dans ce contexte, protéger les écoles, c'est protéger les enfants et préserver une culture millénaire.",
      s2Label: 'Village de Mae Pai et Tiloplo',
      s2Title: 'Deux villages très enclavés',
      s2Text1:
        'Situé à environ 2 heures de Mae Sot, Mae Pai compte une soixantaine de maisons pour environ 300 habitants.',
      s2Text2:
        'Tiloplo, à 500 mètres, est plus petit mais tout aussi isolé. Les deux villages vivent dans un environnement naturel superbe mais peu connecté.',
      s2Text3:
        "En saison des pluies, l'isolement s'accentue fortement. Les familles dépendent presque exclusivement de l'agriculture de montagne.",
      s3Label: "Situation de l'école",
      s3Title: "Pourquoi l'école est un pilier collectif",
      s3Text1:
        "L'école devient l'espace central de protection, de stabilité et de projection d'avenir pour les enfants.",
      s3Text2:
        "La coexistence religieuse est paisible dans le village, et l'école joue aussi un rôle de cohésion sociale.",
      s3Text3:
        "Rénover l'école de Mae Pai, c'est protéger les enfants aujourd'hui et renforcer durablement la résilience du village.",
      lastTitle: 'Comprendre le contexte, puis passer à l’action',
      lastText: "La page Sauver l'école vous permet de contribuer immédiatement selon votre capacité d'engagement."
    },
    save: {
      title: "Sauver l'école de Mae Pai",
      heroKicker: 'Agir maintenant',
      heroTitle: "Sauver l'école de Mae Pai",
      heroText:
        "Cette page rassemble les leviers concrets d'engagement pour particuliers, établissements et entreprises, avec un objectif unique : financer rapidement les besoins prioritaires de l'école.",
      vLabel: 'Volontariat',
      vTitle: 'Volontariat de terrain à Mae Pai',
      vText1:
        "Le village de Mae Pai offre une opportunité exceptionnelle de volontariat : hospitalité des habitants, immersion culturelle forte et lien direct avec les enfants.",
      vText2:
        "Une famille française a ainsi soutenu le projet sur place, en assurant des cours d'anglais et des activités périscolaires.",
      vText3:
        "Repas à la cantine le midi, dîners chez les villageois le soir : l'expérience est autant humaine qu'éducative.",
      fLabel: 'Soutien financier',
      fTitle: 'Trois modes de soutien financier',
      pTitle: 'Soutien individuel / particuliers',
      pText:
        "Je souhaite soutenir financièrement l'école et le village de Mae Pai via les MEP. En France, la donation peut être défiscalisée à hauteur de 66% selon votre situation.",
      eTitle: 'Soutien établissements scolaires',
      eText:
        "Je peux organiser une campagne de sensibilisation : opération bol de riz, concours de dessins solidaires « mon école de rêve », ou relais sportif.",
      cTitle: 'Soutien fondations et entreprises',
      cText:
        "Je souhaite engager mon entreprise sur tout ou partie du projet. Un contact dédié avec l'équipe MEP permet de cadrer l'accompagnement.",
      contactLabel: 'Contactez-nous',
      contactTitle: 'Prenons contact pour organiser votre soutien',
      contactText:
        'Que vous soyez particulier, école, association ou entreprise, nous vous accompagnons pour orienter votre contribution vers les besoins les plus urgents.',
      lastTitle: 'Votre engagement a un impact direct sur les enfants',
      lastText:
        "En contribuant maintenant, vous aidez l'école à retrouver des conditions dignes et vous renforcez l'avenir éducatif de Mae Pai."
    },
    legal: {
      title: 'Mentions légales',
      heroKicker: 'Informations légales',
      heroTitle: 'Mentions légales du site',
      heroText: "Informations publiées conformément aux obligations générales d'information pour un site français.",
      edLabel: 'Éditeur du site',
      edText: "Nom du projet : Sauvons l'école de Mae Pai. Responsable éditorial : à confirmer. Contact : mep.pab@gmail.com.",
      hostLabel: 'Hébergement',
      hostText: 'Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Site : vercel.com.',
      dataLabel: 'Données personnelles',
      dataText: "Aucun formulaire de collecte n'est actif à ce stade. Pour toute demande relative à vos données, contactez : mep.pab@gmail.com.",
      cookiesLabel: 'Cookies',
      cookiesText:
        "Ce site n'utilise pas de cookies de suivi publicitaire à ce stade. Des cookies techniques peuvent être déposés par les services tiers utilisés.",
      ipLabel: 'Propriété intellectuelle',
      ipText:
        "Les textes, visuels et ressources de ce site sont protégés. Toute reproduction totale ou partielle nécessite l'autorisation préalable des ayants droit."
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
      footerText: "Fundraising project supporting school renovation and long-term protection of Karen children's educational future.",
      footerContact: 'Write to us: mep.pab@gmail.com',
      footerNavTitle: 'Navigation',
      footerActionTitle: 'Take action',
      footerLegal: 'Notes: some operational details remain to be confirmed before official publication.',
      legalPage: 'Legal notice',
      mepSite: 'MEP website',
      volunteerSite: 'MEP volunteering'
    },
    home: {
      title: 'Save Mae Pai School',
      heroKicker: 'Education fundraising',
      heroTitle: 'A concrete project to save Mae Pai school',
      heroText:
        'In Mae Pai and Tiloplo, two isolated mountain villages in northwestern Thailand, school is a vital support point for children. Without public subsidy, Mae Pai school needs rapid renovation.',
      quickLabel: 'Project overview',
      quickTitle: 'Concise version of School and About pages',
      card1Title: 'Karen context in Thailand',
      card1Text: 'Karen communities often remain outside major development routes. School remains a critical safe place for children.',
      card2Title: 'Mae Pai village',
      card2Text: 'Mae Pai has around 300 residents and depends on demanding mountain farming.',
      card3Title: 'School situation',
      card3Text: 'The school is supported by Nakhon Sawan Diocese, MEP, Enfants du Mekong, and a local association.',
      card4Title: 'Needs assessment',
      card4Text: 'Building renovation, solar battery replacement, and educational equipment investment are required.',
      card5Title: 'Renovation roadmap',
      card5Text: 'Target start: right after the 2026 rainy season.',
      card6Title: 'How to help',
      card6Text: 'Volunteering, individual donations, school campaigns, and corporate support.',
      stats1Value: '60',
      stats1Name: 'Children currently enrolled',
      stats2Value: '75-80',
      stats2Name: 'Potential enrollment with better conditions',
      stats3Value: 'EUR 36,000',
      stats3Name: 'Estimated renovation quote (to be confirmed)',
      lastTitle: 'Every donation speeds up school renovation',
      lastText: 'Our goal is clear: keep children in their village, improve learning quality, and strengthen Mae Pai future.'
    },
    school: {
      title: 'Mae Pai School',
      heroKicker: 'Project page',
      heroTitle: 'Mae Pai school: protecting a core educational pillar',
      heroText: 'A central village institution now facing advanced infrastructure deterioration and urgent funding needs.',
      s1Label: 'Save the school',
      s1Title: 'Why the situation is urgent',
      s1Text1: 'Mae Pai school is a private Catholic school with no public subsidy.',
      s1Text2: 'Operating costs are barely covered while infrastructure investment is not secured.',
      s1Text3: 'Improved conditions could raise enrollment from 60 to 75-80 children.',
      s1Text4:
        'Some families are already forced to send children to other villages for upper primary levels, which weakens family stability and increases inequality.',
      s1Text5:
        'Saving Mae Pai school means improving facilities, ensuring educational continuity, and strengthening social stability in the village.',
      s2Label: 'History and partners',
      s2Title: 'A school born from mission work in Karen areas',
      s2Text1: 'Several Catholic schools were created in underserved Karen mountain villages under MEP mission work.',
      s2Text2: 'Mae Pai school was founded about 40 years ago and remains central to local education.',
      s2Text3: 'Support includes Nakhon Sawan Diocese, MEP, Enfants du Mekong, and a local association.',
      s3Label: 'Needs assessment',
      s3Title: 'Priority works to fund',
      s3Card1Title: 'Full building renovation',
      s3Card1Text: 'Doors, shutters, paint, and structural repairs are needed.',
      s3Card2Title: 'School power supply',
      s3Card2Text: 'Solar panels still work, but batteries need urgent replacement.',
      s3Card3Title: 'Hydropower projection',
      s3Card3Text: 'A micro-hydropower option is being considered for stable 24/7 power.',
      s4Label: 'Renovation plan and outlook',
      s4Title: '2026-2027 roadmap',
      s4Text1: 'Targeted work start is after the 2026 rainy season.',
      s4Text2: 'Energy upgrades support evening classes and local training opportunities.',
      s4Text3: 'Renovation also helps teachers focus fully on education.',
      lastTitle: 'Fund field priorities now',
      lastText: 'Go to Save the School to choose your contribution path.'
    },
    about: {
      title: 'About the context',
      heroKicker: 'Understand',
      heroTitle: 'Karen context, isolated villages, and educational stakes',
      heroText: 'This page details the human and territorial context behind the project.',
      s1Label: 'Karen context in Thailand',
      s1Title: 'A resilient mountain community',
      s1Text1: 'Karen communities live in mountain areas near the Myanmar-Thai border.',
      s1Text2: 'Local economies remain fragile and access to services is often limited.',
      s1Text3: 'Protecting schools means protecting children and preserving cultural continuity.',
      s2Label: 'Mae Pai and Tiloplo villages',
      s2Title: 'Two highly isolated villages',
      s2Text1: 'Mae Pai is about two hours from Mae Sot, with roughly 300 residents.',
      s2Text2: 'Tiloplo, nearby, is smaller and similarly isolated.',
      s2Text3: 'During rainy season, isolation increases and families rely on mountain farming.',
      s3Label: 'School situation',
      s3Title: 'Why school is a collective pillar',
      s3Text1: 'School is a core space of stability and future projection for children.',
      s3Text2: 'It also supports social cohesion in a mixed and peaceful local community.',
      s3Text3: 'Renovating Mae Pai school strengthens long-term village resilience.',
      lastTitle: 'Understand the context, then take action',
      lastText: 'The Save the School page lets you contribute immediately.'
    },
    save: {
      title: 'Save Mae Pai School',
      heroKicker: 'Act now',
      heroTitle: 'Save Mae Pai School',
      heroText: 'Choose your engagement path: volunteering, donations, school campaigns, or corporate support.',
      vLabel: 'Volunteering',
      vTitle: 'Field volunteering in Mae Pai',
      vText1: 'Mae Pai offers strong hospitality and direct educational impact with children.',
      vText2: 'Volunteers can support English classes and after-school activities.',
      vText3: 'It is both an educational and deeply human experience.',
      fLabel: 'Financial support',
      fTitle: 'Three ways to provide support',
      pTitle: 'Individual donors',
      pText: 'Support Mae Pai school financially through MEP channels.',
      eTitle: 'Schools and institutions',
      eText: 'Possible actions include rice-bowl operations, drawing contests, and relay events.',
      cTitle: 'Corporate and foundation support',
      cText: 'Companies can support all or part of the project with dedicated MEP coordination.',
      contactLabel: 'Contact us',
      contactTitle: 'Let us organize your contribution',
      contactText: 'We help direct your support toward the most urgent priorities.',
      lastTitle: 'Your commitment has direct impact on children',
      lastText: 'Contributing now helps restore dignified school conditions in Mae Pai.'
    },
    legal: {
      title: 'Legal notice',
      heroKicker: 'Legal information',
      heroTitle: 'Website legal notice',
      heroText: 'Information published according to standard legal disclosure practices for a French website.',
      edLabel: 'Website publisher',
      edText: 'Project name: Save Mae Pai School. Publishing manager: to be confirmed. Contact: mep.pab@gmail.com.',
      hostLabel: 'Hosting',
      hostText: 'Hosting: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Website: vercel.com.',
      dataLabel: 'Personal data',
      dataText: 'No active data collection form at this stage. For data-related requests, contact: mep.pab@gmail.com.',
      cookiesLabel: 'Cookies',
      cookiesText: 'No advertising tracking cookies are intentionally used at this stage.',
      ipLabel: 'Intellectual property',
      ipText: 'Texts, visuals, and resources are protected. Any reproduction requires prior authorization from rights holders.'
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

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
  localStorage.setItem('maepai-lang', lang);
}

function initLang() {
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });
  const saved = localStorage.getItem('maepai-lang');
  setLanguage(saved === 'en' ? 'en' : 'fr');
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

setActiveNav();
initLang();
initMobileMenu();
