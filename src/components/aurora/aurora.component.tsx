import { FunctionComponent, RefObject, useEffect, useRef } from 'react'

import { FRAGMENT, VERTEX } from './aurora.shader'

export type AuroraInputs = { progress: number; mx: number; my: number }

type Props = {
  /** Read every frame; mutate it instead of re-rendering. */
  inputs: RefObject<AuroraInputs>
  /** Render resolution relative to the viewport — the shader is soft, so half-res is plenty. */
  scale?: number
}

export const Aurora: FunctionComponent<Props> = ({ inputs, scale = 0.5 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      return sh
    }
    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT))
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(program, 'p')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uR = gl.getUniformLocation(program, 'r')
    const uT = gl.getUniformLocation(program, 't')
    const uS = gl.getUniformLocation(program, 's')
    const uM = gl.getUniformLocation(program, 'm')

    const resize = () => {
      canvas.width = Math.round(innerWidth * scale)
      canvas.height = Math.round(innerHeight * scale)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    addEventListener('resize', resize)

    let raf = 0
    let smooth = 0
    const loop = (now: number) => {
      const { progress = 0, mx = 0, my = 0 } = inputs.current ?? {}
      smooth += (progress - smooth) * 0.05
      gl.uniform2f(uR, canvas.width, canvas.height)
      gl.uniform1f(uT, now / 1000)
      gl.uniform1f(uS, smooth)
      gl.uniform2f(uM, mx, -my)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
    }
  }, [inputs, scale])

  return <canvas id="gl" ref={canvasRef} aria-hidden />
}
