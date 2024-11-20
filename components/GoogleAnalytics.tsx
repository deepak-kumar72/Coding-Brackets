import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DWERN9FNC0"
      />
      <Script id="googleAnalytics">
        {`window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date()); 
        gtag('config', 'G-DWERN9FNC0');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
