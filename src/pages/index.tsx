import * as React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";

import * as images from "../images";
import "./index.scss";

const IndexPage: React.FC<PageProps> = () => {
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
      <p className="text-intro">
        2010年
        <br />
        教室里第一次遇见
        <br />
        未曾预想
        <br />
        竟成为彼此生命中的陪伴
      </p>
      <p className="text-intro">
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
      <p className="text-intro">
        2013年 - 2017年
        <br />
        1800多公里的遥不可及，每个假期都格外珍贵
        <br />
        习惯了异地，习惯了告别
        <br />
        但习惯不了一个人的思念
      </p>
      <p className="text-intro">
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
      <p className="text-intro">
        2021年5月21日 我们领证啦
        <br />
        <br />
        当喜欢与合适撞了个满怀
        <br />
        “我们决定陪伴彼此度过漫长岁月”
      </p>
      <p className="text-intro">
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
      <p className="text-intro">
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
      <p className="text-intro">
        携同我们的父母
        <br />
        真挚地邀请您及家人
        <br />
        见证和分享我们的幸福时刻
      </p>
      <p className="text-intro">
        2021年09月27日 12时00分&nbsp;
        <br />
        农历：八月廿一（星期一）
      </p>
    </main>
  );
};

export default IndexPage;
