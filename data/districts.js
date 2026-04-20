// ============================================================
// DISTRICT DATA — all 14 Kerala districts
// ============================================================
// Each district has a landing page at /stores/[slug]
// Edit intro text, heroLine, areas below as needed
// ============================================================

export const DISTRICTS = [
  {
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    heroLine: "Kerala's capital — and HP's stronghold",
    intro: "Three HP World stores across the capital — from Statue to Kazhakootam's IT belt. Same-day delivery city-wide, flagship service support.",
    areas: ["Statue", "Pattom", "Kazhakootam", "Technopark", "Sasthamangalam", "Kowdiar", "Medical College", "Thampanoor", "Vellayambalam"],
  },
  {
    slug: "kollam",
    name: "Kollam",
    heroLine: "The cashew capital, now the HP capital",
    intro: "Two HP World outlets serving Kollam, Kottarakara and surrounding areas — full range, friendly team, proper service backup.",
    areas: ["Chinnakada", "Kottarakara", "Karunagappally", "Punalur", "Polayathode"],
  },
  {
    slug: "pathanamthitta",
    name: "Pathanamthitta",
    heroLine: "HP in the heart of Central Travancore",
    intro: "Our Ring Road store is Pathanamthitta district's one-stop HP destination — laptops, printers, service and Care Pack.",
    areas: ["Ring Road", "Adoor", "Tiruvalla", "Konni", "Ranni"],
  },
  {
    slug: "alappuzha",
    name: "Alappuzha",
    heroLine: "Backwaters country — with HP close by",
    intro: "From Mullakkal, we serve Alappuzha and surrounding towns with the full HP line-up, authorised warranty and local service support.",
    areas: ["Mullakkal", "Cherthala", "Kayamkulam", "Ambalappuzha", "Haripad"],
  },
  {
    slug: "kottayam",
    name: "Kottayam",
    heroLine: "Where letters taught India to read — and now compute",
    intro: "Two HP World stores covering Kottayam and Changanassery. Strong presence in the education and plantation sector clients.",
    areas: ["KK Road", "Changanassery", "Pala", "Ettumanoor", "Vaikom"],
  },
  {
    slug: "idukki",
    name: "Idukki",
    heroLine: "High ranges, high standards",
    intro: "Our Thodupuzha outlet brings authorised HP products and service to Idukki's plantation belt and hill station towns.",
    areas: ["Thodupuzha", "Munnar", "Kattappana", "Cheruthoni", "Nedumkandam"],
  },
  {
    slug: "ernakulam",
    name: "Ernakulam",
    heroLine: "Kerala's commercial capital",
    intro: "Five HP World outlets across Kochi and Ernakulam — from the Panampilly Nagar flagship to Aluva and Angamaly. Same-day delivery, dedicated business desk for Infopark and Kakkanad.",
    areas: ["Panampilly Nagar", "MG Road", "Vyttila", "Edappally", "Kakkanad", "Aluva", "Angamaly", "Tripunithura", "Fort Kochi", "Kaloor", "Palarivattom", "Kalamassery"],
  },
  {
    slug: "thrissur",
    name: "Thrissur",
    heroLine: "The cultural capital's tech partner",
    intro: "Our Round South flagship and Kunnamkulam store anchor HP World's presence across Thrissur district — home buyers, SMBs and institutions alike.",
    areas: ["Round", "Kunnamkulam", "Irinjalakuda", "Chalakudy", "Guruvayur", "Kodungallur"],
  },
  {
    slug: "palakkad",
    name: "Palakkad",
    heroLine: "Gateway to Kerala, HP's eastern outpost",
    intro: "Two stores covering Palakkad town and Ottapalam — with fast service response across the district's industrial and educational corridors.",
    areas: ["GB Road", "Ottapalam", "Chittur", "Mannarkkad", "Shoranur"],
  },
  {
    slug: "malappuram",
    name: "Malappuram",
    heroLine: "North Kerala's biggest HP footprint",
    intro: "Three HP World stores across Malappuram, Manjeri and Tirur — the widest network in Malabar.",
    areas: ["Down Hill", "Manjeri", "Tirur", "Perinthalmanna", "Tirurangadi", "Ponnani"],
  },
  {
    slug: "kozhikode",
    name: "Kozhikode",
    heroLine: "Calicut — where HP meets heritage",
    intro: "Three HP World outlets including our Mavoor Road flagship with dedicated demo zone and service centre. Full coverage of Kozhikode and Vadakara belt.",
    areas: ["Mavoor Road", "Mini Bypass", "Vadakara", "Beach Road", "Nadakkavu", "Pantheerankavu"],
  },
  {
    slug: "wayanad",
    name: "Wayanad",
    heroLine: "Hill station tech",
    intro: "Our Kalpetta outlet is your complete HP destination in Wayanad — with delivery across Sulthan Bathery, Mananthavady and Meppadi.",
    areas: ["Kalpetta", "Sulthan Bathery", "Mananthavady", "Meppadi"],
  },
  {
    slug: "kannur",
    name: "Kannur",
    heroLine: "Loom city, now a tech city",
    intro: "Three HP World stores from Kannur Fort Road flagship to Thalassery and Payyannur — authorised HP across the district.",
    areas: ["Fort Road", "Thalassery", "Payyannur", "Taliparamba", "Iritty"],
  },
  {
    slug: "kasaragod",
    name: "Kasaragod",
    heroLine: "Kerala's northernmost HP presence",
    intro: "Two stores covering Kasaragod town and Kanhangad — authorised HP products and service for north Kerala.",
    areas: ["MG Road", "Kanhangad", "Hosdurg", "Nileshwar", "Cheruvathur"],
  },
];

export function getDistrict(slug) {
  return DISTRICTS.find((d) => d.slug === slug);
}
