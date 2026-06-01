import { buildCloudinaryUrl } from "../utils/cloudinary.util";

export const HOME = {
    section1: {
        title: ["Heritage", "Technology", "The Soul of", "Tamil Calligraphy", "உயிர் மெய்யாய்", "வாழும் தமிழ்!"],
        description: "Personalized Gifts, Custom Name Boards, Laser-Crafted Decor and Timeless Tamil Calligraphy Creations that Transform Names, Words, and Memories into Lasting Keepsakes for Generations to Come",
        cta: "Explore Collection",
        image: buildCloudinaryUrl("v1779973806/WhatsApp_Image_2026-05-27_at_3.39.20_PM_1_zwae5u.jpg"),
        imgAlt: "Hero image showcasing the fusion of traditional Tamil calligraphy and modern laser engraving technology, representing the essence of Chithu Vibes' craftsmanship",
        imgDes: "A Celebration Of Our Roots, Etched For Eternity",
    },

    section2: {
        title: ["Signature Collections", "Curated Selection"],
        cardData: [
            { title: "Wooden Engravings", desc: "Celebrate life’s special moments with beautifully detailed wood-engraved gifts", price: "From ₹600", href: "/gift-products", img: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"), alt: "Teak wood laser-engraved with classical Tamil literature by Chithu Vibes" },
            { title: "Acrylic Masterpieces", desc: "Modern luminosity meeting traditional script for contemporary spaces", price: "From ₹1,000", href: "/calligraphy-products", img: buildCloudinaryUrl("v1779800503/products/acrylic_name_plaque/img4.jpg"), alt: "Acrylic name plaque with Tamil script for contemporary spaces by Chithu Vibes" },
            { title: "Metal Art", desc: "Permanent Laser Marking on Stainless Steel, Brass Ideal for Gifts, Nameplates, Premium Custom Products Keychains, Pendants", price: "From ₹299", href: "/gift-products", img: buildCloudinaryUrl("v1779800512/products/metal_keychain/img10.jpg"), alt: "Brass plate etched with Tamil calligraphy with surgical laser precision by Chithu Vibes" },
        ],
    },

    section3: {
        title: ["The Heritage", "Evolving the", "Thamizhi Script"],
        description: ["Chithu Vibes was born from a singular vision: To ensure that the exquisite flow of Tamil calligraphy survives the digital age by carving it into the physical world",
            "Our process combines the meditative patience of a traditional scribe with the uncompromising power of industrial lasers. Every piece is a dialogue between the old and the new"],
        cta: "Learn Our Process",
        image: buildCloudinaryUrl("v1779800712/products/thamizhi_calligraphy/img9.jpg"),
        imageAlt: "Heritage craftsmanship in Tamil calligraphy - traditional script meets modern laser precision"
    },

    section4: {
        title: ["Trending Products", "Personalized Gifts • Corporate Gifts • Custom Name Boards • Tamil Calligraphy Art"],
        description: "Personalized Gifts • Corporate Gifts • Custom Name Boards • Tamil Calligraphy Art",
        pageLabel: "Page {index} of {total}",
        stats: [
            { value: "100%", label: "Original Script" },
            { value: "001mm", label: "Laser Accuracy" },
            { value: "Global", label: "Shipping" },
        ]
    },

    section5: {
        title: "A Note from the Founder",
        description: "In every stroke of Tamil script, there is a rhythm. Our goal was to capture that rhythm and make it permanent. Each piece we create is more than decor—it's a piece of our shared identity",
        founder: ["Jeya Chitra", "Creative Artisan", "Founder"],
        image: buildCloudinaryUrl("v1779973919/products/handwritten_letters/img13.png"),
        imageAlt: "Founder of Chithu Vibes - Master calligrapher with expertise in Tamil epigraphy"
    },

    section6: {
        title: ["Order directly with us", "Discuss your vision and place your order through WhatsApp"],
    },

    section7: {
        title: "Begin Your Bespoke Journey",
        description: "Custom Creations, Corporate Gifting, and Personalized Engravings — Crafted to tell your Story. We are just a message away",
        cta: "Order via WhatsApp",
        whatsappMessage: "Hello Chithu Vibes! I am interested in placing a custom order"
    },
    seo: {
        title: "Chithu Vibes — Tamil Calligraphy & Laser Engraving | Chennai",
        description: "Handcrafted Tamil calligraphy laser-engraved on wood, acrylic and metal. Heritage script meets modern precision. Ships globally from Chennai",
        keywords: "Tamil calligraphy, laser engraving Chennai, Tamil script art, wooden engraving, acrylic name plaque, brass engraving, Chithu Vibes",
        canonical: "https://chithuvibes.in/",
        ogTitle: "Chithu Vibes — The Soul of Tamil Calligraphy",
        ogDescription: "Where ancient Tamil script meets avant-garde laser technology. Immortalise the fluid beauty of Tamil letters into timeless materials with 001mm accuracy",
        ogImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        ogImageAlt: "Tamil calligraphy laser-engraved on teak wood by Chithu Vibes, Chennai",
        ogUrl: "https://chithuvibes.in/",
        twitterTitle: "Chithu Vibes — The Soul of Tamil Calligraphy",
        twitterDescription: "Where ancient Tamil script meets avant-garde laser technology. Immortalise the fluid beauty of Tamil letters into timeless materials with 001mm accuracy",
        twitterImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        twitterImageAlt: "Tamil calligraphy laser-engraved on teak wood by Chithu Vibes, Chennai",
        hreflangEn: "https://chithuvibes.in/",
        hreflangTa: "https://chithuvibes.in/?lang=ta",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Chithu Vibes",
            url: "https://chithuvibes.in",
            logo: "https://chithuvibes.in/logopng",
            description: "Handcrafted Tamil calligraphy laser-engraved on premium materials. Heritage script, modern precision",
            foundingDate: "2023",
            founder: { "@type": "Person", name: "Jeya Chitra" },
            address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-73053-27776",
                contactType: "customer service",
                availableLanguage: ["English", "Tamil"],
            },
            sameAs: [
                "https://www.instagram.com/chithuvibes",
                "https://www.facebook.com/chithuvibes",
                "https://www.linkedin.com/in/chithuvibes",
                "https://www.youtube.com/@chithuvibes18",
            ],
        },
    },
}

