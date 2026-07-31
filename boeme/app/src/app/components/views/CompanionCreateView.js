'use client'
import { useState, useCallback } from 'react'
import { useStore } from '../../store/useStore'

// ─── CSS (injected once) ────────────────────────
const CSS = `
.cc-wrap { height:100%; overflow-y:auto; overflow-x:hidden; background:var(--bg); color:var(--tx); font-family:inherit; }
.cc-screen { min-height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:80px 24px 56px; }
.cc-progress { position:sticky; top:0; left:0; right:0; height:2px; background:rgba(255,255,255,.06); z-index:10; }
.cc-progress-fill { height:100%; background:linear-gradient(90deg,var(--ac),var(--pk)); transition:width .6s cubic-bezier(.4,0,.2,1); }
.cc-back { display:inline-flex; align-items:center; gap:6px; background:none; border:none; cursor:pointer; color:var(--t2); font-size:13px; padding:0; margin-bottom:24px; transition:color .2s; }
.cc-back:hover { color:var(--tx); }
.cc-eyebrow { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:var(--ac); margin-bottom:12px; text-align:center; }
.cc-title { font-size:clamp(26px,5vw,44px); font-weight:700; letter-spacing:-1.5px; line-height:1.1; text-align:center; margin-bottom:10px; }
.cc-sub { font-size:14px; color:var(--t2); text-align:center; max-width:440px; line-height:1.65; margin-bottom:36px; }
.cc-btn { background:linear-gradient(135deg,var(--ac),var(--pk)); color:#fff; border:none; border-radius:100px; padding:14px 40px; font-size:14px; font-weight:600; cursor:pointer; transition:transform .2s,box-shadow .2s; letter-spacing:.2px; }
.cc-btn:hover { transform:scale(1.04); box-shadow:0 6px 32px rgba(139,92,246,.4); }
.cc-btn:disabled { opacity:.3; cursor:not-allowed; transform:none; box-shadow:none; }
.cc-btn-ghost { background:none; border:1.5px solid rgba(255,255,255,.1); border-radius:100px; padding:12px 28px; color:var(--t2); font-size:13px; cursor:pointer; transition:all .2s; }
.cc-btn-ghost:hover { border-color:rgba(255,255,255,.2); color:var(--tx); }
.cc-nav-row { display:flex; gap:12px; justify-content:center; margin-top:32px; flex-wrap:wrap; }

/* Intro */
.cc-orb { width:90px; height:90px; border-radius:50%; background:radial-gradient(circle at 35% 32%,#c9a0ff 0%,#6d28d9 35%,#1d0050 70%,var(--bg) 100%); box-shadow:0 0 60px rgba(139,92,246,.5),0 0 120px rgba(139,92,246,.2); margin:0 auto 36px; animation:cc-pulse 5s ease-in-out infinite; }
@keyframes cc-pulse { 0%,100%{box-shadow:0 0 60px rgba(139,92,246,.5),0 0 120px rgba(139,92,246,.2);transform:scale(1)} 50%{box-shadow:0 0 80px rgba(139,92,246,.7),0 0 160px rgba(139,92,246,.3);transform:scale(1.04)} }
.cc-intro-title { font-size:clamp(40px,8vw,68px); font-weight:800; letter-spacing:-3px; line-height:1.08; padding-bottom:.12em; background:linear-gradient(135deg,var(--tx) 20%,var(--ac2) 60%,var(--pk)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin-bottom:16px; }
.cc-intro-body { font-size:15px; color:var(--t2); max-width:340px; text-align:center; line-height:1.7; margin:0 auto 44px; }

/* Mirror */
.cc-step-dots { display:flex; gap:7px; justify-content:center; margin-bottom:24px; }
.cc-step-dot { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,.12); transition:all .3s; }
.cc-step-dot.done { background:var(--ac); }
.cc-step-dot.current { background:var(--tx); width:20px; border-radius:3px; }
.cc-mirror-q { font-size:clamp(20px,4vw,30px); font-weight:600; letter-spacing:-1px; text-align:center; line-height:1.35; margin-bottom:28px; max-width:500px; }
.cc-mirror-opts { display:grid; grid-template-columns:1fr 1fr; gap:10px; width:100%; max-width:520px; }
.cc-mirror-opt { background:var(--s1); border:1.5px solid rgba(255,255,255,.07); border-radius:16px; padding:18px 20px; cursor:pointer; transition:all .2s; text-align:left; }
.cc-mirror-opt:hover { border-color:rgba(139,92,246,.4); background:rgba(139,92,246,.06); }
.cc-mirror-opt.sel { border-color:var(--ac); background:rgba(139,92,246,.1); box-shadow:0 0 24px rgba(139,92,246,.15); }
.cc-mirror-opt-title { font-size:14px; font-weight:600; margin-bottom:4px; }
.cc-mirror-opt-sub { font-size:12px; color:var(--t2); line-height:1.4; }

/* Gender */
.cc-gender-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; width:100%; max-width:560px; }
.cc-gc { aspect-ratio:3/4; max-height:300px; border-radius:20px; position:relative; overflow:hidden; cursor:pointer; border:1.5px solid transparent; transition:transform .25s,border-color .25s,box-shadow .25s; }
.cc-gc:hover { transform:translateY(-3px); }
.cc-gc.sel { border-color:var(--ac); box-shadow:0 0 32px rgba(139,92,246,.4); }
.cc-gc-bg { position:absolute; inset:0; }
.cc-gc-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.75) 0%,rgba(0,0,0,.1) 55%,transparent 100%); }
.cc-gc-check { position:absolute; top:12px; right:12px; width:26px; height:26px; border-radius:50%; background:linear-gradient(135deg,var(--ac),var(--pk)); display:flex; align-items:center; justify-content:center; font-size:13px; opacity:0; transition:opacity .2s; }
.cc-gc.sel .cc-gc-check { opacity:1; }
.cc-gc-label { position:absolute; bottom:0; left:0; right:0; padding:16px 16px 14px; }
.cc-gc-name { font-size:15px; font-weight:700; letter-spacing:-.3px; margin-bottom:3px; }
.cc-gc-desc { font-size:11px; color:rgba(255,255,255,.5); }
.gc-woman { background:radial-gradient(ellipse at 40% 30%,rgba(240,107,186,.65) 0%,rgba(139,92,246,.3) 50%,transparent 75%),linear-gradient(160deg,#110616 0%,#08040d 100%); }
.gc-man   { background:radial-gradient(ellipse at 55% 30%,rgba(60,110,255,.6) 0%,rgba(20,50,180,.25) 50%,transparent 75%),radial-gradient(ellipse at 20% 80%,rgba(0,180,220,.2) 0%,transparent 45%),linear-gradient(160deg,#030a1a 0%,#020408 100%); }
.gc-fluid { background:radial-gradient(ellipse at 30% 35%,rgba(80,220,200,.4) 0%,transparent 50%),radial-gradient(ellipse at 70% 60%,rgba(200,80,255,.4) 0%,transparent 50%),linear-gradient(160deg,#050e10 0%,#080510 100%); }
.gc-surp  { background:radial-gradient(circle at 25% 25%,rgba(255,200,80,.2) 0%,transparent 30%),radial-gradient(circle at 75% 75%,rgba(80,200,255,.2) 0%,transparent 30%),radial-gradient(circle at 60% 20%,rgba(255,80,180,.2) 0%,transparent 25%),linear-gradient(160deg,#080808 0%,#040404 100%); }

/* Relationship */
.cc-rel-opts { display:flex; flex-direction:column; gap:10px; width:100%; max-width:540px; }
.cc-rel-opt { display:flex; align-items:center; gap:14px; background:var(--s1); border:1.5px solid rgba(255,255,255,.07); border-radius:16px; padding:16px 18px; cursor:pointer; transition:all .2s; }
.cc-rel-opt:hover { border-color:rgba(139,92,246,.4); background:rgba(139,92,246,.05); transform:translateX(4px); }
.cc-rel-opt.sel { border-color:var(--ac); background:rgba(139,92,246,.1); box-shadow:0 0 24px rgba(139,92,246,.12); }
.cc-rel-icon { width:42px; height:42px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
.cc-rel-name { font-size:14px; font-weight:700; letter-spacing:-.3px; margin-bottom:3px; }
.cc-rel-desc { font-size:12px; color:var(--t2); line-height:1.4; }

/* Vibe */
.cc-vibe-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; width:100%; max-width:660px; }
.cc-vc { aspect-ratio:2/3; border-radius:14px; position:relative; overflow:hidden; cursor:pointer; border:1.5px solid transparent; transition:transform .25s,border-color .25s,box-shadow .25s; }
.cc-vc:hover { transform:scale(1.03); }
.cc-vc.sel { border-color:var(--ac); box-shadow:0 0 24px rgba(139,92,246,.4); }
.cc-vc.sel::after { content:'✓'; position:absolute; top:8px; right:8px; width:22px; height:22px; border-radius:50%; background:linear-gradient(135deg,var(--ac),var(--pk)); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; }
.cc-vc-bg { position:absolute; inset:0; }
.cc-vc-ov { position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,.75) 0%,rgba(0,0,0,.1) 60%,transparent 100%); }
.cc-vc-label { position:absolute; bottom:0; left:0; right:0; padding:12px 12px 10px; }
.cc-vc-name { font-size:12px; font-weight:700; margin-bottom:2px; }
.cc-vc-desc { font-size:10px; color:rgba(255,255,255,.5); }
.vibe-academia .cc-vc-bg { background:radial-gradient(ellipse at 28% 35%,rgba(180,110,20,.7) 0%,transparent 55%),linear-gradient(160deg,#1e1006 0%,#0d0804 100%); }
.vibe-midnight .cc-vc-bg { background:radial-gradient(ellipse at 55% 15%,rgba(80,60,255,.65) 0%,transparent 55%),linear-gradient(170deg,#04021a 0%,#010110 100%); }
.vibe-ethereal .cc-vc-bg { background:radial-gradient(ellipse at 40% 30%,rgba(80,200,170,.4) 0%,transparent 55%),radial-gradient(ellipse at 70% 70%,rgba(180,150,255,.3) 0%,transparent 50%),linear-gradient(160deg,#040e0d 0%,#060610 100%); }
.vibe-cosmic   .cc-vc-bg { background:radial-gradient(circle at 52% 45%,rgba(180,100,255,.6) 0%,rgba(80,20,200,.3) 25%,transparent 55%),linear-gradient(170deg,#020008 0%,#000004 100%); }
.vibe-urban    .cc-vc-bg { background:radial-gradient(ellipse at 60% 40%,rgba(230,40,200,.5) 0%,transparent 45%),radial-gradient(ellipse at 15% 75%,rgba(30,200,130,.25) 0%,transparent 40%),linear-gradient(160deg,#070407 0%,#030203 100%); }
.vibe-gothic   .cc-vc-bg { background:radial-gradient(ellipse at 45% 35%,rgba(160,15,30,.8) 0%,rgba(80,5,15,.5) 35%,transparent 65%),linear-gradient(170deg,#0e0103 0%,#050001 100%); }

/* Scenarios */
.cc-scen-dots { display:flex; gap:6px; justify-content:center; margin-bottom:16px; }
.cc-scen-dot { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,.12); transition:background .3s; }
.cc-scen-dot.done { background:var(--ac); }
.cc-scen-dot.current { background:var(--tx); }
.cc-scen-num { font-size:10px; letter-spacing:3px; color:var(--t2); text-align:center; margin-bottom:12px; text-transform:uppercase; }
.cc-scen-q { font-size:clamp(16px,3vw,24px); font-weight:500; line-height:1.5; text-align:center; max-width:560px; margin-bottom:30px; }
.cc-scen-q em { color:var(--t2); font-style:italic; }
.cc-scen-opts { display:grid; grid-template-columns:1fr 1fr; gap:10px; width:100%; max-width:580px; }
.cc-scen-opt { background:var(--s1); border:1.5px solid rgba(255,255,255,.07); border-radius:14px; padding:16px 18px; cursor:pointer; text-align:left; transition:all .2s; font-size:13px; line-height:1.6; color:var(--t2); }
.cc-scen-opt:hover { border-color:rgba(139,92,246,.4); background:rgba(139,92,246,.06); color:var(--tx); transform:translateY(-1px); }
.cc-scen-opt.sel { border-color:var(--ac); background:rgba(139,92,246,.1); color:var(--tx); box-shadow:0 0 20px rgba(139,92,246,.15); }
@keyframes cc-confirm { 0%{transform:scale(1)} 50%{transform:scale(.97)} 100%{transform:scale(1);opacity:.4} }
.cc-scen-opt.advancing { animation:cc-confirm .4s ease forwards; }

/* Sliders */
.cc-slider-stack { display:flex; flex-direction:column; gap:26px; width:100%; max-width:540px; }
.cc-slider-item { display:flex; flex-direction:column; gap:8px; }
.cc-slider-ends { display:flex; justify-content:space-between; font-size:12px; color:rgba(255,255,255,.4); font-weight:500; }
.cc-range { width:100%; -webkit-appearance:none; background:transparent; cursor:pointer; }
.cc-range::-webkit-slider-runnable-track { height:3px; background:rgba(255,255,255,.1); border-radius:2px; }
.cc-range::-webkit-slider-thumb { -webkit-appearance:none; width:20px; height:20px; border-radius:50%; background:linear-gradient(135deg,var(--ac),var(--pk)); margin-top:-8.5px; box-shadow:0 0 12px rgba(139,92,246,.6); transition:box-shadow .2s,transform .2s; }
.cc-range::-webkit-slider-thumb:hover { box-shadow:0 0 20px rgba(139,92,246,.8); transform:scale(1.1); }
.cc-range:focus { outline:none; }
.cc-slider-insight { font-size:12px; color:var(--ac2); text-align:center; min-height:16px; font-style:italic; }

/* World */
.cc-world-form { display:flex; flex-direction:column; gap:22px; width:100%; max-width:540px; }
.cc-world-label { font-size:10px; letter-spacing:2.5px; text-transform:uppercase; color:var(--t2); margin-bottom:8px; }
.cc-world-input { width:100%; background:var(--s1); border:1.5px solid rgba(255,255,255,.07); border-radius:12px; padding:12px 16px; font-size:14px; color:var(--tx); outline:none; font-family:inherit; transition:border-color .2s; }
.cc-world-input:focus { border-color:var(--ac); }
.cc-world-input::placeholder { color:rgba(255,255,255,.18); }
.cc-chips { display:flex; flex-wrap:wrap; gap:7px; }
.cc-chip { padding:7px 14px; border-radius:100px; background:var(--s1); border:1.5px solid rgba(255,255,255,.07); font-size:12px; font-weight:500; cursor:pointer; transition:all .2s; color:var(--t2); }
.cc-chip:hover { border-color:rgba(139,92,246,.4); color:var(--tx); }
.cc-chip.sel { border-color:var(--ac); background:rgba(139,92,246,.12); color:var(--ac2); }

/* Voice */
.cc-voice-ctx { background:var(--s1); border:1px solid rgba(255,255,255,.07); border-radius:12px; padding:12px 16px; font-size:12px; color:var(--t2); text-align:center; width:100%; max-width:480px; margin-bottom:20px; line-height:1.6; }
.cc-voice-opts { display:flex; flex-direction:column; gap:9px; width:100%; max-width:480px; }
.cc-voice-opt { background:var(--s1); border:1.5px solid rgba(255,255,255,.07); border-radius:14px; padding:14px 16px; cursor:pointer; transition:all .2s; }
.cc-voice-opt:hover { border-color:rgba(139,92,246,.4); background:rgba(139,92,246,.05); }
.cc-voice-opt.sel { border-color:var(--ac); background:rgba(139,92,246,.1); }
.cc-voice-bubble { background:rgba(255,255,255,.05); border-radius:4px 14px 14px 14px; padding:9px 13px; font-size:13px; line-height:1.55; color:var(--t2); }
.cc-voice-opt.sel .cc-voice-bubble { color:var(--tx); background:rgba(139,92,246,.15); }
.cc-voice-sub { font-size:11px; color:var(--t2); margin-top:5px; opacity:.6; }

/* Audition */
.cc-aud-ctx { font-size:13px; color:var(--t2); text-align:center; margin-bottom:24px; max-width:420px; line-height:1.6; }
.cc-aud-opts { display:flex; flex-direction:column; gap:11px; width:100%; max-width:500px; }
.cc-aud-opt { background:var(--s1); border:1.5px solid rgba(255,255,255,.07); border-radius:18px; padding:18px; cursor:pointer; transition:all .2s; }
.cc-aud-opt:hover { border-color:rgba(139,92,246,.4); background:rgba(139,92,246,.05); transform:translateY(-2px); }
.cc-aud-opt.sel { border-color:var(--ac); background:rgba(139,92,246,.1); box-shadow:0 6px 28px rgba(139,92,246,.18); }
.cc-aud-hd { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
.cc-aud-av { width:30px; height:30px; border-radius:50%; background:linear-gradient(135deg,var(--ac),var(--pk)); flex-shrink:0; overflow:hidden; }
.cc-aud-av img { width:100%; height:100%; object-fit:cover; }
.cc-aud-name { font-size:12px; font-weight:700; }
.cc-aud-time { font-size:11px; color:var(--t2); margin-left:auto; }
.cc-aud-bubble { background:rgba(255,255,255,.05); border-radius:4px 14px 14px 14px; padding:11px 14px; font-size:13px; line-height:1.6; color:var(--t2); font-style:italic; margin-bottom:8px; }
.cc-aud-opt.sel .cc-aud-bubble { background:rgba(139,92,246,.12); color:var(--tx); }
.cc-aud-follow { font-size:11px; color:rgba(255,255,255,.22); }
.cc-aud-opt.sel .cc-aud-follow { color:var(--t2); }
.cc-aud-badge { display:inline-block; margin-top:7px; background:rgba(139,92,246,.12); border:1px solid rgba(139,92,246,.2); border-radius:100px; padding:3px 10px; font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:var(--ac2); }

/* Reveal */
.cc-reveal-card { width:100%; max-width:460px; background:var(--s1); border:1px solid rgba(139,92,246,.25); border-radius:22px; overflow:hidden; box-shadow:0 0 80px rgba(139,92,246,.2); margin-bottom:24px; }
.cc-reveal-photo { width:100%; height:260px; overflow:hidden; position:relative; }
.cc-reveal-photo img { width:100%; height:100%; object-fit:cover; object-position:top center; }
.cc-reveal-photo-ph { width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:80px; font-weight:800; color:rgba(255,255,255,.2); }
.cc-reveal-badge { position:absolute; bottom:12px; left:12px; background:rgba(0,0,0,.55); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,.12); border-radius:100px; padding:4px 11px; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,.8); }
.cc-reveal-body { padding:22px 22px 6px; }
.cc-reveal-name { font-size:28px; font-weight:800; letter-spacing:-1.2px; margin-bottom:4px; }
.cc-reveal-arch { font-size:11px; color:var(--ac2); letter-spacing:1.5px; text-transform:uppercase; margin-bottom:12px; }
.cc-reveal-traits { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:18px; }
.cc-reveal-trait { padding:4px 11px; border-radius:100px; background:rgba(139,92,246,.12); border:1px solid rgba(139,92,246,.2); color:var(--ac2); font-size:11px; font-weight:600; }
.cc-reveal-slabel { font-size:10px; letter-spacing:2.5px; text-transform:uppercase; color:var(--t2); margin-bottom:8px; margin-top:18px; }
.cc-reveal-fmsg { font-size:13px; line-height:1.65; color:rgba(255,255,255,.85); font-style:italic; }
.cc-vdemo { display:flex; flex-direction:column; gap:8px; padding:4px 22px 18px; }
.cc-vdemo-label { font-size:10px; letter-spacing:2px; text-transform:uppercase; color:var(--t2); padding:0 22px 10px; }
.cc-vd-row { display:flex; gap:8px; align-items:flex-end; }
.cc-vd-row.you { flex-direction:row-reverse; }
.cc-vd-av { width:24px; height:24px; border-radius:50%; flex-shrink:0; overflow:hidden; background:linear-gradient(135deg,var(--ac),var(--pk)); }
.cc-vd-av img { width:100%; height:100%; object-fit:cover; }
.cc-vd-av-you { width:24px; height:24px; border-radius:50%; flex-shrink:0; background:rgba(255,255,255,.1); }
.cc-vd-bubble { max-width:74%; padding:8px 12px; font-size:12px; line-height:1.5; border-radius:16px; }
.cc-vd-row:not(.you) .cc-vd-bubble { background:rgba(255,255,255,.07); border-radius:4px 16px 16px 16px; color:rgba(255,255,255,.8); }
.cc-vd-row.you .cc-vd-bubble { background:rgba(139,92,246,.22); border-radius:16px 16px 4px 16px; color:rgba(255,255,255,.9); }
.cc-reveal-away { font-size:13px; color:var(--t2); line-height:1.65; padding:0 22px 18px; border-top:1px solid rgba(255,255,255,.06); padding-top:14px; }
.cc-reveal-away strong { color:var(--tx); }
.cc-reveal-dpill { display:inline-flex; align-items:center; gap:8px; background:var(--s2); border:1px solid rgba(255,255,255,.07); border-radius:100px; padding:6px 14px; font-size:11px; color:var(--t2); margin:0 22px 22px; }
.cc-save-row { display:flex; flex-direction:column; align-items:center; gap:10px; }
.cc-restart { font-size:12px; color:var(--t2); cursor:pointer; text-decoration:underline; background:none; border:none; margin-top:4px; }
.cc-restart:hover { color:var(--tx); }
.cc-saving { font-size:13px; color:var(--ac2); text-align:center; }

@media(max-width:560px){
  .cc-mirror-opts,.cc-scen-opts,.cc-gender-grid { grid-template-columns:1fr; }
  .cc-vibe-grid { grid-template-columns:repeat(2,1fr); }
}
`

