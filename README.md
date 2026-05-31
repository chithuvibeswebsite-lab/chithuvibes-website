# Chithu Vibes — Website Overview

Chithu Vibes is a client-facing website that showcases Tamil calligraphy artistry, curated product collections, and a WhatsApp-led ordering experience. The site blends **static brand storytelling** with **dynamic catalog data** pulled from Google Sheets.

## Architecture (Client View)

This is a Vite + React application. Content and data are delivered in two distinct streams:

1. **Curated content (static)**  
   Copy, section structure, and SEO metadata live in `src/data/data.jsx`. Pages import these objects directly (Home, About, Calligraphy Products, Gift Products, Contact).

2. **Catalog + testimonials (dynamic)**  
   Product lists and testimonials are fetched from Google Sheets (Excel) published as CSV. The fetch, parsing, and normalization happen inside `src/context/cart.context.jsx`.

## Data Flow (From `data.jsx` + Excel)

### 1) Page copy & layout
- `src/data/data.jsx` exports structured content objects (`HOME`, `ABOUT`, `CALLIGRAPHY_PRODUCTS`, `GIFT_PRODUCTS`, `CONTACT`).
- Each page imports its section object and renders copy, imagery, and SEO metadata.
- Cloudinary images are built from `buildCloudinaryUrl`, keeping images consistent and optimized.

### 2) Product & testimonial data (Excel / Google Sheets)
- `CartProvider` (global context) builds CSV URLs from environment variables:
  - `VITE_EXCEL_SHEET_ID`
  - `VITE_EXCEL_CALLIGRAPHY_PRODUCTS_GID`
  - `VITE_EXCEL_GIFT_PRODUCTS_GID`
  - `VITE_EXCEL_TESTIMONIALS_GID`
- The sheet is fetched as CSV and parsed using **PapaParse**.
- Product rows are normalized via `transformProduct` to match UI expectations:
  - **Supported column names** (any of these will work):  
    `id / product_id`, `name / product_name`, `description / product_description`,  
    `type / product_type`, `price / product_price`,  
    `trending / is_trending`, `product_images / images`,  
    `folder / image_folder / product_folder`.
- A combined **Trending Products** list is built from both product sheets.
- Testimonials are also pulled from their sheet and displayed on the home page.

### 3) Cart & WhatsApp order flow
- Cart state lives in `CartProvider` and is stored in cookies for persistence.
- When the customer proceeds, the app formats an order summary and opens WhatsApp using:
  - `VITE_CLIENT_PHONE_NUMBER`  
  (see `src/utils/whatsapp.util.jsx`)

## Updating the Excel (Google Sheets) Data

1. Open the Google Sheet.
2. Keep the **column headers** aligned with the supported field names above.
3. Ensure the sheet is **published to the web** as CSV.
4. Update the relevant GID environment variables if a sheet tab changes.
5. Refresh the site — new data appears without code changes.

## What This Means for the Client

- **Brand copy and layout** are managed in `data.jsx`.
- **Product catalog and testimonials** are managed in Google Sheets (Excel-style).
- **Ordering** is powered through WhatsApp with a prefilled message.

This split keeps the site **editable for non-developers** while preserving a refined, high-performance front-end experience.