export const ABOUT = {
    section1: {
        label: "A Master's Legacy",
        title: ["The Soul of Tamil", "Calligraphy", "The Precision of the Laser"],
        description: "Where Ancient Scripts meet modern radiance, Chithu Vibes is the convergence of Tamil heritage and laser craftsmanship",
    },
    section2: {
        title: "Our Origin Story",
        image: buildCloudinaryUrl("v1779973806/WhatsApp_Image_2026-05-28_at_3.16.07_PM_u5swpa.jpg"),
        imageAlt: "Founder of Chithu Vibes holding a calligraphy piece in the studio",
        description: [
            
        "Born in the heart of Tamil Nadu, Chithu Vibes was founded with a simple vision — To preserve the beauty of Tamil handwriting and transform it into timeless creations that can be treasured for generations", 
         " When you choose a name, a word, or a verse, you are sharing a piece of your story. Through the precision of laser craftsmanship, we transform those meaningful expressions into lasting keepsakes"
        
        ],
        quote: "Etching Your Emotions into Eternity",
    },
    section3: {
        label: "Our Vision",
        title: "A Legacy of Lines",
        description: "Our studio stands at the intersection of roots and radiance. Drawing from deep Tamil artistic heartbeats, every stroke is informed by a lifetime of devotion to the curve of the alphabet and the logic of the layout",
        tags: ["Heritage-First", "Modern Radiance"],
    },
    section4: {
        label: "The Founder",
        title: ["The Gold Medalist", "The Scholar", "The Phoenix", ""],
        founderName: "Jeya Chitra",
        image: buildCloudinaryUrl("v1779973806/WhatsApp_Image_2026-05-28_at_3.29.05_PM_lqezvj.jpg"),
        imageAlt: "Jeya Chitra - Gold Medalist, MPhil Computer Science, Tamil epigraphy scholar, and founder of Chithu Vibes laser calligraphy studio",
        bio: [
            "Before the laser hummed in our studio, Chithu Vibes was shaped by the binary logic of code and the quiet stillness of archives. A Gold Medalist with an M Phil in Computer Science, our founder mastered the digital architecture behind the modern world",
            "Yet the soul of our craft was drawn to the stone. Through Archaeology & Epigraphy, our team learned to read stories etched by ancient hands across Tamil Nadu—understanding the weight of a stroke carved for eternity",
            "Our journey was not without fire. In 2017, our founder faced a life-altering challenge. Like the Phoenix we embody, Chithu Vibes didn't just recover—we rose with purpose. Our studio stands as that rebirth: a seamless fusion of technical brilliance and epigraphic wisdom",
        ],
        cards: [
            {
                label: "Award-Winning\nTech",
                desc: "MPhil Gold Medalist\nBringing algorithmic\nprecision to artistic engraving"
            },
            {
                label: "Heritage Expert",
                desc: "Diploma in Archaeology & Epigraphy\nCertified Tamizhi specialist ensuring\nabsolute historical authenticity"
            },
            {
                label: "Professional\nIntegrity",
                desc: "PGDLAL credentials\nEnsuring ethical\npractices in every commission"
            },
            {
                label: "Certifications",
                desc: "Certified in Web Designing,\nEditing, and Calligraphy"
            }
        ]
    },
    section5: {
        number: "99",
        quote: "Years spent mastering the logic of code and the grace of the pen. Today, we use laser to etch your emotions into eternity",
        cta: "Start Your Manuscript",
        ctaLink: "/contact",
    },
    seo: {
        title: "Our Story — Jeya Chitra & Tamil Calligraphy Heritage | Chithu Vibes",
        description: "Meet our founder Jeya Chitra — Gold Medalist, MPhil Computer Science, Tamil Epigraphy scholar and the vision behind Chithu Vibes. Laser precision meets ancestral script since 2023",
        keywords: "Jeya Chitra calligrapher, Tamil epigraphy, Chithu Vibes founder, laser engraving Chennai, Tamil calligraphy heritage",
        canonical: "https://chithuvibes.in/about",
        ogTitle: "A Master's Legacy — The Story of Chithu Vibes",
        ogDescription: "Gold Medalist Archaeologist Phoenix — our founder Jeya Chitra merges MPhil precision with Tamil epigraphy to create calligraphy that lasts centuries",
        ogImage: buildCloudinaryUrl("v1779823667/ChatGPT_Image_May_27_2026_12_57_31_AM_eu8lkk.png"),
        ogImageAlt: "Jeya Chitra, founder of Chithu Vibes, Tamil calligraphy and laser engraving artist",
        ogUrl: "https://chithuvibes.in/about",
        twitterTitle: "A Master's Legacy — The Story of Chithu Vibes",
        twitterDescription: "Gold Medalist Archaeologist Phoenix — our founder Jeya Chitra merges MPhil precision with Tamil epigraphy to create calligraphy that lasts centuries",
        twitterImage: buildCloudinaryUrl("v1779823667/ChatGPT_Image_May_27_2026_12_57_31_AM_eu8lkk.png"),
        twitterImageAlt: "Jeya Chitra, founder of Chithu Vibes, Tamil calligraphy and laser engraving artist",
        hreflangEn: "https://chithuvibes.in/about",
        hreflangTa: "https://chithuvibes.in/about?lang=ta",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jeya Chitra",
            jobTitle: "Master Calligrapher & Founder",
            worksFor: {
                "@type": "Organization",
                name: "Chithu Vibes",
                url: "https://chithuvibes.in",
            },
            description: "Gold Medalist with MPhil in Computer Science and expertise in Tamil Archaeology & Epigraphy. Founder of Chithu Vibes laser calligraphy studio",
            knowsAbout: ["Tamil Calligraphy", "Laser Engraving", "Tamil Epigraphy", "Computer Science"],
            award: "Gold Medalist — MPhil Computer Science",
            url: "https://chithuvibes.in/about",
        },
    },
}