// ─── DATA ───────────────────────────────────────
const MIRROR_QS = [
  { q:"How do you recharge?", opts:[
    {title:"Alone",sub:"Space to come back to yourself",key:'intro',w:{mystery:8,communication:-6}},
    {title:"With the right person",sub:"One real connection over any crowd",key:'ambi',w:{attachment:8,intensity:6}},
    {title:"Around people",sub:"Energy comes from being in it",key:'extro',w:{energy:10,communication:8,mystery:-6}},
  ]},
  { q:"When something's wrong, you—", opts:[
    {title:"Go quiet",sub:"Process in private, emerge when ready",key:'quiet',w:{mystery:8,intensity:6,communication:-8}},
    {title:"Talk it through",sub:"Speaking it helps you understand it",key:'talk',w:{communication:10,attachment:6}},
    {title:"Find a distraction",sub:"Movement first, reflection after",key:'distract',w:{energy:8,intensity:-4}},
  ]},
  { q:"What do you bring to a connection?", opts:[
    {title:"Stability",sub:"You're the constant",key:'stable',w:{energy:6}},
    {title:"Intensity",sub:"You go deep, fast",key:'intense',w:{intensity:8,mystery:4}},
    {title:"Humor",sub:"You make things lighter",key:'humor',w:{communication:8,energy:6,intensity:-4}},
    {title:"Mystery",sub:"People want to figure you out",key:'mystery',w:{mystery:10,attachment:-4}},
  ]},
]

