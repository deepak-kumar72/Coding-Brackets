import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const SitemapPage: NextPage = () => {
  const [sitemap, setSitemap] = useState<string>('');

  useEffect(() => {
    fetch('/sitemap.xml')
      .then(response => response.text())
      .then(data => setSitemap(data));
  }, []);

  return (
    <div>
      <h1>Sitemap</h1>
      <pre>{sitemap}</pre>
    </div>
  );
};

export default SitemapPage;
