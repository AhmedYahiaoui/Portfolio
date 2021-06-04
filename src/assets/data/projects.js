import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import school from '../images/school.png';
import javafx from '../images/javafx.png';
import usmart from '../images/usmart.PNG';
import eshop from '../images/eshop.PNG';
import conf from '../images/conf.jpg';

import ProjectImg from '../images/projectImg.png';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';


const projects = [







  {
    id: uuidv4(),
    name: 'Yep You',
    desc:
      'Developing full-stack application which help the user keep track of his objects (animal , car ..) using an electronic card connected at LoraWan',
    img: UTrackerImg,
    desc2:
      '#NodeJs , #Apach Kafka , #Rest API , #Socket.io , #React JS , #Flutter , #MongoDB , #FCM ( Cloud firebase messagring )',
      link :'https://github.com/AhmedYahiaoui/YupYou-Back'

  },

  {
    id: uuidv4(),
    name: 'Pyro Aerogen',
    desc:
      'Developing intelligent irrigation systems allows to control the greenhouse from any place and this thanks to our Mobile - Web - Desktop applications.',
    img: GreenCtgImg,
    desc2:
    '#Android Studio , #ASP.NET , #JavaFX , #AWS , #REST FULL API ',
    link :'https://github.com/AhmedYahiaoui/smart-irrigation-Android'

  },


  {
    id: uuidv4(),
    name: 'CupCake',
    desc:
      'Developing and Design a Web , Mobile and Desktop applications entitled " CupCake " to Computerize the sales of products , Forum and Called offer',
    img: CoinTrackerImg,
    desc2:
    '#Symfony 3.x , #CodeNameOne , #JavaFX , #API , #Git',
    link :'https://github.com/AhmedYahiaoui/Pidev-Mobile-CodeNameOne-'

  },


  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'Developing and Design a responsive Web , Mobile application , will help OOREDOO "s custmor to know if them locations are eligible or not',
    img: conf,
    desc2:
    '#Symfony 2.x , #Android Studio, #API , #Rest Full , #SVN',
    link :'#'

  },



  
  {
    id: uuidv4(),
    name: 'Brainy I',
    desc:
      'Developing full-stack E-commerce application.',
    img: eshop,
    desc2:
    '#Symfony4.3 #Rest API #React JS #Flutter #MariaDB #FCM',
    link :'https://github.com/AhmedYahiaoui/E-shop-projcet-Symfony4.3'

  },

  {
    id: uuidv4(),
    name: 'Brainy II',
    desc:
      'Developing full-stack E-commerce application.',
    img: eshop,
    desc2:
    '#SpringBoot #Rest API #React JS #Flutter #MariaDB #FCM',
    link :'https://github.com/AhmedYahiaoui/E-shop-projcet-SpringBoot'

  },


  
  {
    id: uuidv4(),
    name: 'Vape market (In progress .. )',
    desc:
      'Developing full-stack E-commerce application an online vape shop, allow people to create their own store and sell their products on our website .',
    img: CavinImg,
    desc2:
    '#.NET_CORE #RabbitMQ #Rest API #Socket.io #React_JS #SqlServer #FCM',
    link :''

  },

  
  {
    id: uuidv4(),
    name: 'JavaFX-UI',
    desc:
      'Developing some JavaFX interfaces , and they are open source and free to use :D ',
    img: javafx,
    desc2:
    '#JavaFX , #SceneBuilder , #Fxml',
    link :'https://github.com/AhmedYahiaoui/JavaFX-UI'

  },

  {
    id: uuidv4(),
    name: 'Freelance JavaFX-UI',
    desc:
      'Developing smart school JavaFX interfaces ',
    img: school,
    desc2:
    '#JavaFX , #SceneBuilder , #Fxml',
    link :'#'
  },


  {
    id: uuidv4(),
    name: 'U Smart',
    desc:
      'android application to control and manipulate your home remotely through web services you find the UI with a bit of code.',
    img: usmart,
    desc2:
    '#Android , #Kotlin , #PHP , #MySQL , #REST_API',
    link :'https://github.com/AhmedYahiaoui/Smart-House-Android'
  },

  
  



];

export default projects;



// {
//   id: uuidv4(),
//   name: 'U Tracker',
//   desc:
//     'An application to track your all data from one place. I developed the website and the mobile app',
//   img: UTrackerImg,
// },
// {
//   id: uuidv4(),
//   name: 'Green CTG',
//   desc:
//     'An app to help people to get an overview of how they can make the city beautiful.',
//   img: GreenCtgImg,
// },
// {
//   id: uuidv4(),
//   name: 'Coin Tracker',
//   desc:
//     'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
//   img: CoinTrackerImg,
// },
// {
//   id: uuidv4(),
//   name: "Cavin's Portfolio",
//   desc:
//     'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
//   img: CavinImg,
// },
// {
//   id: uuidv4(),
//   name: 'Tracking Soft',
//   desc:
//     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
//   img: ProjectImg,
// },