export const CALLIGRAPHY_PRODUCTS = {
    section1: {
        title: ["Premium Boutique", "The Collection", "Artistry", "in Every Stroke,", "Precision in", "Every Laser"],
        backgroundImage: "/images/bg-image.jpeg",
        backgroundAlt: "Calligraphy products collection background",
    },

    section2: {
        title: ["Calligraphic Items", "Loading beautiful calligraphy pieces"],
        description: "Each piece is hand-crafted with archival materials, celebrating the ancient rhythm of the quill and the beauty of the written word",
        sectionStatus: "No calligraphy products available at the moment",
        searchPlaceholder: "Search by name or description",
        clearSearchLabel: "Clear search",
        sortLabel: "Sort:",
        sortOptions: [
            { value: "default", label: "Default" },
            { value: "price-low-to-high", label: "Price ↑" },
            { value: "price-high-to-low", label: "Price ↓" },
            { value: "name-a-z", label: "A → Z" },
            { value: "name-z-a", label: "Z → A" },
        ],
        clearAllLabel: "Clear All",
        resultsLabel: "Showing {shown} of {total} products",
        noResultsLabel: "No products match your search",
        clearFiltersLabel: "Clear Filters",
    },

    section3: {
        title: "True art is the bridge between the transient moment and an eternal memory. We don't just craft items; we etch soul into matter",
        description: "The Artisan's Touch",
        cta: "Inquire via WhatsApp for Bespoke Keepsakes",
    },
    seo: {
        title: "Tamil Calligraphy Products — Wooden, Acrylic & Metal Engravings | Chithu Vibes",
        description: "Shop hand-crafted Tamil calligraphy pieces laser-engraved on teak, walnut, acrylic and brass. Each piece celebrates the ancient rhythm of Tamil script. Ships globally",
        keywords: "buy Tamil calligraphy, wooden Tamil engraving, acrylic Tamil plaque, metal calligraphy art, laser engraved Tamil gifts, Chennai",
        canonical: "https://chithuvibes.in/calligraphy-products",
        ogTitle: "Tamil Calligraphy Collection — Artistry in Every Stroke",
        ogDescription: "Hand-crafted with archival materials, each Chithu Vibes calligraphy piece celebrates the ancient rhythm of the quill and the beauty of the written Tamil word",
        ogImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        ogImageAlt: "Collection of Tamil calligraphy laser-engraved pieces on wood and acrylic — Chithu Vibes",
        ogUrl: "https://chithuvibes.in/calligraphy-products",
        twitterTitle: "Tamil Calligraphy Collection — Artistry in Every Stroke",
        twitterDescription: "Hand-crafted with archival materials, each Chithu Vibes calligraphy piece celebrates the ancient rhythm of the quill and the beauty of the written Tamil word",
        twitterImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        twitterImageAlt: "Collection of Tamil calligraphy laser-engraved pieces on wood and acrylic — Chithu Vibes",
        hreflangEn: "https://chithuvibes.in/calligraphy-products",
        hreflangTa: "https://chithuvibes.in/calligraphy-products?lang=ta",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Tamil Calligraphy Products",
            description: "Hand-crafted Tamil calligraphy laser-engraved on premium wood, acrylic and metal. Each piece is an archival-quality artwork",
            url: "https://chithuvibes.in/calligraphy-products",
            provider: {
                "@type": "Organization",
                name: "Chithu Vibes",
                url: "https://chithuvibes.in",
            },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://chithuvibes.in" },
                    { "@type": "ListItem", position: 2, name: "Calligraphy Products", item: "https://chithuvibes.in/calligraphy-products" },
                ],
            },
        },
    },
}

