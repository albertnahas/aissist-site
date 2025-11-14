export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.aissistcli.dev/#website",
        "url": "https://www.aissistcli.dev",
        "name": "Aissist",
        "description": "Local-First AI Assistant for Goals, Todos, and Memory",
        "publisher": {
          "@id": "https://www.aissistcli.dev/#organization",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://www.aissistcli.dev/#organization",
        "name": "Aissist",
        "url": "https://www.aissistcli.dev",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.aissistcli.dev/logo.jpg",
          "width": 512,
          "height": 512,
        },
        "sameAs": [
          "https://github.com/albertnahas/aissist",
          "https://www.npmjs.com/package/aissist",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "name": "Aissist",
        "operatingSystem": "Cross-platform",
        "applicationCategory": "ProductivityApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": "1",
        },
        "description": "Local-first AI assistant that stores everything in Markdown. Track goals, todos, and history with AI-powered semantic recall.",
        "softwareVersion": "1.0.0",
        "url": "https://www.aissistcli.dev",
        "downloadUrl": "https://www.npmjs.com/package/aissist",
        "installUrl": "https://www.npmjs.com/package/aissist",
        "screenshot": "https://www.aissistcli.dev/demos/demo.gif",
        "featureList": [
          "Goal tracking with AI-generated codenames",
          "Todo management with auto-history logging",
          "Semantic search with Claude Code",
          "Local Markdown storage",
          "Privacy-first, offline-capable",
          "AI-powered action proposals",
          "Daily and weekly reflection prompts",
        ],
        "keywords": "productivity, CLI, markdown, local-first, AI assistant, goals, todos, privacy, semantic search",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.aissistcli.dev/#webpage",
        "url": "https://www.aissistcli.dev",
        "name": "Aissist - Local-First AI Assistant for Goals, Todos, and Memory",
        "isPartOf": {
          "@id": "https://www.aissistcli.dev/#website",
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "description": "Organize your past, manage your present, and plan your future. Aissist is a privacy-first CLI tool that stores everything in Markdown on your machine.",
        "breadcrumb": {
          "@id": "https://www.aissistcli.dev/#breadcrumb",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aissistcli.dev/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.aissistcli.dev",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      suppressHydrationWarning
    />
  );
}
