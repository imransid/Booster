# Booster

Our Booster android and ios react native project

=>>> #sudo react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

=>>> keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# ERROR React Native Error: ENOSPC: System limit for number of file watchers reached

# Solution

-> echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

-> cat /proc/sys/fs/inotify/max_user_watches

-> fs.inotify.max_user_watches=524288