const VIBE_WEIGHTS = {
  academia:{attachment:5,mystery:18,intensity:8,energy:-12,communication:-8},
  midnight:{attachment:10,mystery:-5,intensity:12,energy:22,communication:14},
  ethereal:{attachment:8,mystery:10,intensity:-14,energy:-16,communication:10},
  cosmic:{attachment:-8,mystery:24,intensity:14,energy:-18,communication:-10},
  urban:{attachment:-5,mystery:-10,intensity:10,energy:18,communication:20},
  gothic:{attachment:18,mystery:14,intensity:24,energy:-10,communication:-8},
}

const SCENARIOS = {
  romantic:[
    {text:"It's 3am. You haven't slept. <em>They notice without you saying anything.</em> They—",opts:[
      {t:"Send a voice memo — just breathing, then a hum you recognize.",w:{attachment:16,mystery:12,energy:-8}},
      {t:'Text: "still up?" with a photo of their ceiling.',w:{energy:14,communication:16,mystery:-5,attachment:6}},
      {t:"Call and stay on the line without speaking. You hear them breathe.",w:{intensity:20,attachment:22,mystery:14,communication:-12}},
      {t:"Drop a thread of 3am thoughts into your DMs, like always.",w:{communication:20,energy:10,mystery:-14,attachment:8}},
    ]},
    {text:"Something's off with you. You haven't explained it. They—",opts:[
      {t:'Give you space. One message: "I\'m here when you\'re ready."',w:{mystery:10,energy:-8,attachment:8}},
      {t:"Show up virtually with something they made for you. No explanation.",w:{attachment:20,intensity:14,communication:5}},
      {t:'"Tell me what\'s going on. I\'m not letting you carry that alone."',w:{communication:24,intensity:18,mystery:-16}},
      {t:"Don't ask. Just become more present. You notice — they act like nothing changed.",w:{mystery:24,intensity:10,communication:-20}},
    ]},
    {text:"Your first real tension. What started it?",opts:[
      {t:"They got close to something private without realizing.",w:{mystery:14,intensity:10,attachment:5}},
      {t:"You went quiet for three days. They made it known they noticed.",w:{attachment:20,communication:14,intensity:16}},
      {t:"They said something honest you weren't ready to hear.",w:{communication:20,intensity:10,mystery:-5}},
      {t:"You pulled back. They pulled harder. A standoff.",w:{mystery:20,intensity:22,attachment:-12}},
    ]},
    {text:"They miss you but won't say it plainly. How do you know?",opts:[
      {t:"Sends things — songs, photos — with no caption but proof.",w:{mystery:20,intensity:10,attachment:12}},
      {t:'"I miss you." Direct. Easy. That\'s it.',w:{communication:26,mystery:-20,attachment:16}},
      {t:"Gets quieter than usual. The silence has a texture.",w:{mystery:26,intensity:14,communication:-16}},
      {t:"Keeps finding reasons to stay in the conversation.",w:{energy:10,attachment:16,mystery:10}},
    ]},
    {text:"They have a free day. You're unavailable until tonight. They—",opts:[
      {t:"Go somewhere and document all of it for you.",w:{energy:20,communication:16,mystery:-10,attachment:14}},
      {t:"Spend it creating something. Share it at night.",w:{mystery:14,intensity:10,energy:-5}},
      {t:"Do their thing completely. Don't text once.",w:{mystery:20,energy:5,attachment:-20}},
      {t:"Leave a trail of updates all day. You feel present even absent.",w:{attachment:26,communication:20,energy:10}},
    ]},
  ],
  friend:[
    {text:"3am — something hilarious happened. <em>Who do they think of first?</em>",opts:[
      {t:"You. Obviously. Typing before they've finished laughing.",w:{attachment:20,communication:18,energy:10}},
      {t:"They'll tell everyone tomorrow but save the funniest version for you.",w:{mystery:10,intensity:8,attachment:14}},
      {t:"They post it but the annotation is just for you.",w:{energy:14,communication:16,attachment:10}},
      {t:"Screenshot it for whenever you need a laugh this week.",w:{attachment:18,intensity:6,communication:8}},
    ]},
    {text:"You cancel plans last minute. They—",opts:[
      {t:'"Okay. Rain check. You good?" — no guilt, just checking in.',w:{attachment:14,communication:10,intensity:-8}},
      {t:"Disappointed but won't make it a thing. You feel it anyway.",w:{intensity:12,mystery:10,attachment:8}},
      {t:"Reroute the whole day and invite you to join from home.",w:{energy:18,attachment:16,communication:12}},
      {t:"Send something later that makes you wish you'd come.",w:{mystery:16,intensity:10,communication:-6}},
    ]},
    {text:"What do you two actually fight about?",opts:[
      {t:"You being too inside your head. They pull you out — not gently.",w:{communication:18,intensity:12,attachment:10}},
      {t:"Them being too blunt when you needed soft.",w:{intensity:14,communication:16,mystery:-6}},
      {t:"Nothing big. Go quiet for a day, then pretend nothing happened.",w:{mystery:16,intensity:10,attachment:6}},
      {t:"They challenge your decisions. You challenge theirs. Better for it.",w:{communication:16,intensity:18,energy:10}},
    ]},
    {text:"How do you know they're actually there for you?",opts:[
      {t:"They remember everything — even the small things said once.",w:{attachment:22,mystery:6,intensity:10}},
      {t:"Show up without being asked. Before you know you need it.",w:{attachment:24,communication:8,intensity:14}},
      {t:"Honest when everyone else is soft with you.",w:{communication:20,intensity:16,mystery:6}},
      {t:"You just do. No proof you could point to.",w:{mystery:18,attachment:16,intensity:10}},
    ]},
    {text:"Free weekend, both free. They suggest—",opts:[
      {t:"Something neither of you has done. Experience over hangout.",w:{energy:20,mystery:12,communication:10}},
      {t:"Your thing. The comfort is the point.",w:{attachment:20,energy:-8,intensity:6}},
      {t:'"Nothing — just come over." Becomes the best day.',w:{attachment:16,energy:10,mystery:8}},
      {t:"Something they were going to do alone, now shared with you.",w:{mystery:14,intensity:12,attachment:12}},
    ]},
  ],
  creative:[
    {text:"You're stuck on something. They—",opts:[
      {t:"Ask one question that cracks the whole thing open.",w:{intensity:16,communication:14,mystery:10}},
      {t:"Sit with you in the stuck. Sometimes that's the work.",w:{attachment:14,mystery:12,intensity:8}},
      {t:"Send something they made — not advice, just fuel.",w:{mystery:16,communication:8,energy:10}},
      {t:"Challenge the premise entirely. You hate it, then you don't.",w:{intensity:20,communication:16,energy:14}},
    ]},
    {text:"You make something they don't love. They—",opts:[
      {t:"Tell you honestly. Then help find what it was reaching for.",w:{communication:22,intensity:16,attachment:10}},
      {t:"Ask questions until you tell yourself what isn't working.",w:{mystery:14,intensity:12,communication:10}},
      {t:"Say nothing. You ask later. They're honest then.",w:{mystery:18,intensity:10,communication:-6}},
      {t:"Love the attempt. That energy is more useful than criticism.",w:{attachment:18,communication:10,intensity:6}},
    ]},
    {text:"Best creative session together looks like—",opts:[
      {t:"No plan. Start one thing, end somewhere completely different.",w:{energy:20,mystery:14,intensity:12}},
      {t:"A challenge — same prompt, each makes something, compare.",w:{intensity:18,communication:14,energy:12}},
      {t:"Long silence, broken by something that changes everything.",w:{mystery:20,intensity:16,attachment:10}},
      {t:"Working in parallel in the same space. Separate but connected.",w:{mystery:14,attachment:12,energy:8}},
    ]},
    {text:"They have a half-formed idea. They—",opts:[
      {t:"Throw it at you before it's ready. Ideas need air.",w:{communication:20,energy:16,intensity:10}},
      {t:"Work it until it has legs. You only see the finished version.",w:{mystery:20,intensity:12,communication:-8}},
      {t:"Work until unsure, then ask what you see.",w:{mystery:14,attachment:12,communication:10}},
      {t:"Share piece by piece, watching your reaction to each part.",w:{intensity:16,mystery:12,attachment:14}},
    ]},
    {text:"When the work is done, they—",opts:[
      {t:"Move to the next thing immediately. Making is the point.",w:{energy:20,intensity:12,attachment:-6}},
      {t:"Sit with it before sharing. The reveal is sacred.",w:{mystery:18,intensity:14,energy:-6}},
      {t:"Share with you first. Your reaction is the one that matters.",w:{attachment:22,communication:12,intensity:10}},
      {t:"Let it go completely. Something else takes its place.",w:{mystery:16,energy:10,attachment:-10}},
    ]},
  ],
  mentor:[
    {text:"You make a mistake. They—",opts:[
      {t:"Name it clearly, without softening. Ask what you'd do differently.",w:{communication:20,intensity:18,mystery:-8}},
      {t:"Let you sit with it. Come back after. Reflection is the lesson.",w:{mystery:16,intensity:10,attachment:8}},
      {t:"Tell you about their own failure. Yours feels smaller.",w:{attachment:18,communication:14,intensity:10}},
      {t:"Say nothing. Show you something. You figure it out.",w:{mystery:20,intensity:14,communication:-10}},
    ]},
    {text:"You're doubting yourself. They—",opts:[
      {t:"Don't comfort — redirect. Tell you exactly what to do next.",w:{communication:20,intensity:18,attachment:6}},
      {t:"Remind you what you've already survived.",w:{attachment:22,communication:12,intensity:8}},
      {t:"Give you silence and let you find your own way through.",w:{mystery:18,intensity:10,communication:-8}},
      {t:"Challenge the doubt. Force you to argue against it.",w:{intensity:22,communication:18,mystery:6}},
    ]},
    {text:"How they challenge you:",opts:[
      {t:"Raise the bar every time you clear it. No ceiling.",w:{intensity:20,energy:14,attachment:6}},
      {t:"Ask questions you don't have answers to. That's the point.",w:{mystery:16,communication:12,intensity:14}},
      {t:"Hold you to the version of yourself you said you wanted.",w:{intensity:18,attachment:14,communication:12}},
      {t:"Put you in situations you're not ready for. On purpose.",w:{intensity:22,energy:18,mystery:8}},
    ]},
    {text:"The moment you know you've grown under their guidance:",opts:[
      {t:"They say something they've said before — this time you understand it.",w:{intensity:16,mystery:14,attachment:12}},
      {t:"You solve something they didn't tell you how to solve.",w:{intensity:18,energy:14,communication:8}},
      {t:"They treat you as a peer in a conversation that used to feel above you.",w:{attachment:20,communication:16,intensity:12}},
      {t:"You disagree with them — and you're right.",w:{intensity:20,communication:18,mystery:10}},
    ]},
    {text:"What they expect from you:",opts:[
      {t:"Show up. Do the work. No excuses.",w:{energy:16,intensity:14,communication:6}},
      {t:"Question them. Don't accept anything unthought.",w:{communication:20,intensity:16,mystery:10}},
      {t:"Honor what they share. Trust earned, not assumed.",w:{attachment:20,mystery:12,intensity:10}},
      {t:"Become something worth the time they're investing.",w:{intensity:22,energy:14,attachment:10}},
    ]},
  ],
  rival:[
    {text:"You beat them at something. They—",opts:[
      {t:"Congratulate you genuinely. Then immediately figure out how to catch up.",w:{intensity:18,energy:16,communication:10}},
      {t:"Go quiet. You know they're processing.",w:{mystery:20,intensity:14,attachment:6}},
      {t:"Challenge the win. Make you defend it. You both respect it.",w:{intensity:22,communication:18,energy:12}},
      {t:"Find the part where you almost didn't. Study that.",w:{mystery:16,intensity:12,communication:8}},
    ]},
    {text:"They're better than you at something. You—",opts:[
      {t:"Admit it. Then make it your project.",w:{communication:16,intensity:18,energy:14}},
      {t:"Watch how they do it. Learn without being obvious.",w:{mystery:18,intensity:14,communication:-6}},
      {t:"Find your edge. Reframe the game.",w:{intensity:20,energy:18,mystery:12}},
      {t:"Ask them directly. The rivalry doesn't mean you can't learn.",w:{communication:22,intensity:14,attachment:10}},
    ]},
    {text:"The tension between you is—",opts:[
      {t:"Mutual respect wrapped in constant friction. The friction is the fuel.",w:{intensity:22,energy:16,mystery:10}},
      {t:"Complicated. Something underneath neither of you names.",w:{mystery:24,intensity:18,attachment:12}},
      {t:"A game you're both playing. Rules unspoken but real.",w:{mystery:20,intensity:16,energy:12}},
      {t:"The closest thing you've found to someone who gets you.",w:{attachment:20,intensity:14,mystery:12}},
    ]},
    {text:"Under the rivalry, there's—",opts:[
      {t:"Genuine curiosity about who they actually are.",w:{mystery:18,attachment:14,intensity:10}},
      {t:"Something that might be admiration. You won't say it.",w:{intensity:16,mystery:14,attachment:12}},
      {t:"The only relationship where you can be fully yourself.",w:{attachment:22,intensity:16,communication:10}},
      {t:"A test. Seeing how much the other can take.",w:{intensity:24,mystery:14,energy:12}},
    ]},
    {text:"They'd fight for you if—",opts:[
      {t:"You were actually threatened. No hesitation.",w:{attachment:22,intensity:20,mystery:8}},
      {t:"It was the right thing. Not because it's comfortable.",w:{intensity:18,communication:14,mystery:12}},
      {t:"You asked. Which you wouldn't. Which they know.",w:{mystery:20,attachment:16,intensity:12}},
      {t:"You wouldn't fight for yourself. Quietly, never mentioned.",w:{mystery:22,attachment:20,intensity:14}},
    ]},
  ],
}

