export default class whm {
  bigArea = "";
  country = "";
  seoKeyword = "";
  worldHeritageRegisteredName = "";
  metaDescription = "";
  metaKeywords = "";
  name = "";
  headline = "";
  explainatoryText = "";
  staffRecommendedPoints = "";
  heritageType = "";
  registrationAndExpansionYear = "";
  timeDifferenceWithJapan = "";
  bestSeason = "";
  flightTime = "";
  tourAverageBudget = "";
  estimatedTravelDays = "";
  directionsFromJapanDetails = "";
  HISOverseasBranchName = "";
  HISOverseasBranchSite = "";

  constructor(bigArea, country, seoKeyword, worldHeritageRegisteredName, metaDescription, metaKeywords, name, headline, explainatoryText, staffRecommendedPoints, heritageType, registrationAndExpansionYear, timeDifferenceWithJapan, bestSeason, flightTime, tourAverageBudget, estimatedTravelDays, directionsFromJapanDetails, HISOverseasBranchName, HISOverseasBranchSite) 
  {
    this.bigArea = bigArea;
    this.country = country;
    this.seoKeyword = seoKeyword;
    this.worldHeritageRegisteredName = worldHeritageRegisteredName;
    this.metaDescription = metaDescription;
    this.metaKeywords = metaKeywords;
    this.name = name;
    this.headline = headline;
    this.explainatoryText = explainatoryText;
    this.staffRecommendedPoints = staffRecommendedPoints;
    this.heritageType = heritageType;
    this.registrationAndExpansionYear = registrationAndExpansionYear;
    this.timeDifferenceWithJapan = timeDifferenceWithJapan;
    this.bestSeason = bestSeason;
    this.flightTime = flightTime;
    this.tourAverageBudget = tourAverageBudget;
    this.estimatedTravelDays = estimatedTravelDays;
    this.directionsFromJapanDetails = directionsFromJapanDetails;
    this.HISOverseasBranchName = HISOverseasBranchName;
    this.HISOverseasBranchSite = HISOverseasBranchSite;
  }
  
