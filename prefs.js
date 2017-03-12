// This is the Debian specific preferences file for Iceweasel
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/iceweasel/pref directory, override any preference that is
// present in /usr/lib/iceweasel/defaults/preferences directory.
// While your changes will be kept on upgrade if you modify files in
// /etc/iceweasel/pref, please note that they won't be kept if you
// do make your changes in /usr/lib/iceweasel/defaults/preferences.
//
// Note that lockPref is allowed in these preferences files if you
// don't want users to be able to override some preferences.

pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);
pref("extensions.autoDisableScopes", 0);
pref("gfx.font_rendering.opentype_svg.enabled", true);
pref("gfx.font_rendering.wordcache.charlimit", true);
pref("gfx.font_rendering.wordcache.maxentries", 1000);
pref("gfx.font_rendering.directwrite.enabled", true);
pref("network.dns.disablePrefetchFromHTTPS", false);
pref("privacy.trackingprotection.enabled", true);
pref("geo.enabled", false);
pref("network.proxy.socks_remote_dns", false);
pref("datareporting.healthreport.service.firstRun", false);
pref("datareporting.healthreport.service.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("toolkit.telemetry.enabled", false);
pref("loop.enabled", false);
pref("browser.pocket.enabled", false);
pref("browser.pocket.api", "");
pref("browser.pocket.site", "");
pref("browser.pocket.useLocaleList", false);
pref("browser.search.suggest.enabled", false);
pref("browser.sessionstore.interval", 20000);
pref("media.peerconnection.enabled", false);
pref("plugin.state.flash", 0);
pref("plugin.state.java", 0);
pref("browser.privatebrowsing.autostart", true);
pref("privacy.cpd.offlineApps", true);
pref("privacy.cpd.passwords", true);
pref("privacy.cpd.siteSettings", true);
pref("privacy.clearOnShutdown.sessions", true);
pref("privacy.clearOnShutdown.history", true);
pref("privacy.clearOnShutdown.formdata", true);
pref("privacy.clearOnShutdown.passwords", true);
pref("signon.rememberSignons", false);
pref("signon.autofillForms", false);
pref("privacy.donottrackheader.enabled", true);
pref("PDFjs.disable", true);
pref("services.sync.prefs.sync.browser.search.update", false);
pref("webgl.force-enabled", false);
pref("webgl.force_osmesa", false);
pref("webgl.prefer-native-gl", false);
pref("webgl.disabled", true);
pref("media.peerconnection.use_document_iceservers", false);
pref("network.http.pipelining.ssl",true);
pref("network.http.proxy.pipelining",true);
pref("privacy.donottrackheader.value", 1);
user_pref("browser.startup.homepage", "https://duckduckgo.com/");
user_pref("browser.search.hiddenOneOffs","Yahoo,Bing,Diccionario RAE,eBay,Twitter,Wikipedia (es)");
user_pref("browser.search.defaultenginename","DuckDuckGo");
user_pref("browser.search.selectedEngine","DuckDuckGo");
user_pref("services.sync.prefs.sync.browser.search.update", true);
pref("network.http.referer.trimmingPolicy", 1);
pref("network.http.referer.XOriginPolicy", 1);
pref("network.http.sendRefererHeader", 2);
pref("loop.enabled", false);
pref("browser.search.hiddenOneOffs","Yahoo,Bing,Diccionario RAE,eBay,Twitter");
pref("browser.urlbar.trimURLs", false);
pref("browser.urlbar.autofill", false);
pref("browser.search.openintab", true);
pref("geo.wifi.uri", "");
pref("browser.tabs.animate", false);
pref("browser.preferences.animateFadeIn", false);
pref("reader.parse-on-load.enabled", false);
pref("reader.parse-on-load.force-enabled", false);
pref("browser.aboutHomeSnippets.updateUrl", "")
pref("breakpad.reportURL", "");
pref("extensions.pocket.api", "");
pref("extensions.pocket.site", "");
pref("toolkit.telemetry.server", "");
pref("social.shareDirectory", "");
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.fullscreen.animate", false);
pref("extensions.pocket.enabled", false);
pref("social.remoteinstall.enabled", false);
pref("social.toastnotifications.enabled", false);
pref("network.http.sendSecureXSiteReferrer", false);
pref("browser.send_pings.require_same_host", false);
pref("pdfjs.disabled", true);
pref("browser.send_pings", false);
pref("browser.cache.offline.enable", false);
pref("browser.cache.memory.enable", false);
pref("beacon.enabled", false);
pref("geo.wifi.logging.enabled", false);
pref("browser.search.geoip.url", "");
pref("browser.search.geoSpecificDefaults", false);
pref("browser.search.geoSpecificDefaults.url", "");
pref("browser.newtabpage.directory.ping", "");
pref("browser.newtabpage.directory.source", "");
pref("browser.search.countryCode", "");
pref("browser.search.region", "");
pref("intl.accept_languages;en-US", "en;q=0.5");
pref("browser.newtab.url", "about:blank");
pref("dom.event.clipboardevents.enabled", false);
pref("services.sync.enabled", false);
pref("services.sync.sendVersionInf", false);
pref("social.remote-install.enabled", false);
pref("social.toast-notifications.enabled", false);
pref("social.directories", "");
pref("social.whitelist", "");
pref("network.proxy.socks_remote_dns", true);
pref("camera.control.face_detection.enabled", false);
pref("device.sensors.enabled", false);
pref("devtools.remote.wifi.scan", false);
pref("browser.search.suggest.enabled", false);
pref("browser.formfill.enable", false);
pref("security.OCSP.enabled", "1");
pref("security.OCSP.require", "true");
pref("services.sync.prefs.sync.security.OCSP.require", "true");
