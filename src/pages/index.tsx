import * as React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";

import * as images from "../images";
import "./index.scss";

const IndexPage: React.FC<PageProps> = () => {
  const mapContainerRef = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const initMap = () => {
      return new TMap.Map(mapContainerRef.current, {
        center: new TMap.LatLng(37.525263, 111.155715),
        zoom: 18,
        showControl: false,
      });
    };
    if (window.TMap) {
      const map = initMap();
      return () => {
        map.destroy();
      };
    }
    const mapRef = { current: null };
    window.onTMapLoaded = () => {
      delete window.onTMapLoaded;
      mapRef.current = initMap();
    };
    return () => {
      mapRef.current?.destroy();
      delete window.onTMapLoaded;
    };
  }, []);

  return (
    <main>
      <Helmet>
        <title>贾赛奇 & 薛佳盈的婚礼邀请函</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <script src="https://map.qq.com/api/gljs?v=1.exp&key=WRTBZ-6RPEP-J5LDB-LEUAY-SS26E-ZWFEU&callback=onTMapLoaded"></script>
      </Helmet>
      <h1 className="title">Save the date丨贾赛奇 & 薛佳盈的婚礼邀请函</h1>
      <p className="subtitle">
        贾先森 & 薛可爱<span className="date">2021.09.27</span>
      </p>
      <div className="topic-box">
        <h3>收录于话题</h3>
        <p className="topics">＃爱情 ＃生活 ＃青春 ＃唯美 ＃纪念 ＃婚礼</p>
      </div>
      <img src={images.p1} />
      <p className="text-hello">
        “Hi ～ 这是一封心意满满的
        <br />
        婚礼邀请函
        <br />
        点击音乐，边听边看
        <br />
        一起分享我们的喜悦吧”
      </p>
      <div className="music-box">
        <div className="info">
          <h3>Perfect ♫</h3>
          <p>Kurt Hugo Schneider & Emma Heesters</p>
        </div>
        <img className="cover" src={images.musicCover} />
      </div>
      <img className="separator-flower" src={images.flowerSeparator} />
      <img src={images.welcomeToOurWedding} />
      <p className="text-intro">
        当你收到这份请柬的时候
        <br />
        我们的婚礼已经进入倒计时啦～
        <br />
        <br />
        这是一场人生中为数不多的相聚
        <br />
        是千里迢迢的奔赴
        <br />
        是不计得失的支持
      </p>
      <img className="p2" src={images.p2} />
      <p className="text-intro">
        故事的开头
        <br />
        往往是两条平行线
        <br />
        是经过、是交错，谁向谁靠近
        <br />
        谁闯入了谁的故事情节
        <br />
        放弃了周遭的你你我我
        <br />
        决定了身边的从今往后
      </p>
      <img className="separator-we-are-married" src={images.weAreMarried} />
      <p className="text-intro">贾以时日，佳偶天成</p>
      <div className="you-and-me-box">
        <div className="me">
          <div className="portrait">
            <img src={images.myPortrait} />
            <span className="xi">囍</span>
          </div>
          <div className="name">
            <h3 className="serif">THE GROOM</h3>
            <p>新郎 | 贾赛奇</p>
          </div>
        </div>
        <div className="you">
          <div className="portrait">
            <img src={images.yourPortrait} />
            <span className="xi">囍</span>
          </div>
          <div className="name">
            <h3 className="serif">THE BRIDE</h3>
            <p>新娘 | 薛佳盈</p>
          </div>
        </div>
      </div>
      <div className="title-section">
        <p className="no">01</p>
        <p className="text">关于我们</p>
        <img className="separator-title" src={images.titleSeparator} />
      </div>
      <p className="text-intro large-margin">
        2010年
        <br />
        教室里第一次遇见
        <br />
        未曾预想
        <br />
        竟成为彼此生命中的陪伴
      </p>
      <div className="horizontal-images">
        <img className="p3" src={images.p3} />
        <img className="p4" src={images.p4} />
      </div>
      <p className="text-intro large-margin">
        2011年
        <br />
        最心动的就是
        <br />
        你在宿舍楼下等我的样子
        <br />
        白衣青树还有一只小橘猫
        <br />
        我奔向你就像奔向未来
      </p>
      <img className="p5" src={images.p5} />
      <p className="text-intro large-margin">
        2013年 - 2017年
        <br />
        1800多公里的遥不可及，每个假期都格外珍贵
        <br />
        习惯了异地，习惯了告别
        <br />
        但习惯不了一个人的思念
      </p>
      <img className="p6" src={images.p6} />
      <img className="p7" src={images.p7} />
      <p className="text-intro large-margin">
        <img className="separator-reed" src={images.reedSeparator} />
        <br />
        最终
        <br />
        我们跑赢了时间，打败了距离
        <br />
        爱情不像电影
        <br />
        不会有那么多的不期而遇
        <br />
        既然遇到
        <br />
        就想这样一直牵着你的手不放开
        <br />
        <br />
        比起恋人我们更像是地球上的另一个自己
        <br />
        拥有不需磨合的默契和一致的三观
        <br />
        我们确定，他 / 她就是对的人
      </p>
      <div className="horizontal-images">
        <img className="p8" src={images.p8} />
        <img className="p9" src={images.p9} />
        <img className="p10" src={images.p10} />
      </div>
      <p className="text-intro large-margin">
        2021年5月21日 我们领证啦
        <br />
        <br />
        当喜欢与合适撞了个满怀
        <br />
        “我们决定陪伴彼此度过漫长岁月”
      </p>
      <img className="p11" src={images.p11} />
      <p className="text-intro large-margin">
        从此，一屋 两人 三餐 四季
        <br />
        喜乐有分享 共度岁月长
        <br />
        <br />
        今后的日子里我们将
        <br />
        <span className="serif">For better for worse</span>
        <br />
        荣辱与共
        <br />
        <span className="serif">To love to cherish</span>
        <br />
        生死相依
      </p>
      <div className="horizontal-images">
        <img className="p12" src={images.p12} />
        <img className="p13" src={images.p13} />
      </div>
      <div className="horizontal-images">
        <img className="p14" src={images.p14} />
        <img className="p15" src={images.p15} />
      </div>
      <p className="text-intro large-margin">
        山水一程
        <br />
        风雨一更
        <br />
        三生有幸
        <br />
        愿我们相逢永如初
        <br />
        愿我们深情共白头
      </p>
      <img className="p16" src={images.p16} />
      <img className="p17" src={images.p17} />
      <div className="title-section">
        <p className="no">02</p>
        <p className="text">关于婚礼</p>
        <img className="separator-title" src={images.titleSeparator} />
      </div>
      <img className="p18" src={images.p18} />
      <p className="text-intro">
        <img className="red-xi" src={images.redXi} />
        <br />
        <span className="inviter-name">贾赛奇 & 薛佳盈</span>
        <br />
        携同我们的父母
        <br />
        真挚地邀请您及家人
        <br />
        见证和分享我们的幸福时刻
      </p>
      <div className="subtitle-section">
        <p className="en">WEDDING TIME</p>
        <p className="text">婚礼时间</p>
      </div>
      <p className="text-intro">
        2021年09月27日 12时00分
        <br />
        农历：八月廿一（星期一）
      </p>
      <img className="calendar" src={images.calendar} />
      <div className="subtitle-section">
        <p className="en">LOCATION</p>
        <p className="text">婚礼地点</p>
      </div>
      <p className="text-intro">
        党校餐厅（吕梁市委党校院内）
        <br />
        滨河北中路32号
        <br />
        山西省·吕梁市·离石区
      </p>
      <div className="location-map" ref={mapContainerRef}></div>
      <div className="subtitle-section">
        <p className="en">PROCESS</p>
        <p className="text">流程</p>
      </div>
      <p className="text-intro">
        08:00 迎接新娘
        <br />
        10:00 宾客签到
        <br />
        11:00 婚礼仪式
        <br />
        12:00 婚礼午宴
      </p>
      <img className="process-decorator" src={images.processDecorator} />
      <div className="p19-20">
        <img className="p19" src={images.p19} />
        <img className="p20" src={images.p20} />
      </div>
      <p className="text-intro">
        年少的你
        <br />
        是我整个青春的阳光
        <br />
        未来的你
        <br />
        是我一生的欢喜
        <br />
        其实
        <br />
        人生只要两次幸运就好
        <br />
        一次遇见你,一次走到底
        <br />
        <br />
        <img className="separator-reed" src={images.reedSeparator} />
      </p>
      <img className="p21" src={images.p21} />
      <div className="horizontal-images">
        <img className="p22" src={images.p22} />
        <img className="p23" src={images.p23} />
      </div>
      <p className="text-intro large-margin">
        愿所爱皆可得 所想皆如愿
        <br />
        <br />
        我们的故事未完待续……
        <br />
        <img className="hugging-separator" src={images.huggingSeparator} />
        <br />
        <br />
        感谢你/不远千里/为我们而来
        <br />
        <br />
        婚礼短暂，情意长存
        <br />
        好久不见，顺问秋安
        <br />
        2021 / 09 / 27
        <br />
        我们，婚礼见
      </p>
    </main>
  );
};

export default IndexPage;
