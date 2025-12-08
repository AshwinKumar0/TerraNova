import { Project } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Emerald Hills Estate",
    slug: "emerald-hills-estate",
    type: "villa",
    price: 450000,
    city: "Munnar",
    state: "Kerala",
    location: { lat: 10.0889, lng: 77.0595 },
    thumbnail: "https://picsum.photos/id/10/800/600",
    images: [
      "https://picsum.photos/id/10/1200/800",
      "https://picsum.photos/id/11/1200/800",
      "https://picsum.photos/id/12/1200/800"
    ],
    shortDescription: "Luxury eco-villas surrounded by tea plantations.",
    longDescription: "Experience the serenity of nature at Emerald Hills. Each villa is designed with sustainable materials and offers panoramic views of the misty mountains. Perfect for those seeking a quiet retreat away from the city noise.",
    amenities: ["Clubhouse", "Infinity Pool", "24/7 Security", "Organic Garden"],
    status: "available",
    brochureUrl: "https://res.cloudinary.com/dmcjbuh6p/image/upload/v1765090757/main-sample.png",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "2",
    title: "Serenity Lake Plots",
    slug: "serenity-lake-plots",
    type: "plot",
    price: 85000,
    city: "Lonavala",
    state: "Maharashtra",
    location: { lat: 18.7515, lng: 73.4007 },
    thumbnail: "https://picsum.photos/id/28/800/600",
    images: [
      "https://picsum.photos/id/28/1200/800",
      "https://picsum.photos/id/29/1200/800"
    ],
    shortDescription: "Premium lakeside plots ready for construction.",
    longDescription: "Build your dream weekend home right next to the pristine Serenity Lake. These plots come with electricity and water connections pre-installed. A gated community ensuring privacy and peace.",
    amenities: ["Lake Access", "Gated Community", "Water Connection", "Electricity"],
    status: "available",
    brochureUrl: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "3",
    title: "Whispering Pines Resort",
    slug: "whispering-pines-resort",
    type: "resort",
    price: 1200000,
    city: "Manali",
    state: "Himachal Pradesh",
    location: { lat: 32.2432, lng: 77.1892 },
    thumbnail: "https://picsum.photos/id/54/800/600",
    images: [
      "https://picsum.photos/id/54/1200/800",
      "https://picsum.photos/id/55/1200/800"
    ],
    shortDescription: "Investment opportunity in a fully operational resort.",
    amenities: ["Restaurant", "Spa", "Parking", "Staff Quarters"],
    status: "sold",
    brochureUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/serving.pdf",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    longDescription: ''
  },
  {
    id: "4",
    title: "Green Valley Farms",
    slug: "green-valley-farms",
    type: "plot",
    price: 120000,
    city: "Coorg",
    state: "Karnataka",
    location: { lat: 12.3375, lng: 75.8069 },
    thumbnail: "https://picsum.photos/id/88/800/600",
    images: [
      "https://picsum.photos/id/88/1200/800"
    ],
    shortDescription: "Expansive farm plots suitable for organic farming.",
    amenities: ["Fencing", "Borewell", "Road Access"],
    status: "available",
    brochureUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/serving.pdf",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    longDescription: ''
  }
];
