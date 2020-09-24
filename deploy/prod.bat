ionic cordova build android --prod --release --versionCode=4
copy platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk .
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore deploy/signals.jks app-release-unsigned.apk signals
zipalign -v 4 app-release-unsigned.apk Signals.apk
apksigner verify Signals.apk
aapt dump badging Signals.apk