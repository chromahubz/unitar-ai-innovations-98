'use client'
import { useEffect, useRef, useState } from 'react'
import { useStore } from '../store/useStore'

const NAV = [
    {
        group: 'Main', items: [
            { id: 'chat', label: 'Chat' },
            { id: 'companion-create', label: 'Create Companion' },
            { id: 'studio', label: 'Studio' },
            { id: 'hub', label: 'Hub' },
        ]
    },
    {
        group: 'System', items: [
            { id: 'downloads', label: 'Downloads', badge: 'dlCount' },
            { id: 'settings', label: 'Settings' },
        ]
    },
]

const ICONS = {
    hub: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="5.5" cy="5.5" r="4" /><path d="M9 9l3 3" /></svg>,
    'cloud-hub': <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3.5 6A3.5 3.5 0 0110.1 4.5 3 3 0 0110.5 10H3.5a2.5 2.5 0 010-5" /></svg>,
    library: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="2" width="10" height="10" rx="2" /><path d="M5 2v10M9 5H5" /></svg>,
    compare: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M2 3h4v8H2zM8 3h4v8H8z" /></svg>,
    chat: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M2 2h10a1 1 0 011 1v6a1 1 0 01-1 1H5l-3 2V3a1 1 0 011-1z" /></svg>,
    'companion-create': <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="7" cy="5" r="2.5" /><path d="M2 12c0-2.2 2.2-4 5-4s5 1.8 5 4" /><path d="M10 2l1 1M10 4l1-1" /></svg>,
    hive: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 1.5l4.5 2.6v5.2L7 11.9 2.5 9.3V4.1L7 1.5z" /><path d="M4.2 5.1h5.6M4.8 7h4.4M5.4 8.9h3.2" /></svg>,
    studio: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="1.8" y="2.2" width="10.4" height="7.6" rx="1.6" /><path d="M5.1 11.8h3.8M7 9.8v2" /></svg>,
    rag: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="2" width="4" height="4" rx="1" /><rect x="8" y="2" width="4" height="4" rx="1" /><rect x="2" y="8" width="4" height="4" rx="1" /><rect x="8" y="8" width="4" height="4" rx="1" /></svg>,
    'mempalace-graph': <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="7" cy="7" r="1.5" /><circle cx="2.5" cy="3" r="1.2" /><circle cx="11.5" cy="3" r="1.2" /><circle cx="2.5" cy="11" r="1.2" /><circle cx="11.5" cy="11" r="1.2" /><path d="M3.6 3.9L5.7 5.7M8.3 5.7L10.4 3.9M3.6 10.1L5.7 8.3M8.3 8.3L10.4 10.1" /></svg>,
    'dream-mode': <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M2.5 7A4.5 4.5 0 007 11.5c4 0 4.5-3.5 4.5-4.5 0-2.5-2-4.5-4.5-4.5A4.5 4.5 0 002.5 7z" /><circle cx="7" cy="6" r="1" /></svg>,
    benchmarks: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M1 11l4-4 3 2.5 5-7" /></svg>,
    api: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 4l-3 3 3 3M10 4l3 3-3 3M8 2l-2 10" /></svg>,
    downloads: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 1v8M4 6l3 3 3-3M1 12h12" /></svg>,
    settings: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="7" cy="7" r="2" /><path d="M7 1.5v1M7 11.5v1M1.5 7h1M11.5 7h1M3.2 3.2l.7.7M10.1 10.1l.7.7M10.1 3.2l-.7.7M3.2 10.1l.7.7" /></svg>,
}

function estVRAM(name) {
    const u = (name || '').toUpperCase()
    const map = {
        '5090': 32, '4090': 24, '4080 SUPER': 16, '4080': 16, '4070 TI SUPER': 16, '4070 TI': 12,
        '4070 SUPER': 12, '4070': 12, '4060 TI 16': 16, '4060 TI': 8, '4060': 8,
        '3090 TI': 24, '3090': 24, '3080 TI': 12, '3080': 10, '3070': 8, '3060': 12,
        'A100': 80, 'H100': 80, 'A6000': 48, 'A5000': 24,
        '7900 XTX': 24, '7900 XT': 20, '7800 XT': 16, '6950 XT': 16, '6900 XT': 16, '6800 XT': 16,
        'M4 MAX': 64, 'M4 PRO': 48, 'M3 MAX': 128, 'M3 PRO': 36, 'M3': 8,
        'M2 ULTRA': 192, 'M2 MAX': 96, 'M2 PRO': 32, 'M2': 8,
        'M1 ULTRA': 128, 'M1 MAX': 64, 'M1 PRO': 32, 'M1': 8,
        'ARC A770': 16, 'ARC A750': 8,
    }
    for (const [k, v] of Object.entries(map)) { if (u.includes(k)) return v }
    if (u.includes('INTEL')) return 0
    return null
}

