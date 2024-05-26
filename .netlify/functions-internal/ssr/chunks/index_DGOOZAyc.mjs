const id = "index.mdx";
						const collection = "docs";
						const slug = "index";
						const body = "\nimport { Card, CardGrid, LinkCard } from \"@astrojs/starlight/components\";\n\n## Next steps\n\n<CardGrid>\n  <LinkCard\n    title=\"Components\"\n    href=\"/components/\"\n    description=\"My collection of reuseable components using HTML, CSS, React, TailwindCSS, etc.\"\n  />\n  {/* <LinkCard title=\"Components\" href=\"/guides/components/\" /> */}\n</CardGrid>\n";
						const data = {title:"pbthang's collection",description:"My collection of reuseable code snippets and other useful stuff",editUrl:true,head:[],template:"splash",hero:{tagline:"where I keep my reusable code snippets and other useful stuff",image:{alt:"",file:
						new Proxy({"src":"/_astro/houston.CZZyCf7p.webp","width":800,"height":800,"format":"webp","fsPath":"/Users/pbthang/pbthang-components/src/assets/houston.webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pbthang/pbthang-components/src/assets/houston.webp";
							}
							
							return target[name];
						}
					})
					},actions:[{text:"My Portfolio",link:"https://pbthang.netlify.app/",variant:"primary",icon:{type:"icon",name:"external"}}]},sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/pbthang/pbthang-components/src/content/docs/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