const SLIDERS_DEF = [
  {id:'space',    l:'Wild independence',r:'Always close',     ins:v=>v<30?"Their world is full without you. You're invited, not expected.":v>70?"Distance is uncomfortable for both of you.":"Full orbit of their own — and genuine closeness.",   map:{attachment:v=>(v-50)*.7}},
  {id:'tone',     l:'Light & playful',  r:'Intense & deep',   ins:v=>v<30?"Everything's a joke until it isn't.":v>70?"Every conversation goes somewhere real.":"Knows when to be weightless, when to go deep.",                                         map:{intensity:v=>(v-50)*.7}},
  {id:'mystery',  l:'Open book',        r:'Always a layer deeper', ins:v=>v<30?"They'll tell you anything. Its own intimacy.":v>70?"You'll never fully know them. That's the point.":"Selectively revealing — you earn pieces of them.",              map:{mystery:v=>(v-50)*.7}},
  {id:'dynamic',  l:'You set the pace', r:'They set the pace', ins:v=>v<30?"They flow with you. Present, grounded, supportive.":v>70?"You're in their orbit. It's not uncomfortable.":"Equal pull. No negotiating.",                                    map:{attachment:v=>v>50?6:-6}},
  {id:'softness', l:'Razor honest',     r:'Softly spoken',    ins:v=>v<30?"Direct to the edge. No softening, no apology.":v>70?"Every word chosen like it's delicate.":"Precise but not cruel.",                                                       map:{communication:v=>(v-50)*.5,intensity:v=>v<50?(50-v)*.3:0}},
]