export const GIFT_PRODUCTS = {
    section1: {
        title: ["Premium Boutique", "The Collection", "Artistry", "in Every Stroke,", "Precision in", "Every Laser"],
        backgroundImage: "/images/bg-image.jpeg",
        backgroundAlt: "Gift products collection background",

    },

    section2: {
        title: ["Gift Items", "Loading thoughtful gift pieces"],
        description: "Modern precision meets sentimental value. Our laser-crafted gifts are designed to preserve your most cherished milestones",
        sectionStatus: "No calligraphy products available at the moment",
        searchPlaceholder: "Search by name or description",
        clearSearchLabel: "Clear search",
        typeLabel: "Type:",
        typeAllLabel: "All",
        sortLabel: "Sort:",
        sortOptions: [
            { value: "default", label: "Default" },
            { value: "price-low-to-high", label: "Price ↑" },
            { value: "price-high-to-low", label: "Price ↓" },
            { value: "name-a-z", label: "A → Z" },
            { value: "name-z-a", label: "Z → A" },
        ],
        clearAllLabel: "Clear All",
        resultsLabel: "Showing {shown} of {total} products",
        noResultsLabel: "No products match your search",
        clearFiltersLabel: "Clear Filters",

    },
    section3: {
        title: "True art is the bridge between the transient moment and an eternal memory. We don't just craft items; we etch soul into matter",
        description: "The Artisan's Touch",
        cta: "Inquire via WhatsApp for Bespoke Keepsakes",

    },
    seo: {
        title: "Tamil Calligraphy Gift Items — Laser-Crafted Keepsakes | Chithu Vibes",
        description: "Thoughtful laser-crafted Tamil calligraphy gifts for weddings, anniversaries and milestones. Personalised engravings that preserve cherished memories. Order via WhatsApp",
        keywords: "Tamil calligraphy gifts, laser engraved gifts India, personalised Tamil gift, wedding gift Tamil, anniversary gift Chennai",
        canonical: "https://chithuvibes.in/gift-products",
        ogTitle: "Laser-Crafted Tamil Calligraphy Gifts — Chithu Vibes",
        ogDescription: "Modern precision meets sentimental value. Our laser-crafted gifts are designed to preserve your most cherished milestones in the beauty of Tamil script",
        ogImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        ogImageAlt: "Personalised Tamil calligraphy laser-engraved gift from Chithu Vibes",
        ogUrl: "https://chithuvibes.in/gift-products",
        twitterTitle: "Laser-Crafted Tamil Calligraphy Gifts — Chithu Vibes",
        twitterDescription: "Modern precision meets sentimental value. Our laser-crafted gifts are designed to preserve your most cherished milestones in the beauty of Tamil script",
        twitterImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        twitterImageAlt: "Personalised Tamil calligraphy laser-engraved gift from Chithu Vibes",
        hreflangEn: "https://chithuvibes.in/gift-products",
        hreflangTa: "https://chithuvibes.in/gift-products?lang=ta",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Tamil Calligraphy Gift Products",
        },
    },
}

