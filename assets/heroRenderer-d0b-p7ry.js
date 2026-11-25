import{W as ie,A as ne,S as se,P as le,C as p,B as ce,a as x,b as L,c as b,d as de,e as $,f as ee,g as oe,V as te,M as ae,h as ve,i as re,j as me}from"./three-D0aAcDcI.js";function ue(){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d");e.save(),e.translate(1024/2,512/2),e.scale(1,.12);const a=e.createRadialGradient(0,0,0,0,0,1024*.48);a.addColorStop(0,"rgba(255, 252, 238, 0.96)"),a.addColorStop(.16,"rgba(255, 202, 114, 0.74)"),a.addColorStop(.45,"rgba(245, 124, 28, 0.24)"),a.addColorStop(.78,"rgba(220, 96, 18, 0.04)"),a.addColorStop(1,"rgba(220, 96, 18, 0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,1024*.48,0,Math.PI*2),e.fill(),e.restore(),e.save(),e.translate(1024/2,512/2),e.scale(.18,.65);const r=e.createRadialGradient(0,0,0,0,0,512*.5);r.addColorStop(0,"rgba(255, 245, 220, 0.65)"),r.addColorStop(.32,"rgba(255, 165, 68, 0.25)"),r.addColorStop(.7,"rgba(245, 118, 28, 0.04)"),r.addColorStop(1,"rgba(245, 118, 28, 0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,512*.5,0,Math.PI*2),e.fill(),e.restore();const n=e.createRadialGradient(1024/2,512/2,0,1024/2,512/2,512*.26);n.addColorStop(0,"rgba(255, 255, 250, 1)"),n.addColorStop(.2,"rgba(255, 214, 136, 0.78)"),n.addColorStop(.55,"rgba(245, 126, 28, 0.2)"),n.addColorStop(1,"rgba(245, 126, 28, 0)"),e.fillStyle=n,e.fillRect(0,0,1024,512);const i=new re(t);return i.needsUpdate=!0,i}function he(){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d");e.save(),e.translate(1024/2,512/2),e.rotate(-.48),e.scale(1,.28);const a=e.createRadialGradient(0,0,0,0,0,1024*.45);a.addColorStop(0,"rgba(130, 168, 232, 0.2)"),a.addColorStop(.35,"rgba(84, 122, 196, 0.11)"),a.addColorStop(.7,"rgba(42, 68, 126, 0.04)"),a.addColorStop(1,"rgba(6, 10, 19, 0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,1024*.45,0,Math.PI*2),e.fill(),e.restore();const r=new re(t);return r.needsUpdate=!0,r}function fe(l){const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let t;try{t=new ie({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return()=>{}}const e=l.clientWidth||window.innerWidth,a=l.clientHeight||820;t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(e,a),t.toneMapping=ne,t.toneMappingExposure=.76,l.appendChild(t.domElement);const r=new se,n=new le(38,e/a,.1,240);n.position.set(0,.2,16);const i=[],h=3e3,f=new Float32Array(h*3),w=new Float32Array(h*3),R=new Float32Array(h),H=new Float32Array(h),A=[new p("#d0e4ff"),new p("#ffffff"),new p("#fff5e0"),new p("#ffdca8"),new p("#9bc2ff")];for(let o=0;o<h;o++){const s=36+Math.random()*62,Z=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);f[o*3]=s*Math.sin(W)*Math.cos(Z),f[o*3+1]=s*Math.sin(W)*Math.sin(Z)*.72+4.5,f[o*3+2]=-Math.abs(s*Math.cos(W))-8;const z=A[Math.floor(Math.random()*A.length)],T=.45+Math.random()*.55;w[o*3]=z.r*T,w[o*3+1]=z.g*T,w[o*3+2]=z.b*T,R[o]=Math.pow(Math.random(),2.8)*2.8+.65,H[o]=Math.random()*Math.PI*2}const d=new ce;d.setAttribute("position",new x(f,3)),d.setAttribute("color",new x(w,3)),d.setAttribute("aSize",new x(R,1)),d.setAttribute("aPhase",new x(H,1)),i.push(d);const S=new L({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
      attribute float aSize;
      attribute float aPhase;
      varying vec3 vColor;
      varying float vTwinkle;
      uniform float uTime;
      uniform float uPixelRatio;

      void main() {
        vColor = color;
        vTwinkle = 0.64 + 0.36 * sin(uTime * (0.85 + fract(aPhase) * 1.4) + aPhase * 6.2831);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = aSize * uPixelRatio * (35.0 / max(-mvPosition.z, 1.0));
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vTwinkle;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float alpha = pow(1.0 - d * 2.0, 2.3) * vTwinkle;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,vertexColors:!0,blending:b});i.push(S),r.add(new de(d,S));const k=he();i.push(k);const B=new $({map:k,transparent:!0,blending:b,depthWrite:!1,opacity:.78});i.push(B);const M=new ee(B);M.position.set(1.8,2.5,-14),M.scale.set(22,11,1),r.add(M);const F=29,E=new te(12.2,-32.35,-5),N=new oe(F,144,144);i.push(N);const G=new te(1.85,-4.85,-1.6),y=new L({uniforms:{uTime:{value:0},uSunrisePoint:{value:G}},vertexShader:`
      varying vec3 vWorldNormal;
      varying vec3 vWorldPos;
      varying vec3 vLocalPos;

      void main() {
        vLocalPos = normalize(position);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      varying vec3 vWorldNormal;
      varying vec3 vWorldPos;
      varying vec3 vLocalPos;
      uniform float uTime;
      uniform vec3 uSunrisePoint;

      float hash(vec3 p) {
        p = fract(p * 0.3183099 + 0.1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }

      float noise(vec3 x) {
        vec3 i = floor(x);
        vec3 f = fract(x);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
              mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
          mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
              mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
          f.z
        );
      }

      float fbm(vec3 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 6; i++) {
          v += a * noise(p);
          p = p * 2.09 + vec3(0.17, -0.13, 0.25);
          a *= 0.5;
        }
        return v;
      }

      float cloudHeight(vec3 p) {
        vec3 q = p * vec3(14.0, 20.0, 14.0);
        float w = fbm(q * 0.38);
        float base = fbm(q + vec3(w * 1.15, -w * 0.4, w * 0.65));
        float billow = fbm(q * 2.4 + vec3(2.1, -1.3, 0.7));
        return smoothstep(0.42, 0.78, base * 0.74 + billow * 0.26);
      }

      void main() {
        vec3 N = normalize(vWorldNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);
        float ndv = max(dot(N, V), 0.0);

        // Razor-thin, crisp orbital atmospheric limb
        float limbRazor = pow(1.0 - ndv, 9.5);
        float limbMid = pow(1.0 - ndv, 3.8);
        float limbWide = pow(1.0 - ndv, 1.8);

        // Distance from the orbital sunrise focal point
        float distSun = length(vWorldPos - uSunrisePoint);
        float sunProx = exp(-distSun * 0.22);
        float sunTight = exp(-distSun * 0.52);

        // Slow orbital rotation
        float rot = uTime * 0.0045;
        vec3 pRot = vec3(
          vLocalPos.x * cos(rot) - vLocalPos.z * sin(rot),
          vLocalPos.y,
          vLocalPos.x * sin(rot) + vLocalPos.z * cos(rot)
        );

        // Deep indigo ocean + subtle dark continents underneath
        float landMask = smoothstep(0.55, 0.63, fbm(pRot * 5.0 + vec3(1.1, 0.8, -0.4)));
        vec3 oceanBase = vec3(0.012, 0.032, 0.075);
        vec3 landBase = vec3(0.022, 0.032, 0.048);
        vec3 ground = mix(oceanBase, landBase, landMask);

        // Bump-lit 3D cloud deck (directional finite difference toward sunrise!)
        vec3 cPos = pRot + vec3(uTime * 0.002, 0.0, -uTime * 0.0015);
        float cH = cloudHeight(cPos);
        vec3 toSun = normalize(uSunrisePoint - vWorldPos);
        float cH_sun = cloudHeight(cPos + toSun * 0.0055);
        // Positive ridge = cloud face tilted toward the sunrise!
        float ridgeLit = clamp((cH - cH_sun) * 3.8 + 0.38, 0.0, 1.0);
        float ridgeShadow = clamp((cH_sun - cH) * 3.2, 0.0, 0.8);

        // Cloud palette: dark navy shadow -> warm amber-gold lit cloud tops -> cool blue away from sun
        vec3 cloudShadowCol = vec3(0.028, 0.052, 0.11);
        vec3 cloudLitCool = vec3(0.28, 0.44, 0.68);
        vec3 cloudLitWarm = vec3(1.0, 0.62, 0.28);
        vec3 cloudLit = mix(cloudLitCool, cloudLitWarm, smoothstep(0.08, 0.72, sunProx));

        vec3 cloudShade = mix(cloudShadowCol, cloudLit, ridgeLit) * (1.0 - ridgeShadow * 0.45);
        float cloudVis = cH * (0.28 + 0.72 * limbWide + 0.4 * sunProx);
        vec3 surfaceWithClouds = mix(ground, cloudShade, clamp(cloudVis, 0.0, 0.94));

        // Pure atmospheric transition along the razor limb (amber-gold at sun -> crisp ice-blue right)
        vec3 atmoIceBlue = vec3(0.42, 0.72, 1.0);
        vec3 atmoDeepBlue = vec3(0.18, 0.46, 0.95);
        vec3 atmoAmber = vec3(1.0, 0.50, 0.14);
        vec3 atmoCore = vec3(1.0, 0.94, 0.80);

        vec3 rimTint = mix(atmoIceBlue, atmoAmber, smoothstep(0.12, 0.75, sunProx));
        vec3 rimHaze = mix(atmoDeepBlue, atmoAmber, smoothstep(0.12, 0.75, sunProx));

        vec3 atmosphereGlow =
          rimTint * limbRazor * 2.8 +
          rimHaze * limbMid * 0.46 +
          atmoCore * sunTight * limbRazor * 2.2;

        vec3 color = surfaceWithClouds + atmosphereGlow;
        gl_FragColor = vec4(color, 1.0);
      }
    `});i.push(y);const _=new ae(N,y);_.position.copy(E),r.add(_);const I=new oe(F*1.012,112,112);i.push(I);const V=new L({uniforms:{uSunrisePoint:{value:G}},vertexShader:`
      varying vec3 vWorldNormal;
      varying vec3 vWorldPos;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      varying vec3 vWorldNormal;
      varying vec3 vWorldPos;
      uniform vec3 uSunrisePoint;

      void main() {
        vec3 N = normalize(vWorldNormal);
        vec3 V = normalize(cameraPosition - vWorldPos);
        float rim = pow(clamp(0.52 - dot(N, V), 0.0, 1.0), 4.6);
        float sunProx = exp(-length(vWorldPos - uSunrisePoint) * 0.24);

        vec3 blueHalo = vec3(0.30, 0.64, 1.0);
        vec3 amberHalo = vec3(1.0, 0.48, 0.14);
        vec3 col = mix(blueHalo, amberHalo, smoothstep(0.12, 0.72, sunProx));
        float alpha = rim * (0.48 + 0.56 * sunProx);
        gl_FragColor = vec4(col, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:b,side:ve});i.push(V);const D=new ae(I,V);D.position.copy(E),r.add(D);const j=ue();i.push(j);const q=new $({map:j,transparent:!0,blending:b,depthWrite:!1,depthTest:!1,opacity:.64,rotation:.24});i.push(q);const v=new ee(q);v.position.set(1.85,-4.55,-1.2),v.scale.set(9.5,3.6,1),v.renderOrder=10,r.add(v);const g={x:0,y:0},m={x:0,y:0},O=o=>{u||(g.x=o.clientX/window.innerWidth*2-1,g.y=o.clientY/window.innerHeight*2-1)};window.addEventListener("pointermove",O,{passive:!0});const U=()=>{const o=l.clientWidth||window.innerWidth,s=l.clientHeight||820;n.aspect=o/s,n.updateProjectionMatrix(),t.setSize(o,s),c||C()};window.addEventListener("resize",U);let c=0;const X=new me;let Y=0;const C=()=>{u||(Y+=Math.min(X.getDelta(),.1));const o=Y;S.uniforms.uTime.value=o,y.uniforms.uTime.value=o,m.x+=(g.x-m.x)*.03,m.y+=(g.y-m.y)*.03,n.position.x=m.x*.28+Math.sin(o*.14)*.08,n.position.y=.2-m.y*.18+Math.cos(o*.11)*.06,n.lookAt(.3,-.35,0);const s=1+Math.sin(o*.45)*.025;v.scale.set(9.5*s,3.6*s,1),v.material.opacity=.58+Math.sin(o*.6)*.06,t.render(r,n)},J=()=>{c=requestAnimationFrame(J),C()};let K=!0;const P=()=>{const o=!u&&K&&!document.hidden;o&&!c?(X.getDelta(),J()):!o&&c&&(cancelAnimationFrame(c),c=0)},Q=new IntersectionObserver(o=>{K=o.some(s=>s.isIntersecting),P()});return Q.observe(l),document.addEventListener("visibilitychange",P),C(),P(),()=>{cancelAnimationFrame(c),Q.disconnect(),document.removeEventListener("visibilitychange",P),window.removeEventListener("pointermove",O),window.removeEventListener("resize",U);for(const o of i)o.dispose();t.dispose(),t.domElement.parentNode===l&&l.removeChild(t.domElement)}}export{fe as mountHero};