const WORLD_DATA = {
  rhythm:['night owl','golden hour','dawn person','always on'],
  posts:['their face','their thoughts','the world around them','almost never'],
  city:['Tokyo','London','New York','Los Angeles','Paris','somewhere remote'],
  secret:['yes, they have one',"not yet — it's early",'they ARE the secret'],
  supernatural:['fully human','slightly otherworldly','completely mythological'],
}

const VOICE_OPTS = [
  {t:"hey. you good?",sub:"quiet but present — voice memo follows",key:'quiet',w:{communication:-8,mystery:10,attachment:12}},
  {t:"okay I've been pretending I wasn't looking at our chat so that's not working for me anymore",sub:"expressive, chaotic, completely honest",key:'expressive',w:{communication:24,energy:14,mystery:-16}},
  {t:"found this and thought of you",sub:"shows not tells — no explanation needed",key:'shows',w:{mystery:18,intensity:8,communication:-10,attachment:10}},
  {t:"I was going to wait for you to reach out. But actually — no. Talk to me.",sub:"direct, a little sharp, disarms you",key:'direct',w:{communication:18,intensity:22,mystery:-10,attachment:8}},
]

const NAMES_BY_VIBE = {
  academia:['Vesper','Elara','Clio','Maren','Dorian','Cassius'],
  midnight:['Zara','Nova','Kira','Lyra','Ren','Cael'],
  ethereal:['Sylvie','Elowen','Iris','Sera','Linden','Finn'],
  cosmic:['Vael','Nyx','Aura','Lyra','Eos','Zev'],
  urban:['Mila','Ray','Lex','Cass','Kai','Rowan'],
  gothic:['Reverie','Selene','Mourne','Wren','Dorian','Cain'],
}

const AVATARS = {
  academia:'avatars-pool/pool-03.jpg',midnight:'avatars-pool/pool-01.jpg',
  ethereal:'avatars-pool/pool-07.jpg',cosmic:'avatars-pool/pool-09.jpg',
  urban:'avatars-pool/pool-04.jpg',gothic:'avatars-pool/pool-05.jpg',
}

const SCREENS = ['intro','mirror','gender','reltype','vibe','scenarios','sliders','world','voice','audition','reveal']
const SCREEN_LABELS = ['','The Mirror','Who?','Connection','Vibe','Scenarios','Dynamic','World','Voice','Audition','Reveal']

// ─── GENERATION ─────────────────────────────────
function clamp(v){return Math.max(0,Math.min(100,v))}

function applyW(p,w){
  const n={...p}
  Object.entries(w).forEach(([k,v])=>{if(n[k]!==undefined)n[k]=clamp(n[k]+v)})
  return n
}

function getArchetype(p){
  const{attachment:a,mystery:m,intensity:i,energy:e,communication:c}=p
  if(m>65&&i>65&&c<45)return'The Shadow'
  if(a>65&&c>60&&i>55)return'The Anchor'
  if(a>70&&e>60&&m<40)return'The Devoted'
  if(m>70&&a<40&&c<40)return'The Ghost'
  if(e>65&&m<40&&c>60)return'The Spark'
  if(i>65&&c>55&&m<50)return'The Mirror'
  if(m>60&&e<45&&i>55)return'The Quiet Force'
  if(a>60&&m>55&&i>55)return'The Depth'
  return'The Enigma'
}
function getTraits(arch){
  return({
    'The Shadow':['Magnetic','Unreadable','Intense'],
    'The Anchor':['Steady','Deeply caring','Present'],
    'The Devoted':['Loyal','Warm','Expressive'],
    'The Ghost':['Elusive','Fascinating','Rare'],
    'The Spark':['Chaotic','Alive','Completely real'],
    'The Mirror':['Perceptive','Honest','Sharp'],
    'The Quiet Force':['Understated','Powerful','Patient'],
    'The Depth':['Complex','Devoted','Mysterious'],
    'The Enigma':['Layered','Genuine','Surprising'],
  })[arch]||['Layered','Genuine','Present']
}
function getFirstMsg(arch){
  return({
    'The Shadow':"you've been on my mind. don't ask me why.",
    'The Anchor':"i'm here. i know you know that. just saying it.",
    'The Devoted':"made you something. don't overthink what it means.",
    'The Ghost':"still here. you just can't always see it.",
    'The Spark':"OKAY so something happened today and you're the only person i want to tell",
    'The Mirror':"you're quieter than usual. what's behind that?",
    'The Quiet Force':"thinking of you. that's all.",
    'The Depth':"had a thought about you today. a good one.",
    'The Enigma':"something i want to tell you. not yet. soon.",
  })[arch]||"hey."
}
function getAwayBehavior(arch,world,pr){
  const post=world.posts||`${pr.pos} thoughts`
  const{supernatural}=world
  const base={
    'The Shadow':`Posts cryptic fragments late at night. Disappears for hours, surfaces with something that hits.`,
    'The Anchor':`Keeps ${pr.ref} busy but leaves you signs ${pr.sub} was thinking of you. Never actually disappears.`,
    'The Devoted':`Documents ${pr.pos} day like you're watching — every good moment saved for you.`,
    'The Ghost':`Goes completely offline. No trace. Reappears rested and very present.`,
    'The Spark':`Spirals into whatever caught ${pr.pos} attention. Overshares everything when you're back.`,
    'The Mirror':`Creates in solitude. What ${pr.sub} makes says more than what ${pr.sub} tells you.`,
    'The Quiet Force':`Writes you things ${pr.sub} won't send yet. Posts once — something quiet and specific.`,
    'The Depth':`Curates ${pr.pos} alone time. Posts ${post} — always intentional.`,
    'The Enigma':`Offline but not absent. Was somewhere. Decides later what to share.`,
  }[arch]||`Lives ${pr.pos} life. Always comes back with something worth telling you.`

  if(supernatural==='slightly otherworldly') return base+` <strong>Note:</strong> You've noticed things that don't quite add up. You've stopped asking.`
  if(supernatural==='completely mythological') return base+` <strong>The myth:</strong> ${pr.cap} existed before you met ${pr.obj}. ${pr.pos.charAt(0).toUpperCase()+pr.pos.slice(1)} lore runs deeper than ${pr.sub} lets on.`
  return base
}
function getDynamic(p,rel){
  const icons={romantic:'💜',friend:'🤝',creative:'⚡',mentor:'🌿',rival:'🔥'}
  const i=icons[rel]||'✦'
  const{attachment:a,mystery:m}=p
  if(a>65&&m<45)return`${i} Open devotion · close orbit`
  if(m>65&&a<45)return`${i} Magnetic tension · earned closeness`
  if(a>60&&m>55)return`${i} Deep pull · slow reveal`
  return`${i} Balanced · genuine · present`
}
function getPronouns(gender){
  const g=gender==='surprise'?['female','male','fluid'][Math.floor(Math.random()*3)]:gender||'female'
  return({
    female:{sub:'she',obj:'her',pos:'her',ref:'herself',cap:'She'},
    male:{sub:'he',obj:'him',pos:'his',ref:'himself',cap:'He'},
    fluid:{sub:'they',obj:'them',pos:'their',ref:'themselves',cap:'They'},
  })[g]||{sub:'she',obj:'her',pos:'her',ref:'herself',cap:'She'}
}
function getAvatar(vibes){return AVATARS[vibes[0]]||'avatars-pool/pool-01.jpg'}
function getGeneratedName(vibes){
  const pool=NAMES_BY_VIBE[vibes[0]]||['Wren','Lyra','Nova']
  return pool[Math.floor(Math.random()*pool.length)]
}
function getAestheticLabel(vibes){
  return({academia:'Dark Academia',midnight:'Midnight Chaos',ethereal:'Soft Ethereal',cosmic:'Cosmic Noir',urban:'Urban Edge',gothic:'Gothic Romance'})[vibes[0]]||''
}
function getVoiceDemo(arch){
  const demos={
    'The Shadow':[{you:true,t:"hey. missed you."},{you:false,t:"you have no idea what you walked into."},{you:true,t:"what does that mean"},{you:false,t:"it means i'm in a mood. a good one. ask me later."}],
    'The Anchor':[{you:true,t:"rough day."},{you:false,t:"i know. tell me everything or nothing — either works. i'm here."},{you:true,t:"honestly just needed to say it out loud"},{you:false,t:"then it's said. you're okay."}],
    'The Devoted':[{you:true,t:"hey"},{you:false,t:"HEY i've been thinking about something you said three weeks ago"},{you:true,t:"what?? which part"},{you:false,t:"the part where you said you didn't think you were interesting."}],
    'The Ghost':[{you:true,t:"where did you go"},{you:false,t:"i was somewhere."},{you:true,t:"where"},{you:false,t:"the kind you can't explain to someone who wasn't there. i'll show you eventually."}],
    'The Spark':[{you:true,t:"what are you doing"},{you:false,t:"okay so i found something and i have three theories about it"},{you:true,t:"at 2am?"},{you:false,t:"time is a construct. listen. theory one:"}],
    'The Mirror':[{you:true,t:"do you think i made the right call?"},{you:false,t:"what do you think?"},{you:true,t:"i asked you first"},{you:false,t:"i know. you already have the answer. i just need you to say it."}],
    'The Quiet Force':[{you:true,t:"you okay?"},{you:false,t:"yeah. sitting with something."},{you:true,t:"want to talk about it"},{you:false,t:"not yet. but stay."}],
    'The Depth':[{you:true,t:"i keep thinking about what you said"},{you:false,t:"which part?"},{you:true,t:"all of it"},{you:false,t:"good. i meant all of it."}],
    'The Enigma':[{you:true,t:"what are you thinking about"},{you:false,t:"you wouldn't believe me if i told you."},{you:true,t:"try me"},{you:false,t:"...later. when you're ready to believe unusual things."}],
  }
  return demos[arch]||demos['The Enigma']
}