export const CONTACT = {
    section1: {
        title: "Begin Your Bespoke Journey",
        subtitle: "PRIVATE CONSULTATION & STUDIO ACCESS",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=90",
        imageAlt: "Fountain pen and blank paper - begin your bespoke Tamil calligraphy commission",
        formLabel: "SUBMIT AN INQUIRY",
        statusMessages: {
            success: "✦ Your inquiry has been received — we shall be in touch",
            error: "Something went astray Please try once more",
            sending: "Sending your inquiry",
        },
        fields: [
            { name: "name", label: "NAME", placeholder: "Eg Elena Varma" },
            { name: "mobile", label: "MOBILE NUMBER", placeholder: "+91 00000 00000" },
        ],
        emailField: {
            label: "EMAIL ADDRESS",
            placeholder: "email@addresscom",
        },
        visionField: {
            label: "SPECIFIC NEEDS & VISION",
            placeholder: "Tell us about the project, dimensions, or sentiments you wish to capture",
        },
        cta: {
            default: "SEND INQUIRY →",
            sending: "SENDING",
        },
    },
    section2: {
        title: "The Studio",
        description: "Our team welcomes inquiries for custom commissions that blend heritage Tamil calligraphy with modern laser precision. Each piece is a unique dialogue between ancestral script and contemporary materiality",
        availability: "Available for global consultations",
        processLabel: "Engagement Process",
        steps: [
            { num: "01", title: "Selection", desc: "Browse our curated collections for initial inspiration or medium preference" },
            { num: "02", title: "Inquiry", desc: "Reach out with your vision via the form above for a brief overview" },
            { num: "03", title: "Consultation", desc: "A 1-on-1 session with our Artist to finalize script, material, and dimensions" },
            { num: "04", title: "Creation", desc: "The artisanal process begins, merging hand-drawn beauty with technical precision" },
        ],
    },
    section3: {
        quote: "Artistry is the bridge between what is felt and what is seen",
    },
    section4: {
        overline: "Find Us",
        title: "Visit the Studio",
        directionsUrl: "https://maps.google.com/?q=CHITHU+VIBES+Chennai",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.23372354216!2d80.1849862!3d12.956890699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f00538b072f%3A0x55edfc5adaf45498!2sCHITHU%20VIBES!5e0!3m2!1sen!2sin!4v1780011486091!5m2!1sen!2sin",
        mapLabel: "Chithu Vibes",
        cta: "Get Directions",
        details: [
            { icon: "ti-map-pin", text: "Chithu Vibes Studio\nChennai, Tamil Nadu, India" },
            { icon: "ti-clock", text: "By appointment only · Reach out to schedule your session" },
            { icon: "ti-star", text: "Artistry is the bridge between what is felt and what is seen" },
        ],
    },
    seo: {
        title: "Contact & Custom Orders — Bespoke Tamil Calligraphy | Chithu Vibes",
        description: "Commission a bespoke Tamil calligraphy piece with our team Submit an inquiry for custom engravings, bulk orders or personal consultations Studio in Chennai",
        keywords: "contact Chithu Vibes, custom Tamil calligraphy order, bespoke laser engraving, commission calligraphy Chennai, Jeya Chitra consultation",
        canonical: "https://chithuvibes.in/contact",
        ogTitle: "Begin Your Bespoke Journey — Chithu Vibes Studio",
        ogDescription: "A private 1-on-1 consultation with our team to commission your unique Tamil calligraphy piece Custom script, material, and dimensions — etched for eternity",
        ogImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        ogImageAlt: "Chithu Vibes studio consultation — bespoke Tamil calligraphy commission process",
        ogUrl: "https://chithuvibes.in/contact",
        twitterTitle: "Begin Your Bespoke Journey — Chithu Vibes Studio",
        twitterDescription: "A private 1-on-1 consultation with our team to commission your unique Tamil calligraphy piece Custom script, material, and dimensions — etched for eternity",
        twitterImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        twitterImageAlt: "Chithu Vibes studio consultation — bespoke Tamil calligraphy commission process",
        hreflangEn: "https://chithuvibes.in/contact",
        hreflangTa: "https://chithuvibes.in/contact?lang=ta",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Chithu Vibes",
            url: "https://chithuvibes.in/contact",
            description: "Commission bespoke Tamil calligraphy with our team Custom engravings, consultations, and bulk orders",
            provider: {
                "@type": "LocalBusiness",
                name: "Chithu Vibes",
                telephone: "+91-73053-27776",
                email: "hello@chithuvibesin",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Chennai",
                    addressRegion: "Tamil Nadu",
                    addressCountry: "IN",
                },
                priceRange: "₹₹–₹₹₹",
                openingHours: "Mo-Sa 10:00-18:00",
            },
        },
    },
}

