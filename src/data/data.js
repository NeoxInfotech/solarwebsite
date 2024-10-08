import cardimg from "../images/cardimg.png"
import cardimg2 from "../images/card-watermark.png"
import repair from "../images/repair.png"
import industrial from "../images/industrial.png"
import monitoring from "../images/monitoring.png"

export const cards = [
    {
        id: 1,
        head: "State-of-the-Art Supply Unit",
        body: "Our facility is equipped with the latest technology and machinery to ensure the supply of high-efficiency solar panels and components that meet international standards.",
        watermark: true,
        bg: "#5AA6D2",
        color: "#fff",
        buttsize: "20px",
        buttbg: "#fff",
        buttcolor: "#000"
    },
    {
        id: 2,
        head: "Advanced R&D Lab",
        body: "We invest in continuous research and development to innovate and improve our solar solutions, ensuring optimal performance and durability for all our products.",
        watermark: true,
        bg: "#fff",
        color: "#000",
        buttsize: "20px",
        buttbg: "#5AA6D2",
        buttcolor: "#fff"
    },
    {
        id: 3,
        head: "Quality Assurance & Testing",
        body: "Every product undergoes rigorous testing and quality checks to ensure safety, reliability, and long-lasting performance before reaching our customers.",
        watermark: true,
        bg: "#fff",
        color: "#000",
        buttsize: "20px",
        buttbg: "#5AA6D2",
        buttcolor: "#fff"
    },
]


export const cards2 = [
    {
        id: 1,
        img: monitoring,
        head: "Domestic System Installation",
        body: "Our domestic solar system installations are designed to provide efficient, clean energy for homes of all sizes. From initial consultation to installation, we offer customized solutions tailored to your energy needs. Our systems reduce your dependency on traditional electricity grids, cutting down on energy bills while reducing your carbon footprint.",
        watermark: false,
        bg: "#fff",
        color: "#000",
        buttsize: "15px",
        buttbg: "#000",
        buttcolor: "#fff"
    },
    {
        id: 2,
        img: industrial,
        head: "Industrial System Installation",
        body: "We offer large-scale solar energy systems for industries looking to transition to renewable energy. Our industrial installations are customized to meet the high energy demands of factories, warehouses, and other large facilities. From system design to installation and commissioning",
        watermark: false,
        bg: "#5AA6D2",
        color: "#fff",
        buttsize: "15px",
        buttbg: "#fff",
        buttcolor: "#000"
    },
    {
        id: 3,
        img: repair,
        head: "Repairing",
        body: "At Sri Sri Hareshwar Machinery Limited, we provide fast and reliable repair services for all types of solar energy systems. Whether it's a faulty inverter, damaged panels, or performance issues, our skilled technicians diagnose and fix problems swiftly. ",
        watermark: false,
        bg: "#fff",
        color: "#000",
        buttsize: "15px",
        buttbg: "#000",
        buttcolor: "#fff"
    },
    {
        id: 4,
        img: monitoring,
        head: " Monitoring",
        body: "Monitoring is a key component in ensuring the optimal performance of your solar energy system. We offer advanced monitoring services that allow you to track your system's energy generation in real-time. With our monitoring systems, you can detect issues early, optimize performance, and ensure your solar setup is operating at peak efficiency",
        watermark: false,
        bg: "#fff",
        color: "#000",
        buttsize: "15px",
        buttbg: "#000",
        buttcolor: "#fff"
    },
    {
        id: 5,
        img: repair,
        head: "Maintenance",
        body: "Regular maintenance is essential to ensure that your solar system operates efficiently and lasts longer. Our maintenance services include cleaning, inspections, and performance checks to prevent issues before they arise.",
        watermark: false,
        bg: "#fff",
        color: "#000",
        buttsize: "15px",
        buttbg: "#000",
        buttcolor: "#fff"
    },

]



// Initial appliance list with predefined watt options
export const initialAppliances = [
    { name: "PC / Laptop", options: [100, 200, 300, 400, 500] },
    { name: "Microwave Oven", options: [700, 1000, 1200, 1500] },
    { name: "Mixer / Grinder", options: [500, 600, 700] },
    { name: "Bulb", options: [15, 25, 40, 60, 100] },
    { name: "Air Conditioner (AC)", options: [1000, 1500, 2000, 2500, 3000] },
    { name: "Refrigerator", options: [100, 150, 200, 250, 300] },
    { name: "Ceiling Fan", options: [50, 60, 70, 80] },
    { name: "Table Fan", options: [40, 50, 60] },
    { name: "Water Heater", options: [1500, 2000, 2500] },
    { name: "Electric Iron", options: [500, 750, 1000, 1500] },
    { name: "Washing Machine", options: [500, 750, 1000, 1500, 2000] },
    { name: "Television", options: [100, 150, 200, 250, 300] },
    { name: "Toaster", options: [800, 1000, 1200, 1500] },
    { name: "Electric Kettle", options: [1000, 1500, 2000] },
    { name: "Room Heater", options: [1000, 1500, 2000, 2500] },
    { name: "Hair Dryer", options: [1000, 1200, 1500, 2000] },
    { name: "Dishwasher", options: [1200, 1500, 1800, 2000] },
    { name: "Oven", options: [1000, 1200, 1500, 1800] },
    { name: "Printer", options: [50, 100, 150, 200] },
    { name: "Vacuum Cleaner", options: [500, 600, 700, 1000] },
    { name: "Gaming Console", options: [200, 300, 400] },
    { name: "Sound System", options: [100, 200, 300] },
    { name: "Router", options: [10, 15, 20] }
];