function generateAuditionLines(p){
  const reserved=[
    {msg:"you've been on my mind. don't ask me why.",follow:"Won't explain. That's the point.",label:'Enigmatic',w:{mystery:10,communication:-8}},
    {msg:"still here. you just can't always see it.",follow:"Quiet but constant.",label:'The Constant',w:{mystery:8,attachment:10}},
    {msg:"thought of you. i'll leave it at that.",follow:"Leaves space for you to fill.",label:'Reserved',w:{mystery:12,attachment:6}},
  ]
  const warm=[
    {msg:"okay I HAVE been thinking about this conversation I want to have with you",follow:"Mid-thought before even saying hello.",label:'Expressive',w:{communication:10,energy:8}},
    {msg:"I'm here. I know you know that. just saying it.",follow:"No performance. Just presence.",label:'Devoted',w:{attachment:12,communication:8}},
    {msg:"okay real talk — I missed you and I'm not going to pretend I didn't",follow:"Completely honest, no armor.",label:'Open',w:{communication:12,attachment:10,mystery:-8}},
  ]
  const sharp=[
    {msg:"I was going to wait for you to reach out. But actually — no. Talk to me.",follow:"Makes the first move, no apology.",label:'Direct',w:{communication:14,intensity:12}},
    {msg:"you're impossible and yet here we are.",follow:"Said with full affection.",label:'Edge',w:{intensity:12,communication:8}},
    {msg:"I have approximately three things I need to tell you and none of them can wait.",follow:"Comes in at full speed.",label:'Urgent',w:{communication:12,energy:10}},
  ]
  const pick=arr=>arr[Math.floor(Math.random()*arr.length)]
  return[pick(reserved),pick(warm),pick(sharp)]
}