export const CART = {
    section1: {
        title: "Your Selection",
        description: "Curating your bespoke experience",
    },
    section2: {
        title: ["You Might Also Like",],
        itemCount: { singular: "item", plural: "items" },
        cartItemTitle: ["in your selection", "A Personal Touch"],
        cartItemcta: "Clear all ",
        cartItemDescription: ["Once you inquire,", "our team", "will personally connect with you via WhatsApp to discuss customization and finalize your bespoke order"],
        emptyCartTitle: "Your cart is empty",
        emptyCartcta: ["Browse Collection",],
        emptyCartDescription: "Explore our calligraphy and gift collections and add something beautiful to your selection",
        cartSummaryTitle: ["Summary", "Subtotal", "Studio Processing", "Complimentary", "Is this a gift?", "Include a hand-written calligraphic note by Chithuvibes (+₹200–500)", "Final price on consultation"],
        estimatedTotalLabel: "Estimated Total",
        cartSummaryDescription: ["A Note for the Artist", "Artistry in Motion"],
        notePlaceholder: "Share your personalization details or special requests",
        cartSummarycta: ["Finalize Design via WhatsApp", "Continue Browsing Collection"],
        cartSummaryTrustBadges: ["Secure Professional Handling", "Insured Premium Shipping", "100% Artist-Certified Original"],
        mobileSummaryBarTitle: ["Total",],
        mobileSummaryBarcta: ["View Summary",],
        mobileDrawerTitle: ["Summary",],
        mobileDrawerCloseLabel: "✕",

    },
    seo: {
        title: "Your Selection — Chithu Vibes",
        description: "Review your selected Tamil calligraphy and laser-engraved pieces Finalise your bespoke order via WhatsApp with our team for personal customisation",
        canonical: "https://chithuvibes.in/cart",
        robots: "noindex, nofollow",
        ogTitle: "Your Selection — Chithu Vibes",
        ogDescription: "Finalise your bespoke Tamil calligraphy order Our team will personally connect to discuss customisation and confirm your unique piece",
        ogImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        ogImageAlt: "Chithu Vibes cart — curating your bespoke Tamil calligraphy selection",
        ogUrl: "https://chithuvibes.in/cart",
        twitterTitle: "Your Selection — Chithu Vibes",
        twitterDescription: "Finalise your bespoke Tamil calligraphy order Our team will personally connect to discuss customisation and confirm your unique piece",
        twitterImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        twitterImageAlt: "Chithu Vibes cart — curating your bespoke Tamil calligraphy selection",
    },
    section3: {},
    section4: {},
    section5: {},
    section6: {}
}

