const mongoose = require('mongoose');
const { Plant } = require('./src/mongo');

const samplePlants = [
  {
    name: "Tulsi",
    botanicalName: "Ocimum tenuiflorum",
    commonNames: [
      "Tulsi",
      "Holy Basil",
      "Tulasi",
      "Sacred Basil"
    ],
    category: [
      "Herbs",
      "Respiratory Health",
      "Immunity Boosting",
      "Hormonal Health",
      "Mental Health",
      "Antimicrobial"

    ],
    imageUrl: "https://m.media-amazon.com/images/I/711jDGV8ibL._UF894,1000_QL80_.jpg",
    modelUrl: "/models/tulsi/scene.gltf",
    habitat: {
      nativeRegion: "Indian subcontinent",
      growingConditions: {
        soil: "Well-drained, fertile soil with neutral pH",
        sunlight: "Full sunlight to partial shade",
        water: "Moderate watering, drought tolerant"
      }
    },
    medicinalUses: [
      {
        use: "Immunity Booster",
        description: "Enhances immune system and promotes overall health"
      },
      {
        use: "Anti-inflammatory & Antioxidant",
        description: "Contains compounds like eugenol and ursolic acid with anti-inflammatory and antioxidant properties"
      },
      {
        use: "Stress Relief",
        description: "Acts as an adaptogen to reduce stress and promote mental balance"
      },
      {
        use: "Respiratory Health",
        description: "Treats respiratory issues such as coughs, colds, and bronchitis"
      },
      {
        use: "Digestive Aid",
        description: "Helps in treating indigestion, bloating, and gastric issues"
      },
      {
        use: "Skin Care",
        description: "Used to treat acne and skin infections due to its antibacterial properties"
      }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions: "Sow seeds ¼ inch deep in well-prepared soil. Transplant seedlings when strong enough.",
        spacing: "12-18 inches apart"
      },
      watering: "Water moderately, ensuring soil is moist but not waterlogged.",
      fertilization: "Organic compost or a balanced organic fertilizer",
      pruning: "Regular pruning helps maintain shape and promotes leaf development. Pinch off flower buds.",
      pestsAndDiseases: "Resistant to pests but may encounter aphids, whiteflies, and spider mites. Neem oil spray can help manage pests."
    }
  },
  {
    name: "Aloe Vera",
    botanicalName: "Aloe barbadensis miller",
    commonNames: [
      "Aloe",
      "Aloe Vera"
    ],
    category: [
      "Herbs",
      "Skincare",
      "Edible Plant",
      "Pain Relief",
      "Antimicrobial"

    ],
    imageUrl: "https://www.shutterstock.com/image-photo/still-life-aloe-vera-plant-600nw-2332600615.jpg",
    modelUrl: "/models/aloe_vera_plant/scene.gltf",
    habitat: {
      nativeRegion: "Arabian Peninsula and other arid regions",
      growingConditions: {
        soil: "Well-drained sandy soil",
        sunlight: "Full sunlight",
        water: "Allow to dry completely between watering"
      }
    },
    medicinalUses: [
      {
        use: "Skin Hydration",
        description: "Moisturizes skin and promotes healing of wounds"
      },
      {
        use: "Digestive Health",
        description: "Aids digestion and soothes gastrointestinal issues"
      },
      {
        use: "Anti-inflammatory",
        description: "Reduces inflammation and redness on skin"
      },
      {
        use: "Hair Care",
        description: "Promotes healthy hair and scalp"
      }
    ],
    methodsOfCultivation: {
      propagation: "Offsets (pups) or seeds",
      planting: {
        instructions: "Plant offsets in well-draining soil. Water thoroughly after planting.",
        spacing: "12-18 inches apart"
      },
      watering: "Water infrequently, allowing soil to dry out completely between waterings.",
      fertilization: "Use a diluted liquid fertilizer during the growing season.",
      pruning: "Remove dead or damaged leaves at the base.",
      pestsAndDiseases: "Generally pest-resistant but may be susceptible to mealybugs. Use insecticidal soap if needed."
    },



  },



  {
    name: "Neem Tree",
    botanicalName: "Azadirachta indica",
    commonNames: [
      "Neem",
      "Indian Lilac"
    ],
    category:[
      "Trees",
      "Shrubs",
"Skincare",
"Hormonal Health",
"Antimicrobial"

    ] ,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLuBvub-baXVYObcppDgE47b3C2LiaMZvlQ&s",
    modelUrl: "/models/neem_tree/scene.gltf",
    habitat: {
      nativeRegion: "Indian subcontinent and tropical regions",
      growingConditions: {
        soil: "Well-drained soil; tolerates poor soils",
        sunlight: "Full sun",
        water: "Drought-resistant once established"
      }
    },
    medicinalUses: [
      {
        use: "Antimicrobial",
        description: "Effective against bacteria, viruses, and fungi"
      },
      {
        use: "Skin Health",
        description: "Used to treat acne, eczema, and other skin conditions"
      },
      {
        use: "Dental Care",
        description: "Traditionally used in oral hygiene products"
      },
      {
        use: "Blood Sugar Control",
        description: "May help in managing diabetes"
      }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: {
        instructions: "Sow seeds in well-prepared soil. Ensure good drainage.",
        spacing: "10-15 feet apart"
      },
      watering: "Water regularly until established; drought-tolerant afterward.",
      fertilization: "Apply organic fertilizer during the growing season.",
      pruning: "Prune to maintain shape and remove dead branches.",
      pestsAndDiseases: "Generally resistant but may encounter scale insects. Neem oil can help control pests."
    }
  },
  {
    name: "Moringa",
    botanicalName: "Moringa oleifera",
    commonNames: ["Drumstick Tree", "Horseradish Tree"],
    category: [
    "Herbs",
    "Immunity Boosting",
    "Edible Plant",
    "Hormonal Health",
    "Pain Relief"
    
],

    imageUrl: "https://urbano.in/wp-content/uploads/2020/08/moringa-oleifera-boom-moringas-finest.jpg",
    modelUrl: "/models/moringa.glb",
    habitat: {
      nativeRegion: "Indian subcontinent and Africa",
      growingConditions: {
        soil: "Well-drained, sandy loam soil",
        sunlight: "Full sunlight",
        water: "Moderate watering, drought-resistant"
      }
    },
    medicinalUses: [
      { use: "Nutritional Supplement", description: "Rich in vitamins, minerals, and antioxidants" },
      { use: "Anti-inflammatory", description: "Helps reduce inflammation in the body" },
      { use: "Diabetes Management", description: "May lower blood sugar levels" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: { instructions: "Plant seeds directly in soil or transplant seedlings.", spacing: "6-8 feet apart" },
      watering: "Water regularly during early growth, drought-tolerant afterward.",
      fertilization: "Use organic fertilizer in the growing season.",
      pruning: "Regular pruning helps promote branching.",
      pestsAndDiseases: "Resistant to pests; neem oil can help in case of aphid infestations."
    }
  },

  {
    name: "Ginger",
    botanicalName: "Zingiber officinale",
    commonNames: ["Ginger"],
    category: [
    "Herbs",
    "Digestive Health",
    "Immunity Boosting",
    "Edible Plant",
    "Mental Health",
    
    "Pain Relief",
    
]
,
    imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-sapling/i/p/c/annual-yes-yes-ginger-1-pot-elitegreen-original-imagjpahprwzn5kg.jpeg?q=90&crop=false",
    modelUrl: "/models/ginger.glb",
    habitat: {
      nativeRegion: "Southeast Asia",
      growingConditions: {
        soil: "Moist, well-drained soil",
        sunlight: "Partial shade",
        water: "Consistent watering, keep soil moist"
      }
    },
    medicinalUses: [
      { use: "Digestive Aid", description: "Helps with digestion and reduces nausea" },
      { use: "Anti-inflammatory", description: "Eases muscle pain and soreness" }
    ],
    methodsOfCultivation: {
      propagation: "Rhizomes",
      planting: { instructions: "Plant rhizomes with buds facing upward.", spacing: "12 inches apart" },
      watering: "Water consistently, especially in dry conditions.",
      fertilization: "Fertilize with organic compost or fertilizer.",
      pruning: "Harvest rhizomes when mature.",
      pestsAndDiseases: "Watch for root rot in overly wet conditions."
    }
  },

  {
    name: "Elderberry",
    botanicalName: "Sambucus nigra",
    commonNames: ["Elder"],
    category: [
    "Shrubs",
    "Respiratory Health",
    "Immunity Boosting",
    "Edible Plant"
]
,
    imageUrl: "https://img.freepik.com/premium-photo/american-elderberry-plant-pot-white-background_145644-68533.jpg",
    modelUrl: "/models/elderberry.glb",
    habitat: {
      nativeRegion: "Europe and North America",
      growingConditions: {
        soil: "Moist, well-drained soil",
        sunlight: "Full sunlight to partial shade",
        water: "Regular watering, especially in dry periods"
      }
    },
    medicinalUses: [
      { use: "Immune Support", description: "Helps boost the immune system" },
      { use: "Cold and Flu Relief", description: "Traditionally used to ease symptoms of cold and flu" }
    ],
    methodsOfCultivation: {
      propagation: "Cuttings or seeds",
      planting: { instructions: "Plant in moist, well-drained soil.", spacing: "6-8 feet apart" },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Fertilize in spring with organic compost.",
      pruning: "Prune annually to maintain shape and encourage fruiting.",
      pestsAndDiseases: "Resistant to most pests, but aphids may occasionally appear."
    }
  },

  {
    name: "Astragalus",
    botanicalName: "Astragalus membranaceus",
    commonNames: ["Astragalus"],
    category: [
    "Herbs",
    "Respiratory Health",
    "Immunity Boosting",
    "Mental Health",
    
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIzwmRi1ClJfgixNLY1v1X_5LzXv7x6LmqA&s",
    modelUrl: "/models/astragalus.glb",
    habitat: {
      nativeRegion: "Asia",
      growingConditions: {
        soil: "Sandy, well-drained soil",
        sunlight: "Full sun",
        water: "Moderate watering, drought-tolerant"
      }
    },
    medicinalUses: [
      { use: "Immune Booster", description: "Helps strengthen the immune system" },
      { use: "Anti-inflammatory", description: "Used to reduce inflammation" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Sow seeds directly in soil.", spacing: "12-18 inches apart" },
      watering: "Water moderately, allow soil to dry between watering.",
      fertilization: "Apply organic fertilizer during growing season.",
      pruning: "Prune to maintain shape.",
      pestsAndDiseases: "Resistant to pests and diseases."
    }
  },

  {
    name: "Hawthorn",
    botanicalName: "Crataegus monogyna",
    commonNames: ["Hawthorn"],
    category: [
    "Shrubs",
    "Respiratory Health",
    "Mental Health",
    "Cognitive Functions"
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHqZcGra47HGzpMc_wuHHOaSyqxbY-kTG1Q&s",
    modelUrl: "/models/hawthorn.glb",
    habitat: {
      nativeRegion: "Europe, North America, and Asia",
      growingConditions: {
        soil: "Well-drained soil",
        sunlight: "Full sun to partial shade",
        water: "Regular watering"
      }
    },
    medicinalUses: [
      { use: "Heart Health", description: "Used to support cardiovascular health" },
      { use: "Blood Pressure Management", description: "May help in regulating blood pressure" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: { instructions: "Plant seeds or cuttings in well-prepared soil.", spacing: "10-12 feet apart" },
      watering: "Water regularly, especially in dry conditions.",
      fertilization: "Fertilize annually with organic compost.",
      pruning: "Prune to maintain shape and remove dead wood.",
      pestsAndDiseases: "Resistant to most pests, but watch for aphids and caterpillars."
    }
  },

  {
    name: "Garlic",
    botanicalName: "Allium sativum",
    commonNames: ["Garlic"],
    category: [
    "Herbs",
    "Immunity Boosting",
    "Edible Plant",
    "Antimicrobial",
    
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihUpx-9881MJyDnXOcpuWAPHn0PkVyS9UZw&s",
    modelUrl: "/models/garlic.glb",
    habitat: {
      nativeRegion: "Central Asia",
      growingConditions: {
        soil: "Well-drained soil, rich in organic matter",
        sunlight: "Full sunlight",
        water: "Water regularly, but avoid overwatering"
      }
    },
    medicinalUses: [
      { use: "Antibacterial", description: "Has antibacterial and antiviral properties" },
      { use: "Heart Health", description: "Supports cardiovascular health" }
    ],
    methodsOfCultivation: {
      propagation: "Cloves",
      planting: { instructions: "Plant individual cloves in well-drained soil.", spacing: "4-6 inches apart" },
      watering: "Water regularly, but avoid waterlogging.",
      fertilization: "Apply compost or organic fertilizer.",
      pruning: "Remove flower stems to encourage bulb growth.",
      pestsAndDiseases: "Watch for root rot and fungal infections in overly wet soil."
    }
  },

  {
    name: "Echinacea",
    botanicalName: "Echinacea purpurea",
    commonNames: ["Purple Coneflower"],
    category: [
    "Herbs",
    "Respiratory Health",
    "Immunity Boosting",
    "Antimicrobial",
    
    "Mental Health",
    
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeLLvBZot7qgl2z86ecHeNP8UV7ettt-tcg&s",
    modelUrl: "/models/echinacea.glb",
    habitat: {
      nativeRegion: "North America",
      growingConditions: {
        soil: "Well-drained soil",
        sunlight: "Full sunlight",
        water: "Moderate watering"
      }
    },
    medicinalUses: [
      { use: "Immune Support", description: "Enhances immune system" },
      { use: "Cold Relief", description: "Eases symptoms of colds" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or divisions",
      planting: { instructions: "Sow seeds in well-prepared soil.", spacing: "12-18 inches apart" },
      watering: "Water regularly until established.",
      fertilization: "Fertilize lightly during growing season.",
      pruning: "Deadhead flowers to encourage more blooms.",
      pestsAndDiseases: "Generally pest-resistant."
    }
  },

  {
    name: "Turmeric",
    botanicalName: "Curcuma longa",
    commonNames: ["Turmeric"],
    category: [
    "Herbs",
    "Skincare",
    "Immunity Boosting",
    "Edible Plant",
    "Mental Health",
    
    "Pain Relief",
    
    "Antimicrobial",
    
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugOArlzNyxbfWal_-zUKiKOrn_OiA1hFHhg&s",
    modelUrl: "/models/turmeric.glb",
    habitat: {
      nativeRegion: "India",
      growingConditions: {
        soil: "Loamy, well-drained soil",
        sunlight: "Partial shade to full sun",
        water: "Regular watering"
      }
    },
    medicinalUses: [
      { use: "Anti-inflammatory", description: "Contains curcumin, a natural anti-inflammatory compound" },
      { use: "Antioxidant", description: "Helps fight oxidative stress" }
    ],
    methodsOfCultivation: {
      propagation: "Rhizomes",
      planting: { instructions: "Plant rhizomes 2-3 inches deep in soil.", spacing: "12 inches apart" },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Apply organic compost or fertilizer.",
      pruning: "Harvest rhizomes when mature.",
      pestsAndDiseases: "Generally pest-resistant, but may occasionally suffer from root rot in overly wet conditions."
    }
  },
  {
    name: "Chilli Pepper",
    botanicalName: "Capsicum annuum",
    commonNames: ["Chili", "Capsicum"],
    category: [
    "Herbs",
    "Edible Plant"
]
,
    imageUrl: "https://www.shutterstock.com/image-photo/red-hot-chilli-pepper-flower-600nw-1849044037.jpg",
    modelUrl: "/models/chilli-pepper.glb",
    habitat: {
      nativeRegion: "Central and South America",
      growingConditions: {
        soil: "Well-drained, fertile soil",
        sunlight: "Full sun",
        water: "Regular watering, but avoid waterlogging"
      }
    },
    medicinalUses: [
      { use: "Pain Relief", description: "Capsaicin is used in topical pain relief treatments" },
      { use: "Metabolism Booster", description: "Increases metabolic rate and fat burning" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Sow seeds indoors and transplant after the last frost.", spacing: "18-24 inches apart" },
      watering: "Water regularly, especially in dry conditions.",
      fertilization: "Use balanced fertilizer during growing season.",
      pruning: "Prune to encourage bushier growth.",
      pestsAndDiseases: "Watch for aphids and fungal diseases."
    }
  },

  {
    name: "Chamomile",
    botanicalName: "Matricaria chamomilla",
    commonNames: ["German Chamomile", "Wild Chamomile"],
    category: [
    "Herbs",
    "Skincare",
    "Digestive Health",
    "Edible Plant",
    "Hormonal Health",
    "Mental Health",
    
    "Pain Relief",
    
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5t2IPKXYvGFphiTnIu4HKYp31froSloOxg&s",
    modelUrl: "/models/chamomile.glb",
    habitat: {
      nativeRegion: "Europe and Western Asia",
      growingConditions: {
        soil: "Well-drained, sandy soil",
        sunlight: "Full sunlight",
        water: "Moderate watering"
      }
    },
    medicinalUses: [
      { use: "Calming", description: "Promotes relaxation and aids sleep" },
      { use: "Digestive Aid", description: "Soothes the digestive system" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Sow seeds directly in the ground.", spacing: "12 inches apart" },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Use light fertilizer if needed.",
      pruning: "Deadhead flowers to encourage more blooms.",
      pestsAndDiseases: "Resistant to most pests."
    }
  },

  {
    name: "Hibiscus",
    botanicalName: "Hibiscus rosa-sinensis",
    commonNames: ["Hibiscus"],
    category: [
    "Herbs",
    "Skincare",
    "Hormonal Health",
    "Immunity Boosting",
    "Edible Plant"
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOxIpjxiv_cwRHcc-kgNKN2PnEZr7LllykA&s",
    modelUrl: "/models/hibiscus.glb",
    habitat: {
      nativeRegion: "Tropical regions",
      growingConditions: {
        soil: "Well-drained soil, rich in organic matter",
        sunlight: "Full sun to partial shade",
        water: "Regular watering, especially during dry conditions"
      }
    },
    medicinalUses: [
      { use: "Blood Pressure", description: "May help lower blood pressure" },
      { use: "Antioxidant", description: "Rich in antioxidants that promote overall health" }
    ],
    methodsOfCultivation: {
      propagation: "Cuttings",
      planting: { instructions: "Plant cuttings in well-drained soil.", spacing: "6-8 feet apart" },
      watering: "Water regularly, avoid waterlogging.",
      fertilization: "Apply balanced fertilizer during growing season.",
      pruning: "Prune regularly to maintain shape and encourage blooms.",
      pestsAndDiseases: "Watch for aphids, mealybugs, and leaf spots."
    }
  },

  {
    name: "Lavender",
    botanicalName: "Lavandula angustifolia",
    commonNames: ["English Lavender"],
    category: [
    "Shrubs",
    "Skincare",
    "Hormonal Health",
    "Mental Health",
   
    "Pain Relief",
    
    "Antimicrobial",
    
]
,
    imageUrl: "https://media.istockphoto.com/id/118312085/photo/lavender-herb-plant.jpg?s=612x612&w=0&k=20&c=10_QhBhDJbjvk7ULX5qDb3oxsqBHVOW1bs6mCEIw5Hs=",
    modelUrl: "/models/lavender.glb",
    habitat: {
      nativeRegion: "Mediterranean",
      growingConditions: {
        soil: "Well-drained, sandy or rocky soil",
        sunlight: "Full sunlight",
        water: "Low water needs, drought-tolerant"
      }
    },
    medicinalUses: [
      { use: "Calming", description: "Used to reduce stress and anxiety" },
      { use: "Skin Health", description: "Helps soothe skin irritations" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: { instructions: "Plant in well-drained soil.", spacing: "18-24 inches apart" },
      watering: "Water sparingly, let soil dry between watering.",
      fertilization: "Light fertilization during growing season.",
      pruning: "Prune after flowering to encourage new growth.",
      pestsAndDiseases: "Resistant to most pests, but root rot can occur in wet soil."
    }
  },

  {
    name: "Nettle",
    botanicalName: "Urtica dioica",
    commonNames: ["Stinging Nettle"],
    category: [
    "Shrubs",
    "Immunity Boosting",
    "Edible Plant",
    "Pain Relief",
   
]
,
    imageUrl: "https://img.freepik.com/premium-photo/young-nettle-leaves-pot-rustic-background-stinging-nettles-urtica_629685-9056.jpg",
    modelUrl: "/models/nettle.glb",
    habitat: {
      nativeRegion: "Europe, Asia, and North America",
      growingConditions: {
        soil: "Moist, fertile soil",
        sunlight: "Partial shade",
        water: "Regular watering"
      }
    },
    medicinalUses: [
      { use: "Anti-inflammatory", description: "Helps reduce inflammation and joint pain" },
      { use: "Allergy Relief", description: "May ease symptoms of hay fever" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or root divisions",
      planting: { instructions: "Plant in moist, fertile soil.", spacing: "12-18 inches apart" },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Apply compost or organic fertilizer.",
      pruning: "Harvest leaves regularly for best growth.",
      pestsAndDiseases: "Generally pest-resistant."
    }
  },

  {
    name: "Flax",
    botanicalName: "Linum usitatissimum",
    commonNames: ["Flax", "Linseed"],
    category: [
    "Herbs",
    "Digestive Health",
    "Edible Plant",
    "Hormonal Health"
]
,
    imageUrl: "https://img.freepik.com/premium-photo/photo-flax-flower-pot-isolated-white-background_847439-98635.jpg",
    modelUrl: "/models/flax.glb",
    habitat: {
      nativeRegion: "Western Asia and Mediterranean",
      growingConditions: {
        soil: "Well-drained, fertile soil",
        sunlight: "Full sunlight",
        water: "Moderate watering"
      }
    },
    medicinalUses: [
      { use: "Heart Health", description: "Rich in omega-3 fatty acids, supports cardiovascular health" },
      { use: "Digestive Health", description: "Promotes digestive health due to high fiber content" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Sow seeds directly in soil.", spacing: "4-6 inches apart" },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Apply organic fertilizer during growing season.",
      pruning: "Harvest when seed pods turn brown.",
      pestsAndDiseases: "Generally pest-resistant."
    }
  },

  {
    name: "Artichoke",
    botanicalName: "Cynara scolymus",
    commonNames: ["Artichoke"],
    category: [
    "Herbs",
    "Digestive Health",
    "Edible Plant"
]
,
    imageUrl: "https://img.freepik.com/premium-photo/artichoke-plant-pot-white-background_145644-23851.jpg",
    modelUrl: "/models/artichoke.glb",
    habitat: {
      nativeRegion: "Mediterranean",
      growingConditions: {
        soil: "Rich, well-drained soil",
        sunlight: "Full sunlight",
        water: "Regular watering"
      }
    },
    medicinalUses: [
      { use: "Liver Health", description: "Supports liver function and digestion" },
      { use: "Antioxidant", description: "Rich in antioxidants that promote overall health" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or divisions",
      planting: { instructions: "Plant in rich, well-drained soil.", spacing: "3-4 feet apart" },
      watering: "Water regularly, especially in dry conditions.",
      fertilization: "Fertilize with compost or organic fertilizer.",
      pruning: "Harvest buds before they open.",
      pestsAndDiseases: "Watch for aphids and caterpillars."
    }
  },

  {
    name: "Beetroot",
    botanicalName: "Beta vulgaris",
    commonNames: ["Beet", "Beetroot"],
    category: [
    "Herbs",
    "Digestive Health",
    "Edible Plant"
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMP6KCF7GEZFqw7Oeg3F24yp04O7CkbqE-A&s",
    modelUrl: "/models/beetroot.glb",
    habitat: {
      nativeRegion: "Mediterranean",
      growingConditions: {
        soil: "Loamy, well-drained soil",
        sunlight: "Full sun",
        water: "Moderate watering"
      }
    },
    medicinalUses: [
      { use: "Blood Health", description: "Rich in iron, supports blood production" },
      { use: "Heart Health", description: "May help lower blood pressure" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Sow seeds directly in the ground.", spacing: "12 inches apart" },
      watering: "Water regularly to keep soil moist.",
      fertilization: "Fertilize with organic compost during growing season.",
      pruning: "Harvest roots when they reach the desired size.",
      pestsAndDiseases: "Watch for leaf miners and fungal diseases."
    }
  },

  {
    name: "Fennel",
    botanicalName: "Foeniculum vulgare",
    commonNames: ["Sweet Fennel", "Florence Fennel"],
    category: [
    "Herbs",
    "Digestive Health",
    "Edible Plant"
]
,
    imageUrl: "https://img.freepik.com/premium-photo/fennel-plant-pot-isolated-white-background_1057-30275.jpg",
    modelUrl: "/models/fennel.glb",
    habitat: {
      nativeRegion: "Mediterranean",
      growingConditions: {
        soil: "Well-drained, fertile soil",
        sunlight: "Full sun",
        water: "Moderate watering"
      }
    },
    medicinalUses: [
      { use: "Digestive Health", description: "Helps reduce bloating and digestive discomfort" },
      { use: "Respiratory Health", description: "Used to soothe coughs and bronchitis" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Sow seeds directly in the ground.", spacing: "12-18 inches apart" },
      watering: "Water regularly, especially during dry spells.",
      fertilization: "Apply balanced fertilizer during growing season.",
      pruning: "Harvest bulbs when they reach full size.",
      pestsAndDiseases: "Watch for aphids and caterpillars."
    }
  },

  {
    name: "Cinnamon",
    botanicalName: "Cinnamomum verum",
    commonNames: ["True Cinnamon"],
    category: [
    "Herbs",
    "Digestive Health",
    "Edible Plant",
    "Pain Relief",
    
    "Antimicrobial",
    
]
,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHE125Gx-p8d8KwWRFa2quQasbCDNq84IXg&s",
    modelUrl: "/models/cinnamon.glb",
    habitat: {
      nativeRegion: "Sri Lanka",
      growingConditions: {
        soil: "Well-drained, loamy soil",
        sunlight: "Partial to full sun",
        water: "Regular watering, avoid waterlogging"
      }
    },
    medicinalUses: [
      { use: "Blood Sugar Control", description: "Helps regulate blood sugar levels" },
      { use: "Antioxidant", description: "Rich in antioxidants that promote overall health" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: { instructions: "Plant in well-drained soil.", spacing: "12-15 feet apart" },
      watering: "Water regularly, but do not allow soil to stay waterlogged.",
      fertilization: "Fertilize with organic compost.",
      pruning: "Prune regularly to maintain tree shape.",
      pestsAndDiseases: "Resistant to most pests."
    }
  },

  {
    name: "Dandelion",
    botanicalName: "Taraxacum officinale",
    commonNames: ["Dandelion"],
    category: [
    "Herbs",
    "Digestive Health",
    "Edible Plant",
    "Pain Relief",

]
,
    imageUrl: "https://static.vecteezy.com/system/resources/previews/027/201/873/non_2x/of-dandelion-flower-in-pot-isolated-on-white-background-generative-ai-photo.jpg",
    modelUrl: "/models/dandelion.glb",
    habitat: {
      nativeRegion: "Europe, Asia, North America",
      growingConditions: {
        soil: "Well-drained soil",
        sunlight: "Full sun to partial shade",
        water: "Moderate watering"
      }
    },
    medicinalUses: [
      { use: "Detoxification", description: "Supports liver health and detoxification" },
      { use: "Digestive Aid", description: "Stimulates appetite and aids digestion" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds",
      planting: { instructions: "Sow seeds directly on soil surface.", spacing: "12 inches apart" },
      watering: "Water moderately, avoid waterlogging.",
      fertilization: "Apply organic fertilizer if needed.",
      pruning: "Harvest leaves before the plant flowers for best flavor.",
      pestsAndDiseases: "Generally pest-resistant."
    }
  },

  {
    name: "Orange Tree",
    botanicalName: "Citrus sinensis",
    commonNames: ["Orange"],
    category: [
    "Trees",
    "Edible Plant"
]
,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/RQ5gPz6Z8zTCF4zA7Hjjd6.jpg",
    modelUrl: "/models/orange-tree.glb",
    habitat: {
      nativeRegion: "Southeast Asia",
      growingConditions: {
        soil: "Well-drained, sandy soil",
        sunlight: "Full sun",
        water: "Regular watering, especially during fruiting"
      }
    },
    medicinalUses: [
      { use: "Vitamin C", description: "Rich source of vitamin C, supports immune system" },
      { use: "Skin Health", description: "Promotes healthy skin due to high antioxidant content" }
    ],
    methodsOfCultivation: {
      propagation: "Grafting or seeds",
      planting: { instructions: "Plant in well-drained soil.", spacing: "15-20 feet apart" },
      watering: "Water regularly, especially in hot conditions.",
      fertilization: "Apply citrus fertilizer during growing season.",
      pruning: "Prune to maintain size and shape.",
      pestsAndDiseases: "Watch for citrus greening, aphids, and spider mites."
    }
  },

  {
    name: "Lemon Tree",
    botanicalName: "Citrus limon",
    commonNames: ["Lemon"],
    category: [
    "Trees",
    "Edible Plant"
]
,
    imageUrl: "https://m.media-amazon.com/images/I/61xwAHVYZvL._AC_UF1000,1000_QL80_.jpg",
    modelUrl: "/models/lemon-tree.glb",
    habitat: {
      nativeRegion: "South Asia",
      growingConditions: {
        soil: "Well-drained, sandy soil",
        sunlight: "Full sun",
        water: "Regular watering, avoid waterlogging"
      }
    },
    medicinalUses: [
      { use: "Immune Support", description: "Rich in vitamin C, boosts immune function" },
      { use: "Detoxification", description: "Promotes detoxification and liver health" }
    ],
    methodsOfCultivation: {
      propagation: "Grafting or seeds",
      planting: { instructions: "Plant in well-drained soil.", spacing: "12-15 feet apart" },
      watering: "Water regularly, especially in dry conditions.",
      fertilization: "Apply citrus fertilizer during growing season.",
      pruning: "Prune to maintain shape and encourage fruiting.",
      pestsAndDiseases: "Watch for aphids, mites, and fungal diseases."
    }
  },

  {
    name: "Mugwort",
    botanicalName: "Artemisia vulgaris",
    commonNames: ["Mugwort"],
    category: [
    "Herbs",
    "Respiratory Health",
    "Hormonal Health"
]
,
    imageUrl: "https://www.shutterstock.com/image-photo/black-plastic-pot-fresh-green-260nw-2435328405.jpg",
    modelUrl: "/models/mugwort.glb",
    habitat: {
      nativeRegion: "Europe and Asia",
      growingConditions: {
        soil: "Well-drained, sandy soil",
        sunlight: "Full sun to partial shade",
        water: "Low water needs"
      }
    },
    medicinalUses: [
      { use: "Digestive Health", description: "Helps improve digestion and reduce bloating" },
      { use: "Calming", description: "Used in traditional medicine to promote relaxation and calm" }
    ],
    methodsOfCultivation: {
      propagation: "Seeds or cuttings",
      planting: { instructions: "Plant in well-drained soil.", spacing: "12-18 inches apart" },
      watering: "Water sparingly, drought-tolerant.",
      fertilization: "Fertilize sparingly, if at all.",
      pruning: "Prune to control size and shape.",
      pestsAndDiseases: "Resistant to most pests and diseases."
    }
  }
];

async function seedPlants() {
  try {
    await mongoose.connect("mongodb+srv://Rishii:HerbalHerbal@herbalgarden.hzysmqf.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Clear existing plants
    await Plant.deleteMany({});
    console.log('Cleared existing plants');

    // Insert sample plants
    const result = await Plant.insertMany(samplePlants);
    console.log(`${result.length} plants inserted`);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding plants:', error);
  }
}

seedPlants();
