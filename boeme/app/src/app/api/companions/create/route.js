import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import { randomUUID } from 'crypto'

const dir = path.join(process.cwd(), '..', 'chardata', 'companions')

export async function POST(req) {
  try {
    const body = await req.json()
    const { profile, reveal, systemPrompt } = body

    await fs.mkdir(dir, { recursive: true })

    const id = randomUUID()
    const filename = `${id}.json`
    await fs.writeFile(
      path.join(dir, filename),
      JSON.stringify({ id, profile, reveal, systemPrompt, createdAt: new Date().toISOString() }, null, 2)
    )

    return NextResponse.json({ companionId: id, name: reveal?.name })
  } catch (err) {
    console.error('[companions/create]', err)
    return NextResponse.json({ error: 'Failed to save companion' }, { status: 500 })
  }
}
