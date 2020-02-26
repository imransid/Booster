import {takeEvery, select, call, put} from 'redux-saga/effects';
import {AsyncStorage, ToastAndroid} from 'react-native';
import actionType from '../constant/constant';
import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid} from 'react-native';

async function DownLoad(URL_Image) {
  try {
    // const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)

    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     return DownLoad_Image(URL_Image)
    // }else{
    // console.log('Stroge permission denied');
    // }

    const fs = RNFetchBlob.fs;
    let imagePath = null;
    let baseDataIs;
    await RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', URL_Image)
      // the image is now dowloaded to device's storage
      .then(resp => {
        // the image path you can use it directly with Image component
        imagePath = resp.path();
        //    console.log('Stroge perm');
        return resp.readFile('base64');
      })
      .then(base64Data => {
        // here's base64 encoded image
        baseDataIs = base64Data;
        // remove the file from storage
        return fs.unlink(imagePath);
      });

    return baseDataIs;
  } catch {
    console.warn(err);
  }
}

const DownLoad_Image = URL_Image => {
  var date = new Date();
  var url = URL_Image;
  //var ext       = extention(url);
  var ext = '.' + 'jpeg'; //ext[0];
  const {config, fs} = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: false,
      path:
        PictureDir +
        '/image_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        ext,
      description: 'Image',
    },
  };

  config(options)
    .fetch('GET', url)
    .then(res => {});

  let datareturn = options.addAndroidDownloads.path;

  return datareturn;
};

const extention = filename => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

async function RetrieveSetting(email, status, name, picURL) {
  try {
    const data = await AsyncStorage.getItem('setting@Data');
    let result;
    if (data !== null) {
      let data_load = JSON.parse(data);

      status == true
        ? (result = {
            sync: data_load.sync,
            eventnotification: data_load.eventnotification,
            alert: data_load.alert,
            email: email,
            name: name,
            picURL: picURL,
          })
        : (result = {
            sync: data_load.sync,
            eventnotification: data_load.eventnotification,
            alert: data_load.alert,
            email: data_load.email,
            name: data_load.name,
            picURL: data_load.picURL,
          });
    } else {
      status == true
        ? (result = {
            sync: false,
            eventnotification: true,
            alert: true,
            email: email,
            name: name,
            picURL: picURL,
          })
        : (result = data_load);
    }
    if (status == true) {
      AsyncStorage.setItem('setting@Data', JSON.stringify(result)).then(
        () => {},
      );
    }

    return result;
  } catch (error) {
    console.log('async retrive prlm', error);
  }
}

async function UpdateLoginAsync() {
  try {
    AsyncStorage.multiSet([
      ['LoginStatus', '1'],
      ['Token', '0'],
      ['RefreshToken', '0'],
    ]).then(values => {
      // console.log('Then: ',values);
    });
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
}

export const all_Setting = function*(action) {
  var retive_data;

  console.log('action', action);
  if (action.status == true) {
    var picURL = yield call(DownLoad, action.pic);
    retive_data = yield call(
      RetrieveSetting,
      action.email,
      action.status,
      action.name,
      picURL,
    );
    const UpdateAsync = yield call(UpdateLoginAsync);
    yield put({
      type: actionType.LOAD_SETTING,
      sync: retive_data.sync,
      name: retive_data.name,
      eventnotification: retive_data.eventnotification,
      alert: retive_data.alert,
      email: retive_data.email,
      userpic: action.pic,
      logstatus: action.status,
      loadedData: true,
    });
  } else {
    retive_data = yield call(
      RetrieveSetting,
      action.email,
      action.status,
      action.name,
    );
    yield put({
      type: actionType.LOAD_SETTING,
      sync: retive_data.sync,
      name: retive_data.name,
      eventnotification: retive_data.eventnotification,
      alert: retive_data.alert,
      email: retive_data.email,
      userpic: retive_data.picURL,
      logstatus: action.status,
      loadedData: true,
    });
  }
};
