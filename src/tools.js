import android from './assets/icons/android.png';
import aws from './assets/icons/aws.png';
import firebase from './assets/icons/firebase.png';
import flutter from './assets/icons/flutter.png';
import git from './assets/icons/git.png';
import javafx from './assets/icons/javafx.png';
import mongodb from './assets/icons/mongodb.png';
import net from './assets/icons/net.png';
import nodejs from './assets/icons/nodejs.png';
import reactjs from './assets/icons/reactjs.png';
import prismic from './assets/icons/prismic.png';
import socket from './assets/icons/socket.png';
import symfony from './assets/icons/symfony.png';
import distribution from './assets/icons/distribution.png';
import agora from './assets/icons/agora.png';
import openstreetmap from './assets/icons/openstreetmap.png';
import qrcode from './assets/icons/qrcode.png';


 export function iconName(name) {
    switch (name) {
  
      case 'Android':
        return android;

      case 'AWS':
        return aws;

      case 'Firebase':
        return firebase;
      
      case 'Flutter':
        return flutter;

      case 'github'||'GIT'|| 'GITHUB'|| 'Github':
        return git;      

      case 'Java FX' || 'JavaFX':
        return javafx;

      case  'Mongo DB' || 'MongoDB'|| 'MONGO DB':
        return mongodb;

      case 'net'|| '. NET'|| '.NET CORE':
        return net;

      case 'Node JS'|| 'NODEJS'|| 'NodeJS':
        return nodejs;
              
      case 'React JS'|| 'REACTJS'|| 'ReactJS':
        return reactjs;

      case 'prismic'||'PRISMIC':
        return prismic;

      case 'socket io'||'socket'||'socketIO'||'SOCKET IO'||'Socket IO':
        return socket;

      case 'symfony'||'SYMFONY':
        return symfony;

      case 'distribution' ||'DISCRIBUTION' ||'app distribution' ||'APP DISCRIBUTION':
        return distribution;

      case 'Agora' ||'agora' ||'agora io' ||'AGORA IO' ||'Agora IO':
        return agora;

      case 'Open street map' ||'OpenStreetMap' ||'Open Street Map':
        return openstreetmap;

      case 'QRcode' ||'QR code' ||'qr code':
        return qrcode;

      default: return 'null';
    }
  }