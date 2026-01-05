const experimentBank = [
    // === 实验 1：IPv6 基本配置与连通性条件 (3.1-3.2 节 & 共同思考) ===
    { type: "single", title: "【实验 1.1】在华为路由器上开启 IPv6 协议栈，必须先在系统视图下执行哪条全局命令？", options: ["ipv6", "ipv6 enable", "ipv6 address auto", "system-view"], answer: [0] },
    { type: "single", title: "【实验 1.1】在接口视图下，使能接口 IPv6 功能并产生链路本地地址的命令是？", options: ["ipv6", "ipv6 enable", "ipv6 address static", "ipv6 mode route"], answer: [1] },
    { type: "single", title: "【实验 1 核心】两台处于不同网段的 PC 若要 Ping 通，除了地址正确外，最关键的条件是？", options: ["配置相同的 DNS", "配置正确的默认网关", "开启 IPv6 报头压缩", "安装抓包软件"], answer: [1] },
    { type: "single", title: "【实验 1.1】接口物理状态为 Up，但协议状态(Protocol)为 Down，最可能的原因是？", options: ["没插网线", "接口未开启 ipv6 enable", "没有配置静态路由", "地址冲突"], answer: [1] },
    { type: "judge", title: "【实验 1 思考】PC 机在没有全球单播地址的情况下，可以利用链路本地地址 Ping 通同一二层网络内的路由器接口。", options: ["正确", "错误"], answer: [0] },
    { type: "single", title: "【实验 1 验证】Ping 跨网段地址返回 'Destination Unreachable'，在路由层面通常意味着？", options: ["目标主机宕机", "缺少到达目标网段的路由或回程路由", "网关地址配错", "物理链路断开"], answer: [1] },
    { type: "single", title: "【实验 1 路由】查看 IPv6 路由表并只显示直连路由的命令是？", options: ["display ipv6 routing-table protocol direct", "display ipv6 neighbors", "display ip interface brief", "display ipv6 routing-table ospfv3"], answer: [0] },
    { 
        type: "single", 
        title: "【实验 1 共同思考】当 PC1 想要 Ping 通 PC2，但路由器只有去程路由而没有回程路由，现象是？", 
        options: ["Request timed out (有去无回)", "Destination Unreachable", "Ping 通但延迟极高", "提示地址冲突"], 
        answer: [0] 
    },

    // === 实验 1：RIPng 与 OSPFv3 配置细节 (3.3-3.4 节) ===
    { type: "single", title: "【实验 1.3】与 IPv4 RIP 不同，RIPng 协议在华为设备上的配置方式是？", options: ["在协议视图下执行 network 命令", "在接口视图下执行 ripng 1 enable", "在系统视图下宣告前缀", "自动使能"], answer: [1] },
    { type: "single", title: "【实验 1.3】RIPng 协议中，Metric（度量值）达到多少代表该路由不可达？", options: ["10", "15", "16", "255"], answer: [2] },
    { type: "single", title: "【实验 1.4】配置 OSPFv3 实验时，必须手动配置 Router-ID，其格式为？", options: ["128位IPv6地址", "32位点分十进制格式 (类似IPv4)", "64位十六进制", "任意字符"], answer: [1] },
    { type: "single", title: "【实验 1.4】在接口视图下，将接口关联到 OSPFv3 进程 1 区域 0 的正确命令是？", options: ["ospfv3 1 area 0", "ospfv3 1 enable area 0", "network ospfv3 area 0", "ospfv3 area 0.0.0.0"], answer: [1] },
    { type: "single", title: "【实验 1.4】OSPFv3 报文的源地址是哪个地址？", options: ["全球单播地址", "链路本地地址", "任播地址", "组播地址"], answer: [1] },

    // === 实验 2：NDP 邻居发现与抓包细节 (全章节涵盖) ===
    { type: "single", title: "【实验 2 报文】在执行重复地址检测 (DAD) 时，发送的 NS 报文其源 IP 地址是？", options: ["::", "FE80::1", "该接口待检测的地址", "FF02::1"], answer: [0] },
    { type: "single", title: "【实验 2 报文】在 NDP 地址解析抓包中，NS (Neighbor Solicitation) 报文的 ICMPv6 Type 是？", options: ["133", "134", "135", "136"], answer: [2] },
    { type: "single", title: "【实验 2 报文】在 NDP 路由发现抓包中，RA (Router Advertisement) 报文的 ICMPv6 Type 是？", options: ["133", "134", "135", "136"], answer: [1] },
    { type: "single", title: "【实验 2 思考】在 NDP 状态机中，已发送 NS 但尚未收到 NA 确认的状态被称为？", options: ["Incomplete", "Reachable", "Stale", "Delay"], answer: [0] },
    { type: "single", title: "【实验 2 思考】在 NDP 状态机中，已收到 NA 确认但尚未经过可达性验证的状态是？", options: ["Incomplete", "Reachable", "Stale", "Delay"], answer: [2] },
    { type: "single", title: "【实验 2 抓包】RA 报文中的 M 标记位(Managed address config)设为 1 表示？", options: ["主机使用 SLAAC", "通过有状态 DHCPv6 获取地址", "通过无状态 DHCPv6 获取 DNS", "禁止分配地址"], answer: [1] },
    { type: "single", title: "【实验 2 抓包】RA 报文中的 A 标记位(Autonomous)设为 1 表示？", options: ["支持无状态地址自动配置", "必须找 DHCP 服务器", "地址有效期无限", "禁用此地址"], answer: [0] },
    { type: "single", title: "【实验 2 验证】主机解析邻居 MAC 地址时，NS 报文的目标 MAC 地址前缀固定为？", options: ["01-00-5E", "33-33", "FF-FF", "00-00"], answer: [1] },
    { type: "single", title: "【实验 2 报文】主机刚接入网络时，发送哪种报文来请求路由器立即发送前缀信息？", options: ["RS (Router Solicitation)", "RA", "NS", "NA"], answer: [0] },
    { type: "judge", title: "【实验 2 现象】主机收到 RA 报文后，会自动将该报文的源地址（链路本地地址）设为默认网关。", options: ["正确", "错误"], answer: [0] },
    { type: "single", title: "【实验 2 思考】IPv6 组播 MAC 地址的前缀是 33:33，其余位来源于 IPv6 组播地址的？", options: ["前 32 位", "后 32 位", "中间 32 位", "全 1"], answer: [1] },
    { type: "judge", title: "【实验 2 思考】处于“暂定 (Tentative)”状态的地址不能处理除 NDP 以外的业务流量。", options: ["正确", "错误"], answer: [0] },
    { 
        type: "single", 
        title: "【实验报告红框】在截图的路由表中，目的地为 FC00:100::1/128，这种掩码长度为 128 的路由属于什么类型？", 
        options: ["网段路由", "默认路由", "主机路由 (Host Route)", "组播路由"], 
        answer: [2] 
    },
    { 
        type: "single", 
        title: "【实验报告红框】观察截图中 OSPFv3 路由的 NextHop，它显示为 FE80::2E0:FCFF:FEE0:44DB，这说明 OSPFv3 默认使用什么地址作为下一跳？", 
        options: ["全球单播地址", "链路本地地址 (Link-Local)", "任播地址", "网关的 MAC 地址"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】在 RA 报文的以太网层，目标 MAC 地址（Dst）通常显示为 33:33:00:00:00:01，这代表什么？", 
        options: ["主机的单播 MAC 地址", "所有节点组播 MAC 地址 (All Nodes)", "所有路由器组播 MAC 地址", "网关的 MAC 地址"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】在 RA 报文展开的 Prefix Information 选项中，'Valid Lifetime' (有效存活时间) 的含义是？", 
        options: ["该前缀可用于 SLAAC 生成地址的总时长", "地址处于首选状态的时长", "路由器在线的时长", "报文的发送间隔"], 
        answer: [0] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】在 RA 报文展开的信息中，'Preferred Lifetime' (首选存活时间) 的作用是？", 
        options: ["超过此时长后地址被立即删除", "超过此时长后地址变为弃用(Deprecated)，不再用于建立新连接", "主机的首选网关寿命", "报文的生存时间(Hop Limit)"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】RA 报文中的 'Prefix' 字段（如 2001:DB8::）和 'Prefix Length'（如 64）共同决定了？", 
        options: ["主机的链路本地地址", "主机生成的全球单播地址的网络部分", "主机的接口 ID", "路由器的 Router-ID"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】在 RA 报文的 Flags 字段中，若 'L' (On-link) 位设为 1，主机收到后会认为？", 
        options: ["该前缀可以用来自动配置 IP", "该前缀属于本地链路，访问该网段目标无需经过网关", "该前缀是动态获取的", "该路由器是主路由器"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】RA 报文的源 IP 地址（Source）通常是路由器的哪个地址？", 
        options: ["全球单播地址", "链路本地地址 (FE80::...)", "未指定地址 (::)", "组播地址"], 
        answer: [1] 
    },
    { 
        type: "judge", 
        title: "【实验报告思考】Valid Lifetime 的数值通常必须大于或等于 Preferred Lifetime。", 
        options: ["正确", "错误"], 
        answer: [0] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】在 RA 报文的 ICMPv6 层，'Cur hop limit' 字段（通常为 64）的作用是？", 
        options: ["限制 RA 报文的传播范围", "告诉主机在发送数据包时默认使用的跳数限制", "路由器的当前负荷", "地址冲突检测的次数"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】如果 RA 报文中的 'Autonomous address-configuration' (A 位) 设为 0，会产生什么后果？", 
        options: ["主机无法上网", "主机不会利用该前缀进行无状态地址自动配置", "主机必须手动配置网关", "路由器不再转发报文"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 抓包】RA 报文中 Dst（目标地址）显示为 33:33:00:00:00:01，这对应的是哪个 IPv6 组播地址？", 
        options: ["FF02::1 (所有节点)", "FF02::2 (所有路由器)", "FF02::1:FF00:1", "FE80::1"], 
        answer: [0] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】图 19 中红框圈出的 NS 和 NA 报文序列，主要实现了什么功能？", 
        options: [
            "重复地址检测 (DAD)", 
            "地址解析 (获取邻居的 MAC 地址)", 
            "前缀重新编址", 
            "路由器发现"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】在图 19 的抓包记录中，RS 报文的目的地址显示为 ff02::1，该组播地址代表？", 
        options: [
            "本链路上的所有路由器 (All Routers)", 
            "本链路上的所有节点 (All Nodes)", 
            "被请求节点组播地址", 
            "DHCP 服务器组播地址"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】标准协议规定 RS 的目的地址通常应为 ff02::2，但在实验中若发往 ff02::1，其主要意图是？", 
        options: [
            "为了向邻居请求 MAC 地址", 
            "为了确保链路内所有节点及潜在路由器都能收到该接入请求", 
            "为了进行重复地址检测", 
            "为了节约链路带宽"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】图 24 中蓝色框住的一对 NS/NA 报文，在双方已知 MAC 地址的情况下，主要提供什么功能？", 
        options: [
            "重复地址检测 (DAD)", 
            "邻居可达性检测 (NUD)", 
            "获取新的全球前缀", 
            "建立 OSPF 邻居"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】图 24 这种 NUD 交互成功后，该邻居在路由器表项中的状态会转变为？", 
        options: ["Incomplete", "Stale", "Reachable (可达)", "Delay"], 
        answer: [2] 
    },

    // === 针对图 27：Tracert 交互原理专项 ===
    { 
        type: "single", 
        title: "【实验 2 思考】图 27 中，Tracert 发出的 UDP 报文序列，其跳数限制（Hop Limit）呈现什么规律？", 
        options: [
            "始终固定为 64", 
            "从 1 开始逐次递增 (1, 2, 3...)", 
            "从 255 开始递减", 
            "随机生成"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】为什么 Tracert 最终能从目标主机收到“端口不可达”消息？", 
        options: [
            "因为目标主机的防火墙拦截了请求", 
            "因为 Tracert 使用了极大的、无程序监听的 UDP 目的端口", 
            "因为目标主机的 IPv6 功能未开启", 
            "因为路径中发生了网络拥塞"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】在 Tracert 过程中，中间路由器因为 Hop Limit 减为 0 而丢弃报文时，回送的 ICMPv6 消息是？", 
        options: [
            "目标不可达 (Destination Unreachable)", 
            "超时 (Time Exceeded)", 
            "数据包过大 (Packet Too Big)", 
            "参数错误"
        ], 
        answer: [1] 
    },

    // === 实验 3 路由表符号补遗 ===
    { 
        type: "single", 
        title: "【实验报告红框】在华为 IPv6 路由表中，'TunnelID' 字段在普通以太网实验中通常显示为 0x0，这代表？", 
        options: [
            "路由失效", 
            "该路由不涉及隧道转发", 
            "接口处于备份状态", 
            "路由权值为 0"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验报告红框】在查看路由表时，'Cost' 字段对于直连路由来说，其默认数值通常是？", 
        options: ["0", "1", "10", "100"], 
        answer: [0] 
    },
    { 
        type: "single", 
        title: "【实验报告红框】如果 Protocol 字段显示为 'Static'，Flags 显示为 'RD'，说明该静态路由？", 
        options: [
            "是直连路由", 
            "已下发到 FIB 且下一跳需要递归查询", 
            "因为配置错误而失效", 
            "是默认路由"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】在以太网环境中（MTU=1500），一个 IPv6 分片包除去基本报头（40B）和分片头（8B），其最大可用净荷长度是多少字节？", 
        options: ["1500", "1460", "1452", "1440"], 
        answer: [2] 
    },
    { 
        type: "single", 
        title: "【实验 2 规则】IPv6 分片时，除了最后一个分片，其余分片的净荷长度必须满足什么条件？", 
        options: ["必须是 4 字节的倍数", "必须是 8 字节的倍数", "必须等于 MTU", "没有特殊要求"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 思考】在 IPv6 分片报头中，用于标识后面是否还有更多分片的标志位是？", 
        options: ["A 标志", "M 标志 (More Fragments)", "L 标志", "S 标志"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 核心】在实验使用的千兆以太网口网络中，标准的 MTU（最大传输单元）是多少字节？", 
        options: ["1480", "1500", "1518", "9000"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 2 核心】在 MTU=1500 的环境下，执行 ping -s 1453 命令，Wireshark 抓包是否分片，若是则显示的两个分片帧长度分别是？", 
        options: ["是，1500 和 49", "是，1510 和 75", "是，1496 和 61", "不分片"], 
        answer: [1] 
    },

    // === 实验 3：OSPFv3 路由表符号与 LSA 细节 (全章节涵盖) ===
    { type: "single", title: "【实验 3 路由表】在华为 VRP 路由表中，Flags 字段出现的 'D' 代表？", options: ["Download to FIB (已下发到转发信息库)", "Down (路由失效)", "Direct (直连)", "Default (默认)"], answer: [0] },
    { type: "single", title: "【实验 3 路由表】在路由表 Flags 字段中出现的 'R' 字符通常表示？", options: ["Remote (远程)", "Relay (迭代路由)", "Recursive (递归查询)", "Reject (拒绝)"], answer: [1] },
    { type: "single", title: "【实验 3 符号】在接口状态查询中，Protocol 状态显示为 'UP(s)'，其中的 '(s)' 代表？", options: ["Static (静态)", "Spoofing (处于虚链接或按需链路状态)", "Standby (备用)", "Secure (安全)"], answer: [1] },
    { type: "single", title: "【实验 3 思考】在广播型网络中，OSPFv3 选举 DR/BDR 的重要参考参数是？", options: ["IPv6地址", "接口优先级 (Priority)", "MAC地址", "物理端口号"], answer: [1] },
    { type: "single", title: "【实验 3 思考】若接口 OSPFv3 优先级 (Priority) 设为 0，意味着该路由器？", options: ["最高优先权", "不参选 DR/BDR", "参选 BDR", "备用节点"], answer: [1] },
    { type: "single", title: "【实验 3 验证】查看 OSPFv3 邻居状态是否成功建立（Full）的命令是？", options: ["display ospfv3 peer", "display ospfv3 lsdb", "display ipv6 neighbors", "display current-configuration"], answer: [0] },
    { type: "single", title: "【实验 3 报文】OSPFv3 建立邻居过程中，Hello 报文的目标组播地址是？", options: ["FF02::1", "FF02::5", "FF02::6", "FF02::9"], answer: [1] },
    { type: "single", title: "【实验 3 LSA】在 OSPFv3 中，Link-LSA (Type 8) 的泛洪范围是？", options: ["本地链路 (Link-Local scope)", "区域 (Area scope)", "AS 范围", "邻居间"], answer: [0] },
    { type: "single", title: "【实验 3 LSA】哪种 LSA 解决了 OSPFv2 中 Type 1/2 无法携带 IPv6 前缀的问题？", options: ["Type 8", "Type 9 (Intra-Area-Prefix-LSA)", "Type 5", "Type 7"], answer: [1] },
    { type: "judge", title: "【实验 3 验证】OSPFv3 可以在没有全球单播地址的环境下，仅靠链路本地地址完成拓扑计算并同步 LSDB。", options: ["正确", "错误"], answer: [0] },
    { 
        type: "single", 
        title: "【实验 3 思考】查看路由表发现目的地为 2001:DB8:1::/64，Protocol 标记为 OSPFv3，该路由的下一跳通常是？", 
        options: ["对端接口的全球单播地址", "对端接口的链路本地地址 (FE80::...)", "本端的 Loopback 地址", "::1"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 3 思考】OSPFv3 报文头部相比 v2 移除了校验和字段，其校验由谁负责？", 
        options: ["由 IPv6 基本报头负责", "由物理层协议负责", "OSPFv3 依然自己负责，只是字段位置变了", "不需要校验"], 
        answer: [0] 
    },
    { 
        type: "single", 
        title: "【实验 BGP】在 display bgp ipv6 routing-table 输出中，路由条目前方的 '*' 符号代表？", 
        options: ["最优路由 (Best)", "有效路由 (Valid)", "默认路由", "正在删除的路由"], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 BGP】在 display bgp ipv6 routing-table 输出中，路由条目前方的 '>' 符号代表？", 
        options: ["有效路由 (Valid)", "最优路由 (Best)，且该路由会被下发到全局路由表", "外部 BGP 路由", "静态导入路由"], 
        answer: [1] 
    },
    { 
        type: "judge", 
        title: "【实验 BGP】只有在 BGP 路由表中同时标记为 '*>' 的路由条目，才具备被加入全局 IPv6 路由表的资格。", 
        options: ["正确", "错误"], 
        answer: [0] 
    },

    // === 路由表关系专项 ===
    { 
        type: "single", 
        title: "【实验 BGP】关于 BGP4+ 路由表与普通 IPv6 路由表的关系，下列描述正确的是？", 
        options: [
            "两个表完全独立，互不影响", 
            "BGP 表中的最优路由会尝试下发到全局 IPv6 路由表", 
            "全局路由表中的路由无法手动引入 BGP 表", 
            "BGP 路由的优先级（255）比直连路由（0）高"
        ], 
        answer: [1] 
    },
    { 
        type: "single", 
        title: "【实验 BGP】在 BGP 路由表中，若一条路由只有 '*' 而没有 '>'，最可能的原因是？", 
        options: [
            "下一跳不可达", 
            "路由不是最优的（例如 AS-Path 较长或有其他更优路径）", 
            "配置了错误的 Router ID", 
            "TCP 连接未建立"
        ], 
        answer: [1] 
    },

    // === BGP 基础操作 ===
    { 
        type: "single", 
        title: "【实验 BGP】在华为路由器上，使能 BGP4+ 协议并进入 IPv6 地址族视图的正确顺序是？", 
        options: [
            "bgp [AS号] -> ipv6-family unicast", 
            "ipv6 -> bgp [AS号]", 
            "ospfv3 -> address-family ipv6", 
            "interface g0/0/0 -> bgp enable"
        ], 
        answer: [0] 
    },
    // === 综合实验与维护操作 ===
    { type: "single", title: "【实验操作】查看华为路由器接口的 IPv6 地址配置及简报状态的快捷命令是？", options: ["display ipv6 interface brief", "display ip interface brief", "display current-configuration", "display ipv6 routing-table"], answer: [0] },
    { type: "single", title: "【实验操作】华为路由器进入系统视图（全局配置模式）的命令是？", options: ["enable", "configure terminal", "system-view", "sysname"], answer: [2] },
    { type: "single", title: "【实验操作】要删除一条错误的配置，通常在原命令前加哪个关键字？", options: ["delete", "remove", "undo", "no"], answer: [2] },
    { type: "single", title: "【实验操作】华为设备重启 OSPFv3 进程以重新收敛的命令是？", options: ["reset ospfv3 1 process", "undo ospfv3 1", "restart ospf", "clear route"], answer: [0] },
    { type: "single", title: "【维护操作】查看 IPv6 邻居缓存表（类似 ARP 表）的命令是？", options: ["display ipv6 neighbors", "display ipv6 routing-table", "display ndp", "display mac-address"], answer: [0] },
    { type: "judge", title: "【实验总结】IPv6 实验证明，取消广播并使用组播进行地址解析，提高了链路效率并减轻了非目标主机的处理负担。", options: ["正确", "错误"], answer: [0] }
];