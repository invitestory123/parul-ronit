/**
 * wedding-data.js — Customer-facing editable data layer for rajmahal-palace
 * Edit this file to update couple names, parents, dates, venue, Sanskrit shloka, events, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Parul",
    groom: "Ronit",
    brideFull: "Parul Bambotra",
    groomFull: "Ronit Uniyal",
    brideParents: "D/o Smt. Kirti Bambotra & Late Sh. Babulal Bambotra",
    groomParents: "Son of Smt. Neeta Uniyal & Sh. Yamuna Prasad Uniyal",
    hashtag: "#Parnit",
    tagline: "“Beginning of a happily ever after”",
  },

  wedding: {
    dateISO: "2026-11-20T20:00:00+05:30",
    dateLabel: "Friday, 20th November 2026",
    timeLabel: "Wedding at 8:00 PM",
  },

  verse: {
    gateMantra: false, // "Om Uma Maheshvarabhyam Namah" removed
    gateMantraHindi: false, // Set to "॥ ॐ उमामहेश्वराभ्यां नमः ॥" if Sanskrit Devanagari script is also desired on the cover gate
    hindi: "॥ ॐ उमामहेश्वराभ्यां नमः ॥\n\n\n॥ ॐ नमः शिवाय, शिव जी सदा सहाय ॥\n\n\n॥ ॐ नमः शिवाय, गुरुजी सदा सहाय ॥",
    showEnglishHero: false, // Set to true to also display the English mantra under the Shiv-Parvati motif
    text: "Together with their families, Parul & Ronit invite you to celebrate their wedding and shower your blessings on their sacred new beginning.",
  },

  venue: {
    name: "The Meraki",
    address: "A-29, GT Karnal Road Industrial Area, Opposite Mahendru Enclave, Gujranwala Town, Delhi 110033",
    mapsQuery: "The Meraki A-29 GT Karnal Road Industrial Area Opposite Mahendru Enclave Gujranwala Town Delhi 110033",
    mapsUrl: "https://maps.app.goo.gl/oZbs7RZWSEV7nCW89?g_st=ic",
    showInHero: false,    // Venue repetition removed from 1st page Hero card
    showInScratch: false, // Venue repetition removed from 2nd page Scratch card
    showSection: true,    // End venue map & calendar section
  },

  music: {
    src: "./editable/assets/bgm.mp3?v=3",
    title: "Mangalayam — Saathiya (A.R. Rahman)",
    autoplay: true,
  },

  events: [
    {
      name: "Haldi",
      icon: "flower",
      date: "Thursday, 19th November 2026",
      time: "12:00 PM (Followed by Lunch)",
      venue: "Royal Party Hall Rooftop, Royal by Meraki, Rohini Sector 15, Delhi 110089",
      note: "A splash of turmeric, laughter and joyous celebrations.",
      mapsUrl: "https://maps.app.goo.gl/KY1LEUN6NFpQLTK98?g_st=iw",
    },
    {
      name: "Engagement & Cocktail",
      icon: "music",
      date: "Thursday, 19th November 2026",
      time: "8:00 PM (Followed by Drinks & Cocktail)",
      venue: "Royal Party Hall Rooftop, Royal by Meraki, Rohini Sector 15, Delhi 110089",
      note: "An evening of dance, celebration, toasts and togetherness.",
      mapsUrl: "https://maps.app.goo.gl/KY1LEUN6NFpQLTK98?g_st=iw",
    },
    {
      name: "Wedding Ceremony",
      icon: "heart",
      date: "Friday, 20th November 2026",
      time: "8:00 PM onwards",
      venue: "The Meraki, A-29, GT Karnal Road, Gujranwala Town, Delhi 110033",
      note: "Baraat, Jaimala & sacred Pheras — the moment two souls become one.",
      mapsUrl: "https://maps.app.goo.gl/oZbs7RZWSEV7nCW89?g_st=ic",
    },
  ],

  familyNote: "With love, the Bambotra and Uniyal families",

  images: {
    couple: "./editable/assets/couple.png",
    heroBg: "./editable/assets/hero-bg.png",
    gateBg: "./editable/assets/hero-bg.png",
    ganesha: "./editable/assets/shiv-parvati.png",
    diya: "./editable/assets/diya.png",
    mandala: "./editable/assets/mandala.png",
    footerGarland: "./editable/assets/footer-garland.png",
  },
};
