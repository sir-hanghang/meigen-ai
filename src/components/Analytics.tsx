"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Plausible */}
      <Script
        defer
        data-domain="meigenai.org"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
      {/* Microsoft Clarity */}
      <Script id="clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wpojuymipe");
        `}
      </Script>
      {/* Ahrefs Analytics */}
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="kFwiOh+bL50Y4q0RQci3TA"
        strategy="afterInteractive"
        async
      />
    </>
  );
}
