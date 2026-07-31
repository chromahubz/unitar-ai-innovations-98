'use client'
import { useEffect } from 'react'
import { useStore } from './store/useStore'
import Sidebar from './components/Sidebar'
import HubView from './components/views/HubView'
import CloudHubView from './components/views/CloudHubView'
import ChatView from './components/views/ChatView'
import HiveView from './components/views/HiveView'
import StudioView from './components/views/StudioView'
import LibraryView from './components/views/LibraryView'
import CompareView from './components/views/CompareView'
import RagView from './components/views/RagView'
import BenchmarksView from './components/views/BenchmarksView'
import ApiView from './components/views/ApiView'
import DownloadsView from './components/views/DownloadsView'
import SettingsView from './components/views/SettingsView'
import MempalaceGraphView from './components/views/MempalaceGraphView'
import NightForgeView from './components/views/NightForgeView'
import CompanionCreateView from './components/views/CompanionCreateView'
import ModelModal from './components/ModelModal'
import DownloadModal from './components/DownloadModal'
import AppShellFeedback from './components/AppShellFeedback'
import LiveCallOverlay from './components/LiveCallOverlay'

const VIEWS = {
  hub: HubView,
  'cloud-hub': CloudHubView,
  chat: ChatView,
  hive: HiveView,
  studio: StudioView,
  library: LibraryView,
  compare: CompareView,
  rag: RagView,
  benchmarks: BenchmarksView,
  api: ApiView,
  downloads: DownloadsView,
  settings: SettingsView,
  'mempalace-graph': MempalaceGraphView,
  'dream-mode': NightForgeView,
  'companion-create': CompanionCreateView,
}

export default function Page() {
  const activeView = useStore(s => s.activeView)

  useEffect(() => {
    const canvas = document.getElementById('star-canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const stars = []
    const STAR_COUNT = 220

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    function initStars() {
      stars.length = 0
      for (let i = 0; i < STAR_COUNT; i++) {
        const hue = Math.random() > 0.6 ? 260 + Math.random() * 40 : 0
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.3 + 0.15,
          a: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.006 + 0.002,
          offset: Math.random() * Math.PI * 2,
          color: hue === 0 ? '#FFFFFF' : `hsl(${hue}, 70%, 85%)`,
        })
      }
    }
    initStars()

    const onResize = () => { resize(); initStars() }
    window.addEventListener('resize', onResize)

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const s of stars) {
        const alpha = s.a * (0.6 + 0.4 * Math.sin(t * s.speed + s.offset))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.globalAlpha = alpha
        ctx.fill()
      }
      ctx.globalAlpha = 1
      t++
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <canvas id="star-canvas" />

      <div className="shell">
        <Sidebar />
        <main className="main">
          {Object.entries(VIEWS).map(([key, Component]) => (
            <div key={key} className={`view${activeView === key ? ' active' : ''}`} style={{ height: '100%', display: activeView === key ? 'flex' : 'none', flexDirection: 'column' }}>
              <Component />
            </div>
          ))}
        </main>
        <AppShellFeedback />
        <ModelModal />
        <DownloadModal />
        <LiveCallOverlay />
      </div>
    </>
  )
}
