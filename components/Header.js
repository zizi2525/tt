import Head from "next/head";
export default function Header({ title }) {
  return (
    <>
        <Head>
        <title>{title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="content-language" content="fr" />
        <meta
          name="description"
          content="Animes sama est un site Web de streaming d'animevostfr et anime vf gratuit où vous pouvez regarder en ligne sans compte. REGARDEZ MAINTENANT!"
        />
        <meta
          name="keywords"
          content="vostfr, anime vf,anime vostfr, animevostfr, anime streaming, manga vostfr, anime sama, manga vf"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-status-bar" content="#101317" />
        <meta name="theme-color" content="#101317" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
    </>




    )
}

