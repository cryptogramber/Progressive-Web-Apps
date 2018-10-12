import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '助数詞';
  whichObject: number;
  objectName: string;
  counterKana: string;
  counterKanaAlt: string;
  counterKanji: string;
  numObjects: number;
  counterEntry: string;
  iconList: object;
  inputClass: string;
  counterScore: number;
  counterStreak: number;
  firstTry: boolean = true;
  inputType: boolean = true;
  currentCounter: string;
  currentCounterAlt: string;

  constructor() {
    this.newCounter();
    this.counterScore = 0;
    this.counterStreak = 0;
  }

  newCounter() {
    this.counterEntry = '';
    this.whichObject = Math.floor((Math.random() * (this.availCounters.length)));
    this.numObjects = Math.floor((Math.random() * 10) + 1);
    if (this.numObjects === 1) {
      this.objectName = this.counterObjects[this.whichObject]["nameSingular"];
    } else {
      this.objectName = this.counterObjects[this.whichObject]["namePlural"];
    }
    this.iconList = Array(this.numObjects).fill(this.counterObjects[this.whichObject]["iconName"]);
    this.counterKana = this.countersKana[this.counterObjects[this.whichObject]["counterID"]]["kana"][this.numObjects];
    this.counterKanaAlt = this.countersKana[this.counterObjects[this.whichObject]["counterID"]]["altkana"][this.numObjects];
    this.counterKanji = this.countersKana[this.counterObjects[this.whichObject]["counterID"]]["kanji"][this.numObjects];
  }

  checkEntry() {
    if (this.inputType === true) {
      this.currentCounter = this.counterKana;
      this.currentCounterAlt = this.counterKanaAlt;
    } else {
      this.currentCounter = this.counterKanji;
      this.currentCounterAlt = "noalt";
    }
    if ((this.counterEntry === this.currentCounter) || (this.counterEntry === this.currentCounterAlt) ){
      this.newCounter();
      this.toggleGreen();
      if (this.firstTry === false) {
        this.firstTry = true;
      } else {
        this.counterStreak++;
        this.counterScore++;
      }
      // document.getElementById("counterEntry").style.background = "green";
      document.getElementById("counterEntry").style.color = "black";
      document.getElementById("counterEntry").style.boxShadow = "none";
    } else {
      this.firstTry = false;
      this.counterStreak = 0;
      this.counterEntry = this.currentCounter;
      this.inputClass = "kbox1_r";
      document.getElementById("counterEntry").style.color = "rgb(217, 36, 37)";
      document.getElementById("counterEntry").style.boxShadow = "0 2px 6px 0 hsla(360, 72%, 50%, 1)";
    }
    document.getElementById("counterScore").innerText = String(this.counterScore);
    document.getElementById("counterStreak").innerText = String(this.counterStreak);
  }

  toggleGreen(){
    if (this.inputClass=="kbox1_g"){
        this.inputClass='kbox1_g_flip';
    } else {
        this.inputClass='kbox1_g';
    }
  }

  toggleInput() {
    if (this.inputType === true) {
      this.inputType = false;
      document.getElementById("inputType").innerText = "Use Kana";
    } else {
      this.inputType = true;
      document.getElementById("inputType").innerText = "Use Kanji";
    }
  }

  toggleHelp() {
    let hintsTips = document.getElementById("hintsTips");
    if (hintsTips.style.display === "none") {
      hintsTips.style.display = "block";
    } else {
      hintsTips.style.display = "none";
    }
  }

  countersKana = [
    {   // 0, do, degrees of temperature or angle
      "kana": {
        1: "いちど",
        2: "にど",
        3: "さんど",
        4: "よんど",
        5: "ごど",
        6: "ろくど",
        7: "ななど",
        8: "はちど",
        9: "きゅうど",
        10: "じゅうど"
      },
      "altkana": {
        1: "いちど",
        2: "にど",
        3: "さんど",
        4: "よんど",
        5: "ごど",
        6: "ろくど",
        7: "ななど",
        8: "はちど",
        9: "きゅうど",
        10: "じゅうど"
      },
      "kanji": {
        1: "一度",
        2: "二度",
        3: "三度",
        4: "四度",
        5: "五度",
        6: "六度",
        7: "七度",
        8: "八度",
        9: "九度",
        10: "十度"
      }
    },
    {   // 1, hai, cups and glasses of drink
      "kana": {
        1: "いっぱい",
        2: "にはい",
        3: "さんばい",
        4: "よんはい",
        5: "ごはい",
        6: "ろっぱい",
        7: "ななはい",
        8: "はちはい",
        9: "きゅうはい",
        10: "じゅっぱい" 
      },
      "altkana": {
        1: "いっぱい",
        2: "にはい",
        3: "さんばい",
        4: "よんぱい",
        5: "ごはい",
        6: "ろっぱい",
        7: "ななはい",
        8: "はっぱい",
        9: "きゅうはい",
        10: "じっぱい" 
      },
      "kanji": {
        1: "一杯",
        2: "二杯",
        3: "三杯",
        4: "四杯",
        5: "五杯",
        6: "六杯",
        7: "七杯",
        8: "八杯",
        9: "九杯",
        10: "十杯"
      }
    },
    {   // 2, tsu, general counter
      "kana": {
        1: "ひとつ",
        2: "ふたつ",
        3: "みっつ",
        4: "よっつ",
        5: "いつつ",
        6: "むっつ",
        7: "ななつ",
        8: "やっつ",
        9: "ここのつ",
        10: "とお"
      },
      "altkana": {
        1: "ひとつ",
        2: "ふたつ",
        3: "みっつ",
        4: "よっつ",
        5: "いつつ",
        6: "むっつ",
        7: "ななつ",
        8: "やっつ",
        9: "ここのつ",
        10: "とお"
      },
      "kanji": {
        1: "一つ",
        2: "二つ",
        3: "三つ",
        4: "四つ",
        5: "五つ",
        6: "六つ",
        7: "七つ",
        8: "八つ",
        9: "九つ",
        10: "十"
      }
    },
    {   // 3, nin, people
      "kana": {
        1: "ひとり",
        2: "ふたり",
        3: "さんにん",
        4: "よにん",
        5: "ごにん",
        6: "ろくにん",
        7: "しちにん",
        8: "はちにん",
        9: "きゅうにん",
        10: "じゅうにん"
      },
      "altkana": {
        1: "ひとり",
        2: "ふたり",
        3: "さんにん",
        4: "よにん",
        5: "ごにん",
        6: "ろくにん",
        7: "しちにん",
        8: "はちにん",
        9: "きゅうにん",
        10: "じゅうにん"
      },
      "kanji": {
        1: "一人",
        2: "二人",
        3: "三人",
        4: "四人",
        5: "五人",
        6: "六人",
        7: "七人",
        8: "八人",
        9: "九人",
        10: "十人"
      }
    },
    {   // 4, ko, small dense objects
      "kana": {
        1: "いっこ",
        2: "にこ",
        3: "さんこ",
        4: "よんこ",
        5: "ごこ",
        6: "ろっこ",
        7: "ななこ",
        8: "はちこ",
        9: "きゅうこ",
        10: "じゅっこ"
      },
      "altkana": {
        1: "いっこ",
        2: "にこ",
        3: "さんこ",
        4: "よんこ",
        5: "ごこ",
        6: "ろっこ",
        7: "しちこ",
        8: "はっこ",
        9: "きゅうこ",
        10: "じっこ"
      },
      "kanji": {
        1: "一個",
        2: "二個",
        3: "三個",
        4: "四個",
        5: "五個",
        6: "六個",
        7: "七個",
        8: "八個",
        9: "九個",
        10: "十個"
      }
    },
    {   // 5, hon, long cylindrical objects
      "kana": {
        1: "いっぽん",
        2: "にほん",
        3: "さんぼん",
        4: "よんほん",
        5: "ごほん",
        6: "ろっぽん",
        7: "ななほん",
        8: "はちほん",
        9: "きゅうほん",
        10: "じゅっぽん"
      },
      "altkana": {
        1: "いっぽん",
        2: "にほん",
        3: "さんぼん",
        4: "よんほん",
        5: "ごほん",
        6: "ろっぽん",
        7: "しちほん",
        8: "はっぽん",
        9: "きゅうほん",
        10: "じっぽん"
      },
      "kanji": {
        1: "一本",
        2: "二本",
        3: "三本",
        4: "四本",
        5: "五本",
        6: "六本",
        7: "七本",
        8: "八本",
        9: "九本",
        10: "十本"
      }
    },
    {   // 6, mai, flat things
      "kana": {
        1: "いちまい",
        2: "にまい",
        3: "さんまい",
        4: "よんまい",
        5: "ごまい",
        6: "ろくまい",
        7: "ななまい",
        8: "はちまい",
        9: "きゅうまい",
        10: "じゅうまい"
      },
      "altkana": {
        1: "いちまい",
        2: "にまい",
        3: "さんまい",
        4: "よんまい",
        5: "ごまい",
        6: "ろくまい",
        7: "しちまい",
        8: "はちまい",
        9: "きゅうまい",
        10: "じゅうまい"
      },
      "kanji": {
        1: "一枚",
        2: "二枚",
        3: "三枚",
        4: "四枚",
        5: "五枚",
        6: "六枚",
        7: "七枚",
        8: "八枚",
        9: "九枚",
        10: "十枚"
      }
    },
    {   // 7, satsu, bound objects
      "kana": {
        1: "いっさつ",
        2: "にさつ",
        3: "さんさつ",
        4: "よんさつ",
        5: "ごさつ",
        6: "ろくさつ",
        7: "ななさつ",
        8: "はっさつ",
        9: "きゅうさつ",
        10: "じゅっさつ"
      },
      "altkana": {
        1: "いっさつ",
        2: "にさつ",
        3: "さんさつ",
        4: "よんさつ",
        5: "ごさつ",
        6: "ろくさつ",
        7: "しちさつ",
        8: "はっさつ",
        9: "きゅうさつ",
        10: "じっさつ"
      },
      "kanji": {
        1: "一冊",
        2: "二冊",
        3: "三冊",
        4: "四冊",
        5: "五冊",
        6: "六冊",
        7: "七冊",
        8: "八冊",
        9: "九冊",
        10: "十冊"
      }
    },
    {   // 8, dai, machines or surfaces
      "kana": {
        1: "いちだい",
        2: "にだい",
        3: "さんだい",
        4: "よんだい",
        5: "ごだい",
        6: "ろくだい",
        7: "ななだい",
        8: "はちだい",
        9: "きゅうだい",
        10: "じゅうだい"
      },
      "altkana": {
        1: "いちだい",
        2: "にだい",
        3: "さんだい",
        4: "よんだい",
        5: "ごだい",
        6: "ろくだい",
        7: "しちだい",
        8: "はちだい",
        9: "きゅうだい",
        10: "じゅうだい"
      },
      "kanji": {
        1: "一台",
        2: "二台",
        3: "三台",
        4: "四台",
        5: "五台",
        6: "六台",
        7: "七台",
        8: "八台",
        9: "九大",
        10: "十台"
      }
    },
    {   // 9, hiki, small animals and insects
      "kana": {
        1: "いっぴき",
        2: "にひき",
        3: "さんぴき",
        4: "よんひき",
        5: "ごひき",
        6: "ろっぴき",
        7: "ななひき",
        8: "はちひき",
        9: "きゅうひき",
        10: "じゅっぴき"
      },
      "altkana": {
        1: "いっぴき",
        2: "にひき",
        3: "さんぴき",
        4: "よんひき",
        5: "ごひき",
        6: "ろっぴき",
        7: "しちひき",
        8: "はっぴき",
        9: "きゅうひき",
        10: "じっぴき"
      },
      "kanji": {
        1: "一匹",
        2: "二匹",
        3: "三匹",
        4: "四匹",
        5: "五匹",
        6: "六匹",
        7: "七匹",
        8: "八匹",
        9: "九匹",
        10: "十匹"
      }
    },
    {   // 10, wa, birds and bunnies
      "kana": {
        1: "いちわ",
        2: "にわ",
        3: "さんわ",
        4: "よんわ",
        5: "ごわ",
        6: "ろくわ",
        7: "ななわ",
        8: "はちわ",
        9: "きゅうわ",
        10: "じゅうわ"
      },
      "altkana": {
        1: "いちわ",
        2: "にわ",
        3: "さんわ",
        4: "よんわ",
        5: "ごわ",
        6: "ろくわ",
        7: "しちわ",
        8: "はちわ",
        9: "きゅうわ",
        10: "じゅうわ"
      },
      "kanji": {
        1: "一羽",
        2: "二羽",
        3: "三羽",
        4: "四羽",
        5: "五羽",
        6: "六羽",
        7: "七羽",
        8: "八羽",
        9: "九羽",
        10: "十羽"
      }
    },
    {   // 11, hako, boxes
      "kana": {
        1: "ひとはこ",
        2: "ふたはこ",
        3: "さんぱこ",
        4: "よはこ",
        5: "ごはこ",
        6: "ろっぱこ",
        7: "ななはこ",
        8: "はっぱこ",
        9: "きゅうはこ",
        10: "じゅっぱこ"
      },
      "altkana": {
        1: "ひとはこ",
        2: "ふたはこ",
        3: "さんばこ",
        4: "よんはこ",
        5: "ごはこ",
        6: "ろっぱこ",
        7: "しちはこ",
        8: "はちはこ",
        9: "きゅうはこ",
        10: "じっぱこ"
      },
      "kanji": {
        1: "一箱",
        2: "二箱",
        3: "三箱",
        4: "四箱",
        5: "五箱",
        6: "六箱",
        7: "七箱",
        8: "八箱",
        9: "九箱",
        10: "十箱"
      }
    },
    {   // 12, kai, times
      "kana": {
        1: "いっかい",
        2: "にかい",
        3: "さんがい",
        4: "よんかい",
        5: "ごかい",
        6: "ろっかい",
        7: "ななかい",
        8: "はちかい",
        9: "きゅうかい",
        10: "じゅっかい"
      },
      "altkana": {
        1: "いっかい",
        2: "にかい",
        3: "さんがい",
        4: "よんかい",
        5: "ごかい",
        6: "ろっかい",
        7: "ななかい",
        8: "はっかい",
        9: "きゅうかい",
        10: "じっかい"
      },
      "kanji": {
        1: "一階",
        2: "二階",
        3: "三階",
        4: "四階",
        5: "五階",
        6: "六階",
        7: "七階",
        8: "八階",
        9: "九階",
        10: "十階"
      }
    },
    {   // 13, mei, customers
      "kana": {
        1: "いちめい",
        2: "にめい",
        3: "さんめい",
        4: "よんめい",
        5: "ごめい",
        6: "ろくめい",
        7: "ななめい",
        8: "はちめい",
        9: "きゅうめい",
        10: "じゅうめい"
      },
      "altkana": {
        1: "いちめい",
        2: "にめい",
        3: "さんめい",
        4: "よんめい",
        5: "ごめい",
        6: "ろくめい",
        7: "しちめい",
        8: "はちめい",
        9: "きゅうめい",
        10: "じゅうめい"
      },
      "kanji": {
        1: "一名",
        2: "二名",
        3: "三名",
        4: "四名",
        5: "五名",
        6: "六名",
        7: "七名",
        8: "八名",
        9: "九名",
        10: "十名"
      }
    },
    {  // 14, jikan, duration
      "kana": {
        1: "いちじかん",
        2: "にじかん",
        3: "さんじかん",
        4: "よじかん",
        5: "ごじかん",
        6: "ろくじかん",
        7: "しちじかん",
        8: "はちじかん",
        9: "くじかん",
        10: "じゅうじかん"
      },
      "altkana": {
        1: "いちじかん",
        2: "にじかん",
        3: "さんじかん",
        4: "よじかん",
        5: "ごじかん",
        6: "ろくじかん",
        7: "しちじかん",
        8: "はちじかん",
        9: "くじかん",
        10: "じゅうじかん"
      },
      "kanji": {
        1: "一時間",
        2: "二時間",
        3: "三時間",
        4: "四時間",
        5: "五時間",
        6: "六時間",
        7: "七時間",
        8: "八時間",
        9: "九時間",
        10: "十時間"
      }
    },
    {   // 15, jou, pills
      "kana": {
        1: "いちじょう",
        2: "にじょう",
        3: "さんじょう",
        4: "よんじょう",
        5: "ごじょう",
        6: "ろくじょう",
        7: "ななじょう",
        8: "はちじょう",
        9: "きゅうじょう",
        10: "じゅうじょう"
      },
      "altkana": {
        1: "いちじょう",
        2: "にじょう",
        3: "さんじょう",
        4: "よんじょう",
        5: "ごじょう",
        6: "ろくじょう",
        7: "しちじょう",
        8: "はちじょう",
        9: "きゅうじょう",
        10: "じゅうじょう"
      },
      "kanji": {
        1: "一錠",
        2: "二錠",
        3: "三錠",
        4: "四錠",
        5: "五錠",
        6: "六錠",
        7: "七錠",
        8: "八錠",
        9: "九錠",
        10: "十錠"
      }
    },
    {   // 16, tou, large animals
      "kana": {
        1: "いっとう",
        2: "にとう",
        3: "さんとう",
        4: "よんとう",
        5: "ごとう",
        6: "ろくとう",
        7: "ななとう",
        8: "はちとう",
        9: "きゅうとう",
        10: "じゅっとう"
      },
      "altkana": {
        1: "いっとう",
        2: "にとう",
        3: "さんとう",
        4: "よんとう",
        5: "ごとう",
        6: "ろくとう",
        7: "しちとう",
        8: "はっとう",
        9: "きゅうとう",
        10: "じっとう"
      },
      "kanji": {
        1: "一頭",
        2: "二頭",
        3: "三頭",
        4: "四頭",
        5: "五頭",
        6: "六頭",
        7: "七頭",
        8: "八頭",
        9: "九頭",
        10: "十頭"
      }
    },
    {   // 17, kire, pieces of things
      "kana": {
        1: "ひときれ",
        2: "ふたきれ",
        3: "みきれ",
        4: "よんきれ",
        5: "ごきれ",
        6: "ろっきれ",
        7: "ななきれ",
        8: "はちきれ",
        9: "きゅうきれ",
        10: "じゅっきれ"
      },
      "altkana": {
        1: "ひときれ",
        2: "ふたきれ",
        3: "さんきれ",
        4: "よきれ",
        5: "ごきれ",
        6: "ろっきれ",
        7: "ななきれ",
        8: "はっきれ",
        9: "きゅうきれ",
        10: "じっきれ"       
      },
      "kanji": {
        1: "一切れ",
        2: "二切れ",
        3: "三切れ",
        4: "四切れ",
        5: "五切れ",
        6: "六切れ",
        7: "七切れ",
        8: "八切れ",
        9: "九切れ",
        10: "十切れ"
      }
    },
    // {   // 18
    //   "kana": {

    //   },
    //   "altkana": {

    //   },
    //   "kanji": {

    //   }
    // },
    // {   // 19
    //   "kana": {

    //   },
    //   "altkana": {

    //   },
    //   "kanji": {

    //   }
    // },
    // {   // 20
    //   "kana": {

    //   },
    //   "altkana": {

    //   },
    //   "kanji": {

    //   }
    // }
  ]

  availCounters = [
    "degreesc",
    "coffee",
    "beer",
    "misosoup",
    "balloon",
    "ramen",
    "fries",
    "person",
    "tomato",
    "candy",
    "baseball",
    "apple",
    "doughnut",
    "onigiri",
    "chestnut",
    "paperclip",
    "battery",
    "ruler",
    "dango",
    "paintbrush",
    "pencil",
    "banana",
    "paper",
    "photo",
    "envelope",
    "tshirt",
    "cc",
    "book",
    "notebook",
    "bicycle",
    "car",
    "computer",
    "bed",
    "cat",
    "mouse",
    "dog",
    "bee",
    "insect",
    "fish",
    "bird",
    "rabbit",
    "box",
    "floor",
    "customer",
    "hour",
    "pill",
    "elephant",
    "whale",
    "cow",
    "pizza",
    "cakeslice"
  ];

  counterObjects = [
    {   
      "iconName": "degreesc",
      "nameSingular": "degree Celsius",
      "namePlural": "degrees Celsius",
      "counterID": 0    // do
    },
    {   
      "iconName": "coffee",
      "nameSingular": "cup of coffee",
      "namePlural": "cups of coffee",
      "counterID": 1    // hai
    },
    {  
      "iconName": "beer",
      "nameSingular": "pint of beer",
      "namePlural": "pints of beer",
      "counterID": 1      // hai
    },
    {   
      "iconName": "misosoup",
      "nameSingular": "cup of miso soup",
      "namePlural": "cups of miso soup",
      "counterID": 1      // hai
    },
    {  
      "iconName": "balloon",
      "nameSingular": "balloon",
      "namePlural": "balloons",
      "counterID": 2      // tsu
    },
    {  
      "iconName": "ramen",
      "nameSingular": "order of ramen",
      "namePlural": "orders of ramen",
      "counterID": 2      // tsu
    },
    { 
      "iconName": "fries",
      "nameSingular": "order of fries",
      "namePlural": "orders of fries",
      "counterID": 2      // tsu
    },
    {  
      "iconName": "person",
      "nameSingular": "person",
      "namePlural": "people",
      "counterID": 3      // nin
    },
    {  
      "iconName": "tomato",
      "nameSingular": "tomato",
      "namePlural": "tomatoes",
      "counterID": 4      // ko
    },
    { 
      "iconName": "candy",
      "nameSingular": "candy",
      "namePlural": "candies",
      "counterID": 4      // ko
    },
    { 
      "iconName": "baseball",
      "nameSingular": "baseball",
      "namePlural": "baseballs",
      "counterID": 4      // ko
    },
    { 
      "iconName": "apple",
      "nameSingular": "apple",
      "namePlural": "apples",
      "counterID": 4      // ko
    },
    { 
      "iconName": "doughnut",
      "nameSingular": "doughnut",
      "namePlural": "doughnuts",
      "counterID": 4      // ko
    },
    { 
      "iconName": "onigiri",
      "nameSingular": "onigiri",
      "namePlural": "onigiri",
      "counterID": 4      // ko
    },
    {
      "iconName": "chestnut",
      "nameSingular": "chestnut",
      "namePlural": "chestnuts",
      "counterID": 4      // ko
    },
    {  
      "iconName": "paperclip",
      "nameSingular": "paperclip",
      "namePlural": "paperclips",
      "counterID": 4      // ko
    },
    { 
      "iconName": "battery",
      "nameSingular": "cylindrical battery",
      "namePlural": "cylindrical batteries",
      "counterID": 5      // ko
    },
    { 
      "iconName": "ruler",
      "nameSingular": "ruler",
      "namePlural": "rulers",
      "counterID": 5      // hon
    },
    {
      "iconName": "dango",
      "nameSingular": "dango",
      "namePlural": "dango",
      "counterID": 5      // hon
    },
    {
      "iconName": "paintbrush",
      "nameSingular": "paintbrush",
      "namePlural": "paintbrushes",
      "counterID": 5      // hon
    },
    {  
      "iconName": "pencil",
      "nameSingular": "pencil",
      "namePlural": "pencils",
      "counterID": 5      // hon
    },
    { 
      "iconName": "banana",
      "nameSingular": "banana",
      "namePlural": "bananas",
      "counterID": 5      // hon
    },
    { 
      "iconName": "paper",
      "nameSingular": "sheet of paper",
      "namePlural": "sheets of paper",
      "counterID": 6      // mai
    },
    { 
      "iconName": "photo",
      "nameSingular": "photograph",
      "namePlural": "photographs",
      "counterID": 6      // mai
    },
    {
      "iconName": "envelope",
      "nameSingular": "envelope",
      "namePlural": "envelopes",
      "counterID": 6      // mai
    },
    { 
      "iconName": "tshirt",
      "nameSingular": "shirt",
      "namePlural": "shirts",
      "counterID": 6      // mai
    },
    { 
      "iconName": "cc",
      "nameSingular": "credit card",
      "namePlural": "credit cards",
      "counterID": 6      // mai
    },
    { 
      "iconName": "book",
      "nameSingular": "book",
      "namePlural": "books",
      "counterID": 7      // satsu
    },
    { 
      "iconName": "notebook",
      "nameSingular": "notebook",
      "namePlural": "notebooks",
      "counterID": 7      // satsu
    },
    { 
      "iconName": "bicycle",
      "nameSingular": "bicycle",
      "namePlural": "bicycles",
      "counterID": 8      // dai
    },
    {  
      "iconName": "car",
      "nameSingular": "car",
      "namePlural": "cars",
      "counterID": 8      // dai
    },
    { 
      "iconName": "computer",
      "nameSingular": "computer",
      "namePlural": "computers",
      "counterID": 8      // dai
    },
    { 
      "iconName": "bed",
      "nameSingular": "bed",
      "namePlural": "beds",
      "counterID": 8      // dai
    },
    { 
      "iconName": "cat",
      "nameSingular": "cat",
      "namePlural": "cats",
      "counterID": 9      // hiki
    },
    {  
      "iconName": "mouse",
      "nameSingular": "mouse",
      "namePlural": "mice",
      "counterID": 9      // hiki
    },
    { 
      "iconName": "dog",
      "nameSingular": "dog",
      "namePlural": "dogs",
      "counterID": 9      // hiki
    },
    { 
      "iconName": "bee",
      "nameSingular": "bee",
      "namePlural": "bees",
      "counterID": 9      // hiki
    },
    { 
      "iconName": "insect",
      "nameSingular": "insect",
      "namePlural": "insects",
      "counterID": 9      // hiki
    },
    { 
      "iconName": "fish",
      "nameSingular": "fish",
      "namePlural": "fish",
      "counterID": 9      // hiki
    },
    { 
      "iconName": "bird",
      "nameSingular": "bird",
      "namePlural": "birds",
      "counterID": 10      // wa
    },
    { 
      "iconName": "rabbit",
      "nameSingular": "rabbit",
      "namePlural": "rabbits",
      "counterID": 10      // wa
    },
    { 
      "iconName": "box",
      "nameSingular": "box",
      "namePlural": "boxes",
      "counterID": 11      // hako
    },
    { 
      "iconName": "floor",
      "nameSingular": "floor",
      "namePlural": "floors",
      "counterID": 12      // kai
    },
    { 
      "iconName": "customer",
      "nameSingular": "customer",
      "namePlural": "customers",
      "counterID": 13      // mei
    },
    { 
      "iconName": "hour",
      "nameSingular": "hour (period of time)",
      "namePlural": "hours (period of time)",
      "counterID": 14      // jikan
    },
    { 
      "iconName": "pill",
      "nameSingular": "pill",
      "namePlural": "pills",
      "counterID": 15      // jou
    },
    { 
      "iconName": "elephant",
      "nameSingular": "elephant",
      "namePlural": "elephants",
      "counterID": 16      // tou
    },
    { 
      "iconName": "whale",
      "nameSingular": "whale",
      "namePlural": "whales",
      "counterID": 16      // tou
    },
    { 
      "iconName": "cow",
      "nameSingular": "cow",
      "namePlural": "cows",
      "counterID": 16      // tou
    },
    { 
      "iconName": "pizza",
      "nameSingular": "slice of pizza",
      "namePlural": "slices of pizza",
      "counterID": 17 // 切れ
    },
    { 
      "iconName": "cakeslice",
      "nameSingular": "slice of cake",
      "namePlural": "slices of cake",
      "counterID": 17 // 切れ
    },
  ]
}