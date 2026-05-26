import { useEffect } from 'react';

/**
 * SEO Metadata Component - Sets all SEO-related meta tags
 * @param {Object} props
 * @param {string} props.title - Page title (50-60 chars)
 * @param {string} props.description - Meta description (120-160 chars)
 * @param {string} props.keywords - Meta keywords
 * @param {string} props.canonical - Canonical URL
 * @param {string} props.ogTitle - Open Graph title
 * @param {string} props.ogDescription - Open Graph description
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.ogImageAlt - Open Graph image alt text
 * @param {string} props.ogUrl - Open Graph URL
 * @param {string} props.ogType - Open Graph type (default: 'website')
 * @param {string} props.twitterTitle - Twitter Card title
 * @param {string} props.twitterDescription - Twitter Card description
 * @param {string} props.twitterImage - Twitter Card image
 * @param {string} props.twitterImageAlt - Twitter Card image alt
 * @param {string} props.robots - Robots meta tag
 * @param {Object} props.jsonLd - JSON-LD structured data object
 * @param {string} props.hreflangEn - hreflang en-IN URL
 * @param {string} props.hreflangTa - hreflang ta URL
 */
export default function SEOMeta({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  ogUrl,
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  jsonLd,
  hreflangEn,
  hreflangTa,
}) {
  useEffect(() => {
    // Set title
    if (title) {
      document.title = title;
    }

    // Function to create/update meta tags
    const setMeta = (name, content, isProperty = false) => {
      if (!content) return;
      
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Set basic meta tags
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', robots);

    // Set Open Graph tags
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', 'Chithu Vibes', true);
    setMeta('og:title', ogTitle, true);
    setMeta('og:description', ogDescription, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:image:alt', ogImageAlt, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', ogUrl, true);
    setMeta('og:locale', 'en_IN', true);

    // Set Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', '@chithuvibes');
    setMeta('twitter:title', twitterTitle);
    setMeta('twitter:description', twitterDescription);
    setMeta('twitter:image', twitterImage);
    setMeta('twitter:image:alt', twitterImageAlt);

    // Set geographic and language meta tags
    setMeta('geo.region', 'IN-TN');
    setMeta('geo.placename', 'Chennai');
    setMeta('content-language', 'en-IN');

    // Handle canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    // Handle hreflang tags
    if (hreflangEn) {
      let hreflangEnLink = document.querySelector('link[rel="alternate"][hreflang="en-IN"]');
      if (!hreflangEnLink) {
        hreflangEnLink = document.createElement('link');
        hreflangEnLink.rel = 'alternate';
        hreflangEnLink.hrefLang = 'en-IN';
        document.head.appendChild(hreflangEnLink);
      }
      hreflangEnLink.href = hreflangEn;
    }

    if (hreflangTa) {
      let hreflangTaLink = document.querySelector('link[rel="alternate"][hreflang="ta"]');
      if (!hreflangTaLink) {
        hreflangTaLink = document.createElement('link');
        hreflangTaLink.rel = 'alternate';
        hreflangTaLink.hrefLang = 'ta';
        document.head.appendChild(hreflangTaLink);
      }
      hreflangTaLink.href = hreflangTa;
    }

    // Handle JSON-LD structured data
    if (jsonLd) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      // Cleanup is minimal since we're updating existing tags
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogImageAlt, ogUrl, ogType, twitterTitle, twitterDescription, twitterImage, twitterImageAlt, robots, jsonLd, hreflangEn, hreflangTa]);

  return null;
}
