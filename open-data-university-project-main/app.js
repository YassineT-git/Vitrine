/* ============================================================
   IA Impact — Application Logic
   Calcul d'impact environnemental de l'IA générative
   ============================================================ */

(function () {
  'use strict';

  // ── Data Models ──────────────────────────────────────────────
  const MODELS = {
    'gpt4o': {
      name: 'GPT-4o',
      provider: 'OpenAI',
      energy_wh: 0.34,
      co2_g: 1.14,
      water_ml: 15,
    },
    'claude': {
      name: 'Claude Sonnet',
      provider: 'Anthropic',
      energy_wh: 0.30,
      co2_g: 1.00,
      water_ml: 12,
    },
    'gemini': {
      name: 'Gemini Flash',
      provider: 'Google',
      energy_wh: 0.24,
      co2_g: 0.30,
      water_ml: 10,
    },
    'mistral': {
      name: 'Mistral Large',
      provider: 'Mistral AI',
      energy_wh: 0.30,
      co2_g: 1.14,
      water_ml: 45,
    },
    'reasoning': {
      name: 'Raisonnement (o3)',
      provider: 'OpenAI',
      energy_wh: 3.40,
      co2_g: 11.40,
      water_ml: 150,
    },
    'light': {
      name: 'Modèle léger',
      provider: 'Divers',
      energy_wh: 0.10,
      co2_g: 0.15,
      water_ml: 5,
    },
  };

  const TASK_MULTIPLIERS = {
    'text': { factor: 1.0, label: 'Texte / Chat' },
    'image': { factor: 4.0, label: 'Génération d\'images' },
    'code': { factor: 1.5, label: 'Génération de code' },
    'analysis': { factor: 1.2, label: 'Résumé / Analyse' },
  };

  // Equivalence references
  const EQUIV = {
    car_km_per_kgco2: 7.14,      // 1 kg CO2 ≈ 7.14 km (140 gCO2/km avg car)
    smartphone_charge_wh: 12,     // 1 full charge ≈ 12 Wh
    streaming_hour_wh: 36,        // 1h of video streaming ≈ 36 Wh
    google_search_wh: 0.03,       // 1 Google search ≈ 0.03 Wh
    water_bottle_ml: 500,         // 1 standard bottle = 500 mL
  };

  // ── State ────────────────────────────────────────────────────
  let state = {
    queries: 10,
    model: 'gpt4o',
    task: 'text',
    period: 'day',  // 'day' | 'month' | 'year'
  };

  // ── DOM References ──────────────────────────────────────────
  const dom = {};

  function cacheDom() {
    dom.slider = document.getElementById('queries-slider');
    dom.sliderValue = document.getElementById('queries-value');
    dom.modelRadios = document.querySelectorAll('input[name="model"]');
    dom.taskRadios = document.querySelectorAll('input[name="task"]');
    dom.periodBtns = document.querySelectorAll('.period-btn');

    dom.energyValue = document.getElementById('metric-energy');
    dom.energyUnit = document.getElementById('metric-energy-unit');
    dom.co2Value = document.getElementById('metric-co2');
    dom.co2Unit = document.getElementById('metric-co2-unit');
    dom.waterValue = document.getElementById('metric-water');
    dom.waterUnit = document.getElementById('metric-water-unit');

    dom.equivCar = document.getElementById('equiv-car');
    dom.equivPhone = document.getElementById('equiv-phone');
    dom.equivStreaming = document.getElementById('equiv-streaming');
    dom.equivGoogle = document.getElementById('equiv-google');
    dom.equivWater = document.getElementById('equiv-water');

    dom.impactIndicator = document.getElementById('impact-indicator');
    dom.impactText = document.getElementById('impact-text');

    dom.chartBars = document.querySelectorAll('.chart-bar__fill');
    dom.chartAmounts = document.querySelectorAll('.chart-bar__amount');
  }

  // ── Calculations ────────────────────────────────────────────
  function calculate() {
    const model = MODELS[state.model];
    const taskMult = TASK_MULTIPLIERS[state.task].factor;
    const queries = state.queries;

    // Base per-day values
    const energyPerDay_wh = model.energy_wh * taskMult * queries;
    const co2PerDay_g = model.co2_g * taskMult * queries;
    const waterPerDay_ml = model.water_ml * taskMult * queries;

    // Apply period multiplier
    let periodMult = 1;
    if (state.period === 'month') periodMult = 30;
    if (state.period === 'year') periodMult = 365;

    const energy_wh = energyPerDay_wh * periodMult;
    const co2_g = co2PerDay_g * periodMult;
    const water_ml = waterPerDay_ml * periodMult;

    return { energy_wh, co2_g, water_ml, energyPerDay_wh, co2PerDay_g, waterPerDay_ml };
  }

  // ── Formatting Helpers ──────────────────────────────────────
  function formatEnergy(wh) {
    if (wh >= 1000) return { value: (wh / 1000).toFixed(2), unit: 'kWh' };
    return { value: wh.toFixed(2), unit: 'Wh' };
  }

  function formatCO2(g) {
    if (g >= 1000) return { value: (g / 1000).toFixed(2), unit: 'kg CO₂e' };
    return { value: g.toFixed(2), unit: 'g CO₂e' };
  }

  function formatWater(ml) {
    if (ml >= 1000) return { value: (ml / 1000).toFixed(2), unit: 'litres' };
    return { value: ml.toFixed(1), unit: 'mL' };
  }

  function formatNumber(n) {
    if (n >= 10000) return Math.round(n).toLocaleString('fr-FR');
    if (n >= 100) return Math.round(n).toLocaleString('fr-FR');
    if (n >= 10) return n.toFixed(1);
    if (n >= 1) return n.toFixed(2);
    return n.toFixed(2);
  }

  // ── Animated Counter ────────────────────────────────────────
  const activeAnimations = new Map();

  function animateValue(element, newText) {
    // Cancel any running animation on this element
    if (activeAnimations.has(element)) {
      cancelAnimationFrame(activeAnimations.get(element));
    }

    const oldText = element.textContent;
    const oldVal = parseFloat(oldText.replace(/\s/g, '').replace(',', '.')) || 0;
    const newVal = parseFloat(newText.replace(/\s/g, '').replace(',', '.')) || 0;

    if (isNaN(newVal) || oldVal === newVal) {
      element.textContent = newText;
      return;
    }

    const duration = 500;
    const start = performance.now();
    const diff = newVal - oldVal;

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = oldVal + diff * eased;

      // Format like the target
      if (newText.includes(',')) {
        element.textContent = current.toFixed(2).replace('.', ',');
      } else if (newText.includes('.')) {
        const decimals = (newText.split('.')[1] || '').length;
        element.textContent = current.toFixed(decimals);
      } else {
        element.textContent = Math.round(current).toLocaleString('fr-FR');
      }

      if (progress < 1) {
        activeAnimations.set(element, requestAnimationFrame(step));
      } else {
        element.textContent = newText;
        element.classList.add('value-updating');
        setTimeout(() => element.classList.remove('value-updating'), 400);
        activeAnimations.delete(element);
      }
    }

    activeAnimations.set(element, requestAnimationFrame(step));
  }

  // ── Update UI ───────────────────────────────────────────────
  function updateResults() {
    const data = calculate();

    // Main metrics
    const e = formatEnergy(data.energy_wh);
    const c = formatCO2(data.co2_g);
    const w = formatWater(data.water_ml);

    animateValue(dom.energyValue, e.value);
    dom.energyUnit.textContent = e.unit;

    animateValue(dom.co2Value, c.value);
    dom.co2Unit.textContent = c.unit;

    animateValue(dom.waterValue, w.value);
    dom.waterUnit.textContent = w.unit;

    // Equivalences (always annual for maximum impact awareness)
    const annualEnergy_wh = data.energyPerDay_wh * 365;
    const annualCO2_g = data.co2PerDay_g * 365;
    const annualWater_ml = data.waterPerDay_ml * 365;

    const carKm = (annualCO2_g / 1000) * EQUIV.car_km_per_kgco2;
    const phoneCharges = annualEnergy_wh / EQUIV.smartphone_charge_wh;
    const streamingHours = annualEnergy_wh / EQUIV.streaming_hour_wh;
    const googleSearches = annualEnergy_wh / EQUIV.google_search_wh;
    const waterBottles = annualWater_ml / EQUIV.water_bottle_ml;

    animateValue(dom.equivCar, formatNumber(carKm));
    animateValue(dom.equivPhone, formatNumber(phoneCharges));
    animateValue(dom.equivStreaming, formatNumber(streamingHours));
    animateValue(dom.equivGoogle, formatNumber(googleSearches));
    animateValue(dom.equivWater, formatNumber(waterBottles));

    // Impact level indicator
    updateImpactLevel(annualCO2_g);

    // Comparison chart
    updateChart();
  }

  function updateImpactLevel(annualCO2_g) {
    const annualCO2_kg = annualCO2_g / 1000;
    let level, text;

    if (annualCO2_kg < 1) {
      level = 'low';
      text = 'Impact faible — Votre usage est raisonnable';
    } else if (annualCO2_kg < 10) {
      level = 'medium';
      text = 'Impact modéré — Pensez à optimiser vos requêtes';
    } else {
      level = 'high';
      text = 'Impact élevé — Envisagez un modèle plus léger';
    }

    dom.impactIndicator.className = `impact-indicator impact-indicator--${level}`;
    dom.impactText.textContent = text;
  }

  function updateChart() {
    const taskMult = TASK_MULTIPLIERS[state.task].factor;
    const queries = state.queries;

    // Calculate energy for each model with current settings
    const modelKeys = Object.keys(MODELS);
    const values = modelKeys.map(k => MODELS[k].energy_wh * taskMult * queries);
    const maxVal = Math.max(...values);

    dom.chartBars.forEach((bar, i) => {
      const pct = maxVal > 0 ? (values[i] / maxVal) * 100 : 0;
      bar.style.width = pct + '%';

      // Highlight selected model
      const modelKey = bar.dataset.model;
      if (modelKey === state.model) {
        bar.classList.add('chart-bar__fill--highlight');
      } else {
        bar.classList.remove('chart-bar__fill--highlight');
      }
    });

    dom.chartAmounts.forEach((el, i) => {
      const e = formatEnergy(values[i]);
      el.textContent = e.value + ' ' + e.unit;
    });
  }

  // ── Event Listeners ─────────────────────────────────────────
  function bindEvents() {
    // Slider
    dom.slider.addEventListener('input', (e) => {
      state.queries = parseInt(e.target.value, 10);
      dom.sliderValue.value = state.queries;
      updateResults();
    });

    // Slider input field
    dom.sliderValue.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val)) val = 1;
      val = Math.max(1, Math.min(500, val));
      state.queries = val;
      dom.slider.value = val;
      updateResults();
    });

    dom.sliderValue.addEventListener('blur', (e) => {
      e.target.value = state.queries;
    });

    // Model radio buttons
    dom.modelRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.model = e.target.value;
        updateResults();
      });
    });

    // Task radio buttons
    dom.taskRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.task = e.target.value;
        updateResults();
      });
    });

    // Period toggle
    dom.periodBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        dom.periodBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        state.period = e.target.dataset.period;
        updateResults();
      });
    });

    // Accordions
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');
        const isOpen = item.classList.contains('open');

        if (isOpen) {
          content.style.maxHeight = '0';
          item.classList.remove('open');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          item.classList.add('open');
        }
      });
    });
  }

  // ── Scroll Animations ──────────────────────────────────────
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  }

  // ── Init ────────────────────────────────────────────────────
  function init() {
    cacheDom();
    bindEvents();
    updateResults();
    initScrollAnimations();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
