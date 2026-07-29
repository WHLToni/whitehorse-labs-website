import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import './CaseStudies.css';
import ProductionStills from '@/components/case-studies/ProductionStills';
import PrefactorCollage from '@/components/case-studies/PrefactorCollage';

export default function CaseStudies() {
  const carouselRef = useRef(null);
  const carouselDotsRef = useRef(null);
  const bwShotsRef = useRef(null);
  const bwDotsRef = useRef(null);

  // SEO
  useEffect(() => {
    document.title = 'Whitehorse Labs — Work Examples';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Selected work from Whitehorse Labs — fractional marketing, websites, social media, print and AI tools.');
    }
  }, []);

  // Reveal animations (IntersectionObserver)
  useEffect(() => {
    const items = document.querySelectorAll('.cs-page .reveal');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 3D carousel
  useEffect(() => {
    const root = carouselRef.current;
    if (!root) return;
    const slides = Array.from(root.querySelectorAll('.slide'));
    const dotsWrap = carouselDotsRef.current;
    if (!dotsWrap || slides.length === 0) return;

    let n = slides.length, active = 0, timer = null, dir = 1;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    slides.forEach((s, i) => {
      s.addEventListener('click', () => { if (i !== active) go(i); });
    });

    const dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Go to page ${i + 1}`);
      b.addEventListener('click', () => go(i));
      dotsWrap.appendChild(b);
      return b;
    });

    const prevBtn = root.querySelector('.prev');
    const nextBtn = root.querySelector('.next');
    if (prevBtn) prevBtn.addEventListener('click', () => go((active - 1 + n) % n));
    if (nextBtn) nextBtn.addEventListener('click', () => go((active + 1) % n));

    function render() {
      const cw = slides[0].offsetWidth || 280;
      slides.forEach((s, i) => {
        const d = i - active, ad = Math.abs(d), sign = d < 0 ? -1 : 1;
        let x, sc, ry, op, z;
        if (d === 0) { x = 0; sc = 1; ry = 0; op = 1; z = 30; }
        else if (ad === 1) { x = sign * cw * 0.60; sc = .82; ry = sign * -20; op = .9; z = 20; }
        else if (ad === 2) { x = sign * cw * 1.02; sc = .66; ry = sign * -24; op = .55; z = 10; }
        else { x = sign * cw * 1.3; sc = .6; ry = 0; op = 0; z = 0; }
        s.style.transform = `translate(-50%,-50%) translateX(${x}px) scale(${sc}) rotateY(${ry}deg)`;
        s.style.opacity = op;
        s.style.zIndex = z;
        s.style.pointerEvents = op ? 'auto' : 'none';
      });
      dots.forEach((b, i) => { b.className = i === active ? 'on' : ''; });
    }

    function go(i) { active = i; render(); restart(); }
    function auto() { if (active >= n - 1) dir = -1; else if (active <= 0) dir = 1; active += dir; render(); }
    function restart() { if (reduce) return; if (timer) clearInterval(timer); timer = setInterval(auto, 3800); }

    root.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
    root.addEventListener('mouseleave', restart);
    window.addEventListener('resize', render);

    render();
    restart();

    return () => {
      if (timer) clearInterval(timer);
      dotsWrap.innerHTML = '';
      window.removeEventListener('resize', render);
    };
  }, []);

  // AI tool screenshot rotation
  useEffect(() => {
    const wrap = bwShotsRef.current;
    if (!wrap) return;
    const panes = Array.from(wrap.querySelectorAll('.shot-pane'));
    const dotsWrap = bwDotsRef.current;
    if (!dotsWrap || panes.length === 0) return;

    let active = 0, timer = null;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const dots = panes.map((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Tool screen ${i + 1}`);
      if (i === 0) b.className = 'on';
      b.addEventListener('click', () => show(i));
      dotsWrap.appendChild(b);
      return b;
    });

    function show(i) {
      panes[active].classList.remove('on');
      dots[active].className = '';
      active = i;
      panes[active].classList.add('on');
      dots[active].className = 'on';
      restart();
    }
    function next() { show((active + 1) % panes.length); }
    function restart() { if (reduce) return; if (timer) clearInterval(timer); timer = setInterval(next, 2800); }

    const frame = wrap.closest('.reveal');
    if (frame) {
      frame.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
      frame.addEventListener('mouseleave', restart);
    }
    restart();

    return () => {
      if (timer) clearInterval(timer);
      dotsWrap.innerHTML = '';
    };
  }, []);

  const bookingUrl = createPageUrl('Contact');

  return (
    <div className="cs-page">
      {/* HERO */}
      <section className="hero">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6995347084af76a3154d3f6b/b6cb39724_Headshot.jpeg"
          alt="Toni Morrow"
          className="hero-headshot reveal"
        />
        <div className="wrap">
          <div className="eyebrow reveal">Selected work</div>
          <h1 className="reveal">Big-brand marketing, without the big-brand budget.</h1>
          <p className="lede reveal">I'm a fractional marketing lead with 15+ years across global and startup brands, most of it in tech, commercialising products from development through to lifecycle marketing. Now, I bring all of that to growing local businesses, at fractional pricing. I work to your budget and help you decide where it's best spent, then either build a plan and show your team how to run it, or run it for you. On my own, or with brilliant freelancers from my network when the job calls for it.</p>
          <div className="hero-actions reveal">
            <Link to={bookingUrl} className="btn btn-solid">Book a call</Link>
            <a className="textlink" href="#work">See the work →</a>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="band band--glass">
        <div className="wrap">
          <div className="cap-head reveal">
            <div className="eyebrow grey">What I do</div>
            <h2>One person, the whole marketing job.</h2>
          </div>
          <div className="cap-grid">
            <div className="cap reveal">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.4" /></svg>
              <h3>Fractional marketing</h3>
              <p>I run the marketing function so you don't have to hire a marketer.</p>
            </div>
            <div className="cap reveal">
              <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="1.5" /><path d="M9 20h6M12 17v3" /></svg>
              <h3>Websites</h3>
              <p>Built, maintained and kept current, on real budgets.</p>
            </div>
            <div className="cap reveal">
              <svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" /></svg>
              <h3>Social media</h3>
              <p>On-brand content, filmed and posted like clockwork.</p>
            </div>
            <div className="cap reveal">
              <svg viewBox="0 0 24 24" fill="none"><path d="M6 3h9l3 3v15H6z" /><path d="M15 3v3h3M9 12h6M9 16h6" /></svg>
              <h3>Print &amp; signage</h3>
              <p>Brochures and signage that are designed, not templated.</p>
            </div>
            <div className="cap reveal">
              <svg viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="1.5" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>
              <h3>AI tools</h3>
              <p>Custom tools that make a real difference to your business and your team's productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE 01 · HANNOVER LODGE */}
      <section className="band band--mist hann" id="work">
        <div className="wrap">
          <div className="hann-head reveal">
            <div className="eyebrow mint">Case 01 · Equestrian</div>
            <h2>Hannover Lodge</h2>
            <p className="kicker">Sales and marketing collateral for premium brand positioning.</p>
            <p className="hann-lead">A young lodge, four years in and still building a premium name, Hannover needed to stand out at the annual bloodstock sales and warm buyers up beforehand. So I built a full showcase brochure for every horse in the draft, around ten a sale, telling its whole story: history, health, training, pedigree, personality and temperament. The result was a premium, distinctive experience that set Hannover apart, and buyers who arrived with a shortlist before they'd met a single horse.</p>
            <div className="hann-facts">
              <span>Digital brochure with interactive video, emailed pre-sale</span>
              <span>Gloss print on every stall, plus an interactive web version</span>
              <span>Branded signage, note cards &amp; social tiles for sale day</span>
            </div>
          </div>
          <div className="carousel reveal" ref={carouselRef}>
            <button className="cbtn prev" aria-label="Previous page">‹</button>
            <div className="track">
              <div className="slide"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/5aeff2cd1_HannoverLodge1-mostimportant.png" alt="Hannover Lodge — Lot 78 showcase with gallop video and testimonial" /></div>
              <div className="slide"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/6e016f490_HannoverLodgecoverexample.png" alt="Hannover Lodge — Lot 78 cover: Complacent | Thunderchine" /></div>
              <div className="slide"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/65eae48a0_HannoverLodge-Inside.png" alt="Hannover Lodge — Lot 78 History timeline inside spread" /></div>
              <div className="slide"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/6bb9e95c0_Hannover_Lodge-secondmostimportant.png" alt="Hannover Lodge — Conformation page, Lot 128" /></div>
              <div className="slide"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/3aed90027_HannoverLodgeTeampage-thisistheleastimportant.png" alt="Hannover Lodge — Our Vision and team page" /></div>
            </div>
            <button className="cbtn next" aria-label="Next page">›</button>
          </div>
          <div className="cdots" ref={carouselDotsRef}></div>
        </div>
      </section>

      {/* CASE 02 · STAYBLE */}
      <section className="band">
        <div className="wrap">
          <article className="case reveal">
            <div className="case-head">
              <div className="eyebrow">Case 02 · Equestrian · My own product</div>
              <h2>Stayble</h2>
              <p className="kicker">A horse-sitting app I designed and built end to end.</p>
              <p className="case-body">Stayble is my own product, an app that connects horse owners with experienced sitters and carers, and I've just added agistment matching too. I designed and built the whole thing and launched its social presence from scratch. It's a spare-time project, so it's been slow moving, but it's almost there.</p>
              <ul className="facts">
                <li>App designed and built end to end</li>
                <li>Social presence launched from zero</li>
                <li>In final pre-launch testing</li>
              </ul>
            </div>
            <div className="case-media">
              <div className="combo">
                <div className="device-browser">
                  <div className="bar"><i className="r"></i><i className="y"></i><i className="g"></i><span className="addr"></span></div>
                  <div className="screen"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/babfe5800_StaybleHomescreenLaptop.png" alt="Stayble website homepage on desktop" /></div>
                </div>
                <div className="device-phone"><div className="screen"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/c7a54c37c_StaybleInstaEarlyPostMobile.jpg" alt="Stayble Instagram social post on mobile" /></div></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CASE 03 · YATALA */}
      <section className="band band--mist">
        <div className="wrap">
          <article className="case reveal">
            <div className="case-head">
              <div className="eyebrow">Case 03 · Marine &amp; caravans</div>
              <h2>Yatala Boats &amp; Caravans</h2>
              <p className="kicker">From old-school paper records to a digitised marketing engine.</p>
              <p className="case-body">The owner is five years out from retirement, with a loyal customer base entirely on paper records and filing boxes, and a new product to launch. He knew that selling his business would be challenging without digitising, and wanted to make as much impact as possible with limited budget. Marketing to an audience that is familiar with your brand is far more cost effective and successful than constantly looking for new customers. So I moved all of his paper client records into a marketing automation platform and SMS delivery platform, and kicked off ongoing segmented multi-channel campaigns to this warm audience. We filmed the founder doing walk-throughs of the new boats in the yard and on the water, for use across multiple channels, and I've started slowly introducing brand standards (as budget allows) into socials. The website brief was clear: no rebuild, so I keep an established site current and working rather than overhauling it.</p>
            </div>
            <div className="case-media">
              <div className="phone-pair">
                <div className="device-phone p1"><div className="screen"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/d545791b1_YatalaNewsletterMobile1.jpg" alt="Yatala Boats &amp; Caravans email newsletter" /></div></div>
                <div className="device-phone p2"><div className="screen"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/9d2f9b7ee_YatalaInstaGridMobile.jpg" alt="Yatala branded Instagram grid" /></div></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CASE 04 · PREFACTOR */}
      <section className="band">
        <div className="wrap">
          <article className="case reveal">
            <div className="case-head">
              <div className="eyebrow">Case 04 · Tech / software</div>
              <h2>Prefactor</h2>
              <p className="kicker">Brand, strategy and a US launch for an Aussie tech startup.</p>
              <p className="case-body">Prefactor had just received Series B funding ($1.5M) and was looking for help preparing for a US soft-launch. They had a scrappy product and brand they'd built themselves, and needed polish, gravitas and credibility before hitting US shores.</p>
              <p className="case-body">Working with the CEO, I ran the customer discovery programme, built out market research and strategic plan, built out a complete brand identity and collateral, and helped shape the roadmap for product development using real market data and insights.</p>
              <ul className="facts">
                <li>Brand refresh and strategic plan</li>
                <li>US launch preparation</li>
                <li>Customer discovery programme and market research</li>
                <li>Software product roadmapping</li>
              </ul>
              <Link to="/CaseStudies/Prefactor" className="textlink">Read the full Prefactor case study →</Link>
            </div>
            <div className="case-media">
              <PrefactorCollage />
            </div>
          </article>
        </div>
      </section>

      {/* CASE 05 · SCADA */}
      <section className="band band--mist">
        <div className="wrap">
          <article className="case reveal">
            <div className="case-head">
              <div className="eyebrow">Case 05 · Cyber security</div>
              <h2>OT, ICS &amp; SCADA Automation Conference</h2>
              <p className="kicker">Fractional marketing for an annual southern hemisphere cyber-security conference.</p>
              <p className="case-body">I build and run the annual multi-channel marketing campaign for this annual conference to a very niche, corporate audience. At last year's conference, I interviewed and filmed delegates and speakers throughout the day and produced a twelve-part series of social media videos, to promote this year's conference and seed the European launch early next year.</p>
              <ul className="facts">
                <li>Registration-driving email campaigns</li>
                <li>Twelve delegate and speaker interviews, filmed and produced</li>
                <li>Video series supporting APAC positioning and the Europe launch</li>
              </ul>
            </div>
            <div className="case-media">
              <ProductionStills scale={80} />
            </div>
          </article>
        </div>
      </section>

      {/* CASE 06 · INSTYLE MASONRY */}
      <section className="band band--paper">
        <div className="wrap">
          <article className="case reveal">
            <div className="case-head">
              <div className="eyebrow">Case 06 · AI Tradie Quoting Tool</div>
              <h2>InStyle Masonry</h2>
              <p className="kicker">Custom-built AI quoting tool</p>
              <p className="case-body">I built this quoting tool for a bricklaying company, after the owner told me he wastes so much time travelling out to properties to view the site, then back to the office to produce the quote. This AI tool asks the potential customer to upload photos, then asks a series of questions to get the info it needs, and produces a quote in minutes. The same idea works anywhere a small business is buried in admin: quotes, bookings, follow ups, onboarding.</p>
              <ul className="facts">
                <li>AI-assisted photo-to-quote wizard</li>
                <li>Site and tool built end to end</li>
                <li>Repeatable pattern for admin-heavy trades</li>
              </ul>
              <a className="textlink" href="https://demo-brickwork-quote.base44.app" target="_blank" rel="noopener noreferrer">Try it live →</a>
            </div>
            <div className="case-media">
              <div className="device-browser bwframe">
                <div className="bar"><i className="r"></i><i className="y"></i><i className="g"></i><span className="addr"></span></div>
                <div className="screen">
                  <div className="bwshots" ref={bwShotsRef}>
                    <div className="shot-pane on"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/fa31f707c_InStyleMasonryLandingPage.png" alt="InStyle Masonry landing page with instant bricklaying quote tool" /></div>
                    <div className="shot-pane"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/192625c37_Page1ofthetoolwithahousephotouploaded.png" alt="Quote tool step 1: upload a property photo" /></div>
                    <div className="shot-pane"><img src="https://media.base44.com/images/public/6995347084af76a3154d3f6b/c22d2cbdc_Page2ofthetool.png" alt="Quote tool step 3: tailored project questions" /></div>
                  </div>
                </div>
              </div>
              <div className="cdots" ref={bwDotsRef}></div>
            </div>
          </article>
        </div>
      </section>

      {/* CLOSING */}
      <section className="band">
        <div className="wrap close">
          <div className="eyebrow reveal">Let's talk</div>
          <h2 className="reveal">Your business, running like it's got a marketing team.</h2>
          <p className="reveal">If any of this looks like what you need, let's have a chat about where I could help.</p>
          <div className="reveal"><Link to={bookingUrl} className="btn btn-solid">Book a call</Link></div>
          <div className="sign reveal">— Whitehorse Labs</div>
        </div>
      </section>

    </div>
  );
}