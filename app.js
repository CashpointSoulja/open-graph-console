const app = document.getElementById('app');
const D = DATA;
const pill = (t, cls) => `<span class="pill ${cls}">${t}</span>`;

const views = {
  overview() {
    const h = D.hero;
    return `<section class="view">
      <div class="hero">
        <div class="card">
          <h1>${h.title}</h1>
          <p class="lede">${h.lede}</p>
          <div class="steps">
            ${D.steps.map((s, i) => `<div class="step"><div class="n">${i + 1}</div><div><strong>${s.t}</strong> ${s.b}</div></div>`).join('')}
          </div>
        </div>
        <div class="mission">
          <div class="kicker">${h.missionKicker}</div>
          <div class="stat">${h.missionStat}</div>
          <p>${h.missionSub}</p>
        </div>
      </div>
      <div class="grid c3">
        ${h.stats.map(s => `<div class="card"><div class="stat">${s.n}</div><div class="sub">${s.s}</div><div class="sub"><span class="pill ${s.cls}">${s.c}</span></div></div>`).join('')}
      </div>
    </section>`;
  },
  graph() {
    return `<section class="view">
      <h1>Graph board</h1>
      <p class="lede">The Global Product Graph as a product, not a spreadsheet: what it holds, how complete it is, and where coverage thins. Sample data.</p>
      <div class="board">
        ${D.graph.map(g => `<div class="col card"><h4>${g.k}</h4><div class="count">${g.n}</div>
          <div class="mt" style="color:var(--muted);font-size:12px;margin:4px 0">${g.d}</div>
          <div class="bar"><i style="width:${g.cov}%"></i></div>
          <div class="sub">${g.cov}% coverage</div></div>`).join('')}
      </div>
      <div class="card" style="margin-top:18px"><h3>How coverage is decided</h3>
        <p class="lede" style="margin-bottom:0">Coverage is measured against the products Companion could actually be asked about - the categories live in market deployments plus the next two launches - not against every product that exists in UK insurance. That keeps the graph small enough to be true.</p></div>
    </section>`;
  },
  accuracy() {
    return `<section class="view">
      <h1>Accuracy workflows</h1>
      <p class="lede">The workflows that keep the graph true: feeds in, changes detected, humans reviewing what should not auto-apply, and drift watched where it matters - in the answers customers get. Sample data.</p>
      <div class="grid c2">
        ${D.accuracy.map(a => `<div class="mini ${a.st === 'ok' ? 'fine' : 'breach'}"><div class="nm">${a.nm}</div><div class="mt">${a.mt}</div>
          <div class="mt" style="margin-top:6px">${pill(a.st === 'ok' ? 'healthy' : a.st === 'warn' ? 'watch' : 'blocked', a.st)}</div>
          <div class="mt" style="margin-top:6px">${a.note}</div></div>`).join('')}
      </div>
    </section>`;
  },
  scoring() {
    const s = D.scoring;
    return `<section class="view">
      <h1>Scoring &amp; compliance</h1>
      <p class="lede">${s.intro} Sample data.</p>
      <div class="card" style="margin-bottom:18px"><table>
        <tr><th>Signal</th><th>Weight</th><th>How it is computed</th><th>Example explanation</th></tr>
        ${s.rows.map(r => `<tr><td><strong>${r.m}</strong></td><td>${r.w}</td><td>${r.how}</td><td>${r.ex}</td></tr>`).join('')}
      </table></div>
      <div class="card"><h3>Compliance bar</h3>
        <div class="checks">${s.compliance.map(c => `<div class="chk"><div class="b ${c[1] ? 'ok' : 'no'}"></div><div>${c[0]}</div></div>`).join('')}</div>
        <div class="sub" style="margin-top:10px"><strong>This week:</strong> ${s.compNote}</div>
      </div>
    </section>`;
  },
  distribution() {
    return `<section class="view">
      <h1>Distribution</h1>
      <p class="lede">Every channel the graph feeds, and what each one needs from it next. Sample data.</p>
      <div class="grid c2">
        ${D.distribution.map(d => `<div class="card"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><strong>${d.ch}</strong>${pill(d.st, d.cls)}</div>
          <div class="sub" style="margin-top:6px">${d.d}</div></div>`).join('')}
      </div>
    </section>`;
  },
  safety() {
    const s = D.safety;
    return `<section class="view">
      <h1>Safety</h1>
      <p class="lede">${s.intro} Sample data.</p>
      <div class="grid c2" style="margin-bottom:18px">
        ${s.evals.map(e => `<div class="card"><div class="sub">${e.n}</div><div class="stat" style="font-size:30px">${e.s}</div>
          <div class="sub">${e.t} <span class="pill ${e.cls}">${e.cls === 'ok' ? 'green' : 'watch'}</span></div></div>`).join('')}
      </div>
      <div class="card"><h3>Incident log</h3><table>
        <tr><th>Date</th><th>What happened</th><th>Severity</th><th>What changed</th></tr>
        ${s.incidents.map(i => `<tr><td>${i.d}</td><td>${i.t}</td><td>${pill(i.sev === 'bad' ? 'high' : 'medium', i.sev)}</td><td>${i.r}</td></tr>`).join('')}
      </table></div>
    </section>`;
  }
};

function show(v) {
  app.innerHTML = views[v]();
  document.querySelectorAll('#nav button').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  window.scrollTo(0, 0);
}
document.getElementById('nav').addEventListener('click', e => {
  const b = e.target.closest('button'); if (b) show(b.dataset.view);
});
show('overview');
