# APP FILE EXPLORER IONIC/CAPACITOR

# DEPENDENCES

Install Capacitor + ionic build --prod

# CAPACITOR PLUGINS
npm install @capacitor/filesystem
npm install capacitor-blob-writer >>> https://github.com/diachedelic/capacitor-blob-writer

# ADD CORDOVA PLUGIN TO PREVIEW FILES
npm install @ionic-native/core
npm install cordova-plugin-preview-any-file
npm install @ionic-native/preview-any-file

# ADD PLATAFORMS
ionic capacitor add ios
ionic capacitor add android

# ADD TO PATH android/app/src/main/res/xml/network_security_config.xml

<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="false">localhost</domain>
        <domain includeSubdomains="true">168.90.206.246</domain>
    </domain-config>
</network-security-config>

# CREATE REFERENCE AndroidManifest.xml

<application
    android:networkSecurityConfig="@xml/network_security_config"
    android:requestLegacyExternalStorage="true"
    ...