export const NOT_FOUND = {
    section1: {
        label: "PAGE NOT FOUND",
        quote: ["The stroke you seek has drifted", "beyond the canvas"],
        description: "The page wandered off — much like ink on an uncharted surface Let us guide you back to where the artistry begins",
        cta: {
            back: "GO BACK →",
            home: "RETURN HOME",
        },
        badge: "HERITAGE-FIRST · MASTERY SINCE 2023",
    },
    seo: {
        title: "Page Not Found — Chithu Vibes",
        description: "The page you are looking for has wandered off Return to Chithu Vibes to explore our Tamil calligraphy and laser engraving collections",
        canonical: "https://chithuvibes.in/404",
        robots: "noindex, nofollow",
        ogTitle: "Page Not Found — Chithu Vibes",
        ogDescription: "The stroke you seek has drifted beyond the canvas Return home to explore our Tamil calligraphy collections",
        ogImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        ogImageAlt: "Chithu Vibes 404 page — Tamil calligraphy studio Chennai",
        ogUrl: "https://chithuvibes.in/404",
        twitterTitle: "Page Not Found — Chithu Vibes",
        twitterDescription: "The stroke you seek has drifted beyond the canvas Return home to explore our Tamil calligraphy collections",
        twitterImage: buildCloudinaryUrl("v1779800731/products/wooden_photo_frame/img2.jpg"),
        twitterImageAlt: "Chithu Vibes 404 page — Tamil calligraphy studio Chennai",
    },
    section2: {}, section3: {}, section4: {}, section5: {}, section6: {}
}

