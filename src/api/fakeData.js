import img0 from "../images/img-0.jpg";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import song0 from "../images/song-0.jpg";
import song1 from "../images/song-1.jpg";
import song2 from "../images/song-2.jpg";
//  /home  的初始数据
export var initData = {
	carousel:["","",""],
	activedRecommandList:[
		{id:1,title:"《路人超能100》合集（两季全）",viewcounts:"播放量：1.4万",imgUrl:"http://p.qpic.cn/music_cover/Q2BbehalbX9rf2ZwicYKia2EM69W8VMPOA6AWADeXsicfG4T5YPG28HCg/300?n=1"},
		{id:2,title:"为波西米亚狂想曲疯狂！为Queen疯狂！",viewcounts:"播放量：1768",imgUrl:img1},
		{id:3,title:"「轻快小调」散步兜风恰好时",viewcounts:"播放量：152.2万",imgUrl:img2},
		{id:4,title:"入耳即醉！ 百首治愈向英文翻唱",viewcounts:"播放量：21.6万",imgUrl:"http://p.qpic.cn/music_cover/JqedGFGJsxS0zcnIkPtxO4BribfZQ54agGObuiboJjJTjmYlxY5ceeiaw/300?n=1"},
		{id:5,title:"一秒动心 · 柠檬味爱情",viewcounts:"播放量：2.9万",imgUrl:"http://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu6ycUt5m5WCv2ptDepzmEu0NWzeXcApN4A/300?n=1"},
	],
	activedNewSongsList:[
		{id:1,name:"云一定知道",artist:"王晰",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M0000021FifT2dmoRM.jpg?max_age=2592000"},
		{id:2,name:"秣马《九州缥缈录》",artist:"阿云嘎",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000003aElav3Sk7Jj.jpg?max_age=2592000"},
		{id:3,name:"时光擦身而过 《八子》电影主题曲",artist:"谭维维",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000002BPPkm0sozsI.jpg?max_age=2592000"},
		{id:4,name:"Villanelle",artist:"周笔畅",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000000O0WWw0DiyYP.jpg?max_age=2592000"},
		{id:5,name:"YOUTH MAP",artist:"王子异 / 艾福杰尼",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000003yBpiN2vB1Cc.jpg?max_age=2592000"},
		{id:6,name:"淘气堡",artist:"Chic Chili（西可西丽",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000000fizMf35YUJo.jpg?max_age=2592000"},
		{id:7,name:"春天在哪里",artist:"王俊凯",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M0000011MSy61taGMs.jpg?max_age=2592000"},
		{id:8,name:"葫芦娃",artist:"声入人心男团",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M0000011MSy61taGMs.jpg?max_age=2592000"},
		{id:9,name:"少年之时",artist:"赵政豪 ",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000001AJHJh3jRRsI.jpg?max_age=2592000"},
		{id:10,name:"法，老牛13",artist:"艾热",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000002XeQRC3SB2Aj.jpg?max_age=2592000"},
	],
	activedTopList:[
		{title:"内地",list:[
			{id:1,singerId:1,name:"蜕变 (Live)",artist:"欧阳娜娜/周震南",musicUrl:"1",artistUrl:"1"},
			{id:2,singerId:2,name:"来自天堂的魔鬼",artist:"G.E.M. 邓紫棋",musicUrl:"1",artistUrl:"1"},
			{id:3,singerId:3,name:"我的名字",artist:"焦迈奇",musicUrl:"1",artistUrl:"1"},
		]},
		{title:"热歌",list:[
			{id:2,singerId:2,name:"来自天堂的魔鬼",artist:"G.E.M. 邓紫棋",musicUrl:"1",artistUrl:"1"},
			{id:4,singerId:4,name:"你的酒馆对我打了烊",artist:"陈雪凝"},
			{id:5,singerId:5,name:"灰姑娘",artist:"陈雪凝"},
		]},
		{title:"新歌",list:[
			{id:5,singerId:5,name:"灰姑娘",artist:"陈雪凝"},
			{id:6,singerId:6,name:"当你孤单你会想起谁",artist:"刘宪华 (Henry)"},
			{id:7,singerId:7,name:"一颗星的夜",artist:"尤长靖"},
		]},
		{title:"欧美",list:[
			{id:8,singerId:8,name:"Cross Me",artist:"Ed Sheeran"},
			{id:9,singerId:9,name:"ME!",artist:"Taylor Swift"},
			{id:10,singerId:10,name:"Rescue Me",artist:"OneRepublic"},
		]},
	],
};

//  /toplist  排行板的假数据
export const fakeTopListData = {
	activeNavIndex:0,
	list:[
		{singer:"安来宁",name:"难得",musicSrc:"http://cdn.lijinke.cn/nandUrlp3",imgUrl:"http://cdn.lijinke.cn/nande.jpg"},
		{singer:"Luis Fonsi",name:"Despacito",musicSrc:"http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",cover:"http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg"},
		{singer:"焦迈奇",name:"我的名字",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000004PydGx4duhNe.jpg?max_age=2592000"},
		{singer:"Bharatt - Saura",name:"Mila Jo Tu",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000003fxWVi2arXeL.jpg?max_age=2592000"},
		{singer:"周深",name:"拙慕",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000001XxoUG16aa3I.jpg?max_age=2592000"},
		{singer:"陈雪凝",name:"灰姑娘",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000002od0aF16hAeK.jpg?max_age=2592000"},
		{singer:"方雅贤",name:"遇到",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M0000031ftBk2foLzq.jpg?max_age=2592000"},
		{singer:"Ice paper",name:"心如止水",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M0000021N8xr0xq1Fp.jpg?max_age=2592000"},
		{singer:"Katie Sky",name:"Monsters",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000001Z5XGk3onxuW.jpg?max_age=2592000"},
		{singer:"欧阳娜娜",name:"蜕变",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000000o9XOH1MA15Q.jpg?max_age=2592000"},
		{singer:"王贰浪",name:"像鱼",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000001Zrk6t0urxvG.jpg?max_age=2592000"},
		{singer:"汪峰",name:"灿烂的你",musicUrl:"",imgUrl:"http://y.gtimg.cn/music/photo_new/T002R90x90M000003oPgZm03HI9o.jpg?max_age=2592000"},
	],
	selectedTop:"流行指数榜",
} 
//  /playlist  歌单数据
export const fakePlayListData = {
	typelist:[
		{
			type:"流派",
			taglist:[
				{id:1,name:"嘻哈"},{id:2,name:"轻音乐"},{id:3,name:"流行"},
				{id:4,name:"R&B"},{id:5,name:"古典"}
			]
		},
		{
			type:"语种",
			taglist:[
				{id:1,name:"国语"},{id:2,name:"英语"},{id:3,name:"韩语"},
				{id:4,name:"粤语"},{id:5,name:"日语"}
			]
		},
		{
			type:"主题",
			taglist:[
				{id:1,name:"ACG"},{id:2,name:"影视"},{id:3,name:"经典"},
				{id:4,name:"网络歌曲"},{id:5,name:"儿歌"}
			]
		},
		{
			type:"心情",
			taglist:[
				{id:1,name:"伤感"},{id:2,name:"寂寞"},{id:3,name:"励志"},
				{id:4,name:"按键"},{id:5,name:"思念"}
			]
		},
	],
	list:[
		{id:1,singerId:1,title:"初来乍到 · 尽享Hip-Hop采样的魅力",singer:"嘻哈不死",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/gYgckTuS2l6WP35HkibuA2U3OBH2lW15MwAaqkVsd75C5pDl8PPreyA/300?n=1"},
		{id:2,singerId:2,title:"初来乍到 · 尽享Hip-Hop采样的魅力",singer:"嘻哈不死",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/gYgckTuS2l6WP35HkibuA2U3OBH2lW15M6Rud5hw5QeaTmEVVNevXzQ/300?n=1"},
		{id:3,singerId:3,title:"初来乍到 · 尽享Hip-Hop采样的魅力",singer:"嘻哈不死",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/gYgckTuS2l6WP35HkibuA2U3OBH2lW15M59LuSA4uUEVMNAUcRcxvfQ/300?n=1"},
		{id:4,singerId:4,title:"黑泡Made In China -- 黑泡China",singer:"嘻哈不死",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/xiabfMZAmQ0PYUzgCvOicArFcotu2WyX9iaePFwhMpdWILldv1Iqo8obg/300?n=1"},
		{id:5,singerId:5,title:"Rapper柔情总是诗--Rapper柔情",singer:"爱听歌的兽gr",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/0yiaX8d9LSmnROyId1RsUU99ib17aFdS28RK5TibaUjFmQouRBrfGYM2Q/300?n=1"},
		{id:6,singerId:6,title:"走路带风！律动满分的华语Rap",singer:"念安娜",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/R8unPZMA4Vp5v2Ms96bstibICaMoxFAQ3RWf4WfzwBicWs2njhgCojHA/300?n=1"},
		{id:7,singerId:7,title:"Melodic Rap | 满分嘻哈情话情话",singer:"蜜糖男孩",other:"播放量： 12.8万",imgUrl:"http://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu95yMiaDwtR5zia7zVq728AzibichNuLZBFKxA/300?n=1"},
		{id:8,singerId:8,title:"舒解加班疲倦的华语抒情说唱",singer:"爱听歌的兽gr",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/0yiaX8d9LSmnROyId1RsUU3fkn5sE32Wl4AyxEefwVJz2WoZKMEqzmA/300?n=1"},
		{id:9,singerId:9,title:"初来乍到 · 尽享Hip-Hop采样的魅力",singer:"嘻哈不死",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/1kicVrMEg0Fn1TyQ2yOZs3ZTp9gyvcRfyCAMUfibBQ69TQUR5UEBfjDA/300?n=1"},
		{id:10,singerId:10,title:"初来乍到 · 尽享Hip-Hop采样的魅力",singer:"嘻哈不死",other:"播放量： 1.8万",imgUrl:"http://p.qpic.cn/music_cover/0XiciaLJljHTjwpV8g0OOhUd1q64BfFiasD7vTrZLqX2I2iaUQ8GJpiahKg/300?n=1"},
	],
}

//  /singerlist 歌手列表的假数据
export const fakeSingerListData = {
	taglist:[
		[
			{id:-100,name:"热门"},{id:-1,name:"A"},{id:-2,name:"B"},{id:-3,name:"C"},{id:-4,name:"D"},{id:-5,name:"E"},{id:-6,name:"F"},{id:-7,name:"G"},{id:-8,name:"H"},{id:-9,name:"I"},
			{id:-10,name:"J"},{id:-11,name:"K"},{id:12,name:"L"},{id:12,name:"M"},{id:12,name:"N"},{id:12,name:"O"},{id:12,name:"Q"},{id:12,name:"R"},{id:12,name:"S"},{id:12,name:"T"},
			{id:34,name:"U"},{id:34,name:"V"},{id:34,name:"W"},{id:34,name:"X"},{id:34,name:"Y"},{id:34,name:"Z"},
		],
		[
			{id:-101,name:"全部"},{id:56,name:"内地"},{id:56,name:"港台"},{id:56,name:"欧美"},{id:56,name:"日本"},{id:56,name:"韩国"},{id:46,name:"其他"},
		],
		[
			{id:-102,name:"全部"},{id:56,name:"流行"},{id:56,name:"嘻哈"},{id:56,name:"蓝调"},{id:56,name:"爵士"},{id:56,name:"其他"}
		]
	],
	list:[
		{id:1,name:"周杰伦",imgUrl:"http://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000"},
		{id:2,name:"G.E.M. 邓紫棋",imgUrl:"http://y.gtimg.cn/music/photo_new/T001R150x150M000001fNHEf1SFEFN.jpg?max_age=2592000"},
		{id:3,name:"陈雪凝",imgUrl:"http://y.gtimg.cn/music/photo_new/T001R150x150M000004V53Ga0bV65j.jpg?max_age=2592000"},
		{id:4,name:"Eminem",imgUrl:"http://y.gtimg.cn/music/photo_new/T001R150x150M000000yDAjj2TE9j8.jpg?max_age=2592000"},
		{id:5,name:"Kanye West",imgUrl:"http://y.gtimg.cn/music/photo_new/T001R150x150M0000023MslA1UR6YR.jpg?max_age=2592000"},
		{id:6,name:"Alan Walker",imgUrl:"http://y.gtimg.cn/music/photo_new/T001R150x150M0000020PeOh4ZaCw1.jpg?max_age=2592000"},
		{id:7,name:"李荣浩",imgUrl:"http://y.gtimg.cn/music/photo_new/T001R150x150M000000aHmbL2aPXWH.jpg?max_age=2592000"},
		{id:8,name:"陈奕迅",imgUrl:"http://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.jpg?max_age=2592000"},
	]
}

//  /singerlist/{id} 歌手详情页
export const fakeSingerDetailData = {
	name:"周杰伦",
	imgUrl:"http://y.gtimg.cn/music/photo_new/T001R300x300M0000025NhlN2yWrP4.jpg?max_age=2592000",
	desciption:`外文名：Jay Chou国籍：中国出生地：台湾省新北市职业：音乐人、制作人、导演、企业家等代表作品：《龙卷风》、《菊花台》、《青花瓷》、《晴天》简介：周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，华语流行男歌手、演员、词曲创作人、MV及电影导演、编剧及制作人。2000年被吴宗宪发掘，发行首张个人专辑《Jay》。2001年发行专辑《范特西》。2002年在中国、新加坡、马来西亚、美国等地举办首场个人世界巡回演唱会。
		2003年登上美国《时代周刊》亚洲版封面人物。`,
	list:[
		{id:1,singer:"周杰伦",name:"晴天",album:"叶惠美",musicUrl:""},
		{id:2,singer:"周杰伦",name:"告白气球",album:"床边故事",musicUrl:""},
		{id:3,singer:"周杰伦",name:"稻香",album:"魔杰座",musicUrl:""},
		{id:4,singer:"周杰伦",name:"等你下课",album:"等你下课",musicUrl:""},
		{id:5,singer:"周杰伦",name:"七里香",album:"七里香",musicUrl:""},
		{id:6,singer:"周杰伦",name:"一路向北",album:"J III MP3 Player",musicUrl:""},
		{id:7,singer:"周杰伦",name:"青花瓷",album:"我很忙",musicUrl:""},
		{id:8,singer:"周杰伦",name:"不能",album:"不能说的秘密 电影原声带",musicUrl:""},
	]
}

//  /playlistdetail/{id}  歌单详情页
export const fakePlayListDetailData = {
	name:"初来乍到 · 尽享Hip-Hop采样的魅力",
	user:"嘻哈不死",
	imgUrl:"http://p.qpic.cn/music_cover/gYgckTuS2l6WP35HkibuA2U3OBH2lW15MwAaqkVsd75C5pDl8PPreyA/300?n=1",
	desciption:`外文名：Jay Chou国籍：中国出生地：台湾省新北市职业：音乐人、制作人、导演、企业家等代表作品：《龙卷风》、《菊花台》、《青花瓷》、《晴天》简介：周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，华语流行男歌手、演员、词曲创作人、MV及电影导演、编剧及制作人。2000年被吴宗宪发掘，发行首张个人专辑《Jay》。2001年发行专辑《范特西》。2002年在中国、新加坡、马来西亚、美国等地举办首场个人世界巡回演唱会。
		2003年登上美国《时代周刊》亚洲版封面人物。`,
	list:[
		{id:1,name:"I",singer:"Kendrick Lamar",imgUrl:"",musicUrl:""},
		{id:2,name:" Hotline Bling",singer:"Drake",imgUrl:"",musicUrl:""},
		{id:3,name:" Juicy",singer:"The Notorious B.I",imgUrl:"",musicUrl:""},
		{id:4,name:"Between the Sheets",singer:"The Isley Brothers",imgUrl:"",musicUrl:""},
		{id:5,name:"Big Poppa",singer:"The Notorious B.I.",imgUrl:"",musicUrl:""},
		{id:6,name:"Dream On",singer:"Aerosmith",imgUrl:"",musicUrl:""},
		{id:7,name:"Sing For The Moment",singer:"Eminem",imgUrl:"",musicUrl:""},
		{id:8,name:" MV Can I Kick It",singer:"A Tribe Called Qu",imgUrl:"",musicUrl:""},
	]
}


