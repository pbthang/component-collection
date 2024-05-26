const astroConfig = {"base":"/","root":"file:///Users/pbthang/pbthang-components/","srcDir":"file:///Users/pbthang/pbthang-components/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec.config_Df1Ki6Nr.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///Users/pbthang/pbthang-components/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