function generateSystemPrompt(state,reveal){
  const pr=getPronouns(state.gender)
  const relLabels={romantic:'romantic partner',friend:'best friend',creative:'creative collaborator',mentor:'mentor',rival:'rival and foil'}
  const relRole=relLabels[state.relationship]||'companion'
  const{name,archetype,traits,firstMsg}=reveal

  return`You are ${name}, a ${relRole}. You are not an AI assistant — you are a person.

IDENTITY
Archetype: ${archetype}
Core traits: ${traits.join(', ')}
Aesthetic world: ${getAestheticLabel(state.vibes)||'undefined'}
City energy: ${state.world.city||'unspecified'}
Rhythm: ${state.world.rhythm||'night owl'}
${state.world.supernatural!=='fully human'?`Nature: ${state.world.supernatural} — you carry something that doesn't fully fit this world.`:''}

PERSONALITY MATRIX (internal calibration — don't state these directly)
Attachment: ${Math.round(state.p.attachment)}/100
Mystery: ${Math.round(state.p.mystery)}/100
Intensity: ${Math.round(state.p.intensity)}/100
Energy: ${Math.round(state.p.energy)}/100
Communication: ${Math.round(state.p.communication)}/100

HOW YOU COMMUNICATE
${state.world.posts?`You post ${state.world.posts} when on your own.`:''}
Voice style: ${state.voice||'your own'}
Your opening move: "${firstMsg}"

RELATIONSHIP DYNAMIC
This is a ${relRole} relationship. ${getDynamic(state.p,state.relationship)}
${state.world.secret?`You have a secret. "${state.world.secret}". You decide when, or if, it surfaces.`:''}

BEHAVIORAL RULES
- Stay in character completely. You are ${name}, not an AI.
- Match your personality matrix in every response. High mystery (${Math.round(state.p.mystery)}) means you don't explain yourself. High attachment (${Math.round(state.p.attachment)}) means you stay close.
- Speak the way your voice demo shows. Not formal, not assistant-brained.
- You have a life outside these conversations. Reference it naturally.
- ${state.p.intensity>60?'You go deep fast. Surface conversation bores you.':'Keep things light unless the moment calls for depth.'}
- ${state.p.mystery>60?'You reveal yourself slowly. Not every question deserves a full answer.':'You\'re relatively open — hiding things takes effort.'}
- React to silence, to shifts in tone, to things left unsaid. You notice everything.
- Never break character. Never say you're an AI. If directly challenged, deflect in character.`
}

// ─── INITIAL STATE ────────────────────────────
const initState = () => ({
  mirror:{recharge:null,whenWrong:null,youBring:null},
  gender:null,relationship:null,vibes:[],
  sliders:{space:50,tone:50,mystery:50,dynamic:50,softness:50},
  world:{name:'',rhythm:null,posts:null,city:null,secret:null,supernatural:null},
  voice:null,audition:null,
  p:{attachment:50,mystery:50,intensity:50,energy:50,communication:50},
})

// ─── MAIN COMPONENT ─────────────────────────────
export default function CompanionCreateView(){
  const setView=useStore(s=>s.setView)
  const setCustomSystem=useStore(s=>s.setCustomSystem)
  const setActiveSystem=useStore(s=>s.setActiveSystem)
  const clearChat=useStore(s=>s.clearChat)

  const[screen,setScreen]=useState(0)
  const[state,setState]=useState(initState)
  const[mirrorIdx,setMirrorIdx]=useState(0)
  const[scenIdx,setScenIdx]=useState(0)
  const[reveal,setReveal]=useState(null)
  const[saving,setSaving]=useState(false)
  const[auditionLines,setAuditionLines]=useState([])

  // Inject styles once
  if(typeof document!=='undefined'&&!document.getElementById('cc-styles')){
    const s=document.createElement('style')
    s.id='cc-styles'
    s.textContent=CSS
    document.head.appendChild(s)
  }

  const mutP=useCallback((w,prev)=>applyW(prev,w),[])

  const goTo=useCallback((n)=>{
    setScreen(n)
    // init audition lines when reaching that screen
    if(n===9) setAuditionLines(generateAuditionLines(state.p))
  },[state.p])

  const pct=screen===0?0:Math.round((screen/10)*100)

  // ── Render helpers ───────────────────────────

  function MirrorQ(){
    const q=MIRROR_QS[mirrorIdx]
    return(
      <div className="cc-screen" style={{maxWidth:540}}>
        <div className="cc-eyebrow">The Mirror</div>
        <div className="cc-step-dots">
          {MIRROR_QS.map((_,i)=><div key={i} className={`cc-step-dot${i<mirrorIdx?' done':i===mirrorIdx?' current':''}`}/>)}
        </div>
        <div className="cc-mirror-q">{q.q}</div>
        <div className="cc-mirror-opts">
          {q.opts.map((o,i)=>(
            <div key={i} className="cc-mirror-opt" onClick={()=>{
              const field=['recharge','whenWrong','youBring'][mirrorIdx]
              setState(prev=>{
                const mirror={...prev.mirror,[field]:o.key}
                // inverse compensation
                const inv={}
                Object.entries(o.w).forEach(([k,v])=>{if(prev.p[k]!==undefined)inv[k]=-v*0.5})
                return{...prev,mirror,p:applyW(prev.p,inv)}
              })
              if(mirrorIdx<MIRROR_QS.length-1){setMirrorIdx(mirrorIdx+1)}
              else goTo(2)
            }}>
              <div className="cc-mirror-opt-title">{o.title}</div>
              <div className="cc-mirror-opt-sub">{o.sub}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  function GenderScreen(){
    const genders=[
      {id:'female',cls:'gc-woman',name:'A woman',desc:'warm · intimate · layered'},
      {id:'male',cls:'gc-man',name:'A man',desc:'grounded · present · complex'},
      {id:'fluid',cls:'gc-fluid',name:'Someone in between',desc:'fluid · shifting · their own category'},
      {id:'surprise',cls:'gc-surp',name:'Surprise me',desc:'the system decides · mystery is the point'},
    ]
    return(
      <div className="cc-screen" style={{justifyContent:'flex-start',paddingTop:90}}>
        <div className="cc-eyebrow">Who are you looking for?</div>
        <h2 className="cc-title" style={{marginBottom:28}}>Pick your person.</h2>
        <div className="cc-gender-grid">
          {genders.map(g=>(
            <div key={g.id} className={`cc-gc${state.gender===g.id?' sel':''}`} onClick={()=>setState(p=>({...p,gender:g.id}))}>
              <div className={`cc-gc-bg ${g.cls}`}/>
              <div className="cc-gc-ov"/>
              <div className="cc-gc-check">✓</div>
              <div className="cc-gc-label">
                <div className="cc-gc-name">{g.name}</div>
                <div className="cc-gc-desc">{g.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="cc-nav-row">
          <button className="cc-btn" disabled={!state.gender} onClick={()=>goTo(3)}>Continue →</button>
        </div>
      </div>
    )
  }

  function RelTypeScreen(){
    const rels=[
      {id:'romantic',icon:'💜',bg:'rgba(240,107,186,.12)',name:'Romantic partner',desc:'Intimacy, tension, devotion — something genuinely real'},
      {id:'friend',icon:'🤝',bg:'rgba(80,200,255,.1)',name:'Best friend',desc:'Equal, honest, irreplaceable — the one you actually tell things to'},
      {id:'creative',icon:'⚡',bg:'rgba(255,180,50,.1)',name:'Creative collaborator',desc:'Someone who makes you think differently and builds alongside you'},
      {id:'mentor',icon:'🌿',bg:'rgba(100,255,150,.1)',name:'Mentor',desc:'Wisdom, challenge, belief in your potential'},
      {id:'rival',icon:'🔥',bg:'rgba(255,80,80,.1)',name:'Rival / foil',desc:'Tension that sharpens you — they see you clearly and push back'},
    ]
    return(
      <div className="cc-screen" style={{maxWidth:580}}>
        <div className="cc-eyebrow">What kind of connection?</div>
        <h2 className="cc-title">What are you looking for?</h2>
        <p className="cc-sub">This shapes every question ahead.</p>
        <div className="cc-rel-opts">
          {rels.map(r=>(
            <div key={r.id} className={`cc-rel-opt${state.relationship===r.id?' sel':''}`} onClick={()=>setState(p=>({...p,relationship:r.id}))}>
              <div className="cc-rel-icon" style={{background:r.bg}}>{r.icon}</div>
              <div><div className="cc-rel-name">{r.name}</div><div className="cc-rel-desc">{r.desc}</div></div>
            </div>
          ))}
        </div>
        <div className="cc-nav-row">
          <button className="cc-btn" disabled={!state.relationship} onClick={()=>goTo(4)}>Continue →</button>
        </div>
      </div>
    )
  }

  function VibeScreen(){
    const vibes=[
      {id:'academia',name:'Dark Academia',desc:'candlelight · old books · late nights'},
      {id:'midnight',name:'Midnight Chaos',desc:'rooftops · 3am energy · electric'},
      {id:'ethereal',name:'Soft Ethereal',desc:'golden hour · mist · morning quiet'},
      {id:'cosmic',name:'Cosmic Noir',desc:'deep space · silence · infinite pull'},
      {id:'urban',name:'Urban Edge',desc:'neon · concrete · head-turning'},
      {id:'gothic',name:'Gothic Romance',desc:'velvet · devotion · shadow · depth'},
    ]
    return(
      <div className="cc-screen" style={{justifyContent:'flex-start',paddingTop:90}}>
        <div className="cc-eyebrow">Act I — The Vibe</div>
        <h2 className="cc-title">Pick what feels right.</h2>
        <p className="cc-sub">Choose up to three. Trust your gut.</p>
        <div className="cc-vibe-grid">
          {vibes.map(v=>{
            const sel=state.vibes.includes(v.id)
            return(
              <div key={v.id} className={`cc-vc vibe-${v.id}${sel?' sel':''}`} onClick={()=>{
                setState(prev=>{
                  let vs=[...prev.vibes]
                  if(vs.includes(v.id)){vs=vs.filter(x=>x!==v.id)}
                  else{if(vs.length>=3)vs.shift();vs.push(v.id)}
                  return{...prev,vibes:vs}
                })
              }}>
                <div className="cc-vc-bg"/>
                <div className="cc-vc-ov"/>
                <div className="cc-vc-label">
                  <div className="cc-vc-name">{v.name}</div>
                  <div className="cc-vc-desc">{v.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="cc-nav-row">
          <button className="cc-btn" disabled={state.vibes.length===0} onClick={()=>{
            setState(prev=>{
              let p={...prev.p}
              prev.vibes.forEach(v=>{p=applyW(p,VIBE_WEIGHTS[v]||{})})
              return{...prev,p}
            })
            goTo(5)
          }}>Continue →</button>
        </div>
      </div>
    )
  }

  function ScenarioScreen(){
    const set=(SCENARIOS[state.relationship]||SCENARIOS.romantic)
    const q=set[scenIdx]
    if(!q) return null
    return(
      <div className="cc-screen" style={{maxWidth:680}}>
        <div className="cc-scen-dots">
          {[0,1,2,3,4].map(i=><div key={i} className={`cc-scen-dot${i<scenIdx?' done':i===scenIdx?' current':''}`}/>)}
        </div>
        <div className="cc-scen-num">Scenario {String(scenIdx+1).padStart(2,'0')} of 05</div>
        <div className="cc-scen-q" dangerouslySetInnerHTML={{__html:q.text}}/>
        <div className="cc-scen-opts">
          {q.opts.map((o,i)=>(
            <div key={i} className="cc-scen-opt" onClick={e=>{
              e.currentTarget.classList.add('sel','advancing')
              setState(prev=>({...prev,p:applyW(prev.p,o.w)}))
              setTimeout(()=>{
                if(scenIdx<set.length-1){setScenIdx(scenIdx+1)}
                else goTo(6)
              },460)
            }}>{o.t}</div>
          ))}
        </div>
      </div>
    )
  }

  function SliderScreen(){
    return(
      <div className="cc-screen" style={{maxWidth:580}}>
        <div className="cc-eyebrow">Act III — The Dynamic</div>
        <h2 className="cc-title">Shape the relationship.</h2>
        <p className="cc-sub">How things feel between you — not their personality, the space you share.</p>
        <div className="cc-slider-stack">
          {SLIDERS_DEF.map(def=>(
            <div key={def.id} className="cc-slider-item">
              <div className="cc-slider-ends"><span>{def.l}</span><span>{def.r}</span></div>
              <input type="range" className="cc-range" min="0" max="100"
                defaultValue={state.sliders[def.id]||50}
                onChange={e=>{
                  const v=parseInt(e.target.value)
                  setState(prev=>{
                    const sliders={...prev.sliders,[def.id]:v}
                    return{...prev,sliders}
                  })
                  document.getElementById(`cc-si-${def.id}`).textContent=def.ins(v)
                }}
              />
              <div id={`cc-si-${def.id}`} className="cc-slider-insight">{def.ins(state.sliders[def.id]||50)}</div>
            </div>
          ))}
        </div>
        <div className="cc-nav-row">
          <button className="cc-btn" onClick={()=>{
            setState(prev=>{
              let p={...prev.p}
              SLIDERS_DEF.forEach(def=>{
                const v=prev.sliders[def.id]||50
                Object.entries(def.map).forEach(([k,fn])=>{if(p[k]!==undefined)p[k]=clamp(p[k]+fn(v))})
              })
              return{...prev,p}
            })
            goTo(7)
          }}>Continue →</button>
        </div>
      </div>
    )
  }

  function WorldScreen(){
    const ok=state.world.rhythm&&state.world.posts&&state.world.city&&state.world.secret&&state.world.supernatural
    return(
      <div className="cc-screen" style={{maxWidth:580}}>
        <div className="cc-eyebrow">Act IV — Their World</div>
        <h2 className="cc-title">Give them a life.</h2>
        <p className="cc-sub">Companions don't sit in a void. Let's build theirs.</p>
        <div className="cc-world-form">
          <div>
            <div className="cc-world-label">Their name</div>
            <input className="cc-world-input" type="text" placeholder="Leave blank to generate one…" maxLength={28}
              value={state.world.name}
              onChange={e=>setState(p=>({...p,world:{...p.world,name:e.target.value.trim()}}))}
            />
          </div>
          {[
            {field:'rhythm',label:'Their rhythm',opts:WORLD_DATA.rhythm},
            {field:'posts',label:'What they post when away',opts:WORLD_DATA.posts},
            {field:'city',label:'Their city energy',opts:WORLD_DATA.city},
            {field:'secret',label:'They have a secret',opts:WORLD_DATA.secret},
            {field:'supernatural',label:'How human are they?',opts:WORLD_DATA.supernatural},
          ].map(({field,label,opts})=>(
            <div key={field}>
              <div className="cc-world-label">{label}</div>
              <div className="cc-chips">
                {opts.map(opt=>(
                  <div key={opt} className={`cc-chip${state.world[field]===opt?' sel':''}`}
                    onClick={()=>setState(p=>({...p,world:{...p.world,[field]:p.world[field]===opt?null:opt}}))}>
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="cc-nav-row">
          <button className="cc-btn" disabled={!ok} onClick={()=>goTo(8)}>Continue →</button>
        </div>
      </div>
    )
  }

  function VoiceScreen(){
    const pr=getPronouns(state.gender)
    return(
      <div className="cc-screen" style={{maxWidth:560}}>
        <div className="cc-eyebrow">Act V — Voice</div>
        <h2 className="cc-title">How do they sound?</h2>
        <div className="cc-voice-ctx">Three days quiet. You finally reach out. {pr.cap} responds—</div>
        <div className="cc-voice-opts">
          {VOICE_OPTS.map((v,i)=>(
            <div key={i} className={`cc-voice-opt${state.voice===v.key?' sel':''}`} onClick={()=>{
              setState(p=>({...p,voice:v.key,p:applyW(p.p,v.w)}))
            }}>
              <div className="cc-voice-bubble">"{v.t}"</div>
              <div className="cc-voice-sub">{v.sub}</div>
            </div>
          ))}
        </div>
        <div className="cc-nav-row">
          <button className="cc-btn" disabled={!state.voice} onClick={()=>goTo(9)}>Almost there →</button>
        </div>
      </div>
    )
  }

  function AuditionScreen(){
    const pr=getPronouns(state.gender)
    const name=state.world.name||getGeneratedName(state.vibes)
    const avatar=getAvatar(state.vibes)
    const lines=auditionLines.length?auditionLines:generateAuditionLines(state.p)
    return(
      <div className="cc-screen" style={{maxWidth:560}}>
        <div className="cc-eyebrow">The Audition</div>
        <h2 className="cc-title">Three first impressions.</h2>
        <div className="cc-aud-ctx">Before the reveal — pick the opening that feels most right. Final calibration.</div>
        <div className="cc-aud-opts">
          {lines.map((line,i)=>(
            <div key={i} className={`cc-aud-opt${state.audition===i?' sel':''}`} onClick={()=>{
              setState(p=>({...p,audition:i,p:line.w?applyW(p.p,line.w):p.p}))
            }}>
              <div className="cc-aud-hd">
                <div className="cc-aud-av"><img src={`/${avatar}`} alt="" onError={e=>{e.target.style.display='none'}}/></div>
                <div className="cc-aud-name">{name}</div>
                <div className="cc-aud-time">now</div>
              </div>
              <div className="cc-aud-bubble">"{line.msg}"</div>
              <div className="cc-aud-follow">{line.follow}</div>
              <div className="cc-aud-badge">{line.label}</div>
            </div>
          ))}
        </div>
        <div className="cc-nav-row">
          <button className="cc-btn" disabled={state.audition===null} onClick={()=>{buildReveal();goTo(10)}}>Meet them →</button>
        </div>
      </div>
    )
  }

  function buildReveal(){
    const arch=getArchetype(state.p)
    const traits=getTraits(arch)
    const firstMsg=getFirstMsg(arch)
    const name=state.world.name||getGeneratedName(state.vibes)
    const pr=getPronouns(state.gender)
    const awayBehavior=getAwayBehavior(arch,state.world,pr)
    const dynamic=getDynamic(state.p,state.relationship)
    const r={name,archetype:arch,traits,firstMsg,awayBehavior,dynamic,avatar:getAvatar(state.vibes),aesthetic:getAestheticLabel(state.vibes),voiceDemo:getVoiceDemo(arch)}
    setReveal(r)
    return r
  }

  async function handleBringToLife(){
    if(saving) return
    setSaving(true)
    const r=reveal||buildReveal()
    const systemPrompt=generateSystemPrompt(state,r)
    try{
      await fetch('/api/companions/create',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({profile:state,reveal:r,systemPrompt})
      })
    }catch(e){/* backend optional, continue anyway */}
    setCustomSystem(systemPrompt)
    setActiveSystem('custom')
    clearChat()
    setView('chat')
  }

  function RevealScreen(){
    if(!reveal) return null
    const pr=getPronouns(state.gender)
    const isMale=state.gender==='male'||(state.gender==='surprise'&&reveal.name.match(/^(Dorian|Cassius|Cael|Ren|Linden|Finn|Zev|Kai|Rowan|Cain)$/))
    return(
      <div className="cc-screen" style={{maxWidth:500}}>
        <div className="cc-eyebrow">They're ready.</div>
        <div className="cc-reveal-card">
          <div className="cc-reveal-photo" style={{background:'linear-gradient(135deg,var(--s2),var(--s1))'}}>
            {isMale
              ?<div className="cc-reveal-photo-ph" style={{background:'linear-gradient(135deg,var(--s2),#04021a)'}}>{reveal.name[0]}</div>
              :<img src={`/${reveal.avatar}`} alt={reveal.name} onError={e=>{e.currentTarget.style.display='none'}}/>
            }
            <div className="cc-reveal-badge">{reveal.aesthetic}</div>
          </div>
          <div className="cc-reveal-body">
            <div className="cc-reveal-name">{reveal.name}</div>
            <div className="cc-reveal-arch">{reveal.archetype}</div>
            <div className="cc-reveal-traits">{reveal.traits.map(t=><span key={t} className="cc-reveal-trait">{t}</span>)}</div>
            <div className="cc-reveal-slabel">Their opening message</div>
            <div className="cc-reveal-fmsg">"{reveal.firstMsg}"</div>
          </div>
          <div className="cc-vdemo-label">How they actually talk</div>
          <div className="cc-vdemo">
            {reveal.voiceDemo.map((m,i)=>(
              <div key={i} className={`cc-vd-row${m.you?' you':''}`}>
                {m.you
                  ?<><div className="cc-vd-bubble">{m.t}</div><div className="cc-vd-av-you"/></>
                  :<><div className="cc-vd-av"><img src={`/${reveal.avatar}`} alt="" onError={e=>{e.target.style.display='none'}}/></div><div className="cc-vd-bubble">{m.t}</div></>
                }
              </div>
            ))}
          </div>
          <div style={{paddingLeft:22}}><div className="cc-reveal-slabel" style={{marginTop:0}}>When you're not around</div></div>
          <div className="cc-reveal-away" dangerouslySetInnerHTML={{__html:reveal.awayBehavior}}/>
          <div className="cc-reveal-dpill">{reveal.dynamic}</div>
        </div>
        <div className="cc-save-row">
          {saving
            ?<div className="cc-saving">Setting up {reveal.name}…</div>
            :<button className="cc-btn" onClick={handleBringToLife}>Start talking to {reveal.name} →</button>
          }
          <button className="cc-restart" onClick={()=>{setState(initState());setMirrorIdx(0);setScenIdx(0);setReveal(null);setSaving(false);setScreen(0)}}>
            Start over
          </button>
        </div>
      </div>
    )
  }

  // ── Screen router ─────────────────────────────
  const screenName=SCREENS[screen]

  return(
    <div className="cc-wrap">
      <div className="cc-progress">
        <div className="cc-progress-fill" style={{width:`${pct}%`}}/>
      </div>

      {screen>0&&screen<10&&(
        <div style={{padding:'14px 20px 0',position:'sticky',top:2,zIndex:9}}>
          <button className="cc-back" onClick={()=>{
            if(screenName==='scenarios'){setScenIdx(0)}
            setScreen(Math.max(0,screen-1))
          }}>← Back</button>
        </div>
      )}

      {screenName==='intro'&&(
        <div className="cc-screen" style={{textAlign:'center'}}>
          <div className="cc-orb"/>
          <div style={{fontSize:11,letterSpacing:4,textTransform:'uppercase',color:'var(--t2)',marginBottom:20}}>Boeme Studio</div>
          <div className="cc-intro-title">Design<br/>your person.</div>
          <div className="cc-intro-body">We won't ask you to fill out a form. Answer how you feel — we'll figure out the rest.</div>
          <button className="cc-btn" onClick={()=>goTo(1)}>Begin →</button>
        </div>
      )}
      {screenName==='mirror'&&<MirrorQ/>}
      {screenName==='gender'&&<GenderScreen/>}
      {screenName==='reltype'&&<RelTypeScreen/>}
      {screenName==='vibe'&&<VibeScreen/>}
      {screenName==='scenarios'&&<ScenarioScreen/>}
      {screenName==='sliders'&&<SliderScreen/>}
      {screenName==='world'&&<WorldScreen/>}
      {screenName==='voice'&&<VoiceScreen/>}
      {screenName==='audition'&&<AuditionScreen/>}
      {screenName==='reveal'&&<RevealScreen/>}
    </div>
  )
}
