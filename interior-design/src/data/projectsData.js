import Interior1 from "../assets/interior1.jpg";
import Interior2 from "../assets/interior2.jpg";
import Interior3 from "../assets/interior3.jpg";
import Interior4 from "../assets/interior4.jpg";
import Interior5 from "../assets/interior5.jpg";
import Interior6 from "../assets/interior6.jpg";

export const projects = [
  {
    id: 1,
    title: "Luxury Living Room",
    type: "Residential",
    area: "2,500 sq.ft",
    budget: "Premium",
    before: Interior1,
    after: Interior2,
    desc: "A sophisticated residential transformation featuring elegant furnishings, ambient lighting and timeless aesthetics.",

    client: "Private Residence",
    location: "Ahmedabad, Gujarat",
    duration: "8 Weeks",

    highlights: [
      "Custom-made furniture",
      "Ambient lighting design",
      "Italian marble flooring",
      "Premium wall finishes",
    ],
  },

  {
    id: 2,
    title: "Modern Office Space",
    type: "Commercial",
    area: "4,000 sq.ft",
    budget: "Luxury",
    before: Interior3,
    after: Interior4,
    desc: "A productive and inspiring workplace designed with modern layouts and premium finishes.",

    client: "Tech Startup",
    location: "Mumbai, Maharashtra",
    duration: "12 Weeks",

    highlights: [
      "Open workspace concept",
      "Acoustic panel solutions",
      "Smart lighting automation",
      "Collaborative meeting zones",
    ],
  },

  {
    id: 3,
    title: "Modular Kitchen",
    type: "Kitchen",
    area: "350 sq.ft",
    budget: "Standard",
    before: Interior5,
    after: Interior6,
    desc: "Smart storage solutions combined with contemporary materials and functional elegance.",

    client: "Urban Family Home",
    location: "Pune, Maharashtra",
    duration: "4 Weeks",

    highlights: [
      "Soft-close cabinetry",
      "Quartz countertop",
      "Built-in appliances",
      "Space-saving storage",
    ],
  },
];