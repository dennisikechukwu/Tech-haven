import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Brand = [
    {
        id: 1,
        name: "ASUS ROG Zephyrus G14",
        image: "../images/page.jpg",
        category: "Gaming laptops",
        color: "black",
        price: "900",
        description: "The ASUS ROG Zephyrus G14 features a 10th Gen Intel Core i7-10750H processor, NVIDIA GeForce RTX 2070 Max-Q GPU, 16GB DDR4 RAM, 512GB SSD storage, a 15.6-inch FHD (1920 x 1080) 144Hz display, and runs on Windows 10 Home, with a sleek aluminum chassis weighing 2.1 kg and measuring 355 x 235 x 17.8 mm.",
        rating: 5,
        specs: {
            processor: "10th Gen Intel Core i7-10750H",
            gpu: "NVIDIA GeForce RTX 2070 Max-Q",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            display: "15.6-inch FHD (1920 x 1080) 144Hz",
            os: "Windows 10 Home",
            weight: "2.1 kg",
            dimensions: "355 x 235 x 17.8 mm"
        }
    },
    {
        id: 2,
        name: "Razer Blade 15",
        image: "../images/img17.jpg",
        category: "Gaming laptops",
        color: "black",
        price: "770",
        description: "The Razer Blade 15 is equipped with a 10th Gen Intel Core i7-10750H processor, NVIDIA GeForce RTX 2060 GPU, 16GB DDR4 RAM, 512GB NVMe SSD storage, a 15.6-inch FHD (1920 x 1080) 144Hz display, and runs on Windows 10 Home, weighing 2.5 kg and measuring 363 x 255 x 22.9 mm.",
        rating: 4,
        specs: {
            processor: "10th Gen Intel Core i7-10750H",
            gpu: "NVIDIA GeForce RTX 2060",
            ram: "16GB DDR4",
            storage: "512GB NVMe SSD",
            display: "15.6-inch FHD (1920 x 1080) 144Hz",
            os: "Windows 10 Home",
            weight: "2.5 kg",
            dimensions: "363 x 255 x 22.9 mm"
        }
    },
    {
        id: 3,
        name: "Acer Predator Helios 300",
        image: "../images/img18.jpg",
        category: "Gaming laptops",
        description: "The Acer Predator Helios 300 comes with a 10th Gen Intel Core i7-10750H processor, NVIDIA GeForce RTX 2060 GPU, 16GB DDR4 RAM, 512GB NVMe SSD storage, a 15.6-inch FHD (1920 x 1080) 144Hz display, and runs on Windows 10 Home. It features a sleek black design, weighing 2.1 kg and measuring 358 x 248 x 18 mm.",
        color: "black",
        price: "600",
        rating: 4,
        specs: {
            processor: "10th Gen Intel Core i7-10750H",
            gpu: "NVIDIA GeForce RTX 2060",
            ram: "16GB DDR4",
            storage: "512GB NVMe SSD",
            display: "15.6-inch FHD (1920 x 1080) 144Hz",
            os: "Windows 10 Home",
            weight: "2.1 kg",
            dimensions: "358 x 248 x 18 mm"
        }
    },
    {
        id: 4,
        name: "MSI GS66 Stealth",
        image: "../images/img19.jpg",
        category: "Gaming laptops",
        description: "The MSI GS66 Stealth comes with a 10th Gen Intel Core i7-10750H processor, NVIDIA GeForce RTX 2060 GPU, 16GB DDR4 RAM, 512GB NVMe SSD storage, a 15.6-inch FHD (1920 x 1080) 240Hz display, and Windows 10 Home. It features a sleek black design, weighing 2.1 kg and measuring 358 x 248 x 18 mm.",
        color: "black",
        price: "700",
        rating: 4,
        specs: {
            processor: "10th Gen Intel Core i7-10750H",
            gpu: "NVIDIA GeForce RTX 2060",
            ram: "16GB DDR4",
            storage: "512GB NVMe SSD",
            display: "15.6-inch FHD (1920 x 1080) 240Hz",
            os: "Windows 10 Home",
            weight: "2.1 kg",
            dimensions: "358 x 248 x 18 mm"
        }
    },
    {
        id: 5,
        name: "Dell G5 15 SE",
        image: "../images/img20.jpg",
        category: "Gaming laptops",
        description: "The Dell G5 15 SE is powered by an AMD Ryzen 7 4800H processor, AMD Radeon RX 5600M GPU, 16GB DDR4 RAM, 512GB NVMe SSD storage, a 15.6-inch FHD (1920 x 1080) 144Hz display, and runs on Windows 10 Home. It comes in a sleek white design, weighing 2.5 kg and measuring 364 x 254 x 21.6 mm.",
        color: "white",
        price: "800",
        rating: 4,
        specs: {
            processor: "AMD Ryzen 7 4800H",
            gpu: "AMD Radeon RX 5600M",
            ram: "16GB DDR4",
            storage: "512GB NVMe SSD",
            display: "15.6-inch FHD (1920 x 1080) 144Hz",
            os: "Windows 10 Home",
            weight: "2.5 kg",
            dimensions: "364 x 254 x 21.6 mm"
        }
    },
    {
        id: 6,
        name: "SteelSeries Arctis Pro",
        image: "../images/img28.jpg",
        category: "Gaming Headset",
        description: "The SteelSeries Arctis Pro features high-fidelity audio drivers, a comfortable and durable design, a ClearCast microphone, and customizable RGB lighting. It provides excellent sound quality for gaming and music.",
        color: "black",
        price: "80",
        rating: 5,
        specs: {
            drivers: "High-fidelity audio drivers",
            microphone: "ClearCast microphone",
            features: "Customizable RGB lighting"
        }
    },
    {
        id: 7,
        name: "HyperX Cloud II",
        image: "../images/img29.jpg",
        category: "Gaming Headset",
        description: "The HyperX Cloud II gaming headset offers virtual 7.1 surround sound, a noise-canceling microphone, memory foam ear pads, and a durable aluminum frame. It is designed for comfort and immersive audio during long gaming sessions.",
        color: "black",
        price: "60",
        rating: 4,
        specs: {
            sound: "Virtual 7.1 surround sound",
            microphone: "Noise-canceling microphone",
            comfort: "Memory foam ear pads",
            design: "Durable aluminum frame"
        }
    },
    {
        id: 8,
        name: "Razer BlackShark V2",
        image: "../images/img30.jpg",
        category: "Gaming Headset",
        description: "The Razer BlackShark V2 gaming headset features advanced passive noise cancellation, a detachable Razer HyperClear Cardioid Mic, and THX Spatial Audio for precise sound. It is lightweight and designed for competitive gaming.",
        color: "white",
        price: "50",
        rating: 4,
        specs: {
            noiseCancellation: "Advanced passive noise cancellation",
            microphone: "Detachable Razer HyperClear Cardioid Mic",
            sound: "THX Spatial Audio",
            design: "Lightweight"
        }
        
    },
    {
        id: 9,
        name: "Logitech G Pro X",
        image: "../images/img31.jpg",
        category: "Gaming Headset",
        description: "The Logitech G Pro X gaming headset is designed with professional-grade audio drivers, a detachable pro-grade microphone, and Blue VO!CE software for real-time voice filters. It provides comfort and performance for gamers.",
        color: "black",
        price: "40",
        rating: 4,
        specs: {
            drivers: "Professional-grade audio drivers",
            microphone: "Detachable pro-grade microphone",
            software: "Blue VO!CE real-time voice filters"
        }
        
    },
    {
        id: 10,
        name: "ASUS ROG Phone 7",
        image: "../images/img23.jpg",
        category: "Gaming Phone",
        description: "The ASUS ROG Phone 7 is equipped with a Qualcomm Snapdragon 888 processor, 16GB RAM, 512GB storage, a 6.78-inch AMOLED display with a 144Hz refresh rate, and a 6000mAh battery. It is designed for ultimate mobile gaming performance.",
        color: "black",
        price: "700",
        rating: 5,
        specs: {
            processor: "Qualcomm Snapdragon 888",
            ram: "16GB",
            storage: "512GB",
            display: "6.78-inch AMOLED, 144Hz",
            battery: "6000mAh"
        }
        
    },
    {
        id: 11,
        name: "Corsair HS70 Pro Wireless",
        image: "../images/img32.jpg",
        category: "Gaming Headset",
        description: "The Corsair HS70 Pro Wireless gaming headset offers 7.1 surround sound, low-latency 2.4GHz wireless connectivity, memory foam ear pads, and a durable build. It provides high-quality audio and comfort for extended gaming sessions.",
        color: "black",
        price: "80",
        rating: 4,
        specs: {
            sound: "7.1 surround sound",
            connectivity: "Low-latency 2.4GHz wireless",
            comfort: "Memory foam ear pads",
            design: "Durable build"
        }
        
    },
    {
        id: 12,
        name: "Black Shark 5 Pro",
        image: "../images/img24.jpg",
        category: "Gaming Phones",
        description: "The Black Shark 5 Pro is built for high-performance mobile gaming with a Qualcomm Snapdragon 870 processor, 12GB RAM, 256GB storage, a 6.67-inch AMOLED display with a 144Hz refresh rate, and a 4500mAh battery.",
        color: "black",
        price: "820",
        rating: 5,
        specs: {
            processor: "Qualcomm Snapdragon 870",
            ram: "12GB",
            storage: "256GB",
            display: "6.67-inch AMOLED, 144Hz",
            battery: "4500mAh"
        }
        
    },
    {
        id: 13,
        name: "Nubia Red Magic 8 Pro",
        image: "../images/img26.jpg",
        category: "Gaming Phones",
        description: "The Nubia Red Magic 8 Pro is designed for elite mobile gaming performance with a Qualcomm Snapdragon 8 Gen 1 processor, 16GB RAM, 512GB storage, a 6.8-inch AMOLED display with a 165Hz refresh rate, and a 5000mAh battery.",
        color: "black",
        price: "840",
        rating: 5,
        specs: {
            processor: "Qualcomm Snapdragon 8 Gen 1",
            ram: "16GB",
            storage: "512GB",
            display: "6.8-inch AMOLED, 165Hz",
            battery: "5000mAh"
        }
       
    },
    {
        id: 14,
        name: "Poco F4 GT",
        image: "../images/img25.jpg",
        category: "Gaming Phones",
        description: "The Poco F4 GT gaming phone features a Qualcomm Snapdragon 8 Gen 1 processor, 12GB RAM, 256GB storage, a 6.67-inch AMOLED display with a 120Hz refresh rate, and a 4700mAh battery. It offers powerful performance for gaming and daily use.",
        color: "black",
        price: "850",
        rating: 5,
        specs: {
            processor: "Qualcomm Snapdragon 8 Gen 1",
            ram: "12GB",
            storage: "256GB",
            display: "6.67-inch AMOLED, 120Hz",
            battery: "4700mAh"
        }
    },
    {
        id: 15,
        name: "OnePlus 10 Pro",
        image: "../images/img27.jpg",
        category: "Gaming Phones",
        description: "The OnePlus 10 Pro gaming phone comes with a Qualcomm Snapdragon 8 Gen 1 processor, 12GB RAM, 512GB storage, a 6.7-inch AMOLED display with a 120Hz refresh rate, and a 5000mAh battery. It provides top-tier performance and a smooth gaming experience.",
        color: "black",
        price: "900",
        rating: 5,
        specs: {
            processor: "Qualcomm Snapdragon 8 Gen 1",
            ram: "12GB",
            storage: "512GB",
            display: "6.7-inch AMOLED, 120Hz",
            battery: "5000mAh"
        }
    }
];

export default Brand;
