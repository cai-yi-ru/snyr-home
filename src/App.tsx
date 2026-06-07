const critterUrl = "https://crittermap.snyr.tw/";
const contactEmail = "contact@snyr.tw";

const routes = {
  home: "/",
  privacy: "/privacy",
};

function AppHeader() {
  return (
    <header className="site-header">
      <a className="brand" href={routes.home} aria-label="回到 SNYR 首頁">
        <span className="brand-mark">S</span>
        <span>
          <span className="brand-name">SNYR</span>
          <span className="brand-note">入口頁</span>
        </span>
      </a>

      <nav aria-label="主要導覽">
        <a href={critterUrl}>小獸所</a>
        <a href={routes.privacy}>隱私權政策</a>
        <a href={`mailto:${contactEmail}`}>聯絡</a>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <AppHeader />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="map-field">
            <img
              src="/snyr-map-hero.png"
              alt="抽象地圖插畫，呈現路線、定位點與小獸所的探索意象"
            />
            <span className="map-caption">Critter Map / Public Services</span>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">SNYR public gateway</p>
            <h1 id="hero-title">小獸所與 SNYR 服務入口</h1>
            <p className="lede">
              這裡是 SNYR 根網頁，整理正在公開提供的服務、基本站務資訊與使用者聯絡管道。
            </p>
            <div className="hero-actions" aria-label="主要操作">
              <a className="button-primary" href={critterUrl}>
                前往小獸所
              </a>
              <a className="button-secondary" href={routes.privacy}>
                查看隱私權政策
              </a>
            </div>
          </div>
        </section>

        <section className="info-grid" aria-label="網站資訊">
          <article>
            <span className="card-index">01</span>
            <h2>小獸所</h2>
            <p>
              前往 Critter Map，探索與小獸相關的地圖服務與內容。
            </p>
            <a href={critterUrl}>crittermap.snyr.tw</a>
          </article>
          <article>
            <span className="card-index">02</span>
            <h2>隱私權政策</h2>
            <p>
              了解本網站如何處理基本連線資訊、第三方服務與聯絡信件。
            </p>
            <a href={routes.privacy}>閱讀政策</a>
          </article>
          <article>
            <span className="card-index">03</span>
            <h2>聯絡方式</h2>
            <p>
              有站務、合作或資料相關問題，可以透過電子郵件聯絡。
            </p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <AppHeader />
      <main className="policy-shell">
        <section className="policy-heading">
          <p className="eyebrow">Privacy Policy</p>
          <h1>隱私權政策</h1>
          <p>
            本政策適用於 SNYR 根網頁與此入口頁所提供的站務資訊。最後更新：2026 年 6 月 7 日。
          </p>
        </section>

        <section className="policy-content" aria-label="隱私權政策內容">
          <article>
            <h2>資料收集</h2>
            <p>
              當你瀏覽本網站時，伺服器或代管服務可能會自動記錄必要的技術資訊，例如 IP 位址、瀏覽器類型、造訪時間與請求路徑，用於維護網站安全、除錯與流量分析。
            </p>
          </article>
          <article>
            <h2>Cookie 與第三方服務</h2>
            <p>
              本網站可能使用 Google AdSense 或其他第三方服務提供廣告、統計或防濫用功能。這些服務可能依其政策使用 Cookie 或類似技術。
            </p>
          </article>
          <article>
            <h2>聯絡資料</h2>
            <p>
              若你主動寄信聯絡，我們會使用你提供的電子郵件地址與內容回覆問題、處理站務或保存必要紀錄。
            </p>
          </article>
          <article>
            <h2>你的選擇</h2>
            <p>
              你可以透過瀏覽器設定管理 Cookie，也可以來信詢問、更新或請求刪除你曾主動提供的聯絡資料。
            </p>
          </article>
          <article>
            <h2>聯絡我們</h2>
            <p>
              對本政策或網站資料處理方式有疑問，請寄信至
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>。
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 SNYR</span>
      <span className="footer-dot" aria-hidden="true" />
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      <span className="footer-dot" aria-hidden="true" />
      <a href="/ads.txt">ads.txt</a>
    </footer>
  );
}

export function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === routes.privacy) {
    return <PrivacyPage />;
  }

  return <HomePage />;
}
