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
      footerTitle: 'Contact et liens utiles',
      footerText: "Projet solidaire pour soutenir l'ecole de Mae Pai en Thailande.",
      footerLegal: 'Mentions: informations a confirmer avant publication officielle.',
      footerContact: 'Contact direct: mep.pab@gmail.com',
      mepSite: 'Site MEP'
    },
    home: {
      title: "Sauvons l'ecole de Mae Pai",
      heroKicker: 'Collecte de fonds pour education',
      heroTitle: "Un avenir pour les enfants karens de Mae Pai",
      heroText:
        "Dans les montagnes du nord-ouest thai, l'ecole de Mae Pai est un refuge educatif essentiel. Ensemble, engageons-nous pour sa renovation.",
      quickLabel: 'Parcours de visite',
      quickTitle: 'Explorer le projet page par page',
      card1Title: 'Le village de Mae Pai',
      card1Text: 'Un village montagneux isole, ou l ecole est au coeur de la vie collective.',
      card2Title: 'Contexte Karen en Thailande',
      card2Text: 'Une communaute resiliente, confrontee a des fragilites economiques et sociales.',
      card3Title: "Situation de l'ecole",
      card3Text: "Une ecole historique sans subvention publique, soutenue par des partenaires prives.",
      card4Title: 'Evaluation des besoins',
      card4Text: 'Batiments a renover, energie a securiser, materiels a renouveler.',
      card5Title: 'Plan de renovation',
      card5Text: 'Demarrage vise fin saison des pluies 2026 selon fonds disponibles.',
      card6Title: 'Engageons-nous',
      card6Text: 'Volontariat, dons individuels, campagnes scolaires, soutien entreprise.',
      stats1Value: '60+',
      stats1Name: 'Enfants scolarises',
      stats2Value: '300',
      stats2Name: 'Habitants a Mae Pai',
      stats3Value: '2026-2027',
      stats3Name: 'Fenetre de renovation prioritaire',
      lastTitle: "Passons a l'action",
      lastText: "Chaque contribution aide a maintenir les enfants a l'ecole et a renforcer l'avenir du village."
    },
    school: {
      title: "L'ecole de Mae Pai",
      heroKicker: 'Page projet',
      heroTitle: "L'ecole de Mae Pai: situation, besoins, perspectives",
      heroText: "Cette page rassemble le coeur du projet: l'urgence, les besoins techniques, et la feuille de route de renovation.",
      s1Label: 'Sauver',
      s1Title: "Sauvons l'ecole de Mae Pai",
      s1Text: "L'ecole accueille environ 60 enfants. Avec de meilleures conditions materielles, les effectifs pourraient retrouver 75 a 80 eleves.",
      s2Label: 'Ecole',
      s2Title: 'Une ecole locale devenue indispensable',
      s2Text:
        "Creee il y a environ 40 ans, l'ecole joue un role central dans la transmission educative et culturelle. Elle est soutenue notamment par le diocese de Nakhon Sawan, les MEP et Enfants du Mekong.",
      s3Label: 'Evaluation',
      s3Title: 'Evaluation des besoins',
      s3Card1Title: 'Renovation globale des batiments',
      s3Card1Text: 'Reprises de menuiseries, persiennes, peintures, et reparations structurelles essentielles.',
      s3Card2Title: 'Alimentation electrique',
      s3Card2Text: 'Panneaux solaires operationnels, mais batteries en fin de vie a remplacer rapidement.',
      s3Card3Title: 'Equipements pedagogiques',
      s3Card3Text: "Ameliorer les materiels pour offrir un cadre d'apprentissage durable.",
      s4Label: 'Plan',
      s4Title: 'Plan de renovation et perspectives',
      s4Text:
        "Priorite: demarrer les travaux des la fin de la saison des pluies 2026, puis securiser l'energie pour les cours du soir et la formation des adultes.",
      lastTitle: 'Soutenir concretement le projet',
      lastText: 'Decouvrez la page Sauver l ecole pour choisir votre mode de contribution.'
    },
    about: {
      title: 'A propos du contexte',
      heroKicker: 'Comprendre',
      heroTitle: 'Contexte Karen, village et enjeux educatifs',
      heroText:
        "Comprendre le contexte local permet de voir pourquoi la renovation de l'ecole de Mae Pai est un levier social majeur.",
      s1Label: 'Contexte',
      s1Title: 'Contexte Karen en Thailande',
      s1Text:
        "Les populations karens vivent souvent dans des zones montagneuses isolees. La precarite economique, l'isolement et les addictions fragilisent fortement les familles.",
      s2Label: 'Village',
      s2Title: 'Village de Mae Pai et Tiloplo',
      s2Text:
        "Les deux villages sont proches, peu connectes, et fortement dependants d'une agriculture de montagne exigeante. L'ecole est un appui quotidien pour les enfants.",
      s3Label: 'Ecole',
      s3Title: "Situation de l'ecole",
      s3Text:
        "Sans soutien public, l'ecole s'appuie sur des partenaires associatifs et religieux. Les frais de fonctionnement sont couverts de justesse, mais les investissements restent insuffisants.",
      lastTitle: 'Transformer la comprehension en action',
      lastText: 'Passez sur la page Sauver l ecole pour contribuer des maintenant.'
    },
    save: {
      title: "Sauver l'ecole de Mae Pai",
      heroKicker: 'Agir maintenant',
      heroTitle: "Sauver l'ecole de Mae Pai",
      heroText:
        "Choisissez votre mode d'engagement: volontariat, soutien financier, mobilisation d'etablissement ou soutien d'entreprise.",
      vLabel: 'Volontariat',
      vTitle: 'Volontariat',
      vText:
        "Le village offre une experience de terrain unique. Les volontaires peuvent soutenir les cours d'anglais et les activites periscolaires.",
      fLabel: 'Soutien financier',
      fTitle: 'Soutien financier',
      pTitle: 'Soutien individuel / particuliers',
      pText: "Je souhaite soutenir financierement l'ecole de Mae Pai via les MEP.",
      eTitle: 'Soutien etablissements scolaires',
      eText:
        "Operations possibles: bol de riz, dessins solidaires, relais sportifs. Les recettes sont reversees aux MEP avec mention operation ecole Mae Pai.",
      cTitle: "Soutien fondations d'entreprise",
      cText: "J'engage mon entreprise sur tout ou partie du projet et contacte l'equipe MEP pour un cadrage.",
      contactLabel: 'Contactez-nous',
      contactTitle: 'Contactez-nous',
      contactText: 'Ecrivez-nous pour organiser un soutien personnalise ou obtenir un dossier projet.',
      lastTitle: 'Merci pour votre engagement',
      lastText: "Votre soutien peut changer durablement la trajectoire educative des enfants de Mae Pai."
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
      footerTitle: 'Contact and useful links',
      footerText: 'Solidarity project supporting Mae Pai school in Thailand.',
      footerLegal: 'Notes: some operational details must be confirmed before official publication.',
      footerContact: 'Direct contact: mep.pab@gmail.com',
      mepSite: 'MEP website'
    },
    home: {
      title: 'Save Mae Pai School',
      heroKicker: 'Education fundraising',
      heroTitle: 'A future for Karen children in Mae Pai',
      heroText:
        'In northwestern Thailand, Mae Pai school is a vital educational safe place. Together, we can fund and deliver its renovation.',
      quickLabel: 'Site journey',
      quickTitle: 'Explore the project page by page',
      card1Title: 'Mae Pai village',
      card1Text: 'A remote mountain village where school is central to community life.',
      card2Title: 'Karen context in Thailand',
      card2Text: 'A resilient community facing economic and social vulnerabilities.',
      card3Title: 'School situation',
      card3Text: 'A historical school with no public subsidy, backed by committed partners.',
      card4Title: 'Needs assessment',
      card4Text: 'Buildings, power systems, and learning equipment all need urgent action.',
      card5Title: 'Renovation roadmap',
      card5Text: 'Target start: late 2026 rainy season, based on available funds.',
      card6Title: 'Take action',
      card6Text: 'Volunteering, individual giving, school campaigns, corporate support.',
      stats1Value: '60+',
      stats1Name: 'Children enrolled',
      stats2Value: '300',
      stats2Name: 'Residents in Mae Pai',
      stats3Value: '2026-2027',
      stats3Name: 'Priority renovation window',
      lastTitle: 'Take action now',
      lastText: 'Every contribution helps children stay in school and strengthens village resilience.'
    },
    school: {
      title: 'Mae Pai School',
      heroKicker: 'Project page',
      heroTitle: 'Mae Pai school: status, needs, and next steps',
      heroText: 'This page summarizes the project core: urgency, technical needs, and renovation execution plan.',
      s1Label: 'Save',
      s1Title: 'Let us save Mae Pai school',
      s1Text: 'The school currently serves around 60 children. Better facilities could bring enrollment back to 75-80.',
      s2Label: 'School',
      s2Title: 'A local school that became essential',
      s2Text:
        'Created about 40 years ago, the school is central for education and cultural continuity. It is supported by Nakhon Sawan Diocese, MEP, and Enfants du Mekong.',
      s3Label: 'Assessment',
      s3Title: 'Needs assessment',
      s3Card1Title: 'Full building renovation',
      s3Card1Text: 'Doors, shutters, paint and structural repairs are required.',
      s3Card2Title: 'Power supply',
      s3Card2Text: 'Solar panels still work, but battery replacement is urgent.',
      s3Card3Title: 'Learning equipment',
      s3Card3Text: 'Upgrading school equipment is key for long-term teaching quality.',
      s4Label: 'Roadmap',
      s4Title: 'Renovation roadmap and outlook',
      s4Text:
        'Priority: launch works right after the 2026 rainy season and secure electricity for evening classes and adult education.',
      lastTitle: 'Support the project now',
      lastText: 'Visit the Save the School page to choose your contribution path.'
    },
    about: {
      title: 'About the context',
      heroKicker: 'Understand',
      heroTitle: 'Karen context, village life, and education stakes',
      heroText: 'Understanding local realities shows why renovating Mae Pai school has strong social impact.',
      s1Label: 'Context',
      s1Title: 'Karen context in Thailand',
      s1Text:
        'Karen communities often live in remote mountain areas. Economic fragility, isolation, and addictions can deeply impact families.',
      s2Label: 'Village',
      s2Title: 'Mae Pai and Tiloplo villages',
      s2Text:
        'The two villages are close, weakly connected, and dependent on demanding mountain agriculture. School is a daily support system for children.',
      s3Label: 'School',
      s3Title: 'School situation',
      s3Text:
        'Without public subsidy, the school depends on NGO and mission support. Operating costs are barely covered, but investment needs remain high.',
      lastTitle: 'Turn understanding into action',
      lastText: 'Go to Save the School and contribute today.'
    },
    save: {
      title: 'Save Mae Pai School',
      heroKicker: 'Act now',
      heroTitle: 'Save Mae Pai School',
      heroText:
        'Choose your engagement path: volunteering, individual support, school-led fundraising, or corporate contribution.',
      vLabel: 'Volunteering',
      vTitle: 'Volunteering',
      vText:
        'The village offers a unique field experience. Volunteers can support English courses and after-school activities.',
      fLabel: 'Financial support',
      fTitle: 'Financial support',
      pTitle: 'Individual donors',
      pText: 'I want to financially support Mae Pai school through MEP.',
      eTitle: 'Schools and institutions',
      eText: 'Examples: rice-bowl campaign, solidarity drawings, sports relays. Funds are transferred to MEP with Mae Pai mention.',
      cTitle: 'Corporate foundations',
      cText: 'My company supports all or part of the project and connects with the MEP team for implementation.',
      contactLabel: 'Contact us',
      contactTitle: 'Contact us',
      contactText: 'Write to us to set up tailored support or request project details.',
      lastTitle: 'Thank you for your commitment',
      lastText: 'Your support can durably change children s educational future in Mae Pai.'
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
