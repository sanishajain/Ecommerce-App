import "./css/products.css";

export const Products = [
    {
        id: 1,
        name: "Laptop",
        price: 80000,
        imageview: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg", // Main thumbnail (first image)
        image: [
            "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
            "/realme-gt7-pro-orange.png" // Side view (add more as needed)
        ],
        description: "A high-performance laptop suitable for all your computing needs.",
        fulldescription: "This laptop features a powerful Intel i7 processor, 16GB RAM, 512GB SSD storage, and a 15.6-inch Full HD display. Battery backup up to 8 hours, lightweight design, backlit keyboard, and pre-installed Windows 11 for smooth performance."
    },
    {
        id: 2,
        name: "Smartphone",
        price: 50000,
        imageview: "/realme-gt7-pro-orange.png", // Main thumbnail (first image)
        image: [
            "/realme-gt7-pro-orange.png"
            // Add more images here for gallery, e.g., "/smartphone-back.jpg", "/smartphone-camera.jpg"
        ],
        description: "A latest model smartphone with advanced features.",
        fulldescription: "Equipped with Snapdragon 8 Gen processor, 12GB RAM, 256GB storage, and a 6.7-inch AMOLED display with 120Hz refresh rate. 5000mAh battery with 65W fast charging, 108MP rear camera + 32MP front camera, 5G support, and in-display fingerprint sensor."
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        imageview: "/image.png", // Main thumbnail (first image)
        image: [
            "/image.png"
            // Add more images here for gallery, e.g., "/headphones-side.jpg", "/headphones-charging.jpg"
        ],
        description: "Noise-cancelling headphones for immersive sound experience.",
        fulldescription: "Over-ear wireless headphones with 40mm drivers, active noise cancellation, and up to 25 hours battery life. Bluetooth 5.0 connectivity, built-in microphone for calls, cushioned ear pads for comfort, and Type-C fast charging."
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 10000,
        imageview: "/smart.avif", // Main thumbnail (first image)
        image: [
            "/smart.avif"
            // Add more images here for gallery, e.g., "/smartwatch-side.jpg", "/smartwatch-screen.jpg"
        ],
        description: "A stylish smartwatch to keep you connected on the go.",
        fulldescription: "1.4-inch AMOLED touch display, heart rate monitoring, SpO2 sensor, sleep tracking, and multiple workout modes. Battery lasts up to 10 days, IP68 water resistance, Bluetooth calling, and notification sync with Android/iOS devices."
    },
    {
        id: 5,
        name: "Camera",
        price: 40000,
        imageview: "/image.png", // Main thumbnail (first image)
        image: [
            "/image.png"
            // Add more images here for gallery, e.g., "/camera-lens.jpg", "/camera-back.jpg"
        ],
        description: "Capture your moments with this high-resolution camera.",
        fulldescription: "24.2MP APS-C sensor, 4K video recording at 30fps, and dual-lens kit (18-55mm & 55-250mm). Built-in WiFi & Bluetooth for instant sharing, 3-inch flip touchscreen, and up to 600 shots per charge. Perfect for both beginners and professionals."
    },
    {
        id: 6,
        name: "Tablet",
        price: 20000,
        imageview: "/tab.avif", // Main thumbnail (first image from image array)
        image: [
            "/tab.avif"
            // Add more images here for gallery, e.g., "/tablet-side.jpg", "/tablet-back.jpg"
        ],
        description: "A lightweight tablet perfect for entertainment and productivity.",
        fulldescription: "10.5-inch Full HD display, Octa-core processor, 6GB RAM, and 128GB expandable storage. 8MP rear + 5MP front camera, 7040mAh battery, dual stereo speakers, and stylus support for note-taking & drawing."
    },
    {
        id: 7,
        name: "Gaming Console",
        price: 30000,
        imageview: "/game.avif", // Main thumbnail (first image from image array)
        image: [
            "/game.avif"
            // Add more images here for gallery, e.g., "/console-controller.jpg", "/console-side.jpg"
        ],
        description: "Experience next-gen gaming with this powerful console.",
        fulldescription: "Comes with 4K HDR gaming support, 1TB SSD storage, and ultra-fast load times. Supports ray tracing, 120fps gameplay, and backward compatibility for older titles. Includes wireless controller and online multiplayer support."
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        price: 5000,
        imageview: "/bl.webp", // Main thumbnail (first image from image array)
        image: [
            "/bl.webp"
            // Add more images here for gallery, e.g., "/speaker-top.jpg", "/speaker-side.jpg"
        ],
        description: "Portable Bluetooth speaker with excellent sound quality.",
        fulldescription: "Delivers 20W output with deep bass, 12 hours battery life, and Bluetooth 5.1 for stable connection. IPX7 waterproof design, built-in microphone for hands-free calls, and Type-C charging support."
    },
    {
        id: 9,
        name: "External Hard Drive",
        price: 10000,
        imageview: "/h.webp", // Main thumbnail (first image from image array)
        image: [
            "/h.webp"
            // Add more images here for gallery, e.g., "/harddrive-side.jpg"
        ],
        description: "Store all your important files with this reliable external hard drive.",
        fulldescription: "1TB storage capacity, USB 3.1 for high-speed data transfer up to 120MB/s. Compact and durable design, plug-and-play compatible with Windows, Mac, and Linux. Shock-resistant casing for extra durability."
    },
    {
        id: 10,
        name: "Wireless Mouse",
        price: 2000,
        imageview: "/m.webp", // Main thumbnail (first image from image array)
        image: [
            "/m.webp"
            // Add more images here for gallery, e.g., "/mouse-top.jpg", "/mouse-bottom.jpg"
        ],
        description: "Ergonomic wireless mouse for comfortable use.",
        fulldescription: "2.4GHz wireless connectivity with up to 10 meters range. Adjustable DPI (800/1200/1600), silent clicks, and ergonomic design for long usage. Powered by AA battery lasting up to 12 months."
    },
    {
        id: 11,
        name: "Camera",
        price: 30000,
        imageview: "/c.webp", // Main thumbnail (first image from image array)
        image: [
            "/c.webp"
            // Add more images here for gallery, e.g., "/camera-lens.jpg", "/camera-body.jpg"
        ],
        description: "Capture your moments with this high-resolution camera.",
        fulldescription: "20MP CMOS sensor, 1080p video at 60fps, and WiFi-enabled for easy transfers. Comes with interchangeable lens support, lightweight build, and rechargeable battery providing 500+ shots."
    },
    {
        id: 12,
        name: "Tablet",
        price: 25000,
        imageview: "/t.jpeg", // Main thumbnail (first image from image array)
        image: [
            "/t.jpeg"
            // Add more images here for gallery, e.g., "/tablet-back.jpg", "/tablet-screen.jpg"
        ],
        description: "A lightweight tablet perfect for entertainment and productivity.",
        fulldescription: "11-inch Liquid Retina display, 8GB RAM, 256GB storage, and Apple Pencil support. 12MP rear + 7MP front camera, 10-hour battery life, and quad-speaker system for immersive sound."
    },
    {
        id: 13,
        name: "Gaming Console",
        price: 35000,
        imageview: "/g.webp", // Main thumbnail (first image from image array)
        image: [
            "/g.webp"
            // Add more images here for gallery, e.g., "/console-vr.jpg", "/console-setup.jpg"
        ],
        description: "Experience next-gen gaming with this powerful console.",
        fulldescription: "Supports 8K output, 1TB SSD, ultra-low latency, and VR-ready. Comes with dual-sense adaptive trigger controller, 3D audio technology, and exclusive AAA game titles support."
    },
    {
        id: 14,
        name: "Bluetooth Speaker",
        price: 6000,
        imageview: "/b.jpg", // Main thumbnail (first image from image array)
        image: [
            "/b.jpg"
            // Add more images here for gallery, e.g., "/speaker-bass.jpg", "/speaker-waterproof.jpg"
        ],
        description: "Portable Bluetooth speaker with excellent sound quality.",
        fulldescription: "25W RMS sound with dual bass radiators, 18 hours playback, and voice assistant support. IPX6 splash-proof, built-in power bank for charging devices, and multiple device pairing option."
    }
];