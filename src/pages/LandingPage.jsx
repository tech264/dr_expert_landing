import { useState, useEffect, useRef } from 'react';
import jumi from '../assets/jumi.png';
import fida from '../assets/fida.png';
import firoz from '../assets/firoz.png';

//done
const testimonials = [
  {
    id: 1,
    name: 'Jumi',
    avatar: jumi,
    reviewCount: '1 review',
    ago: '8 months ago',
    text: "Choosing Dr. Expert Edulinks was the best decision for my MBBS abroad journey. Their team guided me like a family — clear information, proper counseling, and step-by-step support. They handled everything from admission to visa. Truly the best consultancy in Kerala for MBBS abroad.",
  },
  {
    id: 2,
    name: 'Fidha Latheef',
    avatar: fida,
    reviewCount: '5 reviews · 5 photos',
    ago: '8 months ago',
    text: "No doubt the finest MBBS consultants in Kerala. Their services are top notch. They provide clear directions right from the beginning and clear all queries promptly. Without doubt the best MBBS consultancy in Kerala.",
  },
  {
    id: 3,
    name: 'Firoz Babu',
    avatar: firoz,
    reviewCount: '3 reviews',
    ago: '8 months ago',
    text: "Best MBBS abroad consultancy in India. The support Dr. Expert gave us until my son flew to Cairo University, Egypt was excellent and more than expected. Thank you Dr. Expert Team!",
  },
  {
    id: 4,
    name: 'Nistil Rooy',
    avatar: null,
    initial: 'n',
    avatarBg: '#1565c0',
    reviewCount: '1 review',
    ago: '8 months ago',
    text: "Really happy with their service! Truly the best MBBS abroad consultancy in Calicut and Kerala. Great guidance, very supportive, and they make the process smooth. Highly recommended!",
  },
];

const countries = [
  { flag: '\u{1F1FA}\u{1F1FF}', name: 'Uzbekistan', tag: 'Central Asia \u00B7 NMC Approved' },
  { flag: '\u{1F1EC}\u{1F1EA}', name: 'Georgia', tag: 'Europe \u00B7 NMC Approved' },
  { flag: '\u{1F1EA}\u{1F1EC}', name: 'Egypt', tag: 'Africa \u00B7 NMC Approved' },
  { flag: '\u{1F1E7}\u{1F1B4}', name: 'Bulgaria', tag: 'Europe \u00B7 NMC Approved' },
  { flag: '\u{1F1F7}\u{1F1F4}', name: 'Romania', tag: 'Europe \u00B7 NMC Approved' },
  { flag: '\u{1F1EC}\u{1F1E7}', name: 'UK', tag: 'Europe \u00B7 NMC Approved' },
];


const btnWaStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  background: '#25d366',
  color: '#fff',
  fontSize: '1.05rem',
  fontWeight: 800,
  border: 'none',
  borderRadius: '14px',
  padding: '17px 24px',
  width: '100%',
  maxWidth: '420px',
  margin: '0 auto',
  cursor: 'pointer',
  textDecoration: 'none',
  textAlign: 'center',
  boxShadow: '0 4px 24px rgba(37,211,102,.35)',
  transition: 'background .2s, transform .15s, box-shadow .2s',
};

