import { e as createComponent, r as renderTemplate, m as maybeRenderHead, q as Fragment, _ as __astro_tag_component__, y as createVNode } from './astro_BzYC2ZrC.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_BgdWMxSg.mjs';
import { a as $$Code, $ as $$Steps } from './Code_B2dLFuAb.mjs';
import './prerender_Exw1nQnx.mjs';
import 'kleur/colors';
import 'clsx';

const Code = $$Code;

const $$Floating3D = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-96 relative rounded"> <!-- Floating 3D Object --> <canvas id="hero-bg" class="!w-full !h-full rounded absolute top-0 left-0 z-0"></canvas> <!-- Content --> <div class="w-full h-full relative top-0 right-0 text-right flex flex-col items-end justify-center px-8 py-10 font-mono text-white"> <h1 class="!text-white">Lorem Ipsum Dolor</h1> <p class="max-w-96">
Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
</p> <button class="bg-transparent border border-white text-white px-4 py-2 mt-4 rounded flex items-center gap-2 hover:bg-white hover:text-gray-900 cursor-pointer">
Learn More →
</button> </div> </div> `;
}, "/Users/pbthang/pbthang-components/src/components/hero/Floating3D.astro", void 0);

const fullCode = "<div class=\"h-96 relative rounded\">\n  <!-- Floating 3D Object -->\n  <canvas id=\"hero-bg\" class=\"!w-full !h-full rounded absolute top-0 left-0 z-0\"></canvas>\n\n  <!-- Content -->\n  <div class=\"w-full h-full relative top-0 right-0 text-right flex flex-col items-end justify-center px-8 py-10 font-mono text-white\">\n    <h1 class=\"!text-white\">Lorem Ipsum Dolor</h1>\n    <p class=\"max-w-96\">\n      Sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n    <button\n      class=\"bg-transparent border border-white text-white px-4 py-2 mt-4 rounded flex items-center gap-2 hover:bg-white hover:text-gray-900 cursor-pointer\"\n    >\n      Learn More →\n    </button>\n  </div>\n</div>\n\n<script>\n  import * as THREE from 'three';\n  import { RoomEnvironment } from 'three/examples/jsm/Addons.js';\n  \n  const canvas = document.querySelector('#hero-bg') as HTMLCanvasElement;\n  const scene = new THREE.Scene();\n  scene.background = new THREE.Color(0x1f2937);\n  \n  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);\n  camera.position.z = 6;\n  \n  const renderer = new THREE.WebGLRenderer({\n    canvas,\n    antialias: true,\n  });\n\n  const pmremGenerator = new THREE.PMREMGenerator(renderer);\n  scene.environment = pmremGenerator.fromScene(\n    new RoomEnvironment(),\n    0.04\n  ).texture;\n\n  const torus = new THREE.Mesh(\n    new THREE.TorusKnotGeometry(2, 0.7, 100, 16),\n    new THREE.MeshPhysicalMaterial({\n      color: 0x00b377,\n      roughness: 0.2,\n      metalness: 1,\n      iridescence: 1,\n      iridescenceIOR: 1.31,\n    })\n  );\n  torus.position.set(-4, 0, 0);\n  scene.add(torus);\n\n  renderer.setPixelRatio(window.devicePixelRatio);\n  renderer.setSize(canvas.clientWidth, canvas.clientHeight);\n\n  renderer.render(scene, camera);\n\n  function animate() {\n    requestAnimationFrame(animate);\n    torus.rotation.y += 0.004;\n    torus.rotation.z += 0.004;\n    renderer.render(scene, camera);\n  }\n\n  animate();\n</script>";

const frontmatter = {
  "title": "Floating 3D Objects",
  "description": "Create floating 3D objects using HTML, TailwindCSS and Three.js."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "demo",
    "text": "Demo"
  }, {
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 2,
    "slug": "steps",
    "text": "Steps"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Create floating 3D objects using HTML, TailwindCSS and Three.js.</p>\n"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"demo\">Demo</h2>\n"
    }), "\n", createVNode($$Floating3D, {}), "\n", createVNode(Code, {
      code: fullCode,
      lang: "html",
      title: "index.html",
      showLineNumbers: true,
      collapse: ["7-16"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"prerequisites\">Prerequisites</h2>\n<p><a href=\"https://threejs.org/\">Three.js</a> is required to use the code snippet above.</p>\n<h2 id=\"steps\">Steps</h2>\n"
    }), createVNode($$Steps, {
      "set:html": "<ol>\n<li>\n<p>Inside the root <code dir=\"auto\">div</code>, create a <code dir=\"auto\">canvas</code> element for the 3d objects and a\n<code dir=\"auto\">div</code> element for the content:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.pa4qu.css\"><script type=\"module\" src=\"/_astro/ec.3zb7u.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"html\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3C63B3\">class</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">h-96 relative rounded</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#809191;--1:#616671\">&#x3C;!-- Floating 3D Object --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">canvas</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C5E478;--1:#3C63B3\">id</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">hero-bg</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C5E478;--1:#3C63B3\">class</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">!w-full !h-full rounded absolute top-0 left-0 z-0</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8D46B4\">  </span></span><span style=\"--0:#7FDBCA;--1:#8D46B4\">>&#x3C;/</span><span style=\"--0:#CAECE6;--1:#8D46B4\">canvas</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">></span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#809191;--1:#616671\">&#x3C;!-- Content --></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">div</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C5E478;--1:#3C63B3\">class</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">w-full h-full relative top-0 right-0 text-right flex flex-col items-end justify-center px-8 py-10 font-mono text-white</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8D46B4\">  </span></span><span style=\"--0:#7FDBCA;--1:#8D46B4\">></span></div></div><details class=\"ec-section\"><summary><div class=\"ec-line\" style=\"--ecIndent:4ch\"><div class=\"code\"><svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\"><path d=\"m8.177.677 2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25a.75.75 0 0 1-1.5 0V4H5.104a.25.25 0 0 1-.177-.427L7.823.677a.25.25 0 0 1 .354 0ZM7.25 10.75a.75.75 0 0 1 1.5 0V12h2.146a.25.25 0 0 1 .177.427l-2.896 2.896a.25.25 0 0 1-.354 0l-2.896-2.896A.25.25 0 0 1 5.104 12H7.25v-1.25Zm-5-2a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z\"></path></svg>9 collapsed lines</div></div></summary><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3C63B3\">class</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">!text-white</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">Lorem Ipsum Dolor</span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">h1</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\"> </span></span><span style=\"--0:#C5E478;--1:#3C63B3\">class</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">max-w-96</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">p</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;</span><span style=\"--0:#CAECE6\">button</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">      </span><span style=\"--0:#C5E478;--1:#3C63B3\">class</span><span style=\"--0:#7FDBCA;--1:#8D46B4\">=</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">bg-transparent border border-white text-white px-4 py-2 mt-4 rounded flex items-center gap-2 hover:bg-white hover:text-gray-900 cursor-pointer</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#7FDBCA;--1:#8D46B4\">    </span></span><span style=\"--0:#7FDBCA;--1:#8D46B4\">></span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">      </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Learn More →</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">button</span><span style=\"--0:#7FDBCA\">></span></span></div></div></details><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\">></span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--1:#8D46B4\"><span style=\"--0:#7FDBCA\">&#x3C;/</span><span style=\"--0:#CAECE6\">div</span><span style=\"--0:#7FDBCA\">></span></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<div class=&#x22;h-96 relative rounded&#x22;>  <!-- Floating 3D Object -->  <canvas    id=&#x22;hero-bg&#x22;    class=&#x22;!w-full !h-full rounded absolute top-0 left-0 z-0&#x22;  ></canvas>  <!-- Content -->  <div    class=&#x22;w-full h-full relative top-0 right-0 text-right flex flex-col items-end justify-center px-8 py-10 font-mono text-white&#x22;  >    <h1 class=&#x22;!text-white&#x22;>Lorem Ipsum Dolor</h1>    <p class=&#x22;max-w-96&#x22;>      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    </p>    <button      class=&#x22;bg-transparent border border-white text-white px-4 py-2 mt-4 rounded flex items-center gap-2 hover:bg-white hover:text-gray-900 cursor-pointer&#x22;    >      Learn More →    </button>  </div></div>\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Create a script for the HTML and set up the scene, camera, renderer, and environment using <code dir=\"auto\">three.js</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">main.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">as</span><span style=\"--0:#D6DEEB;--1:#403F53\"> THREE </span><span style=\"--0:#C792EA;--1:#8D46B4\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">three</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">import</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { RoomEnvironment } </span><span style=\"--0:#C792EA;--1:#8D46B4\">from</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">three/examples/jsm/Addons.js</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">const </span><span style=\"--0:#82AAFF;--1:#3C63B3\">canvas</span><span style=\"--0:#C792EA;--1:#8D46B4\"> = </span><span style=\"--0:#D6DEEB;--1:#403F53\">document</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">querySelector</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">#hero-bg</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8D46B4\"> as </span><span style=\"--0:#FFCB8B;--1:#111111\">HTMLCanvasElement</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">const </span><span style=\"--0:#82AAFF;--1:#3C63B3\">scene</span><span style=\"--0:#C792EA;--1:#8D46B4\"> = </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">THREE</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">Scene</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">scene</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">background</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">THREE</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">Color</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">0x1f2937</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">const </span><span style=\"--0:#82AAFF;--1:#3C63B3\">camera</span><span style=\"--0:#C792EA;--1:#8D46B4\"> = </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">THREE</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">PerspectiveCamera</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#F78C6C;--1:#AA0982\">75</span><span style=\"--0:#C792EA;--1:#8D46B4\">, </span><span style=\"--0:#809191;--1:#5E6578\">// field of view</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#D6DEEB;--1:#403F53\">canvas</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">clientWidth</span><span style=\"--0:#C792EA;--1:#8D46B4\"> / </span><span style=\"--0:#D6DEEB;--1:#403F53\">canvas</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">clientHeight</span><span style=\"--0:#C792EA;--1:#8D46B4\">, </span><span style=\"--0:#809191;--1:#5E6578\">// aspect ratio</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.1</span><span style=\"--0:#C792EA;--1:#8D46B4\">, </span><span style=\"--0:#809191;--1:#5E6578\">// near clipping plane</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#F78C6C;--1:#AA0982\">1000</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#809191;--1:#5E6578\">// far clipping plane</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">camera</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#FAF39F;--1:#111111\">position</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">z</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">6</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">const </span><span style=\"--0:#82AAFF;--1:#3C63B3\">renderer</span><span style=\"--0:#C792EA;--1:#8D46B4\"> = </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">THREE</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">WebGLRenderer</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#D6DEEB;--1:#403F53\">canvas</span><span style=\"--0:#C792EA;--1:#8D46B4\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8D46B4\">  </span></span><span style=\"--0:#C792EA;--1:#8D46B4\">antialias: </span><span style=\"--0:#FF5874;--1:#A54A4A\">true</span><span style=\"--0:#C792EA;--1:#8D46B4\">, </span><span style=\"--0:#809191;--1:#5E6578\">// to smooth the edges</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">const </span><span style=\"--0:#82AAFF;--1:#3C63B3\">pmremGenerator</span><span style=\"--0:#C792EA;--1:#8D46B4\"> = </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">THREE</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">PMREMGenerator</span><span style=\"--0:#D6DEEB;--1:#403F53\">(renderer);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">scene</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">environment</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> pmremGenerator</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">fromScene</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">RoomEnvironment</span><span style=\"--0:#D6DEEB;--1:#403F53\">(), </span><span style=\"--0:#809191;--1:#5E6578\">// or any other environment</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.04</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">texture</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import * as THREE from &#x22;three&#x22;;import { RoomEnvironment } from &#x22;three/examples/jsm/Addons.js&#x22;;const canvas = document.querySelector(&#x22;#hero-bg&#x22;) as HTMLCanvasElement;const scene = new THREE.Scene();scene.background = new THREE.Color(0x1f2937);const camera = new THREE.PerspectiveCamera(  75, // field of view  canvas.clientWidth / canvas.clientHeight, // aspect ratio  0.1, // near clipping plane  1000 // far clipping plane);camera.position.z = 6;const renderer = new THREE.WebGLRenderer({  canvas,  antialias: true, // to smooth the edges});const pmremGenerator = new THREE.PMREMGenerator(renderer);scene.environment = pmremGenerator.fromScene(  new RoomEnvironment(), // or any other environment  0.04).texture;\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Create a mesh for the 3D object and render it on the scene:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">main.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">const </span><span style=\"--0:#82AAFF;--1:#3C63B3\">torus</span><span style=\"--0:#C792EA;--1:#8D46B4\"> = </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">THREE</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">Mesh</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">THREE</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">TorusKnotGeometry</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#C792EA;--1:#8D46B4\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.7</span><span style=\"--0:#C792EA;--1:#8D46B4\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">100</span><span style=\"--0:#C792EA;--1:#8D46B4\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">16</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8D46B4\">, </span><span style=\"--0:#809191;--1:#5E6578\">// or any other geometry</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">THREE</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">MeshPhysicalMaterial</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8D46B4\">    </span></span><span style=\"--0:#C792EA;--1:#8D46B4\">color: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0x00b377</span><span style=\"--0:#C792EA;--1:#8D46B4\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8D46B4\">    </span></span><span style=\"--0:#C792EA;--1:#8D46B4\">roughness: </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.2</span><span style=\"--0:#C792EA;--1:#8D46B4\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8D46B4\">    </span></span><span style=\"--0:#C792EA;--1:#8D46B4\">metalness: </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#C792EA;--1:#8D46B4\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8D46B4\">    </span></span><span style=\"--0:#C792EA;--1:#8D46B4\">iridescence: </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#C792EA;--1:#8D46B4\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8D46B4\">    </span></span><span style=\"--0:#C792EA;--1:#8D46B4\">iridescenceIOR: </span><span style=\"--0:#F78C6C;--1:#AA0982\">1.31</span><span style=\"--0:#C792EA;--1:#8D46B4\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#C792EA;--1:#8D46B4\">  </span></span><span style=\"--0:#C792EA;--1:#8D46B4\">}</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8D46B4\"> </span><span style=\"--0:#809191;--1:#5E6578\">// or any other material</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">torus</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#FAF39F;--1:#111111\">position</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">set</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">-</span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">scene</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">add</span><span style=\"--0:#D6DEEB;--1:#403F53\">(torus);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">renderer</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">setPixelRatio</span><span style=\"--0:#D6DEEB;--1:#403F53\">(window</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">devicePixelRatio</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">renderer</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">setSize</span><span style=\"--0:#D6DEEB;--1:#403F53\">(canvas</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">clientWidth</span><span style=\"--0:#D6DEEB;--1:#403F53\">, canvas</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">clientHeight</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">renderer</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">render</span><span style=\"--0:#D6DEEB;--1:#403F53\">(scene, camera); </span><span style=\"--0:#809191;--1:#5E6578\">// render the scene</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const torus = new THREE.Mesh(  new THREE.TorusKnotGeometry(2, 0.7, 100, 16), // or any other geometry  new THREE.MeshPhysicalMaterial({    color: 0x00b377,    roughness: 0.2,    metalness: 1,    iridescence: 1,    iridescenceIOR: 1.31,  }) // or any other material);torus.position.set(-4, 0, 0);scene.add(torus);renderer.setPixelRatio(window.devicePixelRatio);renderer.setSize(canvas.clientWidth, canvas.clientHeight);renderer.render(scene, camera); // render the scene\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>Add an animation loop to rotate the 3D object:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">main.ts</span></figcaption><pre data-language=\"ts\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">function</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">animate</span><span style=\"--0:#D9F5DD;--1:#111111\">()</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3C63B3\">requestAnimationFrame</span><span style=\"--0:#D6DEEB;--1:#403F53\">(animate);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#809191;--1:#5E6578\">// Rotate the torus</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">torus</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#FAF39F;--1:#111111\">rotation</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">y</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">+=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.004</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">torus</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#FAF39F;--1:#111111\">rotation</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">z</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">+=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0.004</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">  </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">renderer</span><span style=\"--0:#C792EA;--1:#8D46B4\">.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">render</span><span style=\"--0:#D6DEEB;--1:#403F53\">(scene</span><span style=\"--0:#7690A6;--1:#4F687D\">,</span><span style=\"--0:#D6DEEB;--1:#403F53\"> camera);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">animate</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"function animate() {  requestAnimationFrame(animate);  // Rotate the torus  torus.rotation.y += 0.004;  torus.rotation.z += 0.004;  renderer.render(scene, camera);}animate();\"><div></div></button></div></figure></div>\n</li>\n<li>\n<p>You should now have a beautiful floating 3D object in your hero section. Feel free to customize the Mesh, Material and animation to suit your design.</p>\n</li>\n</ol>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/components/hero/floating-3d.mdx";
const file = "/Users/pbthang/pbthang-components/src/content/docs/components/hero/floating-3d.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/pbthang/pbthang-components/src/content/docs/components/hero/floating-3d.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
