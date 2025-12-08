import { Project } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "konkan-project-1",
    title: "Integrated Development - Konkan Region",
    slug: "konkan-integrated-development",
    type: "plot",
    price: 1000000,
    city: "Mandangad",
    state: "Maharashtra",
    location: { lat: 17.9620, lng: 73.2370 }, // Mandangad coordinates
    thumbnail: "https://picsum.photos/id/16/800/600", // Nature/Greenery
    images: [
      "https://picsum.photos/id/16/1200/800",
      "https://picsum.photos/id/28/1200/800",
      "https://picsum.photos/id/54/1200/800"
    ],
    shortDescription: "A 100-acre integrated development on NH-66 combining bamboo plantation, farm plots, and eco-resort.",
    longDescription: "Strategically located on NH-66 in the upcoming district of Mandangad, this 100-acre development drives sustainable growth. It uniquely combines agricultural productivity with tourism potential, ensuring long-term land value appreciation. This is a rare opportunity to invest in Konkan's Green Investment Hub.",
    amenities: ["NH-66 Connectivity", "Bamboo Plantation", "Eco-Resort Access", "Water Connection"],
    status: "available",
    brochureUrl: "/brochures/konkan-integrated-development.pdf",

    // PDF Specific Data
    keyHighlights: [
      "Transforming Mandangad into Konkan's Green Investment Hub.",
      "Rare 100-acre opportunity with agro, tourism & real estate synergy.",
      "Best suited for forward-looking investors seeking multi-stream income."
    ],
    investmentBreakdown: [
      { label: "Land Acquisition Cost", amount: 700000 },
      { label: "Development Cost (3 years)", amount: 300000 },
      { label: "Total Initial Investment", amount: 1000000 }
    ],
    roiModels: [
      {
        title: "Bamboo Plantation",
        area: "~ 40-50 Acres",
        highlights: [
          "Ideal climate: high rainfall, red laterite soil",
          "Rising demand: construction, furniture, bio-energy",
          "Lower logistics cost due to expressway interchange"
        ],
        returnText: "Net annual profit: ~₹1 Lakh per acre"
      },
      {
        title: "1-Acre Farm Plots",
        area: "~ 20-30 Acres",
        highlights: [
          "Ideal for farmhouses, weekend homes, boutique resorts",
          "Surrounded by beaches, forts, rivers & nature trails",
          "Strong appreciation from district status & highways"
        ],
        returnText: "Sale Value: ~₹30 Lakh per acre"
      },
      {
        title: "Eco Friendly Resort",
        area: "~ 10-20 Acres",
        highlights: [
          "Perfect for eco-cottages, retreats, wellness tourism",
          "Tourism spillover from Kelshi Beach, Velas, Bankot Fort",
          "Fits MSRDC's tourism & balanced regional growth plan"
        ],
        returnText: "Revenue Potential: ~₹30–35 Lakh / annum"
      }
    ],

    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "1",
    title: "Emerald Hills Estate",
    slug: "emerald-hills-estate",
    type: "villa",
    price: 4500000,
    city: "Munnar",
    state: "Kerala",
    location: { lat: 10.0889, lng: 77.0595 },
    thumbnail: "https://picsum.photos/id/10/800/600",
    images: [
      "https://picsum.photos/id/10/1200/800",
      "https://picsum.photos/id/11/1200/800",
      "https://picsum.photos/id/12/1200/800"
    ],
    shortDescription: "Luxury eco-villas surrounded by lush tea plantations.",
    longDescription: "Experience the serenity of nature at Emerald Hills. Each villa is designed with sustainable materials and offers panoramic views of the misty mountains. Perfect for those seeking a quiet retreat away from the city noise, with the added benefit of managed hospitality services.",
    amenities: ["Clubhouse", "Infinity Pool", "24/7 Security", "Organic Garden"],
    status: "available",
    
    keyHighlights: [
        "Located in the prime tea-garden belt of Munnar.",
        "Guaranteed rental yield through managed holiday home program.",
        "High asset appreciation due to limited construction zones."
    ],
    investmentBreakdown: [
        { label: "Plot Cost (5000 sq.ft)", amount: 2000000 },
        { label: "Villa Construction & Furnishing", amount: 2500000 },
        { label: "Total Investment", amount: 4500000 }
    ],
    roiModels: [
        {
            title: "Holiday Rental Income",
            area: "Villa Unit",
            highlights: [
                "Managed by premium hospitality partner",
                "High occupancy during peak tourist seasons (Oct-Mar)",
                "Owner stays free for 14 days a year"
            ],
            returnText: "Annual Yield: ~8-10%"
        },
        {
            title: "Asset Appreciation",
            area: "Land Value",
            highlights: [
                "Scarcity of land with clear titles in Munnar",
                "Growing demand for second homes in hill stations",
                "Infrastructure upgrades in Kerala tourism circuit"
            ],
            returnText: "CAGR: ~12% per annum"
        }
    ],

    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "2",
    title: "Serenity Lake Plots",
    slug: "serenity-lake-plots",
    type: "plot",
    price: 2500000,
    city: "Lonavala",
    state: "Maharashtra",
    location: { lat: 18.7515, lng: 73.4007 },
    thumbnail: "https://picsum.photos/id/28/800/600",
    images: [
      "https://picsum.photos/id/28/1200/800",
      "https://picsum.photos/id/29/1200/800"
    ],
    shortDescription: "Premium lakeside plots ready for weekend home construction.",
    longDescription: "Build your dream weekend home right next to the pristine Serenity Lake. These plots come with electricity and water connections pre-installed. A gated community ensuring privacy and peace, just 2 hours drive from Mumbai and Pune.",
    amenities: ["Lake Access", "Gated Community", "Water Connection", "Electricity"],
    status: "available",

    keyHighlights: [
        "Direct lake access with private jetty.",
        "Proximity to Mumbai-Pune Expressway.",
        "Ideal for pre-fabricated eco-homes or glamping setups."
    ],
    investmentBreakdown: [
        { label: "Plot Cost (10,000 sq.ft)", amount: 2000000 },
        { label: "Infrastructure & Amenities Charge", amount: 500000 },
        { label: "Total Investment", amount: 2500000 }
    ],
    roiModels: [
        {
            title: "Weekend Home Rental",
            area: "Glamping Unit",
            highlights: [
                "High demand for lakeside stays near Mumbai",
                "Low construction cost for eco-pods/tents",
                "Year-round weekend occupancy"
            ],
            returnText: "Net Revenue: ~₹50k-70k / month"
        },
        {
            title: "Land Banking",
            area: "Plot Resale",
            highlights: [
                "Rapid urbanization of Lonavala outskirts",
                "Proposed new highway connector nearby",
                "Limited supply of lake-touch parcels"
            ],
            returnText: "Resale Multiplier: 1.5x in 3 years"
        }
    ],

    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "3",
    title: "Whispering Pines Resort",
    slug: "whispering-pines-resort",
    type: "resort",
    price: 12000000,
    city: "Manali",
    state: "Himachal Pradesh",
    location: { lat: 32.2432, lng: 77.1892 },
    thumbnail: "https://picsum.photos/id/54/800/600",
    images: [
      "https://picsum.photos/id/54/1200/800",
      "https://picsum.photos/id/55/1200/800"
    ],
    shortDescription: "Investment opportunity in a fully operational resort.",
    longDescription: "A running resort property available for sale. Features 20 cottages, a restaurant, and a spa. Located amidst dense pine forests with high tourist footfall throughout the year. An immediate revenue-generating asset for serious investors.",
    amenities: ["Restaurant", "Spa", "Parking", "Staff Quarters"],
    status: "sold",

    keyHighlights: [
        "Fully operational asset with zero gestation period.",
        "Prime location near Solang Valley.",
        " established brand equity and online ratings."
    ],
    investmentBreakdown: [
        { label: "Asset Acquisition Cost", amount: 10000000 },
        { label: "Renovation & Upgrades", amount: 2000000 },
        { label: "Total Investment", amount: 12000000 }
    ],
    roiModels: [
        {
            title: "Operational Revenue",
            area: "Resort Operations",
            highlights: [
                "Average Daily Rate (ADR) of ₹5000+",
                "High occupancy in Summer and Winter (Snow season)",
                "Banquet revenue from destination weddings"
            ],
            returnText: "Annual Net Profit: ~₹18-22 Lakhs"
        },
        {
            title: "Commercial Land Value",
            area: "1.5 Acres Commercial",
            highlights: [
                "Scarcity of commercial licenses in Manali",
                "Highway frontage value",
                "Potential for expansion to 40 keys"
            ],
            returnText: "Value Appreciation: ~15% YoY"
        }
    ],

    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: "4",
    title: "Green Valley Farms",
    slug: "green-valley-farms",
    type: "plot",
    price: 3500000,
    city: "Coorg",
    state: "Karnataka",
    location: { lat: 12.3375, lng: 75.8069 },
    thumbnail: "https://picsum.photos/id/88/800/600",
    images: [
      "https://picsum.photos/id/88/1200/800"
    ],
    shortDescription: "Expansive farm plots suitable for organic coffee farming.",
    longDescription: "Rich fertile soil perfect for coffee or spice plantations. Own a piece of Coorg's legendary landscape. Ideal for agro-tourism projects or a farmhouse. The land comes with mature silver oak and pepper vines.",
    amenities: ["Fencing", "Borewell", "Road Access", "Coffee Plants"],
    status: "available",

    keyHighlights: [
        "Active coffee estate with annual harvest income.",
        "Tax-free agricultural income potential.",
        "Ideal elevation for premium Arabica coffee."
    ],
    investmentBreakdown: [
        { label: "Land Cost (2 Acres)", amount: 3000000 },
        { label: "Farm Equipment & Shed", amount: 500000 },
        { label: "Total Investment", amount: 3500000 }
    ],
    roiModels: [
        {
            title: "Agricultural Yield",
            area: "Coffee & Pepper",
            highlights: [
                "Mature crop generating immediate cash flow",
                "Inter-cropping potential (Avocado, Cardamom)",
                "Low maintenance cost with local labor"
            ],
            returnText: "Annual Crop Income: ~₹3-4 Lakhs"
        },
        {
            title: "Agro-Tourism",
            area: "Homestay / Cottages",
            highlights: [
                "Coorg is a top weekend destination from Bangalore",
                "Experience-led tourism (Coffee picking tours)",
                "High demand for authentic plantation stays"
            ],
            returnText: "Rental Potential: ~₹1.5 Lakh / season"
        }
    ],

    createdAt: Date.now(),
    updatedAt: Date.now()
  }
];
