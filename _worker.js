
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
vless://55520747-311e-4015-83ce-be46e2060ce3@8.210.69.31:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#HK
vless://55520747-311e-4015-83ce-be46e2060ce3@61.239.234.5:35500?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#HK
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@103.44.255.81:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#CN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@150.109.24.233:6666?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@101.36.112.49:587?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.149.77.122:36822?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
trojan://Aimer@103.30.76.210:444?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HKG
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@101.32.40.116:8888?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.134.34.18:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@58.176.10.111:58443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://55520747-311e-4015-83ce-be46e2060ce3@61.239.234.5:35500?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.149.77.122:36822?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.198.104.113:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@119.202.158.65:29798?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#KR
trojan://Aimer@119.196.34.173:50000?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F#ICN
trojan://Aimer@83.229.123.36:8443?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HKG
vless://55520747-311e-4015-83ce-be46e2060ce3@211.218.223.130:30012?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@220.125.26.232:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@83.229.123.36:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@125.128.227.141:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@218.152.197.93:50000?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@183.102.181.112:50000?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@210.103.48.53:12601?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#KR
vless://55520747-311e-4015-83ce-be46e2060ce3@183.106.162.127:18888?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@221.149.132.232:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.22.140.62:12462?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@58.176.10.111:58443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
trojan://Aimer@220.125.26.232:50000?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@59.1.59.225:50000?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@210.103.48.53:12601?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
trojan://Aimer@210.222.30.180:17100?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@149.104.29.121:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://55520747-311e-4015-83ce-be46e2060ce3@114.30.225.88:50025?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.21.88.20:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@114.30.225.88:30030?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@121.176.175.54:32444?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@112.160.39.91:18008?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
trojan://Aimer@221.149.132.232:50000?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.31.113.72:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#JP
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@125.128.227.141:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.183.84.93:30001?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@114.30.225.88:30030?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
trojan://20a84ebf-9341-4f5f-8245-3975e2fdeee5@219.135.231.205:21019?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_5
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.140.88.118:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@211.105.35.130:30012?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.7.61.67:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@175.201.220.169:19222?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://77fcd69c-d54c-4d16-a373-57625c086c65@faculty.ucdavis.edu:443?encryption=none&security=tls&sni=faculty.ucdavis.edu&type=ws&host=jOin--Bede--mOsiV2.ir&path=%2F%40MOSIV2-%40MOSIV2-%40MOSIV2-%40MOSIV2-%40MOSIV2-%40MOSIV2%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_74
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@35.234.3.153:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#TW
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.19.241.230:10000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@58.176.95.46:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@23.165.40.54:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@183.106.162.127:18888?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@210.103.48.53:12601?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.140.88.118:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@118.47.65.248:30012?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.66.129.147:46741?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://20a84ebf-9341-4f5f-8245-3975e2fdeee5@219.135.231.205:21019?security=tls&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_16
trojan://Aimer@154.19.241.230:10000?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@162.159.38.101:2096?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@141.11.86.109:8080?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#TW
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.183.84.96:50022?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.21.93.44:6667?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.156.205.36:7777?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@172.82.16.99:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#US
trojan://Aimer@58.176.10.111:58443?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HKG
trojan://telegram-id-privatevpns@3.74.196.216:22222?security=tls&sni=trojan.burgerip.co.uk&allowInsecure=1&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_15
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@211.199.36.227:21273?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.183.84.94:30029?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.12.88.150:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.64.224.46:2181?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
trojan://Aimer@59.7.61.67:50000?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@162.159.44.235:2053?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.21.30.21:80?encryption=none&security=none&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=telegram-_-_-_-_-__-free_shekan-_-_-_-%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@38.22.91.158:30001?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@141.11.86.109:8080?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#TW
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.183.84.93:30001?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@91.217.139.169:587?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@101.36.112.49:587?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
trojan://Aimer@185.183.84.94:30029?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
trojan://Aimer@91.149.239.238:443?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.235:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@8.218.26.21:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_20
trojan://Aimer@185.51.246.121:2053?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@tgju.org:80?encryption=none&security=none&sni=a.xn--i-sx6a60i.us.kg.&type=ws&host=a.xn--i-sx6a60i.us.kg.&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_86
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@175.201.220.169:19222?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#KR
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_11
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@38.22.91.158:30001?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@47.238.149.120:9007?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.22.140.62:12462?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.1.59.225:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@121.176.175.54:32444?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#KR
vless://54694a33-a8dc-47dd-bc38-acd3971e0055@135.148.74.149:443?encryption=none&security=tls&sni=147135004002.sec20org.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_12
vless://e497da22-d020-40fb-a1fa-bc294066a2d2@104.20.129.2:80?encryption=none&security=none&sni=pormang.webhost99.workers.dev&type=ws&host=pormang.webhost99.workers.dev&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_24
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.156.205.36:7777?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@141.148.229.106:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#NL
vless://55520747-311e-4015-83ce-be46e2060ce3@141.145.205.115:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@188.253.6.210:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#TW
hysteria2://9bb452b106ffc217@207.148.22.93:443?obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@91.149.239.238:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.87.103.154:52001?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
hysteria2://9bb452b106ffc217@207.148.22.93:443?sni=207.148.22.93&obfs=salamander&obfs-password=cd29099d&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://df0680ca-e43c-498d-ed86-8e196eedd012@84.32.131.178:8880?encryption=none&security=none&type=grpc#LT_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://55520747-311e-4015-83ce-be46e2060ce3@129.159.84.71:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://e20ebe01-1815-4c09-8e77-fb2f168263ce@135.148.14.5:443?encryption=none&security=tls&sni=147135001178.sec22org.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_10
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@104.21.30.21:80?encryption=none&security=none&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=telegram-_-_-_-_-__-free_shekan-_-_-_-%2F%3Fed%3D2048#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://Aimer@45.87.103.154:52001?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HKG%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://55520747-311e-4015-83ce-be46e2060ce3@8.210.69.31:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@141.147.147.180:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#JP
vless://9e55e24c-8de9-4357-8a37-9cf1212c6491@mods.lnmarketplace.net:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=mods.lnmarketplace.net&alpn=h2&fp=randomized&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@138.2.36.157:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#JP
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://9e55e24c-8de9-4357-8a37-9cf1212c6491@mods.lnmarketplace.net:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=mods.lnmarketplace.net&alpn=h2&fp=randomized&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://55520747-311e-4015-83ce-be46e2060ce3@141.147.92.143:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#GB
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://9e55e24c-8de9-4357-8a37-9cf1212c6491@mods.lnmarketplace.net:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=mods.lnmarketplace.net&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_5
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.225.228:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.85.210.234:25463?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#PL
vless://df0680ca-e43c-498d-ed86-8e196eedd012@84.32.131.178:8880?encryption=none&security=none&type=grpc#LT_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://9e55e24c-8de9-4357-8a37-9cf1212c6491@mods.lnmarketplace.net:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=mods.lnmarketplace.net&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_4
vless://55520747-311e-4015-83ce-be46e2060ce3@141.147.92.143:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#GB
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.225.228:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.198.207.3:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.134.34.18:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@210.222.30.180:17100?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@182.226.53.214:30157?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#KR
vless://55520747-311e-4015-83ce-be46e2060ce3@132.145.53.55:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#GB
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
hysteria2://4e9ee29b39a28277@66.135.11.68:443?sni=wrmelmwxlf.gktevlrqznwqqozy.fabpfs66gizmnojhcvqxwl.kytrcfzqla87gvgvs6c7kjnrubuh.cc&obfs=salamander&obfs-password=13f7ba5f&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://2d7c7aa5-364a-4dbb-937a-f8e4f5f73007@94.131.111.195:443?encryption=none&security=tls&sni=de4.connecton.surf&type=ws&host=de4.connecton.surf&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_25
vless://df0680ca-e43c-498d-ed86-8e196eedd012@37.27.249.129:8880?encryption=none&security=none&type=grpc#IR_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://55520747-311e-4015-83ce-be46e2060ce3@129.159.84.71:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@152.70.57.182:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#NL
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.85.210.217:10913?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
vless://55520747-311e-4015-83ce-be46e2060ce3@140.238.218.65:2053?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#CH
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.204.91:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SE
vless://55520747-311e-4015-83ce-be46e2060ce3@140.238.218.65:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#CH
vless://55520747-311e-4015-83ce-be46e2060ce3@132.145.53.55:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#GB
vless://55520747-311e-4015-83ce-be46e2060ce3@141.145.205.115:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
trojan://Aimer@89.110.86.132:2053?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@183.102.181.112:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.198.3:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SE
vless://55520747-311e-4015-83ce-be46e2060ce3@129.159.84.71:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.198.207.3:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
vless://55520747-311e-4015-83ce-be46e2060ce3@132.145.53.55:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#GB
vless://55520747-311e-4015-83ce-be46e2060ce3@141.148.229.106:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#NL
vless://55520747-311e-4015-83ce-be46e2060ce3@140.238.218.65:2053?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#CH
vless://55520747-311e-4015-83ce-be46e2060ce3@140.238.218.65:2053?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#CH
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@221.149.132.232:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#KR
vless://9564b172-744e-45bb-a720-c1b3115def9d@217.61.63.148:37172?encryption=none&security=none&type=tcp&headerType=none#IT_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@tgju.org:80?encryption=none&security=none&sni=a.xn--i-sx6a60i.us.kg.&type=ws&host=a.xn--i-sx6a60i.us.kg.&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_13
vless://2d7c7aa5-364a-4dbb-937a-f8e4f5f73007@94.131.111.195:443?encryption=none&security=tls&sni=de4.connecton.surf&type=ws&host=de4.connecton.surf&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_91
trojan://Aimer@162.159.44.231:2053?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#LAX
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.16.10.143:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@43.198.104.113:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://55520747-311e-4015-83ce-be46e2060ce3@152.70.57.182:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#NL
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.144.245.62:18556?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#PL
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://2d7c7aa5-364a-4dbb-937a-f8e4f5f73007@94.131.111.195:443?encryption=none&security=tls&sni=de4.connecton.surf&type=ws&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_110
vless://55520747-311e-4015-83ce-be46e2060ce3@141.145.205.115:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
vless://55520747-311e-4015-83ce-be46e2060ce3@141.145.205.115:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.87.103.154:52001?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.238.74.193:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#PL
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@129.151.198.3:2053?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#SE
vless://9e55e24c-8de9-4357-8a37-9cf1212c6491@91.107.250.208:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=mods.lnmarketplace.net&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
vless://9e55e24c-8de9-4357-8a37-9cf1212c6491@91.107.250.208:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=mods.lnmarketplace.net&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_4
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%B8%F0%9F%87%AA
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@tgju.org:80?encryption=none&security=none&sni=a.xn--i-sx6a60i.us.kg.&type=ws&host=a.xn--i-sx6a60i.us.kg.&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_37
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.238.74.193:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
vless://55520747-311e-4015-83ce-be46e2060ce3@47.90.141.204:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://2d7c7aa5-364a-4dbb-937a-f8e4f5f73007@94.131.111.195:443?encryption=none&security=tls&sni=de4.connecton.surf&type=ws&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_23
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@176.105.253.98:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
vless://2d7c7aa5-364a-4dbb-937a-f8e4f5f73007@94.131.111.195:443?encryption=none&security=tls&sni=de4.connecton.surf&type=ws&host=de4.connecton.surf&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_112
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#IS_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
trojan://Aimer@58.176.95.46:443?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HKG
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=vkvd127.mycdn.me&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.198.3:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SE
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#IS_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoap
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.204.91:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SE
trojan://Aimer@91.193.5.121:8443?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F#FRA
vless://55520747-311e-4015-83ce-be46e2060ce3@152.70.57.182:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#NL
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.188.147.79:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#PL
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.85.210.217:10913?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#PL
vless://55520747-311e-4015-83ce-be46e2060ce3@160.79.104.181:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://9e55e24c-8de9-4357-8a37-9cf1212c6491@91.107.140.243:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=mods.lnmarketplace.net&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_3
vless://c834946b-c876-50a8-84ce-cad3cba8bd86@fastly.net:80?encryption=none&security=none&sni=PABLOO-MOSTAFA.COM&type=ws&host=PABLOO-MOSTAFA.COM&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_65
vless://a626abcf-b56e-4d3f-9067-1a3e76ee489a@join.isvvpn.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=isvvpn-57.com&type=ws&host=isvvpn-57.com&path=%2FVLESS%3Fed%3D80#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_63
vless://c834946b-c876-50a8-84ce-cad3cba8bd86@fastly.net:80?encryption=none&security=none&sni=PABLOO-MOSTAFA.COM&type=ws&host=PABLOO-MOSTAFA.COM&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_126
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.225.228:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
vless://c834946b-c876-50a8-84ce-cad3cba8bd86@faculty.ucdavis.edu:443?encryption=none&security=tls&sni=faculty.ucdavis.edu&type=ws&host=PABLOO-MOSTAFA.COM&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_138
vless://c834946b-c876-50a8-84ce-cad3cba8bd86@faculty.ucdavis.edu:443?encryption=none&security=tls&sni=faculty.ucdavis.edu&type=ws&host=PABLOO-MOSTAFA.COM&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_72
vless://7c478077-7fa2-4e7e-a2bd-d84f1b9e4075@elena.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=Join.ELiV2-RAY.ir&type=ws&host=Join.ELiV2-RAY.ir&path=%2FTelegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_54
vless://046fd332-80a6-43b0-91b0-7238a1dfc36c@199.232.214.133:443?encryption=none&security=tls&sni=wear.net&type=ws&host=aw036.ir&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_49
trojan://Aimer@45.134.21.8:2053?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#AMS
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_77
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_87
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@218.152.197.93:50000?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_136
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@121.173.188.183:12408?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://55520747-311e-4015-83ce-be46e2060ce3@212.183.88.136:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#AT
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#IS_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://31cd85f4-bd12-4866-da94-d48aa8c7d7d5@zmaoz.faculty.ucdavis.edu:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu.&type=ws&host=fonmelo.com&path=%2Folem%2Fws%3Fed%3D4096#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_157
vless://82d1f01d-6efc-49e2-823c-01dcc69cf5a3@nufilter.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=6.fidsxss1x.ir&type=ws&host=6.fidsxss1x.ir&path=%2Ftelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%3Fed%3D8080#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_120
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=vkvd127.mycdn.me&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://acfb8db7-fbc4-4aac-814d-ef73bd6ce72c@5.75.140.123:4810?encryption=none&security=none&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_7
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@fishlab.ucdavis.edu:443?encryption=none&security=tls&sni=fishlab.ucdavis.edu&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_58
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.204.91:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SE
vless://6d4ddb94-ebb6-4884-9711-00d0ca9d7dbe@fast.gambronservice.site:80?encryption=none&security=none&sni=game.baziha0098.ir&type=ws&host=game.baziha0098.ir&path=%2F%3Fed%3D2048#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_79
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@fishlab.ucdavis.edu:443?encryption=none&security=tls&sni=fishlab.ucdavis.edu&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_56
vless://55a1198e-a5e7-53cc-88fe-5d05382bc85e@elena.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=TG.ELiV2RAY.iR&type=ws&host=TG.ELiV2RAY.iR&path=%2FTelegram-ID-ELiV2RAY--Telegram-ID-ELiV2RAY--Telegram-ID-ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_137
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@join.vmessorg.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=JoinBede--vmessorg--vmessorg.iR&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_132
vless://31cd85f4-bd12-4866-da94-d48aa8c7d7d5@zmaoz.faculty.ucdavis.edu:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu.&type=ws&host=fonmelo.com&path=%2Folem%2Fws#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_97
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@151.101.2.165:80?encryption=none&security=none&sni=JoinBede--vmessorg--vmessorg.iR&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_131
vless://55a1198e-a5e7-53cc-88fe-5d05382bc85e@elena.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=TG.ELiV2RAY.iR&type=ws&host=TG.ELiV2RAY.iR&path=%2FTelegram-ID-ELiV2RAY--Telegram-ID-ELiV2RAY--Telegram-ID-ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_55
vless://31cd85f4-bd12-4866-da94-d48aa8c7d7d5@zmaoz.faculty.ucdavis.edu:443?encryption=none&security=tls&sni=zmaoz.faculty.ucdavis.edu.&type=ws&host=fonmelo.com&path=%2Folem%2Fws%3Fed%3D4096#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_83
vless://7c478077-7fa2-4e7e-a2bd-d84f1b9e4075@elena.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=Join.ELiV2-RAY.ir&type=ws&host=Join.ELiV2-RAY.ir&path=%2FTelegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_133
vless://7c478077-7fa2-4e7e-a2bd-d84f1b9e4075@elena.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=Join.ELiV2-RAY.ir&type=ws&host=Join.ELiV2-RAY.ir&path=%2FTelegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_128
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@join.vmessorg.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=JoinBede--vmessorg--vmessorg.iR&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_127
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVRHQGFuemh1b2FwayIsDQogICJhZGQiOiAicGxleC5jb20iLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJjYTM4NzU5Ny1kNzllLTQ4YzItODlhNy1lMmRjNjZhODhhNzAiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRlbGVncmFtLWlzdnZwbi5pciIsDQogICJwYXRoIjogIi9yYWNldnBuP3RlbGVncmFtLUBJU1Z2cG4tdGVsZWdyYW0tQElTVnZwbi10ZWxlZ3JhbS1ASVNWdnBuLXRlbGVncmFtLUBJU1Z2cG4iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAidGVsZWdyYW0taXN2dnBuLmlyIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://0ee358fe-8d55-445b-89d7-4ed76d58a515@151.101.194.165:80?encryption=none&security=none&sni=JoinBede-ELiV2-RAY.ir&type=ws&host=JoinBede-ELiV2-RAY.ir&path=%2FTelegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_153
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.237.92:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVRHQGFuemh1b2FwayIsDQogICJhZGQiOiAicGxleC5jb20iLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJjYTM4NzU5Ny1kNzllLTQ4YzItODlhNy1lMmRjNjZhODhhNzAiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInRlbGVncmFtLWlzdnZwbi5pciIsDQogICJwYXRoIjogIi9yYWNldnBuP3RlbGVncmFtLUBJU1Z2cG4tdGVsZWdyYW0tQElTVnZwbi10ZWxlZ3JhbS1ASVNWdnBuLXRlbGVncmFtLUBJU1Z2cG4iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAidGVsZWdyYW0taXN2dnBuLmlyIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@104.24.207.192:443?encryption=none&security=tls&sni=gozargah.validbv7996.ir&type=ws&host=gozargah.validbv7996.ir&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_60
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
trojan://Aimer@121.137.62.90:50000?security=tls&sni=ngepz.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepz.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://7c478077-7fa2-4e7e-a2bd-d84f1b9e4075@elena.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=Join.ELiV2-RAY.ir&type=ws&host=Join.ELiV2-RAY.ir&path=%2FTelegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_50
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@151.101.2.165:80?encryption=none&security=none&sni=JoinBede--vmessorg--vmessorg.iR&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_40
vless://82d1f01d-6efc-49e2-823c-01dcc69cf5a3@nufilter.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=6.fidsxss1x.ir&type=ws&host=6.fidsxss1x.ir&path=%2Ftelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%3Fed%3D8080#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_125
vless://82d1f01d-6efc-49e2-823c-01dcc69cf5a3@nufilter.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=6.fidsxss1x.ir&type=ws&host=6.fidsxss1x.ir&path=%2Ftelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%3Fed%3D8080#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_39
vless://0ee358fe-8d55-445b-89d7-4ed76d58a515@151.101.194.165:80?encryption=none&security=none&sni=JoinBede-ELiV2-RAY.ir&type=ws&host=JoinBede-ELiV2-RAY.ir&path=%2FTelegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_152
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_176
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@154.218.15.250:2083?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://0ee358fe-8d55-445b-89d7-4ed76d58a515@151.101.194.165:80?encryption=none&security=none&sni=JoinBede-ELiV2-RAY.ir&type=ws&host=JoinBede-ELiV2-RAY.ir&path=%2FTelegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_75
vless://55a1198e-a5e7-53cc-88fe-5d05382bc85e@elena.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=TG.ELiV2RAY.iR&type=ws&host=TG.ELiV2RAY.iR&path=%2FTelegram-ID-ELiV2RAY--Telegram-ID-ELiV2RAY--Telegram-ID-ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_67
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://0ee358fe-8d55-445b-89d7-4ed76d58a515@151.101.194.165:80?encryption=none&security=none&sni=JoinBede-ELiV2-RAY.ir&type=ws&host=JoinBede-ELiV2-RAY.ir&path=%2FTelegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY--Telegram-ID-%40ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_85
vless://55520747-311e-4015-83ce-be46e2060ce3@47.90.141.204:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@146.56.155.102:20003?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@tgju.org:80?encryption=none&security=none&sni=a.xn--i-sx6a60i.us.kg.&type=ws&host=a.xn--i-sx6a60i.us.kg.&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_14
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080%2Ftelegram%40v2ray_alpha#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_84
trojan://94d219c9-1afc-4d42-b090-8b3794764380@std1.loadingip.com:443?security=tls&allowInsecure=1&type=tcp&headerType=none#AU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
trojan://94d219c9-1afc-4d42-b090-8b3794764380@std1.loadingip.com:443?security=tls&allowInsecure=1&type=tcp&headerType=none#AU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3Dmarambashi_marambashi%2F%3Fed%3D2560#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_12
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVRHQGFuemh1b2FwayIsDQogICJhZGQiOiAiMTA0LjE5LjQ4LjIzNiIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogImU2NTQzMzE5LTA1NzQtNDJhYy1iNzc4LTFjNDMyNWQ2MjZmNSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiY2h1bmNodWFuLmtlaml4aWFvcWk2NjYuc3RvcmUiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImNodW5jaHVhbi5rZWppeGlhb3FpNjY2LnN0b3JlIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.235:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_53
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNOX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVRHQGFuemh1b2FwayIsDQogICJhZGQiOiAiNTAwMzIuYmFpZHUtY2RuLnRvcCIsDQogICJwb3J0IjogIjUwMDMyIiwNCiAgImlkIjogImIyMjIwODRmLTc5OTMtNDUxOC1hOTQwLWIxZmRhYzE0Njk5NSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@212.183.88.176:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#AT
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNOX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVRHQGFuemh1b2FwayIsDQogICJhZGQiOiAiNTAwMDMuYmFpZHUtY2RuLnRvcCIsDQogICJwb3J0IjogIjUwMDAzIiwNCiAgImlkIjogIjcyMmVlNjYwLWNhNTctNDY3Zi05ZWRhLTU3Mzk4NTkyMTJmOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://25b8f4b0-4f7d-400f-bc4a-f10e5b8796a2@151.101.66.133:443?encryption=none&security=tls&sni=anchor.fm&type=ws&host=magdl.ir&path=%2Fstream%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_62
trojan://94d219c9-1afc-4d42-b090-8b3794764380@36.50.135.142:443?security=tls&sni=bs1.loadingip.com&allowInsecure=1&type=tcp&headerType=none#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_22
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@130.250.137.19:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#US
trojan://94d219c9-1afc-4d42-b090-8b3794764380@std1.loadingip.com:443?security=tls&allowInsecure=1&type=tcp&headerType=none#AU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@www.speedtest.net:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2FTelegram%40v2ray_alpha%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_35
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@94.250.246.200:8080?encryption=none&security=tls&sni=a.mifeng.us.kg&type=ws&host=a.mifeng.us.kg&path=%2F%3Fed%3D2560#617_%E5%86%B0%E5%B2%9B_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVRHQGFuemh1b2FwayIsDQogICJhZGQiOiAiMTA0LjE5LjQ4LjIzNiIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogImU2NTQzMzE5LTA1NzQtNDJhYy1iNzc4LTFjNDMyNWQ2MjZmNSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiY2h1bmNodWFuLmtlaml4aWFvcWk2NjYuc3RvcmUiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImNodW5jaHVhbi5rZWppeGlhb3FpNjY2LnN0b3JlIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.19:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#822_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://a626abcf-b56e-4d3f-9067-1a3e76ee489a@151.101.194.133:443?encryption=none&security=tls&sni=mio.splashthat.com&type=ws&host=isvvpn-57.com&path=%2FVLESS%3Fed%3D2048%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn----%40Evay_vpn#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_59
vless://7369f7f0-3448-4064-86f1-d04be26c635b@hajlab.ucdavis.edu:443?encryption=none&security=tls&sni=hajlab.ucdavis.edu&type=ws&host=joinshhproxybedeeeeeee.ir&path=%2F%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy----%40Shh_Proxy%3Fed%3D2048#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_73
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.144.245.62:18556?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@45.85.210.234:25463?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@185.188.147.79:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#PL
vless://55520747-311e-4015-83ce-be46e2060ce3@192.0.54.18:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@104.16.132.207:443?encryption=none&security=tls&sni=gozargah.validbv7996.ir&type=ws&host=gozargah.validbv7996.ir&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_48
vless://e497da22-d020-40fb-a1fa-bc294066a2d2@104.20.129.2:80?encryption=none&security=none&sni=pormang.webhost99.workers.dev&type=ws&host=pormang.webhost99.workers.dev&path=%2F%3Fed%3D2560%2Ftelegram%40v2ray_alpha#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_16
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.192:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@www.speedtest.net:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_38
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@104.17.147.22:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_7
vless://55520747-311e-4015-83ce-be46e2060ce3@185.16.110.111:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
vless://55520747-311e-4015-83ce-be46e2060ce3@192.200.160.99:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.241:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#US
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@www.speedtest.net:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2Ftelegram%40v2ray_alpha%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_81
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@www.speedtest.net:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2FLwW5jwrnymnOdqki%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_4
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.49.37:2053?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@135.84.76.105:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@61.239.234.5:35500?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D61.239.234.5%3A35500#HK
vless://55520747-311e-4015-83ce-be46e2060ce3@45.67.215.98:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#RU
vless://55520747-311e-4015-83ce-be46e2060ce3@160.79.105.233:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://b8a0fe1a-fbea-4572-a878-20b7f7c98636@104.16.178.96:80?encryption=none&security=none&type=ws&host=sweet-glade-2430-ppal03.xasev15708.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://55520747-311e-4015-83ce-be46e2060ce3@192.0.54.0:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.9:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#50_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://dfb6f849-e7d7-4994-80f7-1bd19b593a2a@172.66.168.199:443?encryption=none&security=tls&sni=Uk-FuLl.pRIvAteiP.nET&type=ws&host=Uk-FuLl.pRIvAteiP.nET&path=%2FVLESS#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_31
vless://55520747-311e-4015-83ce-be46e2060ce3@45.67.215.109:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#RU
vless://55520747-311e-4015-83ce-be46e2060ce3@45.67.215.117:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#RU
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@92.60.74.100:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048#IT_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.192:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://55520747-311e-4015-83ce-be46e2060ce3@212.183.88.231:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#AT
vless://55520747-311e-4015-83ce-be46e2060ce3@217.163.76.99:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#GB
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@92.243.74.23:2096?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@63.141.128.163:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@63.141.128.177:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@join.my.telegram.channel.cmliussss.to.unlock.more.premium.nodes.cf.090227.xyz:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93%20TG%40anzhuoapk%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
vless://55520747-311e-4015-83ce-be46e2060ce3@212.183.88.200:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#AT
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@92.60.74.100:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#IT_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_4
vless://55520747-311e-4015-83ce-be46e2060ce3@217.163.76.102:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#GB
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.6:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#52_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@join.my.telegram.channel.cmliussss.to.unlock.more.premium.nodes.cf.090227.xyz:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560%26proxyip%3Dproxyip.us.fxxk.dedyn.io#US
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_3
vless://55520747-311e-4015-83ce-be46e2060ce3@160.79.104.254:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@63.141.128.122:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@104.17.147.22:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_26
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.49.224:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@185.133.35.99:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#BR
vless://55520747-311e-4015-83ce-be46e2060ce3@141.148.203.6:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#IN
vless://55520747-311e-4015-83ce-be46e2060ce3@45.67.215.0:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#RU
vless://55520747-311e-4015-83ce-be46e2060ce3@206.238.237.243:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@185.133.35.99:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#BR
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.13:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#13_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2FWG9SqpThFFMyTenz%3Fed%3D2560#457_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@141.11.78.77:8080?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://77fcd69c-d54c-4d16-a373-57625c086c65@zula.ir:8080?encryption=none&security=none&sni=seyyed.webdade.ip-ddns.com&type=ws&host=seyyed.webdade.ip-ddns.com&path=%2Ftelegram---VPNCUSTOMIZE--telegram--VPNCUSTOMIZE--telegram--VPNCUSTOMIZE--telegram--VPNCUSTOMIZE--telegram----VPNCUSTOMIZE%3Fed%3D2048#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_36
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.37:2096?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@59.23.141.222:19014?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#KR
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@92.60.74.100:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#IT_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.3:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#768_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://82d1f01d-6efc-49e2-823c-01dcc69cf5a3@nufilter.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=6.fidsxss1x.ir&type=ws&host=6.fidsxss1x.ir&path=%2Ftelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%2Ctelegram-NUFiLTER%3Fed%3D8080#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_66
vless://55520747-311e-4015-83ce-be46e2060ce3@45.67.215.212:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#RU
vless://e497da22-d020-40fb-a1fa-bc294066a2d2@104.20.129.2:80?encryption=none&security=none&sni=pormang.webhost99.workers.dev&type=ws&host=pormang.webhost99.workers.dev&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_13
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@38.6.219.16:8080?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
vless://55520747-311e-4015-83ce-be46e2060ce3@216.24.57.98:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.18:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#92_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@duke.ns.cloudflare.com:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.218:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D63.141.128.218%3A443#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.29:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@63.141.128.58:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@141.148.203.6:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#IN
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.134:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@104.17.147.22:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.48.115:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@141.148.203.6:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#IN
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.17:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#12_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.49.74:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.4:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#333_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.49.224:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@104.16.132.207:443?encryption=none&security=tls&sni=gozargah.validbv7996.ir&type=ws&host=gozargah.validbv7996.ir&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_96
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@149.104.29.121:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@92.243.74.23:2096?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@130.250.137.161:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D130.250.137.161%3A443#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@damien.ns.cloudflare.com:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://55520747-311e-4015-83ce-be46e2060ce3@212.183.88.94:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#AT
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_88
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@185.133.35.30:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#BR%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_3
vless://e497da22-d020-40fb-a1fa-bc294066a2d2@104.20.129.2:80?encryption=none&security=none&sni=pormang.webhost99.workers.dev&type=ws&host=pormang.webhost99.workers.dev&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_19
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.235:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_46
vless://55520747-311e-4015-83ce-be46e2060ce3@185.133.35.99:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#BR
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.209:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D63.141.128.209%3A443#US
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@190.93.244.221:443?encryption=none&security=tls&sni=gozargah.validbv7996.ir&type=ws&host=gozargah.validbv7996.ir&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_95
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@103.30.76.210:444?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@61.239.234.5:35500?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#HK
vless://03c9f240-0bad-4f71-93f2-f5d272dada97@104.24.184.113:80?encryption=none&security=none&sni=sparkling-limit-ppal03.yibijow194.workers.dev&type=ws&host=sparkling-limit-ppal03.yibijow194.workers.dev&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_56
vless://a626abcf-b56e-4d3f-9067-1a3e76ee489a@151.101.194.133:443?encryption=none&security=tls&sni=mio.splashthat.com&type=ws&host=isvvpn-57.com&path=%2FVLESS%3Fed%3D2048#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_62
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.235:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_90
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@212.183.88.24:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D212.183.88.24%3A443#AT
hysteria2://1f17cdf0578a2860@45.76.0.86:443?obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.209:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#US
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@tgju.org:80?encryption=none&security=none&sni=a.xn--i-sx6a60i.us.kg.&type=ws&host=a.xn--i-sx6a60i.us.kg.&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_29
ss://YWVzLTEyOC1nY206ZTJjNjJhNzMtMzEzMi00OGE2LWEwMjAtMjVjM2FlMGQ4YWYy@cu1.guguyun.xyz:23733#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_11
ss://YWVzLTEyOC1nY206ZTJjNjJhNzMtMzEzMi00OGE2LWEwMjAtMjVjM2FlMGQ4YWYy@bj.xissyun.com:46595#CN_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_23
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.0:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#24_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_92
vless://ea286109-d20f-415e-849e-4af20ab04b65@47.251.95.178:443?encryption=none&security=tls&sni=147135001195.sec22org.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_18
hysteria2://18240b2dfdd76484@70.34.207.153:443?obfs=salamander&obfs-password=d2648ec2&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
trojan://Aimer@59.23.141.222:19014?security=tls&sni=ngepo.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=randomized&type=ws&host=ngepo.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#ICN
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_36
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080%2Ftelegram%40v2ray_alpha#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_94
vless://b489cc27-6056-48bb-891e-de437658d519@185.143.233.5:80?encryption=none&security=none&sni=nim-f6a8e4b837-sh.apps.ir-central1.arvancaas.ir&type=ws&host=nim-f6a8e4b837-sh.apps.ir-central1.arvancaas.ir&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_29
vless://55520747-311e-4015-83ce-be46e2060ce3@8.210.69.31:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#HK
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.52.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@pranab.ns.cloudflare.com:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_33
vless://bf050647-1f57-5794-9144-ec6fb9123d73@104.17.147.22:2052?encryption=none&security=none&sni=sPeedtest2.sbs.uk2.vless.sitespeedtest.net&type=ws&host=sPeedtest2.sbs.uk2.vless.sitespeedtest.net&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_7
vless://e497da22-d020-40fb-a1fa-bc294066a2d2@104.20.129.2:80?encryption=none&security=none&sni=pormang.webhost99.workers.dev&type=ws&host=pormang.webhost99.workers.dev&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_62
vless://55520747-311e-4015-83ce-be46e2060ce3@8.213.237.199:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@38.6.219.16:8080?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_36
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3D2048fp%3Dios#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_15
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@join.vmessorg.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=JoinBede--vmessorg--vmessorg.iR&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_68
vless://55520747-311e-4015-83ce-be46e2060ce3@8.213.237.199:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@151.101.2.165:80?encryption=none&security=none&sni=JoinBede--vmessorg--vmessorg.iR&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_69
vless://e497da22-d020-40fb-a1fa-bc294066a2d2@104.20.129.2:80?encryption=none&security=none&sni=pormang.webhost99.workers.dev&type=ws&host=pormang.webhost99.workers.dev&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_26
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_74
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_36
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@tgju.org:80?encryption=none&security=none&sni=a.xn--i-sx6a60i.us.kg.&type=ws&host=a.xn--i-sx6a60i.us.kg.&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_33
vless://55520747-311e-4015-83ce-be46e2060ce3@114.30.225.88:50025?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@223.16.138.113:12457?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#HK
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_8
vless://07f0b3e7-81c3-46e8-a6af-32cc02e1feb2@173.245.59.132:2053?encryption=none&security=tls&sni=holze.gt-ov.com&type=ws&host=holze.gt-ov.com&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_14
vless://55520747-311e-4015-83ce-be46e2060ce3@114.30.225.88:30030?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KR
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVRHQGFuemh1b2FwayIsDQogICJhZGQiOiAiMTA0LjE5LjQ4LjIzNiIsDQogICJwb3J0IjogIjgwIiwNCiAgImlkIjogImU2NTQzMzE5LTA1NzQtNDJhYy1iNzc4LTFjNDMyNWQ2MjZmNSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiY2h1bmNodWFuLmtlaml4aWFvcWk2NjYuc3RvcmUiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogImNodW5jaHVhbi5rZWppeGlhb3FpNjY2LnN0b3JlIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://b8a0fe1a-fbea-4572-a878-20b7f7c98636@104.24.254.125:80?encryption=none&security=none&type=ws&host=sweet-glade-2430-ppal03.xasev15708.workers.dev&path=%2FProxyIP%3DProxyIP.US.fxxk.dedyn.io#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080%2Ftelegram%40v2ray_alpha#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_31
vless://55520747-311e-4015-83ce-be46e2060ce3@8.213.237.199:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@ignacio.ns.cloudflare.com:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080%2Ftelegram%40v2ray_alpha#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_15
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@tgju.org:80?encryption=none&security=none&sni=a.xn--i-sx6a60i.us.kg.&type=ws&host=a.xn--i-sx6a60i.us.kg.&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_87
vless://e497da22-d020-40fb-a1fa-bc294066a2d2@104.20.129.2:80?encryption=none&security=none&sni=pormang.webhost99.workers.dev&type=ws&host=pormang.webhost99.workers.dev&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_63
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.52.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://ab1d1d10-5d26-4bc9-8476-350d205bde28@172.66.168.200:443?encryption=none&security=tls&sni=UK1-vLEss.greenSSH.ORg&type=ws&host=UK1-vLEss.greenSSH.ORg&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_108
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.52.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_104
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%28%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk%29
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@162.159.44.78:2096?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#US
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_32
vless://67238099-4772-54a5-9756-c5b44fb67dec@www.speedtest.net:2052?encryption=none&security=none&sni=sPeedtest2.sbs.lv1.v2vless.sitespeedtest.net&type=ws&host=sPeedtest2.sbs.lv1.v2vless.sitespeedtest.net&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_143
vless://77fcd69c-d54c-4d16-a373-57625c086c65@join.vpncustomize.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=JoinBede--VPNCUSTOMIZE--VPNCUSTOMIZE.ir&type=ws&host=JoinBede--VPNCUSTOMIZE--VPNCUSTOMIZE.ir&path=%2Ftelegram-VPNCUSTOMIZE--telegram-VPNCUSTOMIZE--telegram---VPNCUSTOMIZE--telegram---VPNCUSTOMIZE--telegram---VPNCUSTOMIZE%3Fed%3D2048#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_48
vless://58d956eb-da55-534b-937a-a046db7afa30@104.17.148.22:2052?encryption=none&security=none&sni=sPeedtest2.sbs.uk1.vless.sitespeedtest.net&type=ws&host=sPeedtest2.sbs.uk1.vless.sitespeedtest.net&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_107
vless://ab1d1d10-5d26-4bc9-8476-350d205bde28@cdnjs.com:443?encryption=none&security=tls&sni=UK1-vLEss.greenSSH.ORg&type=ws&host=UK1-vLEss.greenSSH.ORg&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_64
vless://054d503d-4748-47a6-8118-71a96c51f2d9@172.66.168.197:443?encryption=none&security=tls&sni=Nl2-FulL.PrIvAteiP.NeT&type=ws&host=Nl2-FulL.PrIvAteiP.NeT&path=%2FVLESS#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_113
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@fishlab.ucdavis.edu:443?encryption=none&security=tls&sni=fishlab.ucdavis.edu&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_135
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNOX1x1NjZGNFx1NTkxQVx1Nzk4Rlx1NTIyOVRHQGFuemh1b2FwayIsDQogICJhZGQiOiAiNTAwMDMuYmFpZHUtY2RuLnRvcCIsDQogICJwb3J0IjogIjUwMDAzIiwNCiAgImlkIjogIjcyMmVlNjYwLWNhNTctNDY3Zi05ZWRhLTU3Mzk4NTkyMTJmOSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAidGNwIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIiIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://f8f1763f-2411-4170-903d-0ad30a49d1c5@172.66.168.199:443?encryption=none&security=tls&sni=Ca-FuLL.PRiVAteiP.neT&type=ws&host=Ca-FuLL.PRiVAteiP.neT&path=%2FVLESS#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_97
vless://55520747-311e-4015-83ce-be46e2060ce3@8.213.237.199:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://054d503d-4748-47a6-8118-71a96c51f2d9@172.66.168.197:443?encryption=none&security=tls&sni=Nl2-FulL.PrIvAteiP.NeT&type=ws&host=Nl2-FulL.PrIvAteiP.NeT&path=%2FVLESS#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_53
vless://c834946b-c876-50a8-84ce-cad3cba8bd86@fastly.net:80?encryption=none&security=none&sni=PABLOO-MOSTAFA.COM&type=ws&host=PABLOO-MOSTAFA.COM&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_121
vless://dfb6f849-e7d7-4994-80f7-1bd19b593a2a@172.66.168.199:443?encryption=none&security=tls&sni=Uk-FuLl.pRIvAteiP.nET&type=ws&host=Uk-FuLl.pRIvAteiP.nET&path=%2FVLESS#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_134
vless://55520747-311e-4015-83ce-be46e2060ce3@141.148.229.106:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#NL
vless://55a1198e-a5e7-53cc-88fe-5d05382bc85e@elena.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=TG.ELiV2RAY.iR&type=ws&host=TG.ELiV2RAY.iR&path=%2FTelegram-ID-ELiV2RAY--Telegram-ID-ELiV2RAY--Telegram-ID-ELiV2RAY#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_139
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@151.101.2.165:80?encryption=none&security=none&sni=JoinBede--vmessorg--vmessorg.iR&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_167
vless://ab1d1d10-5d26-4bc9-8476-350d205bde28@172.66.168.200:443?encryption=none&security=tls&sni=UK1-vLEss.greenSSH.ORg&type=ws&host=UK1-vLEss.greenSSH.ORg&path=%2Fvless#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_33
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_41
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@219.76.13.177:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://54694a33-a8dc-47dd-bc38-acd3971e0055@135.148.74.150:443?encryption=none&security=tls&sni=147135004002.sec20org.com&type=tcp&headerType=none#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_6
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@219.76.13.180:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#HK
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_45
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.64.35.129:80?encryption=none&security=none&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BDTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.198.3:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SE
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BD%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk
vless://c834946b-c876-50a8-84ce-cad3cba8bd86@fastly.net:80?encryption=none&security=none&sni=PABLOO-MOSTAFA.COM&type=ws&host=PABLOO-MOSTAFA.COM&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_44
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.225.228:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
vless://ab220255-90f4-4b32-8526-3e1fce0e3523@join.vmessorg.fastly80-3.hosting-ip.com:80?encryption=none&security=none&sni=JoinBede--vmessorg--vmessorg.iR&type=ws&host=JoinBede--vmessorg--vmessorg.iR&path=%2F%40vmessorg----%40vmessorg-----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg----%40vmessorg%3Fed%3D2480#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_71
trojan://3774827088566296576@flying-tuna.treefrog761.one:443?security=tls&sni=flying-tuna.treefrog761.one&allowInsecure=1&type=tcp&headerType=none#SG_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_1
vless://55520747-311e-4015-83ce-be46e2060ce3@141.147.92.143:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#GB
vless://55520747-311e-4015-83ce-be46e2060ce3@129.151.198.3:8443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SE
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_33
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@172.67.27.46:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#%E7%BE%8E%E5%9B%BDTG%E6%90%9C%40anzhuoapk%20%E6%AF%8F%E5%A4%A9%E6%9B%B4%E6%96%B0%20%E7%A6%8F%E5%88%A9%E4%B8%8D%E6%96%AD
vless://acfb8db7-fbc4-4aac-814d-ef73bd6ce72c@d6.vixsm.ir:4810?encryption=none&security=none&type=tcp&headerType=none#DE_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_6
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@135.84.76.115:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#US
vless://55520747-311e-4015-83ce-be46e2060ce3@202.37.33.80:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#NZ
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@63.141.128.58:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@219.76.13.177:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.237.92:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@212.183.88.24:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#AT
vless://55520747-311e-4015-83ce-be46e2060ce3@63.141.128.218:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@192.200.160.26:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@192.0.54.104:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@www.speedtest.net:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2FLwW5jwrnymnOdqki%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_9
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.49.242:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3Dmarambashi_marambashi%2F%3Fed%3D2560#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_4
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@192.0.54.235:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_89
vless://55520747-311e-4015-83ce-be46e2060ce3@185.16.110.103:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#FR
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@kip.ns.cloudflare.com:443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.52.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_100
vless://55520747-311e-4015-83ce-be46e2060ce3@160.79.104.116:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@206.238.236.29:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
hysteria2://1f17cdf0578a2860@45.76.0.86:443?sni=45.76.0.86&obfs=salamander&obfs-password=4b817757&insecure=1#%F0%9F%87%BA%F0%9F%87%B8
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.49.209:2087?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@206.238.236.166:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@135.84.76.115:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@join.my.telegram.channel.cmliussss.to.unlock.more.premium.nodes.cf.090227.xyz:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3DMARAMBASHI_MARAMBASHI%2F%3Fed%3D2560#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_13
vless://55520747-311e-4015-83ce-be46e2060ce3@216.24.57.108:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@216.24.57.113:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@216.221.213.189:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.48.61:2083?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#SG
vless://b5cdabf0-e048-4fa2-90da-9379b1a4926e@104.22.53.235:80?encryption=none&security=none&sni=cc.ailicf.us.kg&type=ws&host=cc.ailicf.us.kg&path=%2Fb5cdabf0-e04#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9%E8%AF%B7%E6%90%9Chttps%3A%2F%2Ft.me%2Fanzhuoapk_33
vless://55520747-311e-4015-83ce-be46e2060ce3@212.183.88.186:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#AT
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@27.50.49.156:2096?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F%3Fed%3D2560#SG
vless://55520747-311e-4015-83ce-be46e2060ce3@160.79.105.85:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@104.17.147.22:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2F#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_93
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.8:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#327_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://cf3df05c-bb63-427a-b48a-d8b1d9ada2c4@156.255.90.175:8443?encryption=none&security=tls&sni=ngedc.ambercc.filegear-sg.me&alpn=http%2F1.1&fp=random&type=ws&host=ngedc.ambercc.filegear-sg.me&path=%2F#HK
vless://41abecd9-8096-4142-a75c-4e1d36d990bd@46.254.92.33:443?encryption=none&security=tls&sni=mmdserver.us.kg&type=ws&host=mmdserver.us.kg&path=%2F%3Fed%3Dmarambashi_marambashi%2F%3Fed%3D2560#RU_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_2
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@www.speedtest.net:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2Ftelegram%40v2ray_alpha%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_5
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2F#93_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_76
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@104.17.147.22:2052?encryption=none&security=none&sni=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&type=ws&host=freev2rng---freev2rng---freev2rng---freev2rng---freev2rng.s88p4jh.workers.dev&path=%2FWG9SqpThFFMyTenz%3Fed%3D2560#820_%E7%BE%8E%E5%9B%BD_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://42f36835-730c-4ecc-9daf-20121ae7ba47@104.16.252.47:443?encryption=none&security=tls&sni=gozargah.validbv7996.ir&type=ws&host=gozargah.validbv7996.ir&path=%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_155
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@185.16.110.107:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&alpn=h3&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560%26proxyip%3D185.16.110.107%3A443#FR
vless://55520747-311e-4015-83ce-be46e2060ce3@63.141.128.193:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#US
vless://55520747-311e-4015-83ce-be46e2060ce3@45.67.215.242:443?encryption=none&security=tls&sni=re.vs2024.us.kg&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#RU
vless://dfc1a9ab-6241-4b73-92f7-b299fc6b7751@104.26.12.101:2052?encryption=none&security=none&sni=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&type=ws&host=Yak-Khanda-kUn-eY-gUL.biNG.com.xn--cR8HaaaAaAAAaAaaAaAaAAaAAaaaAAAAAaAaaAaaaAaaaaAAaaAAAaaaaAa.xN--Cr8hAaAaaAaaAAAAAAaaaAAAaAAaaAaAaAAAAAA.TREPAspeEdTEsT.NEtrag.cOm.PX.Com.sh017.IR.XN--Cr8hAaaAaaAaaAaaaAAAaaaAaaAaaaAaAAAaaaA.yek.dDnS-ip.nEt&path=%2F%3Fed%3D1080#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_10
vless://06e4425e-a8cb-4b63-929f-2105604ab0a9@212.183.88.43:443?encryption=none&security=tls&sni=zz.bgm2024.us.kg&fp=random&type=ws&host=zz.bgm2024.us.kg&path=%2F%3Fed%3D2560#AT
vless://64d39d67-62dc-470c-a592-1d5a6ee87cb5@45.159.218.15:80?encryption=none&security=none&sni=worker-flat-disk-100d.b9563f65aef681.workers.dev&type=ws&host=worker-flat-disk-100d.b9563f65aef681.workers.dev&path=%2F#218_%E8%8D%B7%E5%85%B0_%E7%94%B5%E6%8A%A5%E6%90%9C%E7%B4%A2%40anzhuoapk
vless://55520747-311e-4015-83ce-be46e2060ce3@194.76.18.99:443?encryption=none&security=tls&sni=re.vs2024.us.kg&alpn=h3&fp=random&type=ws&host=re.vs2024.us.kg&path=%2F#KZ
vless://53fa8faf-ba4b-4322-9c69-a3e5b1555049@www.speedtest.net:80?encryption=none&security=none&sni=redw.pooriam.ir&type=ws&host=redw.pooriam.ir&path=%2Ftelegram%40v2ray_alpha%2F%3Fed%3D2560#US_%20%E6%9B%B4%E5%A4%9A%E7%A6%8F%E5%88%A9TG%40anzhuoapk_30
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
