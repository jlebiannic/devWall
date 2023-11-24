const datas = [
  {
    id: "fsfsd",
    media: "video",
    title: "NO-CODE : Fausse bonne idée ?",
    lang: "fr",
    image: "",
    url: "https://www.youtube.com/watch?v=h2VqCnmni8M",
    description: "",
    rating: 3,
    isTop: false,
    isValid: true,
    date: "2021-04-09 10:10:00",
  },
  {
    id: "ogop123",
    media: "post",
    lang: "fr",
    title: "Sécuriser une API avec Node.js et JWT",
    image: "https://miro.medium.com/max/1400/0*5hShFb_fod5mdxvH",
    url:
      "https://medium.com/@sbesnier1901/s%C3%A9curiser-une-api-avec-node-js-et-jwt-15e14d9df109",
    description:
      "Création d’un système simple d’authentification et d’un middleware pour protéger les routes de notre API.",
    rating: 0,
    isTop: false,
    isValid: true,
    date: "2021-02-01 09:00:00",
  },
  {
    id: "fdsiiis",
    media: "post",
    title: "6 new TypeScript features for writing clean code",
    lang: "en",
    image: "https://miro.medium.com/max/1400/1*0lAYuIRYksZLtzbjpEs9DQ.png",
    url:
      "https://itnext.io/6-new-typescript-features-for-writing-clean-code-ea7810cf5019",
    description:
      "Let’s cover some of the newer TypeScript features and advancements. These are the features I find most helpful in my day-to-day work for writing precise and clean code.",
    rating: 0,
    isTop: false,
    isValid: true,
    date: "2021-05-21 11:12:00",
  },
  {
    id: "oldppdpd",
    media: "book",
    lang: "fr",
    title: "Coder proprement",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/517gj2lIN8L._SX218_BO1,204,203,200_QL40_ML2_.jpg",
    url:
      "https://www.eyrolles.com/Informatique/Livre/coder-proprement-9782326002272/",
    description:
      "Si un code sale peut fonctionner, il peut également remettre en question la pérennité d'une entreprise de développement de logiciels. Chaque année, du temps et des ressources sont gaspillés à cause d'un code mal écrit. Cet ouvrage vous apprendra les meilleures pratiques de nettoyage du code à la volée et les valeurs d'un artisan du logiciel qui feront de vous un meilleur programmeur. Véritable manuel du savoir-faire en développement agile, cet ouvrage est un outil indispensable à tout développeur, ingénieur logiciel, chef de projet, responsable d'équipe ou analyste des systèmes dont l'objectif est de produire un meilleur code.",
    rating: 5,
    isTop: false,
    isValid: true,
    date: "2021-007-14 15:15:00",
  },
  {
    id: "eifsd",
    media: "book",
    lang: "fr",
    title: "Architecture logicielle propre",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41hEXL4mIcL._SX408_BO1,204,203,200_.jpg",
    url: "",
    description: "",
    rating: 5,
    isTop: false,
    isValid: true,
    date: "2021-03-09 08:00:00",
  },
  {
    id: "chuiri",
    media: "post",
    lang: "en",
    title: "You Should ThrowYour Unit Tests Away",
    image: "",
    url:
      "https://medium.com/ngconf/you-should-throw-away-your-unit-tests-717c6884a77b",
    description:
      "I don’t mean that you shouldn’t write unit tests. You definitely should. But you shouldn’t feel bad deleting unit tests when you have some that are no longer relevant. This usually happens due to refactoring, but also happens due to requirements changes. In these cases, your first impulse should be to torch your tests. If this feels wrong to you, then ask yourself why?",
    rating: 4,
    isTop: true,
    isValid: true,
    date: "2021-08-21 13:40:00",
  },
  {
    id: "voepep124",
    media: "post",
    lang: "en",
    title: "Why I Switched Away From Google Firestore",
    image: "https://miro.medium.com/max/1250/1*sV3S0kMNH1H7voY-TEfMqg.png",
    url:
      "https://medium.com/swlh/why-i-switched-away-from-google-firestore-and-will-never-go-back-e34cafb733b",
    description:
      "Google Firestore is Google’s propriety NoSQL Document-Based Database. Paired with the rest of the Firebase suite such as Cloud Functions, Firebase Auth and Firebase Storage this can look like a pretty attractive tech stack for startups or solo-developers looking to get an app up and running quickly.",
    rating: 3,
    isTop: false,
    isValid: true,
    date: "2021-07-08 17:10:00",
  },
  {
    id: "fosp54",
    media: "post",
    lang: "en",
    title:
      "Functional Programming in JavaScript: Introduction and Practical Examples",
    image: "https://miro.medium.com/max/1400/1*Scj1YOBc2cxDfANrU5yQXA.png",
    url:
      "https://betterprogramming.pub/functional-programming-in-javascript-introduction-and-practical-examples-d268e44395b2",
    description:
      "Functional programming (FP) is a style of coding that’s been growing in popularity. There’s a lot of content out there that explains what functional programming is, but there’s much less about how to apply it. For me, knowing how to apply it is far more valuable: You can only get a real understanding of and feel for a programming style when you put it into practice. So that’s what this piece intends to be — a practical introduction to the functional programming style in JavaScript.",
    rating: 3,
    isTop: false,
    isValid: true,
    date: "2021-01-09 08:30:00",
  },
  {
    id: "xcggt",
    media: "video",
    lang: "en",
    title: "Vue.js The Documentary",
    image: "",
    url: "https://www.youtube.com/watch?v=OrxmtDw4pVI",
    description:
      "by honeypot.io | What began as a side project of a Google developer now shares the JS leaderboard with #React and #Angular... With the help of Sarah Drasner, Taylor Otwell, Thorsten Lünborg and many others from the Vue.js community, Evan You tells the story of how he fought against the odds to bring #Vuejs to life.",
    rating: 4,
    isTop: false,
    isValid: true,
    date: "2021-03-13 17:30:00",
  },
  {
    date: "2021-08-21 12:04:28",
    title: "How to make HTTP requests with Axios",
    lang: "en",
    media: "post",
    url:
      "https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/",
    rating: 4,
    isTop: false,
    isValid: true,
    image:
      "https://www.carepredict.com/wp-content/uploads/2020/06/Axios-logo.png",
    id: "UFss8k4",
    description:
      "In this tutorial, we’ll demonstrate how to make HTTP requests using Axios with clear examples, including how to make an Axios POST request with axios.post(), how to send multiple requests simultaneously with axios.all(), and much more.",
  },
  {
    date: "2021-09-31 14:08:01",
    title: "Test Driven Development: By Example",
    lang: "en",
    media: "book",
    url:
      "https://www.amazon.fr/dp/B095SQ9WP4/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
    rating: 4,
    isTop: false,
    isValid: true,
    image: "https://www.amazon.fr/images/I/41X0SxZK0eS.jpg",
    id: "n095fBN",
    description:
      "Quite simply, test-driven development is meant to eliminate fear in application development. While some fear is healthy (often viewed as a conscience that tells programmers to 'be careful!'), the author believes that byproducts of fear include tentative, grumpy, and uncommunicative programmers who are unable to absorb constructive criticism. When programming teams buy into TDD, they immediately see positive results. They eliminate the fear involved in their jobs, and are better equipped to tackle the difficult challenges that face them. TDD eliminates tentative traits, it teaches programmers to communicate, and it encourages team members to seek out criticism However, even the author admits that grumpiness must be worked out individually! In short, the premise behind TDD is that code should be continually tested and refactored. Kent Beck teaches programmers by example, so they can painlessly and dramatically increase the quality of their work.",
  },
  {
    date: "2021-09-03 13:05:35",
    title: "Vuex with Typescript",
    lang: "en",
    media: "video",
    url: "https://www.youtube.com/watch?v=wRK1EZpicD0",
    rating: 5,
    isTop: true,
    isValid: true,
    image: "",
    id: "l9dh7j_",
    description:
      "In this Vuejs tutorial I demonstrate how to create a Vuex store with TypeScript and also how to separate your store into modules instead of a big single root state. This is a link the the original blog post from where I learned this stuff and got inspired to go this way of doing things. You can also take a look at the vue documentation it can be a lot pf help as well.",
  },
  {
    date: "2021-09-03 13:29:50",
    title: "Dockerizing a Node.js web app",
    lang: "en",
    media: "post",
    url:
      "https://grigorkh.medium.com/dockerizing-a-node-js-web-app-8cb0549dabe1",
    rating: 4,
    isTop: true,
    isValid: true,
    image: "https://miro.medium.com/max/1400/1*gX-N6cHK9p715OUKmNiX5g.jpeg",
    id: "3FaYY-Y",
    description:
      "The goal of this example is to show you how to get a Node.js application into a Docker container. The guide is intended for development, and not for a production deployment. The guide also assumes you have a working Docker installation and a basic understanding of how a Node.js application is structured.",
  },
  {
    date: "2021-09-03 13:33:32",
    title: "Refactoring Comment améliorer le code existant",
    lang: "fr",
    media: "book",
    url:
      "https://www.dunod.com/sciences-techniques/refactoring-comment-ameliorer-code-existant",
    rating: 3,
    isTop: false,
    isValid: true,
    image:
      "https://www.dunod.com/sites/default/files/styles/principal_desktop/public/thumbnails/image/9782100801169-001-X.jpeg",
    id: "dv6tYa8",
    description:
      "Le refactoring, ou ré-ingénierie du code, est l'opération consistant à retravailler le code source d'un programme de façon à en améliorer la lisibilité et par voie de conséquence la maintenance. Il ne s'agit pas de le compléter ou d'en corriger des bugs, mais d'en améliorer la structure sans en altérer le fonctionnement.",
  },
];

export default datas;