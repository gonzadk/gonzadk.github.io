export const VERTEX = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0., 1.); }`

/** Domain-warped fbm aurora. `s` = scroll progress (0..1), `m` = pointer offset. */
export const FRAGMENT = `precision highp float;
uniform vec2 r; uniform float t; uniform float s; uniform vec2 m;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float v = 0., a = .5; for (int i = 0; i < 5; i++) { v += a * n(p); p = p * 2.03 + vec2(1.7, 9.2); a *= .5; } return v; }
void main(){
  vec2 uv = (gl_FragCoord.xy - .5 * r) / r.y;
  uv += m * .08;
  float T = t * .05 + s * 2.2;
  vec2 q = vec2(fbm(uv * 1.4 + T), fbm(uv * 1.4 - T + 4.));
  vec2 w = vec2(fbm(uv * 1.6 + 2. * q + vec2(1.7, 9.2) + T * .6), fbm(uv * 1.6 + 2. * q + vec2(8.3, 2.8) - T * .4));
  float f = fbm(uv * 1.2 + 2.5 * w);
  vec3 pink = vec3(1., .48, .85), blue = vec3(.42, .66, 1.), lime = vec3(.78, 1., .42), deep = vec3(.02, .016, .045);
  vec3 col = mix(deep, blue * .55, smoothstep(.25, .75, f));
  col = mix(col, pink * .7, smoothstep(.45, .95, w.x) * .8);
  col = mix(col, lime * .5, smoothstep(.6, 1., q.y) * (.25 + .5 * s));
  float rays = pow(max(0., 1. - length(uv * vec2(.8, 1.2))), 2.);
  col += rays * .08 * vec3(.9, .8, 1.);
  col *= .55 + .45 * smoothstep(1.3, .0, length(uv));
  gl_FragColor = vec4(pow(col, vec3(.92)), 1.);
}`
