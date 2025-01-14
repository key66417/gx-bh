
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'UUID'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.147:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_135
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.1.103:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_162
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.1.111:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_52
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.37:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.1.119:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048fp%3Drandom#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_35
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.1:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_133
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.46:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_148
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.1.111:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.1.102:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_27
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.9:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_137
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.0:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_113
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.0.226:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.14:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.147:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.103:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_138
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.1.119:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048fp%3Drandom#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.1.103:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_130
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.14:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_139
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.147:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://7daf833c-37b9-4afc-8495-96590f03f781@120.232.217.96:21332?security=tls&sni=120.232.217.96&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_151
trojan://7daf833c-37b9-4afc-8495-96590f03f781@120.232.217.96:21332?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_17
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.65.80:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_141
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.85.155:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_28
vless://253ef561-9e57-4336-befd-878ddd30df01@151.101.194.133:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048fp%3Dchrome#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_36
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.0:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.65.119:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_142
vless://253ef561-9e57-4336-befd-878ddd30df01@151.101.194.133:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048fp%3Dchrome#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.69.101:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.70.214:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_145
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.65.8:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_143
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.1:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.65.71:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.70.214:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.69.101:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_140
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.72.131:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.72.38:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.71.3:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_144
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.70.214:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_107
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.66.165:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.65.71:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_146
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo0YTJyZml4b3BoZGpmZmE4S1ZBNEFh@45.87.175.157:8080#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_3
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.0:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_170
vless://98f9fb8e-ac0c-4a54-80ff-dcce095d9fbd@104.16.46.27:80?encryption=none&security=none&type=ws&host=cold-snowflake-4912-ppal03.rarenok889.workers.dev&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.21.30.52:80?encryption=none&security=none&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2Ftelegram-_-_-_-_-__-free_shekan-_-_-_-%2F%3Fed%3D2048#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_129
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.0.226:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://23b3cbba-e6ac-485a-9481-342a0415eab9@104.21.81.174:80?encryption=none&security=none&sni=DaWn-lAKE-d5E3.WocoYA4320.wOrkERs.DeV&alpn=http%2F1.1&type=ws&host=DaWn-lAKE-d5E3.WocoYA4320.wOrkERs.DeV&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.65.119:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpjdklJODVUclc2bjBPR3lmcEhWUzF1@45.87.175.157:8080#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_5
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.65.80:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@95.164.51.24:2501?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#UA_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@95.164.51.24:2501?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#UA_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_2
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.72.38:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_149
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.85.155:80?encryption=none&security=none&sni=teleirani.ir&alpn=h2%2Chttp%2F1.1&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BDTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://44ab0683-1a75-4859-88ce-ef9ffea53c91@172.67.195.126:8880?encryption=none&security=none&sni=falcunargo-telegram.384f2ed785.workers.Dev&type=ws&host=falcunargo-telegram.384f2ed785.workers.Dev&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.0:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#24_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=vkvd127.mycdn.me&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=45.76.0.86&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=vkvd127.mycdn.me&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.21.30.52:80?encryption=none&security=none&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2Ftelegram-_-_-_-_-__-free_shekan-_-_-_-%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.71.3:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.72.38:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=vkvd127.mycdn.me&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.14:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#386_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#IS_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://e279c494-c426-443a-a034-a04516409242@naiu-jp.05vr9nyqg5.download:13012?security=tls&sni=cloudflare.node-ssl.cdn-alibaba.com&allowInsecure=1&type=tcp&headerType=none#unKnow_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_1
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.65.8:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.1.103:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_171
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.101.76:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.17:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#12_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://0bc68743-cff8-4730-9818-9d8192ee335c@219.135.231.205:21042?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_146
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%B8%F0%9F%87%AA
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.18:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#92_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@95.164.51.24:2501?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#576_%E4%B9%8C%E5%85%8B%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@95.164.51.24:2501?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@95.164.51.24:2501?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#657_%E4%B9%8C%E5%85%8B%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://2d7c7aa5-364a-4dbb-937a-f8e4f5f73007@94.131.111.195:443?encryption=none&security=tls&sni=de4.connecton.surf&type=ws&host=de4.connecton.surf&path=%2Fvless#%E4%B9%8C%E5%85%8B%E5%85%B0%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://3723507166611775488@holy-seahorse.boa152.lol:443?security=tls&sni=holy-seahorse.boa152.lol&allowInsecure=1&type=tcp&headerType=none#Warsaw%20%207
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.66.165:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.0.47:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8%20%20%20TG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
trojan://3723507166611775488@holy-seahorse.boa152.lol:443?security=tls&sni=holy-seahorse.boa152.lol&type=tcp&headerType=none#%E7%BE%8E%E5%9B%BDTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2FWG9SqpThFFMyTenz%3Fed%3D2560#820_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@95.164.116.22:2501?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#UA_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_1
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTXyBcdTY2RjRcdTU5MUFcdTc5OEZcdTUyMjlcdThCRjdcdTY0MUNodHRwczovL3QubWUvYW56aHVvYXBrIiwNCiAgImFkZCI6ICIxNTEuMTAxLjIuMjE2IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiYzY5ZjMwMjktYWUxZS00NWNhLWFhMDgtNzA5NzBmMTRkZmQyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ0ZWxlZ3JhbS1JU1Z2cG4uaXIiLA0KICAicGF0aCI6ICIvcmFjZXZwbj90ZWxlZ3JhbUBJU1Z2cG4tdGVsZWdyYW1ASVNWdnBuLXRlbGVncmFtQElTVnZwbiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICJ0ZWxlZ3JhbS1JU1Z2cG4uaXIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_62
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVx1OEJGN1x1NjQxQ2h0dHBzOi8vdC5tZS9hbnpodW9hcGsiLA0KICAiYWRkIjogIjE1MS4xMDEuMi4yMTYiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJjNjlmMzAyOS1hZTFlLTQ1Y2EtYWEwOC03MDk3MGYxNGRmZDIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJwYXRoIjogIi9yYWNldnBuP3RlbGVncmFtQElTVnZwbi10ZWxlZ3JhbUBJU1Z2cG4tdGVsZWdyYW1ASVNWdnBuIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1N0Y4RVx1NTZGRFx1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVx1OEJGN1x1NjQxQ2h0dHBzOi8vdC5tZS9hbnpodW9hcGsiLA0KICAiYWRkIjogIjE1MS4xMDEuMi4yMTYiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJjNjlmMzAyOS1hZTFlLTQ1Y2EtYWEwOC03MDk3MGYxNGRmZDIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJwYXRoIjogIi9yYWNldnBuP3RlbGVncmFtQElTVnZwbi10ZWxlZ3JhbUBJU1Z2cG4tdGVsZWdyYW1ASVNWdnBuIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTXyBcdTY2RjRcdTU5MUFcdTc5OEZcdTUyMjlcdThCRjdcdTY0MUNodHRwczovL3QubWUvYW56aHVvYXBrIiwNCiAgImFkZCI6ICIxNTEuMTAxLjIuMjE2IiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiYzY5ZjMwMjktYWUxZS00NWNhLWFhMDgtNzA5NzBmMTRkZmQyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ0ZWxlZ3JhbS1JU1Z2cG4uaXIiLA0KICAicGF0aCI6ICIvcmFjZXZwbj90ZWxlZ3JhbUBJU1Z2cG4tdGVsZWdyYW1ASVNWdnBuLXRlbGVncmFtQElTVnZwbiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICJ0ZWxlZ3JhbS1JU1Z2cG4uaXIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NkNENVx1NTZGRFx1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVx1OEJGN1x1NjQxQ2h0dHBzOi8vdC5tZS9hbnpodW9hcGsiLA0KICAiYWRkIjogIjE1MS4xMDEuMi4yMTYiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJjNjlmMzAyOS1hZTFlLTQ1Y2EtYWEwOC03MDk3MGYxNGRmZDIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJwYXRoIjogIi9yYWNldnBuP3RlbGVncmFtQElTVnZwbi10ZWxlZ3JhbUBJU1Z2cG4tdGVsZWdyYW1ASVNWdnBuIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://b8a0fe1a-fbea-4572-a878-20b7f7c98636@104.24.254.125:80?encryption=none&security=none&type=ws&host=sweet-glade-2430-ppal03.xasev15708.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://f06e3012-30bc-56e2-ae73-74b7a6f5fe91@speedtest.net:80?encryption=none&security=none&sni=hajlab.ucdavis.edu&type=ws&host=tg.ELIV2RAY.IR&path=%2Feli#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_89
vless://fdbe3342-3a09-5ffc-a6e2-3fc668e777b7@live.skornorth.com:443?encryption=none&security=tls&sni=live.skornorth.com&type=ws&host=0-MO-SI-V2.COM&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_42
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.13:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#13_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://fdbe3342-3a09-5ffc-a6e2-3fc668e777b7@speedtest.net:80?encryption=none&security=none&sni=0-MO-SI-V2.COM&type=ws&host=0-MO-SI-V2.COM&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_51
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVx1OEJGN1x1NjQxQ2h0dHBzOi8vdC5tZS9hbnpodW9hcGsiLA0KICAiYWRkIjogIjE1MS4xMDEuMi4yMTYiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJjNjlmMzAyOS1hZTFlLTQ1Y2EtYWEwOC03MDk3MGYxNGRmZDIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJwYXRoIjogIi9yYWNldnBuP3RlbGVncmFtQElTVnZwbi10ZWxlZ3JhbUBJU1Z2cG4tdGVsZWdyYW1ASVNWdnBuIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.10:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#194_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@198.41.216.118:80?encryption=none&security=none&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2Ftelegram-_-_-_-_-__-free_shekan-_-_-_-%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://3723507166611775488@91.206.179.179:443?security=tls&sni=holy-seahorse.boa152.lol&type=tcp&headerType=none#%E7%BE%8E%E5%9B%BDTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@95.164.116.22:2501?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp6VVF2RmlvYWU3S3pBWjJHQ01nTnVt@83.147.216.173:9848#IR_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://fdbe3342-3a09-5ffc-a6e2-3fc668e777b7@live.skornorth.com:443?encryption=none&security=tls&sni=live.skornorth.com&type=ws&host=0-MO-SI-V2.COM&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp6VVF2RmlvYWU3S3pBWjJHQ01nTnVt@83.147.216.173:9848#%E8%8B%B1%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2F#93_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@95.164.116.22:2501?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#703_%E4%B9%8C%E5%85%8B%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://b8a0fe1a-fbea-4572-a878-20b7f7c98636@104.16.178.96:80?encryption=none&security=none&type=ws&host=sweet-glade-2430-ppal03.xasev15708.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://f06e3012-30bc-56e2-ae73-74b7a6f5fe91@speedtest.net:80?encryption=none&security=none&sni=hajlab.ucdavis.edu&type=ws&host=tg.ELIV2RAY.IR&path=%2Feli#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.19:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#822_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp6VVF2RmlvYWU3S3pBWjJHQ01nTnVt@83.147.216.173:9848#IR_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_1
vless://c09d51b8-25c5-4eaf-98bc-ef40c807de84@104.16.65.193:80?encryption=none&security=none&type=ws&host=dawn-mountain-d79f-ppal03.doniji1519.workers.dev&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2FWG9SqpThFFMyTenz%3Fed%3D2560#457_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.6:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#52_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://fdbe3342-3a09-5ffc-a6e2-3fc668e777b7@speedtest.net:80?encryption=none&security=none&sni=0-MO-SI-V2.COM&type=ws&host=0-MO-SI-V2.COM&path=%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#617_%E5%86%B0%E5%B2%9B_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.8:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#327_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.9:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#50_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.4:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#333_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVx1OEJGN1x1NjQxQ2h0dHBzOi8vdC5tZS9hbnpodW9hcGsiLA0KICAiYWRkIjogIjE1MS4xMDEuMi4yMTYiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJjNjlmMzAyOS1hZTFlLTQ1Y2EtYWEwOC03MDk3MGYxNGRmZDIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJwYXRoIjogIi9yYWNldnBuP3RlbGVncmFtQElTVnZwbi10ZWxlZ3JhbUBJU1Z2cG4tdGVsZWdyYW1ASVNWdnBuIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogInRlbGVncmFtLUlTVnZwbi5pciIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://468d811a-8540-4517-9779-0f542b5150d2@104.24.7.232:80?encryption=none&security=none&type=ws&host=mute-wood-561e-ppal.megiva7664.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://d345d11e-c424-4583-b36e-527ab1f0afa4@104.18.10.128:2086?encryption=none&security=none&sni=v2raynselling.kir-rasol-kir.workers.dev&type=ws&host=v2raynselling.kir-rasol-kir.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp6VVF2RmlvYWU3S3pBWjJHQ01nTnVt@83.147.216.173:9848#%E4%BC%8A%E6%9C%971
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.85.155:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048fp%3Dchrome#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_131
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_87
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.1:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_106
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.147:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_152
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.3:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#768_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.16:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#94_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://34ec6bdf-602c-4bbe-933a-5c0823524201@103.152.164.39:443?security=tls&allowInsecure=1&type=tcp&headerType=none#VN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_2
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_36
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_74
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1N0Y4RVx1NTZGRFx1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVx1OEJGN1x1NjQxQ2h0dHBzOi8vdC5tZS9hbnpodW9hcGsiLA0KICAiYWRkIjogIjkyLjI0Mi4yMjAuMjIiLA0KICAicG9ydCI6ICIzNzg4NSIsDQogICJpZCI6ICI4ZGVlMTlhYi01MGNlLTRkMDYtYmU0Mi01ZTUzYzg5ODljY2MiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.85.155:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_29
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.9:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://34ec6bdf-602c-4bbe-933a-5c0823524201@cmc6.5gsieuvip.vn:443?security=tls&allowInsecure=1&type=tcp&headerType=none#%E4%BA%9A%E5%A4%AA%E5%9C%B0%E5%8C%BA1
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NTE3Nlx1NEVENjUtXHU2QjI3XHU2RDMyXHU1NzMwXHU1MzNBIiwNCiAgImFkZCI6ICI5Mi4yNDIuMjIwLjIyIiwNCiAgInBvcnQiOiAiMzc4ODUiLA0KICAiaWQiOiAiOGRlZTE5YWItNTBjZS00ZDA2LWJlNDItNWU1M2M4OTg5Y2NjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
trojan://34ec6bdf-602c-4bbe-933a-5c0823524201@cmc6.5gsieuvip.vn:443?security=tls&allowInsecure=1&type=tcp&headerType=none#VN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_1
trojan://34ec6bdf-602c-4bbe-933a-5c0823524201@cmc6.5gsieuvip.vn:443?security=tls&allowInsecure=1&type=tcp&headerType=none#VN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIklSXyBcdTY2RjRcdTU5MUFcdTc5OEZcdTUyMjlcdThCRjdcdTY0MUNodHRwczovL3QubWUvYW56aHVvYXBrIiwNCiAgImFkZCI6ICI5Mi4yNDIuMjIwLjIyIiwNCiAgInBvcnQiOiAiMzc4ODUiLA0KICAiaWQiOiAiOGRlZTE5YWItNTBjZS00ZDA2LWJlNDItNWU1M2M4OTg5Y2NjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.1.111:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_15
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8%20%20%20TG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
trojan://0bc68743-cff8-4730-9818-9d8192ee335c@219.135.231.205:21042?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_7
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1N0Y4RVx1NTZGRFx1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVx1OEJGN1x1NjQxQ2h0dHBzOi8vdC5tZS9hbnpodW9hcGsiLA0KICAiYWRkIjogInM0LmNuLWRiLnRvcCIsDQogICJwb3J0IjogIjIwODYiLA0KICAiaWQiOiAiNGIzNjYyNWMtYjlkOS0zZWE2LWFlZDUtODZkNjJjNzBlMTZkIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIxMDAtNTktMTMzLTEzOS5zNC5jbi1kYi50b3AiLA0KICAicGF0aCI6ICIvZGFiYWkuaW4xNzIuNjcuMTAzLjMzIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIjEwMC01OS0xMzMtMTM5LnM0LmNuLWRiLnRvcCIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_13
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.1:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.1.103:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_188
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF19
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_3
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.210:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_166
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.0:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_151
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.206:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_15
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_164
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.46:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF19
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.1:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_154
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.210:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_9
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF4
ss://YWVzLTI1Ni1nY206ZG9uZ3RhaXdhbmcuY29t@185.22.155.228:23456#%E4%BF%84%E7%BD%97%E6%96%AFTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.1.102:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_33
vless://253ef561-9e57-4336-befd-878ddd30df01@167.82.85.155:80?encryption=none&security=none&sni=teleirani.ir&type=ws&host=teleirani.ir&path=%2F%3Fed%3D2048#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_1
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BDTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
vless://d854ce54-d193-4e13-9c0c-0125ecdec2de@knowledgemap.ubntddns.com:443?encryption=none&security=tls&sni=knowledgemap.ubntddns.com&type=ws&host=knowledgemap.ubntddns.com&path=%2Fgetupdates#RU_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_5
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVx1OEJGN1x1NjQxQ2h0dHBzOi8vdC5tZS9hbnpodW9hcGtfIiwNCiAgImFkZCI6ICI5Mi4yNDIuMjIwLjIyIiwNCiAgInBvcnQiOiAiMzc4ODUiLA0KICAiaWQiOiAiOGRlZTE5YWItNTBjZS00ZDA2LWJlNDItNWU1M2M4OTg5Y2NjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.207:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_150
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjgwNl9cdTZDRDVcdTU2RkRfXHU3NTM1XHU2MkE1XHU2NDFDXHU3RDIyQGFuemh1b2FwayIsDQogICJhZGQiOiAiMTYzLjUuMTU5LjIzMSIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICJlNTM3ZjJmNS0yYTBjLTRmNTktOTJjOS04MzJjYTY0MzNiZjMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImlydmlkZW8uY2ZkIiwNCiAgInBhdGgiOiAiL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJpcnZpZGVvLmNmZCIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.207:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_14
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_8
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.15:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#218_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.1.103:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@167.82.0.103:80?encryption=none&security=none&sni=edge.validbv3528.ir&type=ws&host=edge.validbv3528.ir&path=%2Fvless-ws%2F%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayjab1%40Azarbayja1%2F%3Fed%3D2560#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_132
`

let urls = [];
let subConverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!(token == mytoken || token == fakeToken || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt');
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);

			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())) {
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || (url.searchParams.has('clash') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ((url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))) {
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || (url.searchParams.has('surge') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'surge';
			} else if (userAgent.includes('quantumult%20x') || (url.searchParams.has('quanx') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'quanx';
			} else if (userAgent.includes('loon') || (url.searchParams.has('loon') && !userAgent.includes('subconverter'))) {
				订阅格式 = 'loon';
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 请求订阅响应内容 = await getSUB(urls, request, 追加UA, userAgentHeader);
			console.log(请求订阅响应内容);
			req_data += 请求订阅响应内容[0].join('\n');
			订阅转换URL += "|" + 请求订阅响应内容[1];

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result);
			}

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, {
					headers: {
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl);

				if (!subConverterResponse.ok) {
					return new Response(base64Data, {
						headers: {
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subConverterUrl: ${subConverterResponse.status} ${subConverterResponse.statusText}`);
				}
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				return new Response(subConverterContent, {
					headers: {
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data, {
					headers: {
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');	// 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	}
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies') && content.includes('proxy-groups')) {
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds') && content.includes('inbounds')) {
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log(异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `v2rayN/${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow"
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(str);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt') {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}
}
