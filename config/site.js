module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Beyond Destiny', // Navigation and Site Title
  titleAlt: 'My personal thoughts and idea about the Destiny universe', // Title for JSONLD
  description: 'My personal thoughts and idea about the Destiny universe',
  url: 'https://beyond-destiny.netlify.app/', // Domain of your site. No trailing slash!
  siteUrl: 'https://beyond-destiny.netlify.app/', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/logo.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'BeyonDestiny', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Fabian Kresler', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@beyondestiny', // Twitter Username
};
