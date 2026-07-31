import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'

const dir = path.join(process.cwd(), '..', 'chardata', 'companions')

export async function GET() {
  try {
    await fs.mkdir(dir, { recursive: true })
    const files = await fs.readdir(dir)
    const companions = await Promise.all(
      files
        .filter(f => f.endsWith('.json'))
        .map(async f => {
          try {
            const raw = await fs.readFile(path.join(dir, f), 'utf-8')
            const data = JSON.parse(raw)
            return { id: data.id, name: data.reveal?.name, archetype: data.reveal?.archetype, createdAt: data.createdAt }
          } catch { return null }
        })
    )
    return NextResponse.json({ companions: companions.filter(Boolean).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) })
  } catch (err) {
    return NextResponse.json({ companions: [] })
  }
}
