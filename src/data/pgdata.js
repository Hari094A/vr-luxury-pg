export const pgInfo = {
  name: "Venkata Ravanaiah Luxury PG",
  shortName: "VR Luxury PG",

  location:
    "Thuljabhavani Nagar, Lane No. 8, Tulaja Bhawani Nagar, Kharadi, Pune, Maharashtra 411014",

  phone: "8985260247",

  description:
    "A clean, comfortable and professionally managed PG accommodation in Kharadi, Pune, suitable for students and working professionals.",

  security:
    "24-hour CCTV surveillance with a disciplined and peaceful residential environment.",

  deposit: {
    amount: 2000,
    refundableAmount: 1000,
    noticePeriod: "1 month",
  },

  rooms: [
    {
      id: "single-attached",
      title: "Single Sharing",
      price: 13500,
      period: "month",
      bathroom: "Attached bathroom",
      balcony: "Not specified",
      capacity: 1,
      available: true,
    },

    {
      id: "double-attached",
      title: "Double Sharing",
      price: 7500,
      period: "month",
      bathroom: "Attached bathroom",
      balcony: "Available",
      capacity: 2,
      available: true,
    },

    {
      id: "double-combined",
      title: "Double Sharing",
      price: 7000,
      period: "month",
      bathroom: "Combined bathroom",
      balcony: "Available",
      capacity: 2,
      available: true,
    },

    {
      id: "triple-attached",
      title: "Triple Sharing",
      price: 7000,
      period: "month",
      bathroom: "Attached bathroom",
      balcony: "Available",
      capacity: 3,
      available: true,
    },

    {
      id: "hall-kitchen",
      title: "Hall + Kitchen Bed",
      price: 6500,
      period: "month",
      bathroom: "Combined bathroom",
      balcony: "Not specified",
      capacity: 1,
      available: true,
    },
  ],

  roomFeatures: [
    "Bed",
    "Pillow",
    "Personal locker",
    "Mini cupboard",
    "Windows with curtains",
    "Daily cleaning",
  ],

  facilities: [
    {
      title: "Wi-Fi",
      description: "Wi-Fi available throughout the rooms with good range.",
    },
    {
      title: "Food / Mess",
      description:
        "Morning and night meals Monday to Friday. Morning, afternoon and night meals on Saturday and Sunday.",
    },
    {
      title: "Washing Machine",
      description: "Washing machine facility available for residents.",
    },
    {
      title: "24/7 CCTV",
      description:
        "The PG is monitored through CCTV surveillance throughout the day.",
    },
    {
      title: "Purified Drinking Water",
      description:
        "Fresh purified water with hot, cold and normal water facilities.",
    },
    {
      title: "Parking",
      description:
        "Parking is currently occupied. Availability will be updated when a garage space becomes free.",
    },
  ],

  foodTimings: {
    weekday: "8:00 AM – 10:00 AM and 8:00 PM – 10:00 PM",
    weekend:
      "Morning, afternoon and night meals available on Saturday and Sunday",
    lateEntry:
      "Food can be kept for late residents. Please avoid disturbing the household after sleeping hours.",
  },

  rules: [
    "No fixed entry or exit restriction because residents may have different duty timings.",
    "After 10:30 PM, residents should close the gate after entering or leaving.",
    "Friends are allowed during daytime for up to 2 hours.",
    "Outside visitors are not permitted at night for security reasons.",
    "Residents should cooperate with daily cleaning between approximately 10:00 AM and 12:00 PM.",
    "Smoking and alcohol consumption are not allowed inside the PG.",
    "Residents should not bring friends who disturb other occupants.",
    "One month notice is required for the refundable deposit amount.",
    "Once a room is booked and payment is made, cancellation is non-refundable.",
  ],

  dailySharing: {
    single: 550,
    double: 450,
  },
};