export const COMING_SOON = {
    section1: {
        label: "COMING SOON",
        title: ["A New Chapter", "in Tamil Calligraphy"],
        description: "We are preparing a curated atelier where heritage script meets precision laser artistry Our full collection and bespoke inquiries will be unveiled shortly",
        cta: {
            primary: "CONTACT VIA WHATSAPP",
            message: "Hello Chithu Vibes! I would like to know about the upcoming launch and bespoke calligraphy pieces"
        },
        badge: "HERITAGE-FIRST · MASTERY SINCE 2023",
        svgLines: ["COMING", "SOON"],
    },
    section2: {}, section3: {}, section4: {}, section5: {}, section6: {}
}

export const THANKYOU = {
    word: "நன்றி",
    subtitle: "Chithu Vibes",
}

export const NAVBAR = {
    logo: "Chithu Vibes",
    logoAlt: "Chithu Vibes Logo",
    cartLabel: "View cart",
    cartMax: "9+",
    menuLabel: "Toggle menu",
    links: [
        { label: "HOME", path: "/" },
        { label: "OUR STORY", path: "/about" },
        { label: "GIFT PRODUCTS", path: "/gift-products" },
        { label: "CALLIGRAPHY ARTWORKS", path: "/calligraphy-products" },
        { label: "CONTACT", path: "/contact" },
    ],
}

export const FOOTER = {
    tagline: ["Craft your story", "with us"],
    description: "Connect with Chithu Vibes for bespoke laser engraving and Tamil calligraphy",
    address: "Chennai, Tamil Nadu",
    phone: "+91 73053 27776",
    whatsappLink: "https://wa.me/917305327776",
    email: "hello@chithuvibes.in",
    copyright: "© Chithu Vibes All rights reserved",
    craftedLine: "Crafted with care in Chennai",
    links: [
        { label: "Home", path: "/" },
        { label: "Our story", path: "/about" },
        { label: "Calligraphy Artworks", path: "/calligraphy-products" },
        { label: "Gift Products", path: "/gift-products" },
        { label: "Contact", path: "/contact" },
    ],
    socials: [
        { href: "https://www.facebook.com/chithuvibes", label: "Facebook", color: "#1877F2" },
        { href: "https://www.instagram.com/chithuvibes", label: "Instagram", color: "#E1306C" },
        { href: "https://www.x.com/chithuvibes", label: "X / Twitter", color: "#000000" },
        { href: "https://www.linkedin.com/in/chithuvibes", label: "LinkedIn", color: "#0A66C2" },
        { href: "https://www.youtube.com/@chithuvibes18", label: "YouTube", color: "#FF0000" },
    ],
}

export const UI_COPY = {
    productCard: {
        defaultProductName: "Tamil calligraphy",
        primaryImageAlt: "{name} - Tamil calligraphy laser-engraved by Chithu Vibes",
        secondaryImageAlt: "{name} - image {index} of {total}",
        prevImageLabel: "View previous product image",
        nextImageLabel: "View next product image",
        dotImageLabel: "View image {index} of {total}",
    },
    cartProduct: {
        quantityLabel: "Qty:",
    },
    recommendationCard: {
        imageAlt: "{name} - Recommended Tamil calligraphy product by Chithu Vibes",
        addedLabel: "Added",
        addLabel: "Add",
        priceSeparator: "•",
    },
};
