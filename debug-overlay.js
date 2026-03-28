(function(global){
  'use strict';

  class DebugOverlay {
    constructor(options = {}) {
      this.enabled = Boolean(options.enabled);
      this.toggleKey = options.toggleKey || 'F3';
      this.visible = false;
      this.frameTimes = [];
      this.maxSamples = 120;
      this.el = null;
      this._boundKeydown = this._onKeydown.bind(this);

      document.addEventListener('keydown', this._boundKeydown);
      this._build();
      this._applyVisibility();
    }

    _build() {
      this.el = document.createElement('div');
      this.el.id = 'debug-overlay';
      this.el.innerHTML = '<pre id="debug-overlay-content">Debug Overlay</pre>';
      Object.assign(this.el.style, {
        position: 'absolute',
        top: '8px',
        right: '8px',
        zIndex: '1200',
        minWidth: '260px',
        padding: '10px 12px',
        border: '1px solid rgba(0, 229, 255, 0.35)',
        background: 'rgba(0, 10, 18, 0.82)',
        color: '#9defff',
        font: "12px/1.45 'Share Tech Mono', monospace",
        letterSpacing: '0.4px',
        pointerEvents: 'none',
        whiteSpace: 'pre'
      });
      this.el.querySelector('pre').style.margin = '0';
      document.getElementById('wrap')?.appendChild(this.el);
    }

    _onKeydown(event) {
      if (event.code !== this.toggleKey || !this.enabled) return;
      event.preventDefault();
      this.visible = !this.visible;
      this._applyVisibility();
    }

    _applyVisibility() {
      if (!this.el) return;
      this.el.style.display = this.enabled && this.visible ? 'block' : 'none';
    }

    onFrame(dt, metrics) {
      if (!this.enabled) return;
      this.frameTimes.push(dt);
      if (this.frameTimes.length > this.maxSamples) this.frameTimes.shift();
      if (!this.visible) return;

      const avgDt = this.frameTimes.length
        ? this.frameTimes.reduce((sum, value) => sum + value, 0) / this.frameTimes.length
        : 0;
      const fps = avgDt > 0 ? 1 / avgDt : 0;

      const missionMinutes = Math.max((metrics.missionTime || 0) / 60, 1 / 60);
      const damagePerMinute = (metrics.damageTaken || 0) / missionMinutes;
      const accuracy = metrics.shotsFired > 0
        ? ((metrics.shotsHit / metrics.shotsFired) * 100)
        : 0;

      const lines = [
        'DEBUG OVERLAY (F3)',
        `FPS: ${fps.toFixed(1)} | dt médio: ${(avgDt * 1000).toFixed(2)} ms`,
        `Entidades: ${metrics.entities ?? 0} | Balas: ${metrics.bullets ?? 0} | Partículas: ${metrics.particles ?? 0}`,
        `Dano/min: ${damagePerMinute.toFixed(1)} | Precisão: ${accuracy.toFixed(1)}%`,
        `Tempo de missão: ${(metrics.missionTime || 0).toFixed(1)} s`
      ];

      this.el.querySelector('#debug-overlay-content').textContent = lines.join('\n');
    }
  }

  global.DebugOverlay = DebugOverlay;
})(window);