var waIcon = (
  <svg viewBox="0 0 24 24" fill="white" style={{ width: 24, height: 24, flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.804a.75.75 0 00.92.92l5.968-1.465A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.952-1.355l-.355-.211-3.683.904.923-3.58-.232-.369A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

var checkIcon = (
  <span style={{ width: 18, height: 18, flexShrink: 0, marginTop: 3 }}>
    <svg viewBox="0 0 24 24" fill="none" stroke="#febf1b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

var starIcon = (
  <svg viewBox="0 0 24 24" fill="#febf1b" style={{ width: 22, height: 22 }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

var smallStarIcon = (
  <svg viewBox="0 0 24 24" fill="#febf1b" style={{ width: 13, height: 13 }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

var googleLogo = (
  <svg viewBox="0 0 48 48" style={{ width: 24, height: 24 }}>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

function LandingPage() {

  const [current, setCurrent] = useState(0);
  const [isGeneratingToken, setIsGeneratingToken] = useState(false);
  const timerRef = useRef(null);
  const [token, setToken] = useState(null)
  const [retry, setRetry] = useState(false)
  
 

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(function () {
      setCurrent(function (prev) { return (prev + 1) % testimonials.length; });
    }, 4500);
  }

  useEffect(function () {
    resetTimer();
    return function () { clearInterval(timerRef.current); };
  }, []);



  function handleWhatsApp(buttonName) {
    if (token) {
        window.openWhatsApp(buttonName, token);
    } else {
      setIsGeneratingToken(true)
      setRetry(!retry)
    }
  }

 

  useEffect(() => {
    if (!token) {


      

      async function handleWhatsAppApi() {
        console.log("Hello world")
        const urlParams = new URLSearchParams(window.location.search);
        const utm_campign = urlParams.get('utm_campaign') || '';
        const utm_adset = urlParams.get('utm_adset') || '';
        const utm_ad = urlParams.get('utm_ad') || '';
    
        console.log(urlParams);

        console.log("Params");
        console.log(utm_campign);
        console.log(utm_ad);
        console.log(utm_adset);
        
    
        let token = null;
    
        // https://landing.drexpertedu.com/?utm_source=facebook&utm_campaign=Georgia+%7C+website+%7C+engmt+%7C+16/05/26&utm_adset=Georgia+%7C+website+%7C+Kerala+%7C+engmt+%7C+Ad+Set&utm_ad=Georgia+%7C+Kerala+%7C+Cr+1+%7C+Poster+common&fbclid=PAVERFWASks0tleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafa6srdX8hQFHK_SUh1nKbwaEVTUXEmIiP1jhEYXQkFgGRIJapYTT_6MXMk0g_aem_w86XXDx-QW2e9m-2lawyPg
    
        if (utm_campign || utm_adset || utm_ad) {
          // setIsGeneratingToken(true);
          try { 
            // const apiUrl = `http://localhost:3000/api/track-utm?utm_campign=${encodeURIComponent(utm_campign)}&utm_adset=${encodeURIComponent(utm_adset)}&utm_ad=${encodeURIComponent(utm_ad)}`;
            const apiUrl = `https://api.drexpertedu.com/neet-exam/api/track-utm?campign=${encodeURIComponent(utm_campign)}&utm_adset=${encodeURIComponent(utm_adset)}&utm_ad=${encodeURIComponent(utm_ad)}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data.success) token = data.token;
          } catch (error) {
            console.error("Error tracking UTM:", error);
          }
          // setIsGeneratingToken(false);
        }
    
        setToken(token)
        setIsGeneratingToken(false)
      }

      handleWhatsAppApi()
    }
  },[retry])

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#f5f5f5', color: '#0a0a0a', overflowX: 'hidden', minHeight: '100vh' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(1.7); }
        }
      `}</style>

      {/* ─── HEADER ─── */}
      <header
        style={{
          background: '#0a0a0a',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '3px solid #febf1b',
        }}
      >
        <img
          src="https://www.drexpertedu.com/_next/image/?url=%2Fimages%2Flogo.png&w=256&q=75"
          alt="Dr. Expert Edulinks"
          style={{ height: 64, width: 'auto', display: 'block' }}
        />
      </header>

      {/* ─── HERO ─── */}
      <section
        style={{
          background: '#0a0a0a',
          textAlign: 'center',
          padding: '36px 24px 20px',
        }}
      >
        <h1
          style={{
            fontSize: '1.8rem',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: 14,
          }}
        >
          Study{' '}
          <span
            style={{
              color: '#febf1b',
              background: 'rgba(254,191,27,.12)',
              borderRadius: 8,
              padding: '2px 8px',
              display: 'inline',
            }}
          >
            MBBS Abroad
          </span>
          <br />
          with Doctor-Led Guidance
        </h1>
        <p
          style={{
            fontSize: '.95rem',
            color: '#a0a0a0',
            fontWeight: 500,
            lineHeight: 1.7,
            marginBottom: 0,
            maxWidth: 360,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Trusted by <strong style={{ color: '#fff', fontWeight: 700 }}>5,000+ students</strong> across the world for MBBS Abroad —
          Admissions in <strong style={{ color: '#fff', fontWeight: 700 }}>Europe, Egypt, Uzbekistan, Georgia, Romania</strong> and more
        </p>
      </section>

      {/* ─── WHATSAPP BUTTON ─── */}
      <div
        style={{
          background: '#0a0a0a',
          padding: '12px 20px 16px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <a
          style={{ ...btnWaStyle, ...(isGeneratingToken ? { opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' } : {}) }}
          onClick={function (e) { e.preventDefault(); handleWhatsApp('hero_cta'); }}
          href="#"
        >
          {waIcon}
          Chat on WhatsApp Now
        </a>
      </div>

      {/* ─── BADGES ─── */}
      <div
        style={{
          background: '#0a0a0a',
          padding: '0 20px 28px',
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ color: '#a0a0a0', fontSize: '.78rem', fontWeight: 600 }}>
          {'\u2713'} Free Consultation
        </span>
        <span style={{ color: '#a0a0a0', fontSize: '.78rem', fontWeight: 600 }}>
          {'\u2713'} Doctor-Led Team
        </span>
        <span style={{ color: '#a0a0a0', fontSize: '.78rem', fontWeight: 600 }}>
          {'\u2713'} 60+ Countries
        </span>
        <span style={{ color: '#a0a0a0', fontSize: '.78rem', fontWeight: 600 }}>
          {'\u2713'} 24/7 Support
        </span>
      </div>

      {/* ─── TRUST CARDS ─── */}
      <div style={{ background: '#0a0a0a', padding: '0 20px 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            maxWidth: 420,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              background: '#1e1e1e',
              border: '1.5px solid #febf1b',
              borderRadius: 14,
              padding: '16px 12px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#febf1b', lineHeight: 1 }}>
              4.8 {'\u2605'}
            </div>
            <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#a0a0a0', marginTop: 6, lineHeight: 1.3 }}>
              Google Rating
            </div>
          </div>
          <div
            style={{
              background: '#1e1e1e',
              border: '1.5px solid #febf1b',
              borderRadius: 14,
              padding: '16px 12px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#febf1b', lineHeight: 1 }}>
              5,000+
            </div>
            <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#a0a0a0', marginTop: 6, lineHeight: 1.3 }}>
              Students Placed Abroad
            </div>
          </div>
          <div
            style={{
              background: '#1e1e1e',
              border: '1.5px solid #febf1b',
              borderRadius: 14,
              padding: '16px 12px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#febf1b', lineHeight: 1 }}>
              11+ Yrs
            </div>
            <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#a0a0a0', marginTop: 6, lineHeight: 1.3 }}>
              Experience
            </div>
          </div>
          <div
            style={{
              background: '#1e1e1e',
              border: '1.5px solid #febf1b',
              borderRadius: 14,
              padding: '16px 12px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#febf1b', lineHeight: 1 }}>
              Doctor
            </div>
            <div style={{ fontSize: '.7rem', fontWeight: 700, color: '#a0a0a0', marginTop: 6, lineHeight: 1.3 }}>
              Led MBBS Consultancy
            </div>
          </div>
        </div>
      </div>

      {/* ─── WHY CHOOSE US ─── */}
      <section style={{ background: '#fff', padding: '32px 24px' }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '.7rem',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#f0b010',
            marginBottom: 18,
          }}
        >
          Why Choose Us
        </div>
        <ul style={{ listStyle: 'none', maxWidth: 480, margin: '0 auto 24px' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14, fontSize: '.97rem', fontWeight: 600, color: '#0a0a0a', lineHeight: 1.5 }}>
            {checkIcon}
            Doctor-led guidance — 11+ years of experience
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14, fontSize: '.97rem', fontWeight: 600, color: '#0a0a0a', lineHeight: 1.5 }}>
            {checkIcon}
            5,000+ students successfully placed abroad
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14, fontSize: '.97rem', fontWeight: 600, color: '#0a0a0a', lineHeight: 1.5 }}>
            {checkIcon}
            NMC approved universities in 60+ countries
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14, fontSize: '.97rem', fontWeight: 600, color: '#0a0a0a', lineHeight: 1.5 }}>
            {checkIcon}
            Visa, documentation &amp; 24/7 support included
          </li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            style={{ ...btnWaStyle, ...(isGeneratingToken ? { opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' } : {}) }}
            onClick={function (e) { e.preventDefault(); handleWhatsApp('why_cta'); }}
            href="#"
          >
            {waIcon}
            Get Free Consultation on WhatsApp
          </a>
        </div>
      </section>

      {/* ─── STRIPE ─── */}
      <div
        style={{
          background: '#febf1b',
          textAlign: 'center',
          padding: '14px 20px',
          fontSize: '.9rem',
          fontWeight: 800,
          color: '#0a0a0a',
        }}
      >
        Be a Doctor — Guided by Doctors. 100% Transparent Process.
      </div>

      {/* ─── STUDENT SUCCESS STORIES ─── */}
      <section style={{ background: '#fff', padding: '32px 20px' }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '.7rem',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#f0b010',
            marginBottom: 18,
          }}
        >
          Student Success Stories
        </div>
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
            {googleLogo}
            <span style={{ fontSize: '.85rem', fontWeight: 700, color: '#0a0a0a' }}>Google Reviews</span>
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0a0a0a', lineHeight: 1 }}>4.8</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, margin: '6px 0 4px' }}>
            {starIcon}
            {starIcon}
            {starIcon}
            {starIcon}
            {starIcon}
          </div>
          <p style={{ fontSize: '.82rem', color: '#a0a0a0', fontWeight: 600, marginBottom: 20 }}>
            1,000+ Reviews on Google
          </p>

          {/* Testimonials */}
          {testimonials.map(function (t, i) {
            return (
              <div
                key={t.id}
                className="testimonial"
                style={{
                  display: i === current ? 'block' : 'none',
                  background: '#f9f9f9',
                  borderRadius: 14,
                  padding: '18px 16px',
                  textAlign: 'left',
                  borderLeft: '4px solid #febf1b',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: t.avatar ? '#0a0a0a' : (t.avatarBg || '#0a0a0a'),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: '#fff',
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      t.initial
                    )}
                  </div>
                  <div>
                    <div style={{ color: '#0a0a0a', fontWeight: 800, fontSize: '.95rem' }}>{t.name}</div>
                    <div style={{ color: '#a0a0a0', fontSize: '.75rem', marginTop: 1 }}>{t.reviewCount}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap', marginBottom: 8 }}>
                  {smallStarIcon}
                  {smallStarIcon}
                  {smallStarIcon}
                  {smallStarIcon}
                  {smallStarIcon}
                  <span style={{ color: '#a0a0a0', fontSize: '.73rem', marginLeft: 4 }}>· {t.ago}</span>
                </div>
                <p style={{ fontSize: '.88rem', color: '#0a0a0a', lineHeight: 1.7 }}>{t.text}</p>
              </div>
            );
          })}

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 7, marginTop: 16 }}>
            {testimonials.map(function (_, i) {
              return (
                <button
                  key={i}
                  onClick={function () { setCurrent(i); resetTimer(); }}
                  aria-label={'Review ' + (i + 1)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: i === current ? '#f0b010' : '#d0d0d0',
                    cursor: 'pointer',
                    transition: 'background .2s, transform .2s',
                    border: 'none',
                    padding: 0,
                    transform: i === current ? 'scale(1.35)' : 'scale(1)',
                  }}
                />
              );
            })}
          </div>

          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
            <a
              style={{ ...btnWaStyle, ...(isGeneratingToken ? { opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' } : {}) }}
              onClick={function (e) { e.preventDefault(); handleWhatsApp('reviews_cta'); }}
              href="#"
            >
              {waIcon}
              Join 1,000+ Students — Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── TOP DESTINATIONS ─── */}
      <section style={{ background: '#0a0a0a', padding: '32px 20px' }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '.7rem',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#f0b010',
            marginBottom: 18,
          }}
        >
          Top Destinations
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
            maxWidth: 420,
            margin: '0 auto 24px',
          }}
        >
          {countries.map(function (c, i) {
            return (
              <div
                key={i}
                style={{
                  background: '#1e1e1e',
                  border: '1px solid #2e2e2e',
                  borderRadius: 12,
                  padding: '14px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span style={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}>
                  {c.flag}
                </span>
                <div>
                  <div style={{ fontSize: '.88rem', fontWeight: 700, color: '#fff' }}>{c.name}</div>
                  <div style={{ fontSize: '.65rem', fontWeight: 600, color: '#a0a0a0', marginTop: 2 }}>{c.tag}</div>
                </div>
              </div>
            );
          })}
        </div>
        <p
          style={{
            textAlign: 'center',
            color: '#a0a0a0',
            fontSize: '.82rem',
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          + <span style={{ color: '#febf1b', fontWeight: 800 }}>54 more countries</span> available — ask us on WhatsApp
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            style={{ ...btnWaStyle, ...(isGeneratingToken ? { opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' } : {}) }}
            onClick={function (e) { e.preventDefault(); handleWhatsApp('countries_cta'); }}
            href="#"
          >
            {waIcon}
            Explore All Countries on WhatsApp
          </a>
        </div>
      </section>

      {/* ─── URGENCY ─── */}
      <div style={{ background: '#0a0a0a', padding: '0 20px 32px' }}>
        <div
          style={{
            border: '1.5px solid #febf1b',
            borderRadius: 20,
            padding: '24px 20px',
            textAlign: 'center',
            maxWidth: 480,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              fontSize: '1.4rem',
              fontWeight: 900,
              color: '#febf1b',
              marginBottom: 8,
              lineHeight: 1.25,
            }}
          >
            🔥 MBBS Seats Filling Fast
          </div>
          <div
            style={{
              fontSize: '.92rem',
              color: '#fff',
              fontWeight: 600,
              marginBottom: 20,
              lineHeight: 1.5,
            }}
          >
            Seats are filling fast in NMC approved universities
          </div>
          <a
            style={{
              ...btnWaStyle,
              background: '#1a8c44',
              fontSize: '.88rem',
              padding: '13px 20px',
              boxShadow: '0 4px 16px rgba(0,0,0,.3)',
              ...(isGeneratingToken ? { opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' } : {}),
            }}
            onClick={function (e) { e.preventDefault(); handleWhatsApp('urgency_cta'); }}
            href="#"
          >
            <svg viewBox="0 0 24 24" fill="white" style={{ width: 20, height: 20, flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.804a.75.75 0 00.92.92l5.968-1.465A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.952-1.355l-.355-.211-3.683.904.923-3.58-.232-.369A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Reserve My Seat on WhatsApp
          </a>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          background: '#141414',
          color: '#a0a0a0',
          textAlign: 'center',
          padding: '20px 20px 90px',
          fontSize: '.78rem',
          borderTop: '1px solid #222',
        }}
      >
        <p>
          © 2025{' '}
          <a
            href="https://www.drexpertedu.com/"
            target="_blank"
            rel="noopener"
            style={{ color: '#febf1b', textDecoration: 'none' }}
          >
            Dr. Expert Edulinks
          </a>
          — All rights reserved
        </p>
      </footer>

      {/* ─── STICKY WHATSAPP ─── */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#25d366',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          zIndex: 100,
          boxShadow: '0 -4px 20px rgba(0,0,0,.25)',
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#fff',
            flexShrink: 0,
            animation: 'pulse 1.4s infinite',
          }}
        />
        <a
          onClick={function (e) { e.preventDefault(); handleWhatsApp('sticky_cta'); }}
          href="#"
          style={{
            color: '#fff',
            fontWeight: 800,
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            ...(isGeneratingToken ? { opacity: 0.5, pointerEvents: 'none', cursor: 'not-allowed' } : {}),
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" style={{ width: 24, height: 24, flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.804a.75.75 0 00.92.92l5.968-1.465A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.952-1.355l-.355-.211-3.683.904.923-3.58-.232-.369A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
          </svg>
          Chat with Admission Advisor Now
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