  getTemplate()
  {
    return `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>${this.name} - ${this.country} 世界遺産の旅【HIS】</title>
        <!-- Google Tag Manager -->
        <script>
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-M6QKN2');
        </script>
        <!-- End Google Tag Manager -->
        <meta name="keywords" content="${this.metaKeywords}" />
        <meta name="description" content="${this.metaDescription}" />
        <meta name="viewport" content="width=1024" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HIS_japan" />
        <link rel="canonical" href="https://www.his-j.com/world-heritage/asia/india/taj-mahal.html" />
        <link rel="alternate" media="only screen and (max-width: 480px)" href="https://www.his-j.com/world-heritage/asia/india/taj-mahal_sp.html" />
        <link rel="shortcut icon" href="https://www.his-j.com/cmn/images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://www.his-j.com/cmn/images/apple-touch-icon.png" sizes="180x180" />
    
        <!--OpenGraph-->
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content="${this.name} - ${this.country} 世界遺産の旅【HIS】" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.his-j.com/world-heritage/asia/india/taj-mahal.html" />
        <meta property="og:site_name" content="HIS海外・国内総合旅行予約サイト" />
        <meta property="og:image" content="https://www.his-j.comhttps://www.his-j.com/cmn/images/ogp.png" />
        <meta property="og:description" content="${this.metaDescription}" />
        <meta property="fb:app_id" content="222347251136850" />
    
        <!--構造化データ-->
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://www.his-j.com/Default.aspx",
                  "name": "総合旅行サイトHIS"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://www.his-j.com/world-heritage/",
                  "name": "世界遺産の旅"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": "https://www.his-j.com/world-heritage/asia/",
                  "name": "${this.bigArea}の世界遺産"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@id": "https://www.his-j.com/world-heritage/asia/india/",
                  "name": "${this.country}の世界遺産"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@id": "https://www.his-j.com/world-heritage/asia/india/taj-mahal.html",
                  "name": "${this.name}"
                }
              }
            ]
          }
        </script>
    
        <!--SPでアクセス時にSPページへリダイレクト-->
        <script type="text/javascript">
          if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
            var newPage = 'https://www.his-j.com/world-heritage/asia/india/taj-mahal_sp.html';
            var redirectURL = location.origin + newPage + location.search;
            redirectURL += location.hash;
            location.href = redirectURL;
          }
        </script>
    
        <!--共通-->
        <link rel="stylesheet" href="https://www.his-j.com/cmn/css/common.css" />
        <script src="https://www.his-j.com/cmn/plugin/jquery/jquery-3.3.1.min.js"></script>
        <link rel="stylesheet" href="https://www.his-j.com/cmn/plugin/slick/slick.css" />
        <link rel="stylesheet" href="https://www.his-j.com/cmn/plugin/magnific-popup/magnific-popup.css" />
        <script src="https://www.his-j.com/cmn/plugin/slick/slick.min.js"></script>
        <script src="https://www.his-j.com/cmn/plugin/magnific-popup/jquery.magnific-popup.min.js"></script>
        <script src="https://www.his-j.com/cmn/plugin/cookie_js/jquery.cookie.js"></script>
    
        <!--テンプレート用-->
        <link rel="stylesheet" href="https://www.his-j.com/cmn/ui-parts/css/ui_parts.min.css" />
        <script src="https://www.his-j.com/cmn/ui-parts/js/ui_parts.js"></script>
    
        <!--新ヘッダーフッター用-->
        <link rel="stylesheet" href="https://www.his-j.com/cmn/n-headfoot/css/headfoot.css" />
        <script src="https://www.his-j.com/cmn/plugin/vue/vue.js"></script>
        <script src="https://www.his-j.com/cmn/plugin/pubsub/pubsub.min.js"></script>
    
        <!--ページ用-->
        <script src="/world-heritage/library/object-fit-images/ofi.min.js"></script>
        <link rel="stylesheet" href="/world-heritage/css/details.css" />
      </head>
    
      <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6QKN2" height="0" width="0" style="display: none; visibility: hidden;"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
    
        <div id="hisApp">
          <h1 id="site-copy">${this.name} - ${this.country} 世界遺産の旅【HIS】</h1>
    
          <div id="header">
            <his-header></his-header>
          </div>
    
          <main class="main">
            <!--▼▼▼ パンくず ▼▼▼-->
            <div class="breadcrumb">
              <ul class="breadcrumb__inner">
                <li class="breadcrumb__item">
                  <a href="/Default.aspx" class="breadcrumb__itemInner">
                    <img class="breadcrumb__icon" src="https://www.his-j.com/cmn/icon/icon_home.png" alt="" />
                    <span>総合旅行サイトHIS</span>
                  </a>
                </li>
                <li class="breadcrumb__item">
                  <a href="/world-heritage/" class="breadcrumb__itemInner">
                    <span>世界遺産の旅</span>
                  </a>
                </li>
                <li class="breadcrumb__item">
                  <a href="/world-heritage/asia/" class="breadcrumb__itemInner">
                    <span>${this.bigArea}の世界遺産</span> 
                  </a>
                </li>
                <li class="breadcrumb__item">
                  <a href="/world-heritage/asia/india/" class="breadcrumb__itemInner">
                    <span>${this.country}の世界遺産</span>
                  </a>
                </li>
                <li class="breadcrumb__item">
                  <span class="breadcrumb__itemInner">
                    <span>${this.seoKeyword}</span>
                  </span>
                </li>
              </ul>
            </div>
            <!--▲▲▲ パンくず ▲▲▲-->
    
            <section class="content">
              <div class="global-nav__outer">
                <!--#include virtual="/world-heritage/ssi/global-nav.shtml" -->
              </div>
    
              <section class="main-visual">
                <h2 class="main-visual__text">
                  <p class="main-visual__text--japanese">${this.name}</p>
                  <p class="main-visual__text--english">${this.worldHeritageRegisteredName}</p>
                </h2>
              </section>
    
              <section class="description">
                <div class="description__inner">
                  <h3 class="title">
                    <p class="title__text title__text--short">${this.headline}</p>
                    <img src="/world-heritage/img/english_title/description.svg" alt="Description" />
                  </h3>
    
                  <ul class="slick">
                    <li>
                      <img class="object-fit" src="/world-heritage/north-america/america/img/grand-canyon-main01.jpg" alt="グランドキャニオン" />
                    </li>
                    <li>
                      <img class="object-fit" src="/world-heritage/north-america/america/img/grand-canyon-main02.jpg" alt="グランドキャニオン" />
                    </li>
                    <li>
                      <img class="object-fit" src="/world-heritage/north-america/america/img/grand-canyon-main03.jpg" alt="グランドキャニオン" />
                    </li>
                    <li>
                      <img class="object-fit" src="/world-heritage/north-america/america/img/grand-canyon-main04.jpg" alt="グランドキャニオン" />
                    </li>
                  </ul>
                  <ul class="thumbnail">
                    <li>
                      <img class="object-fit" src="/world-heritage/north-america/america/img/grand-canyon-main01.jpg" alt="グランドキャニオン" />
                    </li>
                    <li>
                      <img class="object-fit" src="/world-heritage/north-america/america/img/grand-canyon-main02.jpg" alt="グランドキャニオン" />
                    </li>
                    <li>
                      <img class="object-fit" src="/world-heritage/north-america/america/img/grand-canyon-main03.jpg" alt="グランドキャニオン" />
                    </li>
                    <li>
                      <img class="object-fit" src="/world-heritage/north-america/america/img/grand-canyon-main04.jpg" alt="グランドキャニオン" />
                    </li>
                  </ul>
    
                  <p class="description__text">${this.explainatoryText}</p>
    
                  <div class="topics">
                    <div class="topics__inner">
                      <p class="topics__sub-title">HIS秘境旅行専門デスクネイチャーワールド・スタッフの</p>
                      <p class="topics__title">おすすめトピックス</p>
                      <p class="topics__sentence">${this.staffRecommendedPoints}<!--<span></span>--></p>
                    </div>
                  </div>
                </div>
              </section>
    
              <section class="information">
                <div class="information__inner">
                  <h3 class="title">
                    <p class="title__text title__text--short">世界遺産情報</p>
                    <img src="/world-heritage/img/english_title/information.svg" alt="Infotmation" />
                  </h3>
    
                  <ul class="information__list">
                    <li class="information__item">
                      <div class="information__item-img-outer">
                        <p class="information__item-img">
                          <img src="/world-heritage/img/icon/icon_information01.svg" alt="" />
                        </p>
                      </div>
                      <p class="information__item-title">登録名</p>
                      <p class="information__item-data">${this.name}<br />${this.worldHeritageRegisteredName}</p>
                    </li>
                    <li class="information__item-double">
                      <div class="information__item-inner">
                        <div class="information__item-img-outer">
                          <p class="information__item-img">
                            <img src="/world-heritage/img/icon/icon_information02.svg" alt="" />
                          </p>
                        </div>
                        <p class="information__item-title">ベストシーズン</p>
                        <p class="information__item-data">${this.bestSeason}</p>
                      </div>
                      <div class="information__item-inner">
                        <div class="information__item-img-outer">
                          <p class="information__item-img">
                            <img src="/world-heritage/img/icon/icon_information09.svg" alt="" />
                          </p>
                        </div>
                        <p class="information__item-title">日本との時差</p>
                        <p class="information__item-data">${this.timeDifferenceWithJapan}</p>
                      </div>
                    </li>
                    <li class="information__item">
                      <div class="information__item-img-outer">
                        <p class="information__item-img">
                          <img src="/world-heritage/img/icon/icon_information03.svg" alt="" />
                        </p>
                      </div>
                      <p class="information__item-title">国名</p>
                      <p class="information__item-data">${this.country}</p>
                    </li>
                    <li class="information__item">
                      <div class="information__item-img-outer">
                        <p class="information__item-img">
                          <img src="/world-heritage/img/icon/icon_information04.svg" alt="" />
                        </p>
                      </div>
                      <p class="information__item-title">飛行時間</p>
                      <p class="information__item-data">${this.flightTime}</p>
                    </li>
                    <li class="information__item">
                      <div class="information__item-img-outer">
                        <p class="information__item-img">
                          <img src="/world-heritage/img/icon/icon_information05.svg" alt="" />
                        </p>
                      </div>
                      <p class="information__item-title">登録年</p>
                      <p class="information__item-data">${this.registrationAndExpansionYear}</p>
                    </li>
                    <li class="information__item">
                      <div class="information__item-img-outer">
                        <p class="information__item-img">
                          <img src="/world-heritage/img/icon/icon_information06.svg" alt="" />
                        </p>
                      </div>
                      <p class="information__item-title">平均予算</p>
                      <p class="information__item-data">${this.tourAverageBudget}</p>
                    </li>
                    <li class="information__item">
                      <div class="information__item-img-outer">
                        <p class="information__item-img">
                          <img src="/world-heritage/img/icon/icon_information07.svg" alt="" />
                        </p>
                      </div>
                      <p class="information__item-title">世界遺産分類</p>
                      <p class="information__item-data">${this.heritageType}</p>
                    </li>
                    <li class="information__item">
                      <div class="information__item-img-outer">
                        <p class="information__item-img">
                          <img src="/world-heritage/img/icon/icon_information08.svg" alt="" />
                        </p>
                      </div>
                      <p class="information__item-title">旅行日数</p>
                      <p class="information__item-data">${this.estimatedTravelDays}</p>
                    </li>
                  </ul>
                </div>
              </section>
    
              <section class="direction">
                <div class="direction__inner">
                  <h3 class="title">
                    <p class="title__text title__text--short">日本からの行き方</p>
                    <img src="/world-heritage/img/english_title/direction.svg" alt="Direction" />
                  </h3>
    
                  <div id="map"></div>
    
                  <div class="direction-detail">
                    <div class="direction-detail__inner">
                      <ul class="direction-detail__list">
                        <li class="direction-detail__item">
                          <p class="direction-detail__place">日本</p>
                          <p class="direction-detail__time direction-detail__time--plane">[AD①]{約11時間}</p>
                        </li>
                        <li class="direction-detail__item">
                          <div class="direction-detail__item-inner">
                            <p class="direction-detail__place">[AD②]{インド デリー}</p>
                            <!-- <p class="direction-detail__place">ラスベガス</p> -->
                          </div>
                          <div class="direction-detail__item-inner">
                            <p class="direction-detail__time direction-detail__time--plane">[AD③]{約40分}</p>
                            <p class="direction-detail__time direction-detail__time--bus">[AD④]{約2時間}</p>
                          </div>
                        </li>
                        <li class="direction-detail__item">
                          <p class="direction-detail__place">[AD⑤]{タージ・マハル}</p>
                        </li>
                      </ul>
                    </div>
                    <div class="direction-detail__inner">
                      <div class="direction-detail__sentence">
                        <p class="direction-detail__text">${this.directionsFromJapanDetails}</p>
                        <p class="direction-detail__text">この世界遺産がある国には、HISの現地支店がございます。<a href="${this.HISOverseasBranchSite}">>>${this.HISOverseasBranchName}アグラツアーデスク支店</a><br />お客様の安心で快適な旅をサポートします。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    
              <section class="recommend">
                <div class="recommend__inner">
                  <h3 class="title">
                    <p class="title__text title__text--long">${this.seoKeyword}に行く旅行を探す</p>
                    <img src="/world-heritage/img/english_title/planatrip.svg" alt="Plan a Trip" />
                  </h3>
    
                  <!--<div class="recommend__tab-table">
                    <div class="grid-row grid-row--narrowGutter js-toggleOnClick" data-target-group=".categoryWrapper">
                      <div class="grid-col6 js-countTabs js-toggleControl toggleControl--active" data-target="#category01">
                        <div class="recommend__tab">
                          <p class="recommend__tab-text recommend__tab-text--tour">ツアー</p>
                        </div>
                      </div>
                      <div class="grid-col6 js-countTabs js-toggleControl" data-target="#category02">
                        <div class="recommend__tab">
                          <p class="recommend__tab-text recommend__tab-text--ticket-hotel">航空券<br />＋<br />ホテル</p>
                        </div>
                      </div>
                      <div class="grid-col6 js-countTabs js-toggleControl" data-target="#category03">
                        <div class="recommend__tab"><p class="recommend__tab-text recommend__tab-text--ticket">航空券</p></div>
                      </div>
                      <div class="grid-col6 js-countTabs js-toggleControl" data-target="#category04">
                        <div class="recommend__tab"><p class="recommend__tab-text recommend__tab-text--hotel">ホテル</p></div>
                      </div>
                      <div class="grid-col6 js-countTabs js-toggleControl" data-target="#category05">
                        <div class="recommend__tab">
                          <p class="recommend__tab-text recommend__tab-text--optional-tour">オプショナル<br />ツアー</p>
                        </div>
                      </div>
                      <div class="grid-col6 js-countTabs js-toggleControl" data-target="#category06">
                        <div class="recommend__tab">
                          <p class="recommend__tab-text recommend__tab-text--car">レンタカー</p>
                        </div>
                      </div>
                    </div>
                    <div id="category01" class="categoryWrapper toggleTarget--active">
                      <div class="recommend__row">
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間タグ１</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                      </div>
                    </div>
                    <div id="category02" class="categoryWrapper">
                      <div class="recommend__row">
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間タグ２</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                      </div>
                    </div>
                    <div id="category03" class="categoryWrapper">
                      <div class="recommend__row">
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間タグ３</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                      </div>
                    </div>
                    <div id="category04" class="categoryWrapper">
                      <div class="recommend__row">
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間タグ４</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                      </div>
                    </div>
                    <div id="category05" class="categoryWrapper">
                      <div class="recommend__row">
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間タグ５</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                      </div>
                    </div>
                    <div id="category06" class="categoryWrapper">
                      <div class="recommend__row">
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間タグ６</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                        <a class="recommend__col3" href="">
                          <p class="recommend__card-img">
                            <img class="object-fit" src="/world-heritage/img/dammy/img01.png" alt="（画像の代替テキスト）" />
                          </p>
                          <div class="recommend__card-body">
                            <h4 class="recommend__card-title">●添乗員同行●羽田発着気軽にグランドキャニオン5日間</h4>
                            <p class="recommend__card-text">スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在スタンダードクラスホテルに滞在</p>
                          </div>
                          <p class="recommend__card-price">123,456<span>円～</span>789,000<span>円</span></p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="heritage__button heritage__button--recommend"><a href="">グランドキャニオンに行くツアーをもっと見る</a></div>-->
    
                  <div class="plan-travel">
                    <ul class="plan-travel__list">
                      <li class="plan-travel__item plan-travel__item--tour"><a href="https://tour.his-j.com/ct/search/02A_10/USA/USA/GCN/">ツアー</a></li>
                      <li class="plan-travel__item plan-travel__item--ticket-hotel"><a href="https://www.his-j.com/kaigai/air-hotel/Default.aspx">航空券＋ホテル</a></li>
                      <li class="plan-travel__item plan-travel__item--ticket"><a href="https://www.his-j.com/kaigai/air/asia/india/las/">航空券</a></li>
                      <li class="plan-travel__item plan-travel__item--hotel"><a href="https://hotels.his-j.com/HotelList/GCN/">ホテル</a></li>
                      <li class="plan-travel__item plan-travel__item--optional-tour"><a href="https://activities.his-j.com/SightSeeing/O2/USA/S0047/">オプショナルツアー</a></li>
                      <li class="plan-travel__item plan-travel__item--rent-a-car"><a href="https://cars.his-j.com/RtfCarList.aspx?PickupCityCd=LAS">レンタカー</a></li>
                    </ul>
                  </div>
    
                  <div class="other">
                    <div class="other__block">
                      <h5 class="other__title">その他のアメリカ旅行</h5>
                      <ul class="other__list">
                        <li class="other__item"><a href="https://www.his-j.com/dst/america.htm">アメリカ旅行</a></li>
                        <li class="other__item"><a href="https://www.his-j.com/dst/lasvegas.htm">ラスベガス旅行</a></li>
                        <li class="other__item"><a href="https://www.his-j.com/dst/losangeles.htm">ロサンゼルス旅行</a></li>
                        <li class="other__item"><a href="https://www.his-j.com/dst/boston.htm">ボストン旅行</a></li>
                        <li class="other__item"><a href="https://www.his-j.com/dst/newyork.htm">ニューヨーク旅行</a></li>
                        <li class="other__item"><a href="https://www.his-j.com/dst/orlando.htm">オーランド旅行</a></li>
                      </ul>
                      <ul class="other__list">
                        <li class="other__item"><a href="https://www.his-j.com/dst/sandiego.htm">サンディエゴ旅行</a></li>
                      </ul>
                    </div>
                    <!-- <h5 class="other__title">その他のホテルのおすすめ特集</h5>
                    <ul class="bnrList">
                      <li class="bnrList__item--col3">
                        <a href="https://www.his-j.com/kokunai/kanto/special/lcc/?intcid=dtr_mbnr01_1" target="" class="bnrList__link"><img src="/kokunai/images/bnr_lcc_736.jpg" alt="LCC＆スカイマークで行く国内旅行特集" class="bnrList__img"/></a>
                      </li>
                      <li class="bnrList__item--col3">
                        <a href="https://www.his-j.com/kokunai/kanto/special/gw/?intcid=dtr_mbnr02_1" target="" class="bnrList__link"><img src="/kokunai/images/bnr_gw2020_736.jpg" alt="ゴールデンウィーク特集2020" class="bnrList__img"/></a>
                      </li>
                      <li class="bnrList__item--col3">
                        <a href="https://www.his-j.com/kokunai/kanto/special/lcc/?intcid=dtr_mbnr01_1" target="" class="bnrList__link"><img src="/kokunai/images/bnr_lcc_736.jpg" alt="LCC＆スカイマークで行く国内旅行特集" class="bnrList__img"/></a>
                      </li>
                    </ul> -->
                  </div>
                </div>
              </section>
    
              <section class="heritage">
                <div class="heritage__inner">
                  <h3 class="title">
                    <p class="title__text title__text--short">その他のアメリカの世界遺産</p>
                    <img src="/world-heritage/img/english_title/otherworldheritage.svg" alt="Other World Heritage" />
                  </h3>
                  <ul class="heritage__list">
                    <li class="heritage__item">
                      <a class="heritage__item-inner" href="/world-heritage/asia/india/yellowstone.html">
                        <p class="heritage__img">
                          <img class="object-fit" src="/world-heritage/asia/india/img/yellowstone-thumb.jpg" alt="イエローストーン国立公園" />
                        </p>
                        <p class="heritage__tag">アメリカ</p>
                        <p class="heritage__name">イエローストーン国立公園</p>
                      </a>
                    </li>
                    <li class="heritage__item">
                      <a class="heritage__item-inner" href="/world-heritage/asia/india/hawaii-volcanoes.html">
                        <p class="heritage__img">
                          <img class="object-fit" src="/world-heritage/asia/india/img/hawaii-volcanoes-thumb.jpg" alt="キラウエア火山" />
                        </p>
                        <p class="heritage__tag">アメリカ</p>
                        <p class="heritage__name">キラウエア火山</p>
                      </a>
                    </li>
                    <li class="heritage__item">
                      <a class="heritage__item-inner" href="/world-heritage/asia/india/yosemite.html">
                        <p class="heritage__img">
                          <img class="object-fit" src="/world-heritage/asia/india/img/yosemite-thumb.jpg" alt="ヨセミテ国立公園" />
                        </p>
                        <p class="heritage__tag">アメリカ</p>
                        <p class="heritage__name">ヨセミテ国立公園</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
    
              <section class="other-country">
                <div class="other-country__inner">
                  <h3 class="title">
                    <p class="title__text title__text--long">その他の北米の国の世界遺産を探す</p>
                    <img src="/world-heritage/img/english_title/othercountries.svg" alt="Other Countries" />
                  </h3>
                  <ul class="other-country__list">
                    <li class="other-country__item">
                      <div class="heritage__button heritage__button--other-country"><a href="">アメリカ</a></div>
                    </li>
                    <li class="other-country__item">
                      <div class="heritage__button heritage__button--other-country"><a href="">カナダ</a></div>
                    </li>
                  </ul>
                </div>
              </section>
    
              <section class="inquiry">
                <div class="inquiry__inner">
                  <script src="/tyo/lib/img/tour_img/tel_img/tour_inq.js" charset="Shift_JIS"></script>
                </div>
              </section>
    
              <section class="big-banner">
                <div class="big-banner__inner">
                  <a class="big-banner__img" href="https://www.natureworld.jp/">
                    <img class="object-fit" src="https://www.his-j.com/world-heritage/img/bnr_natureworld.jpg" alt="ネイチャーワールドバナー" />
                  </a>
                </div>
              </section>
    
              <section class="banner">
                <div class="banner__inner">
                  <h5 class="banner__title">その他のおすすめ特集</h5>
                  <!--#include virtual="/world-heritage/ssi/recomended-banner.shtml" -->
                  <h5 class="banner__title">季節・観光時期から探す</h5>
                  <!--#include virtual="/world-heritage/ssi/seasen-banner.shtml" -->
                </div>
              </section>
            </section>
          </main>
    
          <!--▼▼▼ トップへ戻る ▼▼▼-->
          <div class="goTop" id="js-goTop">
            <a href="#">
              <img class="goTop__img--pc" src="/world-heritage/img/icon/icon_pagetop.svg" alt="ページトップへ" />
            </a>
          </div>
          <!--▲▲▲ トップへ戻る ▲▲▲-->
    
          <div id="footer">
            <his-footer></his-footer>
          </div>
        </div>
    
        <!--▼▼▼ 新ヘッダーフッター用 ▼▼▼-->
        <script src="https://www.his-j.com/cmn/plugin/polyfill/es6-promise.min.js"></script>
        <script src="https://www.his-j.com/cmn/n-headfoot/js/headfoot.js"></script>
    
        <script src="https://www.his-j.com/cmn/n-headfoot/data/switch_data.js"></script>
    
        <script src="https://www.his-j.com/cmn/n-headfoot/template/template_header.js"></script>
        <script src="https://www.his-j.com/cmn/n-headfoot/template/template_footer_common.js"></script>
        <script src="/headfoot/js/number_stores.js"></script>
        <!--▲▲▲ 新ヘッダーフッター用 ▲▲▲-->
    
        <!--ページ設定用-->
        <script>
          /* ▼メインビジュアル反映▼ */
          const mv = '/world-heritage/north-america/america/img/grand-canyon-mv.jpg';
          /* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
    
          /* ▼google map反映▼ */
          // 出発地
          const dept = {
            name: '東京',
            lat: 35.763889, // 緯度
            lng: 140.391667, // 経度
          };
          // 到着地
          const dest = {
            name: 'ラスベガス',
            lat: 36.0840041,
            lng: -115.1559276,
          };
          // 世界遺産
          const heritage = {
            name: 'グランドキャニオン',
            lat: 36.1127805,
            lng: -114.0048244,
            src: '/world-heritage/asia/india/img/taj-mahal-thumb.jpg', //画像
            // english: 'Grand Canyon', //※空白かコメントアウトで表示消せます
          };
          /* ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ */
        </script>
        <script src="/world-heritage/js/details.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?client=gme-hiscoltd&channel=all_all&v=quarterly&callback=initMap"></script>
    
        <!-- SiteCatalyst code version: H.14.
    Copyright 1997-2007 Omniture, Inc. More info available at
    http://www.omniture.com -->
        <script type="text/javascript" language="JavaScript" src="https://www.his-j.com/s_code/s_code.js"></script>
        <script type="text/javascript" language="JavaScript">
          <!--
          /* You may give each page an identifying name, server, and channel on the next lines. */
          s.pageName="OTHER>all>★★ダミー★★"
          s.prop39="1"
          /* Conversion Variables */
          s.events=""
          /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
          var s_code=s.t();if(s_code)document.write(s_code)//-->
        </script>
        <!--/DO NOT REMOVE/-->
        <!-- End SiteCatalyst code version: H.14. -->
    
        <!-- Yahoo Tag Manager -->
        <script id="tagjs" type="text/javascript">
          (function () {
            var tagjs = document.createElement('script');
            var s = document.getElementsByTagName('script')[0];
            tagjs.async = true;
            tagjs.src = '//s.yjtag.jp/tag.js#site=b3mRptN';
            s.parentNode.insertBefore(tagjs, s);
          })();
        </script>
        <noscript>
          <iframe src="//b.yjtag.jp/iframe?c=b3mRptN" width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </noscript>
        <!-- End Yahoo Tag Manager -->
      </body>
    </html>
    `;
  }
}