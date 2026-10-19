(function(){
  'use strict';
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prev = document.getElementById('prevSlide');
  const next = document.getElementById('nextSlide');
  const count = document.getElementById('slideCount');
  const title = document.getElementById('currentSlideTitle');
  const dotsWrap = document.getElementById('carouselDots');
  const menuToggle = document.getElementById('menuToggle');
  const menuPanel = document.getElementById('navMenuPanel');
  const navLinks = Array.from(document.querySelectorAll('#mainNav a'));
  const year = document.getElementById('year');
  let current = 0;
  if (year) year.textContent = new Date().getFullYear();
  if (!slides.length) return;

  function sectionForLink(link){
    const hash = (link.getAttribute('href') || '').slice(1);
    return slides.findIndex(slide => slide.querySelector('#' + CSS.escape(hash)) || slide.id === hash || slide.querySelector('[id="' + hash + '"]'));
  }
  function activate(index, updateHash){
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      if (!active) slide.querySelectorAll('details[open]').forEach(d => d.open = false);
    });
    const label = slides[current].dataset.slideTitle || 'EXIE';
    if (title) title.textContent = label;
    if (count) count.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    if (prev) prev.disabled = current === 0;
    if (next) next.textContent = current === slides.length - 1 ? 'Back to cover ↑' : 'Next page →';
    navLinks.forEach(link => {
      const idx = sectionForLink(link);
      if (idx === current) link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current');
    });
    Array.from(dotsWrap ? dotsWrap.children : []).forEach((dot,i) => {
      dot.classList.toggle('is-active',i===current);
      dot.setAttribute('aria-current',i===current?'step':'false');
    });
    if (updateHash) {
      const id = slides[current].querySelector('section[id], .trust-strip[id]');
      if (id && id.id) history.replaceState(null,'','#'+id.id);
    }
    if (menuPanel) menuPanel.classList.remove('is-open');
    if (menuToggle) { menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Open navigation'); menuToggle.textContent='☰'; }
    window.scrollTo({top:0,behavior:'smooth'});
  }
  if (dotsWrap) {
    slides.forEach((slide,i)=>{
      const dot=document.createElement('button');
      dot.type='button'; dot.className='carousel-dot';
      dot.setAttribute('aria-label','Go to page '+(i+1)+': '+(slide.dataset.slideTitle||'EXIE'));
      dot.addEventListener('click',()=>activate(i,true)); dotsWrap.appendChild(dot);
    });
  }
  if (prev) prev.addEventListener('click',()=>activate(current-1,true));
  if (next) next.addEventListener('click',()=>activate(current===slides.length-1?0:current+1,true));
  if (menuToggle && menuPanel) {
    menuToggle.addEventListener('click',()=>{
      const open=!menuPanel.classList.contains('is-open');
      menuPanel.classList.toggle('is-open',open);
      menuToggle.setAttribute('aria-expanded',String(open));
      menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
      menuToggle.textContent=open?'×':'☰';
    });
  }
  navLinks.forEach(link=>link.addEventListener('click',event=>{
    const index=sectionForLink(link);
    if(index>=0){event.preventDefault();activate(index,true);}
  }));
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    if(link.closest('#mainNav')) return;
    link.addEventListener('click',event=>{
      const index=sectionForLink(link);
      if(index>=0){event.preventDefault();activate(index,true);}
    });
  });
  document.addEventListener('keydown',event=>{
    if(event.altKey||event.ctrlKey||event.metaKey) return;
    if(event.key==='ArrowRight' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){activate(current+1,true);}
    if(event.key==='ArrowLeft' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){activate(current-1,true);}
    if(event.key==='Escape' && menuPanel && menuPanel.classList.contains('is-open')){menuPanel.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';menuToggle.focus();}
  });
  const initialHash=decodeURIComponent(location.hash.slice(1));
  if(initialHash){const initial=slides.findIndex(slide=>slide.querySelector('#'+CSS.escape(initialHash))||slide.querySelector('[id="'+initialHash+'"]')||slide.id===initialHash);if(initial>=0) current=initial;}
  activate(current,false);
})();