export default function Sidebar() {
    const { activeView, setView, installed, downloads, hwScanning, detectedVRAM, detectedGPU, detectedRAM, detectedCores, setHardware,
        chatSessions, initSessions, clearChat, addMessage, setTokenCount, currentSessionId, setCurrentSessionId,
        setLiveCallActive } = useStore()
    const didDetect = useRef(false)
    const [historyExpanded, setHistoryExpanded] = useState(false)

    useEffect(() => {
        initSessions()
        if (didDetect.current) return
        didDetect.current = true

        async function detect() {
            try {
                const res = await fetch('/api/models/installed', { signal: AbortSignal.timeout(4000) })
                if (res.ok) {
                    const data = await res.json()
                    useStore.getState().setInstalled(data.map(m => m.model_id))
                }
            } catch { }

            try {
                const res = await fetch('/api/hardware', { signal: AbortSignal.timeout(4000) })
                if (res.ok) {
                    const data = await res.json()
                    if (data.source === 'backend') {
                        setHardware({
                            detectedGPU: data.gpu_name || 'Unknown',
                            detectedVRAM: data.vram_gb > 0 ? data.vram_gb : 0,
                            detectedRAM: data.ram_total_gb,
                            detectedCores: data.cpu_cores_logical,
                            backendConnected: true,
                            gpuUtil: data.gpu_util_pct,
                            gpuTemp: data.gpu_temp_c,
                            recommendedBackend: data.recommended_backend,
                            diskFreeGB: data.disk_free_gb,
                        })
                        return
                    }
                }
            } catch { }

            let gpu = 'Unknown GPU', vram = null, ram = null
            const cores = navigator.hardwareConcurrency || null
            try {
                const c = document.createElement('canvas')
                const gl = c.getContext('webgl') || c.getContext('experimental-webgl')
                if (gl) {
                    const ext = gl.getExtension('WEBGL_debug_renderer_info')
                    if (ext) {
                        const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || ''
                        gpu = renderer || gpu
                        vram = estVRAM(renderer)
                    }
                }
            } catch { }
            try {
                if (navigator.gpu) {
                    const a = await navigator.gpu.requestAdapter()
                    if (a) { const info = await a.requestAdapterInfo(); if (info?.device) gpu = info.device }
                }
            } catch { }
            try { if (navigator.deviceMemory) ram = navigator.deviceMemory } catch { }
            setHardware({
                detectedGPU: gpu, detectedVRAM: vram, detectedRAM: ram, detectedCores: cores,
                backendConnected: false,
            })
        }
        detect()
    }, [setHardware])

    const dlActive = downloads.filter(d => d.pct < 100).length
    const gpuShort = (detectedGPU || '').replace(/OpenGL Engine/i, '').replace(/Renderer/i, '').trim().substring(0, 26)

    return (
        <aside className="sidebar">
            {/* Logo */}
            <div className="logo">
                <div className="logo-mark">
                    <div className="logo-icon">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="15,3 25,9 25,21 15,27 5,21 5,9" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.5" />
                            <polygon points="15,7 21.5,11 21.5,19 15,23 8.5,19 8.5,11" stroke="#A78BFA" strokeWidth="0.8" fill="none" opacity="0.4" />
                            <circle cx="15" cy="15" r="2.5" fill="#A78BFA" />
                            <circle cx="15" cy="3" r="1.5" fill="#C084FC" opacity="0.8" />
                            <circle cx="25" cy="9" r="1" fill="#A78BFA" opacity="0.6" />
                            <circle cx="25" cy="21" r="1" fill="#A78BFA" opacity="0.6" />
                            <circle cx="15" cy="27" r="1.5" fill="#C084FC" opacity="0.8" />
                            <circle cx="5" cy="21" r="1" fill="#A78BFA" opacity="0.6" />
                            <circle cx="5" cy="9" r="1" fill="#A78BFA" opacity="0.6" />
                        </svg>
                    </div>
                    Celestos
                </div>

            </div>

            {/* Nav */}
            {NAV.map(group => (
                <div key={group.group} className="nav-group">
                    <div className="nav-label">{group.group}</div>
                    {group.items.map(item => {
                        const badgeVal = item.id === 'downloads' ? (dlActive || null) : item.id === 'library' ? installed.size : null
                        return (
                            <div
                                key={item.id}
                                className={`nav-item${activeView === item.id ? ' active' : ''}`}
                                onClick={() => setView(item.id)}
                            >
                                {ICONS[item.id]}
                                {item.label}
                                {badgeVal ? <span className="nav-badge">{badgeVal}</span> : null}
                            </div>
                        )
                    })}
                </div>
            ))}

            {/* Live avatar call */}
            <div className="nav-group">
                <button
                    className="lc-launch"
                    onClick={() => setLiveCallActive(true)}
                    title="Start a live video call with the avatar"
                >
                    <span className="lc-launch-icon">📹</span>
                    Video Call
                </button>
            </div>

            {/* Chat History Accordion */}
            <div className="nav-group" style={{ marginTop: 8 }}>
                <div
                    className="nav-label"
                    onClick={() => setHistoryExpanded(!historyExpanded)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', paddingRight: 8 }}
                >
                    Recent Chats
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: historyExpanded ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
                {historyExpanded && (
                    <div style={{ padding: '0 8px', marginTop: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <button
                            onClick={() => {
                                setCurrentSessionId(`chat-${Date.now()}`)
                                clearChat()
                                setView('chat')
                            }}
                            style={{
                                width: '100%', padding: '6px 0', borderRadius: 8, cursor: 'pointer', marginBottom: 6,
                                background: 'transparent', border: '1px dashed var(--b2)',
                                color: 'var(--t3)', fontSize: 10, fontWeight: 700, fontFamily: 'inherit', transition: 'all .2s'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.color = 'var(--ac2)'; e.currentTarget.style.borderColor = 'var(--ac)' }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'var(--t3)'; e.currentTarget.style.borderColor = 'var(--b2)' }}
                        >
                            + New Chat
                        </button>

                        {chatSessions.length === 0 ? (
                            <div style={{ padding: '10px', textAlign: 'center', color: 'var(--t3)', fontSize: 10 }}>No saved sessions.</div>
                        ) : (
                            chatSessions.slice(0, 10).map(s => (
                                <div key={s.id}
                                    onClick={() => {
                                        useStore.getState().loadSession(s.id)
                                    }}
                                    style={{
                                        padding: '6px 8px', borderRadius: 8, cursor: 'pointer',
                                        background: currentSessionId === s.id ? 'rgba(139,92,246,0.08)' : 'transparent',
                                        border: `1px solid ${currentSessionId === s.id ? 'rgba(139,92,246,0.2)' : 'transparent'}`,
                                        transition: 'all .15s'
                                    }}
                                    onMouseEnter={e => { if (currentSessionId !== s.id) { e.currentTarget.style.background = 'rgba(139,92,246,0.04)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.1)' } }}
                                    onMouseLeave={e => { if (currentSessionId !== s.id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent' } }}
                                >
                                    <div style={{ fontSize: 10, fontWeight: 600, color: currentSessionId === s.id ? 'var(--ac2)' : 'var(--t2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {s.title || 'Untitled'}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>

            <div style={{ flex: 1 }} />

            {/* Hardware Telemetry */}
            <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
                {detectedGPU && (() => {
                    const raw = detectedGPU.replace(/OpenGL Engine/i, '').replace(/Renderer/i, '').replace(/NVIDIA/i, '').replace(/GeForce/i, '').replace(/Radeon/i, '').replace(/Intel/i, '').trim()
                    const short = raw.length > 18 ? raw.substring(0, 18).trimEnd() : raw
                    return (
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 7,
                            padding: '6px 10px',
                            background: 'rgba(52,211,153,0.04)',
                            border: '1px solid rgba(52,211,153,0.14)',
                            borderRadius: 12,
                        }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(52,211,153,0.6)" strokeWidth="2">
                                <rect x="2" y="6" width="20" height="12" rx="3" />
                                <path d="M6 10h.01M10 10h.01M14 10h.01M6 14h4M14 14h4" />
                            </svg>
                            <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(234,232,255,0.45)', letterSpacing: '.01em', maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {short}
                            </span>
                            {detectedVRAM ? (
                                <span style={{
                                    fontSize: 9, fontWeight: 800, color: '#34D399',
                                    background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)',
                                    borderRadius: 10, padding: '1px 6px', letterSpacing: '.02em', marginLeft: 'auto'
                                }}>{detectedVRAM} GB</span>
                            ) : null}
                        </div>
                    )
                })()}
                {(detectedRAM || detectedCores) && (
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 7,
                        padding: '6px 10px',
                        background: 'rgba(139,92,246,0.04)',
                        border: '1px solid rgba(139,92,246,0.14)',
                        borderRadius: 12,
                    }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(139,92,246,0.6)" strokeWidth="2.5">
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <path d="M9 9h6v6H9zM9 1V4M15 1V4M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
                        </svg>
                        <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(234,232,255,0.45)', letterSpacing: '.01em' }}>
                            {detectedCores ? `${detectedCores} C` : 'CPU'}
                        </span>
                        {detectedRAM ? (
                            <span style={{
                                fontSize: 9, fontWeight: 800, color: '#A78BFA',
                                background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
                                borderRadius: 10, padding: '1px 6px', letterSpacing: '.02em', marginLeft: 'auto'
                            }}>{detectedRAM} GB</span>
                        ) : null}
                    </div>
                )}
            </div>
        </aside>
    )
}
