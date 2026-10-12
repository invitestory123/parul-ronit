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
    groomParents: "Son of Smt. Neeta Uniyal & Sh. Yamuna Prasad Uniyal (Grandson of Smt. Purni Devi & Late Sh. Mahesha Nand Uniyal)",
    hashtag: "#ParulWedsRonit",
  },

  wedding: {
    dateISO: "2026-11-20T20:00:00+05:30",
    dateLabel: "Friday, 20th November 2026",
    timeLabel: "Wedding at 8:00 PM",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Na koi vaada likha tha, na koi manzil tay thi… bas saath chalte rahe, aur raasta khoobsurat hota gaya.",
  },

  venue: {
    name: "The Meraki",
    address: "A-29, GT Karnal Road Industrial Area, Opposite Mahendru Enclave, Gujranwala Town, Delhi 110033",
    mapsQuery: "The Meraki A-29 GT Karnal Road Industrial Area Opposite Mahendru Enclave Gujranwala Town Delhi 110033",
    mapsUrl: "https://maps.app.goo.gl/oZbs7RZWSEV7nCW89?g_st=ic",
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
      name: "Departure of Barat",
      icon: "sparkles",
      date: "Friday, 20th November 2026",
      time: "6:00 PM",
      venue: "Royal by Meraki, Block-A, Sector-15, Rohini, Delhi",
      note: "Barat will depart to Royal By Meraki, Sector-15, Rohini and proceed to wedding venue.",
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
    {
      name: "Bride Groom Welcome",
      icon: "sparkles",
      date: "Saturday, 21st November 2026",
      time: "6:00 AM",
      venue: "Residence: H. No. 293, SFS Golden Jubilee Apartment, Sector-11, Rohini, Delhi-110085",
      note: "Warm welcome of the newly wedded couple with blessings at residence.",
    },
  ],

  familyNote: "With love, the Uniyal & Bambotra families",

  images: {
    couple: "./editable/assets/couple.png",
    heroBg: "./editable/assets/hero-bg.png",
    ganesha: "./editable/assets/ganesha.png",
    diya: "./editable/assets/diya.png",
    mandala: "./editable/assets/mandala.png",
    footerGarland: "./editable/assets/footer-garland.png",
  },
};
