
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
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTMjItWWFuZzExLjI3IiwNCiAgImFkZCI6ICIxOTguNDYuMTMxLjI1MyIsDQogICJwb3J0IjogIjUzNjM2IiwNCiAgImlkIjogImYzY2FlZGE3LTkwNGUtNGJkYS1jOWM3LTI3ZjNjNWQ5MjA1MSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTMjItWWFuZzExLjI3IiwNCiAgImFkZCI6ICIxMTQuNjYuNjMuMjEyIiwNCiAgInBvcnQiOiAiMTMzODkiLA0KICAiaWQiOiAiZjNjYWVkYTctOTA0ZS00YmRhLWM5YzctMjdmM2M1ZDkyMDUxIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ0Y3AiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiIiwNCiAgInBhdGgiOiAiIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
# 专线
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@101.32.40.116:8888?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@8.210.195.214:587?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@3bd9.55dca.e048.f63-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfhk2.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@47.76.57.24:4445?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@129.226.209.210:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@47.76.255.113:587?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
trojan://Aimer@43.156.253.94:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SIN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@8.218.187.32:587?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.128.95.110:40029?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.30.229.122:50000?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@152.70.245.66:12693?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://29371b84-b4b8-4a74-8900-359d22484c09@131.186.22.238:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqkr.hnkkt.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@14.51.32.22:50000?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@112.162.68.10:50004?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@140.238.29.94:35534?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@103.148.72.147:1443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HKG
trojan://Aimer@175.198.255.61:12550?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@14.51.32.22:50000?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@152.70.245.66:12693?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@140.238.29.94:35534?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@175.198.255.61:12550?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@59.30.229.122:50000?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@210.100.215.99:18017?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@125.135.45.226:50000?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@218.154.47.250:50000?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.3.254.50:50000?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@118.45.113.48:16064?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://wb6368@103.137.63.3:443?security=tls&sni=hsdgbuys.pages.dev&alpn=h3&fp=randomized&type=ws&host=hsdgbuys.pages.dev&path=%2F%3Fed%3D2560#TW
trojan://Aimer@220.78.106.96:50000?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@118.47.65.248:30012?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D118.47.65.248%3A30012#KR
trojan://Aimer@59.0.201.231:35531?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@220.71.185.223:10093?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@218.152.197.93:50000?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@218.156.228.198:20202?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@220.71.185.223:10093?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@121.137.62.90:50000?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@121.156.172.148:12304?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.1.139.120:50000?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@121.137.62.90:50000?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@175.215.45.201:21236?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.22.103.99:18077?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@118.47.65.248:30012?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@218.156.228.198:20202?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@220.74.106.40:50000?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@59.22.103.99:18077?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@218.158.251.112:20900?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@3bd9.55dca.e048.f62-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfhk1.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_4
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@114.30.225.88:30030?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#KR
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@211.105.35.130:30012?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#KR
trojan://Aimer@118.35.88.114:50000?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@168.126.66.181:50000?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@211.105.35.130:30012?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D211.105.35.130%3A30012#KR
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@114.30.225.88:30030?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D114.30.225.88%3A30030#KR
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@3bd9.55dca.e048.f61-fef1f.yfjcs.com:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfhk1.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
trojan://Aimer@121.180.184.145:50000?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://29371b84-b4b8-4a74-8900-359d22484c09@192.9.129.206:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqjs.hnkkt.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_6
trojan://Aimer@211.227.87.99:50000?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.37:2096?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
trojan://Aimer@103.116.7.103:2083?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP
trojan://Aimer@211.217.26.23:20256?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@183.103.167.69:21285?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@161.129.41.140:6352?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
trojan://Aimer@23.165.40.87:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@206.238.237.121:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#SG
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@172.82.16.99:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://Aimer@108.165.152.104:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@108.165.152.29:2096?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@176.124.223.40:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@188.164.159.25:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@185.204.109.190:8443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
vless://29371b84-b4b8-4a74-8900-359d22484c09@64.181.225.150:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqjs.hnkkt.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_8
trojan://Aimer@154.21.82.84:54622?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://29371b84-b4b8-4a74-8900-359d22484c09@146.235.228.34:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqjs.hnkkt.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_5
trojan://Aimer@192.227.247.49:2087?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@45.67.215.242:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D45.67.215.242%3A443#RU
trojan://Aimer@45.67.215.217:2087?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@107.174.79.149:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@91.149.239.72:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D91.149.239.72%3A443#US
trojan://Aimer@45.59.187.105:26443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@47.57.245.232:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#HK
trojan://Aimer@67.226.221.102:80?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@23.169.184.125:25526?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@168.138.46.67:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP
vless://499ee245-f954-4d41-9943-4e85666b7414@104.18.26.94:80?encryption=none&security=none&type=ws&host=esetsecuritylicense.mybdgpd.workers.dev&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://Aimer@198.62.62.192:2083?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@91.217.139.139:666?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.91:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://29371b84-b4b8-4a74-8900-359d22484c09@152.70.99.180:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqjp.hnkkt.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_9
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.9.177.63:50000?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.26.182.49:9443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
trojan://Aimer@154.26.179.89:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
trojan://Aimer@154.26.182.49:9443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@47.79.36.165:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP
trojan://Aimer@156.229.164.148:443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
trojan://Aimer@119.194.117.229:50000?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@161.129.41.140:6352?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.21.82.84:54622?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
trojan://Aimer@23.169.184.125:25526?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
trojan://Aimer@188.164.159.98:2083?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.21.30.21:80?encryption=none&security=none&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=telegram-_-_-_-_-__-free_shekan-_-_-_-%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://29371b84-b4b8-4a74-8900-359d22484c09@146.235.208.162:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqjs.hnkkt.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
trojan://Aimer@3.124.196.164:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@91.217.139.139:666?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@47.79.86.103:587?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP
trojan://Aimer@23.169.184.28:13800?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
trojan://Aimer@47.91.18.127:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.21.30.21:80?encryption=none&security=none&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=telegram-_-_-_-_-__-free_shekan-_-_-_-%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://8334979f-2f04-4f49-8ead-bbceed373ecb@45.131.6.247:80?encryption=none&security=none&sni=esetsecuritylicense.roobdi.workers.dev&type=ws&host=esetsecuritylicense.roobdi.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://Aimer@35.155.38.149:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PDX
trojan://Aimer@18.153.94.168:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@91.149.239.234:443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
trojan://Aimer@35.167.93.200:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PDX
trojan://Aimer@35.81.207.167:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PDX
trojan://Aimer@210.100.215.99:18017?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@121.186.173.204:10022?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://636b1684-b26c-4a9c-bc6e-8e1197a36d74@104.21.40.164:8080?encryption=none&security=none&type=ws&host=workerr.hashdiler.workers.dev&path=%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://91d9b8d8-2aab-4e1a-9573-0d59e9cd7f8e@188.114.97.1:8880?encryption=none&security=none&sni=falcunargo-channel.be3374a836.workers.Dev&type=ws&host=falcunargo-channel.be3374a836.workers.Dev&path=%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://telegram-id-privatevpns@13.60.115.118:22222?security=tls&sni=trojan.burgerip.co.uk&allowInsecure=1&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_18
trojan://Aimer@23.94.211.148:443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SEA
trojan://Aimer@51.107.9.31:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ZRH
trojan://Aimer@3.75.149.151:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@45.147.50.154:443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@51.44.86.78:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#CDG
trojan://Aimer@116.49.95.50:8443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HKG
trojan://Aimer@45.155.121.169:443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
trojan://Aimer@185.204.109.190:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@116.49.95.50:8443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@45.67.215.96:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#RU
trojan://Aimer@92.53.190.161:2087?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@44.224.24.91:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PDX
vless://e927c61f-8a00-45a5-9d43-06ac4f1b8b0e@188.114.96.3:80?encryption=none&security=none&type=ws&host=VpNkenZo7.vpnKeNzO0.wORKerS.DeV&path=%2FQyAbjEiGvmffRF36%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://Aimer@3.73.124.222:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@40.233.70.7:8443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#YYZ
trojan://telegram-id-privatevpns@16.171.119.119:22222?security=tls&sni=trojan.burgerip.co.uk&allowInsecure=1&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_19
trojan://Aimer@51.116.121.75:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@51.44.86.78:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#CDG
vless://29371b84-b4b8-4a74-8900-359d22484c09@213.35.108.22:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqsg.hnkkt.com&type=tcp&headerType=none#GB_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_3
trojan://Aimer@3.64.205.189:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://telegram-id-privatevpns@18.195.183.157:22222?security=tls&sni=trojan.burgerip.co.uk&allowInsecure=1&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_4
trojan://Aimer@51.44.86.78:443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#CDG
trojan://Aimer@3.122.86.99:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@23.94.136.126:8080?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ORD
trojan://Aimer@103.137.63.3:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#TW
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://telegram-id-privatevpns@52.57.204.189:22222?security=tls&sni=trojan.burgerip.co.uk&allowInsecure=1&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_3
vless://dc580147-c87c-4527-bf90-192eb1cf62d1@172.67.163.189:8080?encryption=none&security=none&type=ws&host=stArt.siTEG52770.WorKeRS.deV&path=%2FV7zmCPZUuL2T1r5r%2FMC4wLjAuMA%3D%3D%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@52.40.102.162:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PDX
trojan://Aimer@91.193.5.121:8443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@154.197.64.252:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://29371b84-b4b8-4a74-8900-359d22484c09@130.162.163.216:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqgbs.hnkkt.com&type=tcp&headerType=none#NL_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@51.107.9.31:8443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ZRH
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=vkvd127.mycdn.me&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@35.181.77.67:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#CDG
trojan://Aimer@35.83.185.225:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PDX
trojan://Aimer@54.213.215.13:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PDX
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@154.197.64.206:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@45.147.50.154:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
trojan://Aimer@104.234.239.235:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@64.110.104.30:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=vkvd127.mycdn.me&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://91d9b8d8-2aab-4e1a-9573-0d59e9cd7f8e@188.114.97.1:8880?encryption=none&security=none&sni=falcunargo-channel.be3374a836.workers.Dev&type=ws&host=falcunargo-channel.be3374a836.workers.Dev&path=%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=45.76.0.86&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@78.135.110.152:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#IST
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@91.149.239.234:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@155.248.166.118:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=66.135.11.68&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.8:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#327_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://8334979f-2f04-4f49-8ead-bbceed373ecb@45.131.210.59:80?encryption=none&security=none&sni=esetsecuritylicense.roobdi.workers.dev&type=ws&host=esetsecuritylicense.roobdi.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@141.147.33.180:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=767w1-85dc0-9yjd.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#SE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@150.230.222.19:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP
vless://2d7c7aa5-364a-4dbb-937a-f8e4f5f73007@94.131.111.195:443?encryption=none&security=tls&sni=de4.connecton.surf&type=ws&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_23
trojan://Aimer@91.197.3.168:8443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#VNO
trojan://Aimer@89.248.207.37:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LED
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@46.254.93.211:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@3.132.116.250:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#CMH
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@176.105.253.98:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@188.93.140.11:443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#CPH
trojan://Aimer@77.238.236.134:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@8.218.26.21:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@47.237.10.53:4443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
trojan://Aimer@194.164.32.27:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@204.10.194.78:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=yfnl1.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_4
trojan://Aimer@45.86.229.28:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#MAD
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@144.24.206.147:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b2-9fr5232-96bh.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#GB_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@57.128.197.158:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.85.210.217:10913?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
trojan://Aimer@31.40.214.164:587?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@141.253.124.138:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b2-9fr2329-6bh.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#BE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@8.218.55.212:587?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@35.200.238.235:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#IN
trojan://Aimer@178.128.198.120:8443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.144.245.62:18556?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#617_%E5%86%B0%E5%B2%9B_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://Aimer@5.182.86.252:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#FRA
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@219.76.176.105:30106?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
trojan://Aimer@5.182.84.22:2096?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://Aimer@91.107.253.14:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#CDG
trojan://Aimer@91.107.253.14:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#CDG
trojan://Aimer@103.137.63.3:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#TW
trojan://Aimer@218.151.99.167:50000?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%B8%F0%9F%87%AA
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#IS_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://Aimer@167.68.5.248:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@198.62.62.75:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://Aimer@45.153.7.216:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@45.67.215.170:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#RU
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@130.250.137.107:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://4db82bff-0889-4320-8944-7b8d8ee66ff5@89.213.40.225:2333?security=tls&sni=www&allowInsecure=1&type=tcp&headerType=none#GB_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
trojan://Aimer@178.250.159.120:2053?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#WAW
trojan://Aimer@46.254.93.52:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@194.164.35.192:2053?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@198.62.62.171:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.85.210.234:25463?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
trojan://Aimer@213.109.205.55:2096?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@34.68.11.207:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ORD
vless://895b0f10-166a-4210-da52-4a78ceaadc19@alice.cmbaby.mom:35353?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.honda.co.jp&fp=safari&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&allowInsecure=1&type=tcp&headerType=none#%E9%A6%99%E6%B8%AF-Alice%20%E7%A7%BB%E5%8A%A8%E5%BF%AB%E4%B9%90
hysteria2://61351777-cc2a-4ced-8c98-609f8fd06380@alice.cmbaby.mom:34344?alpn=h3&insecure=1#%E9%A6%99%E6%B8%AF-Alice%20%E7%A7%BB%E5%8A%A8%E5%BF%AB%E4%B9%90%20HY2
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_87
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://d345d11e-c424-4583-b36e-527ab1f0afa4@104.18.10.128:2086?encryption=none&security=none&sni=v2raynselling.kir-rasol-kir.workers.dev&type=ws&host=v2raynselling.kir-rasol-kir.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_62
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_62
vless://29371b84-b4b8-4a74-8900-359d22484c09@168.138.165.109:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=dcpqsg.hnkkt.com&type=tcp&headerType=none#BR_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@46.32.184.187:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#VNO
trojan://Aimer@104.129.166.131:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@176.124.223.50:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://599a75ce-8ae6-4d4e-8cd6-057185919e57@5.75.169.154:4810?encryption=none&security=none&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_62
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@158.101.195.118:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=b295-23nl29-6bh.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#NL_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
trojan://Aimer@130.250.137.63:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@185.133.35.224:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#BR
trojan://Aimer@109.234.39.115:2053?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@141.11.86.109:8080?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#TW
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.241:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@135.84.76.105:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D135.84.76.105%3A443#US
trojan://Aimer@45.67.215.250:2096?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@188.164.159.185:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.218:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://wb6368@154.211.8.152:2053?security=tls&sni=hsdgbuys.pages.dev&alpn=h3&fp=randomized&type=ws&host=hsdgbuys.pages.dev&path=%2F%3Fed%3D2560#HK
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2FWG9SqpThFFMyTenz%3Fed%3D2560#457_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://Aimer@27.50.49.37:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://94d219c9-1afc-4d42-b090-8b3794764380@std1.loadingip.com:443?security=tls&allowInsecure=1&type=tcp&headerType=none#AU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.15:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#218_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_188
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_164
trojan://Aimer@46.254.93.52:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@192.0.54.7:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF19
trojan://Aimer@206.238.236.137:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.140:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@206.238.236.101:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#SG
vless://af8bc721-3510-480f-82ba-7b66b58f59ee@129.159.227.221:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=767w1-7kjd0-9kcf2.xn--4gq62f52gppi29k.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_10
trojan://5f7be901-1bb7-4cc5-9c7d-e33bd7e407ad@cmc3.5gsieuvip.vn:443?security=tls&allowInsecure=1&type=tcp&headerType=none#unKnow_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_3
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@8.213.237.199:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#TH
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.58:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF19
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@45.67.215.174:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D45.67.215.174%3A443#RU
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.187:2096?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@45.67.215.109:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#RU
vless://8334979f-2f04-4f49-8ead-bbceed373ecb@45.131.208.16:80?encryption=none&security=none&sni=esetsecuritylicense.roobdi.workers.dev&type=ws&host=esetsecuritylicense.roobdi.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@198.62.62.0:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.0.54.28:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D192.0.54.28%3A443#US
vless://828bcf3a-3502-4459-debd-192ebf39fb34@oracle.cmbaby.mom:22233?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.honda.co.jp&fp=safari&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&allowInsecure=1&type=tcp&headerType=none#%E6%96%B0%E5%8A%A0%E5%9D%A1-Oracle
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.4:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#333_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#%E4%BF%84%E7%BD%97%E6%96%AF%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://wb6368@103.116.7.103:2083?security=tls&sni=hsdgbuys.pages.dev&alpn=h3&fp=randomized&type=ws&host=hsdgbuys.pages.dev&path=%2F%3Fed%3D2560#JP
vless://b8a0fe1a-fbea-4572-a878-20b7f7c98636@104.16.178.96:80?encryption=none&security=none&type=ws&host=sweet-glade-2430-ppal03.xasev15708.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_3
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@194.76.18.10:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#KZ
trojan://Aimer@108.165.152.1:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@198.62.62.254:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2FWG9SqpThFFMyTenz%3Fed%3D2560#820_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://Aimer@108.165.152.202:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@69.84.182.104:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://Aimer@188.164.159.248:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@46.254.92.142:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@154.211.8.18:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
trojan://Aimer@5.182.85.189:2096?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.17:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#12_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@8.213.237.199:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D8.213.237.199%3A443#TH
trojan://Aimer@160.79.104.131:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@108.165.152.104:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.58:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D63.141.128.58%3A443#US
trojan://Aimer@103.116.7.230:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@192.0.54.221:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.94:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D63.141.128.94%3A443#US
trojan://wb6368@154.211.8.18:2083?security=tls&sni=hsdgbuys.pages.dev&alpn=h3&fp=randomized&type=ws&host=hsdgbuys.pages.dev&path=%2F%3Fed%3D2560#HK
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@194.76.18.122:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#KZ
trojan://Aimer@188.164.159.214:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@108.165.152.76:2096?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.13:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#13_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@212.183.88.14:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#AT
trojan://Aimer@92.243.74.2:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.9:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#50_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://Aimer@161.145.150.26:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.19:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#822_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://8334979f-2f04-4f49-8ead-bbceed373ecb@45.131.209.155:80?encryption=none&security=none&sni=esetsecuritylicense.roobdi.workers.dev&type=ws&host=esetsecuritylicense.roobdi.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF19
trojan://Aimer@46.254.93.37:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@160.79.105.109:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3Dmarambashi_marambashi%2F%3Fed%3D2560#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
trojan://Aimer@92.53.190.161:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@216.198.53.212:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.208:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.16.105.66:80?encryption=none&security=none&type=ws&host=plain-thunder-a1d0-ppal03.dakox63637.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://Aimer@188.164.159.55:2096?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@167.68.4.10:2096?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@167.68.4.223:2096?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@185.133.35.78:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D185.133.35.78%3A443#BR
trojan://Aimer@213.109.205.45:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@103.116.7.67:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@212.183.88.24:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D212.183.88.24%3A443#AT
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@160.79.105.124:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.14:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#386_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.52.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://Aimer@141.11.203.191:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.193:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://Aimer@199.34.228.50:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.3:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#768_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_33
trojan://Aimer@5.182.84.52:2083?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@5.182.85.189:2096?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@213.241.198.56:2083?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@135.84.76.152:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_33
trojan://Aimer@167.68.4.199:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@5.182.84.229:2087?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.200.160.83:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D192.200.160.83%3A443#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@135.84.76.110:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.0.54.18:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@185.18.250.12:80?encryption=none&security=none&type=ws&host=ana-SErVICe.xAbjCDZ.wORkErs.deV&path=%2F1Y6MN5DFV8zB82Ai%3Fed%3D2560#%E8%A5%BF%E7%8F%AD%E7%89%99%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://Aimer@209.208.227.79:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.254:2087?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
trojan://Aimer@188.164.159.248:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF19
trojan://Aimer@188.164.159.138:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@69.84.182.70:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://Aimer@188.164.159.25:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@103.116.7.100:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.200.160.114:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://2d7c7aa5-364a-4dbb-937a-f8e4f5f73007@94.131.111.195:443?encryption=none&security=tls&sni=de4.connecton.surf&type=ws&host=de4.connecton.surf&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_25
trojan://Aimer@5.182.84.52:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@27.50.48.239:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.18:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#92_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2F#93_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_164
trojan://Aimer@77.232.140.101:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@192.200.160.15:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@217.163.76.168:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D217.163.76.168%3A443#GB
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@198.62.62.9:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.10:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#194_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://Aimer@154.197.64.206:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@213.241.198.189:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@176.124.223.40:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@206.238.236.16:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@154.211.8.240:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@192.200.160.169:2096?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@216.24.57.207:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.102:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@135.84.76.105:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.6:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#52_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.235:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.206:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_65
trojan://Aimer@103.116.7.189:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@92.243.74.180:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@192.200.160.19:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@185.16.110.103:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#FR
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.172:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_13
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@130.250.137.161:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF4
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_3
vless://cdb15365-1ccb-4d5a-a5d9-6fb08d3c75ac@45.131.210.83:80?encryption=none&security=none&sni=mahdihector.kewojod243.workers.dev&type=ws&host=mahdihector.kewojod243.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E8%8D%B7%E5%85%B0%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://f47fb03f-7f15-41e0-bd7e-2371dc710e32@45.131.6.6:8080?encryption=none&security=none&sni=c00021he.ab7db0ab17.workers.dev&type=ws&host=c00021he.ab7db0ab17.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E8%8D%B7%E5%85%B0%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_188
trojan://Aimer@154.197.64.233:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.200.160.202:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://Aimer@154.197.64.240:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.0.63.208:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.16:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#94_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&sni=ru0195.alibabaokz.com&allowInsecure=1&type=tcp&headerType=none#%E4%BF%84%E7%BD%97%E6%96%AF19
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@130.250.137.161:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D130.250.137.161%3A443#US
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.207:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_61
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@212.183.88.186:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D212.183.88.186%3A443#AT
vless://8334979f-2f04-4f49-8ead-bbceed373ecb@45.131.211.129:80?encryption=none&security=none&sni=esetsecuritylicense.roobdi.workers.dev&type=ws&host=esetsecuritylicense.roobdi.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://38571ca6-6692-4559-b901-0bc5826b7661@ru0195.alibabaokz.com:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_164
trojan://Aimer@199.34.228.187:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@199.34.228.187:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.0:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#24_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://f47fb03f-7f15-41e0-bd7e-2371dc710e32@45.131.7.7:8080?encryption=none&security=none&sni=c00021he.ab7db0ab17.workers.dev&type=ws&host=c00021he.ab7db0ab17.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E8%8D%B7%E5%85%B0%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://cdb15365-1ccb-4d5a-a5d9-6fb08d3c75ac@45.131.209.84:80?encryption=none&security=none&sni=mahdihector.kewojod243.workers.dev&type=ws&host=mahdihector.kewojod243.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E8%8D%B7%E5%85%B0%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.207:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_150
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.249:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://Aimer@45.67.215.250:2096?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.207:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_14
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.210:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_166
trojan://Aimer@154.211.8.152:2053?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
trojan://Aimer@141.11.203.168:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@108.165.152.29:2096?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.200.160.3:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@217.163.76.195:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#GB
trojan://Aimer@31.43.179.27:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://8334979f-2f04-4f49-8ead-bbceed373ecb@45.131.209.40:80?encryption=none&security=none&sni=esetsecuritylicense.roobdi.workers.dev&type=ws&host=esetsecuritylicense.roobdi.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.210:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_166
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.200.160.83:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@194.76.18.99:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#KZ
trojan://Aimer@63.141.128.66:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@135.84.74.27:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@27.50.49.166:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.207:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_150
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.207:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_150
trojan://5f7be901-1bb7-4cc5-9c7d-e33bd7e407ad@103.173.66.192:443?security=tls&sni=cmc1.5gsieuvip.vn&allowInsecure=1&type=tcp&headerType=none#unKnow_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
trojan://Aimer@188.164.159.45:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.206:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_15
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.210:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_9
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.210:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_66
trojan://Aimer@176.53.144.206:8443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BDTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@8.218.26.21:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D8.218.26.21%3A443#HK
trojan://38571ca6-6692-4559-b901-0bc5826b7661@221.131.165.210:60194?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_166
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@47.239.114.185:2003?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.149.186.112:8080?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_74
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.64.35.129:80?encryption=none&security=none&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BDTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_33
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_36
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://Aimer@108.165.152.169:2087?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.52.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_36
trojan://5f7be901-1bb7-4cc5-9c7d-e33bd7e407ad@103.173.66.191:443?security=tls&allowInsecure=1&type=tcp&headerType=none#unKnow_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://b8a0fe1a-fbea-4572-a878-20b7f7c98636@104.24.254.125:80?encryption=none&security=none&type=ws&host=sweet-glade-2430-ppal03.xasev15708.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_36
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_8
vless://29371b84-b4b8-4a74-8900-359d22484c09@pq.hkt1.yydjc.top:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=download.globals-download.com&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_3
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.201.93.166:2454?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://468d811a-8540-4517-9779-0f542b5150d2@104.24.7.232:80?encryption=none&security=none&type=ws&host=mute-wood-561e-ppal.megiva7664.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@219.76.13.180:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@219.76.13.166:443?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
trojan://Aimer@52.41.218.4:443?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PDX
trojan://Aimer@103.116.7.103:2083?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@46.254.92.201:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@154.211.8.152:2053?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
trojan://Aimer@154.219.5.55:443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@104.129.166.131:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.209:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@160.79.104.195:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@45.67.215.18:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D45.67.215.18%3A443#RU
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@212.183.88.162:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#AT
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.200.160.214:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D192.200.160.214%3A443#US
vless://cdb15365-1ccb-4d5a-a5d9-6fb08d3c75ac@45.131.209.41:80?encryption=none&security=none&sni=mahdihector.kewojod243.workers.dev&type=ws&host=mahdihector.kewojod243.workers.dev&path=Telegram%40WangCai2%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@192.0.54.111:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@130.250.137.81:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#US
trojan://Aimer@154.197.64.104:8443?security=tls&sni=ngepx.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepx.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@199.34.228.143:2096?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@8.219.81.190:587?encryption=none&security=tls&sni=ngedp.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedp.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
trojan://Aimer@219.76.13.180:443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HKG
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@217.163.76.99:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#GB
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@45.67.215.11:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560#RU
trojan://Aimer@154.211.8.18:2083?security=tls&sni=ngepy.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepy.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@45.67.215.193:443?encryption=none&security=tls&sni=dmn.ylks.us.kg&alpn=h3&fp=random&type=ws&host=dmn.ylks.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D45.67.215.193%3A443#RU
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
